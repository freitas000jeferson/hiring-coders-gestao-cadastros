import React, {useState, useEffect} from 'react';
import "./index.css";
import { SliderOffersApp } from './style';
import Card  from '../Card';
import IProduct from '../../model/IProduct';
import api from '../../services/HttpService'

const HeaderOffers: React.FC = () => {

  const [products, setProducts]=useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products/offers')
      .then((response:any) => {
        setProducts(response.data);
        // console.table(products);
      })
      .catch((error:any) => {
        console.log("Caiu aqui")
      })
  },[]);
  
  return <><SliderOffersApp>
    <header>
      Aproveite as nossas melhores ofertas!!!
    </header>
    <section className="list-products-offers">
      {
        products.map((p, index) => 
          <Card key={index} {...p}/>
        )
      }
    </section>
    </SliderOffersApp>
    </>;
}

export default HeaderOffers;