import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        service: '',
        message: '',
        referral: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form data submitted:', formData);
    };

    return (
        <div className='mt-28 px-4 md:px-0 mb-10'>
            <section className="container mx-auto px-6 py-12">
                <div className="flex justify-center">
                    <h2 className="text-3xl text-gray-700 font-bold mb-4">Contact Us</h2>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-start">
                    {/* Description */}
                    <div className="lg:w-1/3 mb-8 lg:mb-0">

                        <p className="text-gray-700">
                            For any inquiries about Futurity and the services we provide, please fill out the form below. We ask for the following details so we can contact you and better serve you. We will respond shortly.
                        </p>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="lg:w-2/3 bg-white shadow-lg rounded-lg p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-gray-700">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="companyName" className="block text-gray-700">Company Name</label>
                                <input
                                    type="text"
                                    id="companyName"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="referral" className="block text-gray-700">How did you hear about us?</label>
                                <input
                                    type="text"
                                    id="referral"
                                    name="referral"
                                    value={formData.referral}
                                    onChange={handleChange}
                                    className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="service" className="block text-gray-700">Select a Service</label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
                                    required
                                >
                                    <option value="">-- Select a Service --</option>
                                    <option value="consulting">Consulting</option>
                                    <option value="development">Development</option>
                                    <option value="support">Support</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            <div className="md:col-span-2">
                                <label htmlFor="message" className="block text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="mt-2 block w-full p-3 border border-gray-300 rounded-lg"
                                    rows="5"
                                    required
                                ></textarea>
                            </div>
                        </div>
                        <div className="mt-8">
                            <button
                                type="submit"
                                className="font-bold text-xl text-white hover:text-black px-3 py-3 bg-gray-700 hover:bg-gray-200 rounded-lg transform duration-500"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>

        </div>
    );
}

export default Contact;