import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiAward, FiBriefcase, FiCalendar } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';

// Import Section components


// --- DATA DIRI (Ganti sesuai kebutuhan Anda) ---
const profileData = {
  name: "Mohamad Tohari Maolana",
  title: "Web Developer",
  profilePicture: "/images/thumbnail-project1.png",
  bio: "Saya adalah seorang arsitek digital yang bersemangat dalam membangun jembatan antara imajinasi dan interaksi. Berawal dari rasa penasaran terhadap bagaimana internet bekerja, saya kini mendedikasikan diri untuk merancang dan mengembangkan aplikasi web yang tidak hanya berfungsi dengan baik, tetapi juga memberikan pengalaman yang tak terlupakan. Bagi saya, setiap baris kode adalah sapuan kuas di atas kanvas digital.",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:youremail@example.com",
  },
  timeline: [
    {
      icon: <FiBriefcase />,
      date: "2023 - Sekarang",
      title: "Senior Frontend Developer",
      company: "Innovatech Solutions",
      description: "Memimpin pengembangan antarmuka untuk produk SaaS utama perusahaan, meningkatkan performa sebesar 30%."
    },
    {
      icon: <FiBriefcase />,
      date: "2020 - 2023",
      title: "Mid-Level Web Developer",
      company: "Digital Creations",
      description: "Mengembangkan dan memelihara berbagai website klien, dari landing page hingga platform e-commerce kompleks."
    },
    {
      icon: <FiCalendar />,
      date: "2016 - 2020",
      title: "Studi Teknik Informatika",
      company: "Universitas Teknologi",
      description: "Mendalami dasar-dasar ilmu komputer, algoritma, dan struktur data."
    }
  ],
  achievements: [
    {
      icon: <FiAward />,
      title: "Awwwards Site of the Day",
      description: "Meraih penghargaan untuk desain interaktif pada proyek 'Project Nebula'."
    },
    {
      icon: <FiGithub />,
      title: "Top 10 Trending Developer",
      description: "Masuk dalam daftar developer trending di GitHub Indonesia selama seminggu."
    },
    {
      icon: <FiAward />,
      title: "Hackathon Winner",
      description: "Juara pertama dalam kompetisi hackathon nasional dengan aplikasi 'EcoConnect'."
    }
  ]
};

// --- Helper Components ---

// Komponen untuk animasi saat elemen di-scroll ke view
const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mb-24"
    >
      {children}
    </motion.div>
  );
};


// Komponen untuk Judul Section
const SectionTitle = ({ children }) => (
  <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-b from-purple-400 to-white">
    {children}
  </h2>
);

// --- Main Page Component ---
const About = () => {
  const [showOpening, setShowOpening] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowOpening(false), 3000); // Durasi opening screen
    return () => clearTimeout(timer);
  }, []);

  // Varian animasi untuk opening text
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: { duration: 0.5 }
    }
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen w-full text-white font-sans overflow-x-hidden">
      

      {/* --- Section 1: Opening Screen --- */}
      <AnimatePresence>
        {showOpening && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-[#0D1117] z-50"
            exit={{ opacity: 0 }}
          >
            <motion.h1
              className="text-5xl font-bold text-center"
              variants={sentence}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {"Welcome to my world.".split("").map((char, index) => (
                <motion.span key={index} variants={letter} className={char === " " ? "" : "bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Main Content Container --- */}
      <motion.div
        className="max-w-4xl mx-auto px-6 py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: showOpening ? 0 : 1 }}
        transition={{ delay: showOpening ? 3.5 : 0.5, duration: 1 }}
      >
        

        {/* --- Section 2: Biography --- */}
        <AnimatedSection>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.img
              src={profileData.profilePicture}
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover border-4 border-purple-500 shadow-lg shadow-purple-500/40"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
            />
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {profileData.name}
              </h1>
              <p className="text-xl text-purple-300 font-light mb-4">{profileData.title}</p>
              <p className="text-gray-300 leading-relaxed">{profileData.bio}</p>
              <div className="flex justify-center md:justify-start gap-6 mt-6 text-gray-400">
                <motion.a href={profileData.socials.github} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, color: '#FFFFFF' }}><FiGithub size={24} /></motion.a>
                <motion.a href={profileData.socials.linkedin} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, color: '#FFFFFF' }}><FiLinkedin size={24} /></motion.a>
                <motion.a href={profileData.socials.twitter} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, color: '#FFFFFF' }}><FiTwitter size={24} /></motion.a>
                <motion.a href={profileData.socials.email} whileHover={{ scale: 1.2, color: '#FFFFFF' }}><FiMail size={24} /></motion.a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* --- Section 3: Timeline --- */}
        <AnimatedSection>
          <SectionTitle>My Journey</SectionTitle>
          <div className="relative">
            {/* The vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-purple-800/30"></div>
            {profileData.timeline.map((item, index) => {
              const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
              const isEven = index % 2 === 0;
              return (
                <div ref={ref} key={index} className="flex items-center w-full mb-8">
                  <motion.div
                    className={`w-1/2 flex ${isEven ? 'justify-end' : 'justify-start'}`}
                    initial={{ x: isEven ? -100 : 100, opacity: 0 }}
                    animate={{ x: inView ? 0 : (isEven ? -100 : 100), opacity: inView ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className={`w-11/12 p-6 rounded-lg bg-gray-900/50 border border-purple-100/20 shadow-lg ${isEven ? 'text-right' : 'text-left'}`}>
                      <p className="text-sm text-purple-400 mb-1">{item.date}</p>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-md text-gray-400 mb-2">{item.company}</p>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </motion.div>
                  {/* The dot on the timeline */}
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gray-900 border-2 border-purple-500 flex items-center justify-center text-purple-400"
                    initial={{ scale: 0 }}
                    animate={{ scale: inView ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {item.icon}
                  </motion.div>
                   <div className="w-1/2"></div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>

        {/* --- Section 4: Achievements --- */}
        <AnimatedSection>
          <SectionTitle>Achievements</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {profileData.achievements.map((ach, index) => {
               const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
              return (
                 <motion.div
                    ref={ref}
                    key={index}
                    className="p-6 rounded-lg bg-gray-900/50 border border-purple-500/20 text-center flex flex-col items-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    whileHover={{ y: -10, scale: 1.05, boxShadow: "0px 10px 30px rgba(128, 90, 213, 0.3)" }}
                  >
                    <div className="text-5xl text-purple-400 mb-4">{ach.icon}</div>
                    <h3 className="text-lg font-bold mb-2">{ach.title}</h3>
                    <p className="text-sm text-gray-400">{ach.description}</p>
                 </motion.div>
              );
            })}
          </div>
        </AnimatedSection>

      </motion.div>

    </div>
  );
};

export default About;