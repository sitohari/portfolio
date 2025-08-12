import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import ParticlesBackground from "../components/ParticlesBackground";

import React from 'react'

export const Layout = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#060010]">
        <ParticlesBackground />
        <NavbarComponent />
        <main className="flex-grow">
            {children}
        </main>
        <FooterComponent />
    </div>
  )
}
