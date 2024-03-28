import React from 'react';
import { FiUploadCloud } from "react-icons/fi";
import { BsDatabaseUp } from "react-icons/bs";
import { LuUsb } from "react-icons/lu";
import "./style.css"

const ThreeBox = () => {
    return (
        <div id='background'>
            <div className='grid md:grid-cols-3 gap-6 pb-16 mx:10 md:mx-20 text-white -mt-8'>
                <div id='card1' className='bg-[#01193c]   pl-6 pt-5 pr-10 pb-4 rounded-xl shadow-xl shadow-sky-600 h-full'>
                    <div className='rounded-full p-4 bg-gray-600 h-12 w-12 '>
                        <FiUploadCloud className='-mt-2 -ml-2 h-8 w-8'></FiUploadCloud>
                    </div>
                    <p className='text-2xl font-semibold my-4'>Cloud Lighting</p>
                    <p>Experience lightning-fast file sharing with our CloudLightning technology. Our platform leverages high-performance cloud computing infrastructure to deliver unparalleled speed.</p>
                </div>
                {/* second */}
                <div id='card2' className='h-full'>
                    <div className='bg-[#01193c] pl-6 pt-5 pr-4 pb-16 rounded-xl shadow-xl shadow-sky-600'>
                        <div className='rounded-full p-4 bg-gray-600 h-12 w-12 '>
                             
                            <BsDatabaseUp className='-mt-2 -ml-2 h-8 w-8'></BsDatabaseUp>
                        </div>
                        <p className='text-2xl font-semibold my-4'>Database Zap</p>
                        <p>DatabaseZap empowers you to effortlessly synchronize and transfer data between your database systems and our secure cloud storage environment</p>
                    </div>
                </div>
                {/* third  */}
                <div id='card3'>
                    <div className='bg-[#01193c] pl-6 pt-5 pr-4 pb-16 rounded-xl shadow-xl shadow-sky-600 h-full'>
                        <div className='rounded-full p-4 bg-gray-600 h-12 w-12 '>
                             
                             
                          
                            <LuUsb className='-mt-2 -ml-2 h-8 w-8'></LuUsb>
                        </div>
                        <p className='text-2xl font-semibold my-4'>Usb Services</p>
                        <p>Our file-sharing platform offers seamless integration with USB devices, allowing you to easily transfer files between your computer and external storage devices.</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ThreeBox;