import React from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon } from '@heroicons/react/solid';

const Header = () => {
    return (
        <div className='flex justify-between py-4 bg-teal-900 text-white hover:bg-teal-300'>
            <div className='w-6 h-6 justify-start'>
                <MenuIcon></MenuIcon>
            </div>
            <div>
                <nav className='md:flex justify-center'>
                    <Link to='/home' className='mx-4'>HOME</Link>
                    <Link to='/review' className='mx-4'>REVIEW</Link>
                    <Link to='/dashboard' className='mx-4'>DASHBOARD</Link>
                    <Link to='/blogs' className='mx-4'>BLOGS</Link>
                    <Link to='/about' className='mx-4'>ABOUT</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;