import React, { useState } from 'react';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b shadow-sm">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4 ">
                {/* Logo */}
                <a href="/" className="flex items-center space-x-3">
                    <img src={logo} className="h-16 md:h-20" alt="Logo" />
                </a>

                {/* Hamburger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-controls="navbar-sticky"
                    aria-expanded={isOpen ? "true" : "false"}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? "M2 2l12 12M2 14L14 2" : "M1 1h15M1 7h15M1 13h15"}
                        />
                    </svg>
                </button>

                {/* Mobile View Items */}
                <div
                    className={`${isOpen ? "block" : "hidden"} w-full md:hidden`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 mt-4 space-y-2 font-bold text-gray-500 bg-gray-50 rounded-lg">
                        <li>
                            <a href="/services" className="block py-2 px-3 rounded hover:bg-gray-100 hover:underline">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="/product" className="block py-2 px-3 rounded hover:bg-gray-100 hover:underline">
                                Product
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="block py-2 px-3 rounded hover:bg-gray-100 hover:underline">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="/team" className="block py-2 px-3 rounded hover:bg-gray-100 hover:underline">
                                Team
                            </a>
                        </li>
                        <li>
                            <a href="/" className="block py-2 px-3 rounded hover:bg-gray-100 hover:underline">
                                Careers
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="block py-2 px-3 rounded hover:bg-gray-100 hover:underline" >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Laptop View Items */}
                <div className="hidden md:flex md:items-center md:w-auto">
                    <ul className="flex flex-row space-x-8 font-semibold text-black">
                        <li>
                            <a href="/services" className="py-2 px-3 hover:underline">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="/product" className="py-2 px-3 hover:underline">
                                Product
                            </a>
                        </li>
                        <li>
                            <a href="/about" className="py-2 px-3 hover:underline">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="/team" className="py-2 px-3 hover:underline">
                                Team
                            </a>
                        </li>
                        <li>
                            <a href="/" className="py-2 px-3 hover:underline">
                                Careers
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="py-2 px-3 hover:underline">
                                Contact
                            </a>
                        </li>
                        {/* Additional Items for Laptop View */}
                        <li>
                            <a href="/blog" className="py-2 px-3 hover:underline">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="/faq" className="py-2 px-3 hover:underline">
                                FAQ
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;