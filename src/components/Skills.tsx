"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"] },
        { category: "Backend", items: ["Node.js", "Express", "Python", "MongoDB", "REST APIs"] },
        { category: "Tools & Others", items: ["Git", "GitHub", "VS Code", "Postman", "Figma", "Photography"] },
    ];

    return (
        <section id="skills" className="py-20 bg-slate-950 border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
                    <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
                        >
                            <h3 className="text-xl font-bold text-cyan-400 mb-6 text-center">{skillGroup.category}</h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {skillGroup.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full text-sm font-medium border border-slate-700 hover:text-white hover:border-cyan-500 hover:bg-slate-700 transition-colors cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
