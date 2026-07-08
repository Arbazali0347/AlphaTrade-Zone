import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; //  Fixed Import
import { Terminal, ArrowRight, ShoppingCart, Shield, TrendingUp, Zap } from 'lucide-react';
import tazCadetLogo from '../assets/taz-cadet-pro.jpeg';
import tazCadetVideo from '../assets/cadetpro.mp4'; 

const ScanlineGrid = () => (
    <svg className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10b981" strokeWidth="0.5"/>
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
);

const CornerAccent = ({ position }) => {
    const corners = {
        tl: "top-0 left-0 border-t border-l",
        tr: "top-0 right-0 border-t border-r",
        bl: "bottom-0 left-0 border-b border-l",
        br: "bottom-0 right-0 border-b border-r",
    };
    return (
        <div className={`absolute w-5 h-5 border-emerald-500/60 ${corners[position]}`} />
    );
};

const StatPill = ({ icon: Icon, label, value }) => (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900/70 border border-zinc-800/60">
        <Icon size={11} className="text-emerald-400 shrink-0" />
        <span className="text-[10px] font-bold text-zinc-500 tracking-widest uppercase">{label}</span>
        <span className="text-[10px] font-black text-emerald-400 tracking-wide">{value}</span>
    </div>
);

const CourseCadetFeature = () => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const desktopVideoRef = useRef(null);

    // Desktop hover handles play/pause state safely
    useEffect(() => {
        if (desktopVideoRef.current) {
            if (isHovered) {
                desktopVideoRef.current.currentTime = 0;
                desktopVideoRef.current.play().catch(err => console.log("Hover video play blocked:", err));
            } else {
                desktopVideoRef.current.pause();
            }
        }
    }, [isHovered]);

    const handleBuyNow = () => {
        const whatsappUrl = "https://wa.me/923152939539?text=Hello%20Trade%20Alpha%20Zone,%20I%20want%20to%20buy%20the%20TAZ%20Cadet%20Pro%20Software.";
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="w-full py-24 px-4 bg-[#020617] relative overflow-hidden">

            {/* Deep ambient glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-emerald-600/[0.03] blur-[160px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-teal-500/[0.03] blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-green-400/[0.02] blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full"
                >
                    {/* Outer frame glow */}
                    <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/5 pointer-events-none" />

                    {/* Main card */}
                    <div className="relative w-full grid grid-cols-1 md:grid-cols-12 gap-0 items-stretch bg-gradient-to-br from-[#060d1a] via-[#040810] to-[#020508] border border-zinc-800/50 rounded-[2rem] overflow-hidden shadow-[0_60px_120px_-20px_rgba(0,0,0,0.9)] select-none">

                        <ScanlineGrid />
                        <CornerAccent position="tl" />
                        <CornerAccent position="tr" />
                        <CornerAccent position="bl" />
                        <CornerAccent position="br" />

                        {/* Top edge accent */}
                        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
                        {/* Bottom edge accent */}
                        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent" />

                        {/* ======== LEFT PANEL ======== */}
                        <div className="md:col-span-5 relative flex flex-col items-center justify-center p-10 md:p-12 border-b md:border-b-0 md:border-r border-zinc-800/40">

                            {/* Radial glow behind logo */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-64 h-64 rounded-full bg-emerald-500/[0.04] blur-[60px]" />
                            </div>

                            {/* HUD ring */}
                            <div className="absolute inset-8 rounded-full border border-emerald-500/[0.06] pointer-events-none" />
                            <div className="absolute inset-12 rounded-full border border-emerald-500/[0.04] pointer-events-none" />

                            {/* Scanning line animation */}
                            <div className="absolute inset-0 overflow-hidden rounded-l-[2rem] pointer-events-none">
                                <motion.div
                                    initial={{ top: "-5%" }}
                                    animate={{ top: "105%" }}
                                    transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                                    className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent"
                                />
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                                className="relative z-10 w-full flex justify-center"
                            >
                                {/* Media Display Frame */}
                                <div 
                                    className="relative p-1 rounded-2xl bg-gradient-to-br from-emerald-500/15 via-transparent to-teal-500/10 border border-emerald-500/20 w-full max-w-[240px] md:max-w-[260px] aspect-square overflow-hidden cursor-pointer"
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    
                                    {/* 1. MOBILE VIDEO VIEW */}
                                    <video
                                        src={tazCadetVideo}
                                        muted
                                        loop
                                        playsInline
                                        autoPlay
                                        className="absolute inset-0 w-full h-full object-cover rounded-xl block md:hidden z-10"
                                    />

                                    {/* 2. DESKTOP VIDEO VIEW */}
                                    <video
                                        ref={desktopVideoRef}
                                        src={tazCadetVideo}
                                        muted
                                        loop
                                        playsInline
                                        className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-300 z-10 hidden md:block ${
                                            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                        }`}
                                    />

                                    {/* 3. DESKTOP ORIGINAL IMAGE */}
                                    <img
                                        src={tazCadetLogo}
                                        alt="TAZ Cadet Pro"
                                        className={`w-full h-full rounded-xl object-contain hidden md:block transition-opacity duration-300 ${
                                            isHovered ? 'opacity-0' : 'opacity-100'
                                        }`}
                                    />
                                    
                                    {/* Logo corner accents */}
                                    <div className="absolute top-1 left-1 w-3 h-3 border-t border-l border-emerald-400/60 rounded-tl-sm z-20" />
                                    <div className="absolute top-1 right-1 w-3 h-3 border-t border-r border-emerald-400/60 rounded-tr-sm z-20" />
                                    <div className="absolute bottom-1 left-1 w-3 h-3 border-b border-l border-emerald-400/60 rounded-bl-sm z-20" />
                                    <div className="absolute bottom-1 right-1 w-3 h-3 border-b border-r border-emerald-400/60 rounded-br-sm z-20" />
                                </div>
                            </motion.div>

                            {/* Status indicator */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="relative z-10 mt-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/15"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                                </span>
                                <span className="text-[10px] font-bold tracking-[0.2em] text-emerald-400/80 uppercase">System Active</span>
                            </motion.div>
                        </div>

                        {/* ======== RIGHT PANEL ======== */}
                        <div className="md:col-span-7 flex flex-col justify-center space-y-7 p-10 md:p-12 z-10">

                            {/* Badges */}
                            <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="flex flex-wrap items-center gap-2"
                            >
                                <span className="flex items-center gap-1.5 text-[9px] font-black tracking-[0.25em] text-emerald-300 bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/25 uppercase">
                                    <Terminal size={10} /> Brand Software Asset
                                </span>
                                <span className="flex items-center gap-1 text-[9px] font-black tracking-[0.2em] text-amber-300 bg-amber-500/10 border border-amber-400/25 px-2.5 py-1 rounded uppercase">
                                    <Zap size={9} fill="currentColor" /> Pro Version
                                </span>
                            </motion.div>

                            {/* Title */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.25 }}
                                className="space-y-1"
                            >
                                <p className="text-[10px] font-black tracking-[0.35em] text-zinc-600 uppercase">Trade Alpha Zone</p>
                                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-[0.95]">
                                    TAZ CADET
                                </h2>
                                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-[0.95]">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-400">
                                        INTELLIGENCE
                                    </span>
                                    <span className="ml-3 text-2xl md:text-3xl font-black text-zinc-500 align-middle">PRO</span>
                                </h2>
                            </motion.div>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.35 }}
                                className="text-zinc-500 text-sm leading-relaxed tracking-wide max-w-md border-l-2 border-emerald-500/20 pl-4"
                            >
                                Beyond traditional chart drawings and pattern chasing. TAZ Cadet Pro is an elite trading intelligence asset built to challenge standard lagging indicators and isolate institutional high-probability setups with maximum volume precision.
                            </motion.p>

                            {/* Stats row */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-wrap gap-2"
                            >
                                <StatPill icon={TrendingUp} label="Type" value="Institutional" />
                                <StatPill icon={Shield} label="Version" value="v2.0 Pro" />
                                <StatPill icon={Zap} label="Signal" value="High-Precision" />
                            </motion.div>

                            {/* Divider */}
                            <div className="h-px bg-gradient-to-r from-zinc-800/80 via-zinc-700/30 to-transparent" />

                            {/* Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.45 }}
                                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
                            >
                                {/* Details button */}
                                <button
                                    onClick={() => navigate('/software/autosignal-x')}
                                    className="group relative px-6 py-3.5 rounded-xl bg-transparent hover:bg-zinc-900/60 text-zinc-300 border border-zinc-700/60 hover:border-zinc-600/80 transition-all duration-300 font-bold text-[10px] tracking-[0.2em] uppercase flex items-center justify-center gap-2 active:scale-95 overflow-hidden"
                                >
                                    <span className="relative z-10">Get More Details</span>
                                    <ArrowRight size={13} className="relative z-10 text-zinc-500 group-hover:text-zinc-300 group-hover:translate-x-0.5 transition-all duration-300" />
                                </button>

                                {/* Buy Now button */}
                                <button
                                    onClick={handleBuyNow}
                                    className="group relative px-8 py-3.5 rounded-xl text-black font-black text-[10px] tracking-[0.2em] uppercase flex items-center justify-center gap-2 active:scale-95 overflow-hidden transition-all duration-300"
                                >
                                    {/* Button bg layers */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-emerald-500 to-green-500 transition-all duration-300 group-hover:from-emerald-300 group-hover:via-emerald-400 group-hover:to-green-400" />
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.15)_0%,_transparent_70%)]" />
                                    {/* Shimmer effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "200%" }}
                                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                                    />
                                    <ShoppingCart size={13} className="relative z-10" fill="currentColor" />
                                    <span className="relative z-10">Buy Now</span>
                                </button>
                            </motion.div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default CourseCadetFeature;