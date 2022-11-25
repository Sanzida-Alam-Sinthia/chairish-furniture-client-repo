import React from 'react';
import bedroom from '../../../assests/catagories/bedroom.jpg'
import drawingroom from '../../../assests/catagories/drawingroom.jpg'
import kidsroom from '../../../assests/catagories/kidsroom.jpg'
import Catagory from './Catagory';
const Catagories = () => {
    const catagories = [
        {
            catagory_id: 1,
            name: 'Bedroom Furnitures',
            img: bedroom
        },
        {
            catagory_id: 2,
            name: 'Drawing Room Furnitures',
            img: drawingroom
        },
        {
            catagory_id: 3,
            name: 'Kids Room Furnitures',
            img: kidsroom
        }
    ]
    return (
        <div>
            <div className='pt-12 bg-base-200 '>
                <div className='text-center'>
                    <h3 className='text-4xl font-bold'>Catagories</h3>
                    <h2 className='text-xl pt-6 font-bold'>Shop By Room Catagory</h2>
                </div>
                <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10'>
                    {
                        catagories.map(catagory =>
                            <Catagory
                                key={catagory.catagory_id}
                                catagory={catagory}

                            ></Catagory>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Catagories;