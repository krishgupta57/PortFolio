import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const BootSequence = ({ onComplete }) => {
    const [logs, setLogs] = useState([]);
    const [isDone, setIsDone] = useState(false);
    const [progress, setProgress] = useState(0);
    const [phase, setPhase] = useState('INIT'); // INIT, NEURAL, GFX, READY
    const scrollRef = useRef(null);

    const bootLogs = [
        "BIOS_v4.0.1: [ AUTHENTICATED ]",
        "KERNEL_INIT: [ OK ]",
        "ALLOCATING_MEMORY_PAGES... [ 128 PB ]",
        "MAPPING_NEURAL_PATHWAY... [ OK ]",
        "ESTABLISHING_SECURE_CONNECTION...",
        "UPLINK_STATUS: BHOPAL_HUB [ CONNECTED ]",
        "HANDSHAKE_PROTOCOL: TLS_1.3 [ VERIFIED ]",
        "NEURAL_DRIVERS: v4.0.0_CYBER [ LOADED ]",
        "ENCRYPT_LAYER: SHA-512_RSA_4096 [ ACTIVE ]",
        "DECRYPTING_USER_PAYLOAD: KRISH_GUPTA",
        "PAYLOAD_DECRYPT: [ SUCCESS ]",
        "GFX_ENGINE: HOLOGRAPHIC_PIPELINE [ ENABLED ]",
        "INITIALIZING_QUANTUM_CONTEXT...",
        "SHADER_COMPILATION: [ OK ]",
        "MEMORY_CHECK: STABLE",
        "ESTHETHICS_CORE: KINETIC_V4 [ SYNCED ]",
        "MOUNT_POINTS: /dev/core -> node_01 [ OK ]",
        "SCANNING_HARDWARE_INTEGRITY...",
        "CPU_CORES: 256 [ ALLOCATED ]",
        "I/O_OPTIMIZATION_COMPLETE",
        "IRQ_ROUTING: [ STABLE ]",
        "ACPI: [ INITIALIZED ]",
        "PCI_EXPRESS_LANE_0: [ 32 GT/s ]",
        "NVME_STORAGE_MOUNT: [ 10 GB/s ]",
        "BUFFERING_PORTFOLIO_ASSETS...",
        "COMPILING_REACT_COMPONENTS...",
        "OPTIMIZING_TAILWIND_DOM...",
        "INJECTING_NEURAL_GLITCH_LAYERS...",
        "SYNCING_CLOCK_DOMAIN: [ 0.01ms DRIFT ]",
        "VERIFYING_HOLOGRAPHIC_TEXTURES...",
        "LOADING_PROJECT_DATABASE...",
        "QUERYING_SKILLS_MATRIX...",
        "ESTABLISHING_REST_API_TUNNEL...",
        "FETCHING_SOCIAL_UPLINKS...",
        "DECOMPRESSING_IMAGERY_CORE...",
        "INIT_WORKSTATION_AESTHETICS...",
        "BYPASSING_FIREWALL... [ OVERRIDDEN ]",
        "HARDENING_CYBER_OS_SHELL...",
        "STARTING_GUI_SUBSYSTEM...",
        "LOADING_PORTFOLIO_MODULES...",
        "INITIALIZING_ANIMATION_ENGINE... [ OK ]",
        "SYSTEM_BOOT_COMPLETE"
    ];

    useEffect(() => {
        let logIndex = 0;
        let lastLogTime = Date.now();
        const startTime = Date.now();
        const TOTAL_DURATION = 3200; // 3.2s for active phase
        
        let frameId;
        const tick = () => {
            const now = Date.now();
            const elapsed = now - startTime;
            
            // 1. Update Progress
            const newProgress = Math.min((elapsed / TOTAL_DURATION) * 100, 100);
            setProgress(newProgress);
            
            if (newProgress > 75) setPhase('GFX');
            else if (newProgress > 30) setPhase('NEURAL');

            // 2. Update Logs (Steady stream)
            // Calculate how many logs should have been shown by now
            const expectedLogs = Math.floor((elapsed / TOTAL_DURATION) * bootLogs.length);
            
            if (expectedLogs > logIndex && logIndex < bootLogs.length) {
                const start = logIndex;
                const nextLogs = bootLogs.slice(start, expectedLogs);
                setLogs(prev => [
                    ...prev.slice(-(12 - nextLogs.length)), 
                    ...nextLogs.map((text, i) => ({ 
                        text, 
                        absIdx: start + i,
                        id: `log-${start + i}` 
                    }))
                ]);
                logIndex = expectedLogs;
            }

            if (elapsed < TOTAL_DURATION + 800) {
                frameId = requestAnimationFrame(tick);
                
                // Final completion trigger
                if (elapsed >= TOTAL_DURATION && !isDone) {
                    setPhase('READY');
                    // Give a small moment to see 100%
                    setTimeout(() => {
                        setIsDone(true);
                        onComplete();
                    }, 500);
                }
            }
        };

        frameId = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(frameId);
        };
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
                scale: 1.1,
                filter: 'brightness(10) blur(20px)',
                transition: { duration: 0.5, ease: "circIn" }
            }}
            className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center font-mono overflow-hidden"
        >
            {/* Stable Binary Rain Background */}
            <div className="absolute inset-0 opacity-[0.15] pointer-events-none overflow-hidden">
                <div className="flex justify-between px-2 w-full h-full">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: -100 }}
                            animate={{ y: ['0vh', '100vh'] }}
                            transition={{ 
                                duration: Math.random() * 5 + 3, 
                                repeat: Infinity, 
                                ease: "linear",
                                delay: Math.random() * 5
                            }}
                            className="text-[8px] md:text-[10px] text-purple-500 font-mono flex flex-col whitespace-nowrap"
                        >
                            {[...Array(30)].map((_, j) => (
                                <span key={j}>{Math.random() > 0.5 ? '1' : '0'}</span>
                            ))}
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1),transparent_70%)]" />
            
            {/* Scanning Scanline */}
            <div className="absolute inset-0 pointer-events-none z-50 overflow-hidden">
                <motion.div 
                    animate={{ top: ['-10%', '110%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 w-full h-[2px] bg-purple-500/30 shadow-[0_0_20px_#a855f7]"
                />
            </div>

            <div className="relative w-full max-w-7xl px-8 flex flex-col items-center">
                
                {/* Top HUD Stats */}
                <div className="w-full flex justify-between items-end mb-12 border-b border-white/10 pb-4">
                    <div className="flex flex-col gap-1">
                        <span className="text-[8px] text-slate-500 uppercase tracking-widest">Initialization_Vector</span>
                        <div className="flex items-center gap-3">
                            <div className={`w-2 h-2 rounded-full animate-pulse shadow-[0_0_10px] ${phase === 'READY' ? 'bg-emerald-500 shadow-emerald-500' : 'bg-purple-500 shadow-purple-500'}`} />
                            <span className="text-xs text-white font-black uppercase tracking-widest">{phase}_OS_v4.0</span>
                        </div>
                    </div>
                    <div className="text-[10px] text-slate-400 font-black flex gap-8">
                        <div className="flex flex-col items-end">
                            <span className="text-[6px] uppercase tracking-widest text-slate-600">Buffer_Rate</span>
                            <span>{Math.floor(Math.random() * 900) + 100} MB/s</span>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-[6px] uppercase tracking-widest text-slate-600">Handshake</span>
                            <span className="text-emerald-500">ACTIVE</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 w-full items-center">
                    
                    {/* Left Diagnostic Bar */}
                    <div className="hidden lg:flex flex-col gap-6">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="space-y-1">
                                <div className="flex justify-between text-[6px] font-black text-slate-500 uppercase">
                                    <span>Stream_{i}</span>
                                    <span className="text-purple-400">{Math.floor(Math.random() * 100)}%</span>
                                </div>
                                <div className="h-[1px] bg-white/5 relative overflow-hidden">
                                    <motion.div 
                                        animate={{ width: ["0%", "100%", "0%"] }}
                                        transition={{ duration: 1 + i, repeat: Infinity }}
                                        className="h-full bg-purple-500/40 shadow-[0_0_8px_#a855f7]"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Main Core Projector */}
                    <div className="lg:col-span-2 relative flex flex-col items-center scale-75 sm:scale-90 md:scale-100 transition-transform">
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
                            {/* Outer Rings */}
                            <motion.div 
                                animate={{ rotate: 360, scale: [1, 1.05, 1] }} 
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }} 
                                className="absolute inset-0 border-2 border-dashed border-purple-500/20 rounded-full" 
                            />
                            <motion.div 
                                animate={{ rotate: -360 }} 
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }} 
                                className="absolute inset-8 border border-white/10 rounded-full shadow-[inset_0_0_30px_rgba(168,85,247,0.1)]" 
                            />
                            
                            {/* Inner Dynamic Rings */}
                            <svg className="absolute inset-0 w-full h-full -rotate-90 scale-75 sm:scale-100">
                                <circle cx="160" cy="160" r="140" fill="transparent" stroke="rgba(255,255,255,0.02)" strokeWidth="1" />
                                <motion.circle
                                    cx="160" cy="160" r="140"
                                    fill="transparent"
                                    stroke={phase === 'GFX' ? '#10b981' : '#a855f7'}
                                    strokeWidth="6"
                                    strokeDasharray={2 * Math.PI * 140}
                                    animate={{ strokeDashoffset: 2 * Math.PI * 140 * (1 - progress / 100) }}
                                    className="drop-shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-colors duration-500"
                                />
                            </svg>

                            <div className="flex flex-col items-center z-10">
                                <motion.div 
                                    animate={{ scale: [1, 1.1, 1], filter: ['hue-rotate(0deg)', 'hue-rotate(90deg)', 'hue-rotate(0deg)'] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="text-8xl font-black text-white italic tracking-tighter"
                                >
                                    KG
                                </motion.div>
                                <div className="mt-4 px-4 py-1 bg-white/5 border border-white/10 rounded-sm">
                                    <span className="text-[10px] font-black text-purple-500 uppercase tracking-[0.6em]">System_Sync</span>
                                </div>
                            </div>
                        </div>

                        {/* Large Percentage */}
                        <div className="mt-12 flex flex-col items-center">
                            <span className="text-7xl font-black text-white italic tracking-tighter flex items-end gap-2">
                                {Math.floor(progress)}<span className="text-3xl text-purple-500 mb-2">%</span>
                            </span>
                            <div className="h-1 w-64 bg-white/5 mt-4 overflow-hidden rounded-full border border-white/5">
                                <motion.div 
                                    animate={{ width: `${progress}%` }}
                                    className={`h-full transition-colors duration-500 ${phase === 'GFX' ? 'bg-emerald-500' : 'bg-purple-500'}`}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Terminal Feed */}
                    <div className="bg-[#080808] border border-white/10 p-6 h-[450px] rounded-3xl relative overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                        <div className="mb-4 text-[10px] font-black text-slate-500 border-b border-white/5 pb-2 flex justify-between items-center">
                            <span>DIAGNOSTIC_FEED_v4.0</span>
                            <span className="text-emerald-500 animate-pulse uppercase">Live</span>
                        </div>
                        <div className="flex-1 overflow-hidden space-y-3" ref={scrollRef}>
                            {logs.map((log, i) => (
                                <motion.div
                                    key={log.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-[11px] font-mono leading-tight flex items-start gap-4"
                                >
                                    <span className="text-slate-700 shrink-0 font-black">
                                        [0x{log.absIdx.toString(16).toUpperCase().padStart(2, '0')}]
                                    </span>
                                    <span className={i === logs.length - 1 ? 'text-emerald-400 font-bold' : 'text-purple-300'}>
                                        {log.text}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                        
                        {/* Memory Map Mockup */}
                        <div className="mt-6 pt-4 border-t border-white/5 grid grid-cols-8 gap-1">
                             {[...Array(32)].map((_, i) => (
                                <motion.div 
                                    key={i}
                                    animate={{ opacity: [0.1, 0.5, 0.1] }}
                                    transition={{ duration: Math.random() * 2 + 1, repeat: Infinity }}
                                    className={`h-2 rounded-sm ${Math.random() > 0.8 ? 'bg-purple-500' : 'bg-white/5'}`}
                                />
                             ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Metadata */}
                <div className="mt-16 w-full flex justify-center items-center gap-12 opacity-30">
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/20" />
                    <span className="text-[8px] font-black text-white uppercase tracking-[1em] whitespace-nowrap">Neural_Link_Established // v4.0.1</span>
                    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/20" />
                </div>
            </div>
        </motion.div>
    );
};

export default BootSequence;

