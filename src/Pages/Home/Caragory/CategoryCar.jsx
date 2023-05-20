import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCar = ({ car, handleViewDetail }) => {
    // console.log(car);
    const { _id, photo, name, rating, salary } = car;
    return (
        <div className='border-2 border-gray-200 drop-shadow-2xl w-[350px] p-5 rounded-xl'>
            <div className=''>
                <img className='w-[307px] h-[173px] rounded-lg' src={photo} alt="" />
                <p className='mt-3'>BMW</p>
                <p>Name: {name}</p>
                <p>Price: {salary}</p>
            </div>
            <div className='flex justify-between'>
                <p>Raging: {rating}</p>
                <Link to={`/viewdetails/${_id}`}
                >
                    <button className='btn btn-primary'>
                        View details
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default CategoryCar;