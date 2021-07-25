import styled from "styled-components";
 export const MainForm:any=styled.div`
    display: flex;
    flex-direction:column;
    align-items:stretch;
    padding: 10px 0;
 `
export const CreatePage:any = styled.section`
    display: flex;
    flex-direction:row;
    gap: 20px;
    grid-row-gap: 20px;
    justify-content:space-between;
    flex-wrap: wrap;
    padding:0 120px;
    .container-save{
        width:100%;
        display: flex;
        flex-direction:row-reverse;
        .save-user{
            border: 2px solid #00E068;
            color: #fff;
            background-color: #00E068;
            padding: 2px 25px;
            border-radius: 4px;
            transition: 600ms;

        }
        .save-user:hover,
        .save-user:focus {
            box-shadow: inset 0 -3.25em 0 #fff;
            color: #00E068;
        }
    }
    @media only screen and (max-width: 625px) {
        padding:0 40px;
        
    }
`

export const AccountForm:any = styled.div`
    width:500px;    
    /* box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.55); */
    background-color: #fff;
    padding:20px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 6px;
    .container-group{
        display: flex;
        flex-direction:row;
        justify-content:start;
        gap:10px;
    }
    h2{
        font-size:25px;
    }
    fieldset{ 
        flex-grow: 1;
        gap: 5px;
        border: none;
        display: flex;
        flex-direction: column;
        label{ 
            font-size:16px;
            font-weight:500;
        }
    }
    @media only screen and (max-width: 625px) {
        
    }
`