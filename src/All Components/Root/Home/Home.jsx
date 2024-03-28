import React from 'react';

import Navbar2 from '../Navbar/Navbar2/Navbar2';
import ThreeBox from './ThreeBox/ThreeBox';
import Aboutus from './Aboutus/Aboutus';
import BenifitDrive from './BenifitDrive/BenifitDrive';
import GetStart from './GetStart/GetStart';
import Footer from './Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Faq from './Faq/Faq';



const Home = () => {
    return (
        <div className='bg-[#062244]'>

            <Navbar></Navbar>
            <Navbar2></Navbar2>
            <ThreeBox></ThreeBox>
            <Aboutus></Aboutus>
            <BenifitDrive></BenifitDrive>
            <Faq></Faq>
            <GetStart></GetStart>
            <Footer> </Footer>

        </div>
    );
};

export default Home;