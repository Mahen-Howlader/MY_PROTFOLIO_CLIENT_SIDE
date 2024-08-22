import { TypeAnimation } from "react-type-animation";

function Hero() {
    return (
        <div className=" mt-10 text-white max-w-[1200px] mx-auto md:h-[80vh] flex flex-col-reverse md:flex-row justify-center items-center">
            <div className="md:w-1/2 space-y-1 md:space-y-4 p-3">
                <h2 className="text-xl">HELLO, MY NAME IS</h2>
                <h2 className="font-bold text-3xl md:text-6xl">Mahen Howlader</h2>
                {/* <TypeAnimation
                    className="text-white text-sm flex justify-end w-1/2"
                    sequence={[
                        // Same substring at the start will only be typed once, initially
                        'I am Frontend Developer',
                        5000,
                        'I am Junior React Developer',
                        1000,

                    ]}
                    speed={50}
                    repeat={Infinity}
                /> */}
                <h2 className="text-xl text-[#F8B90C]">I AM Web Developer</h2>
                <h2 className="text-lg text-gray-400">From Dhaka, Bangladesh. I’m a Front End Web developer who is passionate about making error-free websites. I am good at WordPress. I love to talk with you about your unique. </h2>

                <a href="https://docs.google.com/document/d/1pqX4yG4RELYfXzatZsl4Nu-OVh60w8wkKNdYZYYXWO4/edit" download title="Download CV" role="button" className="inline-flex items-center justify-center h-11 md:h-16 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-transparent border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline" >
                    Check CV
                </a>

            </div>
            <div className="w-1/2 flex justify-center">
                <img className="w-[500px] border-2 border-white rounded-full sm:w-[500px]" src="https://i.ibb.co/58zXGPX/20240823-002006.png" alt="" />
            </div>
        </div>
    );
}

export default Hero;