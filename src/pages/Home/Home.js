import React from 'react';
import Banner from './banner/Banner';
import BannerAbout from './bannerabout/BannerAbout';
import Doctors from './doctors/Doctors';
import Order from './orders/Order';
import Service from './Service/Service';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerAbout></BannerAbout>
            <Services></Services>
            <Doctors></Doctors>
            <Order></Order>
            <Service></Service>
        </div>
    );
};

export default Home;