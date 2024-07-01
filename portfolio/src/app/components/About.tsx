import next from "next";
import Responsiveparagraph from "./Responsiveparagraph";

const About = () => {
  return (
    <div className="bg-white h-screen" id="about">
      <div className="text-black flex justify-center p-4 text-2xl font-semibold">
        About
      </div>
      <div>
        <Responsiveparagraph />
      </div>
    </div>
  );
};

export default About;
