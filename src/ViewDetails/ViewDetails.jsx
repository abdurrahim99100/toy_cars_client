import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const loadData = useLoaderData();
    const data = loadData[0];
    console.log(data);
    const { category, company, name, phone, photo, rating, salary, about } = data;
    return (
        <div className='container mx-auto my-[130px] '>
            <h2 className='text-center my-10 text-4xl font-bold'>Details</h2>
            <div className='flex justify-center'>
                <div className='border-2 border-gray-200 p-5 rounded drop-shadow-2xl'>
                    <img className='w-[700px] rounded-2xl' src={photo} alt="" />
                    <div className='py-5 grid gap-3 text-xl font-light'>
                        <p className=''>Type : {category}</p>
                        <p>Made By : {company}</p>
                        <p>Model : {name}</p>
                        <p>Price : {salary}</p>
                        <p>Rating : {rating}</p>
                        <p>Contact : {phone}/bmw@gmail.com</p>
                        <p className='w-[700px]'>About : {about}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;