import React,{useState, useEffect} from 'react';
import {MainContainer} from './style'
import  imageoffers from "../../assets/svg/imageoffers.svg";
import IProduct from '../../model/IProduct';
import Card from '../Card';
import api from '../../services/HttpService';

const ListProducts: React.FC = () => {
  const [products, setProducts]=useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products/')
      .then((response:any) => {
        setProducts(response.data);
        // console.table(products);
      })
      .catch((error:any) => {})
  },[]);

  return <MainContainer>
      <div>
      <img src={imageoffers} alt="ofertas" className="image-title" />
      </div>
      <div className="list-products">
        {
          products.length>0?
          products.map((p, index) => 
            <Card key={index} {...p}/>
          ):''
        }
      </div>
    
  </MainContainer>;
}

export default ListProducts;