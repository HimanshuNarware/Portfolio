import React from 'react';
import kwoc from '../../assets/experience/kwoc.png';
import dwoc from '../../assets/experience/dwoc.png';
import gssoc from '../../assets/experience/gssoc.png';
import hack from '../../assets/experience/hack.png';
import slop from '../../assets/experience/slop.png';
import swoc from '../../assets/experience/swoc.png';
import woos from '../../assets/experience/woos.png';
import gdsc from '../../assets/experience/gdsc.png';

function ExpeCard({ data, index }) {
  // Local images array kept as fallback only, but we prefer data.image URL which is accurate
  const localImages = [woos, gssoc, gdsc, gssoc, slop, dwoc, swoc, kwoc, hack];
  const imageSrc = data.image || localImages[index] || hack;

  return (
    <div className="bg-brand-surface border border-brand-border rounded-brand-lg p-5 shadow-xl flex flex-col justify-between hover:border-brand-primary/45 hover:shadow-glow-cyan hover:-translate-y-1 transition-all duration-300 group">
      <div className="space-y-4">
        {/* Header Section */}
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded border border-brand-border bg-brand-bg p-1.5 flex items-center justify-center shrink-0">
            <img
              className="w-full h-full object-contain rounded-[4px]"
              src={imageSrc}
              alt={`${data.organization} logo`}
            />
          </div>

          <div className="space-y-1">
            <h3 className="text-white font-display font-bold text-sm tracking-wide group-hover:text-brand-primary transition-colors">
              {data.organization}
            </h3>
            {data.positions && data.positions[0] && (
              <span className="font-mono text-[10px] text-brand-muted">
                {data.positions[0].location || 'Remote'}
              </span>
            )}
          </div>
        </div>

        {/* Roles List */}
        <div className="space-y-4 pt-2">
          {data.positions && data.positions.map((pos, pIdx) => (
            <div key={pIdx} className="space-y-2 border-l border-brand-border/60 pl-3 relative">
              {/* Timeline dot */}
              <span className="absolute -left-[4.5px] top-1.5 w-2 h-2 rounded-full bg-brand-secondary"></span>
              
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-slate-200 font-mono text-xs font-semibold">
                  {pos.title}
                </h4>
                <span className="font-mono text-[9px] px-1.5 py-0.5 rounded border border-brand-border bg-brand-bg text-brand-primary">
                  {pos.duration}
                </span>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-1 list-disc list-outside pl-3.5">
                {pos.description && pos.description.map((desc, dIdx) => (
                  <li key={dIdx} className="text-slate-400 font-body text-xs leading-relaxed">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExpeCard;
