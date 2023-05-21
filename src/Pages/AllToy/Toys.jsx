import React from 'react';

const Toys = ({ toy }) => {
    const { adquantity, name, photoURL, price, rating, sellerName, selleremail, subcategory, textaria, _id } = toy;
    return (
        <tr>
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
                <button className="btn btn-ghost btn-xs">details</button>
            </td>
        </tr>
    );
};

export default Toys;







