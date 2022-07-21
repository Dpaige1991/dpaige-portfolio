import React from "react";
import unity from "../assets/unitylogo.png";
import unreal from "../assets/unreal.png";
import roblox from "../assets/roblox.png";
import construct3 from "../assets/construct3.png";
import blender from "../assets/Blender.png";
import python from "../assets/python.png";
import photoshop from "../assets/photoshop.png";
import oculus_2 from "../assets/oculus_2.png";

const Experience = () => {

    const techs = [
        {
            id:1,
            src: unity,
            title: 'Unity',
            style: 'shadow-white'
        },
        {
            id:2,
            src: unreal,
            title: 'Unreal',
            style: 'shadow-white'
        },
        {
            id:3,
            src: roblox,
            title: 'Roblox',
            style: 'shadow-red-500'
        },
        {
            id:4,
            src: construct3,
            title: 'Construct 3',
            style: 'shadow-green-500'
        },
        {
            id:5,
            src: blender,
            title: 'Blender',
            style: 'shadow-orange-500'
        },
        {
            id:6,
            src: python,
            title: 'Python',
            style: 'shadow-yellow-500'
        },
        {
            id:7,
            src: photoshop,
            title: 'Photoshop',
            style: 'shadow-blue-500'
        },
        {
            id:8,
            src: oculus_2,
            title: 'VR',
            style: 'shadow-white'
        },
    ];

    return (
        <div name= 'experience' className="bg-gradient-to-b
        from-gray-800 to-black w-full h-screen">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col
            justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4
                    border-gray-500 p-2 inline">
                        Experience
                    </p>
                    <p className="py-6">

                    </p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3
                gap-8 text-center py-8 px-12 sm:px-0">
                    {techs.map(({id, src, title, style}) => (
                    <div 
                    key={id}
                    className={`shadow-md hover:scale-105 duration-500
                    py-2 rounded-lg ${style}`}
                    >
                        <img src={src} alt="" className="w-20 mx-auto" />
                        <p className="mt-4">{title}</p>
                    </div>        
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;