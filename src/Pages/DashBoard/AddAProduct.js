import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyProducts from './MyProducts/MyProducts';

const AddAProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    const [sellerProduct, setSellerProduct] = useState(null);
    // console.log(user)
    const navigate = useNavigate();
    const handleAddProduct = data => {
        const product = {
            category_id: data.catagory,
            name: data.name,
            original_price: "0",
            resell_price: data.price,
            years_used: data.yearsOfUse,
            location: data.location,
            sellers_name: user?.displayName,
            verified: false,
            posted_date: "2022-08-24 17:27:34",
            img: data.img,
            // condition: data.condition,
            // description: data.description,
        }
        console.log(product)


        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(result => {
                setSellerProduct(product)
                console.log(result);
                toast.success(`${data.name} is added successfully`);

            })
    }
    return (
        <div>
            <div className='w-96 p-7'>
                <h2 className="text-4xl">Add A Product</h2>
                <form onSubmit={handleSubmit(handleAddProduct)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Price</span></label>
                        <input type="number" {...register("price", {
                            required: "Price is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">PickUp Location</span></label>
                        <input type="text" {...register("location")} className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Description</span></label>
                        <input type="text" {...register("description")} className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Year of Use</span></label>
                        <input type="text" {...register("yearsOfUse")} className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Image</span></label>
                        {/* name="photoURL" type="text" placeholder="Photo URL" */}
                        <input type="text" {...register("img")} className="input input-bordered w-full max-w-xs" />

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Product Condition</span></label>
                        <select
                            {...register('condition')}
                            className="select input-bordered w-full max-w-xs">

                            <option defaultChecked>Good</option>
                            <option>Excellent</option>
                            <option>Fair</option>
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Select Catagory</span></label>
                        <select
                            {...register('catagory')}
                            className="select input-bordered w-full max-w-xs">

                            <option defaultChecked>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>

                    <input className='btn btn-accent w-full mt-4' value="Add Product" type="submit" />
                </form>
                <>
                    {
                        sellerProduct &&
                        <MyProducts

                            sellerProduct={sellerProduct}
                            user={user}
                        ></MyProducts>
                    }
                </>
            </div>
        </div>
    );
};

export default AddAProduct;