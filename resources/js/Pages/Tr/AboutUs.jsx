import React from "react";
import WebSiteTRLayout from "@/Components/WebSiteTRLayout";
import { Head } from "@inertiajs/react";

const AboutUs = () => {
    return (
        <>
            <Head title="Hakkımızda">
                <meta name="description" content="Free Web tutorialasdasds" />
                <meta name="keywords" content="HTML, CSS, JavaScript" />
                <meta name="author" content="John Doesdfsf" />
            </Head>
            <WebSiteTRLayout>
                <div className="flex flex-row text-3xl text-white" >Hakkimizda:

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, facere nesciunt. Minima, corrupti laboriosam eligendi voluptas non illo aspernatur fugiat nam ad sint, ullam autem amet quisquam labore soluta magni.
                </p>
                
                </div>
            </WebSiteTRLayout>
        </>
    );
};

export default AboutUs;
