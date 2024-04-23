import React from "react";
import WebSiteENLayout from "@/Components/WebSiteENLayout";
import { Head, Link } from "@inertiajs/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Details = ({ project_detail }) => {
    return (
        <>
            <Head title="">
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="author" content="" />
            </Head>
            <WebSiteENLayout>
                <div className=" flex flex-row w-full flex-wrap items-center justify-center px-10 py-20 ">
                    <div className="w-3/5">
                        <div className=" px-10">
                            <Carousel autoPlay showArrows infiniteLoop  >
                                <div>
                                    <img src="../../images/_1e687008-84d5-4f67-aa63-ad808b9c2ec6.jpeg" />
                                </div>
                                <div>
                                    <img src="../../images/_1e687008-84d5-4f67-aa63-ad808b9c2ec6.jpeg" />
                                </div>
                                <div>
                                    <img src="../../images/_1e687008-84d5-4f67-aa63-ad808b9c2ec6.jpeg" />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                    <div className="w-2/5">
                        <div className="">
                            <h1 className="text-3xl font-bold text-gray-900">
                                title : <span className="text-3xl font-bold text-gray-900">
                                     {project_detail.name}
                                </span>
                            </h1>
                            <p>
                                location : <span className="text-3xl font-bold text-gray-900">
                                    {project_detail.location}
                                </span>
                            </p>
                            <p className="text-gray-700">
                                {project_detail.description_en}
                            </p>
                        </div>

                    </div>
                </div>

            </WebSiteENLayout>
        </>
    );
};

export default Details;


