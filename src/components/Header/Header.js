import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-center py-4' style={{ backgroundColor: 'black', color: 'white' }}>
            <nav>
                <Link to='/home' className='mx-4'>HOME</Link>
                <Link to='/review' className='mx-4'>REVIEW</Link>
                <Link to='/dashboard' className='mx-4'>DASHBOARD</Link>
                <Link to='/blogs' className='mx-4'>BLOGS</Link>
                <Link to='/about' className='mx-4'>ABOUT</Link>
            </nav>
        </div>
    );
};

export default Header;