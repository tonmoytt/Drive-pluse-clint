import { Link, useNavigate } from "react-router-dom";
import login from "./../../../../assets/Images/Login.jpg"
import background from "./../../../../assets/Images/backgroundk.jpg"
import "./Style.css"
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { useContext } from "react";
import { AuthConnect } from "../Authinction";
import swal from "sweetalert";

const Login = () => {
    const { LoginUser,GoogleLogin } = useContext(AuthConnect)
  
    const navigate = useNavigate()
    const navigate1 = useNavigate()

    const Login = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const user = { email, password }
        console.log(user);

        LoginUser(email, password)
            .then(result => {
                console.log(result.user);

                swal("Success!", "Login Successfull", "success");
                event.target.reset()
                navigate('/')
                
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


            {/* section 2 */}
            <div className=" grid md:grid-cols-2 relative">
                <div >
                    <img className=" relative h-[250px] md:h-[750px] lg:h-[640px] w-
                1/2 blur-[3px] opacity-90" src={login} alt="" />
                    <div className="absolute ml-4 md:ml-8 -mt-[246px] md:-mt-[700px] lg:-mt-[450px] text-white">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-sans"> <span className="text-sky-500">Welcome </span>back!</h1>
                        <p className="text-base md:text-lg lg:text-[22px] mt-2 text-gray-300 ml-1 max-w-lg">This is a best secure file sharing platform,<br /> Upload your  file and make your beautiful <br />day!</p>
                    </div>
                </div>
                <div>
                    <img className="w-full  h-[540px] md:h-[649px]" src={background} alt="" />
                </div>
            </div>



            {/* login box */}

            <div id="shadow-maker" className="rounded-xl md:rounded-md shrink-0 mx-4 max-w-[290px] md:max-w-[480px] absolute -mt-[650px] md:-mt-[550px] lg:-mt-[600px] md:mx-[130px] lg:mx-[480px] bg-[#062244]">
                <form onSubmit={Login} className="card-body">
                    <div className="form-control text-white">
                        <label className="label">
                            <span id="color" className="label-text text-xl text-white mb-1">Email</span>
                        </label>
                        <input type="email" 
                        name="email" 
                        placeholder="Email" 
                        className="input input-bordered input-info  bg-[#062244] text-sky-500" required />
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span id="drive" className="label-text text-xl text-white mb-1 ">Password</span>
                        </label>
                        <input type="password"
                            name="password"
                            placeholder="Password"
                            className="input input-bordered input-error  
                            bg-[#062244] text-sky-500" required />

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-1 text-xl font-semibold">Login</button>
                    </div>
                    <div>
                        <p className="font-semibold text-base md:text-xl ml-1 text-sky-500">Forgate password</p>
                    </div>
                    {/* second */}
                    <div className="form-control mt-4 ml-1 " >
                        <p className="text-lg md:text-[20px] font-sans text-white">Don't have any account? <Link to="/signup"> <span className="underline text-cyan-400">Create new account</span></Link>
                        </p>

                        <div className="flex items-center gap-2 md:gap-6 mt-6">
                            <div className="text-sky-300 w-[45px] md:w-[115px]">
                                <hr />
                                <hr />
                                <hr />

                            </div>
                            <p className="text-lg md:text-[20px] text-gray-300 font-semibold mx-auto">Continue with</p>

                            <div className="text-sky-300 w-[45px] md:w-[115px]">
                                <hr className="text-sky-300" />
                                <hr className="text-sky-300" />
                                <hr className="text-sky-300" />


                            </div>

                        </div>
                        {/* google and github */}
                        <div className="flex gap-[10px] md:gap-8 mt-4">
                            <div onClick={HandleGoogleLogin} className="flex items-center">
                                <FcGoogle className="picture h-5 md:h-8 w-5 md:w-8 absolute ml-2   md:ml-4"></FcGoogle>
                                <button className="border-2 btn-outline btn-error text-center rounded-lg px-7 md:px-[60px] text-lg md:text-[22px] relative py-1 md:py-2">Google</button>
                            </div>
                            <div className="flex items-center">
                                <GrGithub className="picture h-5 md:h-8 w-5 md:w-8 absolute ml-2   md:ml-4 bg-sky-500 rounded-3xl"></GrGithub>
                                <button className=" border-2 rounded-lg btn-outline btn-accent px-7 md:px-[60px] text-lg md:text-[20px] relative py-1 md:py-2">Github</button>
                            </div>

                        </div>

                    </div>
                </form>

            </div>




        </div>
    );
};

export default Login;