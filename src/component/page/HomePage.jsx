import React, { useMemo } from 'react'
import './utilities.css'
import nodejs from '../../assets/nodejs.svg'
import react_icon from '../../assets/react.svg'
import java from '../../assets/java.svg'
import profile from '../../assets/Profile/1.png'
import profile1 from '../../assets/Profile/2.png'
import profile2 from '../../assets/Profile/3.jpg'
import profile3 from '../../assets/Profile/4.jpg'
import mongo from '../../assets/mongodb.svg'
import astroid from '../../assets/asteroid-2.svg'

function HomePage({ onMeteorClick }) {
  const imageArr = useMemo(() => [profile, profile1, profile2, profile3], []);
  const index = useMemo(() => Math.floor(Math.random() * imageArr.length), [imageArr.length]);

  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center bg-transparent text-slate-100 px-6 py-16 md:py-24 overflow-hidden cyber-grid">
      {/* Decorative grid gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/0 via-brand-bg/60 to-brand-bg pointer-events-none z-0"></div>

      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 z-10">
        
        {/* Left Text Section */}
        <div className="flex-1 max-w-xl text-center md:text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-border bg-brand-surface text-brand-primary text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
            <span>Available for Opportunities</span>
          </div>

          <div className="space-y-2">
            <span className="text-brand-secondary font-mono text-sm tracking-widest block">👋 HELLO, WORLD</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-tight">
              I'm <span className="gradient-text-cyan">Himanshu</span>
            </h1>
            <div className="text-3xl sm:text-4xl font-bold font-display flex items-center justify-center md:justify-start gap-3">
              <span className="text-slate-300">Narware</span>
              <button 
                onClick={onMeteorClick}
                className="hover:scale-110 active:scale-95 transition-all duration-300 inline-block cursor-pointer focus:outline-none"
                title="Trigger Meteor Shower"
              >
                <img className='w-8 h-8 filter drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]' src={astroid} alt="Meteor Logo" />
              </button>
            </div>
          </div>

          <p className="font-mono text-sm text-brand-primary">
            &gt; Full Stack Developer &amp; Open Source Contributor
          </p>

          <p className="text-slate-400 font-body text-base max-w-md leading-relaxed">
            Building scalable backend architectures and highly responsive client interfaces. GDSC Lead, open-source maintainer, and creator of technical developer tools.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
            <a 
              href="/Himanshu_Narware_Software_Engineer.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded border border-brand-primary bg-brand-primary/10 text-brand-primary hover:bg-brand-primary hover:text-brand-bg font-mono text-sm transition-all duration-300 shadow-glow-cyan"
            >
              View Resume
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 rounded border border-brand-border bg-brand-surface text-slate-300 hover:border-slate-400 hover:text-white font-mono text-sm transition-all duration-300"
            >
              Explore Projects
            </a>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 flex justify-center items-center relative py-10">
          <div className="relative w-64 h-64 md:w-72 md:h-72">
            {/* Glowing background rings */}
            <div className="absolute inset-0 rounded-full border border-brand-primary/20 animate-pulse"></div>
            <div className="absolute -inset-4 rounded-full border border-brand-secondary/10 animate-pulse-glow"></div>
            
            {/* Main Profile Frame */}
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-brand-border bg-brand-surface shadow-2xl relative z-10">
              <img src={imageArr[index]} alt="Himanshu Narware Profile" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500" />
            </div>

            {/* Emissive Floating Tech Badges (Commented out per request) */}
            {/* 
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-full bg-brand-surface border border-brand-border p-2.5 shadow-xl animate-float">
              <img src={nodejs} alt="Node.js" className="w-full h-full object-contain" />
            </div>
            
            <div className="absolute top-1/2 -left-8 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-brand-surface border border-brand-border p-2.5 shadow-xl animate-float [animation-delay:1s]">
              <img src={mongo} alt="MongoDB" className="w-full h-full object-contain" />
            </div>
            
            <div className="absolute -bottom-6 left-1/4 z-20 w-12 h-12 rounded-full bg-brand-surface border border-brand-border p-2.5 shadow-xl animate-float [animation-delay:2s]">
              <img src={react_icon} alt="React" className="w-full h-full object-contain" />
            </div>
            
            <div className="absolute top-1/4 -right-6 z-20 w-12 h-12 rounded-full bg-brand-surface border border-brand-border p-2.5 shadow-xl animate-float [animation-delay:3s]">
              <img src={java} alt="Java" className="w-full h-full object-contain animate-pulse" />
            </div>
            */}
          </div>
        </div>

      </div>

      {/* Modern Neon Separator Cable */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-30"></div>
    </section>
  )
}

export default HomePage