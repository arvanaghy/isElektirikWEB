import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import WebSiteTRLayout from "@/Components/WebSiteTRLayout";
import { Head, Link } from "@inertiajs/react";


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
    about_us_text_tr,
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
            <Head title="e-katalog">
                <meta name="description" content="Free Web tutorialasdasds" />
                <meta name="keywords" content="HTML, CSS, JavaScript" />
                <meta name="author" content="John Doesdfsf" />
            </Head>
            <WebSiteTRLayout address={address?.general_value} phone={phone?.general_value} email={email?.general_value} telegram={telegram?.general_value} linkdin={linkdin?.general_value} insta={insta?.general_value} about_tr={about_us_text_tr?.general_value}>
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
                    <div className=" w-full flex flex-col lg:px-20 space-y-8 lg:space-y-4 justify-between text-center">
                        {
                            catalog_list.data.map((item, index) => (
                                <div key={index} className="lg:text-xl border flex flex-col lg:flex-row lg:justify-between lg:px-20 lg:items-center rounded-md py-8 shadow-lg" >
                                    <p  className=" border-l-4 flex flex-row justify-between lg:justify-normal px-4 border-green-400" >
                                    İsim:<span className="text-gray-500 lg:pl-10">{item.title}</span>
                                    </p>
                                    <p className=" border-l-4 flex flex-col lg:flex-row lg:items-center pt-4 lg:pt-0 justify-between lg:justify-normal px-4 border-green-400" >
                                    Detail: <span className="pt-2 lg:pt-0 text-gray-500 lg:pl-10">{item.description}</span>
                                    </p>
                                   
                                    <a href={`../../catalog/${item.download_filename}`} target="_blank" download={item.download_filename}  className=" hover:text-green-800 h-full my-auto pt-5 lg:pt-0 transition-all duration-300  text-green-500" > İndirmek </a>

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
