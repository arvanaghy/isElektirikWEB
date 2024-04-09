import { Head } from "@inertiajs/react";
import React from "react";

const Details = ({ details, images, videos }) => {
    return (
        <>
            <Head title={details.name} />
            <div className="text-2xl text-white bg-black">{details.name}</div>
        </>
    );
};

export default Details;
