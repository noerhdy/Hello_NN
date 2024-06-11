import { ModeToggle } from "@/components/mode-toggle";
import React from "react";

const HeaderSection = () => {
  return (
    <>
      <header className="flex-1 mt-12">
        <div className="grid grid-cols-4  mx-4 py-8 text-center ">
          <div className="col-span-3  items-start flex ">
            <div className="flex flex-col justify-center items-start dark:text-zinc-50 ">
              <h1>Nur hidayat</h1>
              <div className="flex justify-center items-center py-1">
                <span className="relative flex h-2 w-2 ">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="font-normal tracking-normal ms-2 dark:text-zinc-300 cursor-default">
                  available for work
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-end items-center ">
            <div className="flex flex-col ">
              <ModeToggle />
            </div>
          </div>
          <div className="col-span-4 lg:col-span-3 mt-8 ">
            <p>
              Hi, I'm someone just starting out in the web development field,
              I'm self-taught with a basic understanding of UI and graphic
              design.
            </p>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderSection;
