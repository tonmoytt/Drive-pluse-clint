import "./style.css"
import logo from "./../../../assets/Images/Drive plus logo.webp"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthConnect } from "../Authinction/Authinction";

const Navbar = () => {

    const {user} = useContext(AuthConnect)

    const Navlink = <>
        <div className="text-white grid md:flex lg:flex text-xl from-neutral-900 gap-4 font-semibold "  >
            <Link to="/"><li id="home"> Home </li></Link>
            <Link to="/about"> <li id="home"> About </li></Link>
            <Link to="/contact"><li id="home" >Contact</li></Link>
            <div className="hidden md:block lg:block border-l-2 border-l-blue-700 "></div>

            {
                user ? <>
                    <div>
                        <Link to="/dashboard"> <li id="home" > DashBoard  </li></Link>
                    </div>
                </>
                    :
                    <>
                        <div>
                            <Link to="/login"> <li id="home" > Login  </li></Link>
                        </div>
                    </>
            }



        </div>
    </>
    return (
        <div className="bg-[#062244]">

            {/* navbar start */}
            <div className="navbar pt-6">
                <div className="navbar-start">
                    <div className="dropdown mx-4 md:mx-0 lg:mx-0 ">
                        <div id="navbar-mobile-view" tabIndex={0} role="button" className="btn btn-ghost pr-20 md:pr-0 lg:pr-0  text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <div>
                            <ul id="mobile-view-navbar-system" tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow    rounded-box pb-20 md:pb-0 lg:pb-0 text-center   w-full">
                                {
                                    Navlink
                                }
                            </ul>
                        </div>
                    </div>
                    {/* logo section */}
                    <div className="flex mx-4 md:mx-6 lg:mx-12">
                        <img className="h-[52px] w-12 mr-1" src={logo} alt="" />
                        <div id="blur" className="font-serif -mt-1">
                            <h1 id="fontsize" className="text-2xl text-amber-500 -mb-1 ">DRIVE  </h1>
                            <p id="fontsize1" className="text-white">PULSE</p>
                        </div>
                    </div>
                </div>
                <div className="navbar-end mr-4 md:mr- hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            Navlink
                        }
                    </ul>

                </div>

            </div>


        </div>

    );
};

export default Navbar;