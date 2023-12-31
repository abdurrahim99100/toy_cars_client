import React, { useEffect, useState } from 'react';
import Car from './Car';
import Marquee from 'react-fast-marquee';

const PopularCar = () => {
    const [cars, setCar] = useState([]);
    useEffect(() => {
        fetch('https://toy-cars-server-one.vercel.app/products')
            .then(res => res.json())
            .then(data => {
                setCar(data);
            })
    }, []);
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