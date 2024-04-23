import React, { useRef } from "react";
import WebSiteTRLayout from "@/Components/WebSiteTRLayout";
import { Head } from "@inertiajs/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutUs = () => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    const sirketProfili = useRef(null);
    const kesfedin = useRef(null);
    const farkimiz = useRef(null);
    const teamImage = useRef(null);
    const ourTeam = useRef(null);


    useGSAP(() => {
        gsap.from(
            sirketProfili.current,
            {
                duration: 2.5,
                ease: "power4.out",
                y: -500,
            }
        );
        gsap.from(
            kesfedin.current,
            {
                duration: 2.5,
                ease: "power4.out",
                x: 5000,
                scrollTrigger: {
                    trigger: kesfedin.current,
                    toggleActions: "play none none none",
                },
            }
        );
        gsap.from(
            farkimiz.current,
            {
                duration: 2.5,
                ease: "power4.out",
                x: 5000,
                scrollTrigger: {
                    trigger: kesfedin.current,
                    toggleActions: "play none none none",
                },
            }
        );
       
        gsap.from(
            ourTeam.current,
            {
                duration: 1,
                ease: "power1.in",
                x: 500,
                scrollTrigger: {
                    trigger: ourTeam.current,
                    toggleActions: "play none none none",
                },
            }
        );
        
    })

    return (
        <>
            <Head title="Hakkımızda">
                <meta name="description" content="Free Web tutorialasdasds" />
                <meta name="keywords" content="HTML, CSS, JavaScript" />
                <meta name="author" content="John Doesdfsf" />
            </Head>
            <WebSiteTRLayout>
                {/* sirket profili */}
                <div className="bg-[url('../images/contact-us.jpg')] py-16 bg-cover text-center flex flex-col lg:mt-0 mt-20">
                    <h5 ref={sirketProfili} className="text-6xl space-x-5">
                        <span className="inline-block first-letter:text-7xl first-letter:text-green-500">Sirket</span>
                        <span className="inline-block first-letter:text-7xl first-letter:text-green-500"> Profili </span>
                    </h5>
                    <h3 className="text-transparent bg-clip-text bg-gradient-to-br
                      from-green-500 to-green-900 drop-shadow-xl text-7xl lg:text-9xl "></h3>
                </div>

                {/* iselektriki kesfedin */}
                <div className="text-black flex flex-col space-y-10 lg:p-20 p-10">
                    <h3 ref={kesfedin} className="text-5xl first-letter:text-green-500 first-letter:text-6xl mx-5">Iselekrik'i kesfedin</h3>
                    <p className="text-2xl leading-10 lg:mx-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt temporibus iste rerum veniam! Quibusdam asperiores quos cum quo iure ut necessitatibus commodi, labore veritatis sed assumenda laborum consequuntur quasi at.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sunt nam architecto nulla, dolorem atque itaque ullam excepturi quasi totam voluptatem, neque debitis beatae. Cum nam quo alias sint corrupti!</p>
                </div>

                {/* farkimiz ve misyonumuz */}
                <div className="flex flex-col space-y-10 lg:p-20 p-10  text-white bg-black ">
                    <h3 className="text-4xl lg:text-5xl mx-5 first-letter:text-5xl lg:first-letter:text-6xl first-letter:text-green-500" ref={farkimiz}>Farkimiz ve Misyonumuz </h3>
                    <p className="text-lg lg:text-2xl text-center lg:text-left leading-8 lg:leading-10 px-1 lg:mx-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt temporibus iste rerum veniam! Quibusdam asperiores quos cum quo iure ut necessitatibus commodi, labore veritatis sed assumenda laborum consequuntur quasi at.</p>
                </div>

                {/* Our team */}
                <section className="text-black">
                    <div className="lg:p-10 flex flex-wrap shrink-0 lg:flex-nowrap lg:justify-between lg:items-center lg:px-16  h-full">
                        <div className="w-full lg:mx-20 mx-5 ">
                            <h2  ref={ourTeam}
                            className="text-center lg:text-6xl lg:first-letter:text-7xl text-5xl font-bold pb-5 text-black drop-shadow-xl shadow-black leading-tight mt-10 lg:mt-0 first-letter:text-green-500 first-letter:text-6xl">
                                Our Team
                            </h2>
                            <div className="flex flex-wrap items-center justify-between">
                                <div className="w-full lg:w-3/12">
                                    <img src="../../images/ibrahim.jpg" className="rounded-full bg-white shadow shadow-rose-950" alt="omaran al akkad" />
                                    <div className=" text-center mx-auto bg-stone-200/80 shadow-sm shadow-stone-400 backdrop-blur-sm rounded-xl p-4 -mt-16">
                                        <h2 className="font-bold text-2xl drop-shadow-md sharo-rose-950 mb-2">
                                            ibrahim Sacak
                                        </h2>
                                        <p className="font-semibold">
                                            CEO
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full lg:w-8/12">
                                    <p className="text-lg lg:text-2xl text-center text-black py-4 lg:text-left leading-8 lg:leading-10 px-1 lg:mx-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dolores laboriosam. Fuga veniam vitae nesciunt, harum eius iste. Quo porro quasi rem ut quibusdam veniam perferendis, est ullam incidunt saepe.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </WebSiteTRLayout>
        </>
    );
};

export default AboutUs;

