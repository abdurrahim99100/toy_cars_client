import React from 'react';

const AddToy = () => {
    return (
        <div className='container mx-auto my-20'>
            <div>
                <h2 className='text-center text-4xl font-bold my-5'>Add A toy</h2>
                <form className='border border-gray-300 rounded-2xl drop-shadow-2xl p-10 '>
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
                                type="text" name="selarname" id="" />
                        </div>
                        <div>
                            <label>
                                seller email
                            </label>
                            <input
                                className='block mb-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                type="email" name="email" id="" />
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