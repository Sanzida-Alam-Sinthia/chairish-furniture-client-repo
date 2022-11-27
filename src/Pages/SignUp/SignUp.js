import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext)
    const [signUpError, setSignUPError] = useState('')
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();
    if (token) {
        navigate('/');
    }
    const handleSignUp = (data) => {
        console.log(data);
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast('User Created Successfully.')
                const userInfo = {
                    displayName: data.name,
                    userRole: data.role
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role)
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });

    }
    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log('save user', data);
                setCreatedUserEmail(email);
            })

    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">

                        <p className="py-6 text-lg"> New to Chairish Furniture? </p>
                        <h1 className="text-3xl font-bold">Sign Up and Get Access <br /> to Buy and Sell Amazing Furnitures Here!</h1>
                    </div>

                    <div>
                        <div className=' flex justify-center items-center'>
                            <div className='w-96 p-7'>

                                <form onSubmit={handleSubmit(handleSignUp)}>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="label-text">Name</span></label>
                                        <input type="text" {...register("name")} className="input input-bordered w-full max-w-xs" />

                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="label-text">Email</span></label>
                                        <input type="text"
                                            {...register("email", {
                                                required: "Email Address is required"
                                            })}
                                            className="input input-bordered w-full max-w-xs" />
                                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label"> <span className="label-text">Password</span></label>
                                        <input type="password"
                                            {...register("password", {
                                                required: "Password is required",
                                                minLength: { value: 5, message: 'Password must be 5 characters' }
                                            })}
                                            className="input input-bordered w-full max-w-xs" />
                                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                                    </div>
                                    <div className="form-control w-full max-w-xs pb-7">
                                        <label className="label"> <span className="label-text">Choose Role</span></label>

                                        <select name="role" type="text" {...register("role")} className="select select-bordered w-full">
                                            <option defaultChecked>Buyer</option>
                                            <option>Seller</option>

                                        </select>
                                    </div>


                                    <input className='btn btn-accent w-full' value="Sign Up" type="submit" />
                                    <div>
                                        {signUpError && <p className='text-red-600'>{signUpError}</p>}
                                    </div>

                                </form>
                                <p className='pt-5'>Already have an Account? <Link className='text-secondary' to="/login">Log in to Your account</Link></p>
                                <div className="divider">OR Sign Up With</div>
                                <button className='btn btn-outline w-full'>GOOGLE SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;