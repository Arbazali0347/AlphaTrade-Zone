import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Sparkles, Image as ImageIcon, ArrowRight } from 'lucide-react';
import logo from "/logo.png";
import image_1 from "../assets/past-fetival-1.jpeg"
import image_2 from "../assets/past-fetival-2.jpeg"
import image_3 from "../assets/past-fetival-3.jpeg"
import image_4 from "../assets/past-fetival-4.jpeg"

const FestivalsPage = () => {

    // Past Festival Assets Provided by You
    const pastFestivals = [
        { id: 1, img: image_1, },
        { id: 2, img: image_2, },
        { id: 3, img: image_3, },
        { id: 4, img: image_4, }
    ];

    return (
        <div className="bg-[#010413] text-white min-h-screen py-16 px-4 md:px-6 relative font-sans overflow-hidden">

            {/* BACKGROUND GRAPHIC GLOW NODES */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 blur-[130px] rounded-full pointer-events-none"></div>


            <div className="max-w-7xl mx-auto relative z-10 space-y-20">

                {/* --- NAVBAR BRAND HEADER --- */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <img
                                src={logo}
                                className="h-10 w-auto filter drop-shadow-[0_0_8px_rgba(37,99,235,0.4)]"
                                alt="TAZ"
                            />
                            <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em] bg-cyan-500/10 px-3 py-1 rounded-md">
                                Live Ecosystem Events
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter leading-none">
                            Trade Alpha Zone <br /> <span className="text-blue-500">Festivals</span>
                        </h1>
                    </div>
                    <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
                        Connecting Elite Retail Nodes
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center gap-2.5 text-zinc-400 border-b border-white/5 pb-4">
                        <ImageIcon size={16} className="text-blue-500" />
                        <h3 className="text-xl font-black uppercase italic tracking-tight text-white">Past Festival Highlights</h3>
                    </div>

                    {/* Clean 4-Column Image Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pastFestivals.map((item) => (
                            <motion.div
                                key={item.id}
                                whileHover={{ y: -5 }}
                                className="bg-[#030712] border border-white/5 rounded-[2rem] overflow-hidden group hover:border-blue-500/20 transition-all shadow-xl flex flex-col justify-between"
                            >
                                {/* Image Frame Container */}
                                <div className="w-full aspect-[4/5] bg-zinc-950 relative overflow-hidden border-b border-white/5">
                                    <img
                                        src={item.img}
                                        alt={item.label}
                                        className="w-full h-full object-cover opacity-75 group-hover:scale-103 group-hover:opacity-100 transition-all duration-500"
                                        loading="lazy"
                                    />
                                    {/* Overlay shadow */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                </div>

                                {/* Info Bar */}
                                <div className="p-4 bg-gradient-to-b from-transparent to-[#020719] flex justify-between items-center">
                                    <div>
                                        <span className="text-[8px] font-bold text-zinc-500 uppercase tracking-widest block">TAZ Experience</span>
                                        <h4 className="text-xs font-black uppercase tracking-tight text-white group-hover:text-cyan-400 transition-colors mt-0.5">
                                            {item.label}
                                        </h4>
                                    </div>
                                    <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                        <ArrowRight size={12} className="text-zinc-400 group-hover:text-white transition-transform group-hover:translate-x-0.5" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* --- TOP SECTION: UPCOMING FESTIVAL BANNER --- */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2 text-blue-400">
                        <Sparkles size={14} className="animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Next Evolution Node</span>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full bg-gradient-to-r from-[#040e29] via-[#020717] to-[#051336] border border-blue-500/30 rounded-[2.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl"
                    >
                        {/* Glow framing */}
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-600/10 to-transparent pointer-events-none"></div>

                        <div className="space-y-4 relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white leading-none">
                                UPCOMING <br /><span className="text-cyan-400">TAZ FESTIVAL.</span>
                            </h2>
                            <p className="text-zinc-400 text-xs md:text-sm max-w-md font-medium tracking-wide">
                                Join the biggest live trading community conference. Interactive strategy panels and custom network setups.
                            </p>
                        </div>

                        {/* Dynamic Date Badge */}
                        <div className="bg-[#010413] border border-white/10 rounded-[2rem] p-6 md:p-8 flex flex-col items-center justify-center text-center shrink-0 min-w-[220px] shadow-xl relative group hover:border-cyan-500/30 transition-colors">
                            <Calendar className="text-cyan-400 mb-3" size={24} />
                            <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest block mb-1">Target Date</span>
                            <span className="text-2xl md:text-3xl font-black italic text-white uppercase tracking-tight">
                                1 Jun 2026
                            </span>
                            <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mt-2 block">
                                Save The Date
                            </span>
                        </div>
                    </motion.div>
                </div>
                {/* --- BOTTOM SECTION: PAST FESTIVALS PREMIUM IMAGE GALLERY --- */}


            </div>
        </div>
    );
};

export default FestivalsPage;