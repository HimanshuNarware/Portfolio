
import './App.css'

import Experience from './component/experience/Experience'
import Navbar from './component/navbar/Navbar'
import HomePage from './component/page/HomePage'
import Skills from './component/skills/Skills'
import Project from './component/projects/Project'
import Contact from './component/contact/Contact'
import Blog from './component/blog/Blog'
import Footer from './component/footer/Footer'


// import Test from './Test'

function App() {

  // useEffect(() => {
  //   const lenis = initLenis();
  //   return () => lenis.destroy(); // Clean on unmount
  // }, []);

  return (
    <div id="smooth-wrapper">
    <Navbar/>
     <HomePage/>
     <Skills/>
    <Project/>
    <Experience/>
    <Blog/>
    <Contact/>
    <Footer/>
   
    </div>
  )
}

export default App
