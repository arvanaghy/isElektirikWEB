import React, { useRef } from "react";
import WebSiteTRLayout from "@/Components/WebSiteTRLayout";
import Map from "@/Components/Map";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Inertia } from '@inertiajs/inertia'



const ContactUs = ({
    address,
    phone,
    email,
    insta,
    telegram,
    linkdin,
    about_us_text_tr,
}) => {
    gsap.registerPlugin(useGSAP);
    const contactUs = useRef(null);

    useGSAP(() => {
        gsap.from(
            contactUs.current,
            {
                duration: 2.5,
                ease: "power4.out",
                y: -500,
            }
        );
    });


    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', fullName.value);
        formData.append('call_info', call_info.value);
        formData.append('message', message.value);
        Inertia.post('/submit-ticket', formData);
    }

    return (
        <WebSiteTRLayout address={address?.general_value} phone={phone?.general_value} email={email?.general_value} telegram={telegram?.general_value} linkdin={linkdin?.general_value} insta={insta?.general_value} about_tr={about_us_text_tr?.general_value} >
            <>
                <div className=" flex flex-col">
                    <div className="flex flex-col bg-[url('../images/contact-us.jpg')] py-16 text-center bg-cover">
                        <h5 ref={contactUs} className="lg:text-6xl text-4xl space-x-5 mt-16 lg:mt-0">
                            <span className="inline-block lg:first-letter:text-7xl first-letter:text-5xl first-letter:text-green-500">Bize</span>
                            <span className="inline-block lg:first-letter:text-7xl first-letter:text-5xl first-letter:text-green-500"> Ulasin </span>
                        </h5>
                    </div>
                    <div className="flex lg:flex-row flex-col lg:m-10 lg:space-x-10">
                        <div className="lg:w-1/2 bg-white rounded-xl shadow-xl">
                            {/* Form Section */}
                            <form onSubmit={handleSubmit} className="m-10 space-y-6">
                                <p className="lg:text-4xl text-3xl">Ulasim Formu</p>
                                <div className="flex flex-col">
                                    <label htmlFor="fullName">Ad Soyad:</label>
                                    <input required className='border border-green-400 rounded-md hover:rounded-xl duration-500' type="text" id='fullName' />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="call_info">E-Posta veya Telefon:</label>
                                    <input required className='border border-green-400 rounded-md hover:rounded-xl duration-500' type="text" id='call_info' />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="message">Mesaj:</label>
                                    <textarea required className='border border-green-400 rounded-md hover:rounded-xl duration-500' type="text" id='message' />
                                </div>
                                <div className="flex flex-col">
                                    <button type="submit" className="bg-green-400 text-white rounded-md hover:rounded-xl duration-500 py-3" >
                                        Gonder
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="lg:w-1/2 bg-black text-white lg:gap-2 flex flex-col lg:space-y-3 space-y-1 lg:p-10 p-4 rounded-xl shadow-xl mb-2">
                            <div className="mx-5">
                                <p className="text-2xl font-bold lg:mb-5 mb-2">Konum:</p>
                                <Map lat={51} long={34} />
                            </div>
                            <div className="lg:mx-5 mx-2 flex flex-row lg:space-x-4 space-x-1">
                                <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="lg:w-7 lg:h-7 h-6 w-6" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#ffffff" d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39 h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z"></path> <path fill="#ffffff" d="M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32 c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"></path> <path fill="#ffffff" d="M32,10c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,10,32,10z M32,36 c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,36,32,36z"></path> </g> </g></svg>
                                <p className="lg:text-xl text-lg font-[2000]">Adres: <span className="lg:text-xl text-lg">Mithatpaşa Mahallesi Kemer Sokak No: 2/1</span></p>
                            </div>
                            <div className="lg:mx-5 mx-2 flex flex-row lg:space-x-4 space-x-1">
                                <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="lg:w-7 lg:h-7 h-6 w-6" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#ffffff" d="M48,0H16c-2.211,0-4,1.789-4,4v56c0,2.211,1.789,4,4,4h32c2.211,0,4-1.789,4-4V4C52,1.789,50.211,0,48,0z M50,60c0,1.104-0.896,2-2,2H16c-1.104,0-2-0.896-2-2v-8h36V60z M50,50H14V10h36V50z M50,8H14V4c0-1.104,0.896-2,2-2h32 c1.104,0,2,0.896,2,2V8z"></path> <path fill="#ffffff" d="M32,60c1.658,0,3-1.342,3-3s-1.342-3-3-3s-3,1.342-3,3S30.342,60,32,60z M32,56c0.553,0,1,0.447,1,1 s-0.447,1-1,1s-1-0.447-1-1S31.447,56,32,56z"></path> <path fill="#ffffff" d="M33,4h-6c-0.553,0-1,0.447-1,1s0.447,1,1,1h6c0.553,0,1-0.447,1-1S33.553,4,33,4z"></path> <circle fill="#ffffff" cx="37" cy="5" r="1"></circle> </g> </g></svg>
                                <p className="lg:text-xl text-lg font-bold">Telefon: <span className="lg:text-xl text-lg">Kemerburgaz - Eyüpsultan / İSTANBUL</span></p>
                            </div>
                            <div className="lg:mx-5 mx-2 flex flex-row lg:space-x-4 space-x-1">
                                <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="lg:w-7 lg:h-7 h-6 w-6" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path fill="#ffffff" d="M11,54h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C10,53.553,10.447,54,11,54 z M12,49h4v3h-4V49z"></path> <path fill="#ffffff" d="M23,54h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C22,53.553,22.447,54,23,54 z M24,49h4v3h-4V49z"></path> <path fill="#ffffff" d="M35,54h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C34,53.553,34.447,54,35,54 z M36,49h4v3h-4V49z"></path> <path fill="#ffffff" d="M11,43h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C10,42.553,10.447,43,11,43 z M12,38h4v3h-4V38z"></path> <path fill="#ffffff" d="M23,43h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C22,42.553,22.447,43,23,43 z M24,38h4v3h-4V38z"></path> <path fill="#ffffff" d="M35,43h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C34,42.553,34.447,43,35,43 z M36,38h4v3h-4V38z"></path> <path fill="#ffffff" d="M47,43h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C46,42.553,46.447,43,47,43 z M48,38h4v3h-4V38z"></path> <path fill="#ffffff" d="M11,32h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C10,31.553,10.447,32,11,32 z M12,27h4v3h-4V27z"></path> <path fill="#ffffff" d="M23,32h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C22,31.553,22.447,32,23,32 z M24,27h4v3h-4V27z"></path> <path fill="#ffffff" d="M35,32h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C34,31.553,34.447,32,35,32 z M36,27h4v3h-4V27z"></path> <path fill="#ffffff" d="M47,32h6c0.553,0,1-0.447,1-1v-5c0-0.553-0.447-1-1-1h-6c-0.553,0-1,0.447-1,1v5C46,31.553,46.447,32,47,32 z M48,27h4v3h-4V27z"></path> <path fill="#ffffff" d="M60,4h-7V3c0-1.657-1.343-3-3-3s-3,1.343-3,3v1H17V3c0-1.657-1.343-3-3-3s-3,1.343-3,3v1H4 C1.789,4,0,5.789,0,8v52c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4V8C64,5.789,62.211,4,60,4z M49,3c0-0.553,0.447-1,1-1 s1,0.447,1,1v3v4c0,0.553-0.447,1-1,1s-1-0.447-1-1V6V3z M13,3c0-0.553,0.447-1,1-1s1,0.447,1,1v3v4c0,0.553-0.447,1-1,1 s-1-0.447-1-1V6V3z M62,60c0,1.104-0.896,2-2,2H4c-1.104,0-2-0.896-2-2V17h60V60z M62,15H2V8c0-1.104,0.896-2,2-2h7v4 c0,1.657,1.343,3,3,3s3-1.343,3-3V6h30v4c0,1.657,1.343,3,3,3s3-1.343,3-3V6h7c1.104,0,2,0.896,2,2V15z"></path> </g> </g></svg>
                                <p className="lg:text-xl text-lg font-[2000]">Acik saatler:<span className="lg:text-xl text-lg"> Pazartesi - Cuma 9 - 17 &#9200; </span></p>
                            </div>
                            <div className=" flex flex-col">
                                <div className="lg:mx-5 mx-2 flex flex-row lg:space-x-4 space-x-1">
                                    <svg fill="#ffffff" className="lg:w-7 lg:h-7 h-6 w-6" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M128,92a36,36,0,1,0,36,36A36.04061,36.04061,0,0,0,128,92Zm0,64a28,28,0,1,1,28-28A28.03146,28.03146,0,0,1,128,156ZM65.3418,101.53271A67.94065,67.94065,0,0,0,79.916,176.0835a3.99974,3.99974,0,1,1-5.65625,5.65673,75.94065,75.94065,0,0,1,0-107.48046A3.99974,3.99974,0,1,1,79.916,79.9165,67.8,67.8,0,0,0,65.3418,101.53271ZM204,128a75.7808,75.7808,0,0,1-22.25977,53.74023,3.99974,3.99974,0,0,1-5.65625-5.65673,67.94065,67.94065,0,0,0,0-96.167,3.99974,3.99974,0,1,1,5.65625-5.65673A75.7808,75.7808,0,0,1,204,128ZM51.63184,204.36768a3.99974,3.99974,0,1,1-5.65625,5.65673,115.90639,115.90639,0,0,1,0-164.04882,3.99974,3.99974,0,0,1,5.65625,5.65673,107.90641,107.90641,0,0,0,0,152.73536ZM244,128a115.65632,115.65632,0,0,1-33.97559,82.02441,3.99974,3.99974,0,0,1-5.65625-5.65673,107.90641,107.90641,0,0,0,0-152.73536,3.99974,3.99974,0,0,1,5.65625-5.65673A115.65862,115.65862,0,0,1,244,128Z"></path> </g></svg>
                                    <p className="lg:text-xl text-lg font-bold lg:mb-5 mb-2">Sosyal Media:</p>

                                    <div className="lg:mx-5 mx-2 flex flex-row lg:space-x-4 space-x-1">
                                        <div className="hover:cursor-pointer hover:scale-110 hover:opacity-70 hover:duration-100 hover:ease-in-out">
                                            <svg className="lg:w-7 lg:h-7 h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.06167 7.24464C3.10844 6.22264 3.26846 5.56351 3.48487 5.00402L3.48778 4.99629C3.70223 4.42695 4.03818 3.91119 4.47224 3.48489L4.47833 3.47891L4.48431 3.47282C4.91096 3.0382 5.42691 2.70258 5.99575 2.4887L6.00556 2.48495C6.56378 2.26786 7.22162 2.10843 8.24447 2.06167M3.06167 7.24464C3.0125 8.33659 2.99997 8.67508 2.99997 11.5063C2.99997 14.3381 3.01181 14.6758 3.06164 15.768M3.06167 7.24464L3.06167 7.52008M3.48867 18.0168C3.70255 18.5856 4.03817 19.1015 4.47279 19.5282L4.47887 19.5342L4.48484 19.5402C4.91116 19.9743 5.42694 20.3103 5.99628 20.5247L6.00478 20.5279C6.56351 20.7446 7.22167 20.9041 8.24447 20.9509M3.48867 18.0168L3.48492 18.0069C3.26783 17.4487 3.1084 16.7909 3.06164 15.768M3.48867 18.0168L3.47585 17.9492M3.06164 15.768L3.07839 15.8562M3.06164 15.768L3.06164 15.4919M3.47585 17.9492L3.07839 15.8562M3.47585 17.9492C3.30704 17.5033 3.13322 16.881 3.07839 15.8562M3.47585 17.9492C3.48177 17.9649 3.48768 17.9803 3.49359 17.9955C3.70766 18.5726 4.04685 19.0952 4.48679 19.5256C4.91708 19.9655 5.43944 20.3046 6.01636 20.5187C6.47934 20.699 7.13172 20.8875 8.24431 20.9385C9.3671 20.9896 9.71399 21 12.5062 21C15.2985 21 15.6457 20.9896 16.7685 20.9385C17.8824 20.8874 18.534 20.6979 18.9954 20.519C19.5726 20.305 20.0953 19.9657 20.5257 19.5256C20.9655 19.0953 21.3046 18.573 21.5187 17.9961C21.699 17.5331 21.8875 16.8808 21.9384 15.7682C21.9895 14.6454 22 14.2978 22 11.5063C22 8.71472 21.9895 8.36684 21.9384 7.24405C21.8871 6.12427 21.6959 5.47168 21.5161 5.00992C21.2811 4.40322 20.9831 3.94437 20.525 3.48627C20.0678 3.02999 19.6102 2.73179 19.003 2.49654C18.5396 2.31537 17.8866 2.12531 16.7685 2.07406C16.6712 2.06964 16.5798 2.06552 16.4921 2.06168M3.07839 15.8562C3.07684 15.8273 3.07539 15.7981 3.07403 15.7685C3.06961 15.6712 3.06548 15.5797 3.06164 15.4919M8.24447 2.06167C9.33668 2.01184 9.67505 2 12.5062 2C15.3374 2 15.6756 2.01252 16.7675 2.06168M8.24447 2.06167L8.52062 2.06167M16.7675 2.06168L16.4921 2.06168M16.7675 2.06168C17.7897 2.10844 18.4489 2.26844 19.0085 2.48487L19.0162 2.48781C19.5855 2.70226 20.1013 3.03821 20.5276 3.47227L20.5335 3.4783L20.5396 3.48422C20.9737 3.91055 21.3096 4.42646 21.5239 4.99596L21.5275 5.00559C21.7446 5.56381 21.9041 6.22165 21.9508 7.2445M8.52062 2.06167L16.4921 2.06168M8.52062 2.06167C9.44548 2.02123 9.95666 2.01253 12.5062 2.01253C15.056 2.01253 15.5671 2.02124 16.4921 2.06168M8.52062 2.06167C8.43284 2.06551 8.34134 2.06964 8.24402 2.07406C7.13004 2.12512 6.47843 2.31464 6.01708 2.49358C5.43767 2.70837 4.91328 3.04936 4.48192 3.49186C4.0281 3.94756 3.73105 4.40422 3.49655 5.0094C3.31536 5.4728 3.12527 6.12614 3.07402 7.24434C3.06961 7.34135 3.06549 7.43257 3.06167 7.52008M21.9508 15.768C21.9041 16.7908 21.7446 17.449 21.5279 18.0077L21.5247 18.0162C21.3102 18.5856 20.9743 19.1013 20.5402 19.5276L20.5341 19.5336L20.5282 19.5397C20.1015 19.9743 19.5856 20.3099 19.0167 20.5238L19.0069 20.5276C18.4487 20.7447 17.7908 20.9041 16.768 20.9509M3.06164 15.4919C3.0212 14.567 3.0125 14.0558 3.0125 11.5063C3.0125 8.95591 3.0212 8.44544 3.06167 7.52008M3.06164 15.4919L3.06167 7.52008M10.8155 15.5881C11.3515 15.8101 11.926 15.9244 12.5062 15.9244C13.678 15.9244 14.8018 15.4589 15.6304 14.6304C16.4589 13.8018 16.9244 12.678 16.9244 11.5063C16.9244 10.3345 16.4589 9.21072 15.6304 8.38215C14.8018 7.55359 13.678 7.0881 12.5062 7.0881C11.926 7.0881 11.3515 7.20238 10.8155 7.42442C10.2794 7.64645 9.79239 7.97189 9.38213 8.38215C8.97187 8.79242 8.64643 9.27947 8.42439 9.81551C8.20236 10.3515 8.08808 10.9261 8.08808 11.5063C8.08808 12.0865 8.20236 12.661 8.42439 13.197C8.64643 13.7331 8.97187 14.2201 9.38213 14.6304C9.79239 15.0406 10.2794 15.3661 10.8155 15.5881ZM9.37229 8.37231C10.2035 7.54113 11.3308 7.07418 12.5062 7.07418C13.6817 7.07418 14.809 7.54113 15.6402 8.37231C16.4714 9.20349 16.9383 10.3308 16.9383 11.5063C16.9383 12.6817 16.4714 13.809 15.6402 14.6402C14.809 15.4714 13.6817 15.9383 12.5062 15.9383C11.3308 15.9383 10.2035 15.4714 9.37229 14.6402C8.54111 13.809 8.07416 12.6817 8.07416 11.5063C8.07416 10.3308 8.54111 9.20349 9.37229 8.37231ZM19.434 6.04229C19.434 6.37873 19.3003 6.70139 19.0625 6.93929C18.8246 7.17719 18.5019 7.31084 18.1655 7.31084C17.829 7.31084 17.5064 7.17719 17.2685 6.93929C17.0306 6.70139 16.8969 6.37873 16.8969 6.04229C16.8969 5.70585 17.0306 5.38319 17.2685 5.1453C17.5064 4.9074 17.829 4.77375 18.1655 4.77375C18.5019 4.77375 18.8246 4.9074 19.0625 5.1453C19.3003 5.38319 19.434 5.70585 19.434 6.04229Z" stroke="#ffffff" strokeLinejoin="round"></path> </g></svg>
                                        </div>
                                        <div className="hover:cursor-pointer hover:scale-110 hover:opacity-70 hover:duration-100 hover:ease-in-out">
                                            <svg className="lg:w-7 lg:h-7 h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M21.997 12C21.997 17.5228 17.5198 22 11.997 22C6.47415 22 1.99699 17.5228 1.99699 12C1.99699 6.47715 6.47415 2 11.997 2C17.5198 2 21.997 6.47715 21.997 12ZM12.3553 9.38244C11.3827 9.787 9.43876 10.6243 6.52356 11.8944C6.05018 12.0827 5.8022 12.2669 5.77962 12.4469C5.74147 12.7513 6.12258 12.8711 6.64155 13.0343C6.71214 13.0565 6.78528 13.0795 6.86026 13.1038C7.37085 13.2698 8.05767 13.464 8.41472 13.4717C8.7386 13.4787 9.10009 13.3452 9.49918 13.0711C12.2229 11.2325 13.629 10.3032 13.7172 10.2831C13.7795 10.269 13.8658 10.2512 13.9243 10.3032C13.9828 10.3552 13.977 10.4536 13.9708 10.48C13.9331 10.641 12.4371 12.0318 11.6629 12.7515C11.4216 12.9759 11.2504 13.135 11.2154 13.1714C11.137 13.2528 11.0571 13.3298 10.9803 13.4038C10.506 13.8611 10.1502 14.204 11 14.764C11.4083 15.0331 11.7351 15.2556 12.0611 15.4776C12.4171 15.7201 12.7722 15.9619 13.2317 16.2631C13.3487 16.3398 13.4605 16.4195 13.5694 16.4971C13.9837 16.7925 14.3559 17.0579 14.8158 17.0155C15.083 16.991 15.359 16.7397 15.4992 15.9903C15.8305 14.2193 16.4817 10.382 16.6322 8.80081C16.6454 8.66228 16.6288 8.48498 16.6154 8.40715C16.6021 8.32932 16.5743 8.21842 16.4731 8.13633C16.3533 8.03911 16.1683 8.01861 16.0856 8.02C15.7095 8.0267 15.1324 8.22735 12.3553 9.38244Z" stroke="#ffffff" strokeLinejoin="round"></path> </g></svg>
                                        </div>
                                        <div className="hover:cursor-pointer hover:scale-110 hover:opacity-70 hover:duration-100 hover:ease-in-out">
                                            <svg className="lg:w-8 lg:h-8 h-6 w-6" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M84.7925 257.334C1.81069 106.044 237.525 -11.6463 321.16 119.453C396.366 237.339 251.357 391.573 150.736 312.145" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M89.5909 265.912C34.5405 357.344 49.8143 347.445 133.267 311.303" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M170.381 113.42C60.1005 141.74 240.793 341.184 288.582 236.047" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M177.338 175.365C186.032 197.073 208.905 214.528 227.906 227.195" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M177.338 126.062C187.693 143.231 203.319 159.586 178.602 168.412" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M285.431 228.46C262.184 210.573 250.584 200.134 232.965 225.301" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </WebSiteTRLayout>
    );
};

export default ContactUs;
