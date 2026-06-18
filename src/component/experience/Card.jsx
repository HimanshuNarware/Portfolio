import React from 'react'
import github from '../../assets/github.svg'  
import chrome from '../../assets/Chrome.svg'

function Card({ data }) {
  // Helper to ensure urls have proper protocol and prevent double prepending
  const formatUrl = (url) => {
    if (!url) return '';
    const cleanUrl = url.trim();
    if (cleanUrl.startsWith('http://') || cleanUrl.startsWith('https://')) {
      return cleanUrl;
    }
    return `https://${cleanUrl}`;
  };

  // Convert tech stack comma-separated string to an array
  const techTags = data.tech ? data.tech.split(',').map(tag => tag.trim()) : [];

  return (
    <div className="flex flex-col bg-brand-surface border border-brand-border rounded-brand-lg p-4 hover:border-brand-primary/45 hover:shadow-glow-cyan hover:-translate-y-1 transition-all duration-300 group justify-between min-h-[360px]">
      <div>
        {/* Project Thumbnail */}
        <div className="w-full h-40 overflow-hidden rounded-brand-md border border-brand-border bg-brand-bg relative mb-3">
          <img 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100" 
            src={data.image}  
            alt={data.name} 
          />
        </div>

        {/* Project Title */}
        <h3 className="text-white font-display font-bold text-base tracking-wide group-hover:text-brand-primary transition-colors">
          {data.name}
        </h3>

        {/* Project Description (Previously omitted) */}
        <p className="text-slate-400 font-body text-xs leading-relaxed mt-2">
          {data.description}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-brand-border/60">
        {/* Tech Badges Container (Replaced deprecated marquee) */}
        <div className="flex flex-wrap gap-1 mb-4">
          {techTags.slice(0, 4).map((tag, i) => (
            <span 
              key={i} 
              className="font-mono text-[9px] px-2 py-0.5 rounded-[4px] border border-brand-border bg-brand-bg text-brand-primary"
            >
              {tag}
            </span>
          ))}
          {techTags.length > 4 && (
            <span className="font-mono text-[9px] px-2 py-0.5 rounded-[4px] border border-brand-border bg-brand-bg text-brand-muted">
              +{techTags.length - 4}
            </span>
          )}
        </div>

        {/* Link Actions */}
        <div className="flex justify-between items-center">
          <span className="font-mono text-[10px] text-brand-muted">
            {data.date ? new Date(data.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : 'Recent'}
          </span>

          <div className="flex gap-2">
            {/* GitHub Button */}
            {data.github && (
              <button 
                onClick={() => window.open(formatUrl(data.github), "_blank")}
                className="w-8 h-8 rounded border border-brand-border bg-brand-bg hover:border-brand-primary/50 hover:bg-brand-surface-hover flex items-center justify-center cursor-pointer transition-all"
                title="View Source Code"
              >
                <img src={github} alt="github" className="w-4.5 h-4.5 filter invert" />
              </button>
            )}

            {/* Live Link Button */}
            {data.live && (
              <button 
                onClick={() => window.open(formatUrl(data.live), "_blank")}
                className="w-8 h-8 rounded border border-brand-border bg-brand-bg hover:border-brand-primary/50 hover:bg-brand-surface-hover flex items-center justify-center cursor-pointer transition-all"
                title="View Live Demo"
              >
                <img src={chrome} alt="live" className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card