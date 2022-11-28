import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// import useToken from '../hooks/useToken';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';
    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);

            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message)
            });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">

                    <p className="py-6 text-lg"> Already Bought or Sell From Chairish Furniture?</p>
                    <h1 className="text-3xl font-bold">Login to Buy and Sell Here!</h1>
                </div>

                <div>
                    <div className=' flex justify-center items-center'>
                        <div className='w-96 p-7'>

                            <form onSubmit={handleSubmit(handleLogin)}>
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
                                        <option defaultChecked>buyers</option>
                                        <option>seller</option>

                                    </select>
                                </div>


                                <input className='btn btn-accent w-full' value="Login" type="submit" />
                                <div>
                                    {loginError && <p className='text-red-600'>{loginError}</p>}
                                </div>

                            </form>
                            <p className='pt-5'>New User Here? Sign up by <Link className='text-secondary' to="/signup">Creating new Account</Link></p>
                            <div className="divider">OR</div>
                            <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Login;