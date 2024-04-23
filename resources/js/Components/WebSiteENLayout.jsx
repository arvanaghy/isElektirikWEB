import React from "react";
import NavBar from "@/Components/NavBar";
import TopBar from "@/Components/TopBar";
import Footer from "@/Components/Footer";
import SideScroll from "./SideScroll";
import BackToTopButton from "./BackToTopButton";
import PhoneCallButtonEN from "./PhoneCallButtonEN";
const WebSiteENLayout = ({ children,
    address,
    phone,
    email,
    insta,
    telegram,
    linkdin,
    about_en,
}) => {
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
                <PhoneCallButtonEN phone={phone} linkdin={linkdin} />
                <Footer address={address} phone={phone} email={email} insta={insta} telegram={telegram} linkdin={linkdin} about_en={about_en} />
            </div>
        </>
    );
};

export default WebSiteENLayout;
