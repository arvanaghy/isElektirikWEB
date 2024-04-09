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
                <div className="flex flex-row text-3xl text-white" >Hakkimizda
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, dolor qui? Quae ea pariatur vero quo modi. Et sed deleniti necessitatibus ipsam sequi inventore blanditiis possimus? Accusantium quidem dignissimos eaque.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta a quis optio eum culpa sit fugiat nostrum quasi enim aliquid est aperiam id debitis, laboriosam quidem quam laudantium aut nam!
                </div>
            </WebSiteTRLayout>
        </>
    );
};

export default AboutUs;
