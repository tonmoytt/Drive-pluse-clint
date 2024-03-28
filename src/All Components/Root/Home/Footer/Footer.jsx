
import { FaFacebookF } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import "./Style.css"

const Footer = () => {
    return (
        <div>
            <div className="grid md:grid-cols-4 pt-20 py-6 justify-between border-b-4">



                {/* section 1 */}
                <div className="mx-auto md:mx-auto lg:mx-24  md:ml-10 ">


                    <div className="style-css ml-0 md:ml-4 lg:ml-[30px]">
                        <h2 data-text="DrivePluse" className="style-css-two text-4xl  ml-32 md:ml-24 lg:">DrivePluse</h2>
                    </div>

                    <div className="flex gap-3  mt-4 ml-6 md:ml-0 lg:ml-0">
                        <div>
                            <FaFacebookF className=" w-10 h-10 rounded-full bg-white p-2"></FaFacebookF>
                        </div>
                        {/* second */}
                        <div >
                            <LuTwitter className=" w-10 h-10 rounded-full bg-white p-2"></LuTwitter>
                        </div>
                        {/* third */}
                        <div >
                            <FaWhatsapp className=" w-10 h-10 rounded-full bg-white p-2"></FaWhatsapp>
                        </div>
                        {/* four */}
                        <div >
                            <FaInstagram className=" w-10 h-10 rounded-full bg-white p-2"></FaInstagram>
                        </div>
                    </div>
                </div>

                {/* section 2 */}



                <div className="text-white text-center">
                    <p className="text-lg md:text-xl lg:text-2xl   uppercase mb-4  ">FEATURES
                    </p>
                    <div className="w-28 mx-auto mb-6">
                        <hr />
                    </div>
                    <p className="text-xl mb-4 text-gray-400">File Upload</p>
                    <p className="text-xl mb-4 text-gray-400">File Sharing</p>
                    <p className="text-xl mb-4 text-gray-400"> Access File</p>
                    <p className="text-xl mb-4 text-gray-400"> Notification</p>
                </div>
                {/* section 2.1 */}
                <div className="text-white text-center">
                    <p className=" text-lg md:text-xl lg:text-2xl  uppercase mb-4">LEARN MORE
                    </p>
                    <div className="w-36 mx-auto mb-6">
                        <hr />
                    </div>
                    <p className="text-xl mb-4 text-gray-400">About</p>
                    <p className="text-xl mb-4 text-gray-400">Blog</p>
                    <p className="text-xl mb-4 text-gray-400"> Contact</p>
                    <p className="text-xl mb-4 text-gray-400"> Dashboard</p>
                </div>
                {/* section 2.2 */}
                <div className="block md:hidden lg:block text-white text-center">
                    <p className="text-2xl  uppercase mb-4">SUPPORTS
                    </p>
                    <div className="w-28 mx-auto mb-6">
                        <hr />
                    </div>
                    <p className="text-xl mb-4 text-gray-400">Help Center</p>
                    <p className="text-xl mb-4 text-gray-400">Privacy Policy</p>
                    <p className="text-xl mb-4 text-gray-400"> Contact Us</p>
                    <p className="text-xl mb-4 text-gray-400">Terms of Use</p>
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