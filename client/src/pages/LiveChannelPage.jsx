import React, { useState } from 'react';
import { Tv, Activity, ShieldCheck, ExternalLink, Play } from 'lucide-react';

const YouTubePlaylistPage = () => {
  // 6 YouTube Playlists Matrix Data
  const [playlists, setPlaylists] = useState([
    { id: 1, url: "https://www.youtube.com/watch?v=osDFfKmNYCU&list=PLlQPGl2aZj37jL44ELVVDng-rURbv9bCS" },
    { id: 2, url: "https://www.youtube.com/watch?v=f7rBQUSLj2k&list=PLlQPGl2aZj36gTcW9NlF7eSjlrz0537-l" },
    { id: 3, url: "https://www.youtube.com/watch?v=h7RcqwRl9tM&list=PLlQPGl2aZj36SeYCCYrHM_Yyp5Kb0H5iv" },
    { id: 4, url: "https://www.youtube.com/watch?v=wWkCmtSSlVM&list=PLlQPGl2aZj34QjiaoJmlUCn-X38s5VMm7" },
    { id: 5, url: "https://www.youtube.com/watch?v=9Ekj3X1fAcU&list=PLlQPGl2aZj34oTmm2oqkH1Ca7HvY7CNwj" },
    { id: 6, url: "https://www.youtube.com/watch?v=17YZ14nzz-E&list=PLlQPGl2aZj35Eab0_QEHW6aY3bgkn138-" },
  ]);

  // Extracts video ID or playlist ID to get a high-quality static thumbnail from YouTube
  const getThumbnailUrl = (rawUrl) => {
    if (!rawUrl) return "";
    try {
      let videoId = "";
      // If the URL has a video ID (v=xxxx)
      if (rawUrl.includes("v=")) {
        videoId = rawUrl.split("v=")[1]?.split("&")[0];
      } 
      // If it's a direct playlist URL without a specific starting video
      else if (rawUrl.includes("list=")) {
        // Fallback placeholder image or customized cover can be used if no video ID exists
        return "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop";
      }
      
      return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop";
    } catch (e) {
      return "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop";
    }
  };

  // Click handler to open the playlist directly in a new tab
  const handlePlaylistClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#020514] text-white min-h-screen font-sans relative pt-20 pb-6 px-4 md:px-8 overflow-hidden flex flex-col justify-between">
      
      {/* Background Subtle Luxury Cinematic Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-600/[0.02] blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1750px] w-full mx-auto relative z-10 flex flex-col flex-1 space-y-4">
        
        {/* --- PAGE HEADER LAYER --- */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/5 pb-4 gap-4 shrink-0">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded-full w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              <span className="text-blue-400 font-mono font-black tracking-widest text-[8px] uppercase">CLICK TO PLAY ON YOUTUBE</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight italic flex items-center gap-3">
              <Tv className="text-blue-500 shrink-0" size={24} />
              <span>YOUTUBE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-zinc-300">PLAYLISTS</span></span>
            </h1>
          </div>

          
        </div>

        {/* ================================================================= */}
        {/* DYNAMIC 3X2 PLAYLIST DISPLAY MATRIX                             */}
        {/* ================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1 min-h-[65vh]">
          {playlists.map((playlist, index) => (
            <div 
              key={playlist.id}
              className="bg-[#050a21]/80 border border-white/5 hover:border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between transition-all duration-300 group h-full w-full relative"
            >
              {/* Static Thumbnail Container */}
              <div className="w-full flex-1 bg-black relative overflow-hidden border-b border-white/5 min-h-[220px]">
                
                {/* Static Image Background (No Autoplay Iframe) */}
                <img 
                  src={getThumbnailUrl(playlist.url)} 
                  alt={playlist.name} 
                  className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* --- TRANSPARENT INTERACTIVE ACTION CLICK OVERLAY LAYER --- */}
                <div 
                  onClick={() => handlePlaylistClick(playlist.url)}
                  className="absolute inset-0 z-30 bg-black/30 hover:bg-black/50 transition-all duration-300 cursor-pointer flex items-center justify-center group/overlay"
                  title="Click to start playlist on YouTube"
                >
                  {/* Glowing Play Icon Center Counterpart */}
                  <div className="p-4 rounded-full bg-blue-600/90 text-white shadow-xl transform scale-90 group-hover/overlay:scale-100 transition-all duration-300 z-40 border border-blue-400/30">
                    <Play size={20} className="fill-white" />
                  </div>

                  {/* Subtle fade-in label button on hover */}
                  <div className="absolute bottom-4 opacity-0 group-hover/overlay:opacity-100 bg-black/85 border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2 transform translate-y-2 group-hover/overlay:translate-y-0 transition-all duration-300 shadow-2xl z-40">
                    <ExternalLink size={12} className="text-blue-400" />
                    <span className="text-[10px] font-mono tracking-widest font-bold uppercase text-zinc-200">Play Playlist</span>
                  </div>
                </div>

                {/* Playlist Badge Data Overlay */}
                <div className="absolute top-3 left-3 z-20 flex items-center gap-2 pointer-events-none">
                  <span className="text-[8px] font-mono font-black bg-black/85 text-zinc-400 px-2 py-0.5 rounded border border-white/10 tracking-widest uppercase">
                    LIST-0{index + 1}
                  </span>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
                    <span className="text-[7px] font-mono text-blue-400 font-bold uppercase tracking-wider">YOUTUBE MIX</span>
                  </div>
                </div>
              </div>

              {/* Bottom Label Panel Bar */}
              <div className="p-3 bg-gradient-to-t from-[#030616] to-transparent flex items-center justify-between gap-4 shrink-0">
                <div className="truncate space-y-0.5">
                  
                  <p className="text-[8px] font-mono text-zinc-500 truncate tracking-tight">
                    Source: {playlist.url}
                  </p>
                </div>
                
                <div className="p-1.5 rounded-lg bg-white/[0.02] border border-white/5 text-zinc-500 shrink-0">
                  <Activity size={10} className="text-blue-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- PLAYLIST FOOTER SYSTEM STATUS TRACKER --- */}
        <div className="pt-3 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2 text-zinc-600 font-mono text-[9px] uppercase tracking-widest shrink-0">
          <div className="flex items-center gap-2">
            <ShieldCheck size={11} className="text-blue-500" />
            <span>Continuous Static Thumbnail Sync: Online</span>
          </div>
          <span>Execution Protocol: Static Image Grid Redirect Core</span>
        </div>

      </div>
    </div>
  );
};

export default YouTubePlaylistPage;