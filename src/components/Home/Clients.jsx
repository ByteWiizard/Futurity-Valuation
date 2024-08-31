import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import zoom from '../../assets/zoom_logo.svg';

const Clients = () => {
    const clients = [
        zoom,
        zoom,
        zoom,
        zoom,
        zoom,
    ];

    return (
        <div className="py-12 bg-gray-100 mt-8 w-full">
            <h2 className="text-3xl text-gray-500 font-bold text-center mb-8 mt-10">
                Selected Clients
            </h2>
            <div className="container mx-auto">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 3000, // Delay between slides in ms (3 seconds)
                        disableOnInteraction: false, // Continue autoplay after user interaction
                    }}
                    modules={[Autoplay]} // Register the Autoplay module
                    breakpoints={{
                        1024: {
                            slidesPerView: 3,
                        },
                        600: {
                            slidesPerView: 2,
                        },
                        300: {
                            slidesPerView: 1,
                        },
                    }}
                >
                    {clients.map((client, index) => (
                        <SwiperSlide key={index}>
                            <div className="p-4">
                                <div className="p-6 rounded-lg text-center">
                                    <img
                                        src={client}
                                        alt="Client Logo"
                                        className="w-32 h-32 mx-auto mb-4"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Clients;
