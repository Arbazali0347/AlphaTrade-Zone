import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaWhatsapp, FaYoutube, FaFacebookF, FaInstagram } from 'react-icons/fa';
import logo from "/logo.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-[#020617] pt-12 pb-6 px-6 overflow-hidden border-t border-white/5 font-sans">
      
      {/* Background Subtle Cyber Glow */}
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[200px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- MAIN STRUCTURE GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 items-start">
          
          {/* COLUMN 1: LOGO & TAGLINE (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="p-1 rounded-lg border border-white/5 bg-[#070f2e]/40 transition-transform duration-300 group-hover:scale-105 shrink-0">
                <img src={logo} alt="Trade Alpha Logo" width={38} className="object-contain" />
              </div>
              <div>
                <h2 className="text-lg font-black tracking-tighter text-white uppercase italic leading-none">
                  TRADE ALPHA <span className="text-blue-500">ZONE</span>
                </h2>
                <span className="text-[8px] font-bold text-zinc-500 uppercase tracking-[0.3em] block mt-1">
                  Precision . Discipline . Results
                </span>
              </div>
            </div>
            <p className="text-zinc-400 text-xs font-medium max-w-sm leading-relaxed">
              Premium institutional trading frameworks and quantitative market execution nodes.
            </p>
          </div>

          {/* COLUMN 2: QUICK NAVIGATION LINKS (4 Cols) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 sm:pl-8">
            <div className="space-y-2">
              <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest block mb-1">Navigation</span>
              <Link to="/" className="text-xs text-zinc-400 hover:text-white font-bold uppercase tracking-tight block transition-colors">Home</Link>
              <Link to="/mentor" className="text-xs text-zinc-400 hover:text-white font-bold uppercase tracking-tight block transition-colors">Mentor</Link>
              <Link to="/academy" className="text-xs text-zinc-400 hover:text-white font-bold uppercase tracking-tight block transition-colors">Academy</Link>
            </div>
          </div>

          {/* COLUMN 3: CONNECT & SOCIAL HUB (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <div>
              <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest block mb-2">Connect Hub</span>
              
              {/* BRAND COLOR HOVER ICONS */}
              <div className="flex items-center gap-3">
                <a 
                  href="https://whatsapp.com" target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#070f2e]/60 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#25D366] hover:border-[#25D366]/40 hover:bg-[#25D366]/5 transition-all shadow-md"
                >
                  <FaWhatsapp size={16} />
                </a>
                <a 
                  href="https://youtube.com" target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#070f2e]/60 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#FF0000] hover:border-[#FF0000]/40 hover:bg-[#FF0000]/5 transition-all shadow-md"
                >
                  <FaYoutube size={16} />
                </a>
                <a 
                  href="https://facebook.com" target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#070f2e]/60 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#1877F2] hover:border-[#1877F2]/40 hover:bg-[#1877F2]/5 transition-all shadow-md"
                >
                  <FaFacebookF size={14} />
                </a>
                <a 
                  href="https://instagram.com" target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#070f2e]/60 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-[#E4405F] hover:border-[#E4405F]/40 hover:bg-[#E4405F]/5 transition-all shadow-md"
                >
                  <FaInstagram size={16} />
                </a>
              </div>
            </div>

            {/* DEV CREDIT BAR (Perfect Integration) */}
            <div className="pt-2 border-t border-white/5 flex items-center justify-between gap-4">
              <div>
                <span className="text-[7px] font-bold text-zinc-500 uppercase tracking-widest block">Engineered By</span>
                <a 
                  href="https://arbaz-aro.vercel.app" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-blue-400 font-black uppercase tracking-wider text-[11px] mt-0.5 transition-colors"
                >
                  Arbaz Ali <ExternalLink size={10} className="text-blue-500" />
                </a>
              </div>
              <span className="text-[10px] font-mono text-zinc-600 hidden sm:inline">v2.0.26</span>
            </div>
          </div>

        </div>

        {/* --- BOTTOM RIGHTS BAR --- */}
        <div className="w-full pt-4 flex flex-col sm:flex-row justify-between items-center border-t border-white/5 gap-3">
          <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider text-center sm:text-left">
            © 2026 Trade Alpha Zone. All Rights Reserved.
          </p>
          <p className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest">
            STRICTLY CONFIDENTIAL // INTERNAL USE ONLY
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;