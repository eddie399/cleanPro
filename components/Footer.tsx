import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return(
        <footer className="bg-[#212121] text-white py-6 mt-10 px-4 text-center items-center justify-center">
            <form className="flex flex-col items-center">
                <div className="relative w-full max-w-md">
                    <input 
                        className=" bg-black rounded-full h-10 px-4 py-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 w-full"
                        type="email" name="Email" id="email" placeholder="Email" 
                    />
                    <button
                        type="submit"
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-green-500 rounded-full px-4 py-2 text-white font-semibold hover:bg-green-600 transition text-sm"
                    >
                        Subscribe
                    </button>
                </div>
            </form>
            <div className="container mx-auto px-4 text-center mt-4">
                <p>&copy; 2025 ShinySpaces. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-2 mb-2 text-gray-400">
                    <FaFacebook className=""/>
                    <FaTwitter />
                    <FaInstagram />
                    <FaLinkedin />
                </div>
                
                <p className="text-gray-400 text-sm border-t">Developed by EJ_Pixels</p>
                
            </div>
        </footer>
    )
}

export default Footer;