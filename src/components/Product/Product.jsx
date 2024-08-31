import React from 'react';
import Productimage from '../../assets/product.jpg';
import Faq from './Faq';
import GreyButton from '../buttons/GreyButton';

export default function Product() {
    return (
        <div className="mt-28 px-4 md:px-0 mb-10">
            {/* Upper Section */}
            <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-6 rounded-lg shadow-md">
                {/* Left Side Image */}
                <div className="md:w-2/5 w-full mb-6 md:mb-0 md:mr-6">
                    <h2 className="text-gray-800 text-center text-lg md:text-xl lg:text-2xl font-bold px-4">
                        Futurity-charge your portfolio valuations with Futurity’s software and enhanced services.
                    </h2>
                    <div className="flex justify-center items-center mt-4">
                       <GreyButton Content={`Request Demo`}/>
                    </div>
                </div>
                {/* Right Side Content */}
                <div className="md:w-3/5 w-full">
                    <img
                        src={Productimage}
                        alt="Our Services"
                        className="w-full h-auto rounded-lg shadow-lg"
                        style={{
                            maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                            WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)',
                        }}
                    />
                </div>
            </div>

            {/* Our Approach Section */}
            <section className="mb-12 bg-gray-50 py-12">
                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Our Approach</h2>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {/* Arrows */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full flex flex-col justify-between pointer-events-none">
                            <div className="h-1 w-8 bg-gray-300 mx-auto rounded"></div>
                            <div className="h-8 w-8 bg-gray-300 mx-auto rounded-full"></div>
                            <div className="h-1 w-8 bg-gray-300 mx-auto rounded"></div>
                        </div>

                        {/* Understanding */}
                        <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 relative z-10">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6">
                                <div className="text-2xl font-bold text-blue-500">1</div>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Understanding</h3>
                            <p className="text-gray-700 mb-3">1. Understanding the objective of the Engagement.</p>
                            <p className="text-gray-700 mb-3">2. Understanding the underlying asset/business.</p>
                            <p className="text-gray-700">3. Understand underlying compliance requirements and regulations.</p>
                        </div>

                        {/* Appropriate Information */}
                        <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 relative z-10">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6">
                                <div className="text-2xl font-bold text-green-500">2</div>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Appropriate Information</h3>
                            <p className="text-gray-700 mb-3">1. Obtain client-specific information.</p>
                            <p className="text-gray-700 mb-3">2. Obtain external information.</p>
                            <p className="text-gray-700 mb-3">3. In-house industry research reports.</p>
                            <p className="text-gray-700">4. Through Corporate databases.</p>
                        </div>

                        {/* Analysis & Discussions */}
                        <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 relative z-10">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6">
                                <div className="text-2xl font-bold text-red-500">3</div>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Analysis & Discussions</h3>
                            <p className="text-gray-700 mb-3">1. Review information.</p>
                            <p className="text-gray-700 mb-3">2. Benchmarking.</p>
                            <p className="text-gray-700 mb-3">3. FIT analysis.</p>
                            <p className="text-gray-700 mb-3">4. Strategic Discussions with the client.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Valuation Methods Section */}
            <section className="mb-12 py-12">
                <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-10">Valuation Methods</h2>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Method 1 */}
                        <div className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fade-in animation-delay-200">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Book Value</h3>
                            <p className="text-gray-600 text-center">Considered where there is no significant movement in the actual value of assets.</p>
                            <div className="absolute inset-0 bg-blue-50 rounded-lg opacity-30"></div>
                        </div>

                        {/* Method 2 */}
                        <div className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fade-in animation-delay-400">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Realizable Value</h3>
                            <p className="text-gray-600 text-center">Used when the valuation is carried out on an ordinary or distress sale basis.</p>
                            <div className="absolute inset-0 bg-blue-50 rounded-lg opacity-30"></div>
                        </div>

                        {/* Method 3 */}
                        <div className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fade-in animation-delay-600">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Replacement Value</h3>
                            <p className="text-gray-600 text-center">Estimates the fair value of assets on a going concern basis.</p>
                            <div className="absolute inset-0 bg-blue-50 rounded-lg opacity-30"></div>
                        </div>

                        {/* Method 4 */}
                        <div className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fade-in animation-delay-800">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Discounted Cash Flow Method</h3>
                            <p className="text-gray-600 text-center">Projects expected after-tax free cash flows and discounts them to determine the value.</p>
                            <div className="absolute inset-0 bg-blue-50 rounded-lg opacity-30"></div>
                        </div>

                        {/* Method 5 */}
                        <div className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fade-in animation-delay-1000">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Earning Capitalization Method</h3>
                            <p className="text-gray-600 text-center">Looks at earning potential based on historical and current financial information.</p>
                            <div className="absolute inset-0 bg-blue-50 rounded-lg opacity-30"></div>
                        </div>

                        {/* Method 6 */}
                        <div className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fade-in animation-delay-1200">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Comparable Company Multiples</h3>
                            <p className="text-gray-600 text-center">Compares operational metrics and valuation multiples of listed peer companies.</p>
                            <div className="absolute inset-0 bg-blue-50 rounded-lg opacity-30"></div>
                        </div>

                        {/* Method 7 */}
                        <div className="relative flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 animate-fade-in animation-delay-1400">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">Recent Transactions Method</h3>
                            <p className="text-gray-600 text-center">Estimates the value based on recent transactions involving the subject company.</p>
                            <div className="absolute inset-0 bg-blue-50 rounded-lg opacity-30"></div>
                        </div>
                    </div>
                </div>
            </section>

            <Faq />
        </div>
    );
}
