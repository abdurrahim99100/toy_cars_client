import React from 'react';
import Carousel from '../Carousel/Carousel';
import PopularCar from '../PopularCar/PopularCar';
import Category from '../Caragory/Category';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Carousel></Carousel>
            <PopularCar></PopularCar>
            <Category></Category>
        </div>
    );
};

export default Home;