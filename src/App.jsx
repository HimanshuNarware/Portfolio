import React, { useState } from 'react'
import './App.css'

import Experience from './component/experience/Experience'
import Navbar from './component/navbar/Navbar'
import HomePage from './component/page/HomePage'
import Skills from './component/skills/Skills'
import Project from './component/projects/Project'
import Contact from './component/contact/Contact'
import Blog from './component/blog/Blog'
import Footer from './component/footer/Footer'
import MeteorShower from './component/ui/MeteorShower'

function App() {
  const [isShowerActive, setIsShowerActive] = useState(false);
  const [showerKey, setShowerKey] = useState(0);

  const triggerMeteorShower = (e) => {
    if (e) {
      e.preventDefault();
    }
    // Increment key to reset the meteor positions and animation delays
    setShowerKey((prev) => prev + 1);
    setIsShowerActive(true);

    // Disable the active state after animation completes (approx 7 seconds)
    const timeoutId = setTimeout(() => {
      setIsShowerActive(false);
    }, 7000);

    return () => clearTimeout(timeoutId);
  };

  return (
    <div id="smooth-wrapper">
      {/* Glowing meteor shower backdrop overlay */}
      {isShowerActive && <MeteorShower key={showerKey} />}

      <Navbar onMeteorClick={triggerMeteorShower} />
      <HomePage onMeteorClick={triggerMeteorShower} />
      <Skills />
      <Project />
      <Experience />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
