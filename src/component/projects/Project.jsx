import React from 'react'
import Card from '../experience/Card'
import '../page/utilities.css'
import {projects} from '../../Db/Projects.json'

function Project() {
  return (
    <div id='projects' className='parent lg:pt-15'>    <div className="bg-[#101010] text-center linear p-10 text-white protest-riot-regular text-5xl font-color gradient-text max-md:text-3xl ">
    Building for change !
Project’s

  </div>
    <div className="relative min-h-screen bg-[#101010] overflow-hidden p-10">
 

    {/* Grid of Cards */}
    <div className=" mx-auto w-300 grid grid-cols-1 grid-cols-1 w-fit gap-10 rounded-2xl md:grid-cols-2 lg:grid-cols-3">
   {/*{console.log(ProjectData)}*/}
      {projects.map(item=><Card data={item}/>)}
    {/*  try to build by yourself */}
    </div>
  </div>
  {/* <div className='border w-50 p-2 text-2xl font-bold protest-riot-regular ms-auto '>Explore more on GitHub</div> */}
  </div>
  )
}

export default Project