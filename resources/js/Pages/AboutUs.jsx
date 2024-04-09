import React from "react";
import WebSiteENLayout from "@/Components/WebSiteENLayout";
import { Head } from "@inertiajs/react";

const AboutUs = () => {
    return (
        <>
            <Head title="About Us">
                <meta name="description" content="Free Web tutorialasdasds" />
                <meta name="keywords" content="HTML, CSS, JavaScript" />
                <meta name="author" content="John Doesdfsf" />
            </Head>
            <WebSiteENLayout>
                <div>About Us</div>
            </WebSiteENLayout>
        </>
    );
};

export default AboutUs;
