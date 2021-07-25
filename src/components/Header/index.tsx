import React from 'react';
import logo from "../../assets/svg/logo.svg";
import { HeaderApp, SearchHeaderApp } from './style';

// import { Container } from './styles';

const Header: React.FC = () => {
  return <HeaderApp>
    <img src={logo} alt="logo" className="App-logo" width="230px" />
    <SearchHeaderApp>
        <input type="text"/>
        <button onClick={(e:any)=>{e.preventDefault()}}><i className="fa fa-search"></i></button>
    </SearchHeaderApp>
    <div className="spacer"></div>
    <button onClick={(e:any)=>{e.preventDefault()}} className="btn-car">
        <i className="fa fa-shopping-cart"></i>
        <span>carrinho</span>
    </button>
    <button  onClick={(e:any)=>{e.preventDefault()}} className="btn-sing-up">Criar Conta</button>
    <i className="material-icons">&#xe5d2;</i>
  </HeaderApp>;
}

export default Header;