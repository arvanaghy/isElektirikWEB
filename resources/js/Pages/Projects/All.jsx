import { Head } from "@inertiajs/react";
import React from "react";

const All = ({projects}) => {
    return (
        <>
            <Head title="Welcome To menu 1">
                <meta name="description" content="Free Web tutorialasdasds" />
                <meta name="keywords" content="HTML, CSS, JavaScript" />
                <meta name="author" content="John Doesdfsf" />
            </Head>
            <div className="text-2xl text-white bg-black">
                {projects.map((item)=> 
                (
                    <p>
                        {item.name} "  "
                        {item.image}
                    </p>
                )

                    
                )}

            </div>
        </>
    );
};

export default All;
