import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload } from 'react-icons/fa';

import { projects } from "../assets/projects";
import { technologies } from "../assets/data";


import ProjectComponent from '../components/ProjectComponent';
import InfiniteScrollTech from '../components/InfiniteScrollTech';
import TimeLineComponent from '../components/TimeLineComponent';

const Home = () => {
  return (
    <>
     

<section className="hero-content relative pt-[150px]">
  <div className="container mx-auto px-4 max-w-4xl text-start">

    {/* Status Online */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-2 py-2 px-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-sm font-medium w-fit "
    >
      <img src="/images/status-online-icon.svg" alt="Online" className="w-4 h-4" />
      <span>Online.</span>
    </motion.div>

    {/* Judul */}
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="font-roboto text-5xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mt-4 drop-shadow-[0_0_10px_rgba(139,92,246,0.35)]"
    >
      Turning ideas into real life <br />
      products is{" "}
      <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-purple-500/50  text-transparent bg-clip-text animate-gradient-move drop-shadow-[0_0_15px_rgba(192,132,252,0.5)]">
        my calling
      </span>{" "}
      🚀
    </motion.h1>

    {/* Tombol */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="flex flex-row gap-4 my-6"
    >
      {/* Primary Button */}
      <a
        href="#projects"
        className="group flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white px-6 py-3 rounded-xl shadow-lg shadow-violet-500/30 transition-all duration-300 hover:scale-105"
      >
        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        View Projects
      </a>

      {/* Secondary Button */}
      <a
        href="/resume.pdf"
        className="group flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/15 text-white px-6 py-3 rounded-xl hover:bg-white/10 transition-all duration-300 shadow-md hover:scale-105"
      >
        <FaDownload className="transition-transform duration-300 group-hover:-translate-y-0.5" />
        Download CV
      </a>
    </motion.div>

    {/* Deskripsi */}
    <motion.p
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.45 }}
      className="font-roboto text-lg text-[#A6A8BC] leading-relaxed max-w-2xl"
    >
      Hi, I am Mohamad Tohari Maolana, an experienced web developer from
      Indonesia. I specialize in crafting modern, functional websites tailored
      to your needs. Ready to build your dream website?
    </motion.p>
  </div>
</section>

      {/* Tech Stack Scroll */}
      <section className="tech-stack-scroll mt-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <InfiniteScrollTech
            items={technologies}
            direction="left"
            speed="normal"
            gap={16}
          />
        </div>
      </section>

      {/* TimeLine */}
      <TimeLineComponent />

      {/* Projects */}
      <section className="projects-content pb-12 mt-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Creations
          </motion.h2>

          <motion.p
            className="text-center text-gray-400 mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Berikut adalah beberapa proyek pilihan yang telah saya kerjakan.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-xl p-4 hover:bg-white/10 transition"
              >
                <ProjectComponent {...project} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
