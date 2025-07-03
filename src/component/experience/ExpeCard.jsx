/** @format */

import React from 'react';
import kwoc from '../../assets/experience/kwoc.png';
import dwoc from '../../assets/experience/dwoc.png';
import gssoc from '../../assets/experience/gssoc.png';
import hack from '../../assets/experience/hack.png';
import slop from '../../assets/experience/slop.png';
import swoc from '../../assets/experience/swoc.png';
import woos from '../../assets/experience/woos.png';
import gdsc from '../../assets/experience/gdsc.png';

function ExpeCard({ data, index }) {
  const images = [woos, gssoc, gdsc, gssoc, slop, dwoc, swoc, kwoc, hack];

  return (
    <div className="bg-[#181818]  rounded-2xl p-6 shadow-xl flex flex-col gap-4">
      {/* Icon */}
      <div className="flex items-center gap-4 ">
        <img
          className='className="w-30 h-20 rounded flex justify-center items-center'
          src={images[index]}
          alt=""
        />

        <div className="flex flex-col  gap-2 ">
          <button className="px-3 py-1 text-xs bg-[#2c2c2c] text-white rounded-md border border-gray-700">
            {data.positions[0].title}
          </button>
          <button className="px-3 py-1 text-xs bg-[#2c2c2c] text-white rounded-md border border-gray-700">
            {data.positions[0].duration}
          </button>
        </div>
      </div>

      {/* Content */}
      <h3 className="text-white font-semibold text-lg">{data.organization}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {data.positions[0].description[0]}
        {/* Description-It's never been easier to setup custom SSR (Server-Side Rendering), 
      or build your own SSR framework. */}
      </p>
    </div>
  );
}

export default ExpeCard;
