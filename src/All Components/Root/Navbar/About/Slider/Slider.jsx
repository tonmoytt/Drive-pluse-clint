import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';


import tonmoy from "./../../../../../assets/Images/tonmoy.jpg"
import sayeed from "./../../../../../assets/Images/sayeed.jpg"
import gmail from "./../../../../../assets/Images/gmail.webp"
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Slider = () => {
    return (
        <div className="mt-6">

            <h1 className="text-white text-center text-3xl font-semibold">Our Team <span className="text-sky-400">Members</span></h1>

            {/* slide */}
            <div className='text-white mx-2 md:mx-6 lg:mx-20'>
                <Swiper
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper mt-16"
                >
                    {/* swipe start */}
                    <SwiperSlide className='text-center'>
                        <div className="card w-[270px] md:w-[410px] bg-base-100 mx-auto">
                            <figure>
                                <img className='rounded-full h-60 md:h-72 lg:h-80 w-60 md:w-72 lg:w-80' src={tonmoy} alt="Tonmoy" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-black text-2xl">Tafsirul Tonmoy</h2>
                                <p id='font' className='text-black text-start  '>Hi, i am Tafsirul Tonmoy. I am a MERN stack web developer. I have nine month learning exprience in this field. I am using HTML,CSS,React, Tailwind for Front-end development and Node.js, Express.js for Back-end development. I also use Mongodb for database</p>
                                {/* btn */}
                                <div className="text-center  mx-auto mt-4">
                                    <div className='gap-4 md:gap-10 flex'>
                                        <FaFacebookF className='bg-blue-600 w-[34px] h-[34px] rounded-full p-[5px]'></FaFacebookF>
                                        <FaLinkedinIn className='bg-blue-500 w-[34px] h-[34px] rounded-full p-[5px]'></FaLinkedinIn>

                                        <img className='bg-gray-100 w-[38px] h-[38px] rounded-full p-[5px]' src={gmail} alt="" />
                                        <FaGithub className='bg-gray-500 w-[34px] h-[34px] rounded-full p-[5px]'></FaGithub>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </SwiperSlide>
                    {/* second  */}
                    <SwiperSlide className='text-center'>
                        <div className="card w-[270px] md:w-[410px]  bg-base-100 mx-auto">
                            <figure>
                                <img className='rounded-full h-60 md:h-72 lg:h-80 w-60 md:w-72 lg:w-80' src={sayeed} alt="Tonmoy" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-black text-2xl">Abu Sayeed</h2>
                                <p id='font' className='text-black text-start  '>Hi, i am Abu Sayeed. I am a MERN stack web developer. I have nine month learning exprience in this field. I am using HTML,CSS,React, Tailwind for Front-end development and Node.js, Express.js for Back-end development. I also use Mongodb for database</p>
                                {/* btn */}
                                <div className="text-center  mx-auto mt-4">
                                    <div className='gap-4 md:gap-10 flex'>
                                        <FaFacebookF className='bg-blue-600 w-[34px] h-[34px] rounded-full p-[5px]'></FaFacebookF>
                                        <FaLinkedinIn className='bg-blue-500 w-[34px] h-[34px] rounded-full p-[5px]'></FaLinkedinIn>

                                        <img className='bg-gray-100 w-[38px] h-[38px] rounded-full p-[5px]' src={gmail} alt="" />
                                        <FaGithub className='bg-gray-500 w-[34px] h-[34px] rounded-full p-[5px]'></FaGithub>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </SwiperSlide>
                    {/* third  */}
                    {/* four  */}
                    {/* five  */}



                </Swiper>
            </div>
        </div>
    );
};

export default Slider;