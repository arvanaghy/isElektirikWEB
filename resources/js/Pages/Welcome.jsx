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
                    className="flex flex-col items-center justify-center w-full lg:min-h-[70vh] min-h-[85vh] bg-[url('../../images/_7f66a187-fc33-4d60-8e36-9a3a4854e77c.jpeg')] bg-cover bg-center bg-no-repeat"
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
                    <h3 className="first-letter:text-pink-500 lg:first-letter:text-5xl first-letter:text-4xl lg:text-4xl text-3xl lg:pt-12 pb-5 ">Our Clients</h3>
                    <hr width="30%" className="border-2 border-pink-500 " />
                    <div className="grid lg:grid-cols-8 grid-cols-2 lg:space-y-4 lg:space-y-0 gap-4 pt-6 items-center justify-between "  >
                        <div className="px-2" ref={clients1} >
                            <img src="../../images/_7f66a187-fc33-4d60-8e36-9a3a4854e77c.jpeg" className="rounded-full shadow shadow-blue-700 " alt="" />
                            <h4 className="text-center py-2">Lorem ipsum dolor</h4>
                        </div>
                        <div className="px-2" ref={clients2}>
                            <img src="../../images/_7f66a187-fc33-4d60-8e36-9a3a4854e77c.jpeg" className="rounded-full shadow shadow-blue-700 " alt="" />
                            <h4 className="text-center py-2">Lorem ipsum dolor</h4>
                        </div>
                        <div className="px-2" ref={clients3}>
                            <img src="../../images/_7f66a187-fc33-4d60-8e36-9a3a4854e77c.jpeg" className="rounded-full shadow shadow-blue-700 " alt="" />
                            <h4 className="text-center py-2">Lorem ipsum dolor</h4>
                        </div>
                        <div className="px-2" ref={clients4}>
                            <img src="../../images/_7f66a187-fc33-4d60-8e36-9a3a4854e77c.jpeg" className="rounded-full shadow shadow-blue-700 " alt="" />
                            <h4 className="text-center py-2">Lorem ipsum dolor</h4>
                        </div>
                        <div className="px-2" ref={clients5} >
                            <img src="../../images/_7f66a187-fc33-4d60-8e36-9a3a4854e77c.jpeg" className="rounded-full shadow shadow-blue-700 " alt="" />
                            <h4 className="text-center py-2">Lorem ipsum dolor</h4>
                        </div>
                        <div className="px-2" ref={clients6}>
                            <img src="../../images/_7f66a187-fc33-4d60-8e36-9a3a4854e77c.jpeg" className="rounded-full shadow shadow-blue-700 " alt="" />
                            <h4 className="text-center py-2">Lorem ipsum dolor</h4>
                        </div>
                        <div className="px-2" ref={clients7}>
                            <img src="../../images/_7f66a187-fc33-4d60-8e36-9a3a4854e77c.jpeg" className="rounded-full shadow shadow-blue-700 " alt="" />
                            <h4 className="text-center py-2">Lorem ipsum dolor</h4>
                        </div>
                        <div className="px-2" ref={clients8}>
                            <img src="../../images/_7f66a187-fc33-4d60-8e36-9a3a4854e77c.jpeg" className="rounded-full shadow shadow-blue-700 " alt="" />
                            <h4 className="text-center py-2">Lorem ipsum dolor</h4>
                        </div>
                    </div>
                </section>

                {/* about */}
                <section className="flex flex-col items-center justify-center pb-32 -16 px-12 text-center bg-white min-h-[30vh]" ref={aboutSection} >
                    <h3 className="first-letter:text-pink-500 lg:first-letter:text-5xl first-letter:text-4xl lg:text-4xl text-3xl lg:pt-12 pb-5 ">About Us</h3>
                    <hr width="30%" className="border-2 border-pink-500 " />
                    <p className="text-xl text-left lg:text-center lg:text-3xl text-transparent pt-8 bg-clip-text  bg-clip-text  bg-[url('../../images/_7f66a187-fc33-4d60-8e36-9a3a4854e77c.jpeg')] bg-fixed " ref={aboutSectionTitle}>
                        İs elektrik & mühendislik has been founded in 2017 in İstanbul kemerburga. we have worked in the field of electrical projects and contracting services for many years and have completed many projects from residential to industrial facilities. Our aim is to provide our customers the best quality services under all circumstances.
                    </p>
                </section>

                {/* Slogan Section */}
                <section className=" flex flex-col items-center justify-center p-8 text-center bg-white min-h-[90vh] bg-[url('../../images/_7f66a187-fc33-4d60-8e36-9a3a4854e77c.jpeg')] bg-cover bg-center bg-no-repeat">
                    <h2 className="text-7xl lg:text-8xl px-8 pb-8 text-transparent  text-white" >
                        Slogan Here
                    </h2>
                    <p className="text-3xl lg:text-5xl pt-5 text-transparent text-white drop-shadow-2xl shadow-black">
                        now is iSelektriks
                    </p>
                </section>

                <section className="flex flex-col items-center justify-center  text-center bg-white min-h-[90vh] " >
                    <div className="w-full flex flex-wrap flex-col lg:flex-row justify-center">
                        <div className="w-full lg:w-1/2 p-4 flex flex-col flex-wrap items-center justify-center min-h-[70vh]">
                            <p className="text-2xl first-letter:text-3xl text-start lg:text-4xl lg:first-letter:text-7xl first-letter:text-green-500 text-transparent px-8 text-justify  bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500" ref={featureSection1} >
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate deserunt aliquam expedita velit consequatur soluta, obcaecati dolorem praesentium doloribus omnis similique inventore aspernatur, ea dolorum ab. Ipsum quos temporibus et
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 relative">
                            <img src="../../images/_6b710889-770a-446e-86ac-24162f557390.jpeg" alt="" className="absolute top-0 left-0 h-full w-full " ref={featureImage1Replace} />
                            <img src="../../images/_7f66a187-fc33-4d60-8e36-9a3a4854e77c.jpeg" alt="" className="absolute top-0 left-0 h-full w-full " ref={featureImage1} />
                        </div>
                    </div>
                    <div className="w-full flex flex-wrap flex-row justify-center bg-gray-900">

                        <div className="w-full lg:w-1/2 relative">
                            <img src="../../images/_6b710889-770a-446e-86ac-24162f557390.jpeg" alt=""
                                ref={featureImage2Replace}
                                className="absolute top-0 left-0 h-full w-full " />
                            <img src="../../images/_7f66a187-fc33-4d60-8e36-9a3a4854e77c.jpeg" alt="" className="absolute top-0 left-0 h-full w-full "
                                ref={featureImage2}
                            />
                        </div>
                        <div className="w-full lg:w-1/2 p-4 flex flex-col items-center justify-center min-h-[70vh]">
                            <p className="text-2xl first-letter:text-3xl text-start lg:text-4xl lg:first-letter:text-7xl first-letter:text-green-500 text-transparent px-8 text-justify  bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500"  >
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate deserunt aliquam expedita velit consequatur soluta, obcaecati dolorem praesentium doloribus omnis similique inventore aspernatur, ea dolorum ab. Ipsum quos temporibus et
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Missions Section */}
                <section className="flex flex-col items-center justify-center text-center bg-white min-h-[90vh] " >
                    <div className="w-[90%] h-[80vh] flex items-center justify-center bg-[url('../../images/_7f66a187-fc33-4d60-8e36-9a3a4854e77c.jpeg')] bg-cover bg-center bg-no-repeat" ref={missionSection} >
                        <h2 className="text-4xl text-transparent flex flex-col space-y-6 items-center justify-center flex-wrap bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                            <div>
                                Our missions are to:
                            </div>
                            <div className="text-4xl">
                                Lorem ipsum dolor sit amet.
                            </div>
                        </h2>
                    </div>
                </section>

                <section className="flex flex-col items-center justify-center  text-center bg-white min-h-[90vh] " >
                    <div className="w-full flex flex-wrap flex-row justify-center">
                        <div className="w-full lg:w-1/2 p-4 flex flex-col items-center justify-center min-h-[70vh]">
                            <p className="text-2xl first-letter:text-3xl text-start lg:text-4xl lg:first-letter:text-7xl first-letter:text-green-500 text-transparent px-8 text-justify  bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500"  >
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate deserunt aliquam expedita velit consequatur soluta, obcaecati dolorem praesentium doloribus omnis similique inventore aspernatur, ea dolorum ab. Ipsum quos temporibus et
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2 relative">
                            <img src="../../images/_6b710889-770a-446e-86ac-24162f557390.jpeg" alt="" className="absolute top-0 left-0 h-full w-full " ref={featureImage3Replace} />
                            <img src="../../images/_7f66a187-fc33-4d60-8e36-9a3a4854e77c.jpeg" alt="" className="absolute top-0 left-0 h-full w-full " ref={featureImage3} />
                        </div>
                    </div>
                    <div className="w-full flex flex-wrap flex-row justify-center bg-gray-900">

                        <div className="w-full lg:w-1/2 relative">
                            <img src="../../images/_6b710889-770a-446e-86ac-24162f557390.jpeg" alt=""
                                ref={featureImage4Replace}
                                className="absolute top-0 left-0 h-full w-full " />
                            <img src="../../images/_7f66a187-fc33-4d60-8e36-9a3a4854e77c.jpeg" alt="" className="absolute top-0 left-0 h-full w-full "
                                ref={featureImage4}
                            />
                        </div>
                        <div className="w-full lg:w-1/2 p-4 flex flex-col items-center justify-center min-h-[70vh]">
                            <p className="text-2xl first-letter:text-3xl text-start lg:text-4xl lg:first-letter:text-7xl first-letter:text-green-500 text-transparent px-8 text-justify  bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500"  >
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate deserunt aliquam expedita velit consequatur soluta, obcaecati dolorem praesentium doloribus omnis similique inventore aspernatur, ea dolorum ab. Ipsum quos temporibus et
                            </p>
                        </div>
                    </div>
                </section>

                {/* Our Projects Section */}
                <section className="flex flex-col items-center justify-center py-8 text-center bg-white  ">
                    <div className="w-full flex-wrap bg-white flex flex-row items-center justify-between px-12 py-4">
                        <h3 className="text-4xl text-black flex flex-row items-center justify-center border-b-2 pb-5 border-green-500 " ref={productsSectionTitle}> Our Projects</h3>
                        <Link href="#" className="hidden lg:inline-block hover:text-green-800 transition-all duration-300 text-2xl text-green-500">
                            show All
                        </Link>
                    </div>
                    <div class="grid lg:grid-cols-6 lg:gap-4 grid-cols-1 space-y-5 lg:space-x-5  lg:space-y-0 px-5">
                        <div class="col-span-1  relative cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out ">
                            <img src="../../images/_7f66a187-fc33-4d60-8e36-9a3a4854e77c.jpeg" alt="Our Commitments" class="w-full h-52 rounded-lg shadow shadow-black hover:filter hover:grayscale" />
                            <h2 class="text-lg font-bold absolute bottom-3 left-3 text-white drop-shadow shadow-black  ">Our Commitments</h2>
                        </div>
                        <div class="col-span-1  relative cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out ">
                            <img src="../../images/_7f66a187-fc33-4d60-8e36-9a3a4854e77c.jpeg" alt="Our Commitments" class="w-full h-52 rounded-lg shadow shadow-black hover:filter hover:grayscale" />
                            <h2 class="text-lg font-bold absolute bottom-3 left-3 text-white drop-shadow shadow-black  ">Our Commitments</h2>
                        </div>

                        <div class="col-span-1  relative cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out ">
                            <img src="../../images/_7f66a187-fc33-4d60-8e36-9a3a4854e77c.jpeg" alt="Our Commitments" class="w-full h-52 rounded-lg shadow shadow-black hover:filter hover:grayscale" />
                            <h2 class="text-lg font-bold absolute bottom-3 left-3 text-white drop-shadow shadow-black  ">Our Commitments</h2>
                        </div>
                        <div class="col-span-1 relative cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out ">
                            <img src="../../images/_7f66a187-fc33-4d60-8e36-9a3a4854e77c.jpeg" alt="Our Commitments" class="w-full h-52 rounded-lg shadow shadow-black hover:filter hover:grayscale" />
                            <h2 class="text-lg font-bold absolute bottom-3 left-3 text-white drop-shadow shadow-black  ">Our Commitments</h2>
                        </div>
                        <div class="col-span-1 relative cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out ">
                            <img src="../../images/_7f66a187-fc33-4d60-8e36-9a3a4854e77c.jpeg" alt="Our Commitments" class="w-full h-52 rounded-lg shadow shadow-black hover:filter hover:grayscale" />
                            <h2 class="text-lg font-bold absolute bottom-3 left-3 text-white drop-shadow shadow-black  ">Our Commitments</h2>
                        </div>
                        <div class="col-span-1 relative cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out ">
                            <img src="../../images/_7f66a187-fc33-4d60-8e36-9a3a4854e77c.jpeg" alt="Our Commitments" class="w-full h-52 rounded-lg shadow shadow-black hover:filter hover:grayscale" />
                            <h2 class="text-lg font-bold absolute bottom-3 left-3 text-white drop-shadow shadow-black  ">Our Commitments</h2>
                        </div>
                    </div>
                    <div className=" pt-8 lg:hidden w-full flex-wrap bg-white flex flex-row items-center justify-center px-12 py-4">
                        <Link href="#" className="hidden lg:inline-block hover:text-green-800 transition-all duration-300 text-2xl text-green-500">
                            show All
                        </Link>
                    </div>

                </section>
            </WebSiteENLayout>
        </>
    );
};

export default Welcome;