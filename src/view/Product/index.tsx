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


const Product: React.FC = () => {
  const starsAux =[1,2,3,4,5];
  const [qtdProduct, setQtdProduct]= useState<number>(1);
  const [colorProduct, setColorProduct]= useState<number>(0);
  const [lengthProduct, setLengthProduct]= useState<number>(0);

    const history = useHistory();
    const  { id }:any = useParams();
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
    useEffect(() => {
    api.get(`products/${id}`)
    .then((response) => {
      setProduct(response.data);
      // console.log(response.data);
    })
    .catch((error) => {
      history.push('/')
    })
      
    },[id])
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
            <div className="cep-product">
              
            </div>
            <button onClick={(e:any)=>{e.preventDefault()}} className="add-product-car"> ADICIONAR AO CARRINHO</button>
            <button onClick={(e:any)=>{e.preventDefault()}} className="buy-product"> COMPRAR</button>

      </div>
    </ProductDescription>

    </section>

    
    <Footer/>
  </div>;
}

export default Product;