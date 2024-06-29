import next from "next";
import { Children, ReactNode } from "react";
import Aurora from "../subcomponents/Aurora";

const HomeBar = () => {
  return (
    <div>
      <div className="relative h-screen" id="home">
        <Aurora />
      </div>
    </div>
  );
};

export default HomeBar;
