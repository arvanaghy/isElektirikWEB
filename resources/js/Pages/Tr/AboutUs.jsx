import React from "react";
import WebSiteTRLayout from "@/Components/WebSiteTRLayout";
import { Head } from "@inertiajs/react";
import FAQ from "@/Components/Faq";

const AboutUs = () => {
    return (
        <>
            <Head title="Hakkımızda">
                <meta name="description" content="Free Web tutorialasdasds" />
                <meta name="keywords" content="HTML, CSS, JavaScript" />
                <meta name="author" content="John Doesdfsf" />
            </Head>
            <WebSiteTRLayout>
            <div className="bg-[url('../images/contact-us.jpg')] py-[150px] bg-cover text-center flex flex-col space-y-10">
                   <h3 className="text-7xl ">Sirket Profili</h3> 
                   <p className="text-2xl leading-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt temporibus iste rerum veniam! Quibusdam asperiores quos cum quo iure ut necessitatibus commodi, labore veritatis sed assumenda laborum consequuntur quasi at.</p>
                </div>
                <div className="bg-black text-white flex flex-col space-y-10 py-10 px-10"> 
                    <h3 className="text-4xl ">Iselekrik'i kesfedin</h3> 
                    <p className="text-2xl leading-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt temporibus iste rerum veniam! Quibusdam asperiores quos cum quo iure ut necessitatibus commodi, labore veritatis sed assumenda laborum consequuntur quasi at.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sunt nam architecto nulla, dolorem atque itaque ullam excepturi quasi totam voluptatem, neque debitis beatae. Cum nam quo alias sint corrupti!</p>
                </div>
                <div className="flex flex-col space-y-10 py-10 px-10 text-black">
                    <h3 className="text-4xl ">Farkimiz ve Misyonumuz </h3> 
                    <p className="text-2xl leading-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt temporibus iste rerum veniam! Quibusdam asperiores quos cum quo iure ut necessitatibus commodi, labore veritatis sed assumenda laborum consequuntur quasi at.</p>
                </div>
                <div className="flex flex-col space-y-10 py-10 px-10 text-black">
                    <h3 className="text-4xl ">Sik Sorulan Sorular</h3> 
                    <p className="text-2xl leading-10">1Lorem ipsum dolor, etur adipisicing elit. Deserunt temporibus iste reur quasi at.</p>
                    <FAQ />
                </div>
            </WebSiteTRLayout>
        </>
    );
};

export default AboutUs;

