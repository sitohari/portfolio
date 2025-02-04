import React from "react";

const NavbarComponent = () => {
  return (
    <nav className="
        fixed z-20 flex justify-around gap-4 border border-gray-200 bg-white/50 p-2 
        shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 rounded-full 
        transition-all duration-300

        /*  Mobile & Tablet */
        bottom-4 left-1/2 -translate-x-1/2 w-auto min-w-[320px] sm:justify-around 

        /* 🖥️ Desktop */
        md:top-1/2 md:left-6 md:-translate-y-1/2 md:flex-col md:min-w-[64px] md:left-20 
    ">
      {[
        { href: "/", img: "/images/home-white-icon.svg", label: "Home" },
        { href: "#", img: "/images/profile-white-icon.svg", label: "Profile" },
        { href: "#", img: "/images/project-white-icon.svg", label: "Projects" },
        { href: "#", img: "/images/resume-white-icon.svg", label: "Resume" },
      ].map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="group flex items-center justify-center gap-2 rounded-full p-2 transition-all duration-300 
          text-gray-700 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 
          md:flex-col md:w-full sm:px-4"
        >
          <img src={item.img} alt={item.label} className="w-6 h-6 transition-all duration-300 group-hover:scale-110" />
          <small className="text-xs font-medium hidden sm:block">{item.label}</small>
        </a>
      ))}
    </nav>
  );
};

export default NavbarComponent;
