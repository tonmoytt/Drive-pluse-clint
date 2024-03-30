
import Footer from "../../Home/Footer/Footer";
import Navbar from "../Navbar";
import background from "./../../../../assets/Images/about us 2.jpg"
import Goal from "./../../../../assets/Images/our goal.webp"
import visions from "./../../../../assets/Images/visions.webp"
import Slider from "./Slider/Slider";
import "./Style.css"

const About = () => {
    return (
        <div className="bg-[#062244]">
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
                    <p className=" zindex text-3xl md:text-5xl font-bold text-white py-2 md:py-4 text-center">About Us</p>
                </div>
            </div>

            {/* section 2 */}
            <div className="grid md:grid-cols-2 mx-10 py-10 items-center justify-between">
                <div className="text-white  md:w-[360px] lg:w-[740px]">
                    <h1 className="text-3xl mb-6 text-white font-semibold">Our<span className="text-sky-400"> Goals</span></h1>
                    <p >At DrivePulse, we believe in the power of collaboration. Our platform is designed to seamlessly connect individuals and teams, enabling them to share files effortlessly and work together towards common goals. Whether you're a freelancer, a small business, or a large corporation, DrivePulse provides the tools you need to streamline your workflow and boost productivity. With advanced features and intuitive design, we're here to empower your success through effective file sharing</p>
                </div>
                {/* img */}
                <div className="mt-10 md:mt-0 md:pl-20 lg:pl-48">
                    <img className="  w-[400px] rounded-t-lg" src={Goal} alt="" />
                </div>
            </div>
            {/* section 3 */}
            <div className="hero-content flex-col md:flex-row-reverse mx-10 py-10 items-center justify-between">


                {/*  */}
                <div className="text-white  md:w-[360px] lg:w-[620px]">
                    <h1 className="text-end mr-10 text-3xl mb-6 font-semibold text-sky-400">Our<span className="text-white "> Visions</span></h1>
                    <p className="text-start md:text-end ">DrivePulse is not just another file sharing website; it's a revolution in digital collaboration. We're committed to pushing the boundaries of what's possible, offering cutting-edge solutions for sharing and managing files securely in today's fast-paced world. Our platform leverages the latest technologies to ensure reliability, speed, and privacy, giving users the confidence to share their valuable data with ease. Whether you're on the go or working from home, DrivePulse keeps you connected and in control of your files, so you can focus on what matters most. Join us in shaping the future of file sharing</p>
                </div>
                {/* img */}
                <div className="mt-10 md:mt-0 md:pr-20 lg:pr-8">
                    <img className="  w-[400px] rounded-t-lg" src={visions} alt="" />
                </div>
            </div>
            {/* slider */}
            <Slider></Slider>
            {/* footer */}
            <div className="mt-20">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default About;