import React from 'react';
import downloadImg from '../../assets/icon-downloads.png';
import ratingImg from '../../assets/icon-ratings.png';
import { Link } from 'react-router';
const AppCard = ({app}) => {
    // console.log(app);
    const {id,image,title,downloads,ratingAvg}=app;
    return (
        <Link to={`/appDetails/${id}`}>
            <div className="card bg-base-100 max-w-sm w-full  shadow-sm h-65">
                <figure className='h-32 sm:h-40 overflow-hidden'>
                    <img
                        src={image}
                        alt="Apps"
                        className=' w-full h-full object-cover'/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                       {title}
                    </h2>
                    {/* Button */}
                    <div className="flex gap-5 md:gap-30 md:justify-between mt-3">
                        <button className="badge badge-ghost bg-[#F1F5E8] text-[#00D390]">
                            <img src={downloadImg} alt="" className='md:w-4 w-2' />
                            {downloads}M
                        </button>
                        <button className="badge badge-ghost bg-[#FFF0E1] text-[#FF8811]">
                            <img src={ratingImg} alt="" className='md:w-4 w-2' />
                            {ratingAvg}
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;