import React from 'react';
import furnitureBanner from '../../../assests/furnitureBanner.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={furnitureBanner} alt='' className="lg:w-3/4  rounded-lg shadow-2xl" />
                    <div className='text-center'>
                        <h3 className="text-4xl font-bold">Welcome To <br />

                            Chairish Furnitures</h3>
                        <p className="py-6 text-sm font-bold">Buy & Sell Beautiful Furnitures for your Home in One plateform </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;