import React,{useState, useEffect} from 'react';
// import routes from '../../config/routes';
import IProduct from '../../model/IProduct';
import { useHistory } from "react-router-dom";

import { CardContainer,InfoRabate,Infos,ListRate } from './style';

const Card = (props:IProduct) => {
    let history = useHistory();
    const [data, setData]= useState<IProduct>({
            id: 1,
            name: "0",
            description: "",
            price: 0.00,
            length: [],
            color: [],
            rate: 0,
            deliveryDate: 0,
            isRebate: true,
            image:"",
    });
    useEffect(() => {
        setData(props);
    },[props]);
    const starsAux =[1,2,3,4,5];



    return <CardContainer key={data.id.toString()}
        onClick={(e:any)=>{
            e.preventDefault();
            history.push(`/product/${data.id}`);
        }
        }>

        {
            data.isRebate?
            (<InfoRabate>
                oferta do dia
            </InfoRabate>):(<></>)
        }
        <Infos>
            <div className="image-product">
            <img src={data.image} width="260" alt="imagem ilustrativa"/>
            </div>
            <h2>{data.name}</h2>
            <ListRate>
                {
                    starsAux.map((star, index) =>{
                        if(index<data.rate)
                            return <span className="fa fa-star star star-checked"></span>
                        return <span className="fa fa-star star"></span>
                    })
                }
            </ListRate>
            <h1>R$ {data.price.toFixed(2)}</h1>
            <p>em até 10x {(data.price/10).toFixed(2)} s/juros</p>

        </Infos>
    </CardContainer>;
}

export default Card;