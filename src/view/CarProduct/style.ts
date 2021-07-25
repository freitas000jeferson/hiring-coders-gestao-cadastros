import styled from "styled-components";
 
export const MainFormCarProduct:any=styled.div`
    display:flex;
    flex-direction:column;
    align-items: stretch;
    padding: 10px 120px;
    h1{ 
        font-size:28px;
        margin:10px 0;
    }
    .container-car{
        box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.55);
        display: flex;
        flex-direction:column;
        align-items: stretch;
        margin: 10px 0;
        header{
            padding: 20px;
            background-color:#475D6D;
            display: flex;
            flex-direction: row;
            justify-content:space-between;
            gap: 15px;
        }
        p,h2{color:#fff;}
        .price{
            flex-grow: 1;
        }
        p{
            font-size:14px;
        }

        .btn-purchase{
            border: 2px solid #00E068;
            color: #fff;
            background-color: #00E068;
            padding: 2px 25px;
            border-radius: 4px;
            transition: 600ms;
        }
        .btn-purchase:hover,
        .btn-purchase:focus {
            box-shadow: inset 0 -3.25em 0 #fff;
            color: #00E068;
        }
        .btn-delete{
            border: 2px solid #FF0059;
            color: #fff;
            background-color: #FF0059;
            padding: 2px 25px;
            border-radius: 4px;
            transition: 600ms;
        }
        .btn-delete:hover,
        .btn-delete:focus {
            box-shadow: inset 0 -3.25em 0 #fff;
            color: #FF0059;
        }
    }
    @media only screen and (max-width: 625px) {
        padding:0 40px;
    }
`;
 
 
export const BodyCarProduct:any=styled.div`
    padding:20px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 15px;
    .product-card{
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        flex-wrap: wrap;
        gap: 10px;
        padding-bottom: 10px;
        border-bottom: 2px solid #5e5e5e;
        p{
            color:#5e5e5e;
        }
        .card-part01{
            img{
                /* background-color: #ff0; */
                width:500px;
                height: 500px;
                object-fit: contain;
            }
        }
        .card-part02{
            width: 350px;
            
        }
        .card-part03{
            width: 300px;
            display: flex;
            flex-direction:column;
            gap: 10px;
            h3{
                font-weight: 500;
            }
            span{
                font-size:20px;
                font-weight: 700;

            }
            .item-color{
                width:25px;
                height:25px;
                border-radius: 50%;
                box-shadow: 1px 1px 10px #5e5e5e;
            }
            .red{
                background-color: #FF0059;
                border: 3px solid #FF0059;
            }
            .blue{
                background-color: #00B5FF;
                border: 3px solid #00B5FF;
            }
            .green{
                background-color: #00E068;
                border: 3px solid #00E068;
            }
        }
    }

    @media only screen and (max-width: 625px) {
    .card-part01{
        img{
            max-width:300px;
            max-height: 300px;
            object-fit: contain;
        }
    }
}
`;