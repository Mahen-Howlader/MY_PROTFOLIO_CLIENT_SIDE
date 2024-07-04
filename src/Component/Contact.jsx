import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

function Contact() {
    // service key : 
    // 26W-coAh1iRoaN9Yt

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_ilas2pj', 'template_zjxgabh', form.current, {
                publicKey: '26W-coAh1iRoaN9Yt',
            })
            .then(
                () => {
                    toast.success('🦄 Success message send!', {
                        position: "top-center",
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div id='contact'>
            {/* <div className="grid sm:grid-cols-2 bg-[#171721]  p-5 rounded-lg flex-row-reverse text-white  items-start gap-16 p-4   font-[sans-serif]">
                <div>
                    <h1 className=" text-3xl font-extrabold">Let's Talk</h1>
                    <p className="text-sm  mt-4">
                        Have some big idea or brand to develop and need help? Then reach out we'd
                        love to hear about your project and provide help.
                    </p>

                    <div className="mt-12">
                        <h2 className=" text-base font-bold">Email</h2>
                        <ul className="mt-4">
                            <li className="flex items-center">
                                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20px"
                                        height="20px"
                                        fill="#007bff"
                                        viewBox="0 0 479.058 479.058"
                                    >
                                        <path
                                            d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                            data-original="#000000"
                                        />
                                    </svg>
                                </div>
                                <a href="javascript:void(0)" className="text-[#007bff] text-sm ml-4">
                                    <small className="block">Mail</small>
                                    <strong>info@example.com</strong>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-12">
                        <h2 className=" text-base font-bold">Socials</h2>

                        <ul className="flex mt-4 space-x-4">
                            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="javascript:void(0)">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20px"
                                        height="20px"
                                        fill="#007bff"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                                            data-original="#000000"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="javascript:void(0)">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20px"
                                        height="20px"
                                        fill="#007bff"
                                        viewBox="0 0 511 512"
                                    >
                                        <path
                                            d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                                            data-original="#000000"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <a href="javascript:void(0)">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20px"
                                        height="20px"
                                        fill="#007bff"
                                        viewBox="0 0 30 30"
                                    >
                                        <path
                                            d="M15.001 0C6.726 0 .002 6.726.002 15S6.726 30 15 30s15-6.726 15-15S23.276 0 15.001 0zm9.287 9.783c-.014.282-.038.568-.07.854-.31 2.751-1.845 6.05-4.53 8.368-2.74 2.366-6.197 3.333-10.275 2.85 1.478.055 2.98-.257 4.265-.902-.957-.018-1.87-.31-2.624-.793-.742-.472-1.304-1.126-1.649-1.891.365.056.72.053 1.08-.012-1.28-.28-2.345-1.09-2.906-2.243a3.45 3.45 0 0 1-.381-1.77c.483.271 1.019.452 1.581.513a3.476 3.476 0 0 1-1.231-1.546 3.448 3.448 0 0 1-.184-1.944c1.268 1.555 2.926 2.678 4.86 3.206 1.021.28 2.08.417 3.147.402-.161-.686-.096-1.39.192-2.037.287-.647.79-1.195 1.43-1.57.64-.375 1.37-.56 2.111-.54.741.018 1.466.239 2.08.65.667-.133 1.296-.377 1.869-.723-.307.977-.947 1.79-1.771 2.305.59-.062 1.157-.227 1.686-.493-.397.587-.895 1.098-1.463 1.503zm0 0"
                                            data-original="#000000"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h1 className=" text-3xl font-extrabold">Reach Us Here</h1>
                    <form className="mt-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                            <div className="relative">
                                <label htmlFor="name" className="text-xs font-semibold ">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="text-black appearance-none block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            <div className="relative">
                                <label htmlFor="email" className="text-xs font-semibold ">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="text-black appearance-none block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                        </div>
                        <div className="mt-2">
                            <label htmlFor="message" className="text-xs font-semibold ">
                                Your Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                rows="4"
                                className="text-black appearance-none block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <div className="mt-2">
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#007bff] hover:bg-[#006eff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0056b3]"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div> */}

            <div className="mx-auto max-w-[1200px] mt-20">
                <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
                    <div className="bg-gray-900 border border-gray-600  shadow-xl shadow-slate-700 w-full shadow rounded p-8 sm:p-12 ">
                        <p className="text-3xl font-bold leading-7 text-center text-white">Contact me</p>
                        <form ref={form} onSubmit={sendEmail} >
                            <div className="md:flex items-center mt-12">
                                <div className="w-full md:w-1/2 flex flex-col">
                                    <label className="font-semibold leading-none text-gray-300">Name</label>
                                    <input placeholder="your name" type="text" name="user_name" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                    <label className="font-semibold leading-none text-gray-300">Email</label>
                                    <input name="user_email" required placeholder="your email" type="email" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                                </div>
                            </div>
                            <div className="md:flex items-center mt-8">
                                <div className="w-full flex flex-col">
                                    <label className="font-semibold leading-none text-gray-300">Subject</label>
                                    <input name='subject' type="text" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                                </div>
                            </div>
                            <div className="mt-8">
                                <div className="w-full flex flex-col">
                                    <label className="font-semibold leading-none text-gray-300">Message</label>
                                    <textarea name="message" type="text" className="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded" />
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full">
                                <button value="Send" className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                                    Send message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contact;