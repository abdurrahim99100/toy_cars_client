import React, { useEffect, useState } from 'react';
import Car from './Car';
import Marquee from 'react-fast-marquee';

const PopularCar = () => {
    const [cars, setCar] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setCar(data);
            })
    }, []);
    // console.log(cars);
    return (
        <Marquee>
            <div className='flex gap-40 my-36'>
                {
                    cars.map(car => <Car
                        key={car._id}
                        car={car}
                    ></Car>)
                }
            </div>
        </Marquee>
    );
};

export default PopularCar;