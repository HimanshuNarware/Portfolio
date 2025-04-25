import React from 'react'
import './utilities.css'
import nodejs from '../../assets/nodejs.svg'
import react_icon from '../../assets/react.svg'
import java from '../../assets/java.svg'
import profile from '../../assets/Profile/1.png'
import profile1 from '../../assets/Profile/2.png'
import profile2 from '../../assets/Profile/3.jpg'
import profile3 from '../../assets/Profile/4.jpg'
import mongo from '../../assets/mongodb.svg'

function HomePage() {
  let imageArr=[profile,profile1,profile2,profile3];
  let index=Math.floor(Math.random()*imageArr.length);
  return (
   
    <section className="relative min-h-screen flex items-center justify-center bg-[#101010] text-white font-sans">
      {/* <> */}
      {/* <Toaster/> */}
      {/* </> */}
   

    <div className="flex flex-col gap-40 md:flex-row
     md:justify-around
     md:gap-10 
     items-center z-10 lg:gap-30 ">
      {/* Left Text Section */}
      
      <div className="max-w-md text-center md:text-left space-y-4">
      
      <span className="text-yellow-400 ">👋 Hello !</span>

        <h1 className="text-4xl font-bold protest-riot-regular">I'm Himanshu</h1>
        <div className="text-4xl font-bold flex protest-riot-regular max-sm:ml-[20%] max-md:ml-[20%]">
          Narware 
          <a href="/public/Himanshu_Narware_Software_Engineer.pdf"  target="_blank"
  rel="noopener noreferrer" className="hover:text-gray-400">
          <img className='w-10 h-10 ml-2' src="https://imgs.search.brave.com/M0RH-fqdL7UPQwU40oTy_0hfCRRDibS7Ho-kDLVU6u0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4z/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvc3BhY2UtMjc2/LzUxMi9Bc3Rlcm9p/ZC01MTIucG5n" alt="" />
    </a>
        </div>
        <p className="protest-riot-regular text-lg">
          I am into{' '}
          <a href="#" className="text-sm">
            Full stack development
          </a>
        </p>
        <p className=" text-gray-500 protest-riot-regular text-xs ">
          For developers, there are also tools like the Random String Generator from Browserling, 
          which can generate random text.
        </p>
      </div>

      {/* Right Image Section */}
      <div className="relative">
        <div className="w-54 h-fit rounded-full overflow-hidden border-2 border-gray-600 shadow-lg 
      
        lg:w-64 h-64 ">
          <img src={imageArr[index]} alt="Profile" className="object-cover w-full h-full" />
        </div>
        {/* Floating Icons */}
        <div className="absolute -top-12 right-1/2 translate-x-1/2">
          <img src={nodejs} alt="node" className="w-10 h-10 hover-effect" />
        </div>
        <div className="absolute -left-15 top-1/2 transform -translate-y-1/2">
          <img src={mongo} alt="MongoDB" className="w-10 h-10" />
        </div>
        <div className="absolute -bottom-5 left-20 md:left-30 lg:left-30">
          <img src={react_icon} alt="react" className="w-10 h-10" />
        </div>
        <div
         className="w-fit relative  left-55 lg:left-68 -top-30 transform -translate-y-1/2">
          <img src={java} alt="java" className="w-12 h-12" />
        </div>
      </div>
    </div>

    {/* Bottom Line */}
    <div className="absolute bottom-10 w-full h-[1.1px] bg-gradient-to-l from-purple-500 via-blue-500 to-green-500 -rotate-7 origin-top-left"></div>
  </section>
  )
}

export default HomePage