import React from 'react'
import Hero from './Hero';
import Clients from './Clients';
import Services from './Services.jsx';
import Working from './Working';



const Home = () => {
    return (
        <div className='mt-28'>

            <Hero />
            <Clients />
            <Services />
            <Working />

        </div>
    )
}

export default Home
