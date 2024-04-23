import React, { useEffect, useRef }  from "react";
import WebSiteENLayout from "@/Components/WebSiteENLayout";
import { Head, Link } from "@inertiajs/react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const ECatalog = ({ 
    catalog_list,
    lastPage,
    currentPage,
    address,
    phone,
    email,
    insta,
    telegram,
    linkdin,
    about_us_text_en,
}) => {
    gsap.registerPlugin(useGSAP);
    const eCatalog = useRef(null);

    useGSAP(() => {
        gsap.from(
            eCatalog.current,
            {
                duration: 2.5,
                ease: "power4.out",
                y: -500,
            }
        );
    });

    const range = [];

    for (let i = 1; i < lastPage; i++) {
        range.push(i);
    }

    return (
        <>
            <Head title="e-catalog">
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="author" content="" />
            </Head>
            <WebSiteENLayout address={address?.general_value} phone={phone?.general_value} email={email?.general_value} telegram={telegram?.general_value} linkdin={linkdin?.general_value} insta={insta?.general_value} about_en={about_us_text_en?.general_value}>
            <div className="flex flex-col bg-[url('../images/contact-us.jpg')] py-16 text-center bg-cover">
                        <h5 ref={eCatalog}  className="lg:text-6xl text-4xl  mt-16 lg:mt-0">
                            <span className="inline-block lg:first-letter:text-7xl first-letter:text-5xl first-letter:text-green-500">E-</span>
                            <span className="inline-block lg:first-letter:text-7xl first-letter:text-5xl first-letter:text-green-500">Catalog</span>
                        </h5>
                    </div>
                <div className=" flex flex-col items-center justify-center px-10 py-20 ">
                    {catalog_list.data.length < 1 && (
                        <div className="flex flex-col items-center justify-center bg-white py-16 px-16" >
                            <h3 className="first-letter:text-green-500 lg:first-letter:text-5xl first-letter:text-4xl lg:text-4xl text-3xl lg:pt-12 pb-5 ">No E-Catalog Found
                            </h3>
                            <hr width="30%" className="border-2 border-green-500 " />
                        </div>
                    )}
                    <div className=" w-full flex flex-col lg:px-20 space-y-8 justify-between text-center">
                        {
                            catalog_list.data.map((item, index) => (
                                <div key={index} className="border flex flex-col lg:flex-row lg:justify-between lg:px-20 lg:items-center rounded-md py-8 shadow-lg" >
                                    {/* <div className="flex flex-row justify-between items-center border-l-4 pl-5 border-green-400 w-1/3 text-center text-2xl">
                                        Title:  <span className=" text-gray-600 ">{item.title}</span>
                                    </div>
                                    <div className="flex flex-row justify-between items-center border-l-4 pl-5 border-green-400 w-1/3 text-center  text-2xl ">
                                    Description: <span className=" text-gray-600">{item.description}</span>
                                    </div>
                                    <div className=" w-1/3 justify-end text-right">
                                        <Link href={item.url} className="hover:text-green-800 transition-all duration-300  text-green-500" > Download </Link>
                                    </div> */}
                                    <p  className="border-l-4 flex flex-row justify-between lg:justify-normal px-4 border-green-400" >
                                        Catalog Title: <span className="text-gray-500">{item.title}</span>
                                    </p>
                                    <p className="border-l-4 flex flex-col lg:flex-row lg:items-center pt-4 justify-between px-4 border-green-400" >
                                        Catalog description: <span className="pt-2 text-gray-500">{item.description}</span>
                                    </p>

                                    
                                    <Link href={item.url} className="hover:text-green-800  pt-5 transition-all duration-300  text-green-500" > Download </Link>

                                </div>
                                
                            )
                            )
                        }

                    </div>
                    {lastPage > 1 && (
                        <div className="flex flex-col items-center w-full py-3">
                            <div className="flex flex-row w-full h-32 items-center justify-center ">
                                <Link href="/projects?page=1" className="hover:text-green-800 transition-all duration-300  text-green-500">
                                    FitrstPage
                                </Link>
                                {range.map((page) => (
                                    <Link
                                        href={`/projects?page=${page}`}
                                        className={`mx-2 border-2 border-green-400 p-2 rounded-md hover:text-green-800 transition-all duration-300 text-green-500 ${page === currentPage ? "bg-green-500 text-white" : ""} `}>{page}</Link>
                                ))}
                                <Link href={`/projects?page=${lastPage}`} className="hover:text-green-800 transition-all duration-300 text-green-500">
                                    lastPage
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </WebSiteENLayout>
        </>
    );
};

export default ECatalog;
