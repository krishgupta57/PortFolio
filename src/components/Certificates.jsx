import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, X, Eye } from 'lucide-react';
import { certificates } from '../data/portfolioData';

const CertificateCard = ({ item, index, onView }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    className="relative group bg-[#111111]/40 backdrop-blur-md border border-white/5 rounded-3xl p-6 overflow-hidden hover:border-purple-500/20 transition-all duration-700"
  >
    {/* Image Preview */}
    <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#010409] via-transparent to-transparent opacity-60" />

      {/* Hover Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-[2px]">
        <button
          onClick={() => onView(item)}
          className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-black uppercase tracking-widest text-[10px] hover:scale-110 transition-transform active:scale-95"
        >
          <Eye className="w-4 h-4" />
          View Certificate
        </button>
      </div>
    </div>

    {/* Content */}
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <ShieldCheck className="w-4 h-4 text-purple-500" />
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-black">{item.issuer}</span>
      </div>

      <h3 className="text-xl font-black text-white italic tracking-tighter uppercase leading-tight">
        {item.title}
      </h3>

      <div className="flex flex-wrap gap-2 pt-2">
        {item.tags.map(tag => (
          <span key={tag} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[8px] font-mono text-slate-400 uppercase tracking-widest">
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* Aesthetic corner badge */}
    <div className="absolute top-4 right-4 bg-purple-600/10 border border-purple-500/20 px-3 py-1 rounded-full">
      <span className="text-[8px] font-mono text-purple-400 font-black uppercase tracking-widest">{item.date}</span>
    </div>
  </motion.div>
);

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-20 relative">
      {/* Certificate Viewer Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-3xl flex items-center justify-center p-0 md:p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-full md:h-[92vh] bg-[#0a0a0a] rounded-none md:rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col"
            >
              {/* OS Style Header */}
              <div className="bg-[#111111] px-6 py-4 flex items-center justify-between border-b border-white/5 select-none">
                <div className="flex items-center gap-6">
                  {/* Traffic Lights */}
                  <div className="flex gap-2">
                    <div onClick={() => setSelectedCert(null)} className="w-3 h-3 rounded-full bg-[#ff5f56] cursor-pointer hover:brightness-110 shadow-[0_0_8px_#ff5f5640]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e] opacity-50" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f] opacity-50" />
                  </div>
                  <div className="h-4 w-[1px] bg-white/10" />
                  <div className="flex items-center gap-2">
                    <Award className="w-3 h-3 text-purple-500" />
                    <span className="text-[10px] font-mono text-slate-400 font-black uppercase tracking-[0.2em]">
                      CERTIFICATE_VIEWER.EXE // {selectedCert.title}
                    </span>
                  </div>
                </div>
                
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="flex items-center gap-2 px-3 py-1 bg-white/5 hover:bg-white/10 rounded-md transition-all group"
                >
                  <span className="text-[9px] font-mono text-slate-500 group-hover:text-white uppercase font-black tracking-widest">Close</span>
                  <X className="w-3 h-3 text-slate-500 group-hover:text-white" />
                </button>
              </div>

              {/* Content Area */}
              <div className="flex-1 bg-white relative">
                <iframe 
                  src={`${selectedCert.link}#toolbar=0&navpanes=0&view=FitH`} 
                  className="w-full h-full border-none"
                  title="Certificate Viewer"
                />
                
                {/* Subtle Scanline Overlay for Cyber Feel */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.05)_50%),linear-gradient(90deg,rgba(255,0,0,0.01),rgba(0,255,0,0.005),rgba(0,0,255,0.01))] bg-[length:100%_4px,3px_100%] z-50 opacity-20" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="bg-purple-600 text-white font-mono text-[8px] font-black tracking-[0.3em] uppercase px-3 py-1 rounded-sm shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                LOG_03 // VALIDATION
              </span>
              <div className="h-[1px] w-24 bg-gradient-to-r from-purple-500 to-transparent opacity-30" />
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-white italic tracking-tighter uppercase leading-[0.9]">
              Verified <span className="text-purple-500">Skills</span>
            </h2>
          </div>

          <div className="flex items-center gap-4 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl">
            <Award className="w-5 h-5 text-purple-500 animate-pulse" />
            <span className="text-[10px] font-mono text-slate-300 font-bold tracking-widest uppercase">{certificates.length} AUTHORIZED RECORDS</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <CertificateCard
              key={index}
              item={cert}
              index={index}
              onView={(item) => setSelectedCert(item)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
