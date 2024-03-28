import img from "./../../../../assets/Images/tik mark.webp"
 

const GetStart = () => {
    return (
        <div style={{backgroundImage: 'url(https://wallpapers.com/images/hd/dark-gradient-quwlcn6vowfuwug1.jpg'}}  className="grid md:grid-cols-2 mt-16 py-16 ">
            <div className="mx-auto md:mx-24 pb-10">
                <div className="mb-[14px]">
                    <div className="flex items-center">
                        <img className="w-10 h-10" src={img} alt="" />
                        <div>
                            <p className="text-white text-lg font-semibold">  Get 500 MB storage for free</p>
                        </div>
                    </div>
                </div>
                {/* section 2 */}
                <div className="mb-[14px]">
                    <div className="flex items-center">
                        <img className="w-10 h-10" src={img} alt="" />
                        <div>
                            <p className="text-white text-lg font-semibold"> Secure file</p>
                        </div>
                    </div>
                </div>
                {/* section 3 */}
                <div className="mb-[14px]">
                    <div className="flex items-center">
                        <img className="w-10 h-10" src={img} alt="" />
                        <div>
                            <p className="text-white text-lg font-semibold">Unlimited services</p>
                        </div>
                    </div>
                </div>
                {/* section 4 */}
                <div className="mb-[14px]">
                    <div className="flex items-center">
                        <img className="w-10 h-10" src={img} alt="" />
                        <div>
                            <p className="text-white text-lg font-semibold">Share your file</p>
                        </div>
                    </div>
                </div>
                {/* section 5 */}
                <div className=" md:pb-6">
                    <div className="flex items-center">
                        <img className="w-10 h-10" src={img} alt="" />
                        <div>
                            <p className="text-white text-lg font-semibold">Get differents storage</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* grid  2 */}
            <div className="mx-auto md:mx-1 mr-0 md:mr-16 ml-6 md:ml-0">
                <div className="flex text-white items-center gap-2 mt-8 md:mt-4 mb-2 md:mb-6">
                    <div className="   ">
                        <hr className="w-16 bg-teal-600 text-sky-400" />
                        <hr className="w-16 bg-teal-600text-sky-400" />
                        <hr className="w-16 bg-teal-600 text-sky-400" />
                    </div>
                    <p className="text-lg font-semibold uppercase">SIGN UP FOR FREE</p>
                </div>
                <h1 className="font-bold text-4xl md:text-7xl text-white">Get started for <br /><span id="drive">FREE!! </span></h1>
                <p className="mt-6 text-white">File storage made easy – including powerful features you won’t find anywhere else. Whether you’re sharing photos, videos, audio, or docs.</p>
                
            </div>
        </div>
    );
};

export default GetStart;