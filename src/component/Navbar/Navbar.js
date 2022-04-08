import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [open,setOpen] = useState(false);

    const routes = [
        {id:1, name: 'Home', link: '/home'},
        {id:1, name: 'Shop', link: '/shop'},
        {id:2, name: 'About', link: '/about'},
        {id:2, name: 'Contact', link: '/contact'}
    ];
    return (
        <nav>
            <div onClick={()=>setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex w-full justify-center absolute md:static duration-500 ease-in-out bg-gray-700 md:bg-none p-2 rounded-lg ${open ? 'top-10' : 'top-[-120px]'} `}>
                {
                    routes.map( route=>
                        <li key={route.id} className='mr-12'>
                            <a href={route.link}>{route.name}</a>
                        </li>
                        )
                }
            </ul>
        </nav>
    );
};

export default Navbar;