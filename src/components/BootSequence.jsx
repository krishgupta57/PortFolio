import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const BootSequence = ({ onComplete }) => {
    const [logs, setLogs] = useState([]);
    const [isDone, setIsDone] = useState(false);
    const [progress, setProgress] = useState(0);
    const scrollRef = useRef(null);

    const bootLogs = [
        "KERNEL_INIT: [ OK ]",
        "ALLOCATING_MEMORY_PAGES... [ OK ]",
        "MAPPING_NEURAL_PATHWAY... [ OK ]",
        "ESTABLISHING_SECURE_CONNECTION...",
        "UPLINK_STATUS: BHOPAL_IN_77.41E [ CONNECTED ]",
        "HANDSHAKE_PROTOCOL: TLS_1.3 [ VERIFIED ]",
        "NEURAL_DRIVERS: v4.0.0_CYBER [ LOADED ]",
        "ENCRYPT_LAYER: SHA-512_RSA_4096 [ ACTIVE ]",
        "DECRYPTING_USER_PAYLOAD: KRISH_GUPTA",
        "PAYLOAD_DECRYPT: [ SUCCESS ]",
        "GFX_ENGINE: HOLOGRAPHIC_PIPELINE [ ENABLED ]",
        "INITIALIZING_QUANTUM_CONTEXT...",
        "SHADER_COMPILATION: [ OK ]",
        "MEMORY_CHECK: 128.0 PB [ VIRTUAL ]",
        "ESTHETHICS_CORE: KINETIC_V4 [ SYNCED ]",
        "MOUNT_POINTS: /dev/core -> node_01 [ OK ]",
        "SCANNING_HARDWARE_INTEGRITY...",
        "CPU_CORES: 256 [ ALLOCATED ]",
        "I/O_OPTIMIZATION_COMPLETE",
        "STARTING_GUI_SUBSYSTEM...",
        "LOADING_PORTFOLIO_MODULES...",
        "INITIALIZING_ANIMATION_ENGINE... [ OK ]",
        "BYPASSING_FIREWALL... [ OVERRIDDEN ]",
        "------------------------------------",
        "SYSTEM_BOOT_COMPLETE",
    ];

    useEffect(() => {
        let currentIdx = 0;
        let timeoutId;
        const totalLogs = bootLogs.length;

        const processNextLog = () => {
            if (currentIdx < totalLogs) {
                const burstSize = Math.floor(Math.random() * 3) + 1;
                const nextLogs = bootLogs.slice(currentIdx, currentIdx + burstSize);
                
                setLogs(prev => [
                    ...prev.slice(-(12 - nextLogs.length)), 
                    ...nextLogs.map(text => ({ text, color: 'text-purple-400' }))
                ]);
                
                currentIdx += nextLogs.length;
                // Cap linear progress at 98% to allow "bleeding" the last 2%
                setProgress(Math.min((currentIdx / totalLogs) * 98, 98));
                
                timeoutId = setTimeout(processNextLog, 15);
            } else {
                // Final Phase: Keep the system "moving" with ambient telemetry
                let finalPhaseIdx = 0;
                const finalChecks = [
                    "VERIFYING_SECURE_ENCLAVE... [ OK ]",
                    "OPTIMIZING_NEURAL_UPLINK... [ OK ]",
                    "ESTABLISHING_ENVIRONMENT... [ READY ]"
                ];

                const runFinalPhase = () => {
                    if (finalPhaseIdx < finalChecks.length) {
                        setLogs(prev => [...prev.slice(-11), { text: finalChecks[finalPhaseIdx], color: 'text-emerald-400' }]);
                        setProgress(prev => Math.min(prev + 0.6, 100));
                        finalPhaseIdx++;
                        setTimeout(runFinalPhase, 400); // Faster checks
                    } else {
                        const ambientInterval = setInterval(() => {
                            setLogs(prev => [...prev.slice(-11), { 
                                text: `SYNC_CORE_0x${Math.floor(Math.random()*16).toString(16).toUpperCase()}${Math.floor(Math.random()*16).toString(16).toUpperCase()}... [ ACTIVE ]`, 
                                color: 'text-slate-600' 
                            }]);
                        }, 150);

                        setTimeout(() => {
                            clearInterval(ambientInterval);
                            setProgress(100); // Force absolute 100%
                            setIsDone(true);
                            onComplete();
                        }, 600); // Shorter final hold
                    }
                };

                runFinalPhase();
            }
        };

        processNextLog();
        return () => clearTimeout(timeoutId);
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
                scale: 2,
                filter: 'brightness(5) blur(40px)',
                transition: { duration: 1.5, ease: "circIn" }
            }}
            className="fixed inset-0 z-[999] bg-[#010409] flex flex-col items-center justify-center font-mono overflow-hidden"
        >
            {/* Ambient Scanning Grid */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.05),transparent_70%)]" />

            <div className="relative w-full max-w-6xl px-12 flex flex-col items-center">
                
                {/* Header HUD Bar */}
                <div className="w-full flex justify-between items-center mb-24 border-b border-white/5 pb-6">
                    <div className="flex items-center gap-4">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-ping" />
                        <span className="text-[10px] text-purple-400 font-black tracking-[0.5em] uppercase">Krish_OS // BIOS_v4.0.1</span>
                    </div>
                    <div className="flex gap-12">
                        <div className="flex flex-col items-end">
                            <span className="text-[7px] text-slate-500 font-black uppercase">Core_Temp</span>
                            <span className="text-[10px] text-emerald-500 font-black italic">32°C // STABLE</span>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-[7px] text-slate-500 font-black uppercase">Uplink_Freq</span>
                            <span className="text-[10px] text-blue-400 font-black italic">5.2 GHz</span>
                        </div>
                    </div>
                </div>

                {/* Central Holographic Hub */}
                <div className="relative w-full grid grid-cols-1 lg:grid-cols-3 gap-24 items-center">
                    
                    {/* Left: System Stats */}
                    <div className="hidden lg:flex flex-col gap-8 opacity-40">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="space-y-2">
                                <div className="flex justify-between text-[8px] font-black text-slate-400">
                                    <span>DATA_STREAM_0{i}</span>
                                    <span>{Math.floor(Math.random() * 100)}%</span>
                                </div>
                                <div className="h-[2px] bg-white/5 relative overflow-hidden">
                                    <motion.div 
                                        animate={{ width: ["0%", "100%", "0%"] }}
                                        transition={{ duration: 2 + i, repeat: Infinity }}
                                        className="h-full bg-purple-500/30"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Center: The Core Projector */}
                    <div className="relative flex flex-col items-center">
                        {/* Circular HUD Loader */}
                        <div className="relative w-64 h-64 flex items-center justify-center">
                            <svg className="absolute inset-0 w-full h-full -rotate-90">
                                <circle cx="128" cy="128" r="120" fill="transparent" stroke="rgba(168,85,247,0.05)" strokeWidth="2" />
                                <motion.circle
                                    cx="128" cy="128" r="120"
                                    fill="transparent"
                                    stroke="#a855f7"
                                    strokeWidth="4"
                                    strokeDasharray={2 * Math.PI * 120}
                                    initial={{ strokeDashoffset: 2 * Math.PI * 120 }}
                                    animate={{ strokeDashoffset: 2 * Math.PI * 120 * (1 - progress / 100) }}
                                    className="drop-shadow-[0_0_15px_#a855f7]"
                                />
                            </svg>
                            
                            {/* Rotating Inner Rings */}
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute w-48 h-48 border border-dashed border-white/10 rounded-full" />
                            <motion.div animate={{ rotate: -360 }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className="absolute w-56 h-56 border border-white/5 rounded-full" />

                            {/* Center Logo/ID */}
                            <div className="relative z-10 flex flex-col items-center">
                                <motion.span 
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="text-6xl font-black text-white italic tracking-tighter"
                                >
                                    KG
                                </motion.span>
                                <span className="text-[8px] font-black text-purple-500 tracking-[0.4em] uppercase mt-2">Initialize</span>
                            </div>
                        </div>
                        
                        {/* Numerical Progress */}
                        <div className="mt-12 flex flex-col items-center gap-1">
                            <span className="text-4xl font-black text-white italic tracking-tighter">
                                {Math.floor(progress)}<span className="text-purple-500">%</span>
                            </span>
                            <span className="text-[7px] text-slate-500 font-black uppercase tracking-[0.6em]">System_Syncing</span>
                        </div>
                    </div>

                    {/* Right: The Holographic Terminal */}
                    <div className="bg-[#050505] border border-white/10 p-6 h-80 rounded-2xl relative overflow-hidden shadow-2xl backdrop-blur-xl">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
                        <div className="flex-1 h-full overflow-hidden flex flex-col" ref={scrollRef}>
                            <div className="mb-4 text-[8px] text-slate-600 font-black uppercase tracking-widest border-b border-white/5 pb-2">
                                Diagnostic_Log_v4.0
                            </div>
                            {logs.map((logObj, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-[10px] mb-2 tracking-tight text-purple-300 font-mono flex items-start gap-3"
                                >
                                    <span className="text-purple-600 opacity-50 shrink-0">{i.toString().padStart(2, '0')}</span>
                                    <span>{logObj.text}</span>
                                </motion.div>
                            ))}
                            {!isDone && (
                                <motion.div
                                    animate={{ opacity: [0, 1] }}
                                    transition={{ repeat: Infinity, duration: 0.6 }}
                                    className="w-1.5 h-3 bg-purple-500/50 ml-6"
                                />
                            )}
                        </div>
                        
                        {/* Corner Accents */}
                        <div className="absolute top-2 right-2 w-1 h-1 bg-purple-500 rounded-full animate-pulse" />
                    </div>
                </div>

                {/* Footer Disclaimer */}
                <div className="mt-32 opacity-20 flex items-center gap-6">
                    <div className="h-[1px] w-24 bg-white/20" />
                    <span className="text-[7px] text-white font-black uppercase tracking-[0.8em]">Neural_Link_Established // v4.0.1</span>
                    <div className="h-[1px] w-24 bg-white/20" />
                </div>
            </div>

            {/* Cinematic Glitch Overlay */}
            <div className="absolute inset-0 pointer-events-none z-50 mix-blend-overlay opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        </motion.div>
    );
};

export default BootSequence;

