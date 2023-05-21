import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Toys from './Toys';

const AllToy = () => {
    const loadDataToy = useLoaderData();

    // console.log(loadDataToy);
    return (
        <div className='container mx-auto my-20'>
            <div className='flex justify-center'>
                <h2 className='my-5 text-3xl font-medium'>All Toy</h2>
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
                            loadDataToy.map(toy => <Toys
                                key={toy._id}
                                toy={toy}
                            ></Toys>)
                        }

                    </tbody>
                    {/* <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot> */}

                </table>
            </div>
        </div>
    );
};

export default AllToy;




