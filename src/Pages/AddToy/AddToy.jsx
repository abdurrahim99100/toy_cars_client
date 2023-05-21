import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const AddToy = () => {

    const { user } = useContext(AuthContext);

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;

        const photoUrl = form.url.value;
        const name = form.name.value;
        const sellerName = form.selarname.value;
        const selleremail = form.selaremail.value;
        const subcategory = form.subcategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const adquantity = form.abquantity.value;
        const textaria = form.textaria.value;

        const addToy = {
            photoURL: photoUrl,
            name,
            sellerName,
            selleremail,
            subcategory,
            price,
            rating,
            adquantity,
            textaria
        }
        console.log(addToy);
        fetch('http://localhost:5000/add-toy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                form.reset();
            })
    };


    return (
        <div className='container mx-auto my-20'>
            <div>
                <h2 className='text-center text-4xl font-bold my-5'>Add A toy</h2>
                <form
                    onSubmit={handleAddToy}
                    className='border border-gray-300 rounded-2xl drop-shadow-2xl p-10 '>
                    <div className='grid grid-cols-2 gap-5'>
                        <div>
                            <label>
                                Picture URL of the toy
                            </label>
                            <input
                                className='block mb-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                type="text" name='url' />
                        </div>
                        <div>
                            <label>
                                Name
                            </label>
                            <input
                                className='block mb-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                type="text" name="name" id="" />
                        </div>
                        <div>
                            <label>
                                seller name
                            </label>
                            <input
                                className='block mb-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                type="text" name="selarname" id="" defaultValue={user?.displayName} />
                        </div>
                        <div>
                            <label>
                                seller email
                            </label>
                            <input
                                className='block mb-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                type="email" name="selaremail" id="" defaultValue={user?.email} />
                        </div>
                        <div>
                            <label>
                                Sub-category
                            </label>
                            <input
                                className='block mb-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                type="text" name="subcategory" id="" />
                        </div>
                        <div>
                            <label>
                                Price
                            </label>
                            <input
                                className='block mb-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                type="text" name="price" id="" />
                        </div>
                        <div>
                            <label>
                                Rating
                            </label>
                            <input
                                className='block mb-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                type="text" name="rating" id="" />
                        </div>
                        <div>
                            <label>
                                Available quantity
                            </label>
                            <input
                                className='block mb-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                type="text" name="abquantity" id="" />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div>
                            <label className='mx-[250px]'>
                                Detail description
                            </label>
                            <textarea className='block mb-5 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline 
                                w-[620px] h-[120px]' name="textaria" id="" cols="30" rows="10">
                            </textarea>
                        </div>
                    </div>
                    <div className='flex justify-center my-5'>
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToy;