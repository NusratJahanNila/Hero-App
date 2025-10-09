import React from 'react';
import downloadImg from '../../assets/icon-downloads.png';
import ratingImg from '../../assets/icon-ratings.png';
import reviewImg from '../../assets/icon-review.png';
const AppDetailsInfo = ({data}) => {
    const { downloads, ratingAvg, reviews, } = data;
    return (
        <div className='flex gap-8'>
            <div>
                <img src={downloadImg} alt="" />
                <p className='text-gray-700 my-1'>Downloads</p>
                <h3 className='text-3xl font-bold '>{downloads}M</h3>
            </div>
            <div>
                <img src={ratingImg} alt="" />
                <p className='text-gray-700 my-1'>Average Ratings</p>
                <h3 className='text-3xl font-bold '>{ratingAvg}</h3>
            </div>
            <div>
                <img src={reviewImg} alt="" />
                <p className='text-gray-700 my-1'>Total Reviews</p>
                <h3 className='text-3xl font-bold '>{reviews}K</h3>
            </div>
        </div>
    );
};

export default AppDetailsInfo;