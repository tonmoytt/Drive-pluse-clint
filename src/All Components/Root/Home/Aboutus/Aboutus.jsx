import img from "./../../../../assets/Images/Aboutus1.webp"
import img1 from "./../../../../assets/Images/aboutus 2.webp"
import img2 from "./../../../../assets/Images/secure about.webp"
import { FaArrowRight } from "react-icons/fa6";
import "./style.css"
import { Link } from "react-router-dom";

const Aboutus = () => {
    return (
        <div id="background" className="py-10">
            <div className="mx-4 grid md:grid-cols-2 items-center border-l-8 border-l-gray-950">
                {/* image */}
                <div>
                    <div className="relative">
                        <img className="h-[640px] w-[300px] md:w-[470px] relative rounded-xl" src={img} alt="" />
                        <img className="hidden md:block h-[380px] w-[320px] absolute ml-[200px] md:ml-[235px]  -mt-[360px] rounded-lg" src={img1} alt="" />
                    </div>

                    <div className=" absolute flex gap-2 bg-slate-100 items-center pl-4 pr-10 pt-4 pb-4 rounded-xl mx-10 -mt-[120px]">
                        <img className="h-12 w-12" src={img2} alt="" />
                        <p className=" font-semibold text-2xl">Secure <span className="text-sky-400">File</span> Hosting!</p>
                    </div>

                </div>
                {/* pagarhaph */}
                <div>
                    <div className="flex text-white items-center gap-2 mt-8 md:mt-4 mb-2 md:mb-6">
                        <div className="   ">
                            <hr className="w-16 bg-teal-600 text-sky-400" />
                            <hr className="w-16 bg-teal-600text-sky-400" />
                            <hr className="w-16 bg-teal-600 text-sky-400" />
                        </div>
                        <p className="text-lg font-semibold uppercase">About us</p>
                    </div>
                    <h1 className="font-bold text-5xl md:text-6xl text-white">What is <span id="drive">DrivePulse?</span></h1>
                    <p className="mt-6 text-white">Working with coworkers, customers and partners has never been simpler. With CloudMe, not only can you securely share files, you can also create, edit and review documents with others in real time from anywhere, on any device. From simplifying the way you manage your content to empowering global teams, Box helps you work smarter than ever before.</p>
                    <Link> <button className="btn btn-outline btn-accent mt-10 text-xl px-10">More About Us
                        <FaArrowRight className=" "></FaArrowRight>
                    </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Aboutus;