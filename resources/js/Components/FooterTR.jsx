import React from "react";
import logo from "../../../public/images/ful-logo.png";
import { Link } from "@inertiajs/react";

const FooterTR = ({
    address,
    phone,
    email,
    insta,
    telegram,
    linkdin,
    about_tr,
}) => {


    const [privacy, setPrivacy] = React.useState(false);
    const [cookie, setCookie] = React.useState(false);
    const [term, setTerm] = React.useState(false);

    const togglePrivacy = () => {
        setPrivacy(prev => !prev);
    }

    const toggleCookie = () => {
        setCookie(prev => !prev);
    }

    const toggleTerm = () => {
        setTerm(prev => !prev);
    }

    return (
        <>
            <div className="relative min-h-[15vh] py-8 px-6 bg-black w-full flex flex-col justify-center items-center text-white">
                <div className="flex lg:flex-row flex-col w-full lg:space-x-8 space-y-5">
                    <div className="w-full lg:w-4/12 lg:ps-8">
                        <img src={logo} className="w-[30%] invert" />
                        <p className="py-4 text-justify">{about_tr}</p>
                    </div>
                    <div className="w-full lg:w-4/12 z-10">
                        <p className="text-xl text-center font-extrabold w-10/12 lg:w-4/12 m-auto pb-2 border-b-[1px]  mb-4">Sayfalar</p>
                        <ul className="space-y-2 flex flex-col justify-items-center items-center">

                            <li className="flex flex-row ">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 7L15 12L10 17" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <a href="/site-map" rel="noreferrer" target="_blank" className=" lg:text-center hover:cursor-pointer hover:translate-x-2 hover:opacity-70 hover:duration-150 hover:ease-in-out">
                                    Site Map
                                </a>
                            </li>
                            <li className="flex flex-row ">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 7L15 12L10 17" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <button onClick={setPrivacy} className=" lg:text-center hover:cursor-pointer hover:translate-x-2 hover:opacity-70 hover:duration-150 hover:ease-in-out">
                                    Privacy Policy
                                </button>
                            </li>
                            <li className="flex flex-row ">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 7L15 12L10 17" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <button onClick={setCookie} className=" lg:text-center hover:cursor-pointer hover:translate-x-2 hover:opacity-70 hover:duration-150 hover:ease-in-out">

                                    Cookie Notice
                                </button>
                            </li>
                            <li className="flex flex-row ">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 7L15 12L10 17" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <button onClick={setTerm} className=" lg:text-center hover:cursor-pointer hover:translate-x-2 hover:opacity-70 hover:duration-150 hover:ease-in-out">
                                    Terms of use
                                </button>
                            </li>

                        </ul>
                    </div>
                    <div className="w-full lg:w-4/12 lg:space-y-5 text-center z-10">
                        <p className="text-xl font-extrabold w-10/12 lg:w-4/12 m-auto pb-2 border-b-[1px]  mb-4">Ulasim</p>
                        <p className="mt-3 lg:mt-1">  <span className=" font-bold text-lg">Adres: {address}</span>  </p>
                        <p className="mt-3 lg:mt-1"> <span className=" font-bold text-lg">Email: {email}</span>  </p>
                        <p className="mt-3 lg:mt-1"><span className="font-bold text-lg">Telefon: {phone}</span> </p>
                        <div className="flex flex-row space-x-5 justify-center mt-3 lg:mt-1">
                            <a target="_blank" href={insta} className="hover:cursor-pointer hover:scale-110 hover:opacity-70 hover:duration-100 hover:ease-in-out">
                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.06167 7.24464C3.10844 6.22264 3.26846 5.56351 3.48487 5.00402L3.48778 4.99629C3.70223 4.42695 4.03818 3.91119 4.47224 3.48489L4.47833 3.47891L4.48431 3.47282C4.91096 3.0382 5.42691 2.70258 5.99575 2.4887L6.00556 2.48495C6.56378 2.26786 7.22162 2.10843 8.24447 2.06167M3.06167 7.24464C3.0125 8.33659 2.99997 8.67508 2.99997 11.5063C2.99997 14.3381 3.01181 14.6758 3.06164 15.768M3.06167 7.24464L3.06167 7.52008M3.48867 18.0168C3.70255 18.5856 4.03817 19.1015 4.47279 19.5282L4.47887 19.5342L4.48484 19.5402C4.91116 19.9743 5.42694 20.3103 5.99628 20.5247L6.00478 20.5279C6.56351 20.7446 7.22167 20.9041 8.24447 20.9509M3.48867 18.0168L3.48492 18.0069C3.26783 17.4487 3.1084 16.7909 3.06164 15.768M3.48867 18.0168L3.47585 17.9492M3.06164 15.768L3.07839 15.8562M3.06164 15.768L3.06164 15.4919M3.47585 17.9492L3.07839 15.8562M3.47585 17.9492C3.30704 17.5033 3.13322 16.881 3.07839 15.8562M3.47585 17.9492C3.48177 17.9649 3.48768 17.9803 3.49359 17.9955C3.70766 18.5726 4.04685 19.0952 4.48679 19.5256C4.91708 19.9655 5.43944 20.3046 6.01636 20.5187C6.47934 20.699 7.13172 20.8875 8.24431 20.9385C9.3671 20.9896 9.71399 21 12.5062 21C15.2985 21 15.6457 20.9896 16.7685 20.9385C17.8824 20.8874 18.534 20.6979 18.9954 20.519C19.5726 20.305 20.0953 19.9657 20.5257 19.5256C20.9655 19.0953 21.3046 18.573 21.5187 17.9961C21.699 17.5331 21.8875 16.8808 21.9384 15.7682C21.9895 14.6454 22 14.2978 22 11.5063C22 8.71472 21.9895 8.36684 21.9384 7.24405C21.8871 6.12427 21.6959 5.47168 21.5161 5.00992C21.2811 4.40322 20.9831 3.94437 20.525 3.48627C20.0678 3.02999 19.6102 2.73179 19.003 2.49654C18.5396 2.31537 17.8866 2.12531 16.7685 2.07406C16.6712 2.06964 16.5798 2.06552 16.4921 2.06168M3.07839 15.8562C3.07684 15.8273 3.07539 15.7981 3.07403 15.7685C3.06961 15.6712 3.06548 15.5797 3.06164 15.4919M8.24447 2.06167C9.33668 2.01184 9.67505 2 12.5062 2C15.3374 2 15.6756 2.01252 16.7675 2.06168M8.24447 2.06167L8.52062 2.06167M16.7675 2.06168L16.4921 2.06168M16.7675 2.06168C17.7897 2.10844 18.4489 2.26844 19.0085 2.48487L19.0162 2.48781C19.5855 2.70226 20.1013 3.03821 20.5276 3.47227L20.5335 3.4783L20.5396 3.48422C20.9737 3.91055 21.3096 4.42646 21.5239 4.99596L21.5275 5.00559C21.7446 5.56381 21.9041 6.22165 21.9508 7.2445M8.52062 2.06167L16.4921 2.06168M8.52062 2.06167C9.44548 2.02123 9.95666 2.01253 12.5062 2.01253C15.056 2.01253 15.5671 2.02124 16.4921 2.06168M8.52062 2.06167C8.43284 2.06551 8.34134 2.06964 8.24402 2.07406C7.13004 2.12512 6.47843 2.31464 6.01708 2.49358C5.43767 2.70837 4.91328 3.04936 4.48192 3.49186C4.0281 3.94756 3.73105 4.40422 3.49655 5.0094C3.31536 5.4728 3.12527 6.12614 3.07402 7.24434C3.06961 7.34135 3.06549 7.43257 3.06167 7.52008M21.9508 15.768C21.9041 16.7908 21.7446 17.449 21.5279 18.0077L21.5247 18.0162C21.3102 18.5856 20.9743 19.1013 20.5402 19.5276L20.5341 19.5336L20.5282 19.5397C20.1015 19.9743 19.5856 20.3099 19.0167 20.5238L19.0069 20.5276C18.4487 20.7447 17.7908 20.9041 16.768 20.9509M3.06164 15.4919C3.0212 14.567 3.0125 14.0558 3.0125 11.5063C3.0125 8.95591 3.0212 8.44544 3.06167 7.52008M3.06164 15.4919L3.06167 7.52008M10.8155 15.5881C11.3515 15.8101 11.926 15.9244 12.5062 15.9244C13.678 15.9244 14.8018 15.4589 15.6304 14.6304C16.4589 13.8018 16.9244 12.678 16.9244 11.5063C16.9244 10.3345 16.4589 9.21072 15.6304 8.38215C14.8018 7.55359 13.678 7.0881 12.5062 7.0881C11.926 7.0881 11.3515 7.20238 10.8155 7.42442C10.2794 7.64645 9.79239 7.97189 9.38213 8.38215C8.97187 8.79242 8.64643 9.27947 8.42439 9.81551C8.20236 10.3515 8.08808 10.9261 8.08808 11.5063C8.08808 12.0865 8.20236 12.661 8.42439 13.197C8.64643 13.7331 8.97187 14.2201 9.38213 14.6304C9.79239 15.0406 10.2794 15.3661 10.8155 15.5881ZM9.37229 8.37231C10.2035 7.54113 11.3308 7.07418 12.5062 7.07418C13.6817 7.07418 14.809 7.54113 15.6402 8.37231C16.4714 9.20349 16.9383 10.3308 16.9383 11.5063C16.9383 12.6817 16.4714 13.809 15.6402 14.6402C14.809 15.4714 13.6817 15.9383 12.5062 15.9383C11.3308 15.9383 10.2035 15.4714 9.37229 14.6402C8.54111 13.809 8.07416 12.6817 8.07416 11.5063C8.07416 10.3308 8.54111 9.20349 9.37229 8.37231ZM19.434 6.04229C19.434 6.37873 19.3003 6.70139 19.0625 6.93929C18.8246 7.17719 18.5019 7.31084 18.1655 7.31084C17.829 7.31084 17.5064 7.17719 17.2685 6.93929C17.0306 6.70139 16.8969 6.37873 16.8969 6.04229C16.8969 5.70585 17.0306 5.38319 17.2685 5.1453C17.5064 4.9074 17.829 4.77375 18.1655 4.77375C18.5019 4.77375 18.8246 4.9074 19.0625 5.1453C19.3003 5.38319 19.434 5.70585 19.434 6.04229Z" stroke="#ffffff" strokeLinejoin="round"></path> </g></svg>
                            </a>
                            <a target="_blank" href={telegram} className="hover:cursor-pointer hover:scale-110 hover:opacity-70 hover:duration-100 hover:ease-in-out">
                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M21.997 12C21.997 17.5228 17.5198 22 11.997 22C6.47415 22 1.99699 17.5228 1.99699 12C1.99699 6.47715 6.47415 2 11.997 2C17.5198 2 21.997 6.47715 21.997 12ZM12.3553 9.38244C11.3827 9.787 9.43876 10.6243 6.52356 11.8944C6.05018 12.0827 5.8022 12.2669 5.77962 12.4469C5.74147 12.7513 6.12258 12.8711 6.64155 13.0343C6.71214 13.0565 6.78528 13.0795 6.86026 13.1038C7.37085 13.2698 8.05767 13.464 8.41472 13.4717C8.7386 13.4787 9.10009 13.3452 9.49918 13.0711C12.2229 11.2325 13.629 10.3032 13.7172 10.2831C13.7795 10.269 13.8658 10.2512 13.9243 10.3032C13.9828 10.3552 13.977 10.4536 13.9708 10.48C13.9331 10.641 12.4371 12.0318 11.6629 12.7515C11.4216 12.9759 11.2504 13.135 11.2154 13.1714C11.137 13.2528 11.0571 13.3298 10.9803 13.4038C10.506 13.8611 10.1502 14.204 11 14.764C11.4083 15.0331 11.7351 15.2556 12.0611 15.4776C12.4171 15.7201 12.7722 15.9619 13.2317 16.2631C13.3487 16.3398 13.4605 16.4195 13.5694 16.4971C13.9837 16.7925 14.3559 17.0579 14.8158 17.0155C15.083 16.991 15.359 16.7397 15.4992 15.9903C15.8305 14.2193 16.4817 10.382 16.6322 8.80081C16.6454 8.66228 16.6288 8.48498 16.6154 8.40715C16.6021 8.32932 16.5743 8.21842 16.4731 8.13633C16.3533 8.03911 16.1683 8.01861 16.0856 8.02C15.7095 8.0267 15.1324 8.22735 12.3553 9.38244Z" stroke="#ffffff" strokeLinejoin="round"></path> </g></svg>
                            </a>
                            <a target="_blank" href={linkdin} className="hover:cursor-pointer hover:scale-110 hover:opacity-70 hover:duration-100 hover:ease-in-out">
                                <svg width="35px" height="35px" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M84.7925 257.334C1.81069 106.044 237.525 -11.6463 321.16 119.453C396.366 237.339 251.357 391.573 150.736 312.145" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M89.5909 265.912C34.5405 357.344 49.8143 347.445 133.267 311.303" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M170.381 113.42C60.1005 141.74 240.793 341.184 288.582 236.047" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M177.338 175.365C186.032 197.073 208.905 214.528 227.906 227.195" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M177.338 126.062C187.693 143.231 203.319 159.586 178.602 168.412" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M285.431 228.46C262.184 210.573 250.584 200.134 232.965 225.301" stroke="#ffffff" strokeOpacity="0.9" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                            </a>
                        </div>

                    </div>
                </div>
                <div className="w-[80%] border-t border-white text-center mt-8 pt-3 z-10">
                    <p>Copyright© All Right's Reserved <span><a onClick={() => window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    })
                    } className="cursor-pointer hover:animate-pulse duration-300 hover:text-green-500 hover:scale-100">İs Elektrik</a></span> 2024</p>
                </div>
                <img className="absolute right-0 bottom-0 object-left-bottom w-full lg:w-[50%] z-5 lg:h-[75%]  opacity-40  " src="../../images/footerbg.png" />
            </div>
            {
                privacy && (
                    <div className="fixed top-36 left-2 overflow-y-scroll lg:left-16  w-[90%] h-[70%]  bg-gray-100 shadow-lg transition-all duration-300 shadow-gray-300 " style={{ zIndex: 1000 }}>
                        <div className="">
                            <button onClick={togglePrivacy} className=" absolute right-0 top-0 p-3 hover:cursor-pointer hover:scale-110 hover:opacity-70 hover:duration-100 hover:ease-in-out " >
                                X
                            </button>
                        </div>
                        <div className="p-8 mt-3">
                            <p className="text-2xl">

                                Crafting an Effective Privacy Policy for Your Electrical Service Website
                            </p>
                            <p>

                                In today's digital age, privacy is paramount. As a provider of electrical services, safeguarding your customers' sensitive information is not just good business practice; it's a legal requirement. Crafting a comprehensive privacy policy for your electrical service website is essential to instill trust and confidence in your clientele. Below, we outline the key components and best practices for creating a robust privacy policy that aligns with industry standards and regulations.
                            </p>
                            <p className="text-2xl mt-3">

                                Introduction: Establishing Trust and Transparency
                            </p>
                            <p>

                                Your privacy policy serves as a transparent communication channel between your business and your customers. It sets the tone for how you handle their personal information and demonstrates your commitment to protecting their privacy. Start by welcoming visitors to your website and expressing your dedication to maintaining the confidentiality of their data.
                            </p>
                            <p className="text-2xl mt-3">

                                Types of Information Collected
                            </p>

                            <p>

                                Clearly outline the types of information your website collects from visitors. This may include personal data such as names, email addresses, phone numbers, and billing information. Additionally, specify any non-personal information gathered through cookies or tracking technologies.
                            </p>

                            <p className="text-2xl mt-3">

                                Purpose of Data Collection
                            </p>

                            <p>

                                Provide insight into why you collect the information and how it enhances the user experience. Whether it's for processing orders, improving website functionality, or personalizing content, transparency regarding the purpose of data collection fosters trust with your audience.
                            </p>
                        </div>
                    </div>
                )
            }

            {
                cookie && (
                    <div className="fixed top-36 left-2 overflow-y-scroll lg:left-16  w-[90%] h-[70%]  bg-gray-100 shadow-lg transition-all duration-300 shadow-gray-300 " style={{ zIndex: 1000 }}>
                        <div className="">
                            <button onClick={toggleCookie} className=" absolute right-0 top-0 p-3 hover:cursor-pointer hover:scale-110 hover:opacity-70 hover:duration-100 hover:ease-in-out " >
                                X
                            </button>
                        </div>
                        <div className="p-8 mt-3">
                            <p className="text-2xl">

                                What Are Cookies?

                            </p>
                            <p>

                                Cookies are small text files that are placed on your device when you visit a website. They serve various purposes, such as remembering your preferences, analyzing website traffic, and facilitating personalized content delivery.

                            </p>
                            <p className="text-2xl mt-3">

                                Types of Cookies We Use

                            </p>
                            <p>

                                Your privacy policy serves as a transparent communication channel between your business and your customers. It sets the tone for how you handle their personal information and demonstrates your commitment to protecting their privacy. Start by welcoming visitors to your website and expressing your dedication to maintaining the confidentiality of their data.
                            </p>
                            <p className="text-2xl mt-3">

                                Your Choices Regarding Cookies

                            </p>

                            <p>

                                Essential Cookies: These cookies are necessary for the proper functioning of our website. They enable core functionalities such as page navigation and access to secure areas of the site. Without these cookies, the website may not function correctly.
                                Analytical/Performance Cookies: We use these cookies to gather information about how visitors interact with our website. This data helps us analyze website traffic, improve site performance, and enhance the user experience.
                                Functionality Cookies: These cookies allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, more personalized features.
                                Targeting/Advertising Cookies: These cookies are used to deliver advertisements that are relevant to your interests. They may also be used to track the effectiveness of advertising campaigns and personalize the advertising content displayed to you.                            </p>

                            <p className="text-2xl mt-3">

                                Purpose of Data Collection
                            </p>

                            <p>

                                You have the option to manage cookies through your web browser settings. Most web browsers allow you to control cookies through settings preferences. You can choose to accept, reject, or delete cookies. Please note that blocking or deleting cookies may affect your experience on our website and limit certain functionalities.
                            </p>
                        </div>
                    </div>
                )
            }

            {
                term && (
                    <div className="fixed top-36 left-2 overflow-y-scroll lg:left-16  w-[90%] h-[70%]  bg-gray-100 shadow-lg transition-all duration-300 shadow-gray-300 " style={{ zIndex: 1000 }}>
                        <div className="">
                            <button onClick={toggleTerm} className=" absolute right-0 top-0 p-3 hover:cursor-pointer hover:scale-110 hover:opacity-70 hover:duration-100 hover:ease-in-out " >
                                X
                            </button>
                        </div>
                        <div className="p-8 mt-3">
                            <p className="text-2xl">

                                1. Acceptance of Terms
                            </p>
                            <p>

                                By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use, as well as any additional terms and conditions referenced herein.

                            </p>
                            <p className="text-2xl mt-3">

                                2. Use of Website
                            </p>
                            <p>

                                You agree to use our website solely for lawful purposes and in a manner consistent with all applicable laws and regulations. You may not use our website in any way that could damage, disable, overburden, or impair our servers or networks, or interfere with any other party's use and enjoyment of the website.

                            </p>
                            <p className="text-2xl mt-3">

                                3. Intellectual Property Rights
                            </p>

                            <p>

                                All content, trademarks, logos, and other intellectual property displayed on our website are the property of [Your Company Name] or its licensors. You may not use, reproduce, modify, distribute, or republish any content from our website without prior written consent.

                            </p>

                            <p className="text-2xl mt-3">

                                4. User Content

                            </p>

                            <p>

                                You may have the opportunity to submit or post content on our website, including comments, reviews, or other materials ("User Content"). By submitting User Content, you grant [Your Company Name] a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such User Content throughout the world in any media.

                            </p>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default FooterTR;
