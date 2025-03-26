/** @format */

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
// const dummyImage = 'https://placehold.co/10/transparent/FF00';

const techStack = [
  { id: 1, src: reacticon, alt: 'React' },
  { id: 2, src: nodejs, alt: 'Vue' },
  { id: 3, src: express, alt: 'Angular' },
  { id: 3, src: mongodb, alt: 'Angular' },
  { id: 3, src: docker, alt: 'Angular' },
  { id: 3, src: java, alt: 'Angular' },
  { id: 3, src: aws_1, alt: 'Angular' },
  { id: 3, src: tailwind, alt: 'Angular' },

  { id: 3, src: css, alt: 'Angular' },
  { id: 3, src: html, alt: 'Angular' },
  { id: 3, src: javascript, alt: 'Angular' },
  { id: 3, src: figma, alt: 'Angular' },
  { id: 3, src: git, alt: 'Angular' },
  { id: 3, src: github, alt: 'Angular' },
  { id: 3, src: firebase, alt: 'Angular' },
  { id: 3, src: php, alt: 'Angular' },
  { id: 3, src: vue, alt: 'Angular' },
  { id: 3, src: typescript, alt: 'Angular' },
  { id: 3, src: linux, alt: 'Angular' },
  { id: 3, src: photoshop, alt: 'Angular' },
  { id: 3, src: githubActions, alt: 'Angular' },

  { id: 3, src: python_2, alt: 'Angular' },
  { id: 3, src: sass, alt: 'Angular' },
  { id: 3, src: nextjs, alt: 'Angular' },
  { id: 3, src: sql_2, alt: 'Angular' },
  { id: 3, src: bootstrap, alt: 'Angular' },
  { id: 3, src: postman, alt: 'Angular' },

  { id: 3, src: angular, alt: 'Angular' },
  { id: 3, src: insomnia, alt: 'Angular' },
  { id: 3, src: sql, alt: 'Angular' },
];

const Skills = () => {
  return (
    <>
      <div
        id="skills"
        className="bg-[#101010] text-center linear text-white protest-riot-regular text-5xl font-color ">
        Technical Skills
      </div>
      <div className="main-container max-md:min-h-[60-wh] min-h-[80vh] bg-[#101010] flex items-center justify-center p-6">
        <div className="grid grid-cols-5 gap-6 md:grid-cols-6 lg:grid-cols-10 max-md:grid-cols-4 max-md:gap-4 ">
          {techStack.map((tech, index) => (
            <div
              max-md:gap-4
              key={index}
              className="p-4 bg-gray-800 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={tech.src}
                alt={tech.alt}
                className="w-10 h-10 object-contain max-md:w-8 max-md:h-7 max-md:scale-150  "
              />
              {/* {console.log(document)} */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
