import React from 'react';
import furniture2 from '../../../assests/furniture2.JPG'
const WhySecondHandFurniture = () => {
    return (
        <div>
            <div className="hero bg-base-200 pt-8">
                <div className="hero-content flex-col ">
                    <h1 className="text-2xl font-bold">Why Should You Choose Second Hand Furniture?</h1>
                    <img src={furniture2} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='text-center text-sm'>

                        <p className="py-6 max-w-[560px]">We’re shouting it from the rooftops—secondhand furniture should be your first choice! In fact, well-made used furniture can last through generations. Furniture holds memories. We gather around it in times of joy and celebration; we curl up with our loved ones on it; we use it to store our most-prized possessions. Buying pre-loved furniture adds character to your home through its imperfections and the stories it carries. We’re here to continue those stories and create a world where furniture is circular, sustainable, and here to stay.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhySecondHandFurniture;