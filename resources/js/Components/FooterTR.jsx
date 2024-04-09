import React from "react";
import logo from "../../../public/images/ful-logo.png";

const FooterTR = () => {
    return (
        <div className="min-h-[15vh] py-8 px-6 bg-black w-full flex flex-col justify-center items-center text-white">
            <div className="flex flex-row flex-wrap w-full space-x-6">
                <div className="w-full lg:w-5/12">
                    <img src={logo} className="w-[30%] invert" />
                    <p className="py-4 text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Praesentium illo quas eveniet ipsum facere rem
                        cupiditate nisi molestias, reprehenderit non veniam
                        molestiae eos minima culpa animi perferendis quibusdam
                        dolore? Eaque!
                    </p>
                </div>
                <div className="flex flex-row items-center justify-end w-6/12">
                    <div className="w-4/12">
                        <p className="text-lg font-extrabold">Usefull Links</p>
                        <ul className="space-y-2">
                            <li>link</li>
                            <li>link</li>
                            <li>link</li>
                            <li>link</li>
                            <li>link</li>
                        </ul>
                    </div>
                    <div className="w-6/12">
                        <p>Contact with us</p>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-[80%] border-t border-white text-center mt-8 pt-3">
                <p>Copyright</p>
            </div>
        </div>
    );
};

export default FooterTR;
