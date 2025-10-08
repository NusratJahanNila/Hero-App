import React from 'react';
import logoImg from '../../assets/logo.png'
const Spinner = () => {
    return (
        <div className='flex gap-5 items-center justify-center h-screen '>
            <img src={logoImg} alt="" className='w-10 animate-spin'/>
            <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-2xl font-bold'>Loading...</h1>
        </div>
    );
};

export default Spinner;