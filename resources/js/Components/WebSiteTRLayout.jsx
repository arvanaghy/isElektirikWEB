import React from "react";
import NavBarTR from "@/Components/NavBarTR";
import TopBarTR from "@/Components/TopBarTR";
import FooterTR from "@/Components/FooterTR";
import PhoneCallButton from "@/Components/PhoneCallButton";
import BackToTopButton from "@/Components/BackToTopButton";
import SideScroll from "@/Components/SideScroll";
const WebSiteTRLayout = ({ children }) => {
    return (
        <div className=" bg-slate-800 ">
            <TopBarTR />
            <NavBarTR />
            <SideScroll />

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
