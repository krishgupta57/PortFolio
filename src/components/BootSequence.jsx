import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const BootSequence = ({ onComplete }) => {
    const [logs, setLogs] = useState([]);
    const [isDone, setIsDone] = useState(false);
    const scrollRef = useRef(null);

    const bootLogs = [
        "KERNEL_INIT: [ OK ]",
        "ALLOCATING_MEMORY_PAGES... [ OK ]",
        "MAPPING_NEURAL_PATHWAY... [ OK ]",
        "ESTABLISHING_SECURE_CONNECTION...",
        "UPLINK_STATUS: BHOPAL_IN_77.41E [ CONNECTED ]",
        "HANDSHAKE_PROTOCOL: TLS_1.3 [ VERIFIED ]",
        "NEURAL_DRIVERS: v3.2.0_ELITE [ LOADED ]",
        "ENCRYPT_LAYER: SHA-512_RSA_2048 [ ACTIVE ]",
        "DECRYPTING_USER_PAYLOAD...",
        "PAYLOAD_DECRYPT: [ SUCCESS ]",
        "GFX_ENGINE: RAY_TRACE_PIPELINE [ ENABLED ]",
        "INITIALIZING_WEBGL_CONTEXT...",
        "SHADER_COMPILATION: [ OK ]",
        "MEMORY_CHECK: 64.0 TB [ VIRTUAL ]",
        "ESTHETHICS_CORE: CINEMATIC_V6 [ SYNCED ]",
        "MOUNT_POINTS: /dev/root -> node_01 [ OK ]",
        "SCANNING_HARDWARE_INTEGRITY...",
        "CPU_THREADS: 128 [ ALLOCATED ]",
        "I/O_OPTIMIZATION_COMPLETE",
        "LOADING_PORTFOLIO_MODULES...",
        "INITIALIZING_ANIMATION_ENGINE... [ OK ]",
        "CACHING_ASSETS_IN_VRAM... [ OK ]",
        "MOUNTING_VIRTUAL_DOM... [ OK ]",
        "ESTABLISHING_WSS_CONNECTION... [ OK ]",
        "APPLYING_THEME_VARIABLES... [ OK ]",
        "STARTING_BACKGROUND_WORKERS... [ OK ]",
        "VALIDATING_SESSION_STATE... [ OK ]",
        "LOADING_CUSTOM_FONTS... [ OK ]",
        "INITIALIZING_ROUTER... [ OK ]",
        "FETCHING_API_ENDPOINTS... [ OK ]",
        "RESOLVING_DEPENDENCIES... [ OK ]",
        "INJECTING_SCRIPTS... [ OK ]",
        "STARTING_TELEMETRY_SERVICE... [ OK ]",
        "SECURING_COMMUNICATION_CHANNELS... [ OK ]",
        "OPTIMIZING_RENDER_TREE... [ OK ]",
        "LOADING_STATE_MANAGEMENT... [ OK ]",
        "INITIALIZING_LOCAL_STORAGE... [ OK ]",
        "SYNCING_OFFLINE_DATA... [ OK ]",
        "CALCULATING_LAYOUT_METRICS... [ OK ]",
        "BINDING_EVENT_LISTENERS... [ OK ]",
        "WARMING_UP_CACHE... [ OK ]",
        "CHECKING_SYSTEM_REQUIREMENTS... [ OK ]",
        "LOADING_ANALYTICS_MODULE... [ OK ]",
        "INITIALIZING_ERROR_TRACKING... [ OK ]",
        "STARTING_PERFORMANCE_PROFILER... [ OK ]",
        "LOADING_ACCESSIBILITY_FEATURES... [ OK ]",
        "INITIALIZING_I18N_MODULE... [ OK ]",
        "SYNCING_USER_PROFILE... [ OK ]",
        "LOADING_NOTIFICATIONS_SERVICE... [ OK ]",
        "INITIALIZING_WEB_WORKERS... [ OK ]",
        "PARSING_USER_PREFERENCES... [ OK ]",
        "COMPILING_TAILWIND_CLASSES... [ OK ]",
        "PRELOADING_IMAGES... [ OK ]",
        "CHECKING_AUTHENTICATION_TOKENS... [ OK ]",
        "RESOLVING_DNS_ROUTES... [ OK ]",
        "CALIBRATING_QUANTUM_PROCESSOR... [ OK ]",
        "LOADING_FRONTEND_COMPONENTS... [ OK ]",
        "SYNCING_DATABASE_STATE... [ OK ]",
        "CHECKING_NETWORK_LATENCY... [ OK ]",
        "LOADING_MODULE_AI_CORE... [ OK ]",
        "EXECUTING_STARTUP_SCRIPTS... [ OK ]",
        "VERIFYING_COMPONENT_INTEGRITY... [ OK ]",
        "INITIALIZING_STATE_MACHINE... [ OK ]",
        "LOADING_PLUGINS... [ OK ]",
        "CONFIGURING_ENVIRONMENT_VARIABLES... [ OK ]",
        "ALLOCATING_THREAD_POOL... [ OK ]",
        "DISCOVERING_NODE_MODULES... [ OK ]",
        "COMPILING_TYPESCRIPT_INTERFACES... [ OK ]",
        "GENERATING_SOURCEMAPS... [ OK ]",
        "LINKING_CSS_MODULES... [ OK ]",
        "INITIALIZING_VITE_HMR... [ OK ]",
        "INJECTING_POLYFILLS... [ OK ]",
        "WARMING_UP_SERVICE_WORKERS... [ OK ]",
        "SYNCING_LOCAL_STATE... [ OK ]",
        "RESOLVING_GRAPHQL_SCHEMA... [ OK ]",
        "CHECKING_DATABASE_MIGRATIONS... [ OK ]",
        "LOADING_MACHINE_LEARNING_MODELS... [ OK ]",
        "CONFIGURING_LOAD_BALANCER... [ OK ]",
        "INITIALIZING_CI_CD_PIPELINE... [ OK ]",
        "SECURING_API_ENDPOINTS... [ OK ]",
        "GENERATING_SSL_CERTIFICATES... [ OK ]",
        "BINDING_UDP_PORTS... [ OK ]",
        "STARTING_WEB_SOCKET_SERVER... [ OK ]",
        "COMPILING_STATIC_ASSETS... [ OK ]",
        "OPTIMIZING_CHUNKS... [ OK ]",
        "MINIFYING_JAVASCRIPT... [ OK ]",
        "ANALYZING_BUNDLE_SIZE... [ OK ]",
        "CHECKING_VULNERABILITIES... [ OK ]",
        "STARTING_MONITORING_DAEMON... [ OK ]",
        "INITIALIZING_LOGGING_SERVICE... [ OK ]",
        "FETCHING_PROJECT_DATA... [ OK ]",
        "COMPILING_REACT_TREE...",
        "VERIFYING_DYNAMICS: [ OPTIMAL ]",
        "PREPARING_UI_WORKSPACE...",
        "INJECTING_CUSTOM_CSS_VARS...",
        "AUTHENTICATING_USER: KRISH_GUPTA...",
        "ACCESS_GRANTED: ELITE_ARCHITECT_LEVEL",
        "BYPASSING_FIREWALL... [ OVERRIDDEN ]",
        "------------------------------------",
        "SYSTEM_BOOT_COMPLETE",
    ];

    useEffect(() => {
        let currentIdx = 0;
        const logInterval = setInterval(() => {
            if (currentIdx < bootLogs.length) {
                const nextLog = bootLogs[currentIdx];
                if (nextLog) {
                    setLogs(prev => [...prev.slice(-15), nextLog]);
                }
                currentIdx++;
            } else {
                clearInterval(logInterval);
                setTimeout(() => setIsDone(true), 400); // stops blinking cursor
                setTimeout(onComplete, 1000); // 1-second pause before proceeding
            }
        }, 40);

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
                transition: { duration: 1.2, ease: "circIn" }
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
                        <p>OWNER: KRISH_GUPTA</p>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left: ASCII / System Data */}
                    <div className="space-y-6">
                        <div className="text-pink-500 font-bold text-lg leading-none">
                            <pre className="inline-block text-xl">
                                {`
    __ __ ______
   / //_// ____/
  / ,<  / / __  
 / /| |/ /_/ /  
/_/ |_|\\____/   
                                `}
                            </pre>
                            <div className="mt-2 text-[8px] opacity-50 uppercase tracking-[0.5em]">Neural Uplink v3.2</div>
                        </div>

                        <div className="space-y-2">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="flex gap-2">
                                    <div className="h-1 flex-1 bg-white/5 relative overflow-hidden">
                                        <motion.div
                                            animate={{ x: ["-100%", "100%"] }}
                                            transition={{ duration: Math.random() * 1 + 0.5, repeat: Infinity, ease: "linear" }}
                                            className="absolute inset-0 bg-blue-500/20"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: The Terminal Log */}
                    <div className="bg-black/40 border border-white/5 p-4 h-64 flex flex-col shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
                        <div className="flex-1 overflow-hidden" ref={scrollRef}>
                            {logs.map((log, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`text-[11px] mb-1 tracking-tight ${log?.includes?.('OK') || log?.includes?.('COMPLETE') ? 'text-emerald-500' : 'text-slate-300'}`}
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
                        Synchronizing Environmental Workspace...
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

