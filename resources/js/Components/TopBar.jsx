import { Link } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import { usePage } from "@inertiajs/react";

const TopBar = () => {
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
                <div className="absolute hidden md:inline-block left-8 top shadow-lg opacity-90 top-[5.5vh] z-[60] bg-slate-100 rounded-lg">
                    <ul className="p-1">
                        <li className="p-2 transition-all duration-200 hover:font-extrabold hover:bg-slate-200">
                            <Link
                                className="px-2 font-bold"
                                href={
                                    "" + url.replace("/en", "") == ""
                                        ? "/"
                                        : url.replace("/en", "")
                                }
                            >
                                Turkce
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default TopBar;
