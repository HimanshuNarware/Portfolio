import React from 'react'
import '../page/utilities.css'
import github from '../../assets/github.svg'  
import chrome from '../../assets/Chrome.svg'
// src\component\page\utilities.css

function Card({data}) {
  console.log(data)
    return (
<div className="flex flex-col  p-3 rounded  bg-gradient-to-t from-[rgb(20,21,21)] to-[#181818]">
  <div className="flex flex-row gap-2">
  <div>
    <img className='my-2 rounded shadow shadow-gray-800' src={data.image}  alt={data.name} />
  </div>
  <div className='text-white text-md mt-2 pb-2 pl-1 font-bold gradient-text text-center pt-4'>{data.name}</div>
  </div>
  
 
  <div className='flex justify-between'>
    <div className="w-3/4 border border-gray-500 h-9 rounded mt-2 text-center text-cyan-900 leading-loose text-sm ">
    <marquee behavior="scroll" scrollamount="2" direction="">{data.tech}</marquee>
    </div>

    <div className='flex gap-2.5'>
      <div className="h-9 rounded mt-2 text-center border bg-gray-700 p-1 w-10">
        <img src={github} alt="github" className=''
        onClick={()=>window.redirect(data.github)}
        />
      </div>
    <div className="h-9 rounded mt-2  text-center  p-1 w-10  ">
  <img src={chrome} className="-mt-0.5"alt="" 
  onClick={()=>window.open("https://"+  data?.live,"_blank")} 
  
  />
    </div>

    </div>
    
    
  </div>
 
</div>
  )
}

export default Card