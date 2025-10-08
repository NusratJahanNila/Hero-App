import React from 'react';
import Banner from '../../Components/Header/Banner';
import TrendingApps from '../../Components/FeaturedApps/TrendingApps';

const Home = () => {
    return (
        <div className='bg-gray-100'>
            <Banner></Banner>
            <TrendingApps></TrendingApps>
        </div>
    );
};

export default Home;