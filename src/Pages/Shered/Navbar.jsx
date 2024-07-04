import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar() {
    const [nav, setNav] = useState(false)

    function handelNav() {
        setNav(!nav)
    }
    return (
        <div className="text-white font-medium ">
            <div className=" flex justify-center items-center  max-w-[1240px] mx-auto h-24 px-4 text-l">
                <h1 className="w-full text-2xl lg:text-3xl font-bold ml-4 text-[#EC4899]">Mahen Howlader<span className="text-5xl text-white">.</span></h1>
                <ul className="hidden md:flex">
                    <li className="p-2"> <Link>Home</Link></li>
                    <li className="p-2"> <a href="#skills">Skills</a></li>
                    <li className="p-2"> <a href="#project">Projects</a></li>
                    <li className="p-2"> <a href="#education">Education</a></li>
                    <li className="p-2"> <a href="#contact">Contact</a></li>
            </ul>
                <div className="block md:hidden" onClick={handelNav}>
                    {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
                </div>
            </div>
            <div className={ nav ? "text-white font-medium z-50  fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#20242d]  ease-in-out duration-500" : "fixed left-[-100%]  z-50 "}>
                {/* <h1 className="w-full text-3xl font-bold primary-color ml-4">Mahin Howlader</h1> */}
                <ul className="p-8 ">
                    <h1 className="w-full text-xl font-bold  text-[#EC4899]">Mahen Howlader<span className="text-2xl text-white">.</span></h1>
                    <li className="p-2"> <Link>Home</Link></li>
                    <li className="p-2"> <a href="#skills">Skills</a></li>
                    <li className="p-2"> <a href="#project">Projects</a></li>
                    <li className="p-2"> <a href="#education">Education</a></li>
                <li className="p-2"> <a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;


{/* https://youtu.be/hYv6BM2fWd8?si=BWtn8t3lsRWqeT9a */ }