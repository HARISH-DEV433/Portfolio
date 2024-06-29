import next from "next";
import React from "react";
import TypewriterComponent from "typewriter-effect";

const Type = () => {
    return(
        <div className="text-4xl text-violet-600">
            <TypewriterComponent 
                onInit={(typewriter) => {
                    typewriter.typeString("Web devoloper").pauseFor(2000).deleteAll().typeString("Graphic Designer").pauseFor(2000).deleteAll().typeString("UI/UX Designer").pauseFor(2000).deleteAll().typeString("Freelancer").start();
                }}
                options={{ loop: true }}
            />
        </div>
    )
}

export default Type;