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
                    <h3 ref={sirketProfili} className="text-7xl ">Sirket Profili</h3>
                    <p className="text-2xl leading-10 mx-14">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt temporibus iste rerum veniam! Quibusdam asperiores quos cum quo iure ut necessitatibus commodi, labore veritatis sed assumenda laborum consequuntur quasi at.</p>
                </div>

                {/* iselektriki kesfedin */}
                <div className="bg-black text-white flex flex-col space-y-10 py-20 px-10">
                    <h3 className="text-5xl mx-5" ref={kesfedin}>Iselekrik'i kesfedin</h3>
                    <p className="text-2xl leading-10 mx-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt temporibus iste rerum veniam! Quibusdam asperiores quos cum quo iure ut necessitatibus commodi, labore veritatis sed assumenda laborum consequuntur quasi at.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sunt nam architecto nulla, dolorem atque itaque ullam excepturi quasi totam voluptatem, neque debitis beatae. Cum nam quo alias sint corrupti!</p>
                </div>

                {/* farkimiz ve misyonumuz */}
                <div className="flex flex-col space-y-10 py-20 px-10 text-black ">
                    <h3 className="text-5xl mx-5" ref={farkimiz}>Farkimiz ve Misyonumuz </h3>
                    <p className="text-2xl leading-10 mx-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt temporibus iste rerum veniam! Quibusdam asperiores quos cum quo iure ut necessitatibus commodi, labore veritatis sed assumenda laborum consequuntur quasi at.</p>
                </div>

                {/* Our team */}
                <section className="flex lg:flex-row flex-col bg-black text-white px-10">
                    <div className="lg:w-5/12 p-10 " ref={teamImage}>
                        <img src="../images/contact-us.jpg" alt="" className="rounded-full " />
                        <div className="bg-gray-400 rounded-lg p-4 text-center space-y-5 relative -top-5">
                            <p className="text-3xl">lorem lorem</p>
                            <p className="">Lorem lorem lorem</p>
                        </div>

                    </div>
                    <div className="lg:w-7/12 justify-center text-center space-y-10 p-10 align-middle my-auto" ref={ourTeam}>
                        <p className="text-5xl">Our Team</p>
                        <p className="text-xl leading-10">orem ipsum dolor sit amet consectetur adipisicing elit. Quas sequi ullam, consectetur accusantium nobis tempore numquam omnis tenetur esse laborum, aspernatur expedita asperiores in excepturi quam inventore. Recusandae, minus possimus</p>
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

