import React from "react";
import NavBarTR from "@/Components/NavBarTR";
import TopBarTR from "@/Components/TopBarTR";
import FooterTR from "@/Components/FooterTR";
import PhoneCallButton from "@/Components/PhoneCallButton";
import BackToTopButton from "@/Components/BackToTopButton";
const WebSiteTRLayout = ({ children }) => {
    return (
        <div className=" bg-slate-800 ">
            <TopBarTR />
            <NavBarTR />
            <main className="min-h-[75vh] md:min-h-[70vh] bg-slate-800 overflow-hidden">
                {children}
            </main>
            <BackToTopButton />
            <PhoneCallButton /> 
            <FooterTR />
        </div>
    );
};

export default WebSiteTRLayout;
