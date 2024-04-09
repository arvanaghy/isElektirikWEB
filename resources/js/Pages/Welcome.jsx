import WebSiteENLayout from "@/Components/WebSiteENLayout";
import { Link, Head } from "@inertiajs/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";
import { useRef, useState } from "react";

export default function Welcome({ url, language , message }) {
    gsap.registerPlugin(TextPlugin);
    let tl = gsap.timeline({ defaults: { ease: "elastic.inOut", duration: 2 } });

    const box = useRef(null);
    const box2 = useRef(null);
    const container = useRef(null);

    useGSAP(() => {
        gsap.set(box2.current,{y:-200 , opacity: 0});
        tl.to(box.current, {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            opacity: 1,
            y: 0,
            duration: 3.2,
        }).to(box2.current, {
            opacity: 1,
            y: -150,
            yoyo: true,
            repeat: -1,
            duration: 2.2,
        });
    });

    return (
        <>
            <Head title="Home">
                <meta name="description" content="Free Web tutorialasdasds" />
                <meta name="keywords" content="HTML, CSS, JavaScript" />
                <meta name="author" content="John Doesdfsf" />
            </Head>
            <WebSiteENLayout>
                <div className="" ref={container}>
                    <section className="h-screen flex fle-col flex-wrap p-12 text-2xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                        <div className="justify-center w-full my-auto font-extrabold text-center text-transparent translate-y-full border-separate border-black bg-clip-text bg-gradient-to-r bg-transparentitems-center text-7xl drop-shadow-sm shadow-black" ref={box}>
                            IS ELEKTRIK Ve Muhandis
                        </div>
                        <div className="items-center self-end justify-center w-full text-2xl font-bold text-center -translate-y-full " ref={box2}>
                                Scroll Down 
                        </div>
                    </section>

                    <p className="p-12 text-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veritatis corporis ratione minus, ipsam enim nulla
                        magnam? Deleniti commodi, accusamus non ut molestias
                        fuga dolor earum assumenda consequatur quae iusto.
                        Dolore.
                    </p>
                    <p className="p-12 text-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veritatis corporis ratione minus, ipsam enim nulla
                        magnam? Deleniti commodi, accusamus non ut molestias
                        fuga dolor earum assumenda consequatur quae iusto.
                        Dolore.
                    </p>
                    <p className="p-12 text-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veritatis corporis ratione minus, ipsam enim nulla
                        magnam? Deleniti commodi, accusamus non ut molestias
                        fuga dolor earum assumenda consequatur quae iusto.
                        Dolore.
                    </p>
                    <p className="p-12 text-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veritatis corporis ratione minus, ipsam enim nulla
                        magnam? Deleniti commodi, accusamus non ut molestias
                        fuga dolor earum assumenda consequatur quae iusto.
                        Dolore.
                    </p>
                    <p className="p-12 text-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veritatis corporis ratione minus, ipsam enim nulla
                        magnam? Deleniti commodi, accusamus non ut molestias
                        fuga dolor earum assumenda consequatur quae iusto.
                        Dolore.
                    </p>
                    <p className="p-12 text-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veritatis corporis ratione minus, ipsam enim nulla
                        magnam? Deleniti commodi, accusamus non ut molestias
                        fuga dolor earum assumenda consequatur quae iusto.
                        Dolore.
                    </p>
                    <p className="p-12 text-2xl" data-aos="zoom-in">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veritatis corporis ratione minus, ipsam enim nulla
                        magnam? Deleniti commodi, accusamus non ut molestias
                        fuga dolor earum assumenda consequatur quae iusto.
                        Dolore.
                    </p>
                </div>
            </WebSiteENLayout>
        </>
    );
}
