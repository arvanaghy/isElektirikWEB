import React, { useRef } from "react";
import WebSiteTRLayout from "@/Components/WebSiteTRLayout";
import { Head } from "@inertiajs/react";
import FAQ from "@/Components/Faq";
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
    const sik = useRef(null);

   
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
                duration: 1,
                ease: "power1.in",
                y: 50,
                scrollTrigger: {
                    trigger: farkimiz.current,
                    toggleActions: "play none none none",
                },
            }
        );
        gsap.from(
            teamImage.current,
            {
                duration: 1,
                ease: "power1.in",
                x: -500,
                scrollTrigger: {
                    trigger: teamImage.current,
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
        gsap.to(
            teamImage.current,
            {
                duration: 1,
                ease: "power1.in",
                x: 10,
                scrollTrigger: { 
                    trigger: teamImage.current,
                    toggleActions: "play none none none",
                },
            }
        );
        gsap.from(
            sik.current,
            {
                duration: 2.5,
                ease: "power4.out",
                y: -500,
                scrollTrigger: {
                    trigger: sik.current,
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
                <div className="bg-[url('../images/contact-us.jpg')] py-[150px] bg-cover text-center flex flex-col space-y-10">
                    <h3 ref={sirketProfili} className="text-transparent bg-clip-text bg-gradient-to-br
                      from-green-500 to-green-900 drop-shadow-xl text-7xl lg:text-9xl ">Sirket Profili</h3>
                    <p className="text-lg lg:text-2xl leading-10 mx-2 lg:mx-14">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt temporibus iste rerum veniam! Quibusdam asperiores quos cum quo iure ut necessitatibus commodi, labore veritatis sed assumenda laborum consequuntur quasi at.</p>
                </div>

                {/* iselektriki kesfedin */}
                <div className="bg-gray-900 text-white flex flex-col space-y-10 py-20 px-10">
                    <h3 className="text-5xl mx-5" ref={kesfedin}>Iselekrik'i kesfedin</h3>
                    <p className="text-lg lg:text-2xl text-center lg:text-left leading-8 lg:leading-10 px-1 lg:mx-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt temporibus iste rerum veniam! Quibusdam asperiores quos cum quo iure ut necessitatibus commodi, labore veritatis sed assumenda laborum consequuntur quasi at.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sunt nam architecto nulla, dolorem atque itaque ullam excepturi quasi totam voluptatem, neque debitis beatae. Cum nam quo alias sint corrupti!</p>
                </div>

                {/* farkimiz ve misyonumuz */}
                <div className="flex flex-col space-y-10 py-20 px-10 text-black ">
                    <h3 className="text-4xl lg:text-5xl mx-5" ref={farkimiz}>Farkimiz ve Misyonumuz </h3>
                    <p className="text-lg lg:text-2xl text-center lg:text-left leading-8 lg:leading-10 px-1 lg:mx-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt temporibus iste rerum veniam! Quibusdam asperiores quos cum quo iure ut necessitatibus commodi, labore veritatis sed assumenda laborum consequuntur quasi at.</p>
                </div>

                {/* Our team */}
                <section className="bg-black">
                    <div class="px-2 py-10 flex flex-wrap shrink-0 lg:flex-nowrap lg:justify-between lg:items-center lg:px-16  h-full">
                        <div class="w-full mx-2 ">
                            <h2 class="text-center text-5xl font-bold pb-5 text-white drop-shadow-xl shadow-black leading-tight">
                                Our Team
                            </h2>
                            <div class="flex flex-wrap items-center justify-between">
                                <div class="w-full lg:w-3/12">
                                    <img src="../../images/8.png" class="rounded-full bg-white shadow shadow-rose-950" alt="omaran al akkad"/>
                                    <div class=" text-center mx-auto bg-stone-200/80 shadow-sm shadow-stone-400 backdrop-blur-sm rounded-xl p-4 -mt-16">
                                        <h2 class="font-bold text-2xl drop-shadow-md sharo-rose-950 mb-2">
                                            Elyas
                                        </h2>
                                        <p class="font-semibold">
                                            Full Stack
                                        </p>
                                    </div>
                                </div>
                                <div class="w-full lg:w-8/12">
                                    <p class="text-lg lg:text-2xl text-center text-white py-4 lg:text-left leading-8 lg:leading-10 px-1 lg:mx-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dolores laboriosam. Fuga veniam vitae nesciunt, harum eius iste. Quo porro quasi rem ut quibusdam veniam perferendis, est ullam incidunt saepe.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
</section>

                {/* FAQ */}
                <div className="flex flex-col space-y-10 py-10 px-10 text-black mx-5">
                    <h3 className="text-4xl mx-5" ref={sik}>Sik Sorulan Sorular</h3>
                    <p className="text-2xl leading-10 mx-10">1Lorem ipsum dolor, etur adipisicing elit. Deserunt temporibus iste reur quasi at.</p>
                    <FAQ />
                </div>
            </WebSiteTRLayout>
        </>
    );
};

export default AboutUs;

