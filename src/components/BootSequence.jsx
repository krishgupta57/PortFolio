import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BootSequence = ({ onComplete }) => {
    const [logs, setLogs] = useState([]);
    const [isDone, setIsDone] = useState(false);
    const scrollRef = useRef(null);

    const bootLogs = [
        "KERNEL_INIT: [ OK ]",
        "MOUNT_POINTS: /dev/root -> node_01 [ OK ]",
        "NEURAL_DRIVERS: v3.2.0_ELITE [ LOADED ]",
        "ENCRYPT_LAYER: SHA-512_RSA_2048 [ ACTIVE ]",
        "GFX_ENGINE: RAY_TRACE_PIPELINE [ ENABLED ]",
        "MEMORY_CHECK: 64.0 TB [ VIRTUAL ]",
        "UPLINK_STATUS: BHOPAL_IN_77.41E [ CONNECTED ]",
        "ESTHETHICS_CORE: CINEMATIC_V6 [ SYNCED ]",
        "PREPARING_UI_WORKSPACE...",
        "AUTHENTICATING_USER: KRISH_GUPTA...",
        "ACCESS_GRANTED: ELITE_ARCHITECT_LEVEL",
        "------------------------------------",
        "SYSTEM_BOOT_COMPLETE",
    ];

    useEffect(() => {
        let currentIdx = 0;
        const logInterval = setInterval(() => {
            if (currentIdx < bootLogs.length) {
                const nextLog = bootLogs[currentIdx];
                if (nextLog) {
                    setLogs(prev => [...prev.slice(-10), nextLog]);
                }
                currentIdx++;
            } else {
                clearInterval(logInterval);
                setTimeout(() => setIsDone(true), 500);
                setTimeout(onComplete, 1200);
            }
        }, 120);

        return () => clearInterval(logInterval);
    }, [onComplete]);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [logs]);

    return (
        <motion.div 
            initial={{ opacity: 1 }}
            exit={{ 
                opacity: 0, 
                scale: 1.5, 
                filter: 'brightness(2) blur(20px)',
                transition: { duration: 0.8, ease: "circIn" } 
            }}
            className="fixed inset-0 z-[999] bg-[#020617] flex flex-col items-center justify-center font-mono overflow-hidden"
        >
            {/* CRT Flicker Effect Overlay */}
            <div className="absolute inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
            
            <div className="relative w-full max-w-2xl px-6 py-12">
                {/* Header Info */}
                <div className="flex justify-between items-start mb-12 border-b border-white/10 pb-4 text-blue-500/60 text-[10px] tracking-widest uppercase">
                    <div>
                        <p>KRISH_OS v3.2.0</p>
                        <p>CODENAME: ELITE_ARCHITECT</p>
                    </div>
                    <div className="text-right">
                        <p>BIOS_VER: 0x7FF_2024</p>
                        <p>DATE: 2024.Q4.SYS</p>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left: ASCII / System Data */}
                    <div className="space-y-6">
                        <div className="text-pink-500 font-bold text-lg leading-none">
                            <pre className="inline-block">
                                {`
   __  ___  __ 
  / / / / |/ / 
 / /_/ /    /  
 \\____/_/|_/   
                                `}
                            </pre>
                            <div className="mt-2 text-[8px] opacity-50 uppercase tracking-[0.5em]">Neural Uplink v3.2</div>
                        </div>

                        <div className="space-y-2">
                             {[1,2,3,4].map(i => (
                                 <div key={i} className="flex gap-2">
                                     <div className="h-1 flex-1 bg-white/5 relative overflow-hidden">
                                         <motion.div 
                                            animate={{ x: ["-100%", "100%"] }}
                                            transition={{ duration: Math.random() * 2 + 1, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-0 bg-blue-500/20"
                                         />
                                     </div>
                                 </div>
                             ))}
                        </div>
                    </div>

                    {/* Right: The Terminal Log */}
                    <div className="bg-black/40 border border-white/5 p-4 h-64 flex flex-col">
                        <div className="flex-1 overflow-hidden" ref={scrollRef}>
                            {logs.map((log, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`text-[11px] mb-1 tracking-tight ${log?.includes?.('OK') ? 'text-emerald-500' : 'text-slate-300'}`}
                                >
                                    <span className="opacity-30 mr-2">{'>'}</span>
                                    {log}
                                </motion.div>
                            ))}
                            {!isDone && (
                                <motion.div 
                                    animate={{ opacity: [0, 1] }} 
                                    transition={{ repeat: Infinity, duration: 0.8 }}
                                    className="w-2 h-4 bg-blue-500/50 inline-block align-middle ml-2"
                                />
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer Telemetry */}
                <div className="mt-12 flex justify-center">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-[9px] text-white/20 tracking-[0.6em] uppercase"
                    >
                        Initializing Workspace Environment...
                    </motion.div>
                </div>
            </div>

            {/* Scanning Grid Background */}
            <div 
                className="absolute inset-0 -z-10 opacity-[0.03]" 
                style={{ 
                    backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }}
            />
        </motion.div>
    );
};

export default BootSequence;

