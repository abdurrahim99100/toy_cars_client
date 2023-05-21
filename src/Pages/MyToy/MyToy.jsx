import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Toy from './Toy';

const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState();
    const url = (`https://toy-cars-server-one.vercel.app/my-toy?email=${user?.email}`)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [])
    // console.log(myToys);


    const handleDelete = id => {
        const proceed = confirm('ARE YOU SURE YOU WONT TO DELETE');
        if (proceed) {
            fetch(`https://toy-cars-server-one.vercel.app/my-toy/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0){
                        alert('DELETE SUCCESSFULLY')
                        const remaining = myToys.filter(myToy => myToy._id !== id);
                        setMyToys(remaining);
                    }
                })
        }
    }


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
                            <th>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </th>
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
                                handleDelete={handleDelete}
                            ></Toy>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToy;