
import './App.css'
import Experience from './component/experience/Experience'
import Navbar from './component/navbar/Navbar'
import HomePage from './component/page/HomePage'
import Skills from './component/skills/Skills'
import Project from './component/projects/Project'
import Contact from './component/contact/Contact'
import Blog from './component/blog/Blog'
import Footer from './component/footer/Footer'

function App() {

  return (
    <>
    <Navbar/>
     <HomePage/>
     <Skills/>
    <Project/>
    <Experience/>
    <Blog/>
    <Contact/>
    <Footer/>
   
    </>
  )
}

export default App
