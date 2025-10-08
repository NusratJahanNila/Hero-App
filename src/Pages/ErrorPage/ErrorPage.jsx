import React from 'react';
import { Link } from 'react-router';
import errPageImg from '../../assets/error-404.png';
const ErrorPage = () => {
    return (
        <div className='h-screen flex flex-col gap-3 text-center items-center justify-center'>
            <img src={errPageImg} alt="Error message" className='w-80' />
            <div>
                <h1 className='text-5xl font-bold'>Oops, page not found!</h1>
                <p className='my-4'>The page you are looking for is not available.</p>
                <Link to='/' className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>Go Back</Link>
            </div>
        </div>
    );
};

export default ErrorPage;