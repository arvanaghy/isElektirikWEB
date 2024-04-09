import React from "react";
import NavBar from "@/Components/NavBar";
import TopBar from "@/Components/TopBar";
import Footer from "@/Components/Footer";
const WebSiteENLayout = ({ children }) => {
    return (
        <>
            <TopBar />
            <NavBar />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </>
    );
};

export default WebSiteENLayout;
