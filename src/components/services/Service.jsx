import React from 'react'
import Women from '../../assets/women.jpg'
import Compliance from '../../assets/Compliance.png'
import Valuation from '../../assets/Valuation.png'
import Consulting from '../../assets/Consulting.png'
import { useNavigate } from 'react-router-dom';
import GreyButton from '../buttons/GreyButton'

export default function Services() {


    const services = [
        { name: 'Compilance', image: Compliance },
        { name: 'Valuation', image: Valuation },
        { name: 'Consulting', image: Consulting },
        { name: 'Compilance', image: Compliance },
        { name: 'Valuation', image: Valuation },
        { name: 'Consulting', image: Consulting },
        { name: 'Compilance', image: Compliance },
        { name: 'Valuation', image: Valuation },
        { name: 'Consulting', image: Consulting },
        { name: 'Compilance', image: Compliance },
        { name: 'Valuation', image: Valuation },
        { name: 'Consulting', image: Consulting },

    ];

    const navigate = useNavigate();


    const handleClick = () => {
        navigate('/contact');
    };

    return (

        <div className='mt-28 px-4 md:px-0 mb-10'>
            {/* //upper section */}
            <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-6 rounded-lg shadow-md">

                {/* Left Side Image */}
                <div className="md:w-3/5 w-full mb-6 md:mb-0 md:mr-6">
                    <img
                        src={Women}
                        alt="Our Services"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>

                {/* Right Side Content */}
                <div className="md:w-2/5 w-full">
                    <p className="text-gray-800 text-justify mb-4">
                        Our experienced and capable team provides comprehensive solutions tailored for sizeable operations.
                        We specialize in transactions disputes, compliance, valuations, liquidation (IBC), inward & outward
                        transfers, fairness opinions, IND-AS compliances, purchase price allocations, impairment testing,
                        and expert witness testimony.
                    </p>
                    <p className="text-gray-800 text-justify">
                        From family settlements and litigation support to dissenting shareholder’s claims and damage assessments,
                        we assist in complex areas such as mergers and acquisitions, corporate restructurings, fund NAV computations,
                        ESOP/sweat equity valuations, and debt restructurings. We have expertise in valuing instruments like shares,
                        debt products/derivatives, disputes/arbitrations, property, plant & equipment, and intangible assets
                        (including goodwill, customer relations, and brands). We also offer services for claims, loss/financial
                        evaluations, and distress deals.
                    </p>
                </div>
            </div>

            <div className='mt-10'>
                <h2 className="text-center text-2xl font-bold text-gray-700 mb-6">Futurity specializes in the following areas</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 px-4 md:px-0 lg:px-4 container mx-auto ">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-center bg-gray-100 p-2 rounded-lg shadow-md">
                            <img src={service.image} alt={service.name} className="w-full h-32 object-contain rounded-md mb-2 hover:scale-110" />
                            <h3 className="text-center text-sm font-medium text-gray-800">{service.name}</h3>
                        </div>
                    ))}
                </div>
            </div>

            <div className='mt-10'>
                <h2 className='text-center text-2xl font-bold text-gray-700 mb-6'>Ready to move forward?</h2>
                <div className="flex justify-center items-center">
                    <GreyButton Content={`Contact Us`} onClick={handleClick} />
                </div>

            </div>
        </div>
    )
}
