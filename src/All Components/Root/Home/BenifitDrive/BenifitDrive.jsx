import React from 'react';
import { BsCalendarEvent } from "react-icons/bs";
import { TbMovie } from "react-icons/tb";
import { CgCalculator } from "react-icons/cg";
import { IoBookOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import "./Style.css"

import file from "./../../../../assets/Images/file withou bg.jpg"
import collaborate from "./../../../../assets/Images/colaborate.jpg"
import cloud from "./../../../../assets/Images/cloud.png"
import access from "./../../../../assets/Images/access.png"
import Handel from './Handel All file/Handle';

const BenifitDrive = () => {
    return (
        <div className='mt-28'>
            {/* Who Benefits from DrivePulse? */}
            <div>
                <h1 className='text-white text-center text-4xl font-semibold'>Who Benefits from <span className='text-sky-500'>DrivePulse?</span> </h1>
                {/* card section */}
                <div className='  gap-10 mt-10 py-10'>

                    {/* section 1 */}
                    <div className='grid md:grid-cols-3 justify-between mx-6 mb-14 gap-6'>
                        {/* card1 */}
                        <div id="rotate" className='text-center py-10 px-10 shadow-md shadow-blue-600 h-full hover:shadow-lg hover:shadow-blue-400'>
                            <IoBookOutline className='text-white h-12 w-12 mx-auto mb-10'
                            ></IoBookOutline>
                            <p className='text-2xl text-white font-bold mt-4'>Education</p>
                            <p className='  text-white mt-4 '>Simplify file sharing for educators and students, facilitating seamless document exchange and resource distribution.</p>
                        </div>
                        {/* card 2 */}
                        <div id="rotate">
                            <div className='text-center py-10 px-10 shadow-md shadow-blue-600 h-full  hover:shadow-lg hover:shadow-blue-400'>
                                <LuUser2 className='text-white h-12 w-12 mx-auto mb-10'></LuUser2>
                                <p className='text-2xl text-white font-bold mt-4'>Personal Use</p>
                                <p className='  text-white mt-4 '>Simplify personal file sharing, allowing users to effortlessly share documents, photos, and more with friends and family.</p>
                            </div>
                        </div>
                        {/* card 3 */}
                        <div id="rotate">
                            <div className='text-center py-10 px-10 shadow-md shadow-blue-600 h-full  hover:shadow-lg hover:shadow-blue-400'>
                                <LiaBusinessTimeSolid className='text-white h-12 w-12 mx-auto mb-10'></LiaBusinessTimeSolid>
                                <p className='text-2xl text-white font-bold mt-4'>Business and Corporate Sector</p>
                                <p className='  text-white mt-4 '>Effortlessly share files within your organization, enhancing collaboration and boosting productivity.</p>
                            </div>
                        </div>
                    </div>

                    {/* secton 2 */}
                    <div className='grid md:grid-cols-3 justify-between mx-6 gap-6 '>
                        {/* card 4 */}
                        <div id="rotate" className='text-center py-10 px-10 shadow-md shadow-blue-600 h-full  hover:shadow-lg hover:shadow-blue-400'>
                            <TbMovie className='text-white h-12 w-12 mx-auto mb-10'></TbMovie>
                            <p className='text-2xl text-white font-bold mt-4'>Media and Entertainment</p>
                            <p className='  text-white mt-4 '>Streamline file sharing for media production, allowing quick exchange of media files and project collaboration.</p>
                        </div>
                        {/* card 5 */}
                        <div id="rotate">
                            <div className='text-center py-10 px-10 shadow-md shadow-blue-600 h-full hover:shadow-lg hover:shadow-blue-400'>

                                <CgCalculator className='text-white h-12 w-12 mx-auto mb-10'></CgCalculator>

                                <p className='text-2xl text-white font-bold mt-4'>Government and Public Sector</p>
                                <p className='  text-white mt-4 '>Enhance government workflows by securely sharing documents, fostering efficient interdepartmental communication.</p>
                            </div>
                        </div>
                        {/* card 6 */}
                        <div id="rotate">
                            <div className='text-center py-10 px-10 shadow-md shadow-blue-600 h-full hover:shadow-lg hover:shadow-blue-400'>
                                <BsCalendarEvent className='text-white h-12 w-12 mx-auto mb-10'></BsCalendarEvent>
                                <p className='text-2xl text-white font-bold mt-'>Event Management</p>
                                <p className='  text-white mt-4 '>Facilitate seamless event planning by sharing event-related files, ensuring all stakeholders stay informed and organized.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Handles all of your file needs */}
            <div className='mt-20'>
                <div className='text-center justify-center text-lg'>
                    <h1 className='text-white text-center mx-4 md:mx-0 lg:mx0 text-3xl md:text-5xl font-bold'>Handles all of <span className='text-blue-400'>your file</span>  needs</h1>
                    <p className='mt-4 text-white'>File storage made easy – including powerful features you won’t find anywhere else. <br /> Whether you’re sharing photos, videos, audio, or docs, DrivePulse can simplify your <br />workflow.</p>
                </div>
                {/* section 1 */}
                 <Handel></Handel>
            </div>
        </div>
    );
};

export default BenifitDrive;