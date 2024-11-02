import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            {/* Navbar */}
            <div className='h-16'>
                <Navbar></Navbar>
            </div>
            <div className='min-h-[calc(100vh-295px)] py-12 w-11/12 mx-auto px-12'>
                {/* Dynamic Section */}
                <Outlet></Outlet>
            </div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;