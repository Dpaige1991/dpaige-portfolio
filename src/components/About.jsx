import React from "react";

const About = () => {
    return (
    <div
        name="about"
        className="w-full h-screen bg-gradient-to-b 
        from-gray-800 to-black text-white"
    >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4
                border-gray-500">
                    About
                </p>
            </div>

            <p className="text-xl mt-20">
            Passionate instructor/developer with 8 years of experience contributing to open-source projects, maintaining strict coding standards, instructing students in virtual and in-person classroom setting.
Accustomed to working in fast-paced and deadline driven environments.
Experience with game development engines such as: Roblox, Unity, Unreal, Godot, Construct 3, and GameMaker.
            </p>

            <br/>

            <p className="text-xl">

            </p>
        </div>
    </div>
    );
};

export default About;