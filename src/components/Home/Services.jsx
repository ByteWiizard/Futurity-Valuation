import React from 'react'
import Compliance from '../../assets/Compliance.png'
import Valuation from '../../assets/Valuation.png'
import Consulting from '../../assets/Consulting.png'
import { Link, useNavigate } from 'react-router-dom';


const Services = () => {
    const services = [
        {
            imgSrc: Compliance,
            title: 'Compliance',
            description: 'Ensure your business meets regulatory requirements with our comprehensive valuation services. We specialize in valuations under the Companies Act 2013, SEBI Regulations, SARFAESI Act 2002, and financial reporting regulations.',
            link: '/services-details',
        },
        {
            imgSrc: Valuation,
            title: 'Valuation',
            description: 'Support your financial and strategic decisions with our independent valuation services. We offer expert valuations for angel investment, venture capital, private equity, foreign direct investment, and franchise arrangements.',
            link: '/services-details',
        },
        {
            imgSrc: Consulting,
            title: 'Consulting',
            description: 'Optimize project feasibility and asset management with our consulting services. We conduct techno-economic viability studies, independent engineer studies, and physical verification of assets.',
            link: '/services-details',
        },
    ];

    const navigate = useNavigate();


    const handleClick = () => {
        navigate('/services');
    };


    return (
        <div className='my-8'>
            <div className="bg-white">
                <div className="container mx-auto">
                    <div className="text-center my-8 gap-y-4 flex flex-col ">
                        <span className="text-gray-700 text-2xl font-semibold">___Services__</span>
                        <h2 className="text-3xl text-gray-700 font-bold mt-2">
                            We’re Flexible to <b>Provide You Best</b>
                        </h2>
                    </div>

                    <div className="flex flex-wrap justify-between pt-12">
                        {services.map((service, index) => (
                            <div key={index} className="w-full lg:w-1/3 md:w-full px-4 mb-8">
                                <div className="bg-white p-4 rounded-lg shadow-md h-full">
                                    <Link to={service.link}>
                                        <img
                                            src={service.imgSrc}
                                            alt="Service Icon"
                                            className="mb-4 mx-auto h-32"
                                        />
                                    </Link>
                                    <h3 className="text-base text-gray-700 text-center font-semibold mb-3">
                                        <Link to={service.link}>{service.title}</Link>
                                    </h3>
                                    <p className='text-gray-600'>{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <button
                    onClick={handleClick}
                    className="font-bold text-xl text-white hover:text-black px-3 py-3 bg-gray-700 hover:bg-gray-200 rounded-lg transform duration-500"
                >
                    Learn More
                </button>
            </div>
        </div>
    )
}

export default Services
