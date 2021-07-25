import './index.css';

import React,{
  useState, useEffect
} from 'react';
import {useParams} from 'react-router-dom'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import IProduct from '../../model/IProduct';
import api from '../../services/HttpService';
import { ProductDescription } from './style';
import { useHistory } from 'react-router-dom';
import { ListRate } from '../../components/Card/style';
import { IProductCar } from '../../interfaces/IProductCar';


const Product: React.FC = () => {
  const starsAux =[1,2,3,4,5];
  const [qtdProduct, setQtdProduct]= useState<number>(1);
  const [colorProduct, setColorProduct]= useState<number>(0);
  const [lengthProduct, setLengthProduct]= useState<number>(0);
  const [cep, setCep] = useState<string>('');
  const [dateIni, setDateIni] = useState<Date>(new Date());
  const [dateEnd, setDateEnd] = useState<Date>(new Date());
  
  const history = useHistory();
  const  { id }:any = useParams();
  const [car, setCar]=useState<IProductCar>();
  const [product, setProduct] = useState<IProduct>( {
    id: 0,
    name: '',
    description:"",
    price: 200.0,
    length: [],
    color: [],
    rate: 0,
    deliveryDate: 0,
    isRebate: true,
    image: '',
  },);

  const addCar=()=> {
    setCar({
      id:product.id,
      name:product.name ,
      description:product.description ,
      price:product.price ,
      rate:product.rate ,
      deliveryDate:product.deliveryDate ,
      isRebate:product.isRebate ,
      image:product.image,
      length: lengthProduct ,
      color: product.color[colorProduct] ,
      qtdProduct:qtdProduct,
      cep: cep,
    });
    console.log(car)
    saveStorage();
  }

  const saveStorage=()=>{
    const metaData:any = JSON.parse(localStorage.getItem('ProductsCar') || '[]');
    if(metaData.length===0){
      console.log(metaData);
      localStorage.setItem(`ProductsCar`, JSON.stringify([]));
    }
    let hasCar=false;
    const data={
      id:product.id,
      name:product.name ,
      description:product.description ,
      price:product.price ,
      rate:product.rate ,
      deliveryDate:product.deliveryDate ,
      isRebate:product.isRebate ,
      image:product.image,
      length: lengthProduct ,
      color: product.color[colorProduct] ,
      qtdProduct:qtdProduct,
      cep: cep,
    };
    metaData.forEach((element:IProductCar) => {
      if(element.id===product.id){
        element.length=lengthProduct;
        element.color=  product.color[colorProduct] ;
        element.qtdProduct= qtdProduct;
        element.cep=  cep;
        hasCar=true;
      }
    });
    if(!hasCar) { metaData.push(data); }
    localStorage.setItem(`ProductsCar`, JSON.stringify(metaData));
    // const storage= JSON.stringify(data);
    // localStorage.setItem(`@ProductCar-${product.id}`, storage);

  }

  useEffect(() => {
    api.get(`products/${id}`)
    .then((response:any) => {
      setProduct(response.data);
      setDateIni(new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()+product.deliveryDate));
      setDateEnd(new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()+product.deliveryDate+10));

    })
    .catch((error:any) => {
      history.push('/')
    })
    
  },)
  
  return <div>
    <Header/>
    <section className="container">
    <ProductDescription>
      <div className="desc-card">
        <div className="card-part01">
          <img src={product.image} alt="imagem ilustrativa"/>
        </div>
        <div className="card-part02">
          <h1>{product.name}</h1>
          <ListRate>
            {
              starsAux.map((star, index) =>{
                  if(index<product.rate)
                      return <span className="fa fa-star star star-checked"></span>
                  return <span className="fa fa-star star"></span>
              })
            }
          </ListRate>
          <p>{product.description}</p>
          </div>
      </div>
      <div className="desc-price">
            <h1 >
              Por: <span className="price-product">R$ {product.price.toFixed(2)}</span>
            </h1>
            <div className=" content ">
              <label className="title">
                  Selecione a cor:
              </label>
              <div className="color-product">
                {product.color.map((item, index)=>
                  <div onClick={(e:any) =>{e.preventDefault(); setColorProduct(index) }} className={`item-color ${item} ${colorProduct===index?'item-color-selected':''}`}>
                    
                  </div>
                )}
              </div>
            </div>
            <div className=" content ">
              <label className="title">
                  Selecione o tamanho:
              </label>
              <div className="length-product">
              {product.length.map((item, index)=>
                  <div onClick={(e:any) =>{e.preventDefault(); setLengthProduct(index) }} className={`item-length  ${lengthProduct===index?'item-length-selected':''}`}>
                    {item}
                  </div>
                )}
              </div>
            </div>
            <div className=" content ">
              <label className="title">
                  Quantidade de itens:
              </label>
              <div className="qtd-product">
                <button className="btn-update-qtd" 
                  onClick={(e:any) =>{e.preventDefault();  if(qtdProduct>0)setQtdProduct(qtdProduct-1) }}
                > - </button>
                <h3>{qtdProduct}</h3>
                <button className="btn-update-qtd"
                  onClick={(e:any) =>{e.preventDefault(); setQtdProduct(qtdProduct+1) }}
                > + </button>

              </div>
            </div>
            <div className="content">
              <label className="title">
                  Digite seu cep:
              </label>
              <input type="text" className="cep-input" placeholder="cep" value={cep} 
                onChange={e => setCep(e.target.value)}/>
                
                  <div className="cep-product">
                    <p>receba entre </p>
                    <h4>{((dateIni.getDate() )) + "/" + ((dateIni.getMonth() + 1)) + "/" + dateIni.getFullYear()}
                      <span> a </span>
                    {((dateEnd.getDate() )) + "/" + ((dateEnd.getMonth() + 1)) + "/" + dateEnd.getFullYear()}
                     </h4>
                  </div>
                 
            </div>
            <button onClick={(e:any)=>{e.preventDefault(); addCar();}} 
              className="add-product-car"> ADICIONAR AO CARRINHO</button>
            <button onClick={(e:any)=>{e.preventDefault(); history.push(`/create-account`);}} 
              className="buy-product"> COMPRAR</button>

      </div>
    </ProductDescription>

    </section>

    
    <Footer/>
  </div>;
}

export default Product;