
import { FaFacebookF } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import "./Style.css"

const Footer = () => {
    return (
        <div>
            <div className="grid md:grid-cols-2 pt-20 py-6 justify-between border-b-4">



                {/* section 1 */}
                <div className="mx-auto md:mx-auto lg:mx-32  md:ml-10 ">


                    <div className="style-css ">
                        <h2 data-text="DrivePluse" className="style-css-two text-4xl  ml-32 md:ml-24 lg:ml-8">DrivePluse</h2>
                    </div>

                    <div className="flex gap-3 mt-4 ml-6 md:ml-0 lg:ml-0">
                        <div>
                            <FaFacebookF className=" w-12 h-12 rounded-full bg-white p-2"></FaFacebookF>
                        </div>
                        <div >


                            <LuTwitter className=" w-12 h-12 rounded-full bg-white p-2"></LuTwitter>
                        </div>
                        <div >


                            <FaWhatsapp className=" w-12 h-12 rounded-full bg-white p-2"></FaWhatsapp>
                        </div>
                        <div >


                            <FaInstagram className=" w-12 h-12 rounded-full bg-white p-2"></FaInstagram>
                        </div>
                    </div>
                </div>

                {/* section 2 */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-auto md:mx-1 gap-2 md:gap-1 lg:gap-8 mt-10 md:mt-0  ">


                    <div className="text-white">
                        <p className="text-lg md:text-xl lg:text-2xl   uppercase mb-4  ">FEATURES
                        </p>
                        <div className="w-28 mb-6">
                            <hr />
                        </div>
                        <p className="text-xl mb-4 text-gray-400">File Upload</p>
                        <p className="text-xl mb-4 text-gray-400">File Sharing</p>
                        <p className="text-xl mb-4 text-gray-400"> Access File</p>
                        <p className="text-xl mb-4 text-gray-400"> Notification</p>
                    </div>
                    {/* section 2.1 */}
                    <div className="text-white">
                        <p className=" text-lg md:text-xl lg:text-2xl  uppercase mb-4">LEARN MORE
                        </p>
                        <div className="w-36 mb-6">
                            <hr />
                        </div>
                        <p className="text-xl mb-4 text-gray-400">About</p>
                        <p className="text-xl mb-4 text-gray-400">Blog</p>
                        <p className="text-xl mb-4 text-gray-400"> Contact</p>
                        <p className="text-xl mb-4 text-gray-400"> Dashboard</p>
                    </div>
                    {/* section 2.2 */}
                    <div className="block md:hidden lg:block text-white">
                        <p className="text-2xl  uppercase mb-4">SUPPORTS
                        </p>
                        <div className="w-28 mb-6">
                            <hr />
                        </div>
                        <p className="text-xl mb-4 text-gray-400">Help Center</p>
                        <p className="text-xl mb-4 text-gray-400">Privacy Policy</p>
                        <p className="text-xl mb-4 text-gray-400"> Contact Us</p>
                        <p className="text-xl mb-4 text-gray-400">Terms of Use</p>
                    </div>
                </div>

            </div>
            {/* second last */}
            <div className="bg-[#011a38]">
                <p className="  text-xl font-semibold text-gray-300 text-center py-4 pb-6">  Binary Master ©2024 . All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;