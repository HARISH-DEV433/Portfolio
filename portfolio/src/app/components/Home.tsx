import next from "next";
import { Children, ReactNode } from "react";
import Aurora from "./Aurora";

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
