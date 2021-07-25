import React, {useState, useEffect} from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { IProductCar } from '../../interfaces/IProductCar';
import IProduct from '../../model/IProduct';

import { MainFormCarProduct , BodyCarProduct } from './style';

const CarProduct: React.FC = () => {
    const [product, setProduct] = useState<IProductCar[]>([]);
    useEffect(() => {
        const metaData:IProductCar[] = JSON.parse(localStorage.getItem('ProductsCar') || '[]');
        setProduct(metaData);
        console.log(metaData);
    },[])

  return <div>
    <Header/>
    <MainFormCarProduct>
        <h1>Meu Carrinho</h1>
        <div className="container-car">
            <header>
                <div className="date">
                    <p>Data do pedido:</p>
                    <h2>25/02/2021</h2>
                </div>
                <div className="price">
                    <p>Total:</p>
                    <h2>R$ 200,00</h2>
                </div>
                <div className="purchase">
                    <button onClick={(e:any)=>{e.preventDefault();}} 
                        className="btn-purchase"> COMPRAR</button>
                </div>
            </header>
            <BodyCarProduct>
                {product.map((p, index) => 
                    <div key={index} className="product-card">
                        <div className="card-part01">
                            <img src={p.image} alt="imagem ilustrativa"/>
                        </div>  
                        <div className="card-part02">
                            <h1>{p.name}</h1>
                            <p>{p.description}</p>
                        </div>
                        <div className="card-part03">
                            <h3>Cor:</h3>
                            <div className={`item-color ${p.color}`}></div>
                            <h3>Tamanho:</h3>
                            <span>{p.length}</span>
                            <h3>Quantidade de itens:</h3>
                            <span>{p.qtdProduct}</span>
                            <h3>Valor:</h3>
                            <span>R$ {p.price.toFixed(2)}</span>
                            <h3>Total:</h3>
                            <span>R$ {(p.price*p.qtdProduct).toFixed(2)}</span>
                        </div>    
                    </div>
                )}
            </BodyCarProduct>
        </div>
        
    </MainFormCarProduct>
    <Footer/>

  </div>;
}

export default CarProduct;