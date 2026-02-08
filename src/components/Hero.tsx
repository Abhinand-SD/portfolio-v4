"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-16">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left order-2 lg:order-1"
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
                                href="#contact"
                                className="px-8 py-3 border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 font-medium rounded-full transition-all flex items-center gap-2"
                            >
                                Contact Me
                            </a>
                        </div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex justify-center lg:justify-end order-1 lg:order-2"
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-linear-to-tr from-cyan-500 to-purple-500 rounded-full blur-[30px] opacity-30 animate-pulse" />

                            {/* Image Container */}
                            <div className="relative w-full h-full rounded-full border-4 border-slate-800 overflow-hidden shadow-2xl">
                                <Image
                                    src="/profile.jpg"
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
