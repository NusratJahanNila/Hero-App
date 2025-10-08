import React from 'react';
import googlePlayImg from '../../assets/google-play.png';
import appStoreImag from '../../assets/appStore.jpg'
import heroImg from '../../assets/hero.png';
import { Link } from 'react-router';
const Banner = () => {
    return (
        <div className='py-10'>
            <div className="banner-1 text-center  max-w-6xl mx-auto">
                <h1 className='md:text-7xl text-4xl font-bold'>We Build <br />
                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-bold'> Productive</span> Apps</h1>
                <p className='text-[#627382] mt-4 text-sm md:text-md'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br></br>
                    Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className='flex justify-center gap-4 mt-5'>
                    <Link to='https://play.google.com/store/games?hl=en' className='btn btn-outline border-gray-300'>
                        <img
                            src={googlePlayImg} alt="googlePlay image"
                            className='w-5'
                        />
                        Google Play
                    </Link>
                    <Link to='https://www.apple.com/app-store/' className='btn btn-outline border-gray-300'>
                        <img
                            src={appStoreImag} alt="googlePlay image"
                            className='w-5'
                        />
                        App Store
                    </Link>
                </div>
            </div>
            <div className="banner-2 mt-4 ">
                <img
                    src={heroImg}
                    alt="Hero Image"
                    className='md:w-150 w-100 mx-auto' 
                />
            </div>
            <div className="banner-3 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white p-10">
                <h2 className='text-center md:text-5xl text-3xl font-bold mb-4'>Trusted by Millions, Built for You</h2>
                <div className=" md:flex md:gap-6 justify-center items-center max-w-6xl mx-auto text-center">
                    <div className="md:py-5 py-3 md:px-14 px-6">
                        <p>Total Downloads</p>
                        <h2 className='font-extrabold text-4xl md:text-6xl my-2'>29.6M</h2>
                        <p>21% more than last month</p>
                    </div>
                    <div className="md:py-5 py-3 md:px-14 px-6">
                        <p>Total Reviews</p>
                        <h2 className='font-extrabold  text-4xl md:text-6xl my-2'>906K</h2>
                        <p>46% more than last month</p>
                    </div>
                    <div className="md:py-5 py-3 md:px-14 px-6">
                        <p>Active Apps</p>
                        <h2 className='font-extrabold text-4xl md:text-6xl my-2'>132+</h2>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;