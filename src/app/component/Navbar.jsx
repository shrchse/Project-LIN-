"use client"

import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className='flex justify-between w-screen h-20 fixed items-center md:px-16 sm:px-4'>
        <p className='text-4xl tracking-tighter ml-5 md:ml-0'>-LIN-</p>
        <div className='tracking-widest'>
            <Link href="/home" passHref><span className=' opacity-50 hover:opacity-100 mr-10'>Projects</span></Link>
            <Link href="/home" passHref><span className=' opacity-50 hover:opacity-100 mr-5'>About</span></Link>
        </div>
    </nav>
  );
};

export default Navbar;
