import { MdOutlineAddIcCall, MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import Navbar from "../Navbar";
import background from "./../../../../assets/Images/aboutus 2.webp"

import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import swal from "sweetalert";
import Footer from "../../Home/Footer/Footer";


const ContactUs = () => {

    const form = useRef();

    const sendEmail = (e) => {


        e.preventDefault();

        emailjs.sendForm('service_c1kfic4',
            'template_0qun126',
            form.current,
            'Beg3h31jWVMZsIy-2')
            .then((result) => {
                console.log(result.text);
                swal("Message", "send Successfully!", "success");


                e.target.reset()

            }, (error) => {
                console.log(error.text);
            });

    }
    return (
        <div className="">
            {/* navbar */}
            <div className="absolute  zindex w-full">
                <Navbar className="fixed blur-sm"></Navbar>
            </div>
            {/* background img */}
            <div className="relative ">


                <div>
                    <img className="h-[250px] md:h-[260px] lg:h-[420px] w-full relative" src={background} alt="" />
                </div>
                <div className="w-full backdrop-blur-sm backdrop-brightness-90 md:backdrop-brightness-75  absolute -mt-[150px] md:-mt-[190px] lg:-mt-[230px]">
                    <p className=" zindex text-3xl md:text-5xl font-bold text-white py-2 md:py-4 text-center">Contact Us</p>
                </div>
            </div>

            {/* section 3 */}
            <div id="background" className="py-8 ">
                <div className=" ">
                    <p className="mx-auto text-white text-4xl font-semibold max-w-[330px] border-b-2 border-b-sky-400">Have any <span className="text-sky-400">Question</span>?</p>

                </div>
                <div className="grid md:grid-cols-2 border-2 rounded-md mx-4 md:mx-10 lg:mx-16 mt-6 py-10 px-4">
                    <div>

                        {/* addres */}
                        <div className="flex gap-1 items-center">
                            <CiLocationOn className="text-sky-400 h-12 w-12"></CiLocationOn>
                            <div className="text-white">
                                <p className="text-2xl font-bold">Our Location</p>
                                <p className="font-semibold">Dhaka</p>
                            </div>
                        </div>
                        {/* section 2 phne */}
                        <div className="  gap-2 flex mt-8 items-center">


                            <MdOutlineAddIcCall className="text-sky-500 h-10 w-10"></MdOutlineAddIcCall>
                            <div className="text-white ">
                                <p className="text-xl font-bold">PHONE NUMBER</p>
                                <p className="font-semibold">Mobile: 01739 ******</p>
                            </div>
                        </div>
                        {/* section 3 */}
                        <div className="flex mt-8 gap-2 mb-20 md:mb-0 items-center">



                            <MdOutlineEmail className="text-sky-500 h-10 w-10"></MdOutlineEmail>
                            <div className="text-white items-center">
                                <p className="text-2xl font-bold"> Email</p>
                                <p className="font-semibold">tonmoytarsirul9@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    {/* input section */}
                    <form ref={form} onSubmit={sendEmail} >
                        <h1 id="drive" className="bg-red-400 text-center text-2xl mb-6 block md:hidden">Fill up Please</h1>
                        <div className="mt-2">
                            <div className="grid md:grid-cols-2 gap-10">
                                <input type="text" placeholder="Name" className=" bg-[#003352] text-white rounded-md px-2 border-b-2 border-b-sky-400 w-full max-w-xs" required />
                                <input type="number" placeholder="Number" className=" bg-[#003352] text-white rounded-md px-2 border-b-2 border-b-sky-400 w-full max-w-xs" required />
                            </div>
                            {/*  */}
                            <input type="email" placeholder="Email" className="mt-10 bg-[#003352] text-white rounded-md px-2 border-b-2 border-b-sky-400 w-full " required />
                            {/* msg */}

                            <textarea className="textarea textarea-bordered textarea-xs w-full mt-10 bg-[#003352] text-white rounded-md px-2 border-b-2 border-b-sky-400 " placeholder="Massage">

                            </textarea>

                            <button type="submit" className="text-lg mt-2 w-full py-1 rounded-lg bg-sky-400">Send</button>
 
                        </div>
                    </form>

                </div>
            </div>
            <div className="bg-[#062244]">
            <Footer></Footer>
            </div>
           
        </div>
    );
};

export default ContactUs;