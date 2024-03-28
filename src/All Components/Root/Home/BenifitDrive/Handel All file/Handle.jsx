import "./Style.css"
import file from "./../../../../../assets/Images/file withou bg.jpg"
import collaborate from "./../../../../../assets/Images/colaborate.jpg"
import cloud from "./../../../../../assets/Images/cloud.png"
import access from "./../../../../../assets/Images/access.png"

const Handel = () => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-4 mx-5 md:mx-10 lg:mx-10 pb-10 gap-6 mt-12 '>
            {/* box 1 */}
            <div id="box" className="hover:shadow-lg hover:shadow-sky-400  mx-auto">
                <h2 className="  text-white">
                    <img className='h-24 w-24 rounded-lg  mx-auto' src={file} alt="" />
                    <h1 className='text-2xl font-semibold mt-8 mb-4 text-center '>Share</h1>
                    <p className='text-center  px-4'>Share through email, link, or social network. Unlimited downloads. No wait times.</p>
                </h2>
            </div>
            {/* box 2 */}
            <div id="box" className="hover:shadow-lg hover:shadow-sky-400 mx-auto">
                <h2 className="  text-white">
                    <img className='h-24 w-24 rounded-lg  mx-auto' src={collaborate} alt="" />
                    <h1 className='text-2xl font-semibold mt-8 mb-4 text-center'>Collaborate</h1>
                    <p className='mx-4 text-center'>
                        Store and share any file type. Share folders of project files. Easily email large files.</p>
                </h2>
            </div>
            {/* box 3 */}
            <div id="box" className="hover:shadow-lg hover:shadow-sky-400 mx-auto">
                <h2 className="  text-white">
                    <img className='h-24 w-24 rounded-lg  mx-auto' src={cloud} alt="" />
                    <h1 className='text-2xl font-semibold mt-8 mb-4 text-center'>Store</h1>
                    <p className='mx-4 text-center'>

                        Securely store your files in a centralized location, making it easy to organize, manage, and access.</p>
                </h2>
            </div>
            {/* box 4 */}
            <div id="box" className="hover:shadow-lg hover:shadow-sky-400 mx-auto">
                <h2 className="  text-white">
                    <img className='h-20 w-20 rounded-lg  mx-auto' src={access} alt="" />
                    <h1 className='text-2xl font-semibold mt-8 mb-4 text-center'>Access</h1>
                    <p className='mx-4 text-center'>

                        Enjoy convenient and quick access to your files from anywhere. Never forget your work at home.</p>
                </h2>
            </div>
        </div>
    );
};

export default Handel;