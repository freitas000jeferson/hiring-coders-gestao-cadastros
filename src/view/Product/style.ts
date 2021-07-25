import styled from "styled-components";

export const ProductDescription = styled.section`
display: flex;
flex-direction:row;
justify-content:center;
align-items: stretch;
flex-wrap: wrap;
gap:20px;
margin: auto;

.desc-card{
    background-color: #fff;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.55);
    padding:20px;
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    flex-wrap: wrap;
    .card-part01{
        img{
            /* background-color: #ff0; */
            width:540px;
            height: 540px;
            object-fit: contain;
        }
    }
    .card-part02{
        /* background-color: #f00; */
        width:300px;
        h1{
            font-size:40px;
            text-align: left;
        }
    }
}
.desc-price{
    background-color: #fff;
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.55);
    width:340px;
    padding:20px;
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: stretch;
    gap: 10px;

    h1{ 
        font-size: 25px;
        font-weight:400;
        span{ 
            font-size: 30px;
            font-weight:700;
        }
    }
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
.item-color-selected{
    border: 4px solid #fff;
}
.content{
    display: flex;
    flex-direction: column;
    gap:10px;
}
.color-product,.length-product, .qtd-product{
    display: flex;
    flex-direction: row;
    justify-content:start;
    gap: 10px;
}
.btn-update-qtd{
    width:30px;
    height:30px;
    padding-bottom: 6px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content:center;
    align-items: center;
    border:none;
    color:#fff;
    font-weight: 700;
    font-size: 25px;
    background-color: #00E068;
}
.item-length{
    border: 1px solid #5e5e5e;
    padding: 5px;
}
.item-length-selected{
    border: 1px solid #00E068;
    background-color: #00E068;
    color: #fff;
    font-weight: 700;
    padding: 5px;
}

@media only screen and (max-width: 625px) {
    .card-part01{
        img{
            max-width:400px;
            max-height: 400px;
            object-fit: contain;
        }
    }
}
`;