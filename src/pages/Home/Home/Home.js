import React from 'react';
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
        </div>
    );
};

export default Home;