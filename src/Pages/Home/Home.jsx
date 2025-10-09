import React from 'react';
import Banner from '../../Components/Header/Banner';
import TrendingApps from '../../Components/FeaturedApps/TrendingApps';
import useApps from '../../Components/Hooks/useApps';
import Spinner from '../../Components/Spinner/Spinner';


const Home = () => {
    const { loading } = useApps();
    return (

        <div>
            {
                loading ? <Spinner></Spinner> : <div className='bg-gray-100'>
                    <Banner></Banner>
                    <TrendingApps></TrendingApps>
                </div>
            }
        </div>
    );
}

export default Home;