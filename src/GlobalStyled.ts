import { createGlobalStyle }from 'styled-components'

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    font-size:16px;
    color:#5E5E5E;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue';
    /* font-family: Arial, Helvetica, sans-serif; */

}
body{ 
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
}

.div-container {
    background-color:red;
    height:20px;
}
`