/** @format */

import React from 'react';
// import Card from './Card'
import '../page/utilities.css';
import ExpeCard from './ExpeCard';
import experienceDb from '../../Db/Exprerience.json';

function Experience() {
  return (
    <div id='experience' className="min-h-screen bg-[#101010] flex flex-col justify-center items-center gap-10 p-6 ">
      <span className='protest-riot-regular gradient-text  text-5xl my-5 lg:mt-15 max-md:text-3xl'>
      Learning something new everyday !
      Experience.
      </span>
    
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
    
    {experienceDb.experience.map((item,index)=><ExpeCard key={index} data={item} index={index}/>)}

      </div>

   

    </div>
  );
}

export default Experience;
