import React, { useRef } from "react";
import WebSiteTRLayout from "@/Components/WebSiteTRLayout";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Head, Link } from "@inertiajs/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Welcome = ({
    address,
    phone,
    email,
    insta,
    telegram,
    linkdin,
    about_us_text_tr,
    feauters_1_text_tr, feauters_2_text_tr, feauters_3_text_tr, feauters_4_text_tr,
    hero_section_text_tr, slogan_text_tr,
    our_clients,
    our_projects
}) => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);

    const heroSectioTitle = useRef(null);
    const heroSectioTitle1 = useRef(null);
    const heroSectioTitle2 = useRef(null);
    const heroSectioTitle3 = useRef(null);
    const heroSectioTitle4 = useRef(null);
    // const scrollDown = useRef(null);
    const heroContainer = useRef(null);
    // const aboutSection = useRef(null);
    // const aboutSectionTitle = useRef(null);
    const missionSection = useRef(null);
    // const featureImage1 = useRef(null);
    // const featureImage1Replace = useRef(null);
    // const featureSection1 = useRef(null);
    const heroTimeLine = gsap.timeline();

    // const featureImage2 = useRef(null);
    // const featureImage2Replace = useRef(null);
    // const featureImage3 = useRef(null);
    // const featureImage3Replace = useRef(null);
    // const featureImage4 = useRef(null);
    // const featureImage4Replace = useRef(null);
    const productsSectionTitle = useRef(null);

    useGSAP(() => {

        heroTimeLine.fromTo(
            heroSectioTitle1.current,
            {
                y: 100,
                opacity: 1,
                display: "inline-block",

            },
            {
                opacity: 1,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                duration: 0.5,
                ease: "back.inOut",
                y: 0,
            }
        ).fromTo(
            heroSectioTitle2.current,
            {
                y: 100,
                opacity: 0,
                display: "inline-block",

            },
            {
                opacity: 1,
                y: 0,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                duration: 0.5,
                ease: "back.inOut",
            }
        ).fromTo(
            heroSectioTitle3.current,
            {
                display: "inline-block",
                y: 100,
                opacity: 0,

            },
            {
                opacity: 1,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                duration: 0.5,
                ease: "back.inOut",
                y: 0,
            }
        ).fromTo(
            heroSectioTitle4.current,
            {
                display: "inline-block",
                y: 100,
                opacity: 0,

            },
            {
                opacity: 1,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                duration: 0.5,
                ease: "back.inOut",
                y: 0,
            }
        );

        // gsap.fromTo(
        //     scrollDown.current,
        //     {
        //         y: -5,
        //         opacity: 0.9,
        //     },
        //     {
        //         opacity: 1,
        //         duration: 2.2,
        //         y: 20,
        //         repeat: -1,
        //         yoyo: true,
        //         ease: "linear.inOut",
        //     }
        // );


        // gsap.fromTo(
        //     aboutSectionTitle.current,
        //     {
        //         opacity: 0,
        //         y: 200,
        //     },
        //     {
        //         opacity: 1,
        //         y: 0,
        //         duration: 3,
        //         ease: "elastic.inOut",
        //         scrollTrigger: {
        //             trigger: aboutSectionTitle.current,
        //             toggleActions: "play none none reverse",
        //             start: "top bottom",
        //             end: "bottom top",
        //         },
        //     }
        // );

        gsap.fromTo(
            missionSection.current,
            {
                width: '90%',
                height: '90vh',
            },
            {
                width: '100%',
                height: '100vh',
                duration: 1.2,
                ease: "linear.inOut",
                scrollTrigger: {
                    trigger: missionSection.current,
                    toggleActions: "play none none reverse",
                    start: "top center",
                    end: "bottom top",
                },
            }
        );

        // gsap.fromTo(
        //     featureImage1.current,
        //     {
        //         height: '100%',
        //     },
        //     {
        //         height: 0,
        //         duration: 3,
        //         ease: "liner.inOut",
        //         scrollTrigger: {
        //             trigger: featureImage1.current,
        //             toggleActions: "play none none reverse",
        //             start: "top center",
        //             end: "bottom top",
        //         },
        //     }
        // );

        // gsap.fromTo(
        //     featureImage2.current,
        //     {
        //         height: '100%',
        //     },
        //     {
        //         height: 0,
        //         duration: 3,
        //         ease: "liner.inOut",
        //         scrollTrigger: {
        //             trigger: featureImage2.current,
        //             toggleActions: "play none none reverse",
        //             start: "top center",
        //             end: "bottom top",
        //         },
        //     }
        // );

        // gsap.fromTo(
        //     featureImage3.current,
        //     {
        //         height: '100%',
        //     },
        //     {
        //         height: 0,
        //         duration: 3,
        //         ease: "liner.inOut",
        //         scrollTrigger: {
        //             trigger: featureImage3.current,
        //             toggleActions: "play none none reverse",
        //             start: "top center",
        //             end: "bottom top",
        //         },
        //     }
        // );

        // gsap.fromTo(
        //     featureImage4.current,
        //     {
        //         height: '100%',
        //     },
        //     {
        //         height: 0,
        //         duration: 3,
        //         ease: "liner.inOut",
        //         scrollTrigger: {
        //             trigger: featureImage4.current,
        //             toggleActions: "play none none reverse",
        //             start: "top center",
        //             end: "bottom top",
        //         },
        //     }
        // );

        gsap.fromTo(
            productsSectionTitle.current,
            {
                opacity: 0,
                y: 200,
            },
            {
                opacity: 1,
                y: 0,
                duration: 3,
                ease: "elastic.inOut",
                scrollTrigger: {
                    trigger: productsSectionTitle.current,
                    toggleActions: "play none none reverse",
                    start: "top bottom",
                    end: "bottom top",
                },
            }
        );


    });
    return (
        <>
            <Head title="Hosgeldiniz">
            </Head>
            <WebSiteTRLayout address={address?.general_value} phone={phone?.general_value} email={email?.general_value} telegram={telegram?.general_value} linkdin={linkdin?.general_value} insta={insta?.general_value} about_tr={about_us_text_tr?.general_value}>
                {/* Is Electrik ve Muhendislik Hero Section */}
                <section className="bg-white relative lg:max-h-[80vh] lg:overflow-hidden mt-10 lg:mt-0 " ref={heroContainer}>
                    <Carousel autoFocus autoPlay showArrows showThumbs={false} infiniteLoop  >
                        <div className=" w-full h-full " >
                            <img src={`/storage/mainHome.jpeg`} className="object-cover object-center lg:object-contain w-full h-[90vh] lg:h-full" />
                        </div>
                        <div className=" w-full  " >
                            <img src={`/storage/qwe.jpeg`} className="object-cover object-center lg:object-contain w-full h-[90vh] lg:h-full" />
                        </div>
                    </Carousel>
                    <div className="w-full absolute top-0">
                        <h1
                            className="absolute left-4 lg:left-16 text-left mt-32 z-10 text-2xl md:text-3xl font-extrabold tracking-tight items-start justify-beteween leading-normal lg:leading-relaxed text-white lg:text-4xl xl:text-5xl drop-shadow-md shadow-black text-pretty"
                            ref={heroSectioTitle}
                        >
                            <span className="mx-1" ref={heroSectioTitle1}> H-MAK </span>
                            <br />
                            <span className="lg:ml-6 lg:my-4 text-green-500 drop-shadow-lg shadow-green-900 block" ref={heroSectioTitle3}> Arnavutköy</span>
                            <br />
                            <span className="mx-1 lg:my-4" ref={heroSectioTitle4}> 20 villa - 16 daire</span>
                        </h1>
                    </div>
                </section>

                <section className="flex flex-col items-center bg-white text-black lg:min-h-[50vh] justify-center lg:px-12 px-7 text-center"  >
                    <h3 className="first-letter:text-green-500 lg:first-letter:text-7xl first-letter:text-4xl lg:text-6xl text-3xl pb-5 font-bold ">
                        Mühendislik - Mekanik - Taahhüt
                    </h3>
                    <hr width="60%" className="border-2 border-green-500 " />
                </section>

                {/* our clients */}
                {
                    our_clients.lenght > 0 &&
                    (
                        <section className="flex flex-col items-center justify-center bg-white py-16 px-16" >
                            <h3 className="first-letter:text-green-500 lg:first-letter:text-5xl first-letter:text-4xl lg:text-4xl text-3xl lg:pt-12 pb-5 ">Musterilerimiz</h3>
                            <hr width="30%" className="border-2 border-green-500 " />
                            <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-8 pt-12 items-center justify-between "  >
                                {
                                    our_clients.map((client, idx) => (
                                        <div key={idx} className="px-2 py-2 flex flex-col items-center justify-center hover:-translate-y-4 duration-300 transition-all ease-in-out" >
                                            <img src={`/storage/${client.image_name}`} className="rounded-full shadow shadow-blue-700 w-32 h-32 lg:w-64 lg:h-64 " alt={client.name} />
                                        </div>
                                    ))
                                }
                            </div>
                        </section>
                    )
                }

                {/* about */}
                <section className="flex flex-col items-center bg-black text-white lg: min-h-[30vh] justify-center lg:px-12 px-7 text-center  min-h-[50vh]"  >
                    <h3 className="first-letter:text-green-500 lg:first-letter:text-5xl first-letter:text-4xl lg:text-4xl text-3xl pb-5 ">Hakkimizda</h3>
                    {/* <hr width="30%" className="border-2 border-green-500 " /> */}
                    <p className="text-xl text-left lg:text-center lg:text-3xl pt-8 text-white " >
                        {about_us_text_tr?.general_value}
                    </p>
                </section>


                {/* Slogan Section */}
                <section className=" flex flex-col items-center justify-center lg:p-8 p-6 text-center bg-white min-h-[90vh] bg-white text-black bg-cover bg-center bg-no-repeat">
                    <h2 className="text-2xl lg:text-5xl font-semibold lg:px-8 px-4 pb-8 text-left leading-relaxed text-black" >
                        {slogan_text_tr?.general_value}
                    </h2>
                </section>

                {/* <section className="flex flex-col items-center justify-center  text-center bg-white min-h-[90vh] " >
                    <div className="w-full flex flex-wrap flex-col lg:flex-row justify-center">
                        <div className="w-full lg:w-1/2 p-4 flex flex-col flex-wrap items-center justify-center min-h-[70vh]">
                            <p className="text-2xl first-letter:text-3xl text-start lg:text-3xl lg:first-letter:text-7xl first-letter:text-green-500 text-transparent lg:px-8 px-4 text-justify  bg-clip-text bg-gradient-to-r from-green-500 to-green-900" ref={featureSection1} >
                                {feauters_1_text_tr?.general_value}
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 relative">
                            <img src="../../images/ebf49d52-7a3a-4ff6-a37b-19e37a051775.jpeg" alt="" className="absolute top-0 left-0 h-full w-full " ref={featureImage1Replace} />
                            <img src="../../images/fb18e959-ea22-4023-825f-e82988496550.jpeg" alt="" className="absolute top-0 left-0 h-full w-full " ref={featureImage1} />
                        </div>
                    </div>
                    <div className="w-full flex flex-wrap flex-row justify-center bg-gray-900">

                        <div className="w-full lg:w-1/2 relative">
                            <img src="../../images/f4d9b971-f222-43e9-b8b8-cd041cc35651.jpeg" alt=""
                                ref={featureImage2Replace}
                                className="absolute top-0 left-0 h-full w-full " />
                            <img src="../../images/0d3cb257-c0e7-48be-adf6-159f37ee7491.jpeg" alt="" className="absolute top-0 left-0 h-full w-full "
                                ref={featureImage2}
                            />
                        </div>
                        <div className="w-full lg:w-1/2 p-4 flex flex-col items-center justify-center min-h-[70vh]">
                            <p className="text-2xl first-letter:text-3xl text-start lg:text-4xl lg:first-letter:text-7xl first-letter:text-green-500 text-transparent lg:px-8 px-4 text-justify  bg-clip-text bg-gradient-to-r from-green-500 to-green-200"  >
                                {feauters_2_text_tr?.general_value}

                            </p>
                        </div>
                    </div>
                </section> */}


                {/* Our Missions Section */}
                <section className="flex flex-col items-center justify-center text-center bg-white lg:min-h-[90vh] " >
                    <div className="w-[90%] h-[80vh] flex items-center justify-center bg-black text-white bg-cover bg-center bg-no-repeat" ref={missionSection} >
                        <div className=" p-6 rounded-xl text-center w-[90%]   ">
                            <h2 className="lg:text-4xl text-3xl flex flex-col lg:space-y-6 items-center justify-center flex-wrap  ">
                                <div className="lg:text-6xl text-3xl font-vold tex-white">
                                    Our missions are to:
                                </div>
                                <div className="lg:text-4xl text-2xl text-left mt-5 lg:mx-10  text-white">
                                    {hero_section_text_tr?.general_value}
                                </div>
                            </h2>
                        </div>
                    </div>
                </section>

                {/* <section className="flex flex-col items-center justify-center  text-center bg-white min-h-[90vh] " >
                    <div className="w-full flex flex-wrap flex-row justify-center">
                        <div className="w-full lg:w-1/2 p-4 flex flex-col items-center justify-center min-h-[70vh]">

                            <p className="text-2xl first-letter:text-3xl text-start lg:text-4xl lg:first-letter:text-7xl first-letter:text-green-500 text-transparent lg:px-8 px-4 text-justify  bg-clip-text bg-gradient-to-r from-green-500 to-green-900">
                                {feauters_3_text_tr?.general_value}

                            </p>

                        </div>
                        <div className="w-full lg:w-1/2 relative">
                            <img src="../../images/470f0c57-c705-4a6f-8571-9a3146b18778.jpeg" alt="" className="absolute top-0 left-0 h-full w-full " ref={featureImage3Replace} />
                            <img src="../../images/f2ad8497-4eaf-4f9f-97b0-41da5b50c9aa.jpeg" alt="" className="absolute top-0 left-0 h-full w-full " ref={featureImage3} />
                        </div>
                    </div>
                    <div className="w-full flex flex-wrap flex-row justify-center bg-gray-900">

                        <div className="w-full lg:w-1/2 relative">
                            <img src="../../images/362e0d4a-c7dc-42a4-ad7e-315b327404ca.jpeg" alt=""
                                ref={featureImage4Replace}
                                className="absolute top-0 left-0 h-full w-full " />
                            <img src="../../images/689ab2b9-4840-48ee-9d96-c255909369e8.jpeg" alt="" className="absolute top-0 left-0 h-full w-full "
                                ref={featureImage4}
                            />
                        </div>
                        <div className="w-full lg:w-1/2 p-4 flex flex-col items-center justify-center min-h-[70vh]">
                            <p className="text-2xl first-letter:text-3xl text-start lg:text-4xl lg:first-letter:text-7xl first-letter:text-green-500 text-transparent lg:px-8 px-4 text-justify  bg-clip-text bg-gradient-to-r from-green-500 to-green-900">
                                {feauters_4_text_tr?.general_value}

                            </p>
                        </div>
                    </div>
                </section> */}

                {/* Our Projects Section */}
                <section className="flex flex-col items-center justify-center py-8 text-center bg-white  ">
                    <div className="w-full flex-wrap bg-white flex flex-row items-center justify-between px-12 py-4">
                        <h3 className="text-4xl text-black flex flex-row items-center justify-center border-b-2 pb-5 border-green-500 " ref={productsSectionTitle}> Projelerimiz</h3>
                        <Link href="tr/projects" className="hidden lg:inline-block hover:text-green-800 transition-all duration-300 text-2xl text-green-500">
                            Hepsini Göster
                        </Link>
                    </div>
                    <div className="grid lg:grid-cols-5 lg:gap-8 grid-cols-1 space-y-5 lg:space-y-0 px-5 w-full">
                        {our_projects.map((project, index) =>
                        (
                            <Link href={`/tr/project-details/${project.slug}`} key={index} className="col-span-1  relative cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out ">
                                <img src={`/storage/${project.image}`} alt={project.name} className="w-full h-52 rounded-lg shadow shadow-black hover:filter hover:grayscale" />
                                <h2 className="text-lg font-bold absolute bottom-3 left-0 text-white drop-shadow shadow-black bg-black/70 px-4 py-2 rounded-r-lg  ">{project.name}</h2>
                            </Link>
                        ))
                        }
                    </div>
                    <div className="pt-8 lg:hidden w-full flex-wrap bg-white flex flex-row items-center justify-center px-12 py-4">
                        <Link href="/tr/projects" className="border border-green-500 hover:text-green-800 transition-all duration-300 p-3 rounded-lg text-2xl text-green-500">
                            Hepsini Goster
                        </Link>
                    </div>
                </section>

            </WebSiteTRLayout>
        </>
    );
};

export default Welcome;