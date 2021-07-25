import styled from 'styled-components'
export const SliderOffersApp:any= styled.div`
    margin-top:10px;
    min-height: 550px;
    padding: 20px 0;
    background: linear-gradient(180deg, #2BAFE6 0%, 
    rgba(82, 191, 235, 0.484375) 81.77%, 
    rgba(104, 207, 249, 0) 100%);
    display: flex;
    flex-direction: column;
    gap: 25px;
    /* overflow-y: hidden; */
    ::-webkit-scrollbar {
        display: none;
    }
    header{ 
        display:flex;
        flex-direction: row;
        justify-content:center;
        color: #fff;
        font-size: 32px;
        text-align: center;
    }
    .list-products-offers{
        padding:20px 120px 40px 120px;
        gap: 20px;
        display:flex;
        flex-direction: row;
        justify-content:space-between;
        flex-wrap: nowrap;
        overflow-y: hidden;
        white-space: nowrap;
    }

    @media only screen and (max-width: 625px) {
    padding: 20px 100px;
    }
`