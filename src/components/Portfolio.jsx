import React from "react";
import Roblox_2 from "../assets/Roblox_2.png";
import Roblox_3 from "../assets/Roblox_3.png";
import Roblox_4 from "../assets/Roblox_4.png";
import Unity_1 from "../assets/Unity_1.png";
import Unity_2 from "../assets/Unity_2.png";
import Unity_3 from "../assets/Unity_3.png";
import Unity_4 from "../assets/Unity_4.png";

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: Roblox_2
        },
        {
            id: 2,
            src: Roblox_3
        },
        {
            id: 3,
            src: Roblox_4
        },
        {
            id: 4,
            src: Unity_1
        },
        {
            id: 5,
            src: Unity_2
        },
        {
            id: 6,
            src: Unity_3
        },
        {
            id: 7,
            src: Unity_4
        },
    ];

    return (
    <div 
        name="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full
        text-white md:h-screen"
    >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4
                border-gray-500">
                    Portfolio
                </p>
                <p className="py-6">Here is the latest preview of my work</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8
            px-12 sm:px-0">
            {
                portfolios.map(({id, src}) =>(
                    <div key={id} className="shadow-md shadow-gray-600
                    rounded-lg">
                    <img
                        src={src}
                        alt=""
                        className="rounded-md duration-200 hover:scale-105"
                    />
                    <div className="flex items-center justify-center">

                    </div>
                </div>
                ))}  
            </div>        
        </div>
    </div>
    );
};

export default Portfolio;