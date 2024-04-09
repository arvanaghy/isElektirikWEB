import { Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

const NavBar = () => {
    const [isPageScrolledDown, setIsPageScrolledDown] = useState(false);

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
        removeEventListener("scroll", () => {});
    }, []);

    return (
        <div
            className="sticky top-0 z-50 flex flex-col flex-wrap py-2 space-y-3 shadow-md shadow-gray-300 bg-[#f3f2f2]"
        >
            <div
                className={`flex flex-row items-center justify-center space-x-4 transition-all duration-900  ${
                    isPageScrolledDown
                        ? " scale-90"
                        : " scale-100"
                }`}
            >
                <Link href="/">
                    <div className="">
                        <p>Is Elektrik</p>
                        <img src="/images/logo.png" alt="" />
                    </div>
                </Link>

                <div className="">
                    <input type="text" placeholder="Search" />
                    <input type="submit" value={"Search"} />
                </div>
            </div>
            <div className="">
                <ul className={`flex flex-row flex-wrap items-center justify-center space-x-4 ${isPageScrolledDown ? "scale-90" : "scale-100"} ` }>
                    <li className="transition-all duration-150 ease-in-out hover:border-b-2 hover:border-b-green-600">
                        <Link href="/about-us" className="hover:font-bold">
                            About us
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact-us" className="hover:font-bold">
                            Contact us
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" className="hover:font-bold">
                            Our Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className="hover:font-bold">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href="/e-catalog" className="hover:font-bold">
                            E-Catalog
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
