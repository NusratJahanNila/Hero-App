import React from 'react';
import useApps from '../Hooks/useApps';
import AppCard from '../AppCard/AppCard';
import { Link } from 'react-router';

const TrendingApps = () => {
    const {apps}=useApps();
    const trendingApps=apps.slice(0,8);
    return (
        <div>
            <div className='text-center max-w-6xl mx-auto'>
                <h2 className='text-3xl font-bold'>Trending Apps</h2>
                <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto my-10'>
                {
                    trendingApps.map(app=><AppCard key={app.id} app={app}></AppCard>)
                }
                
            </div>
            <div className='max-w-6xl mx-auto p-3 text-center '>
                <Link to='/apps' className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">Show All</Link>
            </div>
        </div>
    );
};

export default TrendingApps;