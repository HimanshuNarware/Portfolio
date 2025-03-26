import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import astroid from '../../assets/asteroid-2.svg';


export default function Navbar() {
  return (
    <nav className="z-50 sticky top-0 bg-[#0F0F0F] text-white p-4 flex items-center justify-between font-itim">
      <div className="text-2xl">
        {/* <FaBars /> */}
        <img src={astroid} className=" w-12" alt="" />
      </div>
      <div className="hidden md:flex space-x-6 text-lg">
        <a href="#skills" className="hover:text-gray-400">Skills</a>
        <a href="#experience" className="hover:text-gray-400">Experience</a>
        <a href="#projects" className="hover:text-gray-400">Projects</a>
        <a href="#contact" className="hover:text-gray-400">Contact Me</a>
      </div>
      <div className="flex space-x-4 text-xl">
        <a href="https://github.com/HimanshuNarware" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-400" />
        </a>
        <a href="https://x.com/N_Himanshu_" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="hover:text-gray-400" />
        </a>
        <a href="https://www.linkedin.com/in/himanshunarware/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-gray-400" />
        </a>
      </div>
    </nav>
  );
}
