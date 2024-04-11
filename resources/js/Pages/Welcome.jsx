import React, { useRef } from "react";
import WebSiteENLayout from "@/Components/WebSiteENLayout";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Head } from "@inertiajs/react";

const Welcome = () => {
    gsap.registerPlugin(useGSAP);

    const heroSectioTitle = useRef(null);
    const scrollDown = useRef(null);
    const heroContainer = useRef(null);

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
                duration: 5.2,
                ease: "elastic.inOut",
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
    });
    return (
        <>
            <Head title="welcome">
                <meta name="description" content="Free Web tutorialasdasds" />
                <meta name="keywords" content="HTML, CSS, JavaScript" />
                <meta name="author" content="John Doesdfsf" />
            </Head>
            <WebSiteENLayout>
                <section
                    className="flex flex-col items-center justify-center w-full lg:min-h-[70vh] min-h-[85vh] bg-[url('..//images/hero.jpg')] bg-cover bg-center bg-no-repeat"
                    ref={heroContainer}
                >
                    <div className="min-h-[73vh]  flex flex-col items-center justify-center">
                        <h1
                            className="z-10 text-5xl font-extrabold tracking-tight text-center text-white lg:text-8xl drop-shadow-md shadow-black text-pretty"
                            ref={heroSectioTitle}
                        >
                            Is Elektirik Ve Muhandislik
                        </h1>
                    </div>
                    <div
                        className="text-white min-h-[10vh] font-extrabold text-xl"
                        ref={scrollDown}
                    >
                        Scroll Down
                    </div>
                </section>
                <section className="flex flex-col items-center justify-center p-8 text-center bg-white min-h-96"> 
                    <p className="text-4xl text-transparent px-96 bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Voluptate deserunt aliquam expedita velit
                        consequatur soluta, obcaecati dolorem praesentium
                        doloribus omnis similique inventore aspernatur, ea
                        dolorum ab. Ipsum quos temporibus et 
                    </p>
                </section>
            </WebSiteENLayout>
        </>
    );
};

export default Welcome;
