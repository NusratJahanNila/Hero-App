import React, { useEffect, useState } from 'react';
import useApps from '../../Components/Hooks/useApps';
import AppCard from '../../Components/AppCard/AppCard';
import Spinner from '../../Components/Spinner/Spinner';

const Apps = () => {
    const { apps, loading } = useApps();

    const [search, setSearch] = useState('');
    const [typing, setTyping] = useState(false);
    const searchData = search.trim().toLowerCase();
    const searchedApps = searchData ? apps.filter(app => app.title.toLowerCase().includes(searchData)) : apps;
    // console.log(searchedApps);

    useEffect(() => {
        if (search) {
            setTyping(true);

            const timeOut = setTimeout(() => { setTyping(false); }, 300);
            return () => clearTimeout(timeOut);
        }
        else {
            setTyping(false);
        }
    }, [search])

    return (
        <div className="bg-gray-100">
            <div className='max-w-6xl mx-auto py-10'>
                <div className='text-center'>
                    <h2 className='text-3xl font-bold'>Our All Applications</h2>
                    <p className='text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className='flex justify-between mt-4'>
                    <p className='text-xl font-bold'>({searchedApps.length}) Apps Found</p>
                    {/* Search bar */}
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>

                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            type="search"
                            required placeholder="Search Apps"
                        />

                    </label>
                    {typing && <Spinner></Spinner>}

                </div>
                {
                    loading ? <Spinner></Spinner> : searchedApps.length !== 0 ? <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto my-10'>
                        {
                            searchedApps.map(app => <AppCard key={app.id} app={app}></AppCard>)
                        }
                    </div> : <h1 className='h-[65vh] flex items-center justify-center text-5xl font-bold'>No App Found</h1>
                }

            </div>
        </div>
    );
};

export default Apps;