import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import WebSiteTRLayout from "@/Components/WebSiteTRLayout";
import { Head, Link } from "@inertiajs/react";

const All = ({
    projects,
    lastPage,
    currentPage,
    address,
    phone,
    email,
    insta,
    telegram,
    linkdin,
    about_us_text_tr,
}) => {

    gsap.registerPlugin(useGSAP);
    const ourProjects = useRef(null);

    useGSAP(() => {
        gsap.from(
            ourProjects.current,
            {
                duration: 2.5,
                ease: "power4.out",
                y: -500,
            }
        );
    });


    const range = [];

    for (let i = 1; i < lastPage; i++) {
        range.push(i);
    }

    return (
        <>
            <Head title="Projelerimiz">
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="author" content="" />
            </Head>
            <WebSiteTRLayout address={address?.general_value} phone={phone?.general_value} email={email?.general_value} telegram={telegram?.general_value} linkdin={linkdin?.general_value} insta={insta?.general_value} about_tr={about_us_text_tr?.general_value}>
                <div className="flex flex-col bg-[url('/storage/contact-us.jpg')] py-16 text-center bg-auto bg-no-repeat">
                    <h5 ref={ourProjects} className="lg:text-6xl text-4xl space-x-5 mt-16 lg:mt-0">
                        <span className="inline-block lg:first-letter:text-7xl first-letter:text-5xl first-letter:text-green-500">Projelerimiz</span>
                    </h5>
                </div>
                <div className=" flex flex-col items-center justify-center px-10 py-20 ">
                    {projects.length < 1 && (
                        <div className="flex flex-col items-center justify-center bg-white py-16 px-16" >
                            <h3 className="first-letter:text-green-500 lg:first-letter:text-5xl first-letter:text-4xl lg:text-4xl text-3xl lg:pt-12 pb-5 ">Hiçbir Proje Bulunamadı</h3>
                            <hr width="30%" className="border-2 border-green-500 " />
                        </div>
                    )}
                    <div className="flex flex-col lg:flex-row lg:flex-wrap items-center justify-center w-full px-24 space-y-6">

                        {projects.length > 0 && projects.map(project =>
                            <Link href={`/tr/project-details/${project.slug}`} key={project.id} className="group w-full flex flex-row items-center justify-start cursor-pointer hover:bg-gray-100 rounded-lg hover:shadow hover:shadow-gray-800/60 hover:scale-105 transition-all duration-300 ease-in-out ">
                                <img src={`/storage/${project.image}`} alt={project.name} className="w-52 h-52 rounded-lg shadow shadow-black hover:filter hover:grayscale" />
                                <div className="flex flex-col px-8 py-3 space-y-2">
                                    <h2 className="text-lg font-bold  drop-shadow shadow-black text-black flex flex-row ">
                                        <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2"xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path fill="#B4CCB9" d="M2,15v46c0,1.104,0.896,2,2,2h12V13H4C2.896,13,2,13.896,2,15z"></path> <path fill="#B4CCB9" d="M44,3H20c-1.104,0-2,0.896-2,2v58l0.001,0.002H27V54c0-0.553,0.447-1,1-1h8c0.553,0,1,0.447,1,1v9.002 h8.999L46,63V5C46,3.896,45.104,3,44,3z"></path> <path fill="#B4CCB9" d="M60,23H48v40h12c1.104,0,2-0.896,2-2V25C62,23.896,61.104,23,60,23z"></path> </g> <path fill="#394240" d="M60,21H48V5c0-2.211-1.789-4-4-4H20c-2.211,0-4,1.789-4,4v6H4c-2.211,0-4,1.789-4,4v46c0,2.211,1.789,4,4,4 h56c2.211,0,4-1.789,4-4V25C64,22.789,62.211,21,60,21z M16,63H4c-1.104,0-2-0.896-2-2V15c0-1.104,0.896-2,2-2h12V63z M35,63.002 h-6V55h6V63.002z M46,63l-0.001,0.002H37V54c0-0.553-0.447-1-1-1h-8c-0.553,0-1,0.447-1,1v9.002h-8.999L18,63V5 c0-1.104,0.896-2,2-2h24c1.104,0,2,0.896,2,2V63z M62,61c0,1.104-0.896,2-2,2H48V23h12c1.104,0,2,0.896,2,2V61z"></path> <path fill="#394240" d="M7,25h4c0.553,0,1-0.447,1-1v-4c0-0.553-0.447-1-1-1H7c-0.553,0-1,0.447-1,1v4C6,24.553,6.447,25,7,25z M8,21h2v2H8V21z"></path> <path fill="#394240" d="M7,35h4c0.553,0,1-0.447,1-1v-4c0-0.553-0.447-1-1-1H7c-0.553,0-1,0.447-1,1v4C6,34.553,6.447,35,7,35z M8,31h2v2H8V31z"></path> <path fill="#394240" d="M7,45h4c0.553,0,1-0.447,1-1v-4c0-0.553-0.447-1-1-1H7c-0.553,0-1,0.447-1,1v4C6,44.553,6.447,45,7,45z M8,41h2v2H8V41z"></path> <path fill="#394240" d="M29,19h-4c-0.553,0-1,0.447-1,1v4c0,0.553,0.447,1,1,1h4c0.553,0,1-0.447,1-1v-4C30,19.447,29.553,19,29,19 z M28,23h-2v-2h2V23z"></path> <path fill="#394240" d="M29,29h-4c-0.553,0-1,0.447-1,1v4c0,0.553,0.447,1,1,1h4c0.553,0,1-0.447,1-1v-4C30,29.447,29.553,29,29,29 z M28,33h-2v-2h2V33z"></path> <path fill="#394240" d="M29,39h-4c-0.553,0-1,0.447-1,1v4c0,0.553,0.447,1,1,1h4c0.553,0,1-0.447,1-1v-4C30,39.447,29.553,39,29,39 z M28,43h-2v-2h2V43z"></path> <path fill="#394240" d="M39,19h-4c-0.553,0-1,0.447-1,1v4c0,0.553,0.447,1,1,1h4c0.553,0,1-0.447,1-1v-4C40,19.447,39.553,19,39,19 z M38,23h-2v-2h2V23z"></path> <path fill="#394240" d="M29,9h-4c-0.553,0-1,0.447-1,1v4c0,0.553,0.447,1,1,1h4c0.553,0,1-0.447,1-1v-4C30,9.447,29.553,9,29,9z M28,13h-2v-2h2V13z"></path> <path fill="#394240" d="M39,9h-4c-0.553,0-1,0.447-1,1v4c0,0.553,0.447,1,1,1h4c0.553,0,1-0.447,1-1v-4C40,9.447,39.553,9,39,9z M38,13h-2v-2h2V13z"></path> <path fill="#394240" d="M39,29h-4c-0.553,0-1,0.447-1,1v4c0,0.553,0.447,1,1,1h4c0.553,0,1-0.447,1-1v-4C40,29.447,39.553,29,39,29 z M38,33h-2v-2h2V33z"></path> <path fill="#394240" d="M39,39h-4c-0.553,0-1,0.447-1,1v4c0,0.553,0.447,1,1,1h4c0.553,0,1-0.447,1-1v-4C40,39.447,39.553,39,39,39 z M38,43h-2v-2h2V43z"></path> <path fill="#394240" d="M57,29h-4c-0.553,0-1,0.447-1,1v4c0,0.553,0.447,1,1,1h4c0.553,0,1-0.447,1-1v-4C58,29.447,57.553,29,57,29 z M56,33h-2v-2h2V33z"></path> <path fill="#394240" d="M57,39h-4c-0.553,0-1,0.447-1,1v4c0,0.553,0.447,1,1,1h4c0.553,0,1-0.447,1-1v-4C58,39.447,57.553,39,57,39 z M56,43h-2v-2h2V43z"></path> <path fill="#394240" d="M57,49h-4c-0.553,0-1,0.447-1,1v4c0,0.553,0.447,1,1,1h4c0.553,0,1-0.447,1-1v-4C58,49.447,57.553,49,57,49 z M56,53h-2v-2h2V53z"></path> <path fill="#394240" d="M7,55h4c0.553,0,1-0.447,1-1v-4c0-0.553-0.447-1-1-1H7c-0.553,0-1,0.447-1,1v4C6,54.553,6.447,55,7,55z M8,51h2v2H8V51z"></path> <g opacity="0.15"> <path d="M2,15v46c0,1.104,0.896,2,2,2h12V13H4C2.896,13,2,13.896,2,15z"></path> <path d="M60,23H48v40h12c1.104,0,2-0.896,2-2V25C62,23.896,61.104,23,60,23z"></path> </g> <rect x="29" y="55" fill="#F76D57" width="6" height="8.002"></rect> <g> <rect x="8" y="21" fill="#F9EBB2" width="2.001" height="2.002"></rect> <rect x="8" y="31" fill="#F9EBB2" width="2.001" height="2.002"></rect> <rect x="8" y="41" fill="#F9EBB2" width="2.001" height="2.002"></rect> <rect x="8" y="51" fill="#506C7F" width="2.001" height="2.002"></rect> <rect x="26" y="11" fill="#506C7F" width="2.001" height="2.002"></rect> <rect x="26" y="21" fill="#F9EBB2" width="2.001" height="2.002"></rect> <rect x="26" y="31" fill="#F9EBB2" width="2.001" height="2.002"></rect> <rect x="26" y="41" fill="#F9EBB2" width="2.001" height="2.002"></rect> <rect x="36" y="11" fill="#F9EBB2" width="2.001" height="2.002"></rect> <rect x="36" y="21" fill="#F9EBB2" width="2.001" height="2.002"></rect> <rect x="36" y="31" fill="#506C7F" width="2.001" height="2.002"></rect> <rect x="36" y="41" fill="#F9EBB2" width="2.001" height="2.002"></rect> <rect x="54" y="31" fill="#F9EBB2" width="2.001" height="2.002"></rect> <rect x="54" y="41" fill="#506C7F" width="2.001" height="2.002"></rect> <rect x="54" y="51" fill="#F9EBB2" width="2.001" height="2.002"></rect> </g> </g> </g></svg>
                                        
                                        {project.name}</h2>
                                    <h3 className="text-lg font-bold  drop-shadow shadow-black text-black flex flex-row ">
                                        <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className="w-6 h-6 mr-2" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path fill="#45AAB8" d="M46.773,14.112c0.515,0.052,0.955,0.162,1.309,0.252c0.166,0.042,0.384,0.097,0.505,0.113 c0.448-0.344,0.963-0.978,0.948-1.507c-0.477-0.184-1.27-0.527-1.872-1.448c-0.596-0.938-0.7-1.829-0.776-2.479 c-0.044-0.372-0.078-0.666-0.189-0.959c-0.163-0.426-0.175-0.896-0.034-1.329c0.088-0.272,0.194-0.506,0.299-0.734L43,7.271v5.803 c0.274,0.094,0.548,0.188,0.794,0.275C44.813,13.714,45.619,14.001,46.773,14.112z"></path> <path fill="#45AAB8" d="M2,11v6.156c0.598-0.004,1.188-0.036,1.922-0.076l0.807-0.044c0.425-0.023,0.847-0.168,1.335-0.335 c0.661-0.228,1.412-0.484,2.314-0.484c0.725,0,1.437,0.173,2.098,0.504c1.245,0.607,1.876,1.559,2.383,2.322 c0.274,0.413,0.511,0.77,0.811,1.021c0.709,0.595,1.312,0.808,2.148,1.102c0.826,0.292,1.763,0.622,2.845,1.348 c0.894,0.601,1.636,1.149,2.338,1.737V2.606L3.309,9.124C2.525,9.412,2,10.166,2,11z"></path> <path fill="#45AAB8" d="M20.09,43.093c-0.058-0.004-0.114-0.009-0.17-0.012c-0.002,0.063-0.004,0.127-0.006,0.181 c-0.022,0.691-0.055,1.735-0.769,2.666c-0.82,1.09-1.949,1.666-3.265,1.666c-0.718,0-1.395-0.167-1.991-0.314l-0.363-0.088 c-1.226-0.279-1.983-1.005-2.537-1.534c-0.263-0.252-0.512-0.49-0.659-0.526c-0.365-0.088-0.682-0.164-0.861-0.164 c-0.043,0-0.122,0-0.3,0.072c-0.45,0.184-0.708,0.805-1.19,2.18c-0.151,0.434-0.31,0.884-0.489,1.333 c-0.162,0.41-0.198,0.939-0.235,1.5c-0.075,1.11-0.177,2.632-1.433,3.827C4.926,54.734,3.91,55.15,2.719,55.15 c-0.247,0-0.483-0.026-0.719-0.055V60c0,0.635,0.306,1.238,0.818,1.613C3.163,61.866,3.572,62,4,62 c0.204,0,0.407-0.031,0.603-0.093L21,56.729V43.193c-0.111-0.041-0.222-0.063-0.34-0.068 C20.462,43.119,20.272,43.106,20.09,43.093z"></path> <path fill="#45AAB8" d="M23.632,2.103C23.428,2.034,23.216,2,23,2v24.147c0.383,0.402,0.779,0.836,1.213,1.329 c0.519,0.591,0.866,1.182,1.146,1.657c0.334,0.567,0.521,0.873,0.81,1.06c0.04,0.025,0.059,0.031,0.078,0.032 c0.153,0,0.454-0.089,0.745-0.176c0.528-0.157,1.188-0.354,1.961-0.354c0.571,0,1.128,0.109,1.669,0.33l0.347,0.143 c1.569,0.643,3.521,1.443,4.364,4.208c0.527,1.7,0.525,3.133-0.001,4.777c-0.387,1.233-1.182,1.86-1.657,2.234 c-0.111,0.089-0.265,0.209-0.295,0.249l-0.017,0.052c-0.024,0.084,0.025,0.346,0.07,0.576c0.123,0.635,0.309,1.595-0.14,2.712 c-0.764,1.856-2.263,2.798-4.456,2.798c-0.229,0-0.461-0.009-0.689-0.023c-1.413-0.083-2.312-0.787-2.968-1.302 c-0.241-0.189-0.47-0.368-0.71-0.51c-0.576-0.34-1.048-0.718-1.47-1.091v11.247l0.603,0.19L41,61.781V23.214 c-0.183,0.004-0.362,0.007-0.552,0.014c-0.373,0.013-0.761,0.026-1.177,0.026c-0.229,0-0.467-0.004-0.716-0.015 c-0.09-0.003-0.179-0.005-0.265-0.005c-0.462,0-0.888,0.049-1.339,0.1c-0.488,0.056-0.993,0.113-1.562,0.113 c-0.7,0-1.371-0.091-2.052-0.279c-0.225-0.062-0.464-0.107-0.717-0.154c-1.016-0.191-2.55-0.479-3.646-2.281 c-1.29-2.169-1.303-4.838-0.027-7.151c1.267-2.267,3.243-2.387,4.551-2.466c0.312-0.019,0.605-0.037,0.898-0.079 c0.375-0.052,0.75-0.077,1.114-0.077c1.619,0,2.844,0.492,4.026,0.968c0.482,0.193,0.958,0.37,1.462,0.53V7.892l-0.6-0.199 L23.632,2.103z"></path> <path fill="#45AAB8" d="M60.979,30.936l-0.104-0.021c-1.498-0.3-2.675-0.772-3.893-2.189c-0.879-1.005-1.068-2.183-1.207-3.042 c-0.048-0.301-0.12-0.751-0.198-0.893c-0.146,0.012-0.427,0.09-0.676,0.158c-0.509,0.141-1.142,0.316-1.875,0.343 c-0.615,0.027-1.179,0.179-1.775,0.34c-0.728,0.196-1.553,0.418-2.508,0.418c-0.685,0-1.344-0.111-2.021-0.342 c-1.055-0.361-1.744-0.943-2.298-1.41c-0.379-0.32-0.653-0.551-1.007-0.698c-0.146-0.062-0.282-0.106-0.418-0.15v38.325 l17.632-5.877C61.45,55.625,62,54.862,62,54V31.096C61.651,31.054,61.311,30.998,60.979,30.936z"></path> </g> <g> <path fill="#394240" d="M62.364,0.773c-0.694-0.509-1.526-0.772-2.366-0.772c-0.403,0-0.809,0.061-1.202,0.185L41.033,5.795 l-16.769-5.59C23.854,0.068,23.427,0,22.999,0c-0.468,0-0.937,0.082-1.382,0.247l-19,7C1.045,7.826,0,9.324,0,11v49 c0,1.274,0.607,2.473,1.636,3.227C2.33,63.735,3.16,64,4,64c0.404,0,0.811-0.062,1.204-0.186L23,58.194l17.796,5.62 C41.188,63.938,41.593,64,41.999,64c0.428,0,0.855-0.068,1.266-0.205l18-6C62.898,57.25,64,55.722,64,54V4 C64,2.726,63.393,1.527,62.364,0.773z M21,56.729L4.603,61.907C4.407,61.969,4.204,62,4,62c-0.428,0-0.837-0.134-1.182-0.387 C2.306,61.238,2,60.635,2,60v-4.904c0.235,0.028,0.472,0.055,0.719,0.055c1.191,0,2.207-0.416,3.103-1.271 c1.256-1.195,1.357-2.717,1.433-3.827c0.037-0.561,0.073-1.09,0.235-1.5c0.18-0.449,0.338-0.899,0.489-1.333 c0.482-1.375,0.74-1.996,1.19-2.18c0.178-0.072,0.257-0.072,0.3-0.072c0.18,0,0.496,0.076,0.861,0.164 c0.147,0.036,0.396,0.274,0.659,0.526c0.554,0.529,1.312,1.255,2.537,1.534l0.363,0.088c0.597,0.147,1.273,0.314,1.991,0.314 c1.315,0,2.444-0.576,3.265-1.666c0.714-0.931,0.746-1.975,0.769-2.666c0.002-0.054,0.004-0.117,0.006-0.181 c0.056,0.003,0.112,0.008,0.17,0.012c0.183,0.014,0.372,0.026,0.57,0.032c0.118,0.005,0.229,0.027,0.34,0.068V56.729z M21,41.169 c-0.095-0.013-0.18-0.039-0.28-0.043c-0.372-0.011-0.71-0.055-1.025-0.055c-0.485,0-0.921,0.102-1.357,0.576 c-0.753,0.811-0.105,2.186-0.79,3.078c-0.498,0.662-1.057,0.868-1.666,0.868c-0.592,0-1.231-0.193-1.91-0.353 c-1.364-0.311-1.815-1.725-3.173-2.055c-0.509-0.122-0.916-0.22-1.329-0.22c-0.329,0-0.661,0.062-1.054,0.22 c-1.688,0.687-1.969,2.589-2.786,4.63c-0.668,1.69-0.005,3.489-1.188,4.616c-0.575,0.549-1.126,0.718-1.722,0.718 c-0.231,0-0.471-0.026-0.719-0.064v-33.93c0.875-0.007,1.722-0.066,2.839-0.123c1.395-0.077,2.395-0.816,3.539-0.816 c0.384,0,0.784,0.083,1.221,0.302c1.337,0.652,1.586,2.073,2.785,3.077c1.81,1.518,3.247,1.292,5.163,2.577 c1.428,0.959,2.418,1.758,3.453,2.786V41.169z M21,24.25c-0.702-0.588-1.444-1.137-2.338-1.737 c-1.082-0.726-2.019-1.056-2.845-1.348c-0.836-0.294-1.439-0.507-2.148-1.102c-0.3-0.251-0.536-0.607-0.811-1.021 c-0.507-0.764-1.138-1.715-2.383-2.322c-0.661-0.331-1.373-0.504-2.098-0.504c-0.902,0-1.653,0.257-2.314,0.484 c-0.488,0.167-0.91,0.312-1.335,0.335L3.922,17.08C3.188,17.12,2.598,17.152,2,17.156V11c0-0.834,0.525-1.588,1.309-1.876 L21,2.606V24.25z M23,29.161c0.747,1.009,1.04,2.037,2.081,2.711c0.404,0.262,0.789,0.354,1.165,0.354 c0.901,0,1.754-0.529,2.706-0.529c0.289,0,0.588,0.049,0.899,0.176c1.597,0.666,2.955,1.078,3.57,3.098 c0.403,1.3,0.414,2.296,0,3.587c-0.408,1.305-1.603,1.236-1.979,2.569c-0.335,1.14,0.43,2.019,0,3.091 c-0.53,1.29-1.509,1.559-2.606,1.559c-0.188,0-0.379-0.008-0.572-0.02c-1.178-0.069-1.708-0.907-2.78-1.539 c-1.021-0.602-1.726-1.426-2.484-2.075V29.161z M41,21.214c-0.543,0.011-1.101,0.04-1.729,0.04c-0.204,0-0.414-0.004-0.634-0.013 c-0.118-0.005-0.233-0.007-0.347-0.007c-1.107,0-1.954,0.213-2.901,0.213c-0.467,0-0.957-0.052-1.517-0.206 c-1.29-0.358-2.361-0.188-3.179-1.532c-0.949-1.595-0.901-3.518,0-5.152c0.944-1.69,2.367-1.306,3.975-1.539 c0.296-0.04,0.575-0.059,0.843-0.059c1.997,0,3.314,1.027,5.488,1.592V21.214z M41,12.457c-0.504-0.16-0.979-0.337-1.462-0.53 c-1.183-0.476-2.407-0.968-4.026-0.968c-0.364,0-0.739,0.025-1.114,0.077c-0.293,0.042-0.587,0.061-0.898,0.079 c-1.308,0.079-3.284,0.199-4.551,2.466c-1.275,2.313-1.263,4.982,0.027,7.151c1.096,1.803,2.63,2.09,3.646,2.281 c0.253,0.047,0.492,0.092,0.717,0.154c0.681,0.188,1.352,0.279,2.052,0.279c0.569,0,1.074-0.058,1.562-0.113 c0.451-0.051,0.877-0.1,1.339-0.1c0.086,0,0.175,0.002,0.265,0.005c0.249,0.011,0.486,0.015,0.716,0.015 c0.416,0,0.804-0.014,1.177-0.026c0.189-0.007,0.369-0.01,0.552-0.014v38.567l-17.397-5.494L23,56.097V44.85 c0.422,0.373,0.894,0.751,1.47,1.091c0.24,0.142,0.469,0.32,0.71,0.51c0.656,0.515,1.555,1.219,2.968,1.302 c0.229,0.015,0.461,0.023,0.689,0.023c2.193,0,3.692-0.941,4.456-2.798c0.448-1.117,0.263-2.077,0.14-2.712 c-0.045-0.23-0.095-0.492-0.07-0.576l0.017-0.052c0.03-0.04,0.184-0.16,0.295-0.249c0.476-0.374,1.271-1.001,1.657-2.234 c0.526-1.645,0.528-3.077,0.001-4.777c-0.843-2.765-2.795-3.565-4.364-4.208l-0.347-0.143c-0.541-0.221-1.098-0.33-1.669-0.33 c-0.773,0-1.433,0.196-1.961,0.354c-0.291,0.087-0.592,0.176-0.745,0.176c-0.02-0.001-0.038-0.007-0.078-0.032 c-0.288-0.187-0.476-0.492-0.81-1.06c-0.279-0.476-0.627-1.066-1.146-1.657c-0.434-0.493-0.83-0.927-1.213-1.329V2 c0.216,0,0.428,0.034,0.632,0.103L40.4,7.692L41,7.892V12.457z M43,7.271l3.962-1.251c-0.104,0.229-0.211,0.462-0.299,0.734 c-0.141,0.434-0.129,0.903,0.034,1.329c0.111,0.293,0.146,0.587,0.189,0.959c0.076,0.65,0.181,1.542,0.776,2.479 c0.603,0.921,1.396,1.265,1.872,1.448c0.015,0.529-0.5,1.163-0.948,1.507c-0.121-0.017-0.339-0.071-0.505-0.113 c-0.354-0.09-0.794-0.2-1.309-0.252c-1.154-0.111-1.96-0.398-2.979-0.763c-0.246-0.088-0.52-0.182-0.794-0.275V7.271z M62,54 c0,0.862-0.55,1.625-1.368,1.897L43,61.774V23.449c0.136,0.044,0.271,0.089,0.418,0.15c0.354,0.147,0.628,0.378,1.007,0.698 c0.554,0.467,1.243,1.049,2.298,1.41c0.677,0.23,1.336,0.342,2.021,0.342c0.955,0,1.78-0.222,2.508-0.418 c0.597-0.161,1.16-0.312,1.775-0.34c0.733-0.026,1.366-0.202,1.875-0.343c0.249-0.068,0.529-0.146,0.676-0.158 c0.078,0.142,0.15,0.592,0.198,0.893c0.139,0.859,0.328,2.037,1.207,3.042c1.218,1.417,2.395,1.89,3.893,2.189l0.104,0.021 c0.331,0.062,0.672,0.118,1.021,0.16V54z M62,29.086c-0.234-0.036-0.477-0.083-0.732-0.132c-1.167-0.233-1.899-0.521-2.78-1.546 c-1.04-1.188-0.435-3.11-1.581-4.114c-0.442-0.378-0.866-0.504-1.294-0.504c-0.824-0.001-1.662,0.468-2.675,0.504 c-1.666,0.074-2.812,0.756-4.194,0.756c-0.427,0-0.877-0.064-1.372-0.233c-1.342-0.46-1.856-1.511-3.178-2.061 c-0.426-0.18-0.815-0.291-1.193-0.374V15.19c1.126,0.401,2.13,0.773,3.575,0.912c0.791,0.079,1.43,0.38,2.07,0.38 c0.36,0,0.721-0.096,1.108-0.38c1.199-0.894,2.229-2.522,1.592-4.108c-0.414-1.045-1.411-0.652-1.995-1.545 c-0.626-0.984-0.329-1.883-0.785-3.078c0.284-0.876,0.768-1.492,1.036-2.185l9.794-3.093c0.195-0.062,0.398-0.093,0.603-0.093 c0.425,0,0.845,0.137,1.184,0.386C61.694,2.762,62,3.365,62,4V29.086z"></path> <path fill="#394240" d="M55.306,39.322c-0.678-0.208-1.318-0.404-2.01-0.404c-0.652,0-1.241,0.177-1.804,0.543 c-0.632,0.417-0.814,0.932-0.856,1.289c-0.111,0.965,0.604,1.723,1.361,2.525c0.506,0.536,1.27,1.346,1.122,1.731 c-0.096,0.256-0.386,0.396-0.979,0.633c-0.737,0.296-1.853,0.741-2.094,2.071c-0.136,0.738,0.032,1.416,0.485,1.96 c0.637,0.763,1.791,1.183,3.253,1.183c1.49,0,2.955-0.43,3.928-1.156c1.653-1.268,2.287-3.12,1.884-5.503 C59.194,41.763,57.732,40.085,55.306,39.322z M56.505,48.103c-0.61,0.456-1.679,0.751-2.721,0.751 c-0.919,0-1.523-0.232-1.717-0.464c-0.034-0.041-0.093-0.111-0.055-0.32c0.037-0.199,0.191-0.301,0.87-0.572 c0.715-0.286,1.694-0.678,2.107-1.782c0.593-1.553-0.639-2.858-1.539-3.812c-0.238-0.252-0.57-0.604-0.735-0.843 c0.525-0.277,1.124-0.096,2.054,0.19c1.642,0.517,2.575,1.586,2.854,3.274C57.905,46.19,57.557,47.296,56.505,48.103z"></path> </g> <g> <path fill="#F9EBB2" d="M61.182,2.387c-0.339-0.249-0.759-0.386-1.184-0.386c-0.204,0-0.407,0.031-0.603,0.093l-9.794,3.093 c-0.269,0.692-0.752,1.309-1.036,2.185c0.456,1.195,0.159,2.094,0.785,3.078c0.584,0.893,1.581,0.5,1.995,1.545 c0.637,1.586-0.393,3.215-1.592,4.108c-0.388,0.284-0.748,0.38-1.108,0.38c-0.641,0-1.279-0.301-2.07-0.38 C45.13,15.964,44.126,15.592,43,15.19v6.191c0.378,0.083,0.768,0.194,1.193,0.374c1.321,0.55,1.836,1.601,3.178,2.061 c0.495,0.169,0.945,0.233,1.372,0.233c1.383,0,2.528-0.682,4.194-0.756c1.013-0.036,1.851-0.505,2.675-0.504 c0.428,0,0.852,0.126,1.294,0.504c1.146,1.004,0.541,2.926,1.581,4.114c0.881,1.024,1.613,1.312,2.78,1.546 c0.256,0.049,0.498,0.096,0.732,0.132V4C62,3.365,61.694,2.762,61.182,2.387z"></path> <path fill="#F9EBB2" d="M34.669,13.018c-1.607,0.233-3.03-0.151-3.975,1.539c-0.901,1.635-0.949,3.558,0,5.152 c0.817,1.345,1.889,1.174,3.179,1.532c0.56,0.154,1.05,0.206,1.517,0.206c0.947,0,1.794-0.213,2.901-0.213 c0.113,0,0.229,0.002,0.347,0.007c0.22,0.009,0.43,0.013,0.634,0.013c0.628,0,1.186-0.029,1.729-0.04v-6.663 c-2.174-0.564-3.491-1.592-5.488-1.592C35.244,12.959,34.965,12.978,34.669,13.018z"></path> <path fill="#F9EBB2" d="M29.852,31.872c-0.312-0.127-0.61-0.176-0.899-0.176c-0.952,0-1.805,0.529-2.706,0.529 c-0.376,0-0.761-0.092-1.165-0.354C24.04,31.198,23.747,30.17,23,29.161v12.98c0.759,0.649,1.463,1.474,2.484,2.075 c1.072,0.632,1.603,1.47,2.78,1.539c0.193,0.012,0.385,0.02,0.572,0.02c1.098,0,2.076-0.269,2.606-1.559 c0.43-1.072-0.335-1.951,0-3.091c0.376-1.333,1.57-1.265,1.979-2.569c0.414-1.291,0.403-2.287,0-3.587 C32.807,32.95,31.448,32.538,29.852,31.872z"></path> <path fill="#F9EBB2" d="M12.384,21.596c-1.199-1.004-1.448-2.425-2.785-3.077c-0.437-0.219-0.837-0.302-1.221-0.302 c-1.145,0-2.145,0.739-3.539,0.816C3.722,19.09,2.875,19.149,2,19.156v33.93c0.248,0.038,0.487,0.064,0.719,0.064 c0.596,0,1.146-0.169,1.722-0.718c1.184-1.127,0.521-2.926,1.188-4.616c0.817-2.041,1.099-3.943,2.786-4.63 c0.393-0.158,0.725-0.22,1.054-0.22c0.413,0,0.82,0.098,1.329,0.22c1.357,0.33,1.809,1.744,3.173,2.055 c0.679,0.159,1.318,0.353,1.91,0.353c0.609,0,1.168-0.206,1.666-0.868c0.685-0.893,0.037-2.268,0.79-3.078 c0.437-0.475,0.872-0.576,1.357-0.576c0.315,0,0.653,0.044,1.025,0.055c0.101,0.004,0.186,0.03,0.28,0.043v-14.21 c-1.035-1.028-2.025-1.827-3.453-2.786C15.631,22.888,14.193,23.113,12.384,21.596z"></path> <path fill="#F9EBB2" d="M54.77,41.25c-0.93-0.286-1.528-0.468-2.054-0.19c0.165,0.238,0.497,0.591,0.735,0.843 c0.9,0.954,2.132,2.26,1.539,3.812c-0.413,1.104-1.393,1.496-2.107,1.782c-0.679,0.271-0.833,0.373-0.87,0.572 c-0.038,0.209,0.021,0.279,0.055,0.32c0.193,0.231,0.798,0.464,1.717,0.464c1.042,0,2.11-0.295,2.721-0.751 c1.052-0.807,1.4-1.912,1.118-3.578C57.345,42.836,56.411,41.767,54.77,41.25z"></path> </g> <polygon opacity="0.2" fill="#231F20" points="41,61.781 23,56 23,2 41,8 "></polygon> </g> </g></svg>
                                        
                                        {project.province}</h3>
                                </div>
                            </Link>
                        )}
                    </div>
                    {lastPage > 1 && (
                        <div className="flex flex-col items-center w-full py-3">
                            <div className="flex flex-row w-full h-32 items-center justify-center space-x-3 ">
                                <Link href="/tr/projects?page=1" className="hover:text-green-800 transition-all duration-300  text-green-500">
                                    FitrstPage
                                </Link>
                                {range.map((page) => (
                                    <Link
                                        href={`/tr/projects?page=${page}`}
                                        className={`mx-2 border-2 border-green-400 p-2 rounded-md hover:text-green-800 transition-all duration-300 text-green-500 ${page === currentPage ? "bg-green-500 text-white" : ""} `}>{page}</Link>
                                ))}
                                <Link href={`/tr/projects?page=${lastPage}`} className="hover:text-green-800 transition-all duration-300 text-green-500">
                                    lastPage
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </WebSiteTRLayout>
        </>
    );
};

export default All;