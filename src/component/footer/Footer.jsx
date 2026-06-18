import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-brand-bg border-t border-brand-border text-slate-400 py-8 px-6 text-center font-mono text-xs">
      <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span>© 2026 </span>
          <span className="text-white font-semibold">Himanshu Narware</span>
          <span>. All rights reserved.</span>
        </div>
        
        {/* Go to Top Button (Replaced System Version line) */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-brand-border bg-brand-surface text-brand-primary hover:border-brand-primary/50 hover:bg-brand-surface-hover hover:text-white transition-all duration-300 cursor-pointer shadow-sm hover:shadow-glow-cyan text-xs"
          title="Back to Top"
        >
          <span>Go to Top</span>
          <FaArrowUp className="text-[10px]" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
