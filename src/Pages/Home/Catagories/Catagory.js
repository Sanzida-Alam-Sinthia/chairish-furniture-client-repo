import React from 'react';
import { Link } from 'react-router-dom';

const Catagory = ({ catagory }) => {
    const { name, img, catagory_id } = catagory;
    return (
        <div>
            <div className="card bg-base-200 shadow-xl">
                <figure className="px-10 py-10  w-full h-[300px]">
                    <img src={img} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">

                    <Link to={`/products/${catagory_id}`}> <button className="btn btn-ghost card-title">{name}</button></Link>

                </div>
            </div>
        </div>
    );
};

export default Catagory;