import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductCard = ({ product }) => {

    const { name, img } = { product };
    console.log({ product })
    return (
        <div className="card w-96 bg-base-200 shadow-xl">
            <figure><img className='w-full' src={product.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-black font-bold text-center">{product.name}</h2>
                <div className='mt-2 mb-2'>
                    <p><span className='font-bold'>Seller's Name:</span> {product.sellers_name}</p>
                    <p><span className='font-bold'>Pickup Location:</span> {product.location}</p>
                    <p><span className='font-bold'>Years Used:</span> {product.years_used} years</p>
                    <p><span className='font-bold'>Original Price: $</span> {product.original_price}</p>
                    <p><span className='font-bold'>Resell Price: $</span>{product.resell_price}</p>
                    <p><span className='font-bold'>Date Of Post: </span>{product.posted_date}</p>
                </div>

                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Book Now</button>
                </div>
            </div>
        </div>
    )
};

export default ProductCard;