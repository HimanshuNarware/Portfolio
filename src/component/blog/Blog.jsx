import React from 'react'
import '../page/utilities.css'

function Blog() {
  return (
    <div className="min-h-screen bg-[#101010] flex flex-col items-center justify-center gap-12 p-6">
      
    {/* Title */}
    <h1 className="protest-riot-regular text-2xl font-medium gradient-text  ">Writing for nothing !</h1>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
    
        <div
          
          className="bg-[#181818] rounded-md overflow-hidden shadow-lg"
        >
          {/* Image */}
          <img
            src="https://himanshunarware.netlify.app/images/blogs/ai.webp"
            alt="Will AI replace humans"
            className=" w-full h-56 object-cover"
          />
          {/* Caption */}
          <div className="p-4 flex gap-2.5 justify-between">
            <p className="text-gray-400 text-sm italic">
              #AI replace humans ?
            </p>
            <div><a href='https://resourcegallery.live/blog/Blockchain-And-DeFi-Technology/' target = '_blank' className='text-cyan-700'>Read..</a></div>
          </div>
        </div>
        <div
          
          className="bg-[#181818] rounded-md overflow-hidden shadow-lg"
        >
          {/* Image */}
          <img
            src="https://himanshunarware.netlify.app/images/blogs/nft.webp"
            alt="Blockchains And DeFi Techonology "
            className="w-full h-56 object-cover"
          />
          {/* Caption */}
          <div className="p-4 flex justify-between text-cyan-700">
            <p className="text-gray-400 text-sm italic">
          #Blockchains  #DeFi Techonology  ?
            </p>
            <div><a
            href='https://resourcegallery.live/blog/will-AI-replace-Humans/'
            target='_blank'
            >Read..</a></div>
          </div>
        </div>
        <div
          
          className="bg-[#181818] rounded-md overflow-hidden shadow-lg"
        >
          {/* Image */}
          <img
            src="https://himanshunarware.netlify.app/images/blogs/sphehon.png"
            alt="Launch your dApp/app using Spheron CLI"
            className="w-full h-56 object-cover"
          />
          {/* Caption */}
          <div className="p-4 flex text-cyan-700 justify-between">
            <p className="text-gray-300 text-sm italic">
              # Launch your dApp/app using Spheron CLI?
            </p>
            <div><a href='https://himanshunarware.hashnode.dev/launch-your-dappapp-using-spheron-cli'
            target='_blank'
            >Read..</a></div>
          </div>
        </div>
      
    </div>
    <h1 className="protest-riot-regular text-3xl font-medium gradient-text leading-loose  ">Contact Me!</h1>
  </div>

  )
}

export default Blog