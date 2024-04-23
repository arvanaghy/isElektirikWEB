import React, { useEffect } from "react";
import WebSiteTRLayout from "@/Components/WebSiteTRLayout";
import { Head, Link } from "@inertiajs/react";

const All = ({ projects, lastPage, currentPage }) => {

    const range = [];

    for (let i = 1; i < lastPage; i++) {
        range.push(i);
    }

    return (
        <>
            <Head title="OurProjects">
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="author" content="" />
            </Head>
            <WebSiteTRLayout>
                <div className=" flex flex-col text-6xl items-center bg-gray-900 text-white justify-center px-10 py-16 ">
                    Our Projects
                </div>
                <div className=" flex flex-col items-center justify-center px-10 py-20 ">
                {projects.length < 1 && (
                            <div className="flex flex-col items-center justify-center bg-white py-16 px-16" >
                                <h3 className="first-letter:text-green-500 lg:first-letter:text-5xl first-letter:text-4xl lg:text-4xl text-3xl lg:pt-12 pb-5 ">No Projects Found</h3>
                                <hr width="30%" className="border-2 border-green-500 " />
                            </div>
                        )  }
                    <div className="grid lg:grid-cols-6 lg:gap-4 grid-cols-1 space-y-5 lg:space-x-5  lg:space-y-0 px-5">

                        {projects.length > 0 && projects.map(project =>
                            <Link href={`/project-details/${project.slug}`} key={project.id} className="group col-span-1 relative cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out ">
                                <img src={`../../images/${project.image}`} alt="Our Commitments" className="w-full h-52 rounded-lg shadow shadow-black hover:filter hover:grayscale" />

                                <div className="absolute bottom-3 duration-300 ease-in-out left-3 ">
                                    <h2 className="text-lg font-bold  drop-shadow shadow-black text-black ">{project.name}</h2>
                                    <p className="pt-1 hidden transition-all group-hover:block text-black duration-300 ease-in-out">{project.description_tr}</p>
                                </div>
                            </Link>
                        )}
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

export default All;