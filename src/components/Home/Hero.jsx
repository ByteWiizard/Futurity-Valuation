import React from 'react'
import Lottie from 'lottie-react';
import animationData from '../../assets/Animation - 1724827126639.json';

const Hero = () => {
    return (
        <div className='flex flex-col justify-center text-center items-center h-[400px] md:h-[700px]'>
            {/* style={{ width: 600, height: 600 }} */}
            <div className="block md:hidden">
                <Lottie animationData={animationData} loop={true} style={{
                    width: 300,
                    height: 300,
                }} />
            </div>
            <div className="hidden md:block">
                <Lottie animationData={animationData} loop={true} style={{
                    width: 600,
                    height: 600,

                }} />
            </div>
            <button className='font-bold text-xl text-white hover:text-black px-3 py-3 bg-gray-700 hover:bg-gray-200 rounded-lg transform duration-500'>
                Let's Connect
            </button>
        </div>
    )
}

export default Hero
