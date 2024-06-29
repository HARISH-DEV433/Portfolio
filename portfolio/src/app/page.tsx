import Image from "next/image";
import HomeBar from "./components/Home";
import { ReactNode } from "react";
import About from "./components/About";


export default function Home() {
  return (
    <div>
      <HomeBar/>
      <About />
    </div>
  );
}
