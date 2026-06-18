import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import astroid from '../../assets/asteroid-2.svg';

export default function Navbar({ onMeteorClick }) {
  return (
    <nav className="scroll-smooth z-50 sticky top-0 bg-brand-bg/85 backdrop-blur-md border-b border-brand-border text-slate-100 px-6 py-4 flex items-center justify-between font-mono">
      {/* Brand logo / asteroid */}
      <div className="flex items-center gap-2">
        <button 
          onClick={onMeteorClick}
          className="hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer focus:outline-none"
          title="Trigger Meteor Shower"
        >
          <img src={astroid} className="w-10 h-10 filter drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]" alt="Asteroid Logo" />
        </button>
        <span className="hidden sm:inline-block font-display font-bold text-sm tracking-wider text-brand-primary">
          H.NARWARE
        </span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-8 text-sm">
        <a href="#skills" className="relative group py-1 text-slate-300 hover:text-brand-primary transition-colors">
          <span>Skills</span>
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-primary group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="#projects" className="relative group py-1 text-slate-300 hover:text-brand-primary transition-colors">
          <span>Projects</span>
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-primary group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="#experience" className="relative group py-1 text-slate-300 hover:text-brand-primary transition-colors">
          <span>Experience</span>
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-primary group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="#contact" className="relative group py-1 text-slate-300 hover:text-brand-primary transition-colors">
          <span>Contact</span>
          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-primary group-hover:w-full transition-all duration-300"></span>
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex items-center space-x-5 text-lg">
        <a 
          href="https://github.com/HimanshuNarware" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-brand-primary hover:drop-shadow-[0_0_6px_rgba(0,240,255,0.5)] transition-all"
        >
          <FaGithub />
        </a>
        <a 
          href="https://x.com/N_Himanshu_" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-brand-primary hover:drop-shadow-[0_0_6px_rgba(0,240,255,0.5)] transition-all"
        >
          <FaTwitter />
        </a>
        <a 
          href="https://www.linkedin.com/in/himanshunarware/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-brand-primary hover:drop-shadow-[0_0_6px_rgba(0,240,255,0.5)] transition-all"
        >
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
}
