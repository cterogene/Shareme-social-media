import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin, GoogleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import ShareVideo from '../assets/share.mp4';
import Logo from '../assets/logowhite.png';
import { client } from '../client';
import jwt_decode from 'jwt-decode';
 

const Login = () => {
  const navigate = useNavigate();

  const responseGoogle = async (response) =>{
    const {name, sub, picture} = jwt_decode(response.credential);
    const doc = {
      _id: sub,
      _type: 'user',
      userName: name,
      image: picture,
    }
    client.createIfNotExists(doc)
    .then(() => {
      navigate('/', {replace: true})

    })
};

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
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
            <img src={Logo} width="130px" alt="logo" className='mb-5' />
            <GoogleLogin
              render={(renderProps) => ( 
                <button type="button" 
                className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay m-5'
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                >
                  <FcGoogle  /> Sign in with google
                </button>
              )}
              onSuccess={responseGoogle}
              onError={responseGoogle}
              cookiePolicy="single_host_origin "
            />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  )
}

export default Login
