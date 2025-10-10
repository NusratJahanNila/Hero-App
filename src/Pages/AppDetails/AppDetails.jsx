
import { useParams } from 'react-router';
import useApps from '../../Components/Hooks/useApps';
import Spinner from '../../Components/Spinner/Spinner';

import { addToLocalStorage } from '../../LocalStorage/addToLocalStorage';
import { useEffect, useState } from 'react';
import AppDetailsInfo from '../../Components/AppDetailsInfo/AppDetailsInfo';
import ErrorApp from '../ErrorApp/ErrorApp';
import Chart from '../../Components/Chart/Chart';
import { toast, ToastContainer } from 'react-toastify';


const AppDetails = () => {
    // disable button
    const [disable, setDisable] = useState([])
    // Disable Button
    useEffect(()=>{
        const disableDataStr=localStorage.getItem('disable');
        const disableData=disableDataStr? JSON.parse(disableDataStr): [];
        setDisable(disableData);
    },[])

    // fetch
    const { apps, loading, error } = useApps();
    console.log(apps)

    const { id } = useParams();
    const appId = parseInt(id);

    if (loading) return <Spinner></Spinner>;
    if (error) return <p className='h-screen flex text-center items-center justify-center text-2xl font-bold'>Failed to load data...</p>;

    const data = apps.find(app => app.id === appId) || {};

    if (Object.keys(data).length === 0) return <ErrorApp></ErrorApp>
    // console.log(data);
    const {image, companyName, size, title} = data;

    // Installation
    const handleInstall = (data) => {
        toast(`${data.title} is Install Successfully!!`);
        addToLocalStorage(data);
        // disable
        const updateDisable=[...disable,data.id];
        setDisable(updateDisable);
        const updateDisableStr=JSON.stringify(updateDisable);
        localStorage.setItem('disable',updateDisableStr)
    }
    const aapDisable=disable.includes(data.id);
    
        return (
        <div className='bg-gray-100'>
            <div className='max-w-6xl mx-auto'>
                {/* App Info */}
                <div className=' flex items-center gap-10 py-10'>
                    <div className='w-1/4'>
                        <img src={image} alt="app" className='h-63 w-full bg-cover ' />
                    </div>
                    <div className='w-3/4'>
                        <h3 className='text-2xl font-bold'>{title}</h3>
                        <p className='text-gray-600'>Developed by <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>{companyName}</span></p>

                        <div className='border-t-2 border-gray-300 w-full my-4'></div>

                        <AppDetailsInfo data={data}></AppDetailsInfo>
                        <button
                            disabled={aapDisable}
                            onClick={() => handleInstall(data)}
                            className='btn bg-[#00D390] text-white mt-3 '>{aapDisable ? 'Installed' : `Install Now (${size}MB)`}
                        </button>
                        <ToastContainer></ToastContainer>
                    </div>
                </div>

                <div className='border-t-2 border-gray-300 w-full my-4'></div>

                {/* Chart Data */}
                <h2 className='font-bold text-2xl mb-6'>Ratings</h2>
                <Chart data={data}></Chart>

                <div className='border-t-2 border-gray-300 w-full my-4'></div>

                {/* Description */}
                <div>
                    <h3 className='font-bold text-2xl my-3'>Description</h3>
                    <p className='text-gray-600 leading-8 pb-7 '>{data.description}</p>
                </div>
            </div>

        </div>
        );
};

        export default AppDetails;