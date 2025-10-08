import downloadImg from '../../assets/icon-downloads.png';
import ratingImg from '../../assets/icon-ratings.png';
import reviewImg from '../../assets/icon-review.png';
import { useParams } from 'react-router';
import useApps from '../../Components/Hooks/useApps';
import Spinner from '../../Components/Spinner/Spinner';


const AppDetails = () => {
    const { apps,loading,error } = useApps();
    // console.log(apps)

    const { id } = useParams();
    const appId = parseInt(id);

    if (loading) return <Spinner></Spinner>;
    if (error) return <p className='h-screen flex text-center items-center justify-center text-2xl font-bold'>Failed to load data...</p>;

    const data = apps.find(app => app.id === appId);
    console.log(data);
    const {image,companyName,downloads,ratingAvg,reviews,size,title}=data;

    return (
        <div className='bg-gray-100'>
            <div className='max-w-6xl mx-auto flex items-center gap-10 py-10'>
                <div className='w-1/4'>
                    <img src={image} alt="app" className='h-63 w-full bg-cover ' />
                </div>
                <div className='w-3/4'>
                    <h3 className='text-2xl font-bold'>{title}</h3>
                    <p className='text-gray-600'>Developed by <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#632EE3] to-[#9F62F2]'>{companyName}</span></p>

                    <div className='border-t border-gray-400 w-full my-4'></div>

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
                    <button className='btn bg-[#00D390] text-white mt-3'>Install Now ({size}MB)</button>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;