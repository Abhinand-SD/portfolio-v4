"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Lightbulb, MonitorCheck } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Code className="w-8 h-8" />,
            title: "Web Development",
            desc: "Building responsive, fast, and SEO-friendly websites using modern frameworks like React and Next.js."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Mentorship",
            desc: "Guiding aspiring developers in MERN stack and Python, helping them build their first successful projects."
        },
        {
            icon: <MonitorCheck className="w-8 h-8" />,
            title: "Backend Development",
            desc: "Developing robust and scalable APIs using Node.js, Express, and Python for seamless data management."
        },
        {
            icon: <Lightbulb className="w-8 h-8" />,
            title: "Technical Consultation",
            desc: "Providing expert advice on technology stacks, architecture, and best practices for your digital products."
        }
    ];

    return (
        <section id="services" className="py-20 bg-slate-950 border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Services</h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-cyan-500 transition-colors hover:shadow-lg hover:shadow-cyan-500/10 group"
                        >
                            <div className="w-14 h-14 bg-slate-800 rounded-lg flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
