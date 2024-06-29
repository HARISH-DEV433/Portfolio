"use client";
import { cn } from "../utils/cn";
import React, { ReactNode } from "react";
import Link from "next/link";
import Type from "./Typewrittereffect";
import Navbar from "../components/Navbar";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  showRadialGradient?: boolean;
}

const Aurora = ({
  className,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col  h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-900  text-slate-950 transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Navbar />
          <div className="relative py-28 flex justify-center items-center text-black">
            <div className="flex flex-col space-y-6 text-black text-4xl">
              <div className="flex relative text-4xl">
                Hi there!<p className="text-black font-semibold">I'm Harish.</p>
              </div>
              <div className="text-center">
                <Type />
              </div>
              <div className="flex items-center justify-center relative text-center">
                <Link href="#about">
                  <span className="inline-block animate-bounce rounded-full p-4 bg-indigo-100 text-white text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="black"
                      className="bi bi-arrow-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div
            //   I'm sorry but this is what peak developer performance looks like // trigger warning
            className={cn(
              `
            [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] opacity-50 will-change-transform`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>
      </div>
    </main>
  );
};

export default Aurora;
