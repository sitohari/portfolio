// src/components/ProjectComponent.jsx
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";

// Variants: fade-in dari opacity rendah + gerakan lembut dari bawah
const fadeInFromBottom = {
  hidden: { opacity: 0, y: 20 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: customDelay,
      ease: [0.25, 0.46, 0.45, 0.94], // smooth cubic bezier
    },
  }),
};

const ProjectComponent = ({ id, title, thumbnail, category, year, index }) => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  const handleClick = () => navigate(`/projects/${id}`);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className="group w-full max-w-md cursor-pointer transition-transform duration-300 hover:-translate-y-1"
      onClick={handleClick}
      variants={fadeInFromBottom}
      initial="hidden"
      animate={controls}
      custom={index * 0.25} // delay per item agar muncul satu-satu
    >
      <div className="rounded-xl shadow-md hover:shadow-lg overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-3 px-1">
        <h3 className="text-lg font-semibold text-[#f1f4f5]">{title}</h3>
        <div className="flex justify-between mt-1 text-[#8B949E]">
          <p className="text-sm">{category}</p>
          <p className="text-sm">{year}</p>
        </div>
      </div>
    </motion.div>
  );
};

ProjectComponent.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  index: PropTypes.number,
};

export default ProjectComponent;
