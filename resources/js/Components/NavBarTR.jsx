import { Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import logo from "../../../public/images/ful-logo.png";
import { usePage } from "@inertiajs/react";


const NavBarTR = () => {
    const [isPageScrolledDown, setIsPageScrolledDown] = useState(false);
    const [isNavbarMenuOpen, setIsNavbarMenuOpen] = useState(false);
    const [isLanguageToggled, setIsLanguageToggled] = useState(false);
    const { url } = usePage();



    const scrollSpy = () => {
        if (window.scrollY > 0) {
            setIsPageScrolledDown(true);
        } else {
            setIsPageScrolledDown(false);
        }
    };

    useEffect(() => {
        addEventListener("scroll", () => {
            scrollSpy();
        });
        removeEventListener("scroll", () => { });
    }, []);

    return (
        <>
            <div className="hidden min-h-[10vh] items-center justify-end w-full z-50 lg:flex lg:flex-col lg:flex-wrap lg:sticky top-0  shadow-md shadow-gray-300 bg-[#f3f2f2]">
                <div
                    className={`flex flex-row items-center mt-3 mb-4 justify-center space-x-4 transition-all duration-900  ${isPageScrolledDown ? " scale-90" : " scale-100"
                        }`}
                >
                    <Link href="/tr" className="w-64">
                        <div>
                            <img src={logo} alt="is elektirik" />
                        </div>
                    </Link>

                    <div className="flex flex-row w-full">
                        <input
                            type="text"
                            className="rounded-l text-md w-[30rem]"
                            placeholder="Search Projects"
                        />
                        <button
                            type="submit"
                            className="px-2 rounded-r bg-slate-700 hover:bg-slate-900"
                        >
                            <svg
                                fill="#ffffff"
                                className="w-6 h-6"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                stroke="#ffffff"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M3.624,15a8.03,8.03,0,0,0,10.619.659l5.318,5.318a1,1,0,0,0,1.414-1.414l-5.318-5.318A8.04,8.04,0,0,0,3.624,3.624,8.042,8.042,0,0,0,3.624,15Zm1.414-9.96a6.043,6.043,0,1,1-1.77,4.274A6,6,0,0,1,5.038,5.038ZM4.622,9.311a1,1,0,0,1,2,0A2.692,2.692,0,0,0,9.311,12a1,1,0,0,1,0,2A4.7,4.7,0,0,1,4.622,9.311Z"></path>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="place-items-end">
                    <ul
                        className={`flex flex-row flex-wrap items-center justify-center space-x-12 text-lg ${isPageScrolledDown ? "scale-90" : "scale-100"
                            } `}
                    >
                        <li className="transition-all duration-300 ease-in-out border-b-4 border-[#f3f2f2] hover:border-b-green-600">
                            <Link
                                href="/tr/about-us"
                                className="inline-block pb-1"
                            >
                                About us
                            </Link>
                        </li>
                        <li className="transition-all duration-300 ease-in-out border-b-4 border-b-[#f3f2f2] hover:border-b-green-600">
                            <Link
                                href="/tr/contact-us"
                                className="inline-block pb-1"
                            >
                                Contact us
                            </Link>
                        </li>
                        <li className="transition-all duration-300 ease-in-out border-b-4 border-b-[#f3f2f2] hover:border-b-green-600">
                            <Link
                                href="/tr/projects"
                                className="inline-block pb-1"
                            >
                                Our Projects
                            </Link>
                        </li>
                        <li className="transition-all duration-300 ease-in-out border-b-4 border-b-[#f3f2f2] hover:border-b-green-600">
                            <Link href="/tr/blog" className="inline-block pb-1">
                                Blog
                            </Link>
                        </li>
                        <li className="transition-all duration-300 ease-in-out border-b-4 border-b-[#f3f2f2] hover:border-b-green-600">
                            <Link
                                href="/tr/e-catalog"
                                className="inline-block pb-1"
                            >
                                E-Catalog
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="fixed flex flex-col w-screen bg-gray-300 shadow-lg md:hidden shadow-gray-500/50 w-full min-h-[5vh] p-2 z-50">
                <div className="z-50 flex flex-row flex-wrap items-center justify-between w-full">
                    <div className="flex flex-row items-center justify-start w-2/5">
                        <img src={logo} alt="is elektiric" />
                    </div>
                    <div className="flex flex-row flex-wrap items-center justify-end w-3/5">
                        <button
                            onClick={() => setIsNavbarMenuOpen((prev) => !prev)}
                        >
                            {isNavbarMenuOpen ? (
                                <svg
                                    className="w-8 h-8"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g
                                        id="SVGRepo_bgCarrier"
                                        strokeWidth="0"
                                    ></g>
                                    <g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path
                                            d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
                                            stroke="#1C274C"
                                            strokeWidth="1.5"
                                        ></path>{" "}
                                        <path
                                            d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
                                            stroke="#1C274C"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                        ></path>{" "}
                                    </g>
                                </svg>
                            ) : (
                                <svg
                                    className="w-8 h-8"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g
                                        id="SVGRepo_bgCarrier"
                                        strokeWidth="0"
                                    ></g>
                                    <g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path
                                            d="M4 12H20M4 8H20M4 16H12"
                                            stroke="#000000"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>{" "}
                                    </g>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div className="flex flex-row justify-center w-full pt-3">
                    <input
                        type="text"
                        placeholder="Search Project "
                        className="w-full h-10 rounded-l text-md"
                    />
                    <button
                        type="submit"
                        className="px-2 rounded-r bg-slate-700 hover:bg-slate-900"
                    >
                        <svg
                            fill="#ffffff"
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#ffffff"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M3.624,15a8.03,8.03,0,0,0,10.619.659l5.318,5.318a1,1,0,0,0,1.414-1.414l-5.318-5.318A8.04,8.04,0,0,0,3.624,3.624,8.042,8.042,0,0,0,3.624,15Zm1.414-9.96a6.043,6.043,0,1,1-1.77,4.274A6,6,0,0,1,5.038,5.038ZM4.622,9.311a1,1,0,0,1,2,0A2.692,2.692,0,0,0,9.311,12a1,1,0,0,1,0,2A4.7,4.7,0,0,1,4.622,9.311Z"></path>
                            </g>
                        </svg>
                    </button>
                </div>
                {isNavbarMenuOpen && (
                    <div className="relative top-2 flex flex-col flex-wrap md:hidden w-full min-h-[95vh] bg-gray-300 p-2 z-50">
                        <ul className="w-full space-y-2">
                            <li>
                                <Link href="/tr/about-us">About us</Link>
                            </li>
                            <li>
                                <Link href="/tr/contact-us">Contact us</Link>
                            </li>
                            <li>
                                <Link href="/tr/projects">Our Projects</Link>
                            </li>
                            <li>
                                <Link href="/tr/blog">Blog</Link>
                            </li>
                            <li>
                                <Link href="/tr/e-catalog">E-Catalog</Link>
                            </li>
                        </ul>
                        <ul className="w-full text-white bg-gray-600 mt-2 px-1 py-2 rounded">
                            <li onClick={() => setIsLanguageToggled((prev) => !prev)} >language</li>
                            {isLanguageToggled && (
                                <li className="px-3 text-sm py-2"><Link href={
                                    "" + url.replace("/tr", "") == ""
                                        ? "/"
                                        : url.replace("/tr", "")
                                } >  English</Link> </li>

                            )}
                            <li>favorites</li>
                            <li> login</li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default NavBarTR;
