import Image from "next/image";
import Navbar from "./components/Navbar";
import { Layout } from "./components/layout";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Layout />
    </div>
  );
}
