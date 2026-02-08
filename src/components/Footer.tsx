"use client";

import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-cyan-400 mb-2">Abhinand SD</h3>
                        <p className="text-slate-500 max-w-xs">
                            Building digital experiences with passion and precision.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/Abhinand-SD" className="hover:text-cyan-400 transition-colors">
                            <Github className="h-6 w-6" />
                            <span className="sr-only">GitHub</span>
                        </a>
                        <a href="https://www.linkedin.com/in/abhinand-sd/" className="hover:text-cyan-400 transition-colors">
                            <Linkedin className="h-6 w-6" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="https://x.com/abhinand_sd_" className="hover:text-cyan-400 transition-colors">
                            <Twitter className="h-6 w-6" />
                            <span className="sr-only">Twitter</span>
                        </a>
                        <a href="mailto:abhinandsd49@gmail.com" className="hover:text-cyan-400 transition-colors">
                            <Mail className="h-6 w-6" />
                            <span className="sr-only">Email</span>
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-900 text-center text-sm text-slate-600">
                    <p suppressHydrationWarning>&copy; {new Date().getFullYear()} Abhinand SD. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
