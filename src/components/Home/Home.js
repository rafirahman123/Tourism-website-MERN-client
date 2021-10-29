import React from 'react';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import Resort from '../Resort/Resort';
import Sports from '../Sports/Sports';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <Sports></Sports>
            <Resort></Resort>
        </div>
    );
};

export default Home;