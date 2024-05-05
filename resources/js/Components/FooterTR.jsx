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

    return (
        <>
            <div className="relative min-h-[15vh] py-8 px-6 bg-black w-full flex flex-col justify-center items-center text-white">
                <div className="flex lg:flex-row flex-col w-full lg:space-x-8 space-y-5">
                    <div className="w-full lg:w-4/12 lg:ps-8">
                        <img src={logo} className="w-[30%] invert" />
                        <p className="py-4 text-justify">{about_tr}</p>
                    </div>

                    <div className="w-full lg:w-4/12 lg:space-y-5 text-center z-10">
                        <p className="text-xl font-extrabold w-10/12 lg:w-4/12 m-auto pb-2 border-b-[1px]  mb-4">Ulasim</p>
                        <p className="mt-3 lg:mt-1">  <span className=" font-bold text-lg">Adres: {address}</span>  </p>
                        <p className="mt-3 lg:mt-1"> <span className=" font-bold text-lg">Email: {email}</span>  </p>
                        {/* <p className="mt-3 lg:mt-1"><span className="font-bold text-lg">Telefon: {phone}</span> </p> */}
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

        </>
    );
};

export default FooterTR;
