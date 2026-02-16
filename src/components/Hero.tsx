"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

const TECH_ICONS = [
    { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
    { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", bg: true, color: "#000000" },
    { name: "Tailwind", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", color: "#38B2AC" },
    { name: "Redux", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", color: "#764ABC" },
    { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
    { name: "Express", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", bg: true, color: "#000000" },
    { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
    { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#47A248" },
    { name: "AWS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", bg: true, color: "#FF9900" },
    { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
    { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#336791" },
    { name: "MySQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479A1" },
];

const Hero = () => {
    const [radius, setRadius] = useState(240);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setRadius(140); // Smaller radius for mobile
            } else {
                setRadius(240); // Original radius for desktop
            }
        };

        handleResize(); // Set initial size
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Ordered blast animation helper
    const calculatePosition = (index: number, total: number) => {
        const angle = (360 / total) * index - 90; // Evenly spaced, starting from top
        const rad = (angle * Math.PI) / 180;
        return {
            x: Math.cos(rad) * radius,
            y: Math.sin(rad) * radius,
        };
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-16">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left order-2 lg:order-1 relative z-20"
                    >
                        <h2 className="text-xl md:text-2xl text-cyan-400 font-medium mb-4">
                            Hello, I'm
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                            Abhinand SD
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                            A passionate Full Stack Developer crafting modern, responsive, and user-friendly web experiences.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <a
                                href="#projects"
                                className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-full transition-colors flex items-center gap-2"
                            >
                                View Projects
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href="/resume.pdf"
                                download
                                className="px-8 py-3 border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 font-medium rounded-full transition-all flex items-center gap-2"
                            >
                                <Download className="w-4 h-4" />
                                Download CV
                            </a>
                        </div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center lg:justify-end order-1 lg:order-2 relative"
                    >
                        <div className="relative w-56 h-56 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-linear-to-tr from-cyan-500 to-purple-500 rounded-full blur-[30px] opacity-30 animate-pulse" />

                            {/* Tech Icons Blast */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                {TECH_ICONS.map((icon, index) => {
                                    const pos = calculatePosition(index, TECH_ICONS.length);
                                    return (
                                        <motion.div
                                            key={icon.name}
                                            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                                            animate={{
                                                opacity: 1,
                                                scale: 1,
                                                x: pos.x,
                                                y: pos.y
                                            }}
                                            transition={{
                                                delay: 0.8 + (index * 0.1), // Staggered delay for ordered blast
                                                type: "spring",
                                                stiffness: 100,
                                                damping: 15
                                            }}
                                            className="absolute pointer-events-auto z-10 hover:z-30 -ml-6 -mt-6 md:-ml-8 md:-mt-8" // Enable pointer events for hover, stack handling, and centering
                                            style={{ left: '50%', top: '50%' }} // Center origin
                                        >
                                            <div className="relative group">
                                                <motion.div
                                                    animate={{ y: [0, -10, 0] }}
                                                    transition={{
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        ease: "easeInOut",
                                                        delay: index * 0.2
                                                    }}
                                                    className={`w-12 h-12 md:w-16 md:h-16 ${icon.bg ? 'bg-white p-2' : 'bg-slate-800/90 p-3'} backdrop-blur-md rounded-full border border-white/10 shadow-2xl flex items-center justify-center hover:scale-110 hover:border-cyan-500/50 transition-all cursor-pointer z-10`}
                                                >
                                                    <div className="relative w-full h-full">
                                                        <img
                                                            src={icon.url}
                                                            alt={icon.name}
                                                            className="w-full h-full object-contain filter group-hover:brightness-110"
                                                        />
                                                    </div>
                                                </motion.div>

                                                {/* Tooltip */}
                                                <div
                                                    className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20"
                                                    style={{ backgroundColor: icon.color }}
                                                >
                                                    {icon.name}
                                                    {/* Little triangle pointer */}
                                                    <div
                                                        className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent"
                                                        style={{ borderBottomColor: icon.color }}
                                                    />
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Image Container */}
                            <div className="relative w-full h-full rounded-full border-4 border-slate-800 overflow-hidden shadow-2xl z-20 bg-slate-900">
                                <Image
                                    src="/profile.jpeg"
                                    alt="Abhinand SD"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
            >
                <div className="w-[30px] h-[50px] rounded-3xl border-2 border-slate-500 flex justify-center p-2">
                    <motion.div
                        animate={{
                            y: [0, 24, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                        className="w-1.5 h-1.5 rounded-full bg-cyan-500 mb-1"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
