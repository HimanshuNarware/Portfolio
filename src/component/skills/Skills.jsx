import React from 'react';
import './Skills.css';
import reacticon from '../../assets/react.svg';
import html from '../../assets/html.svg';
import css from '../../assets/css.svg';
import javascript from '../../assets/js.svg';
import tailwind from '../../assets/tailwind-css.svg';
import angular from '../../assets/angular.svg';
import aws_1 from '../../assets/aws.svg';
import docker from '../../assets/docker.svg';
import figma from '../../assets/figma.svg';
import git from '../../assets/git.svg';
import firebase from '../../assets/firebase.svg';
import github from '../../assets/github.svg';
import mongodb from '../../assets/mongodb.svg';
import nodejs from '../../assets/nodejs.svg';
import php from '../../assets/php.svg';
import sass from '../../assets/sass.svg';
import typescript from '../../assets/ts.svg';
import vue from '../../assets/vue.svg';
import java from '../../assets/java.svg';
import nextjs from '../../assets/nextjs.svg';
import python_2 from '../../assets/python-2.svg';
import sql_2 from '../../assets/sql-2.svg';
import bootstrap from '../../assets/Bootstrap.svg';
import postman from '../../assets/Postman.svg';
import express from '../../assets/expressjs-ar21.svg';
import linux from '../../assets/Linux.svg';
import githubActions from '../../assets/GitHub Actions.svg';
import sql from '../../assets/sql.svg';
import insomnia from '../../assets/Insomnia.svg';
import photoshop from '../../assets/Adobe Photoshop.svg';

const techStack = [
  { id: 1, src: reacticon, alt: 'React' },
  { id: 2, src: nodejs, alt: 'Node.js' },
  { id: 3, src: express, alt: 'Express.js' },
  { id: 4, src: mongodb, alt: 'MongoDB' },
  { id: 5, src: typescript, alt: 'TypeScript' },
  { id: 6, src: javascript, alt: 'JavaScript' },
  { id: 7, src: nextjs, alt: 'Next.js' },
  { id: 8, src: docker, alt: 'Docker' },
  { id: 9, src: java, alt: 'Java' },
  { id: 10, src: aws_1, alt: 'AWS' },
  { id: 11, src: tailwind, alt: 'Tailwind' },
  { id: 12, src: git, alt: 'Git' },
  { id: 13, src: github, alt: 'GitHub' },
  { id: 14, src: githubActions, alt: 'GitHub Actions' },
  { id: 15, src: linux, alt: 'Linux' },
  { id: 16, src: sql_2, alt: 'SQL' },
  { id: 17, src: sql, alt: 'MySQL' },
  { id: 18, src: postman, alt: 'Postman' },
  { id: 19, src: insomnia, alt: 'Insomnia' },
  { id: 20, src: firebase, alt: 'Firebase' },
  { id: 21, src: html, alt: 'HTML5' },
  { id: 22, src: css, alt: 'CSS3' },
  { id: 23, src: sass, alt: 'Sass' },
  { id: 24, src: bootstrap, alt: 'Bootstrap' },
  { id: 25, src: php, alt: 'PHP' },
  { id: 26, src: python_2, alt: 'Python' },
  { id: 27, src: vue, alt: 'Vue.js' },
  { id: 28, src: angular, alt: 'Angular' },
  { id: 29, src: figma, alt: 'Figma' },
  { id: 30, src: photoshop, alt: 'Photoshop' },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-transparent py-20 px-6 relative z-10 border-t border-brand-border">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <div className="text-center mb-16 space-y-3">
          <span className="font-mono text-xs tracking-widest text-brand-secondary uppercase">// STACK CAPABILITIES</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
            Technical <span className="gradient-text-cyan">Skills</span>
          </h2>
          <div className="w-12 h-1 bg-brand-primary mx-auto rounded"></div>
        </div>

        {/* Grid Container */}
        <div className="main-container relative bg-brand-bg flex items-center justify-center p-2 rounded-xl">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-4 w-full relative z-10">
            {techStack.map((tech) => (
              <div
                key={tech.id}
                className="group p-4 bg-brand-surface border border-brand-border rounded-brand-md flex flex-col items-center justify-center hover:border-brand-primary/45 hover:shadow-glow-cyan hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src={tech.src}
                    alt={tech.alt}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 filter brightness-90 group-hover:brightness-100"
                  />
                </div>
                <span className="font-mono text-[10px] text-brand-muted group-hover:text-brand-primary transition-colors mt-3 text-center truncate w-full">
                  {tech.alt}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
