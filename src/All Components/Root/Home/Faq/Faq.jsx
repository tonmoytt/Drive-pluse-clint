
import faq from "./../../../../assets/Images/thinking.gif"
const Faq = () => {
    return (
        <div id="background" className="pt-6">
            <h1 className="text-gray-300 font-bold text-6xl text-center">FA<span id="drive">Qs</span></h1>
            <p className="text-center text-gray-300  mt-2">Have you any question?</p>
            {/* deisi us according sertor */}
            <div className="grid md:grid-cols-2">

                {/* img */}
                <div className=" ">
                    <img className=" " src={faq} alt="" />
                </div>

                {/* checkbox */}
                <div className="-ml-32 mr-10 mt-20 ">


                    <div className="collapse text-white border-2 border-sky-400 w-full mb-4">
                        <input type="checkbox" />
                        <div className="collapse-title text-2xl font-medium">
                            What is DrivePulse ?
                        </div>
                        <div className="collapse-content">
                            <p className="text-sky-300 text-lg">DrivePulse is a secure file sharing platform to make it easier to manage larger files.</p>
                        </div>
                    </div>
                    {/* second */}
                    <div className="collapse text-white border-2 border-sky-400 w-full mb-4">
                        <input type="checkbox" />
                        <div className="collapse-title text-2xl font-medium">
                        Why should you use DrivePulse ?
                        </div>
                        <div className="collapse-content">
                            <p className="text-sky-300 text-lg">DrivePulse has end-to-end encryption for messages and secure file sharing options. You can share your files securely through DrivePulse.That's why you should use DrivePulse.</p>
                        </div>
                    </div>
                    {/* third */}
                    <div className="collapse text-white border-2 border-sky-400 w-full mb-4">
                        <input type="checkbox" />
                        <div className="collapse-title text-2xl font-medium">
                        Can I access my files from any device or location?
                        </div>
                        <div className="collapse-content">
                            <p className="text-sky-300 text-lg">Can Absolutely! Our platform is accessible from any internet-enabled device, including desktops, laptops, tablets, and smartphones. Whether you're at home, in the office, or on the go, you can securely access your files whenever you need them.</p>
                        </div>
                    </div>
                    {/* four */}
                    <div className="collapse text-white border-2 border-sky-400 w-full mb-4">
                        <input type="checkbox" />
                        <div className="collapse-title text-2xl font-medium">
                        Why DrivePulse is different from other file sharing platforms ?
                        </div>
                        <div className="collapse-content">
                            <p className="text-sky-300 text-lg">DrivePulse is different from other file sharing platforms because, users can easily share files with their friends and communicate with them in real-time, all within the same interface.</p>
                        </div>
                    </div>
                    
                     
                </div>

            </div>



        </div>
    );
};

export default Faq;