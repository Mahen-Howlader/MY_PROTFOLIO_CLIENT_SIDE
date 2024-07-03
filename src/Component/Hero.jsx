import { TypeAnimation } from "react-type-animation";

function Hero() {
    return (
        <div className=" text-white max-w-[1200px] mx-auto h-[80vh] flex flex-col-reverse md:flex-row justify-center items-center">
            <div className="md:w-1/2 ">
                <h2 className="text-xl">HELLO, MY NAME IS</h2>
                <h2 className="font-bold text-4xl">Mahen Howlader</h2>
                {/* <TypeAnimation
                    className="text-white text-4xl font-bold"
                    sequence={[
                        // Same substring at the start will only be typed once, initially
                        'I am Frontend Developer',
                        5000,
                        'I am Junior React Developer',
                        1000,

                    ]}
                    speed={50}
                    style={{ fontSize: '2em' }}
                    repeat={Infinity}
                /> */}
                <h2 className="text-lg">From Dhaka, Bangladesh. I’m a Front End Web developer who is passionate about making error-free websites. I am good at WordPress. I love to talk with you about your unique. </h2>

                <div>
                   
                </div>

            </div>
            <div className="w-1/2 flex justify-center">
                <img className="w-[300px] sm:w-[500px]" src="https://i.ibb.co/VMcPkGn/hero.png" alt="" />
            </div>
        </div>
    );
}

export default Hero;