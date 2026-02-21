"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const Projects = () => {
    const projects = [
        {
            title: "Laksyah Trends",
            desc: "Full-featured fashion e-commerce app with auth, cart, order management, and payment integration.",
            tags: ["React", "Node.js", "MongoDB", "Express"],
            github: "https://github.com/Abhinand-SD/laksyah-trends-ecommerce",
            live: "https://laksyah-trends-ecommerce.vercel.app/",
            image: "/images/projects/laksyah-trends.png"
        },
        {
            title: "AI Finance Dashboard",
            desc: "Modern expense tracker with an AI-powered budget advisor for personalized savings recommendations.",
            tags: ["Next.js", "React", "Tailwind CSS", "AI"],
            github: "https://github.com/Abhinand-SD/AI-Finance-Dashboard",
            live: "https://ai-finance-dashboard-delta.vercel.app/",
            image: "/images/projects/ai-finance-dashboard.png"
        },
        {
            title: "Feedback System",
            desc: "Full-stack feedback system with OTP-based auth, secure APIs, and scalable architecture.",
            tags: ["Next.js", "Typescript", "Auth", "Prisma"],
            github: "https://github.com/Abhinand-SD/feedback-system-nextjs",
            live: "https://feedback-system-beryl.vercel.app/",
            image: "/images/projects/feedback-system.png"
        },
        {
            title: "Kerala Bus Tracker API",
            desc: "RESTful API and real-time server for bus tracking using Socket.IO for live updates.",
            tags: ["Node.js", "Express", "MongoDB", "Socket.IO"],
            github: "https://github.com/Abhinand-SD/kerala-bus-tracker-api",
            live: "https://nammabus.vercel.app/",
            image: "/images/projects/kerala-bus-tracker.png"
        },
        {
            title: "Instagram Insights 2.0",
            desc: "Analyze Instagram data from ZIP exports to visualize follower insights and interactions.",
            tags: ["Python", "React", "Data Viz"],
            github: "https://github.com/Abhinand-SD/instagram-insights-local-2.0",
            live: "https://instagram-insights-local-20.vercel.app/",
            image: "/images/projects/instagram-insights.png"
        },
        {
            title: "Fat Loss Diet Creator",
            desc: "Client-side app generating personalized weekly diet plans with Kerala-style meals.",
            tags: ["React", "Vite", "Tailwind CSS"],
            github: "https://github.com/Abhinand-SD/fat-loss-diet-plan-creator",
            live: "https://fat-loss-diet-plan-creator-rho.vercel.app/",
            image: "/images/projects/fat-loss-diet.png"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-slate-900 border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10 group"
                        >
                            <div className="h-48 bg-slate-700 relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover object-top transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                                    <a href={project.github} className="p-2 bg-slate-800 rounded-full text-white hover:bg-cyan-500 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300">
                                        <Github className="w-6 h-6" />
                                    </a>
                                    <a href={project.live} className="p-2 bg-slate-800 rounded-full text-white hover:bg-cyan-500 transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                                        <ExternalLink className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 relative z-10 bg-slate-800">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                                <p className="text-slate-400 mb-4 text-sm line-clamp-3">
                                    {project.desc}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 bg-slate-900 text-cyan-400 rounded-md border border-slate-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
