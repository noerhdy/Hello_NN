import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const NavDoc = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const getClassName = (index) => {
    if (hoveredIndex !== null) {
      if (index === hoveredIndex) {
        return "w-14 h-14 mt-0 transition-all duration-100 ease-[cubic-bezier(0.25, 1, 0.5, 1)]";
      }
      if (index === hoveredIndex - 1 || index === hoveredIndex + 1) {
        return "w-11 h-11 mt-2 transition-all duration-100 ease-[cubic-bezier(0.25, 1, 0.5, 1)]";
      }
    }
    return "w-10 h-10 mt-1 transition-all duration-100 ease-[cubic-bezier(0.25, 1, 0.5, 1)]";
  };

  const getSpanClassName = (index) => {
    if (index === hoveredIndex) {
      return "visible text-white p-1 text-sm -top-10 -ml-5 absolute px-2 rounded-md bg-[#37B59F]";
    }
    return "text-xs absolute -ml-5 -top-8 opacity-0";
  };

  const icons = [
    {
      name: "Gmail",
      url: "https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=hidayatnoer11@gmail.com",
      src: "/img/app/gm.webp",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/nur-hidayat21/",
      src: "/img/app/in.webp",
    },
    {
      name: "Github",
      url: "https://github.com/noerhdt",
      src: "/img/app/git.webp",
    },
    { name: "X", url: "https://twitter.com/Noer1114", src: "/img/app/x.webp" },
  ];

  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Outlet />
      <div className="fixed inset-x-0 bottom-0 flex h-16 mb-2 items-center">
        <div className="mx-auto relative flex h-[64px] items-end gap-4 md:gap-2 rounded-2xl backdrop-blur-sm backdrop-filter border border-neutral-800/5 bg-gradient-to-t from-zinc-950/5 dark:bg-gradient-to-t dark:from-neutral-100/5 from-5% px-6 pb-2 dark:bg-zinc-900/5 md:px-4">
          {icons.map((icon, index) => (
            <button
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onClick={() => handleClick(icon.url)}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <span className={getSpanClassName(index)}>{icon.name}</span>
              <img
                className={`aspect-square rounded-md ${getClassName(index)}`}
                src={icon.src}
                alt={icon.name}
              />
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavDoc;
