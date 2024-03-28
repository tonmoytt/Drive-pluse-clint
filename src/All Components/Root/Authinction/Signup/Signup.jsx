import { Link, useNavigate, } from "react-router-dom";
import signuppic from "./../../../../assets/Images/SignUp.jpg"
import background from "./../../../../assets/Images/nooooooooooo.jpg"
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { AuthConnect, } from "../Authinction";
import swal from "sweetalert";
import { useContext, useState } from "react";


const Signup = () => {

    const { CreateUser,GoogleLogin } = useContext(AuthConnect)

    const [password, setpassword] = useState()
    const navigate = useNavigate()
    const navigate1 = useNavigate()

    const signup = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const picture = form.picture.value
        const password = form.password.value
        const user = { name, email, picture, password, }
        console.log(user);

        // password//

        setpassword('')
        if (password.length < 6) {
            setpassword( alert('Password should be at least 6 character'))
        }
        else if (!/[0-9]/.test(password)) {
            setpassword( alert('Please adding Number character'))
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setpassword(alert('Please adding at least 1 uppercase'))
            return;

        }
        else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setpassword(alert('Please adding special character'))
            return;
        }
        // email authinction//

        CreateUser(email, password)
            .then(result => {
                console.log(result.user);

                swal("Success!", "Please Login", "success");
                event.target.reset()
                navigate('/login')

            })
            .catch(error => {
                console.error(error);

            })


    }

    const HandleGoogleLogin=() => {
        console.log('clicked');
        GoogleLogin()
            .then(result => {
                console.log(result.user);
                swal("Success!", "Google Registertion Successfully", "success");
                navigate1('/')
            })
            .catch(error => {
                console.error(error);
            })
        }

    return (
        <div>
            {/* 1st part */}
            <div className=" grid md:grid-cols-2">
                <div >
                    <img className="  h-[250px] md:h-[750px] lg:h-[740px] w-
                1/2 " src={background} alt="" />

                </div>
                <div>
                    <img className="w-full blur-[5px] opacity-90 h-[540px] md:h-[740px] relative" src={signuppic} alt="" />
                    {/*  */}
                    <div className="absolute ml-4 md:ml-[230px] -mt-[246px] md:-mt-[700px] lg:-mt-[450px] text-white">
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold font-sans"> <span >Create a new  </span> <span className="text-sky-500"> <br />Account</span></h1>
                        <p className="text-base md:text-lg lg:text-[22px] mt-2 text-gray-300 ml-1 max-w-xl">Create a new account and continue best real-time file sharing secure platform drivePulse!</p>
                    </div>

                </div>
            </div>
            {/* 2nd part */}
            <div id="shadow-maker" className="rounded-xl md:rounded-md shrink-0 mx-4 max-w-[290px] md:max-w-[540px] absolute -mt-[650px] md:-mt-[550px] lg:-mt-[650px] md:mx-[130px] lg:mx-[450px] bg-[#062244]">
                <form onSubmit={signup} className="card-body">
                    {/* name */}
                    <div className="form-control text-sky-400">

                        <input type="text"
                            name="name"
                            placeholder="Name"
                            className="input input-bordered input-info  bg-[#062244] text-sky-500" required />
                    </div>
                    {/* email */}

                    <div className="form-control text-white">
                        <label className="label">
                            <span id="color" className="label-text text-xl text-white mb-1">Email</span>
                        </label>
                        <input type="email"
                            name="email"
                            placeholder="Email"
                            className="input input-bordered input-info bg-[#062244]" required />
                    </div>

                    {/* picture */}
                    <input type="file" name="picture" className="mt-4 file-input file-input-bordered file-input-primary w-full max-w-lg bg-[#062244] text-sky-500" />

                    {/* password */}
                    <div className="form-control ">
                        <label className="label">
                            <span id="drive" className="label-text text-xl text-white mb-1 ">Password</span>
                        </label>
                        <input type="password"
                            name="password"
                            placeholder="Password"
                            className="input input-bordered input-error bg-[#062244] text-sky-500" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-1 text-xl font-semibold">Register</button>
                    </div>

                    {/* second */}
                    <div className="form-control mt-4 ml-1 " >
                        <p className="text-lg md:text-[20px] font-sans text-white">Already have an account? <Link to="/login"> <span className="underline text-cyan-400">Login</span></Link>
                        </p>

                        <div className="flex items-center gap-2 md:gap-6 mt-6">
                            <div className="text-sky-300 w-[45px] md:w-[145px]">
                                <hr />
                                <hr />
                                <hr />

                            </div>
                            <p className="text-lg md:text-[20px] text-gray-300 font-semibold mx-auto">Continue with</p>

                            <div className="text-sky-300 w-[45px] md:w-[145px]">
                                <hr className="text-sky-300" />
                                <hr className="text-sky-300" />
                                <hr className="text-sky-300" />


                            </div>

                        </div>

                        {/* btn */}
                        <div className="flex gap-[10px] md:gap-8 mt-4">
                            <div onClick={HandleGoogleLogin} className="flex items-center">
                                <FcGoogle className="picture h-5 md:h-8 w-5 md:w-8 absolute ml-2   md:ml-6"></FcGoogle>
                                <button className="border-2 btn-outline btn-error text-center px-7 rounded-lg md:px-[75px] text-lg md:text-[22px] relative py-1 md:py-2">Google</button>
                            </div>
                            <div className="flex items-center">
                                <GrGithub className="picture h-5 md:h-8 w-5 md:w-8 absolute ml-2   md:ml-6 bg-sky-500 rounded-3xl"></GrGithub>
                                <button className=" border-2 rounded-lg btn-outline btn-accent px-7 md:px-[75px] text-lg md:text-[20px] relative py-1 md:py-2">Github</button>
                            </div>

                        </div>


                    </div>
                </form>

            </div>

            <div className='bg-[#062244] mx-auto '>
                {
                    password && <p className='rounded-lg text-red-400 font-bold py-2 text-center mr-32 text-2xl '> {password}</p>
                }
            </div>
        </div>
    );
};

export default Signup;