import React, { useEffect, useState } from 'react';
import CategoryCar from './CategoryCar';

const Category = () => {
    const [cars, setCars] = useState([]);
    const [active, setActive] = useState('Jeep')
    useEffect(() => {
        fetch(`http://localhost:5000/products/${active}`)
            .then(res => res.json())
            .then(data => {
                setCars(data);
            })
    }, [active]);

    const handleTab = (tabName) => {
        setActive(tabName)
    }


    const handleViewDetail = (id) => {
        console.log(id);
    }



    return (
        <div className='my-20'>
            <div>
                <h2 className='text-center text-5xl font-bold mb-7'>
                    <span className='text-green-400'>CATE</span>
                    <span className='text-red-400'>GORY</span>
                </h2>
            </div>
            <div className='flex gap-10 justify-center'>
                <button
                    onClick={() => handleTab('Jeep')}
                    className='btn btn-accent w-32'>
                    Jeep
                </button>
                <button
                    onClick={() => handleTab('Bus')}
                    className='btn btn-accent w-32'>
                    Bus
                </button>
                <button
                    onClick={() => handleTab('Truck')}
                    className='btn btn-accent w-32'>Track</button>
            </div>
            <div className='grid grid-cols-4 gap-y-10 my-10'>
                {
                    cars.map(car => <CategoryCar
                        key={car._id}
                        car={car}
                        handleViewDetail={handleViewDetail}
                    ></CategoryCar>)
                }
            </div>
        </div>
    );
};

export default Category;