import React from 'react'
import blog from '../../assets/blog/blogs.png'

function Blog() {
  const blogPosts = [
    {
      title: "Will AI Replace Humans?",
      tags: ["#AI", "#FutureOfWork"],
      image: "https://himanshunarware.netlify.app/images/blogs/ai.webp",
      link: "https://resourcegallery.live/blog/will-AI-replace-Humans/"
    },
    {
      title: "Blockchains & DeFi Technology",
      tags: ["#DeFi", "#Blockchain", "#Web3"],
      image: "https://himanshunarware.netlify.app/images/blogs/nft.webp",
      link: "https://resourcegallery.live/blog/Blockchain-And-DeFi-Technology/"
    },
    {
      title: "Launch your dApp/app using Spheron CLI",
      tags: ["#DevOps", "#Spheron", "#dApp"],
      image: blog,
      link: "https://www.linkedin.com/in/himanshunarware/recent-activity/all/"
    }
  ];

  return (
    <section id="blog" className="bg-transparent py-20 px-6 relative z-10 border-t border-brand-border">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <div className="text-center mb-16 space-y-3">
          <span className="font-mono text-xs tracking-widest text-brand-secondary uppercase">// INSIGHTS & ARTICLES</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
            Technical <span className="gradient-text-cyan">Writing</span>
          </h2>
          <p className="text-brand-muted font-mono text-sm max-w-md mx-auto">
            Deep-dives into AI, Web3 technology, and decentralized deployment.
          </p>
          <div className="w-12 h-1 bg-brand-primary mx-auto rounded"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              className="bg-brand-surface border border-brand-border rounded-brand-lg overflow-hidden hover:border-brand-primary/45 hover:shadow-glow-cyan hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="w-full h-52 overflow-hidden bg-brand-bg relative border-b border-brand-border">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                  />
                </div>
                {/* Content */}
                <div className="p-5 space-y-2">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="font-mono text-[9px] text-brand-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-white font-display font-semibold text-sm tracking-wide group-hover:text-brand-primary transition-colors leading-relaxed">
                    {post.title}
                  </h3>
                </div>
              </div>

              {/* Action area */}
              <div className="px-5 pb-5 pt-2 flex justify-between items-center border-t border-brand-border/20">
                <span className="font-mono text-[10px] text-brand-muted">Blog Post</span>
                <a 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-brand-secondary hover:text-brand-primary transition-colors flex items-center gap-1.5"
                >
                  <span>Read Article</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog