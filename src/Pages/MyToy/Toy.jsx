import React from 'react';
import { Link } from 'react-router-dom';

const Toy = ({ myToy, handleDelete }) => {
    // console.log(myToy);
    const { adquantity, name, photoURL, price, rating, sellerName, selleremail, subcategory, textaria, _id } = myToy;





    return (
        <tr>
            <td>
                <button
                    onClick={() => handleDelete(_id)}
                    className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
            <td>
                {sellerName}
            </td>
            <td>
                {name}
            </td>
            <td>
                {subcategory}
            </td>
            <td>
                {price}
            </td>
            <td>
                {adquantity}
            </td>
            <td>
                <Link to={`/update/${_id}`}>
                    <button className="btn btn-ghost btn-xs">update details</button>
                </Link>
            </td>
        </tr>
    );
};

export default Toy;