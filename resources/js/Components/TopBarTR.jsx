import { Link } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import { usePage } from "@inertiajs/react";

const TopBarTR = () => {
    const { url } = usePage();
    const languageMenuButton = useRef(null);

    const [isLanguageSelectorOpen, setIsLanguageSelectorOpen] = useState(false);

    const handleClickOutsideLanguageMenu = (event) => {
        if (
            languageMenuButton.current &&
            !languageMenuButton.current.contains(event.target)
        ) {
            setIsLanguageSelectorOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutsideLanguageMenu);

        return () => {
            document.removeEventListener(
                "click",
                handleClickOutsideLanguageMenu
            );
        };
    }, []);

    return (
        <>
            <div className="hidden lg:relative w-full md:min-h-[5vh] lg:flex lg:flex-row items-center justify-between bg-[#0E0E0E] overflow-hidden text-white px-4 py-1">
                <div className="flex flex-row w-full space-x-3">
                    <button
                        className="flex flex-row items-center space-x-3 ease-in-out hover:transition-all hover:duration-300 hover:underline"
                        ref={languageMenuButton}
                        onClick={() =>
                            setIsLanguageSelectorOpen((prev) => !prev)
                        }
                    >
                        <span className="flex flex-row">
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
                            {url.startsWith("/tr") ? "Turkce" : "English"}
                        </span>
                        {isLanguageSelectorOpen ? (
                            <span className="transition-all duration-200">
                                <svg
                                    className="w-5 h-5 "
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
                                            d="M5 15L10 9.84985C10.2563 9.57616 10.566 9.35814 10.9101 9.20898C11.2541 9.05983 11.625 8.98291 12 8.98291C12.375 8.98291 12.7459 9.05983 13.0899 9.20898C13.434 9.35814 13.7437 9.57616 14 9.84985L19 15"
                                            stroke="#ffffff"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>{" "}
                                    </g>
                                </svg>
                            </span>
                        ) : (
                            <span className="transition-all duration-200 rotate-180">
                                <svg
                                    className="w-5 h-5 "
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
                                            d="M5 15L10 9.84985C10.2563 9.57616 10.566 9.35814 10.9101 9.20898C11.2541 9.05983 11.625 8.98291 12 8.98291C12.375 8.98291 12.7459 9.05983 13.0899 9.20898C13.434 9.35814 13.7437 9.57616 14 9.84985L19 15"
                                            stroke="#ffffff"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>{" "}
                                    </g>
                                </svg>
                            </span>
                        )}
                    </button>
                </div>
                <div className="flex flex-row items-center justify-end w-full space-x-2">
                    <Link
                        href="/tr/projects"
                        className="flex flex-row items-center justify-center float-right transition-all duration-300 ease-in-out hover:underline"
                    >
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
                        Favorite Projects
                    </Link>
                    <Link
                        href="/login"
                        className="flex flex-row float-right transition-all duration-300 ease-in-out hover:underline"
                    >
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
                        login
                    </Link>
                </div>
            </div>
            {isLanguageSelectorOpen && (
                <div className="absolute hidden md:inline-block left-8 top shadow-lg opacity-90 top-[5.5vh] z-50 bg-slate-100 rounded-lg">
                    <ul className="p-1">
                        <li className="p-2 transition-all duration-200 hover:font-extrabold hover:bg-slate-200">
                            <Link
                                className="px-2 font-bold"
                                href={
                                    "" + url.replace("/tr", "") == ""
                                        ? "/"
                                        : url.replace("/tr", "")
                                }
                            >
                                English
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default TopBarTR;
