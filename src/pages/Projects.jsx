import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Desc: Import all components
import ProjectComponent from '../components/ProjectComponent';

// 1. Impor data proyek dari file eksternal
import { projects } from '../assets/projects'; 

// --- Komponen Halaman Proyek ---
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <>

      {/* Section Projects */}
      <section className="projects-content min-h-screen py-20 bg-[#060010] text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Judul Section */}
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-4 "
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

          {/* Tombol Filter */}
          <motion.div 
            className="flex justify-center flex-wrap gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300  ${
                  activeFilter === category
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Grid Proyek */}
          <motion.div 
            layout 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <ProjectComponent {...project} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
        </div>
      </section>
    </>
  );
}

export default Projects;
