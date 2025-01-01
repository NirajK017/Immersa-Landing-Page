import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='flex flex-col items=center mt-6 lg:mt-20'>
        <h1 className='text-4xl md:text-6xl lg:text-7xl text-center tracking-wide'>Immersa build tools for
            <div>
                <ReactTyped 
                className=' bg-gradient-to-r from-purple-800 to-purple-500 text-transparent bg-clip-text'
                strings={['developers']}
                typeSpeed={120}
                backSpeed={140}
                loop />
            </div>
        </h1>
        <p className='mt-10 text-lg text-neutral-500 max-w-4xl text-center'>Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!</p>
        <div className='flex justify-center my-10'>
            <a href="#" className='bg-gradient-to-r from-purple-500 to-purple-800 py-3 px-4 mx-3 rounded-md'>Start for free</a>
            <a href="#" className='py-3 px-4 mx-3 rounded-md border'>Documentation</a>
        </div>
        <div className='flex mt-10 justify-center'>
            <video autoPlay loop muted src={video1} type='video/mp4' className='rounded-lg w-1/2 border border-purple-700 shadow-purple-400 shadow-md mx-3 my-4' />
            <video autoPlay loop muted src={video2} type='video/mp4' className='rounded-lg w-1/2 border border-purple-700 shadow-purple-400 shadow-md mx-3 my-4' />
        </div>
    </div>
  )
}

export default Hero