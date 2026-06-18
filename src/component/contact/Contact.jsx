import React, { useState } from 'react'
import rocket from '../../assets/images/rocket.svg'
import toast, { Toaster } from 'react-hot-toast';
import emailjs from "@emailjs/browser";

function Contact() {
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
      emailjs.send(
        "service_vub76ql", 
        "template_zncgnsw",
        formData,
        "YLmHKt6MwFF_0Bmg4"
      ),
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
    <section id="contact" className="bg-transparent py-20 px-6 relative z-10 border-t border-brand-border">
      <Toaster position="bottom-right" />

      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <div className="text-center mb-16 space-y-3">
          <span className="font-mono text-xs tracking-widest text-brand-secondary uppercase">// INQUIRIES & DEPLOYMENT</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
            Contact <span className="gradient-text-cyan">Me</span>
          </h2>
          <p className="text-brand-muted font-mono text-sm max-w-md mx-auto">
            Initialize connection to collaborate on projects, contract work, or open source.
          </p>
          <div className="w-12 h-1 bg-brand-primary mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div className="bg-brand-surface border border-brand-border rounded-brand-lg p-6 md:p-8 shadow-xl relative overflow-hidden group hover:border-brand-primary/20 transition-all duration-300">
            {/* Form Title */}
            <h3 className="text-white font-display font-semibold text-lg tracking-wide mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary animate-pulse"></span>
              <span>Send Message</span>
            </h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="space-y-1.5">
                <label className="block text-slate-300 font-mono text-xs tracking-wider">NAME</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className="w-full px-4 py-2.5 rounded-brand-sm bg-brand-bg text-white border border-brand-border focus:border-brand-primary/50 focus:outline-none font-mono text-xs transition-all"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-1.5">
                <label className="block text-slate-300 font-mono text-xs tracking-wider">EMAIL ADDRESS</label>
                <input
                  type="email"
                  value={formData.email}
                  placeholder="e.g. john@domain.com"
                  name="email"
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-brand-sm bg-brand-bg text-white border border-brand-border focus:border-brand-primary/50 focus:outline-none font-mono text-xs transition-all"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-1.5">
                <label className="block text-slate-300 font-mono text-xs tracking-wider">MESSAGE DATA</label>
                <textarea
                  placeholder="Type your message details here..."
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-brand-sm bg-brand-bg text-white border border-brand-border focus:border-brand-primary/50 focus:outline-none font-mono text-xs transition-all"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-brand-primary/10 border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-bg font-mono font-semibold text-xs tracking-widest rounded-brand-sm transition-all duration-300 shadow-glow-cyan cursor-pointer"
              >
                EXECUTE SEND
              </button>
            </form>
          </div>

          {/* Right Side Illustration */}
          <div className="flex justify-center items-center">
            <img
              src={rocket}
              alt="Contact Rocket Illustration"
              className="w-4/5 md:w-full max-w-sm h-auto object-contain animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact