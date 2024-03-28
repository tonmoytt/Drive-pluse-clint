import "./style.css"

import Gif from "./../../../../assets/Images/Gif 2.gif"
import song from "./../../../../assets/Images/336759324_596093579099305_2864569221170829619_n.mp4"
import { RiVideoLine } from "react-icons/ri";

const Navbar2 = () => {
    return (
        <div className="hero min-h-screen  -mt-[85px] pb-20 md:pb-32 lg:pb-20" style={{ backgroundImage: 'url(https://r4.wallpaperflare.com/wallpaper/183/755/737/polygon-4k-5k-8k-wallpaper-739ba3fd1d690be50fa6422768db4878.jpg)' }}>
            <div className="hero-overlay bg-opacity-30"></div>

            {/* content here */}

            <div className="grid md:grid-cols-2 mt-16 gap-32 md:gap-2 lg:gap-0  justify-between   w-full">
                {/* first */}
                <div className="mx-4 md:mx-6 lg:mx-10  mt-0 md:mt-0 lg:mt-10 ">
                    <div className="flex text-white items-center gap-2 mt-12 md:mt-4 mb-2 md:mb-6">
                        <div className="bg-teal-600  ml-6 md:ml-0 text-emerald-500">
                            <hr className="w-16 bg-teal-600" />
                            <hr className="w-16 bg-teal-600" />
                            <hr className="w-16 bg-teal-600" />
                        </div>
                        <p className="text-lg font-semibold ">FILE SHARING PLATEFORM</p>
                    </div>
                    <div id="color">
                        <h1 id="color2" className="text-2xl md:text-5xl font-bold mb-6  text-white">Share, Store, and <br />Collaborate with Ease!</h1>
                    </div>
                    <p className="hidden md:block text-white">Discover effortless file sharing at DrivePulse. Upload, share, and <br /> collaborate seamlessly with our intuitive platform. Enjoy <br /> secure storage, unlimited file  uploads, and simplified <br /> sharing—all in one place. Join us today and experience <br /> hassle-free file sharing like never before!</p>



                    <div id="border-box">

                        <div id="border-animation" className="text-lg mt-5 md:mt-16">
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
                    <img className="h-9/12 w-9/12 ml-12 md:ml-24 lg:ml-32" src={Gif} alt="" />
                </div>
            </div>

            {/* model */}

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="ml-[250px] md:ml-0 -mb-[16px] md:mt-[550px]  " onClick={() => document.getElementById('my_modal_5').showModal()}>
                <RiVideoLine className=" bg-sky-300 rounded-2xl h-10 md:h-12 lg:h-14 w-10 md:w-12 lg:w-14"></RiVideoLine>
            </button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">

                    {/* video */}
                    <video
                    controls
                    src={song}
                    
                    />


                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-secondary">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default Navbar2;