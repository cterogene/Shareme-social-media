import React, {useState, useRef, useEffect} from 'react'
import {HiMenu} from 'react-icons/hi';
import {AiFillCloseCircle} from 'react-icons/ai';
import {Link, Route, Routes} from 'react-router-dom';
import {sidebar, userProfile} from '../components';
import { client } from '../client';
import logo from '../assets/logo.png';
import Pins from './Pins';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

  return (
    <div className='flex bg-gray-50 md:flex-row flex-col h-screen transaction-height duration-75 ease-out'>
      <div className='hidden md:flex h-screen flex-initial'>
        <Sidebar />
      </div>
      <div className='flex md:hidden flex-row'>
        <HiMenu fontSize={40} className='cursor-pointer' onClick={() => setToggleSidebar(false)}/>
        <Link to='/' >
          <img  src={logo} alt='logo' className='w-28'/>
        </Link>
      </div>
    </div>
  )
}

export default Home
