import React from "react";
import NavBarTR from "@/Components/NavBarTR";
import TopBarTR from "@/Components/TopBarTR";
import FooterTR from "@/Components/FooterTR";
import PhoneCallButton from "@/Components/PhoneCallButton";
import BackToTopButton from "@/Components/BackToTopButton";
import SideScroll from "@/Components/SideScroll";
const WebSiteTRLayout = ({ children,
    address,
    phone,
    email,
    insta,
    telegram,
    linkdin,
    about_tr,
}) => {
    return (
        <div className="">
            <TopBarTR />
            <NavBarTR />
            <SideScroll />
            <main className="min-h-[75vh] md:min-h-[70vh] overflow-hidden">
                {children}
            </main>
            <BackToTopButton />
            <PhoneCallButton phone={phone} linkdin={linkdin} />
            <FooterTR address={address} phone={phone} email={email} insta={insta} telegram={telegram} linkdin={linkdin} about_tr={about_tr} />
        </div>
    );
};

export default WebSiteTRLayout;
