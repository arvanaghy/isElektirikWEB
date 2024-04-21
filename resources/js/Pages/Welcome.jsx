import React, { useRef } from "react";
import WebSiteENLayout from "@/Components/WebSiteENLayout";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Head, Link } from "@inertiajs/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Welcome = () => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);

    const heroSectioTitle = useRef(null);
    const heroSectioTitle1 = useRef(null);
    const heroSectioTitle2 = useRef(null);
    const heroSectioTitle3 = useRef(null);
    const heroSectioTitle4 = useRef(null);
    const scrollDown = useRef(null);
    const heroContainer = useRef(null);
    const aboutSection = useRef(null);
    const aboutSectionTitle = useRef(null);
    const missionSection = useRef(null);
    const featureImage1 = useRef(null);
    const featureImage1Replace = useRef(null);
    const featureSection1 = useRef(null);
    const heroTimeLine = gsap.timeline();
    const clients1 = useRef(null);
    const clients2 = useRef(null);
    const clients3 = useRef(null);
    const clients4 = useRef(null);
    const clients5 = useRef(null);
    const clients6 = useRef(null);
    const clients7 = useRef(null);
    const clients8 = useRef(null);
    const featureImage2 = useRef(null);
    const featureImage2Replace = useRef(null);
    const featureImage3 = useRef(null);
    const featureImage3Replace = useRef(null);
    const featureImage4 = useRef(null);
    const featureImage4Replace = useRef(null);
    const productsSectionTitle = useRef(null);

    useGSAP(() => {

        const clientsTimeLine = gsap.timeline(
            {
                scrollTrigger: {
                    trigger: clients1.current,
                    start: "top bottom",
                    toggleActions: "play none none reverse",
                    end: "bottom top",
                }
            }
        );

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

        clientsTimeLine.fromTo(
            clients1.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 1,
                ease: "back.inOut",
            }
        ).fromTo(
            clients2.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 1,
                ease: "back.inOut",
            }
        ).fromTo(
            clients3.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 1,
                ease: "back.inOut",
            }
        ).fromTo(
            clients4.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 1,
                ease: "back.inOut",
            }
        ).fromTo(
            clients5.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 1,
                ease: "back.inOut",
            }
        ).fromTo(
            clients6.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 1,
                ease: "back.inOut",
            }
        ).fromTo(
            clients7.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 1,
                ease: "back.inOut",
            }
        ).fromTo(
            clients8.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 1,
                ease: "back.inOut",
            }
        );


        gsap.fromTo(
            scrollDown.current,
            {
                y: -5,
                opacity: 0.9,
            },
            {
                opacity: 1,
                duration: 2.2,
                y: 20,
                repeat: -1,
                yoyo: true,
                ease: "linear.inOut",
            }
        );
        gsap.fromTo(
            aboutSectionTitle.current,
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
                    trigger: aboutSectionTitle.current,
                    toggleActions: "play none none reverse",
                    start: "top bottom",
                    end: "bottom top",
                },
            }
        );

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

        gsap.fromTo(
            featureImage1.current,
            {
                height: '100%',
            },
            {
                height: 0,
                duration: 3,
                ease: "liner.inOut",
                scrollTrigger: {
                    trigger: featureImage1.current,
                    toggleActions: "play none none reverse",
                    start: "top center",
                    end: "bottom top",
                },
            }
        );

        gsap.fromTo(
            featureImage2.current,
            {
                height: '100%',
            },
            {
                height: 0,
                duration: 3,
                ease: "liner.inOut",
                scrollTrigger: {
                    trigger: featureImage2.current,
                    toggleActions: "play none none reverse",
                    start: "top center",
                    end: "bottom top",
                },
            }
        );

        gsap.fromTo(
            featureImage3.current,
            {
                height: '100%',
            },
            {
                height: 0,
                duration: 3,
                ease: "liner.inOut",
                scrollTrigger: {
                    trigger: featureImage3.current,
                    toggleActions: "play none none reverse",
                    start: "top center",
                    end: "bottom top",
                },
            }
        );

        gsap.fromTo(
            featureImage4.current,
            {
                height: '100%',
            },
            {
                height: 0,
                duration: 3,
                ease: "liner.inOut",
                scrollTrigger: {
                    trigger: featureImage4.current,
                    toggleActions: "play none none reverse",
                    start: "top center",
                    end: "bottom top",
                },
            }
        );

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
            <Head title="welcome">
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="author" content="" />
            </Head>
            <WebSiteENLayout>
                {/* Is Electrik ve Muhendislik Hero Section */}
                <section
                    className="flex flex-col items-center justify-center w-full lg:min-h-[70vh] min-h-[85vh] bg-[url('../../images/5f699f2f52f2ae24b.jpg')] bg-cover bg-center bg-no-repeat"
                    ref={heroContainer}
                >
                    <div className="min-h-[90vh] lg:min-h-[73vh] flex flex-col items-center justify-center">
                        <h1
                            className="z-10 text-5xl md:text-6xl font-extrabold tracking-tight flex flex-col lg:flex-row text-center leading-relaxed text-white lg:text-6xl xl:text-7xl drop-shadow-md shadow-black text-pretty"
                            ref={heroSectioTitle}
                        >
                            <span className="mx-1" ref={heroSectioTitle1}> is </span>
                            <span className="mx-1 text-green-500 drop-shadow-lg shadow-green-900" ref={heroSectioTitle2}>Elektrik</span>
                            <span className="mx-1" ref={heroSectioTitle3}> & </span>
                            <span className="" ref={heroSectioTitle4}> Mühendislik</span>
                        </h1>
                    </div>
                    <div
                        className="text-white min-h-[10vh] font-extrabold text-xl text-center hover:text-pink-500 transition-colors duration-300 cursor-pointer"
                        ref={scrollDown}
                        onClick={() => aboutSection.current.scrollIntoView({ behavior: "smooth", inline: "nearest", top: 500 })}
                    >
                        Scroll Down
                    </div>
                </section>

                {/* our clients */}
                <section className="flex flex-col items-center justify-center bg-white py-16 px-16" >
                    <h3 className="first-letter:text-green-500 lg:first-letter:text-5xl first-letter:text-4xl lg:text-4xl text-3xl lg:pt-12 pb-5 ">Our Clients</h3>
                    <hr width="30%" className="border-2 border-green-500 " />
                    <div className="grid lg:grid-cols-8 grid-cols-2 lg:space-y-4 lg:space-y-0 gap-4 pt-6 items-center justify-between "  >
                        <div className="px-2" ref={clients1} >
                            <img src="../../images/2.png" className="rounded-full shadow shadow-blue-700 " alt="" />
                        </div>
                        <div className="px-2" ref={clients2}>
                            <img src="../../images/1.png" className="rounded-full shadow shadow-blue-700 " alt="" />
                        </div>
                        <div className="px-2" ref={clients3}>
                            <img src="../../images/3.png" className="rounded-full shadow shadow-blue-700 " alt="" />
                        </div>
                        <div className="px-2" ref={clients4}>
                            <img src="../../images/4.png" className="rounded-full shadow shadow-blue-700 " alt="" />
                        </div>
                        <div className="px-2" ref={clients5} >
                            <img src="../../images/5.png" className="rounded-full shadow shadow-blue-700 " alt="" />
                        </div>
                        <div className="px-2" ref={clients6}>
                            <img src="../../images/6.png" className="rounded-full shadow shadow-blue-700 " alt="" />
                        </div>
                        <div className="px-2" ref={clients7}>
                            <img src="../../images/7.png" className="rounded-full shadow shadow-blue-700 " alt="" />
                        </div>
                        <div className="px-2" ref={clients8}>
                            <img src="../../images/8.png" className="rounded-full shadow shadow-blue-700 " alt="" />
                        </div>
                    </div>
                </section>

                {/* about */}
                <section className="flex flex-col items-center justify-center pb-32 -16 px-12 text-center bg-white min-h-[30vh]" ref={aboutSection} >
                    <h3 className="first-letter:text-green-500 lg:first-letter:text-5xl first-letter:text-4xl lg:text-4xl text-3xl lg:pt-12 pb-5 ">About Us</h3>
                    <hr width="30%" className="border-2 border-green-500 " />
                    <p className="text-xl text-left lg:text-center lg:text-3xl text-transparent pt-8 bg-clip-text  bg-clip-text  bg-[url('../../images/_ce21b521-0085-47dc-bb9c-5649120210a8.jpeg')] bg-fixed " ref={aboutSectionTitle}>
                        İs elektrik & mühendislik has been founded in 2017 in İstanbul kemerburga. we have worked in the field of electrical projects and contracting services for many years and have completed many projects from residential to industrial facilities. Our aim is to provide our customers the best quality services under all circumstances.
                    </p>
                </section>

                {/* Slogan Section */}
                <section className=" flex flex-col items-center justify-center p-8 text-center bg-white min-h-[90vh] bg-[url('../../images/_ce21b521-0085-47dc-bb9c-5649120210a8.jpeg')] bg-cover bg-center bg-no-repeat">
                    <h2 className="text-7xl lg:text-6xl px-8 pb-8 text-transparent  text-white" >
                        Electrifying Solutions for Your Home and Business
                    </h2>
                </section>

                <section className="flex flex-col items-center justify-center  text-center bg-white min-h-[90vh] " >
                    <div className="w-full flex flex-wrap flex-col lg:flex-row justify-center">
                        <div className="w-full lg:w-1/2 p-4 flex flex-col flex-wrap items-center justify-center min-h-[70vh]">
                            <p className="text-2xl first-letter:text-3xl text-start lg:text-3xl lg:first-letter:text-7xl first-letter:text-green-500 text-transparent px-8 text-justify  bg-clip-text bg-gradient-to-r from-green-500 to-green-900" ref={featureSection1} >
                                Reliable Service:
                                Consistent, uninterrupted power delivery with minimal outages &
                                Rapid response to restore power during outages

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
                            <p className="text-2xl first-letter:text-3xl text-start lg:text-4xl lg:first-letter:text-7xl first-letter:text-green-500 text-transparent px-8 text-justify  bg-clip-text bg-gradient-to-r from-green-500 to-green-200"  >
                                <ul>
                                    <li> Customer-Centric Approach:</li>
                                    <li> Affordable Costs</li>
                                    <li>Flexible billing and payment options</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Missions Section */}
                <section className="flex flex-col items-center justify-center text-center bg-white min-h-[90vh] " >
                    <div className="w-[90%] h-[80vh] flex items-center justify-center bg-[url('../../images/94c650ec-1f12-4dea-94ed-dcd4e719f6ac.jpeg')] bg-cover bg-center bg-no-repeat" ref={missionSection} >
                        <h2 className="text-4xl text-transparent flex flex-col space-y-6 items-center justify-center flex-wrap bg-clip-text bg-gradient-to-r from-white to-green-200">
                            <div className="text-6xl">
                                Our missions are to:
                            </div>
                            <div className="text-4xl mx-10">
                            Combining technical expertise, project management excellence, and a customer-centric approach, we unlock new possibilities.
                            </div>
                        </h2>
                    </div>
                </section>

                <section className="flex flex-col items-center justify-center  text-center bg-white min-h-[90vh] " >
                    <div className="w-full flex flex-wrap flex-row justify-center">
                        <div className="w-full lg:w-1/2 p-4 flex flex-col items-center justify-center min-h-[70vh]">
                            <p className="text-2xl first-letter:text-3xl text-start lg:text-4xl lg:first-letter:text-7xl first-letter:text-green-500 text-transparent px-8 text-justify  bg-clip-text bg-gradient-to-r from-green-500 to-green-900"  >
                                <ul>
                                    <li>Responsive and Accessible Support:</li>
                                    <li>24/7 availability through multiple channels (phone, email, chat, etc.)</li>
                                    <li>Empowered and well-trained customer service representatives</li>
                                </ul>
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
                            <p className="text-2xl first-letter:text-3xl text-start lg:text-3xl lg:first-letter:text-7xl first-letter:text-green-500 text-transparent px-8 text-justify  bg-clip-text bg-gradient-to-r from-green-500 to-green-200"  >
                                <ul>
                                    <li>Experienced Team:</li>
                                    <li>Multidisciplinary project managers with relevant credentials</li>
                                    <li>Access to specialized technical experts and consultants</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Projects Section */}
                <section className="flex flex-col items-center justify-center py-8 text-center bg-white  ">
                    <div className="w-full flex-wrap bg-white flex flex-row items-center justify-between px-12 py-4">
                        <h3 className="text-4xl text-black flex flex-row items-center justify-center border-b-2 pb-5 border-green-500 " ref={productsSectionTitle}> Our Projects</h3>
                        <Link href="/projects" className="hidden lg:inline-block hover:text-green-800 transition-all duration-300 text-2xl text-green-500">
                            show All
                        </Link>
                    </div>
                    <div className="grid lg:grid-cols-6 lg:gap-4 grid-cols-1 space-y-5 lg:space-x-5  lg:space-y-0 px-5">
                        <div className="col-span-1  relative cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out ">
                            <img src="../../images/_7f66a187-fc33-4d60-8e36-9a3a4854e77c.jpeg" alt="Our Commitments" className="w-full h-52 rounded-lg shadow shadow-black hover:filter hover:grayscale" />
                            <h2 className="text-lg font-bold absolute bottom-3 left-3 text-white drop-shadow shadow-black  ">Our Commitments</h2>
                        </div>
                        <div className="col-span-1  relative cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out ">
                            <img src="../../images/_7f66a187-fc33-4d60-8e36-9a3a4854e77c.jpeg" alt="Our Commitments" className="w-full h-52 rounded-lg shadow shadow-black hover:filter hover:grayscale" />
                            <h2 className="text-lg font-bold absolute bottom-3 left-3 text-white drop-shadow shadow-black  ">Our Commitments</h2>
                        </div>

                        <div className="col-span-1  relative cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out ">
                            <img src="../../images/_7f66a187-fc33-4d60-8e36-9a3a4854e77c.jpeg" alt="Our Commitments" className="w-full h-52 rounded-lg shadow shadow-black hover:filter hover:grayscale" />
                            <h2 className="text-lg font-bold absolute bottom-3 left-3 text-white drop-shadow shadow-black  ">Our Commitments</h2>
                        </div>
                        <div className="col-span-1 relative cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out ">
                            <img src="../../images/_7f66a187-fc33-4d60-8e36-9a3a4854e77c.jpeg" alt="Our Commitments" className="w-full h-52 rounded-lg shadow shadow-black hover:filter hover:grayscale" />
                            <h2 className="text-lg font-bold absolute bottom-3 left-3 text-white drop-shadow shadow-black  ">Our Commitments</h2>
                        </div>
                        <div className="col-span-1 relative cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out ">
                            <img src="../../images/_7f66a187-fc33-4d60-8e36-9a3a4854e77c.jpeg" alt="Our Commitments" className="w-full h-52 rounded-lg shadow shadow-black hover:filter hover:grayscale" />
                            <h2 className="text-lg font-bold absolute bottom-3 left-3 text-white drop-shadow shadow-black  ">Our Commitments</h2>
                        </div>
                        <div className="col-span-1 relative cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out ">
                            <img src="../../images/_7f66a187-fc33-4d60-8e36-9a3a4854e77c.jpeg" alt="Our Commitments" className="w-full h-52 rounded-lg shadow shadow-black hover:filter hover:grayscale" />
                            <h2 className="text-lg font-bold absolute bottom-3 left-3 text-white drop-shadow shadow-black  ">Our Commitments</h2>
                        </div>
                    </div>
                    <div className=" pt-8 lg:hidden w-full flex-wrap bg-white flex flex-row items-center justify-center px-12 py-4">
                        <Link href="/projects" className="hidden lg:inline-block hover:text-green-800 transition-all duration-300 text-2xl text-green-500">
                            show All
                        </Link>
                    </div>

                </section>
            </WebSiteENLayout>
        </>
    );
};

export default Welcome;