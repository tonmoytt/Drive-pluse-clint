import "./style.css"

import Gif from "./../../../../assets/Images/Gif 2.gif"
import { Link } from "react-router-dom";
const Navbar2 = () => {
    return (
        <div className="hero min-h-screen -mt-[85px]" style={{ backgroundImage: 'url(https://r4.wallpaperflare.com/wallpaper/183/755/737/polygon-4k-5k-8k-wallpaper-739ba3fd1d690be50fa6422768db4878.jpg)' }}>
            <div className="hero-overlay bg-opacity-30"></div>

            {/* content here */}

            <div className="grid md:grid-cols-2 mt-16 justify-between w-full">
                <div className="mx-4 md:mx-6 lg:mx-10   ">
                    <div className="flex text-white items-center gap-2 mt-8 md:mt-4 mb-2 md:mb-6">
                        <div className="bg-teal-600 text-emerald-500">
                            <hr className="w-16 bg-teal-600" />
                            <hr className="w-16 bg-teal-600" />
                            <hr className="w-16 bg-teal-600" />
                        </div>
                        <p className="text-lg font-semibold ">FILE SHARING PLATEFORM</p>
                    </div>
                    <div id="color">
                        <h1 id="color2" className="text-2xl md:text-5xl font-bold mb-6  text-white">Share, Store, and <br />Collaborate with Ease!</h1>
                    </div>
                    <p className="text-white">Discover effortless file sharing at DrivePulse. Upload, share, and <br /> collaborate seamlessly with our intuitive platform. Enjoy <br /> secure storage, unlimited file  uploads, and simplified <br /> sharing—all in one place. Join us today and experience <br /> hassle-free file sharing like never before!</p>



                    <div id="border-box">

                        <div id="border-animation" className="text-lg">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Get started
                        </div>
                    </div>


                </div>

                {/* second */}
                <div>
                    <img className="h-9/12 w-9/12 md:ml-40" src={Gif} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar2;