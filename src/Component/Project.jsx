function Project() {
    return (
        <div className="text-white mt-20 mx-auto max-w-[1200px]">
            <h1 className="text-4xl text-center font-bold pb-5">Latest Projects</h1>

            <div className="grid grid-cols-3 gap-10 text-white">
                <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-[#171721] shadow-xl shadow-slate-500 bg-clip-border text-gray-700 shadow-lg">
                    <div className="relative mx-4 mt-4 overflow-hidden  shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
                        <img
                            src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=80"
                            alt="ui/ux review check"
                        />
                        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
                        <button
                            className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                            <h5 className="block font-sans   text-white text-xl antialiased font-medium leading-snug tracking-normal ">
                                Wooden House, Florida
                            </h5>
                            <p className="flex items-center gap-1.5 text-white font-sans text-base font-normal leading-relaxed  antialiased">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="-mt-0.5 h-5 w-5 text-yellow-700">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"></path>
                                </svg>
                                5.0
                            </p>
                        </div>
                        <p className="block font-sans  text-white text-base antialiased font-light leading-relaxed ">
                            Enter a freshly updated and thoughtfully furnished peaceful home
                            surrounded by ancient trees, stone walls, and open meadows.
                        </p>
                        <button className="px-4 w-full mt-4 py-2 text-white backdrop-blur-sm border border-white rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-dark/[0.2] text-sm transition duration-200">
                            Live Project
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Project;