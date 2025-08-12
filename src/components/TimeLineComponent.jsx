import React from 'react'; 
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar, FiAward } from 'react-icons/fi';

import { profileData } from '../assets/data';

const TimelineComponent = () => {
  const iconMap = {
    FiBriefcase: <FiBriefcase />,
    FiCalendar: <FiCalendar />,
    FiAward: <FiAward />,
  };

  const timelineData = profileData.timeline;

  if (!Array.isArray(timelineData)) return null;

  return (
    <div className="relative mb-24 text-white max-w-4xl mx-auto px-4">
      {/* Judul Section */}
      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-center mb-4  "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Timeline
      </motion.h2>
      <motion.p 
        className="text-center text-gray-400 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Berikut adalah perjalanan karir saya yang telah saya lalui.
      </motion.p>

      <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-purple-800/30" aria-hidden="true"></div>
      
      {timelineData.map((timeline, index) => {
        const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
        const isEven = index % 2 === 0;
        const IconComponent = iconMap[timeline.icon] || <FiCalendar />;

        return (
          <div ref={ref} key={index} className="flex items-center w-full mb-8">
            <motion.div
              className={`w-1/2 flex ${isEven ? 'justify-end' : 'justify-start'}`}
              initial={{ x: isEven ? -100 : 100, opacity: 0 }}
              animate={{ x: inView ? 0 : (isEven ? -100 : 100), opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className={`w-11/12 p-6 rounded-lg bg-gray-900/50 border border-purple-500/20 shadow-lg ${isEven ? 'text-right' : 'text-left'}`}>
                <p className="text-sm text-purple-400 mb-1">{timeline.date}</p>
                <h3 className="text-xl font-bold mb-1">{timeline.title}</h3>
                <p className="text-md text-gray-400 mb-2">{timeline.company}</p>
                <p className="text-sm text-gray-500">{timeline.description}</p>
              </div>
            </motion.div>

            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gray-900 border-2 border-purple-500 flex items-center justify-center text-purple-400"
              initial={{ scale: 0 }}
              animate={{ scale: inView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {IconComponent}
            </motion.div>

            <div className="w-1/2"></div>
          </div>
        );
      })}
    </div>
  );
};

export default TimelineComponent;
