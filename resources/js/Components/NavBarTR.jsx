import { Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import logo from "../../../public/images/ful-logo.png";
import { usePage } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

const NavBarTR = () => {
    const [isPageScrolledDown, setIsPageScrolledDown] = useState(false);
    const [isNavbarMenuOpen, setIsNavbarMenuOpen] = useState(false);
    const [isLanguageToggled, setIsLanguageToggled] = useState(false);
    const { url } = usePage();

    const handleSearch = (e) => {
        e.preventDefault();
        Inertia.get(`/tr/search?q=${search.value}`);
        search.value = "";
    }


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
                            <img
                                src={logo}
                                alt="is elektirik"
                                className="backdrop-filter backdrop-hue-rotate-90" />
                        </div>
                    </Link>

                    <form onSubmit={handleSearch} className="flex flex-row w-full">
                        <input
                            type="text"
                            className="rounded-l text-md w-[30rem]"
                            placeholder="Search Projects"
                            id="search"
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
                    </form>
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
                                Hakkımızda
                            </Link>
                        </li>
                        <li className="transition-all duration-300 ease-in-out border-b-4 border-b-[#f3f2f2] hover:border-b-green-600">
                        <Link
                                href="/tr/our-services"
                                className="inline-block pb-1"
                            >
                                Hizmetlerimiz
                            </Link>
                        </li>
                        <li className="transition-all duration-300 ease-in-out border-b-4 border-b-[#f3f2f2] hover:border-b-green-600">
                            <Link
                                href="/tr/projects"
                                className="inline-block pb-1"
                            >
                                Projelerimiz
                            </Link>
                        </li>
                        <li className="transition-all duration-300 ease-in-out border-b-4 border-b-[#f3f2f2] hover:border-b-green-600">
                            <Link
                                href="/tr/contact-us"
                                className="inline-block pb-1"
                            >
                                İletişim
                            </Link>
                            {/* <Link
                                href="/tr/e-catalog"
                                className="inline-block pb-1"
                            >
                                E-Katalog
                            </Link> */}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="fixed flex flex-col w-screen overflow-hidden top-0 bg-gray-300 shadow-lg md:hidden shadow-gray-500/50 min-h-[5vh] p-2 z-50">
                <div className="z-50 flex flex-row flex-wrap items-center justify-between w-full">
                    <div className="flex flex-row items-center justify-start w-2/5">
                        <Link href="/tr">
                            <img src={logo} alt="is elektiric" />
                        </Link>
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
                <form onSubmit={handleSearch} className="flex flex-row justify-center w-full pt-3">
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
                </form>
                {isNavbarMenuOpen && (
                    <div className="relative top-2 flex flex-col flex-wrap md:hidden w-full min-h-[95vh] bg-gray-300 p-2 z-50">
                        <ul className="w-full space-y-2">
                            <li>
                                <Link href="/tr/about-us">Hakkimizda</Link>
                            </li>
                            <li>
                                <Link href="/tr/our-services">Hizmetlerimiz</Link>
                            </li>
                            <li>
                                <Link href="/tr/projects">Projelerimiz</Link>
                            </li>
                            <li>
                                <Link href="/tr/contact-us">Iletisim</Link>
                            </li>
                            {/* <li>
                                <Link href="/tr/e-catalog">E-Katalog</Link>
                            </li> */}
                        </ul>
                        <ul className="w-full text-white bg-gray-600 mt-2 px-1 py-2 rounded">
                            <li className="flex flex-row mt-3"
                                onClick={() => setIsLanguageToggled((prev) => !prev)} >
                                <svg
                                    className="w-6 h-6 mx-2"
                                    viewBox="0 0 24 24"
                                    fill="none"
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
                                        {" "}
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M6.15407 7.30116C7.52877 5.59304 9.63674 4.5 12 4.5C12.365 4.5 12.7238 4.52607 13.0748 4.57644L13.7126 5.85192L11.2716 8.2929L8.6466 8.6679L7.36009 9.95441L6.15407 7.30116ZM5.2011 8.82954C4.75126 9.79256 4.5 10.8669 4.5 12C4.5 15.6945 7.17133 18.7651 10.6878 19.3856L11.0989 18.7195L8.8147 15.547L10.3741 13.5256L9.63268 13.1549L6.94027 13.6036L6.41366 11.4972L5.2011 8.82954ZM7.95559 11.4802L8.05962 11.8964L9.86722 11.5951L11.3726 12.3478L14.0824 11.9714L18.9544 14.8135C19.3063 13.9447 19.5 12.995 19.5 12C19.5 8.93729 17.6642 6.30336 15.033 5.13856L15.5377 6.1481L11.9787 9.70711L9.35371 10.0821L7.95559 11.4802ZM18.2539 16.1414C16.9774 18.0652 14.8369 19.366 12.3859 19.4902L12.9011 18.6555L10.6853 15.578L12.0853 13.7632L13.7748 13.5286L18.2539 16.1414ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z"
                                            fill="#dfdee7"
                                        ></path>{" "}
                                    </g>
                                </svg>
                                <p>
                                    Dil
                                </p>

                            </li>
                            {isLanguageToggled && (
                                <li className="px-3 text-sm py-2"><Link href={
                                    "" + url.replace("/tr", "") == ""
                                        ? "/"
                                        : url.replace("/tr", "")
                                } >  English</Link> </li>

                            )}
                            <li className="flex flex-row mt-3">
                                <svg
                                    className="w-6 h-6 mx-2"
                                    viewBox="-0.5 0 25 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g
                                        id="SVGRepo_tracerCarrier"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                        {" "}
                                        <path
                                            d="M20 7.88C20 6.60962 19.4953 5.39128 18.597 4.49298C17.6987 3.59468 16.4804 3.09003 15.21 3.09003H8.79004C7.51965 3.09003 6.30131 3.59468 5.40302 4.49298C4.50472 5.39128 4 6.60962 4 7.88"
                                            stroke="#ffffff"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>{" "}
                                        <path
                                            d="M4.00023 7.88V20.4C3.97675 20.5986 4.02161 20.7992 4.12737 20.9689C4.23312 21.1385 4.39348 21.2671 4.58208 21.3335C4.77068 21.3999 4.97626 21.4 5.16496 21.3339C5.35367 21.2679 5.51427 21.1395 5.62029 20.97L7.39025 18.09C7.4548 17.972 7.54706 17.8714 7.65911 17.7969C7.77115 17.7225 7.89967 17.6764 8.03349 17.6627C8.16732 17.6489 8.30243 17.6678 8.42729 17.7179C8.55216 17.768 8.66299 17.8476 8.75023 17.95L11.2502 20.76C11.3441 20.8664 11.4595 20.9516 11.5888 21.01C11.7181 21.0684 11.8584 21.0986 12.0002 21.0986C12.1421 21.0986 12.2824 21.0684 12.4117 21.01C12.541 20.9516 12.6564 20.8664 12.7502 20.76L15.2502 17.95C15.3375 17.8476 15.4483 17.768 15.5732 17.7179C15.698 17.6678 15.8332 17.6489 15.967 17.6627C16.1008 17.6764 16.2293 17.7225 16.3414 17.7969C16.4534 17.8714 16.5457 17.972 16.6103 18.09L18.3802 20.97C18.4863 21.1395 18.6469 21.2679 18.8356 21.3339C19.0243 21.4 19.2298 21.3999 19.4184 21.3335C19.607 21.2671 19.7674 21.1385 19.8732 20.9689C19.9789 20.7992 20.0237 20.5986 20.0002 20.4V7.88"
                                            stroke="#ffffff"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>{" "}
                                    </g>
                                </svg>
                                <p>Favori Projeler</p></li>
                            <li className="flex flex-row mt-3">
                                <Link href="/login" className="flex flex-row" >
                                    <svg
                                        className="w-6 h-6 mx-2"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g
                                            id="SVGRepo_tracerCarrier"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></g>
                                        <g id="SVGRepo_iconCarrier">
                                            {" "}
                                            <circle
                                                cx="12"
                                                cy="6"
                                                r="4"
                                                stroke="#ffffff"
                                                strokeWidth="1.5"
                                            ></circle>{" "}
                                            <path
                                                d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634"
                                                stroke="#ffffff"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                            ></path>{" "}
                                        </g>
                                    </svg>
                                    <p>
                                        login
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default NavBarTR;
