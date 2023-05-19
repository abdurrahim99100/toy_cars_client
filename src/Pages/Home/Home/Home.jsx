import React from 'react';
import Carousel from '../Carousel/Carousel';
import PopularCar from '../PopularCar/PopularCar';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Carousel></Carousel>
            <PopularCar></PopularCar>
        </div>
    );
};

export default Home;