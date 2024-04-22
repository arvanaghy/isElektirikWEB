import React from "react";
import NavBar from "@/Components/NavBar";
import TopBar from "@/Components/TopBar";
import Footer from "@/Components/Footer";
import SideScroll from "./SideScroll";
import BackToTopButton from "./BackToTopButton";
import PhoneCallButtonEN from "./PhoneCallButtonEN";
const WebSiteENLayout = ({ children }) => {
    return (
        <>
            <TopBar />
            <NavBar />
            <SideScroll />
            <main className="min-h-screen">{children}</main>
            <BackToTopButton />
            <PhoneCallButtonEN />
            <Footer />
        </>
    );
};

export default WebSiteENLayout;
