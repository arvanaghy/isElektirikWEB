import React, { useEffect, useRef, useState } from "react";
import { Head } from "@inertiajs/react";
import WebSiteENLayout from "@/Components/WebSiteENLayout";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import parse from 'html-react-parser';


const OurServices = ({
    address,
    phone,
    email,
    insta,
    telegram,
    linkdin,
    about_us_text_en,
    electrical_services,
    mechanical_services,
}
) => {

    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const headTitle = useRef(null);

    const [dropDown, setDropDown] = useState({});

    useEffect(() => {
        const newDropDown = {};
        electrical_services.forEach(element => {
            newDropDown['dropDown_' + element.id] = false;
        });
        setDropDown(newDropDown);
    }, [electrical_services]);


    useGSAP(() => {
        gsap.from(
            headTitle.current,
            {
                duration: 2.5,
                ease: "power4.out",
                y: -500,
            }
        );
    });

    return (
        <>
            <Head title="Our Services" />
            <WebSiteENLayout address={address?.general_value} phone={phone?.general_value} email={email?.general_value} telegram={telegram?.general_value} linkdin={linkdin?.general_value} insta={insta?.general_value} about_en={about_us_text_en?.general_value}  >
                <div className="bg-black py-16 bg-auto bg-no-repeat text-center flex flex-col lg:mt-0 mt-28">
                    <h5 ref={headTitle} className="text-3xl font-bold lg:text-6xl space-x-5">
                        <span className="inline-block first-letter:text-5xl lg:first-letter:text-7xl text-white">Our Services</span>
                    </h5>
                </div>
                <section className="py-20 flex flex-row flex-wrap items-center justify-between" >
                    <div className="w-full lg:w-1/2 py-6">
                        <h3 className="text-4xl font-bold mb-5 text-center">Electrical Services</h3>
                        <ul className=" text-center lg:mx-24  lg:p-5 space-y-4 " id="electrical" >
                            {electrical_services && electrical_services.map((element) => (
                                <li className="px-5 " key={element.id}>
                                    <h4 className="cursor-pointer hover:bg-gray-600 bg-gray-800 text-white px-5 py-3 mb-1 rounded flex   items-center justify-between shadow shadow-gray-600/40"
                                        onClick={() => setDropDown(prevState => ({
                                            ...prevState,
                                            ['dropDown_' + element.id]: !prevState['dropDown_' + element.id]
                                        }))}
                                    >
                                        <span className="inline-block">
                                            {element?.title_en}
                                        </span>
                                        <svg className={`w-6 h-6 ${dropDown['dropDown_' + element.id] ? '' : 'rotate-180'} `} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z" fill="#ffffff"></path> </g></svg>
                                    </h4>
                                    <div className={`${dropDown['dropDown_' + element.id] ? 'block' : 'hidden'} transition-all duration-300 text-start text-pretty ease-in-out text-start`} >
                                        {parse(element?.description_en)}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/2 py-6 ">
                        <h3 className="text-4xl font-bold mb-5 text-center">Mechanical Services</h3>
                        <ul className=" text-center lg:mx-24 lg:p-5 space-y-4 " id="mechanical" >
                            {mechanical_services && mechanical_services.map((element) => (
                                <li className="px-5 " key={element.id}>
                                    <h4 className="cursor-pointer hover:bg-gray-600 bg-gray-800 text-white px-5 py-3 mb-1 rounded flex flex-  items-center justify-between shadow shadow-gray-600/40"
                                        onClick={() => setDropDown(prevState => ({
                                            ...prevState,
                                            ['dropDown_' + element.id]: !prevState['dropDown_' + element.id]
                                        }))}
                                    >
                                        <span className="inline-block">
                                            {element?.title_en}
                                        </span>
                                        <svg className={`w-6 h-6 ${dropDown['dropDown_' + element.id] ? '' : 'rotate-180'} `} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z" fill="#ffffff"></path> </g></svg>
                                    </h4>
                                    <div className={`${dropDown['dropDown_' + element.id] ? 'block' : 'hidden'} transition-all duration-300 ease-in-out ease-in-out text-start `} >
                                        {parse(element?.description_en)}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </WebSiteENLayout>
        </>
    )
}

export default OurServices