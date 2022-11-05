import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin, GoogleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import ShareVideo from '../assets/share.mp4';
import Logo from '../assets/logowhite.png';
const Login = () => {
  return (
    <GoogleOAuthProvider clientId='427207223029-m5jf54duk3jf0atkorghvsfiiuigequ2.apps.googleusercontent.com'>
      <div className='flex justify-start items-center flex-col h-screen'>
        <div className='relative w-full h-full'>
          <video
            src={ShareVideo}
            type="video/mp4"
            loop
            controls={false}
            muted
            autoPlay
            className='w-full h-full object-cover'
          />

          <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
            <img src={Logo} width="130px" alt="logo" />
          </div>
          <div className='shadow-2xl'>
            <GoogleLogin
              clientId=""
              render={(renderProps) => (
                <button type="button" className='bg-mainColor flex justify-center'>
                  <FcGoogle className='mr-4' /> Sign in with Goodle
                </button>
              )}
            />

          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  )
}

export default Login
