import React from 'react';

const Toy = ({ myToy }) => {
    console.log(myToy);
    const { adquantity, name, photoURL, price, rating, sellerName, selleremail, subcategory, textaria, _id } = myToy;
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
                <button className="btn btn-ghost btn-xs">update details</button>
            </td>
        </tr>
    );
};

export default Toy;