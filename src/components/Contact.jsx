import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { fadeIn, staggerContainer } from '../utils/animations';
const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', msg: '' });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', msg: '' });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // IMPORTANT: Put your Web3Forms Access Key right here:
          access_key: "f5e482d0-5a59-4d84-9282-c8bed6bf72b9",
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ type: 'success', msg: 'Message successfully delivered. Thank you for getting in touch!' });
        setFormState({ name: '', email: '', message: '' });
      } else {
        throw new Error(result.message || "Email block error occurred.");
      }
    } catch (error) {
      console.error("Email Error:", error);
      setStatus({ type: 'error', msg: 'Failed to send email. Have you pasted your Web3Forms Access Key into Contact.jsx?' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section 
      id="contact"
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className="max-w-4xl mx-auto"
    >
      <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full"></div>
        
        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          <div>
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-6 flex items-center">
              <span className="text-blue-500 mr-4 font-mono text-lg">04.</span> Get In Touch
            </motion.h2>
            <motion.p variants={fadeIn} className="text-slate-400 mb-8 leading-relaxed">
              I'm actively seeking new opportunities to leverage my full-stack skills. Let's discuss how my experience in React & Django can bring value to your team.
            </motion.p>
            
            <motion.div variants={fadeIn} className="space-y-6">
              <div className="flex items-center text-slate-300 hover:text-white transition-colors">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 border border-slate-800 text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono tracking-wide uppercase">Email</p>
                  <a href="mailto:krishgupta7898@gmail.com" className="font-semibold cursor-none">krishgupta7898@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center text-slate-300 hover:text-white transition-colors">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 border border-slate-800 text-blue-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono tracking-wide uppercase">Phone</p>
                  <span className="font-semibold">+91 7898325702</span>
                </div>
              </div>
              <div className="flex items-center text-slate-300 hover:text-white transition-colors">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mr-4 border border-slate-800 text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono tracking-wide uppercase">Location</p>
                  <span className="font-semibold">Bhopal, India</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.form variants={fadeIn} onSubmit={handleFormSubmit} className="space-y-4">
            
            {status.msg && (
              <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className={`p-4 rounded-xl text-sm font-semibold ${status.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.2)]' : 'bg-red-500/10 text-red-400 border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.2)]'}`}>
                {status.msg}
              </motion.div>
            )}

            <div>
              <input 
                type="text" required placeholder="Name" 
                value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})}
                className="w-full bg-black border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600 cursor-none"
              />
            </div>
            <div>
              <input 
                type="email" required placeholder="Email Address" 
                value={formState.email} onChange={e => setFormState({...formState, email: e.target.value})}
                className="w-full bg-black border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600 cursor-none"
              />
            </div>
            <div>
              <textarea 
                required placeholder="Your Message" rows="5"
                value={formState.message} onChange={e => setFormState({...formState, message: e.target.value})}
                className="w-full bg-black border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600 resize-none cursor-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-4 font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] disabled:opacity-70 flex justify-center items-center cursor-none"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                "Send Message"
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
