import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaBroadcastTower } from 'react-icons/fa'; // Added FaBroadcastTower for Channel

const WhatsAppFloating = () => {
  const phoneNumber = "03152939539";
  const channelLink = "https://whatsapp.com/channel/0029VbB5SJqEQIaw67hnr83L";
  
  // URL formatting for clean link redirection
  const cleanNumber = phoneNumber.replace(/[^\d+]/g, '');

  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/${cleanNumber}`, '_blank', 'noopener,noreferrer');
  };

  const handleChannelRedirect = () => {
    window.open(channelLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 pointer-events-auto">
      
      {/* 1. WHATSAPP CHANNEL BUTTON */}
      <div className="relative group">
        {/* Outer Continuous Pulsing Neon Glow Ring */}
        <div className="absolute inset-0 rounded-full bg-sky-500/20 blur-md animate-ping pointer-events-none"></div>
        
        <motion.button
          onClick={handleChannelRedirect}
          className="relative w-14 h-14 rounded-full bg-[#121b22] border-2 border-sky-500/40 hover:border-sky-400 flex items-center justify-center text-sky-400 shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6)] transition-shadow duration-300"
          
          // Floating Animation with a slight offset from the other button
          animate={{
            y: [0, -6, 0],
            rotate: [0, 4, -4, 4, 0]
          }}
          transition={{
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Dynamic Inner Blue Core Glow Aura */}
          <div className="absolute inset-1 rounded-full bg-sky-500/5 group-hover:bg-sky-500/10 transition-colors duration-300"></div>

          {/* Channel Icon */}
          <FaBroadcastTower size={24} className="relative z-10 filter drop-shadow-[0_0_5px_rgba(14,165,233,0.6)] transition-transform duration-300 group-hover:scale-110" />

          {/* Tooltip Text */}
          <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-black/85 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-xl hidden md:block">
            <p className="text-[10px] font-black tracking-widest text-sky-400 uppercase whitespace-nowrap leading-none">
              Join Channel
            </p>
          </div>
        </motion.button>
      </div>

      {/* 2. WHATSAPP CHAT BUTTON */}
      <div className="relative group">
        {/* Outer Continuous Pulsing Neon Glow Ring */}
        <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-md animate-ping pointer-events-none"></div>
        
        <motion.button
          onClick={handleWhatsAppRedirect}
          className="relative w-14 h-14 rounded-full bg-[#121b22] border-2 border-emerald-500/40 hover:border-emerald-400 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] transition-shadow duration-300"
          
          // Floating Animation
          animate={{
            y: [0, -8, 0],
            rotate: [0, -6, 6, -6, 0]
          }}
          transition={{
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Dynamic Inner Green Core Glow Aura */}
          <div className="absolute inset-1 rounded-full bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors duration-300"></div>

          {/* Brand Icon */}
          <FaWhatsapp size={26} className="relative z-10 filter drop-shadow-[0_0_5px_rgba(16,185,129,0.6)] transition-transform duration-300 group-hover:scale-110" />

          {/* Tooltip Text */}
          <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-black/85 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl opacity-0 translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-xl hidden md:block">
            <p className="text-[10px] font-black tracking-widest text-emerald-400 uppercase whitespace-nowrap leading-none">
              Connect Desk
            </p>
          </div>
        </motion.button>
      </div>

    </div>
  );
};

export default WhatsAppFloating;