"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Camera, Monitor } from 'lucide-react';

const About = () => {
    const features = [
        {
            icon: <Code className="w-6 h-6 text-cyan-400" />,
            title: "Full Stack Developer",
            desc: "Specializing in MERN and Python stacks to build robust applications."
        },
        {
            icon: <Monitor className="w-6 h-6 text-cyan-400" />,
            title: "Tech Enthusiast",
            desc: "Self-taught developer constantly exploring new technologies and frameworks."
        },
        {
            icon: <Camera className="w-6 h-6 text-cyan-400" />,
            title: "Photography & Editing",
            desc: "Creative eye for design, photography, and visual storytelling."
        }
    ];

    return (
        <section id="about" className="py-20 bg-slate-900 border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-20 transform rotate-6"></div>
                            <div className="relative bg-slate-800 p-8 rounded-2xl border border-slate-700">
                                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                                    Hi, I'm <span className="text-cyan-400 font-semibold">Abhinand SD</span>.
                                    I am a passionate self-taught developer and fullstack mentor with expertise in the MERN stack and Python.
                                    My journey in tech is driven by curiosity and a desire to build solutions that matter.
                                </p>
                                <p className="text-lg text-slate-300 leading-relaxed">
                                    Beyond coding, I have a deep interest in photography and editing, which helps me bring a creative perspective to my technical work.
                                    I love mentoring others and sharing knowledge to help the community grow.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-slate-900 rounded-lg border border-slate-700">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-1">{feature.title}</h3>
                                        <p className="text-slate-400 text-sm">{feature.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
