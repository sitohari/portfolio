import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const InfiniteScrollTech = ({ items, direction = 'left', speed = 'normal', gap = 20 }) => {
  const containerRef = useRef(null);
  const [duplicatedItems, setDuplicatedItems] = useState([]);
  const controls = useAnimation();
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  
  const speedMap = {
    slow: 15,
    normal: 25,
    fast: 40
  };
  
  const selectedSpeed = speedMap[speed] || speedMap.normal;
  
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  
  useEffect(() => {  
    let duplicated = [];
    const multiplier = 10; 
    
    for (let i = 0; i < multiplier; i++) {
      const newItems = items.map((item, index) => ({
        ...item,
        id: `${item.name}-${i}-${index}`
      }));
      duplicated = [...duplicated, ...newItems];
    }
    
    setDuplicatedItems(duplicated);
  }, [items]);
  
  
  const itemWidth = 120 + gap; 
  const totalWidth = items.length * itemWidth;
  
  return (
    <div 
      ref={containerRef} 
      className="w-full overflow-hidden relative py-12"
    >
      
      <div className="absolute top-0 left-0 h-full w-[20%] bg-gradient-to-r from-[#060010] to-transparent z-10"></div>
      <div className="absolute top-0 right-0 h-full w-[20%] bg-gradient-to-l from-[#060010] to-transparent z-10"></div>
      
      <motion.div 
        className="flex whitespace-nowrap items-center"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1], 
              staggerChildren: 0.05 
            }
          }
        }}
      >
        <motion.div
          className="flex whitespace-nowrap items-center"
          style={{ gap: `${gap}px` }}
          animate={{
            x: direction === 'left' 
              ? [0, -totalWidth] 
              : [-totalWidth, 0]
          }}
          transition={{
            x: {
              duration: totalWidth / selectedSpeed,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }
          }}
        >
          {duplicatedItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="flex items-center bg-[#161B22] rounded-full px-4 py-2 border border-[#30363D] transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.9 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { 
                    duration: 0.5,
                    delay: index * 0.03 % 0.5 
                  }
                }
              }}
            >
              <div className="w-8 h-8 flex items-center justify-center mr-2 flex-shrink-0">
                <img 
                  src={item.icon} 
                  alt={item.name} 
                  className="max-w-full max-h-full object-contain" 
                />
              </div>
              <span className="text-[#f1f4f5] text-sm font-medium whitespace-nowrap">{item.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InfiniteScrollTech;