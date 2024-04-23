import React from "react";
import WebSiteENLayout from "@/Components/WebSiteENLayout";
import { Head, Link } from "@inertiajs/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Map from "@/Components/Map";


const Details = ({ project_detail,
    images,
    address,
    phone,
    email,
    insta,
    telegram,
    linkdin,
    about_us_text_tr,
    other_projects, }) => {
    return (
        <>
            <Head title="">
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="author" content="" />
            </Head>
            <WebSiteENLayout address={address?.general_value} phone={phone?.general_value} email={email?.general_value} telegram={telegram?.general_value} linkdin={linkdin?.general_value} insta={insta?.general_value} about_tr={about_us_text_tr?.general_value} >
                <div className=" flex flex-row w-full flex-wrap items-center justify-center px-10 py-20 ">
                    <div className="w-full lg:w-3/5">
                        <div className=" px-10">
                            <Carousel autoFocus autoPlay showArrows infiniteLoop  >
                                {images.map((image, index) =>
                                (
                                    <div className="border  shadow-2xl" key={index}>
                                        <img src={`../../images/projects/orignial/${image.name}`} />
                                    </div>
                                ))
                                }


                            </Carousel>
                        </div>
                    </div>
                    <div className="w-full border-4 border-green-200  rounded-md shadow-xl  p-5 lg:max-w-[32em] lg:mr-20 lg:w-2/5">
                        <div className="space-y-8 flex flex-col">
                            <h1 className="lg:text-xl flex flex-row border-l border-green-400 pl-4 justify-between hover:text-green-400 duration-300 font-bold text-gray-900">
                            Proje Adı: <span className="lg:text-xl font-bold text-gray-500">
                                    {project_detail.name}
                                </span>
                            </h1>
                            <p className="lg:text-xl flex flex-row border-l border-green-400 pl-4 justify-between hover:text-green-400 duration-300">
                            ilce: <span className="lg:text-xl  font-bold text-gray-500">
                                    {project_detail.province}
                                </span>
                            </p>
                            <p className="lg:text-xl flex flex-row border-l border-green-400 pl-4 justify-between hover:text-green-400 duration-300">
                            Sokak: <span className="lg:text-xl  font-bold text-gray-500">
                                    {project_detail.alley}
                                </span>
                            </p>
                            <p className="lg:text-xl flex flex-row border-l border-green-400 pl-4 justify-between hover:text-green-400 duration-300">
                            Başlangıç ​​tarihi: <span className="lg:text-xl  font-bold text-gray-500">
                                    {project_detail.start_date.substring(0, 10)}
                                </span>
                            </p>
                            <p className="lg:text-xl flex flex-row border-l border-green-400 pl-4 justify-between hover:text-green-400 duration-300">
                            Bitiş tarihi: <span className="lg:text-xl font-bold text-gray-500">
                                    {project_detail.end_date ? project_detail.end_date.substring(0, 10) : 'Still Working...'}
                                </span>
                            </p>
                            <p className="flex flex-col gap-6 justify-between border-l lg:text-xl border-green-400 pl-4 hover:text-green-400 duration-300 ;lg:text-bold">Detail: <p className="text-gray-500 hover:animate-pulse text-justify  lg:text-xl">
                                {project_detail.description_tr}
                            </p>
                            </p>
                            <Map></Map>
                        </div>

                    </div>
                </div>
                <section className="flex flex-col items-center justify-center py-8 text-center bg-white  ">
                    <div className="w-full flex-wrap bg-white flex flex-row items-center justify-between px-12 py-4">
                        <h3 className="text-4xl text-black flex flex-row items-center justify-center border-b-2 pb-5 border-green-500 "> Diğer projeler</h3>

                    </div>
                    <div className="grid lg:grid-cols-6 lg:gap-4 grid-cols-1 space-y-5 lg:space-x-5  lg:space-y-0 px-5">
                        {other_projects.map((project, index) =>
                        (
                            <Link href={`/tr/project-details/${project.slug}`} key={index} className="col-span-1  relative cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out ">
                                <img src={`../../images/projects/orignial/${project.image}`} alt={project.name} className="w-full h-52 rounded-lg shadow shadow-black hover:filter hover:grayscale" />
                                <h2 className="text-lg font-bold absolute bottom-3 left-3 text-white drop-shadow shadow-black  ">{project.name}</h2>
                            </Link>
                        ))

                        }

                    </div>

                </section>

            </WebSiteENLayout>
        </>
    );
};

export default Details;


