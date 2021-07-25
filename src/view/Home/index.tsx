
import React from 'react';
import Header from '../../components/Header';
import HeaderOffers from '../../components/HeaderOffers';
import ListProducts from '../../components/ListProducts';
import Footer from '../../components/Footer';
// import { Container } from './styles';

const Home:React.FC = () => {
  return (
      <div>
        <Header></Header>
        <HeaderOffers></HeaderOffers>
        <ListProducts></ListProducts>
        <Footer></Footer>
      </div>

    );
}

export default Home;