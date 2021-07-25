import styled from 'styled-components'

export const HeaderApp= styled.header`
    background-color: #475D6D;
    display: flex;
    flex-direction:row;
    justify-content:start;
    height:80px;
    padding: 0 120px;
    align-items: center;
    color:#5E5E5E;
    img{

        padding:0;
        margin:0;
    }
    .btn-sing-up{
        font-size: 18px;
        margin:0;
        padding: 5px 10px;
        min-width: 140px;
        color:#fff;
        border: none;
        box-shadow: none;
        background-color: #00C65C ;
        border-radius:4px;
        transition: 550ms;
    }
    .btn-sing-up:hover,
    .btn-sing-up:focus {
        /* box-shadow: inset 6.5em 0 0 white; */
        box-shadow: inset 0 -3.25em 0 white;
        color:#00C65C;
    }
    /* @keyframes pulse{
        0% { box-shadow: 0 0 1px white; }
    }
    .btn-sing-up:hover, 
    .btn-sing-up:focus {
        animation-name: pulse;
        animation-duration: 2s;
        box-shadow: 0 0 2em rgba(255,255,255,0);
    } */
    
    
    .btn-car {
        margin:0 15px;
        display:flex;
        flex-direction:column;
        align-items: stretch;
        justify-content:center;
        background-color: rgba(255, 255, 255, 0);
        border: none;
        color:#fff;
        box-shadow: none;
        i{ 
            color:#fff;
            font-size:25px;
        }
        span{ 
            color:#fff;
            font-size:12px;
        }
    }
    .btn-car:hover {
        i,span{   
            transition: 600ms;
            color:#00E068;
        }
        
    }
    .spacer{
    flex-grow: 1;
    }
    .material-icons{
        color:#fff;
        display: none;
    }
    

    @media only screen and (max-width: 625px) {
        .btn-sing-up,
        .btn-car
        {
            display: none;
        }
        .material-icons{
            display: flex;
        }
    }
    
`

export const SearchHeaderApp= styled.div`
    background-color: #475D6D;
    display: flex;
    flex-direction:row;
    padding: 0;
    margin:0;
    margin-left:10px;
    justify-content:start;
    height:30px; 
    flex-grow: 2;
    background-color:#fff;
    border-radius: 3px;
    overflow: hidden;
    input{ 
        border: none;
        outline: none;
        flex-grow: 1;
        padding:10px;
    }
    input:focus, textarea:focus, select:focus{
        outline: none;
    }
    button{ 
        padding-left: 12px;
        padding-right: 13px;
        border: none;
        color:#fff;
        background-color: #00E068;
        text-align:center;
        i{ color:#fff;}
    }

    @media only screen and (max-width: 625px) {
        display: none;
        input,button{display:none;}
    }
`