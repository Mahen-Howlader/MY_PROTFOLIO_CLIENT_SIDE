import { skills } from "./Data/data";

function Skills(props) {
    return (
        <div className="mx-auto max-w-[1200px] text-white mt-20 ">
            <div className="space-y-2 ">
                <h1 className="text-4xl text-center font-bold ">Skills</h1>
                <h2 className="text-center  text-gray-400 w-1/2 mx-auto">
                    Here are some of my skills on which I have been working on for the past 1 years.
                </h2>
            </div>

            <div className="md:flex flex-wrap justify-center space-y-10 md:space-y-0 mt-10 gap-5">
                {
                    skills.map((item, index) => {
                        return <div key={index} className="bg-[#171721] p-5 rounded-lg w-8/12 mx-auto md:w-[550px] border border-[#8F00EF]">
                            <h3 className="pb-5 text-center text-2xl font-semibold text-gray-300">{item.title}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
                                {
                                    item.skills.map((skill) => {
                                        return <div key={skill?.name} className="flex border p-2 rounded-lg border-gray-400 items-center gap-x-2">
                                            <img className="w-10" src={`${skill?.image}`} alt="" />
                                            <h4>${skill?.name}</h4>
                                        </div>
                                    })
                                }
                            </div>
                        </div>

                    })
                }


            </div>
        </div>
    );
}

export default Skills;