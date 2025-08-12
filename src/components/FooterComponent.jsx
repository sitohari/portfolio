import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowUp } from 'react-icons/fi';

// --- DATA (Bisa disesuaikan) ---
const socialLinks = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  email: "mailto:youremail@example.com",
};
const currentYear = new Date().getFullYear();
const yourName = "Your Name";


const FooterComponent = () => {
  // Fungsi untuk scroll ke atas halaman
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="text-gray-400 relative pt-12 pb-8">
      
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">

          {/* Kolom Kiri: Call to Action */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-1">Let's Connect</h3>
            <p className="text-purple-300/80">Tertarik untuk berkolaborasi atau sekadar menyapa?</p>
          </div>

          {/* Kolom Kanan: Link Media Sosial */}
          <div className="flex justify-center gap-5">
            <motion.a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800/50 hover:bg-violet-600 transition-colors duration-300"
              whileHover={{ y: -4, scale: 1.1 }}
              title="GitHub"
            >
              <FiGithub size={20} />
            </motion.a>
            <motion.a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800/50 hover:bg-violet-600 transition-colors duration-300"
              whileHover={{ y: -4, scale: 1.1 }}
              title="LinkedIn"
            >
              <FiLinkedin size={20} />
            </motion.a>
            <motion.a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800/50 hover:bg-violet-600 transition-colors duration-300"
              whileHover={{ y: -4, scale: 1.1 }}
              title="Twitter"
            >
              <FiTwitter size={20} />
            </motion.a>
             <motion.a
              href={socialLinks.email}
              className="p-2 rounded-full bg-gray-800/50 hover:bg-violet-600 transition-colors duration-300"
              whileHover={{ y: -4, scale: 1.1 }}
              title="Email"
            >
              <FiMail size={20} />
            </motion.a>
          </div>
        </div>

        {/* Garis Pemisah Bawah */}
        <div className="my-6 border-t border-gray-800"></div>

        {/* Bagian Bawah Footer */}
        <div className="text-center text-sm text-gray-500">
          <p>&copy; {currentYear} {yourName}. Dibuat dengan ♡ dan secangkir kopi.</p>
        </div>
      </div>

      {/* Tombol Kembali ke Atas */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-violet-600 text-white p-3 rounded-full shadow-lg shadow-purple-500/30 backdrop-blur-sm"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        whileHover={{ scale: 1.1, backgroundColor: '#7f22fe' }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        title="Kembali ke atas"
      >
        <FiArrowUp size={22} />
      </motion.button>
    </footer>
  );
};

export default FooterComponent;