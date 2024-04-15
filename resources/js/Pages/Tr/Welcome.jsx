import React, { useRef } from "react";
import WebSiteTRLayout from "@/Components/WebSiteTRLayout";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Head } from "@inertiajs/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Welcome = () => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);

    const heroSectioTitle = useRef(null);
    const scrollDown = useRef(null);
    const heroContainer = useRef(null);
    const aboutSection = useRef(null);
    const clientsSection = useRef(null);

    useGSAP(() => {

        gsap.fromTo(
            heroSectioTitle.current,
            {
                y: 100,
                opacity: 1,
            },
            {
                opacity: 1,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                duration: 1.2,
                ease: "back.inOut",
                y: 0,
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
            aboutSection.current,
            {
                opacity: 0,
                y: 200,
            },
            {
                opacity: 1,
                duration: 3,
                ease: "elastic.inOut",
                y: 0,
                scrollTrigger: {
                    trigger: aboutSection.current,
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
            <WebSiteTRLayout>
                <section
                    className="flex flex-col items-center justify-center w-full lg:min-h-[70vh] min-h-[85vh] bg-[url('../../images/_7f66a187-fc33-4d60-8e36-9a3a4854e77c.jpeg')] bg-cover bg-center bg-no-repeat"
                    ref={heroContainer}
                >
                    <div className="min-h-[73vh] flex flex-col items-center justify-center">
                        <h1
                            className="z-10 text-5xl font-extrabold tracking-tight text-center text-white lg:text-8xl drop-shadow-md shadow-black text-pretty"
                            ref={heroSectioTitle}
                        >
                            İs elektrik & mühendislik
                        </h1>
                    </div>
                    <div
                        className="text-white min-h-[10vh] font-extrabold text-xl text-center cursor-pointer hover:text-pink-500 transition-colors duration-300 cursor-pointer"
                        ref={scrollDown}
                        onClick={() => aboutSection.current.scrollIntoView({ behavior: "smooth" })}
                    >
                        Scroll Down
                    </div>
                </section>
                <section className="flex flex-col items-center justify-center bg-white py-8 px-16 ">
                     <div className="flex flex-row items-center justify-center " >
                        <div className="m-w-4/12 rounded-full bg-[url('../../images/hero.jpg')] bg-cover bg-center bg-no-repeat">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quae repellendus quaerat rem repellat debitis earum! Perferendis reprehenderit, vel sed corporis ratione officia iure. Quam, commodi! Magni quisquam id asperiores?
                        </div>
                        <div className="m-w-4/12 rounded-full bg-[url('../../images/hero.jpg')] bg-cover bg-center bg-no-repeat">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quae repellendus quaerat rem repellat debitis earum! Perferendis reprehenderit, vel sed corporis ratione officia iure. Quam, commodi! Magni quisquam id asperiores?
                        </div>
                        <div className="m-w-4/12 rounded-full bg-[url('../../images/hero.jpg')] bg-cover bg-center bg-no-repeat">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quae repellendus quaerat rem repellat debitis earum! Perferendis reprehenderit, vel sed corporis ratione officia iure. Quam, commodi! Magni quisquam id asperiores?
                        </div>
                        <div className="m-w-4/12 rounded-full bg-[url('../../images/hero.jpg')] bg-cover bg-center bg-no-repeat">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quae repellendus quaerat rem repellat debitis earum! Perferendis reprehenderit, vel sed corporis ratione officia iure. Quam, commodi! Magni quisquam id asperiores?
                        </div>
                        <div className="m-w-4/12 rounded-full bg-[url('../../images/hero.jpg')] bg-cover bg-center bg-no-repeat">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quae repellendus quaerat rem repellat debitis earum! Perferendis reprehenderit, vel sed corporis ratione officia iure. Quam, commodi! Magni quisquam id asperiores?
                        </div>
                        <div className="m-w-4/12 rounded-full bg-[url('../../images/hero.jpg')] bg-cover bg-center bg-no-repeat">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quae repellendus quaerat rem repellat debitis earum! Perferendis reprehenderit, vel sed corporis ratione officia iure. Quam, commodi! Magni quisquam id asperiores?
                        </div>

                     </div>
                </section>
                <section className="flex flex-col items-center justify-center p-8 text-center bg-white min-h-[30vh]" >
                    <p className="text-4xl text-transparent  bg-clip-text  bg-[url('../../images/_7f66a187-fc33-4d60-8e36-9a3a4854e77c.jpeg')] bg-fixed " ref={aboutSection}>
                    İs elektrik & mühendislik 2017 yılında İstanbul kemerburgazda kurulmuş elektrik proje ve taahhüt hizmetleri alanında uzun yıllar çalışmış konuttan ENDÜSTRİYEL tesis vs bir çok proje bitirmiş. Amacımız müşterilerimize her koşulda en iyi ve kaliteli hizmeti sunmaktır
                    </p>
                </section>
                <section className="flex flex-col items-center justify-center p-8 text-center bg-white min-h-[90vh] bg-[url('../../images/_7f66a187-fc33-4d60-8e36-9a3a4854e77c.jpeg')] bg-cover bg-center bg-no-repeat">
                    <h2 className="text-4xl text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500" ref={clientsSection}>
                        Slogan Here
                    </h2>
                    <p className="text-4xl text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                        now is ielek
                    </p>
                </section>
                <section className="flex flex-col items-center justify-center  text-center bg-white min-h-[90vh] " >
                    <div className="w-full flex flex-row items-center justify-center">
                        <div className="w-1/2 p-4">
                            <p className="text-4xl text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate deserunt aliquam expedita velit consequatur soluta, obcaecati dolorem praesentium doloribus omnis similique inventore aspernatur, ea dolorum ab. Ipsum quos temporibus et
                            </p>
                        </div>
                        <div className="w-1/2">
                            <img src="../../images/_7f66a187-fc33-4d60-8e36-9a3a4854e77c.jpeg" alt="" className="w-full h-full" />
                        </div>
                    </div>
                    <div className="w-full flex flex-row items-center justify-center bg-gray-900">
                        <div className="w-1/2">
                            <img src="../../images/hero.jpg" alt="" className="w-full h-full" />
                        </div>
                        <div className="w-1/2 p-4">
                            <p className="text-4xl text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 first-letter:text-7xl">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate deserunt aliquam expedita velit consequatur soluta, obcaecati dolorem praesentium doloribus omnis similique inventore aspernatur, ea dolorum ab. Ipsum quos temporibus et
                            </p>
                        </div>

                    </div>
                </section>
                <section className="flex flex-col items-center justify-center py-8 text-center bg-white min-h-[90vh] " >
                    <div className="w-[90%] h-[80vh] flex items-center justify-center bg-[url('../../images/_7f66a187-fc33-4d60-8e36-9a3a4854e77c.jpeg')] bg-cover bg-center bg-no-repeat">
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
                <section className="flex flex-col items-center justify-center py-8 text-center bg-white min-h-[90vh] " >
                    <div className="w-full flex flex-row items-center justify-center">
                        <div className="w-1/2 p-4">
                            <p className="text-4xl text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate deserunt aliquam expedita velit consequatur soluta, obcaecati dolorem praesentium doloribus omnis similique inventore aspernatur, ea dolorum ab. Ipsum quos temporibus et
                            </p>
                        </div>
                        <div className="w-1/2">
                            <img src="../../images/hero.jpg" alt="" className="w-full h-full" />
                        </div>
                    </div>
                    <div className="w-full flex flex-row items-center justify-center bg-gray-900">
                        <div className="w-1/2">
                            <img src="../../images/hero.jpg" alt="" className="w-full h-full" />
                        </div>
                        <div className="w-1/2 p-4">
                            <p className="text-4xl text-transparent  bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 first-letter:text-7xl">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate deserunt aliquam expedita velit consequatur soluta, obcaecati dolorem praesentium doloribus omnis similique inventore aspernatur, ea dolorum ab. Ipsum quos temporibus et
                            </p>
                        </div>

                    </div>
                </section>
                <section className="flex flex-col items-center justify-center py-8 text-center bg-white  ">
                    <div className="w-full  bg-white flex flex-row items-center justify-between px-2 py-4">
                        <h3 className="text-4xl text-black flex flex-row items-center justify-center "> Our Projects</h3>
                        <div className=" flex flex-row items-center justify-center gap-4 ">
                            <button className="bg-green-500 text-white px-4 py-2 rounded">prev</button>
                            <button className="bg-red-500 text-white px-4 py-2 rounded">next</button>
                        </div>
                    </div>
                    <div class="grid grid-cols-4 gap-4">
                        <div class="col-span-1">
                            <img src="image1.jpg" alt="Our Commitments" class="w-full h-auto rounded-lg" />
                                <h2 class="text-lg font-bold">Our Commitments</h2>
                                <button class="bg-green-500 text-white px-4 py-2 rounded">Read</button>
                        </div>

                        <div class="col-span-1">
                            <img src="image2.jpg" alt="Our Sustainability Report" class="w-full h-auto rounded-lg" />
                                <h2 class="text-lg font-bold">Our Sustainability Report</h2>
                                <button class="bg-green-500 text-white px-4 py-2 rounded">Read</button>
                        </div>

                        <div class="col-span-1">
                            <img src="image3.jpg" alt="Electricity 4.0: Powering the New Electric World" class="w-full h-auto rounded-lg" />
                                <h2 class="text-lg font-bold">Electricity 4.0: Powering the New Electric World</h2>
                                <button class="bg-green-500 text-white px-4 py-2 rounded">Read</button>
                        </div>

                        <div class="col-span-1">
                            <img src="image4.jpg" alt="Energy & Environment" class="w-full h-auto rounded-lg" />
                                <h2 class="text-lg font-bold">Energy & Environment</h2>
                                <button class="bg-green-500 text-white px-4 py-2 rounded">Read</button>
                        </div>
                    </div>
                </section>

            </WebSiteTRLayout>
        </>
    );
};

export default Welcome;