import next from "next";
import ResponsiveParagraph from "../subcomponents/Responsiveparagraph";

const About = () => {
  return (
    <div className="bg-white h-screen" id="about">
      <div className="text-black flex justify-center p-4 text-2xl font-semibold">
        About
      </div>
      <div>
        <ResponsiveParagraph />
      </div>
    </div>
  );
};

export default About;
