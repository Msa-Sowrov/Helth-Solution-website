import React from 'react';
import Footer from '../../Footer/Footer';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Carosal from '../Carosal/Carosal';
import Header from '../Header/Header';
import ServicesLoad from '../Services/ServicesLoad/ServicesLoad';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Carosal></Carosal>
            <Banner></Banner>
            <ServicesLoad></ServicesLoad>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;