import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Terminal, ArrowRight, ShoppingCart } from 'lucide-react';
import tazCadetLogo from '../assets/taz-cadet-pro.jpeg'; // Make sure the path matches your asset location

const CourseCadetFeature = () => {
    const navigate = useNavigate();

    const handleBuyNow = () => {
        // Direct official pre-filled message link to your WhatsApp number
        const whatsappUrl = "https://wa.me/923152939539?text=Hello%20Trade%20Alpha%20Zone,%20I%20want%20to%20buy%20the%20TAZ%20Cadet%20Pro%20Software.";
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="w-full py-24 px-4 relative bg-[#020617] overflow-hidden">
            {/* Dynamic Tactical Ambiance Glows (Alpha Green Theme) */}
            <div className="absolute top-1/4 left-1/3 w-[600px] h-[400px] bg-emerald-500/[0.04] blur-[140px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-green-500/[0.02] blur-[120px] rounded-full pointer-events-none" />
            
            <div className="max-w-6xl mx-auto">
                <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center bg-gradient-to-b from-[#060b13] via-[#03060d] to-[#010205] border border-zinc-800/40 rounded-[2rem] p-8 md:p-12 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.95)] relative overflow-hidden group select-none">
                    
                    {/* Top Alpha Green Thin Matrix Edge Accent */}
                    <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent group-hover:via-emerald-400/50 transition-all duration-500" />

                    {/* ================= LEFT PANEL: LOGO IMAGE ================= */}
                    <div className="md:col-span-5 flex justify-center items-center z-10">
                        <motion.img 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            src={tazCadetLogo} 
                            alt="TAZ Cadet Pro" 
                            className="w-full rounded-2xl max-w-[280px] md:max-w-xs object-contain filter drop-shadow-[0_10px_30px_rgba(16,185,129,0.15)] group-hover:drop-shadow-[0_15px_40px_rgba(16,185,129,0.25)] transition-all duration-500"
                        />
                    </div>

                    {/* ================= RIGHT PANEL: TITLE, TEXT & INTERFACES ================= */}
                    <div className="md:col-span-7 space-y-6 z-10">
                        <div className="flex flex-wrap items-center gap-2.5">
                            <span className="flex items-center gap-1.5 text-[10px] font-black tracking-[0.2em] text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded border border-emerald-500/20 uppercase">
                                <Terminal size={11} /> BRAND SOFTWARE ASSET
                            </span>
                            <span className="text-[10px] font-bold tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-1 rounded">
                                PRO VERSION
                            </span>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-white leading-none">
                                TAZ CADET <br />
                                <span className="text-transparent whitespace-pre bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-cyan-400">
                                    INTELLIGENCE  PRO
                                </span>
                            </h2>
                            
                            <p className="text-zinc-400 text-sm font-normal tracking-wide leading-relaxed">
                                Beyond traditional chart drawings and pattern chasing. TAZ Cadet Pro is an elite trading intelligence asset built to challenge standard lagging indicators and isolate institutional high-probability setups with maximum volume precision.
                            </p>
                        </div>

                        {/* ACTION BUTTONS INTERFACE PANEL */}
                        <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                            {/* Get More Details Button */}
                            <button
                                onClick={() => navigate('/software/autosignal-x')}
                                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 border border-zinc-800/80 transition-all duration-300 font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 transform active:scale-95 shadow-md"
                            >
                                <span>Get More Details</span>
                                <ArrowRight size={14} className="text-zinc-500" />
                            </button>

                            {/* Buy Now (WhatsApp Order Redirect Node) */}
                            <button
                                onClick={handleBuyNow}
                                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-black font-black text-xs tracking-widest uppercase flex items-center justify-center gap-2 transform active:scale-95 shadow-[0_10px_30px_rgba(16,185,129,0.2)] hover:shadow-[0_15px_45px_rgba(16,185,129,0.35)] transition-all duration-350"
                            >
                                <ShoppingCart size={14} fill="black" />
                                <span>Buy Now</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CourseCadetFeature;