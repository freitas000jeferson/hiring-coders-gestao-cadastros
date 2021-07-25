import React from 'react';
import logo from "../../assets/svg/logo.svg";
import { HeaderApp, SearchHeaderApp } from './style';
import { useHistory } from 'react-router-dom';

// import { Container } from './styles';

const Header: React.FC = () => {
  const history = useHistory();

  return <HeaderApp>
    <img src={logo} alt="logo" className="App-logo" width="230px" 
      onClick={(e) => {e.preventDefault(); history.push('/');}}/>
    <SearchHeaderApp>
        <input type="text"/>
        <button onClick={(e:any)=>{e.preventDefault()}}><i className="fa fa-search"></i></button>
    </SearchHeaderApp>
    <div className="spacer"></div>
    <button onClick={(e:any)=>{e.preventDefault(); history.push('/my-car');}} 
      className="btn-car">
        <i className="fa fa-shopping-cart"></i>
        <span>carrinho</span>
    </button>
    <button  onClick={(e:any)=>{e.preventDefault(); history.push('/create-account')}} 
      className="btn-sing-up">Criar Conta</button>
    <i className="material-icons">&#xe5d2;</i>
  </HeaderApp>;
}

export default Header;