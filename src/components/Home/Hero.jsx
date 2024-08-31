import React from 'react'
import Lottie from 'lottie-react';
import animationData from '../../assets/Animation - 1724827126639.json';
import GreyButton from '../buttons/GreyButton';
import { useNavigate } from 'react-router-dom';
const Hero = () => {

    const navigate = useNavigate();
    function OnClick() {
        navigate('/contact');
    }
    return (
        <div className='flex flex-col justify-center text-center items-center h-[400px] md:h-[700px]'>
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
            <GreyButton Content={`Let's Connect`} onClick={OnClick} />
        </div>
    )
}

export default Hero
