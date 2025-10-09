import React from 'react';
import Navbar from '../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import useApps from '../Components/Hooks/useApps';
import Spinner from '../Components/Spinner/Spinner';
const Root = () => {
    const { loading } = useApps();
    return (
        <div>
            {
                loading ? <Spinner></Spinner> : <div className='flex flex-col min-h-screen'>
                    <Navbar></Navbar>
                    <main className='flex-1 '>
                        <Outlet></Outlet>
                    </main>
                    <Footer></Footer>
                </div>
            }

        </div>
    );
};

export default Root;