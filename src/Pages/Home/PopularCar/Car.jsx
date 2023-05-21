import React from 'react';

const Car = ({ car }) => {
    const data = car;
    const { photo, name } = data;
    return (
            <div className='border'>
                <img className='w-[320px] h-[200px] rounded drop-shadow-lg' src={photo} alt="" />
            </div>
    );
};

export default Car;