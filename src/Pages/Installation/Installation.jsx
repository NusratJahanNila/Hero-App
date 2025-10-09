import React, { useEffect, useState } from 'react';
import { getStoredData } from '../../LocalStorage/addToLocalStorage';
import downloadImg from '../../assets/icon-downloads.png';
import ratingImg from '../../assets/icon-ratings.png';
import Sort from '../../Components/Sort/Sort';
import useApps from '../../Components/Hooks/useApps';
import Spinner from '../../Components/Spinner/Spinner';



const Installation = () => {
    const {loading}=useApps();
    // Install
    const [install, setInstall] = useState([]);
    console.log(install);
    useEffect(() => {
        const existData = getStoredData();
        if (existData) {
           return setInstall(existData);
        }
    }, [])

    // Uninstall
    const handleUninstall=(id)=>{
        const existData=getStoredData();
        let updateData=existData.filter(app=>app.id!==id);
        setInstall(updateData);
        const storedData = JSON.stringify(updateData);
        localStorage.setItem('install', storedData);
    }

    
    return (
        <div className=''>
            <div className='max-w-6xl mx-auto'>
                <div className='text-center py-10'>
                    <h2 className='text-3xl font-bold'>Your Installed Apps</h2>
                    <p className='text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='flex justify-between mt-4'>
                    <p className='text-xl font-bold'>({install.length}) Apps Found</p>
                    {/* sort bar */}
                    <Sort install={install} setInstall={setInstall}></Sort>

                </div>
                {
                    loading?<Spinner></Spinner>:install.map(i => <div className='flex justify-between items-center border border-gray-200 rounded-2xl my-6 shadow-sm px-5 py-3'>
                        <div className='flex gap-5 items-center'>
                            <div>
                                <img src={i.image} alt="app" className='h-30 w-30 rounded-2xl' />
                            </div>
                            <div>
                                <h2 className='font-bold text-lg'>{i.title}</h2>
                                <div className="card-actions  mt-3">
                                    <button className="badge badge-ghost text-[#00D390] font-semibold">
                                        <img src={downloadImg} alt="" className='w-4' />
                                        {i.downloads}M
                                    </button>
                                    <button className="badge badge-ghost  text-[#FF8811] font-semibold">
                                        <img src={ratingImg} alt="" className='w-4' />
                                        {i.ratingAvg}
                                    </button>
                                    <p className='text-gray-500 font-semibold'>{i.size} MB</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button onClick={()=>handleUninstall(i.id)} className='btn bg-[#00D390] text-white mt-3'>Uninstall</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Installation;