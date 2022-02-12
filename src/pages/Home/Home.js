import React from 'react';
import Banner from './banner/Banner';
import BannerAbout from './bannerabout/BannerAbout';
import Blog from './blog/Blog';
import Doctors from './doctors/Doctors';
import Expert from './expert/Expert';
import ExpertDoctor from './expertDoctor/ExpertDoctor';
import Order from './orders/Order';
import Questions from './questions/Questions';
import Reviews from './reviews/Reviews';
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
            <Expert></Expert>
            <ExpertDoctor></ExpertDoctor>
            <Questions></Questions>
            <Reviews></Reviews>
            <Blog></Blog>
        </div>
    );
};

export default Home;