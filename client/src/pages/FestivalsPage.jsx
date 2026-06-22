import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Sparkles, Image as ImageIcon, Volume2, VolumeX, Play, Pause, Flame, Layers } from 'lucide-react';
import logo from "/logo.png";
import image_1 from "../assets/past-fetival-1.jpeg";
import image_2 from "../assets/past-fetival-2.jpeg";
import image_3 from "../assets/past-fetival-3.jpeg";
import image_4 from "../assets/past-fetival-4.jpeg";

import New_image_1 from "../assets/hamza-1.jpg";
import New_image_2 from "../assets/hamza-2.jpg";
import New_image_3 from "../assets/hamza-3.jpg";
import New_image_4 from "../assets/hamza-4.jpg";
import New_image_5 from "../assets/hamza-tahir.jpg";
import New_image_6 from "../assets/team-1.jpg";
import New_image_7 from "../assets/team.jpg";
import New_image_8 from "../assets/hamza-3.jpg";
import festivalVideo from "../assets/festival-video.mp4";

const FestivalsPage = () => {
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const videoRef = useRef(null);

    // Past Festivals with designated 2025 timestamps
    const pastFestivals = [
        { id: 1, img: image_1,  date: "2025" },
        { id: 2, img: image_2,  date: "2025" },
        { id: 3, img: image_3,  date: "2025" },
        { id: 4, img: image_4,  date: "2025" }
    ];

    // New 2026 Festival Full Images Stream (Positioned above the 2025 section)
    const newFestival2026Images = [New_image_1, New_image_2, New_image_3, New_image_4, New_image_5, New_image_6, New_image_7, New_image_8];
    
    // Duplicate the array once to create a seamless infinite loop track without any visual gaps
    const infiniteImagesTrack = [...newFestival2026Images, ...newFestival2026Images];

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="bg-[#02040e] text-white min-h-screen py-16 px-4 md:px-8 relative font-sans overflow-hidden">
            
            {/* CINEMATIC LUXURY GRADIENT GLOW BACKGROUNDS */}
            <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-blue-600/[0.07] blur-[160px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] bg-cyan-500/[0.04] blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />

            <div className="max-w-7xl mx-auto relative z-10 space-y-20">

                {/* --- HEADER NAV INTERFACE --- */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800/60 pb-10">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <img
                                src={logo}
                                className="h-9 w-auto filter drop-shadow-[0_0_10px_rgba(37,99,235,0.3)]"
                                alt="TAZ"
                            />
                            <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.25em] bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded">
                                SYSTEM EXPERIENCES
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none">
                            TRADE ALPHA ZONE <br /> 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400">
                                FESTIVAL ARENA
                            </span>
                        </h1>
                    </div>
                    <div className="flex flex-col md:items-end gap-1">
                        <p className="text-zinc-500 text-xs font-bold uppercase tracking-[0.2em]">
                            Connecting Elite Retail Nodes
                        </p>
                        <span className="text-[10px] text-zinc-600 font-mono">LOCATION // GLOBAL LIVE STREAM</span>
                    </div>
                </div>

                {/* --- FEATURED SECTION: MAIN VIDEO NODE --- */}
                <div className="space-y-8">
                    <div className="flex items-center justify-between border-b border-zinc-800/40 pb-4">
                        <div className="flex items-center gap-3 text-blue-400">
                            <Sparkles size={16} className="animate-spin text-cyan-400" style={{ animationDuration: '4s' }} />
                            <h3 className="text-lg font-black uppercase tracking-wider text-white">
                                CURRENT BROADCAST: <span className="text-cyan-400 font-mono">15 JUN SHOWCASE</span>
                            </h3>
                        </div>
                        <div className="hidden sm:flex items-center gap-2 text-[11px] text-zinc-500 uppercase font-bold tracking-widest bg-zinc-900/30 px-3 py-1.5 rounded border border-zinc-800/50">
                            <Calendar size={13} className="text-blue-500" />
                            <span>LAUNCHED JUNE 15, 2026</span>
                        </div>
                    </div>

                    {/* Premium Main Video Player */}
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full aspect-video md:max-h-[540px] rounded-[1.5rem] overflow-hidden border border-zinc-800 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] bg-black group"
                    >
                        <video
                            ref={videoRef}
                            src={festivalVideo}
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted={isMuted}
                            playsInline
                        />

                        {/* Top Ambient Edge Shade */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 pointer-events-none" />

                        {/* Video Floating Dashboard HUD */}
                        <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 z-20">
                            <div className="space-y-3 max-w-2xl">
                                <span className="inline-flex items-center gap-1.5 text-[10px] font-black text-cyan-400 uppercase tracking-widest bg-black/60 backdrop-blur-md border border-cyan-500/30 px-3 py-1 rounded">
                                    <Flame size={12} className="animate-pulse text-amber-500" /> LIVE ENVIRONMENT
                                </span>
                                <h2 className="text-sm md:text-3xl font-extrabold uppercase text-white tracking-tight drop-shadow-lg">
                                    The Trade Alpha Zone Festival Experience
                                </h2>
                            </div>

                            {/* Control Panels */}
                            <div className="flex items-center gap-3 shrink-0">
                                <button
                                    onClick={togglePlay}
                                    className="p-3.5 rounded-xl bg-zinc-900/80 hover:bg-white text-white hover:text-black border border-zinc-700/50 transition-all duration-300 backdrop-blur-md shadow-xl flex items-center justify-center transform active:scale-95"
                                >
                                    {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
                                </button>

                                <button
                                    onClick={toggleMute}
                                    className={`p-3.5 rounded-xl transition-all duration-300 border backdrop-blur-md shadow-xl flex items-center justify-center transform active:scale-95 ${
                                        isMuted 
                                        ? "bg-blue-600/20 border-blue-500/30 text-blue-400 hover:bg-blue-600 hover:text-white" 
                                        : "bg-cyan-500 text-black border-cyan-400 hover:bg-cyan-600 hover:text-white"
                                    }`}
                                >
                                    {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- NEW FESTIVAL 2026 STREAM: PREMIUM SMOOTH INFINITE MARQUEE --- */}
                    <div className="space-y-3 pt-4">
                        <div className="flex items-center gap-2 text-zinc-400 text-[11px] font-black tracking-widest uppercase">
                            <Layers size={12} className="text-blue-500" /> New Festival 2026 Live Stream Full Images
                        </div>
                        <div className="w-full overflow-hidden relative rounded-2xl border border-zinc-800/40 bg-zinc-950/20 py-10 backdrop-blur-sm">
                            {/* Left & Right Smooth Gradients for Luxury Fade Effect */}
                            <div className="absolute left-0 inset-y-0 w-32 bg-gradient-to-r from-[#02040e] via-[#02040e]/60 to-transparent z-10 pointer-events-none" />
                            <div className="absolute right-0 inset-y-0 w-32 bg-gradient-to-l from-[#02040e] via-[#02040e]/60 to-transparent z-10 pointer-events-none" />

                            <motion.div 
                                className="flex gap-6 w-max items-center will-change-transform"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{
                                    ease: "linear",
                                    duration: 40, // Perfectly balanced speed for smooth cinematic view
                                    repeat: Infinity
                                }}
                            >
                                {infiniteImagesTrack.map((img, index) => (
                                    <div 
                                        key={index} 
                                        className="w-64 md:w-80 h-[400px] md:h-[520px] rounded-2xl overflow-hidden border border-zinc-800/60 relative group shrink-0 shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-black"
                                    >
                                        <img 
                                            src={img} 
                                            alt="New Festival 2026 Stream" 
                                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-100 pointer-events-none" />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* --- BOTTOM SECTION: PAST LEGACY HIGHLIGHTS (2025) --- */}
                <div className="space-y-6 pt-6">
                    <div className="flex items-center gap-2.5 border-b border-zinc-800/60 pb-4">
                        <ImageIcon size={16} className="text-blue-500" />
                        <h3 className="text-lg font-black uppercase tracking-wider text-white">PAST LEGACY HIGHLIGHTS (2025)</h3>
                    </div>

                    {/* Dynamic Responsive Luxury Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pastFestivals.map((item) => (
                            <motion.div
                                key={item.id}
                                whileHover={{ y: -6 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="bg-[#050914] border border-zinc-850 rounded-2xl overflow-hidden group hover:border-blue-500/30 transition-all shadow-2xl flex flex-col justify-between"
                            >
                                {/* Image Box Frame */}
                                <div className="w-full aspect-[4/5] bg-zinc-950 relative overflow-hidden border-b border-zinc-900">
                                    {/* Premium Timestamp Tag */}
                                    <span className="absolute top-4 left-4 z-20 font-mono font-black text-[10px] tracking-widest text-zinc-300 bg-black/70 border border-zinc-800 px-2.5 py-1 rounded backdrop-blur-md">
                                        {item.date}
                                    </span>

                                    <img
                                        src={item.img}
                                        alt="Past Festival"
                                        className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent opacity-90" />
                                </div>                             
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FestivalsPage;