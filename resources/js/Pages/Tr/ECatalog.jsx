import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import WebSiteTRLayout from "@/Components/WebSiteTRLayout";
import { Head, Link } from "@inertiajs/react";


const ECatalog = ({ catalog_list, lastPage, currentPage }) => {
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
                <meta name="description" content="Free Web tutorialasdasds" />
                <meta name="keywords" content="HTML, CSS, JavaScript" />
                <meta name="author" content="John Doesdfsf" />
            </Head>
            <WebSiteTRLayout>
                <div className="flex flex-col bg-[url('../images/contact-us.jpg')] py-16 text-center bg-cover">
                   <h5 ref={eCatalog}  className="lg:text-6xl text-4xl mt-16 lg:mt-0">
                      <span className="inline-block lg:first-letter:text-7xl first-letter:text-5xl first-letter:text-green-500">E-</span>
                      <span className="inline-block lg:first-letter:text-7xl first-letter:text-5xl first-letter:text-green-500">Katalog</span>
                  </h5>
                </div>
                <div className=" flex flex-col items-center justify-center px-10 py-20 ">
                    {catalog_list.data.length < 1 && (
                        <div className="flex flex-col items-center justify-center bg-white py-16 px-16" >
                            <h3 className="first-letter:text-green-500 lg:first-letter:text-5xl first-letter:text-4xl lg:text-4xl text-3xl lg:pt-12 pb-5 ">E-Katalog Bulunamadı
                            </h3>
                            <hr width="30%" className="border-2 border-green-500 " />
                        </div>
                    )}
                    <div className="w-full flex flex-col items-center justify-center space-y-5">
                        {
                            catalog_list.data.map((item, index) => (
                                <div key={index} className="w-full flex flex-row items-center justify-center bg-gray-100 py-8 px-8" >
                                    <div className=" w-1/3 text-center text-gray-600  ">
                                        {item.title}
                                    </div>
                                    <div className=" w-1/3 text-center text-gray-600  ">
                                        {item.description}
                                    </div>
                                    <div className=" w-1/3 justify-end text-right">
                                        <Link href={item.url} className="hover:text-green-800 transition-all duration-300  text-green-500" > Download </Link>
                                    </div>
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
            </WebSiteTRLayout>
        </>
    );
};

export default ECatalog;
