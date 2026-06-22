import React, { useState } from 'react';
import { Tv, Activity, ShieldCheck, VolumeX, ExternalLink } from 'lucide-react';

const LiveChannelPage = () => {
  // 4 Live Stream Channels Matrix Data
  const [channels, setChannels] = useState([
    { id: 1, name: "LIVE STATION ALPHA", url: "https://www.youtube.com/watch?v=NRDZewOwEz0" },
    { id: 2, name: "LIVE STATION BETA", url: "https://www.youtube.com/watch?v=qXboANst9Z4" },
    { id: 3, name: "LIVE STATION GAMMA", url: "https://www.youtube.com/watch?v=H_ZrqHGY6_4" },
    { id: 4, name: "LIVE STATION DELTA", url: "https://www.youtube.com/watch?v=OPY7DtyvTRY" },
  ]);

  // Modifies regular live links into production embedded formats with forced autoplay & loop
  const buildAutoplayUrl = (rawUrl) => {
    if (!rawUrl) return "";
    try {
      let videoId = "";
      if (rawUrl.includes("youtu.be/")) {
        videoId = rawUrl.split("youtu.be/")[1]?.split("?")[0];
      } else if (rawUrl.includes("youtube.com/live/")) {
        videoId = rawUrl.split("youtube.com/live/")[1]?.split("?")[0];
      } else if (rawUrl.includes("v=")) {
        videoId = rawUrl.split("v=")[1]?.split("&")[0];
      } else if (rawUrl.includes("embed/")) {
        return rawUrl;
      }
      return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=${videoId}` : rawUrl;
    } catch (e) {
      return rawUrl;
    }
  };

  // Redirect handler to open full stream in a new tab safely
  const handleVideoClick = (url) => {
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
              <span className="text-blue-400 font-mono font-black tracking-widest text-[8px] uppercase">CLICK TO WATCH ON YOUTUBE</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight italic flex items-center gap-3">
              <Tv className="text-blue-500 shrink-0" size={24} />
              <span>LIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-zinc-300">CHANNEL</span></span>
            </h1>
          </div>

          {/* Quick System Status Alert */}
          <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 bg-white/[0.02] border border-white/5 px-3 py-1.5 rounded-xl w-fit">
            <VolumeX size={12} className="text-blue-400" />
            <span>AUTOPLAY MODE ON // CLICK LAYER REDIRECT ACTIVE</span>
          </div>
        </div>

        {/* ================================================================= */}
        {/* DYNAMIC 2X2 MULTI-VIEW GRID DISPLAY MATRIX                        */}
        {/* ================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 flex-1 min-h-[65vh] md:h-[calc(100vh-13rem)]">
          {channels.map((channel, index) => (
            <div 
              key={channel.id}
              className="bg-[#050a21]/80 border border-white/5 hover:border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between transition-all duration-300 group h-full w-full relative"
            >
              {/* Dynamic Video Frame Container */}
              <div className="w-full flex-1 bg-black relative overflow-hidden border-b border-white/5 min-h-[180px]">
                
                {/* Background Running Video Feed */}
                <iframe
                  src={buildAutoplayUrl(channel.url)}
                  title={channel.name}
                  className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  style={{ border: 0 }}
                ></iframe>

                {/* --- TRANSPARENT INTERACTIVE ACTION CLICK OVERLAY LAYER --- */}
                <div 
                  onClick={() => handleVideoClick(channel.url)}
                  className="absolute inset-0 z-30 bg-black/0 hover:bg-black/20 transition-all duration-300 cursor-pointer flex items-center justify-center group/overlay"
                  title="Click to stream on YouTube"
                >
                  {/* Subtle fade-in button on hover */}
                  <div className="opacity-0 group-hover/overlay:opacity-100 bg-black/85 border border-white/10 px-4 py-2 rounded-xl flex items-center gap-2 transform translate-y-2 group-hover/overlay:translate-y-0 transition-all duration-300 shadow-2xl">
                    <ExternalLink size={12} className="text-blue-400" />
                    <span className="text-[10px] font-mono tracking-widest font-bold uppercase text-zinc-200">Watch Live on YouTube</span>
                  </div>
                </div>

                {/* Stream Badge Data Overlay */}
                <div className="absolute top-3 left-3 z-20 flex items-center gap-2 pointer-events-none">
                  <span className="text-[8px] font-mono font-black bg-black/85 text-zinc-400 px-2 py-0.5 rounded border border-white/10 tracking-widest uppercase">
                    CH-0{index + 1}
                  </span>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-500/10 border border-red-500/20 backdrop-blur-sm">
                    <span className="w-1 h-1 rounded-full bg-red-500 animate-ping"></span>
                    <span className="text-[7px] font-mono text-red-400 font-bold uppercase tracking-wider">LIVE FEED</span>
                  </div>
                </div>
              </div>

              {/* Bottom Label Panel Bar */}
              <div className="p-3 bg-gradient-to-t from-[#030616] to-transparent flex items-center justify-between gap-4 shrink-0">
                <div className="truncate space-y-0.5">
                  <h3 className="text-[11px] font-black tracking-wider text-zinc-100 uppercase truncate">
                    {channel.name}
                  </h3>
                  <p className="text-[8px] font-mono text-zinc-500 truncate tracking-tight">
                    Source: {channel.url}
                  </p>
                </div>
                
                <div className="p-1.5 rounded-lg bg-white/[0.02] border border-white/5 text-zinc-500 shrink-0">
                  <Activity size={10} className="text-blue-500 animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- LIVE FOOTER SYSTEM STATUS TRACKER --- */}
        <div className="pt-3 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2 text-zinc-600 font-mono text-[9px] uppercase tracking-widest shrink-0">
          <div className="flex items-center gap-2">
            <ShieldCheck size={11} className="text-blue-500" />
            <span>Continuous Broadcast Matrix Sync: Online</span>
          </div>
          <span>Execution Protocol: Dynamic Matrix Redirect Core</span>
        </div>

      </div>
    </div>
  );
};

export default LiveChannelPage;