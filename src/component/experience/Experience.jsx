import React from 'react';
import ExpeCard from './ExpeCard';
import experienceDb from '../../Db/Exprerience.json';

function Experience() {
  return (
    <section id="experience" className="bg-transparent py-20 px-6 relative z-10 border-t border-brand-border">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <div className="text-center mb-16 space-y-3">
          <span className="font-mono text-xs tracking-widest text-brand-secondary uppercase">// CAREER TIMELINE</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
            Professional <span className="gradient-text-cyan">Experience</span>
          </h2>
          <p className="text-brand-muted font-mono text-sm max-w-md mx-auto">
            Positions, open-source projects managed, and communities led.
          </p>
          <div className="w-12 h-1 bg-brand-primary mx-auto rounded"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experienceDb.experience.map((item, index) => (
            <ExpeCard key={index} data={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
