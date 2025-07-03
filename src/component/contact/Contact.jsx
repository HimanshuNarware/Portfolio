import React, { useState } from 'react'
import rocket from '../../assets/images/rocket.svg'
import toast, { Toaster } from 'react-hot-toast';

import emailjs from "@emailjs/browser";
// import contact from '../../assets/images/rocket.svg'
// useState
function Contact() {
  
  // const notify = () => toast('Here is your toast.');
  console.log("run")
  // notify()
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formData.name === "" || formData.email === "" || formData.message === ""){
      toast.error("Please fill all the fields")
      return
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailRegex.test(formData.email)){
      toast.error("Please enter a valid email")
      return
    }

    toast.promise(

      emailjs
      .send(
        "service_vub76ql", 
        "template_zncgnsw",
        formData,
        "YLmHKt6MwFF_0Bmg4"
      )
    ,
  
   {
      loading: 'Sending email...',
      success: () => {
        setFormData({ name: "", email: "", message: "" });
        return <b>Email sent successfully!</b>;
      },
      error: <b>Something went wrong!</b>,
  
  }
    
  
)
    };
    
  return (
      
      
      <div id="contact" className="min-h-screen bg-[#101010] flex items-center justify-center p-6 ">
       <div>
        <Toaster/>
       </div>
      
      
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Contact Form */}
        <div className="border border-blue-400 rounded-lg p-6 space-y-4">
          <h2 className="text-center text-indigo-300 text-lg font-semibold mb-4">
            Contact Me !
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div>
              <label className="block text-gray-300 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-3 py-2 rounded-md bg-[#181818] text-white border border-gray-600 focus:outline-none"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-300 mb-1">Email</label>
              <input
                type="email"
                value={formData.email}
                placeholder="Enter your email"
                name= "email"
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md bg-[#181818] text-white border border-gray-600 focus:outline-none"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-gray-300 mb-1">Message</label>
              <textarea
                placeholder="typing..."
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md bg-[#181818] text-white border border-gray-600 focus:outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
       
              type="submit"
              className="w-full py-2 bg-[#222222] text-white rounded-md hover:bg-gray-700 transition-all"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">
          <img
            src={rocket}
            alt="Contact Illustration"
            className=" h-auto object-contain t"
          />
        </div>
      </div>
    </div>

  
  )
}

export default Contact