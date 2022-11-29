import React, {useState, useRef, useEffect} from 'react'
import {HiMenu} from 'react-icons/hi';
import {AiFillCloseCircle} from 'react-icons/ai';
import {Link, Route, Routes} from 'react-router-dom';
import {sidebar, userProfile} from '../components';
import { client } from '../client';
import logo from '../assets/logo.png';
import Pins from './Pins';

const Home = () => {
  return (
    <div>
      Home
    </div>
  )
}

export default Home
