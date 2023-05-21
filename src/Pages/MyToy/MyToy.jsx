import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Toy from './Toy';

const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState();
    const url = (`http://localhost:5000/my-toy?email=${user?.email}`)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [])
    // console.log(myToys);


    return (
        <div className='container mx-auto my-20 h-[100vh]'>
            <div className='flex justify-center'>
                <h2 className='my-5 text-3xl font-medium'>My Toy</h2>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys?.map(myToy => <Toy
                            key={myToy._id}
                            myToy={myToy}
                            ></Toy>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToy;