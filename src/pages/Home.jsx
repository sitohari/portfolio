import React from 'react'
import TechCard from '../components/TechCardComponent'
import ProjectComponent from '../components/ProjectComponent';

const Home = () => {
  const technologies = [
    { id: 1, name: "React", icon: "/images/skill-icons_react-dark.svg" },
    { id: 2, name: "Laravel", icon: "/images/skill-icons_laravel-dark.svg" },
    { id: 3, name: "Tailwind", icon: "/images/skill-icons_tailwindcss-dark.svg" },
    { id: 4, name: "Bootstrap", icon: "/images/skill-icons_bootstrap.svg" },
    { id: 5, name: "JS", icon: "/images/skill-icons_javascript.svg" },
    { id: 6, name: "PHP", icon: "/images/skill-icons_php-dark.svg" },
    { id: 7, name: "HTML", icon: "/images/skill-icons_html.svg" },
    { id: 8, name: "CSS", icon: "/images/skill-icons_css.svg" },
  ];

  return (
    <>
    <div className="hero-content">
      <div className="container mx-auto px-4 max-w-[800px] py-12">
        <h1 className="text-4xl font-bold text-start text-[#f1f4f5]">
          turning ideas into real life products is<br/> <span className="text-[#0969DA]">my calling 🚀</span>
        </h1>
        <p className="text-lg text-start text-[#f1f4f5]">
          I'm a Fullstack Developer based in Indonesia.
        </p>
      </div>
    </div>
    {/* Section Projects */}
    <section className="projects-content pb-12 bg-[#0D1117]">
      <div className="container mx-auto px-4 max-w-[800px]">
        <h2 className="text-3xl font-bold text-start mb-8 text-[#f1f4f5]">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"> {/* Hanya 2 kolom */}
          <ProjectComponent />
          <ProjectComponent />
        </div>
        <div className="border-t border-gray-700 mt-12 w-full  mx-auto"></div>
      </div>
    </section>
  
    {/* Section Tech */}
    <section className="tech-content py-12 bg-[#0D1117]">
      <div className="container mx-auto px-4 max-w-[800px]">
        <h2 className="text-3xl font-bold text-start mb-8 text-[#f1f4f5]">Tech</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech) => (
            <TechCard key={tech.id} icon={tech.icon} name={tech.name} />
          ))}
        </div>
        <div className="border-t border-gray-700 mt-12 w-full md:w-[800px] mx-auto"></div>
      </div>
    </section>
  </>
  );
}

export default Home