import { Link } from "@inertiajs/react";
import { useState } from "react";
import { usePage } from "@inertiajs/react";

const TopBar = () => {
    const { url } = usePage();

    const [isLanguageSelectorOpen, setIsLanguageSelectorOpen] = useState(false);

    return (
        <div className="hidden lg:flex lg:flex-row lg:flex-wrap h-12 bg-[#0E0E0E] overflow-hidden text-white px-4 py-1">
            <div className="w-1/2">
                <div className="flex flex-row w-full space-x-3">
                    <button
                        className="flex flex-row items-center space-x-3 "
                        onClick={() =>
                            setIsLanguageSelectorOpen((prev) => !prev)
                        }
                    >
                        <img className="w-10 h-10" src="" />
                        <span>
                            {url.startsWith("/tr") ? "Turkce" : "English"}
                        </span>
                        {isLanguageSelectorOpen ? (
                            <span> down </span>
                        ) : (
                            <span> up </span>
                        )}
                    </button>
                    {isLanguageSelectorOpen && (
                        <ul>
                            <li>
                                <Link href={"/tr" + url} >Turkce</Link>
                            </li>
                            <li>
                                <Link href={"" + url}>English</Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
            <div className="flex flex-row items-center justify-end w-1/2 space-x-2">
                <Link href="/projects" className="float-right">
                    Favorite Projects
                </Link>
                <Link href="/login" className="float-right">
                    login
                </Link>
            </div>
        </div>
    );
};

export default TopBar;
