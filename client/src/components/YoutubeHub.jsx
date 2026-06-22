import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaVideo, FaYoutube } from 'react-icons/fa';

const EmbedYoutubeHub = () => {
  // Shuruat mein saari videos ka array state mein rkhenge taake dynamic swap ho sake
  const [playlist, setPlaylist] = useState([
    {
      id: "osDFfKmNYCU",
      embedUrl: "https://www.youtube.com/embed/osDFfKmNYCU?autoplay=1&si=J5DwRQWDDPW-AonY",
      title: "Gold & Oil Daily Analysis | US-Iran War Impact on Markets | May 19 2026"
    },
    {
      id: "f7rBQUSLj2k",
      embedUrl: "https://www.youtube.com/embed/f7rBQUSLj2k?autoplay=1&si=O53xPo7XKuUj7M6R",
      title: "How Much Money Do You Need To Start Trading"
    },
    {
      id: "h7RcqwRl9tM",
      embedUrl: "https://www.youtube.com/embed/h7RcqwRl9tM?autoplay=1&si=3LI-P5KYRuJA9HT5",
      title: "Trading academy for Beginners | The Ultimate Guide to Mastering Trading"
    },
    {
      id: "wWkCmtSSlVM",
      embedUrl: "https://www.youtube.com/embed/wWkCmtSSlVM?autoplay=1&si=JGTadl-O9rL_MWpj",
      title: "Gold | Oil Weekly Analysis | 18 May - 22 May 2026 | Trading Academy"
    }
  ]);

  // Pehli video hamesha main video hogi
  const mainVideo = playlist[0];
  // Baaki saari videos side stack mein hongi
  const sideVideos = playlist.slice(1);

  // Is state se track karenge ke badi video abhi play ho rahi hai ya thumbnail par hai
  const [isMainPlaying, setIsMainPlaying] = useState(false);

  // Swap Function: Jab kisi side video par click ho
  const handleVideoSwap = (clickedIndex) => {
    const updatedPlaylist = [...playlist];
    
    // Index adjustment kyun ke sideVideos slice(1) se banti hai
    const actualSideIndex = clickedIndex + 1;
    
    // Main video aur clicked video ko aapas mein swap (interchange) karna
    const temp = updatedPlaylist[0];
    updatedPlaylist[0] = updatedPlaylist[actualSideIndex];
    updatedPlaylist[actualSideIndex] = temp;

    setPlaylist(updatedPlaylist);
    // Swap hote hi badi video direct auto-play ho jayegi
    setIsMainPlaying(true);
  };

  return (
    <section className="bg-[#020617] text-white py-10 px-4 relative overflow-hidden font-sans border-b border-white/5">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-6">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-3 gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-blue-500/10 border border-blue-500/30 p-2 rounded-lg text-blue-400">
              <FaVideo size={14} />
            </div>
            <div>
              <span className="text-[9px] font-bold text-blue-400 uppercase tracking-widest block">In-House Streaming</span>
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight">Alpha Video Vault</h2>
            </div>
          </div>

          {/* --- NEW: YOUTUBE CHANNEL CHANNEL ACTION BUTTON --- */}
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: "rgba(220, 38, 38, 1)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open("https://www.youtube.com/@tradealphazone", "_blank", "noopener,noreferrer")}
            className="flex items-center justify-center gap-2 bg-red-600/10 border border-red-500/30 hover:border-transparent text-white font-bold text-[11px] tracking-widest uppercase py-2 px-4 rounded-xl transition-all shadow-lg cursor-pointer"
          >
            <span>Visit Channel</span>
            <FaYoutube size={14} className="text-red-500 group-hover:text-white" />
          </motion.button>
        </div>

        {/* --- INTERFACE GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* LEFT: Main Big Embed Player */}
          <div className="lg:col-span-7 flex flex-col justify-center bg-[#070f2e]/60 border border-blue-500/20 rounded-2xl p-3 shadow-xl relative group">
            {/* key={mainVideo.id} lagane se iframe har swap par naye siray se fresh reload hoga */}
            <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/10 relative bg-black" key={mainVideo.id}>
              
              {isMainPlaying ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={mainVideo.embedUrl}
                  title={mainVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              ) : (
                <div 
                  onClick={() => setIsMainPlaying(true)}
                  className="absolute inset-0 w-full h-full cursor-pointer overflow-hidden"
                >
                  <img 
                    src={`https://img.youtube.com/vi/${mainVideo.id}/maxresdefault.jpg`} 
                    alt={mainVideo.title}
                    className="w-full h-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40"></div>
                  
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-[9px] font-black uppercase tracking-wider px-2 py-1 rounded shadow-md z-20">
                    FEATURED SESSION
                  </span>

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-colors"
                    >
                      <FaPlay size={10} /> Play Video
                    </motion.div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 z-20">
                    <h3 className="text-white font-black text-base md:text-lg uppercase tracking-tight leading-tight bg-black/40 p-2 rounded-lg backdrop-blur-sm border border-white/5 inline-block">
                      {mainVideo.title}
                    </h3>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: Side Video List (Clicking Swaps with Main Video) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            <AnimatePresence mode="popLayout">
              {sideVideos.map((video, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  key={video.id}
                  onClick={() => handleVideoSwap(idx)}
                  className="bg-[#070f2e]/40 border border-white/5 hover:border-blue-500/30 hover:bg-[#070f2e]/80 rounded-xl p-2.5 flex items-center gap-4 transition-all cursor-pointer group/item"
                >
                  {/* Mini Thumbnail */}
                  <div className="w-34 sm:w-40 aspect-video rounded-lg overflow-hidden border border-white/10 relative bg-black shrink-0">
                    <img 
                      src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} 
                      alt={video.title}
                      className="w-full h-full object-cover opacity-85 group-hover/item:scale-103 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover/item:bg-black/20 transition-colors"></div>
                    
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-8 h-8 rounded-full bg-blue-600/90 text-white flex items-center justify-center pl-0.5 shadow-md group-hover/item:bg-blue-500 transition-colors">
                        <FaPlay size={8} />
                      </div>
                    </div>
                  </div>

                  {/* Title Box */}
                  <div className="flex flex-col justify-center min-w-0">
                    <span className="text-[8px] font-bold text-blue-400 uppercase tracking-widest block mb-0.5">Up Next</span>
                    <h4 className="text-white font-black text-xs uppercase tracking-tight leading-snug line-clamp-2 group-hover/item:text-blue-400 transition-colors">
                      {video.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default EmbedYoutubeHub;