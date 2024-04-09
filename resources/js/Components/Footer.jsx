import React from "react";

const Footer = () => {
    return (
        <div className="text-white bg-stone-800">
            <div className="">link parts</div>
            <div className="">
                <p>subscribe</p>
                <div className="">
                    <input type="text" placeholder="email" />
                    <select name="" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <input type="submit" value="Subscribe" />
                </div>
                <div className="flex flex-row space-x-4">
                    <div className="">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Incidunt, exercitationem. Unde dolorum quod
                            quam porro assumenda dolore, in recusandae sit
                            adipisci. Incidunt soluta ratione facere dolores
                            sequi nam ea cumque.
                        </p>
                        <ul className="flex flex-row space-x-4">
                            <li>Site Map</li>
                            <li>Privacy Policy</li>
                            <li>Cookie Notice</li>
                        </ul>
                    </div>
                    <div className="">socail newtork</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
