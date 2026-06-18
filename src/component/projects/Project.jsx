import React from 'react'
import Card from '../experience/Card'
import { projects } from '../../Db/Projects.json'

function Project() {
  return (
    <section id="projects" className="bg-transparent py-20 px-6 relative z-10 border-t border-brand-border">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <div className="text-center mb-16 space-y-3">
          <span className="font-mono text-xs tracking-widest text-brand-secondary uppercase">// ENGINEERING PORTFOLIO</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
            Featured <span className="gradient-text-cyan">Projects</span>
          </h2>
          <p className="text-brand-muted font-mono text-sm max-w-md mx-auto">
            System tools, web portals, and integrations designed for performance.
          </p>
          <div className="w-12 h-1 bg-brand-primary mx-auto rounded"></div>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item, idx) => (
            <Card key={idx} data={item} />
          ))}
        </div>

        {/* GitHub Callout */}
        <div className="text-center mt-16">
          <a 
            href="https://github.com/HimanshuNarware" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-brand-border bg-brand-surface text-slate-300 hover:border-brand-primary/50 hover:text-brand-primary font-mono text-sm transition-all duration-300"
          >
            <span>Explore more on GitHub</span>
            <span className="text-brand-primary">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Project