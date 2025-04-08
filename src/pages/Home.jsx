import { links, technologies, } from "../assets/data";
import { projects} from "../assets/projects";

// Desc: Import all components and create a Home component
import ProjectComponent from '../components/ProjectComponent';
import { ButtonSecondary } from '../components/ButtonSecondary';
import { FooterComponent } from '../components/FooterComponent';
import NavbarComponent from '../components/NavbarComponent';
import InfiniteScrollTech from '../components/InfiniteScrollTech';
import TimeLineComponent from '../components/TimeLineComponent';

const Home = () => {
  
  return (
  <>
    {/* Section Navbar */}
    <NavbarComponent/>

    {/* Section Hero */}
    <section className="hero-content pt-26 bg-[#0D1117]">
      <div className="container mx-auto px-4 max-w-[800px] text-start animate-fade-in">
        <div className="flex items-center gap-2 py-2 rounded-full text-[#f1f4f5] text-normal font-medium">
          <img src="/images/status-online-icon.svg" alt="Online" className="w-4 h-4" />
            <span>Online.</span>
        </div>
        <h1 className="font-roboto  text-5xl md:text-5xl lg:text-6xl font-bold text-[#f1f4f5] leading-tight">
          Turning ideas into real life <br />
          products is{" "}
          <span className="bg-gradient-to-r from-[#5E00FF] to-[#FF0000] text-transparent bg-clip-text animate-gradient-move">
            my calling
          </span>{" "}
          🚀
        </h1>
        <div className="flex flex-row gap-3 my-6">
          {links.map((button) => (
            <ButtonSecondary 
            key={button.label} 
            icon={button.icon} 
            label={button.label} 
            link={button.link}
            />
          ))}
        </div>
        <p className="font-roboto text-lg text-[#8B949E] leading-relaxed">
          Hi, I am Mohamad Tohari Maolana, an experienced web developer from
          Indonesia. I specialize in crafting modern, functional websites tailored
          to your needs. Ready to build your dream website?
        </p>
      </div>
    </section>

      {/* Section Tech Stack Scroll - Updated with enhanced InfiniteScrollTech */}
      <section className="tech-stack-scroll bg-[#0D1117] ">
      <div className="container mx-auto px-4 max-w-[800px]">
      <InfiniteScrollTech 
          items={technologies} 
          direction="left" 
          speed="normal" 
          gap={16} 
        />
      </div>
      </section>

    {/* Section TimeLine */}
    <TimeLineComponent />

    {/* Section Projects */}
    <section className="projects-content pb-12 bg-[#0D1117]">
      <div className="container mx-auto px-4 max-w-[800px]">
        <h2 className="text-3xl font-bold text-start mb-8 text-[#f1f4f5]">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectComponent key={project.id} {...project} />
        ))}
        </div>
        <div className="border-t border-gray-700 mt-12 w-full  mx-auto"></div>
      </div>
    </section>

    {/* Section Footer */}
    <FooterComponent />
  </>
  );
}

export default Home