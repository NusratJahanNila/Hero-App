import React from 'react';
import errorAppImg from '../../assets/App-Error.png'
const ErrorApp = () => {
    return (
        
        <div className='h-screen flex flex-col gap-3 text-center items-center justify-center'>
            <img src={errorAppImg} alt="" />
            <h1 className='text-3xl font-bold mt-3'>Apps Not Found</h1>
        </div>
        
    );
};

export default ErrorApp;