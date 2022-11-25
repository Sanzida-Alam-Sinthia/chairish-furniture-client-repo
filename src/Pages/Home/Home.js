import React from 'react';
import Banner from './Banner/Banner';
import Catagories from './Catagories/Catagories';
import WhySecondHandFurniture from './WhySecondHandFurniture/WhySecondHandFurniture';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhySecondHandFurniture></WhySecondHandFurniture>
            <Catagories></Catagories>
        </div>
    );
};

export default Home;