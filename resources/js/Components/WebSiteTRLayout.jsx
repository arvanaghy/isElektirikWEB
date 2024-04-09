import React from "react";
import NavBarTR from "@/Components/NavBarTR";
import TopBarTR from "@/Components/TopBarTR";
import FooterTR from "@/Components/FooterTR";
import PhoneCallButton from "@/Components/PhoneCallButton";
import BackToTopButton from "@/Components/BackToTopButton";
const WebSiteTRLayout = ({ children }) => {
    return (
        <div className="w-full h-full text-black bg-slate-800 ">
            <TopBarTR />
            <NavBarTR />
            <main className="min-h-[75vh] md:min-h-[70vh] w-full bg-slate-800">
                {children}
            </main>
            <BackToTopButton />
            <PhoneCallButton />
            <FooterTR />
        </div>
    );
};

export default WebSiteTRLayout;
