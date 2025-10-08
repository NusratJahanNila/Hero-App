import React from 'react';
import downloadImg from '../../assets/icon-downloads.png';
import ratingImg from '../../assets/icon-ratings.png';
const AppCard = ({app}) => {
    // console.log(app);
    const {image,title,downloads,ratingAvg}=app;
    return (
        <div>
            <div className="card bg-base-100  shadow-sm">
                <figure className='h-38 bg-cover'>
                    <img
                        src={image}
                        alt="Apps"
                        className='w-full overflow-hidden'/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                       {title}
                    </h2>
                    {/* Button */}
                    <div className="card-actions justify-between mt-3">
                        <button className="badge badge-ghost bg-[#F1F5E8] text-[#00D390]">
                            <img src={downloadImg} alt="" className='w-4' />
                            {downloads}M
                        </button>
                        <button className="badge badge-ghost bg-[#FFF0E1] text-[#FF8811]">
                            <img src={ratingImg} alt="" className='w-4' />
                            {ratingAvg}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppCard;