import React from 'react'
import { Clock, Handshake, Target } from 'lucide-react'
const Working = () => {
    return (
        <section className="flex flex-col items-center py-12 px-4 container mx-auto my-8">

            <h2 className="text-3xl text-gray-700 font-bold mb-2 text-center">Working Process</h2>

            <div className="w-24 h-1 bg-gray-400 mb-8"></div>


            <div className="text-center mb-8">
                <p className="text-lg text-gray-500 mb-2  ">Our experienced team understands that each client has a distinct set of needs. We are dedicated to refining and implementing the most effective strategies for conducting valuations, assessing risk, and identifying business opportunities, all with the goal of helping our clients achieve success.</p>
                {/* <p className="text-lg text-gray-600">Second line of text</p> */}
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl w-full">
                <div className="p-6 text-center flex flex-col items-center">
                    <div className="mb-4">
                        {/* Replace with your icon component or an image */}
                        <Clock size={60} color='gray' />
                    </div>
                    <h3 className="text-lg text-gray-700 font-semibold mb-2">Timely</h3>
                    {/* <p className="text-gray-600"> */}
                    {/* <h3 className="text-lg font-semibold mb-2">Timely</h3> */}
                    <p className="text-gray-500">
                        Futurity goes the extra mile to meet any tight timelines or deadlines set by our clients.
                    </p>

                </div>

                <div className="p-6 text-center flex flex-col items-center">
                    <div className="mb-4">
                        {/* Replace with your icon component or an image */}
                        <Handshake size={60} color='gray' />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Communication</h3>
                    <p className="text-gray-500">
                        Futurity prides itself in keeping its clients informed throughout the valuation process.
                    </p>

                </div>
                <div className="p-6 text-center flex flex-col items-center">
                    <div className="mb-4">
                        <Target size={60} color='gray' />
                    </div>
                    <h3 className="text-lg text-gray-700 font-semibold mb-2">Accuracy</h3>
                    <p className="text-gray-600">
                        Futurity multi-tiered review system ensures pinpoint accuracy for its deliverables.
                    </p>

                </div>

            </div>
        </section>
    )
}

export default Working
