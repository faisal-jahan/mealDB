import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div className='w-full mx-auto py-5 px-5 bg-cyan-900 text-white'>
            <div>
                <Navbar></Navbar>
            </div>
        </div>
    );
};

export default Header;