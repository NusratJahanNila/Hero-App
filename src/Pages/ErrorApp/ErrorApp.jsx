import React from 'react';
import errorAppImg from '../../assets/App-Error.png'
const ErrorApp = () => {
    return (
         <div className='h-screen flex flex-col gap-3 text-center items-center justify-center'>
            <img src={errorAppImg} alt="Error message" className='w-80' />
            <div>
                <h1 className='text-5xl font-bold'>App not found!</h1>
                <p className='my-4'>The page you are looking for is not available.</p>
                <Link to='/' className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white'>Go Back</Link>
            </div>
        </div>
    );
};

export default ErrorApp;