import styled from 'styled-components'
export const MainContainer:any=styled.div`
    padding: 0px 120px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: stretch;
    overflow: hidden;
    div{
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: left;
        .image-title{
            height:100px;
        }
    }
    .list-products{
        padding: 0px;
        margin: 20px 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 20px;
        grid-row-gap: 20px;
        grid-column-gap:20px;
    }
    @media only screen and (max-width: 625px) {
    padding: 0px 100px;

        .image-title {
            height:20px;
            width: 300px;
        }
    }
`