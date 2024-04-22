import React from "react";
import NavBar from "@/Components/NavBar";
import TopBar from "@/Components/TopBar";
import Footer from "@/Components/Footer";
import SideScroll from "./SideScroll";
import BackToTopButton from "./BackToTopButton";
import PhoneCallButtonEN from "./PhoneCallButtonEN";
const WebSiteENLayout = ({ children  }) => {
    return (
        <>
            <div className="">
                <TopBar />
                <NavBar />
                <SideScroll />
                <main className="min-h-[75vh] md:min-h-[70vh] overflow-hidden">
                    {children}
                </main>
                <BackToTopButton />
                <PhoneCallButtonEN />
                <Footer />
            </div>
        </>
    );
};

export default WebSiteENLayout;
