import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const TimeLineComponent = () => {
    const timelineRef = useRef(null);
    const isInView = useInView(timelineRef, { once: true, amount: 0.2 });
    const controls = useAnimation();

    const timelineData = [
        {
        date: "March 2023",
        title: "Certified & Ready to Innovate",
        description: "Earned the BNSP Certificate in Computer Programming, proving my skills and readiness to tackle real-world tech challenges."
        },
        {
        date: "May 2023",
        title: "Building a Strong Tech Foundation",
        description: "Graduated from Vocational High School majoring in Software Engineering, mastering coding, problem-solving, and software development fundamentals."
        },
        {
        date: "September 2023",
        title: "Advancing with a Passion for Innovation",
        description: "Embarked on my academic journey at Pamulang University, majoring in Informatics Engineering, eager to explore cutting-edge technologies and create impactful solutions."
        }
    ];

    // Container animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
            delayChildren: 0.2,
            duration: 0.5
        }
        }
    };

    // Title animation variants
    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
        }
        }
    };

    // Timeline item variants
    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.1,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.2
        }
        }
    };

    // Circle dot variants
    const dotVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.1,
            ease: "backOut"
        }
        }
    };

    // Content variants with timeline sequence
    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
        }
    };

    // Divider line variants
    const dividerVariants = {
        hidden: { scaleX: 0, originX: 0 },
        visible: {
        scaleX: 1,
        transition: {
            duration: 0,
            ease: [0.22, 1, 0.36, 1],
            delay: 1.2
        }
        }
    };

    useEffect(() => {
        if (isInView) {
        controls.start("visible");
        }
    }, [controls, isInView]);

    return (
        <section className="time-line pb-12 bg-[#0d1117]" ref={timelineRef}>
        <div className="container mx-auto px-4 max-w-[800px]">
            <motion.h2 
            className="text-3xl font-bold text-start mb-8 text-[#f1f4f5]"
            variants={titleVariants}
            initial="hidden"
            animate={controls}
            >
            My Timeline
            </motion.h2>
            
            <motion.ol 
            className="relative border-s border-gray-700 dark:border-gray-700"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            >
            {timelineData.map((item, index) => (
                <motion.li 
                className={`mb-${index === timelineData.length - 1 ? '0' : '10'} ms-4`}
                key={item.date}
                variants={itemVariants}
                >
                <motion.div 
                    className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
                    variants={dotVariants}
                ></motion.div>
                
                <motion.div variants={contentVariants}>
                    <motion.time 
                    className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.4 }}
                    >
                    {item.date}
                    </motion.time>
                    
                    <motion.h3 
                    className="text-lg font-semibold text-white"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.4, duration: 0.5 }}
                    >
                    {item.title}
                    </motion.h3>
                    
                    <motion.p 
                    className="text-base font-normal text-[#8B949E] dark:text-gray-400"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.4, duration: 0.5 }}
                    >
                    {item.description}
                    </motion.p>
                </motion.div>
                </motion.li>
            ))}
            </motion.ol>
            
            <motion.div 
            className="border-t border-gray-700 mt-12 w-full mx-auto"
            variants={dividerVariants}
            initial="hidden"
            animate={controls}
            ></motion.div>
        </div>
        </section>
    );
    };

    export default TimeLineComponent;