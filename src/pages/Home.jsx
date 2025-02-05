import { buttons, technologies } from "../assets/data";

// Desc: Import all components and create a Home component
import TechCard from '../components/TechCardComponent'
import ProjectComponent from '../components/ProjectComponent';
import { ButtonSecondary } from '../components/ButtonSecondary';
import { FooterComponent } from '../components/FooterComponent';
import NavbarComponent from '../components/NavbarComponent';

const Home = () => {

  return (
  <>
    {/* Section Navbar */}
    <NavbarComponent/>

    {/* Section Hero */}
    <section className="hero-content py-20 bg-[#0D1117]">
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
          {buttons.map((button) => (
            <ButtonSecondary key={button.label} icon={button.icon} label={button.label} />
          ))}
        </div>
        <p className="font-roboto text-lg text-[#8B949E] leading-relaxed">
          Hi, I am Mohamad Tohari Maolana, an experienced web developer from
          Indonesia. I specialize in crafting modern, functional websites tailored
          to your needs. Ready to build your dream website?
        </p>

      </div>
    </section>

    {/* Section TimeLine */}
    <section className="time-line pb-12 bg-[#0d1117]">
      <div className="container mx-auto px-4 max-w-[800px]">
        <h2 className="text-3xl font-bold text-start mb-8 text-[#f1f4f5]">My Timeine</h2>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2023</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Certified & Ready to Innovate</h3>
                <p className="mb-4 text-base font-normal text-[#8B949E] dark:text-gray-400"> Earned the BNSP Certificate in Computer Programming, proving my skills and readiness to tackle real-world tech challenges.</p>
            </li>
            <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Mey 2023</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white"> Building a Strong Tech Foundation</h3>
                <p className="text-base font-normal text-[#8B949E] dark:text-gray-400">Graduated from Vocational High School majoring in Software Engineering, mastering coding, problem-solving, and software development fundamentals.</p>
            </li>
            <li className="ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2023</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Advancing with a Passion for Innovation</h3>
                <p className="text-base font-normal text-[#8B949E] dark:text-gray-400">Embarked on my academic journey at Pamulang University, majoring in Informatics Engineering, eager to explore cutting-edge technologies and create impactful solutions.</p>
            </li>
        </ol>
        <div className="border-t border-gray-700 mt-12 w-full  mx-auto"></div>
      </div>
    </section>

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
    <section className="tech-content pb-12 bg-[#0D1117]">
      <div className="container mx-auto px-4 max-w-[90%] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px]">
        <h2 className="text-2xl sm:text-3xl font-bold text-start mb-6 text-[#f1f4f5]">Tech</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {technologies.map((tech) => (
            <TechCard key={tech.id} icon={tech.icon} name={tech.name} />
          ))}
        </div>
        <div className="border-t border-gray-700 mt-10 sm:mt-12 w-full md:w-[600px] lg:w-[800px] mx-auto"></div>
      </div>
    </section>

    {/* Section Footer */}
    <FooterComponent />
  </>
  );
}

export default Home