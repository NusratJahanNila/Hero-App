import React from 'react';
import downloadImg from '../../assets/icon-downloads.png';
import ratingImg from '../../assets/icon-ratings.png';
import reviewImg from '../../assets/icon-review.png';
const AppDetailsInfo = ({data}) => {
    const { downloads, ratingAvg, reviews, } = data;
    return (
        <div className='flex gap-8'>
            <div>
                <img src={downloadImg} alt="" className='w-6 md:w-8'/>
                <p className='text-gray-700 my-1 text-sm md:text-lg'>Downloads</p>
                <h3 className='text-xl md:text-3xl font-bold '>{downloads}M</h3>
            </div>
            <div>
                <img src={ratingImg} alt="" className='w-6 md:w-8'/>
                <p className='text-gray-700 my-1 text-sm md:text-lg'>Average Ratings</p>
                <h3 className='text-xl md:text-3xl font-bold '>{ratingAvg}</h3>
            </div>
            <div>
                <img src={reviewImg} alt="" className='w-6 md:w-8'/>
                <p className='text-gray-700 my-1 text-sm md:text-lg'>Total Reviews</p>
                <h3 className='text-xl md:text-3xl font-bold '>{reviews}K</h3>
            </div>
        </div>
    );
};

export default AppDetailsInfo;