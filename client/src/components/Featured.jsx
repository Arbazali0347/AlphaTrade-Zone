import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Users, Monitor, Target, Play } from 'lucide-react';
import video1 from "../assets/alpha-vide-1.mp4";
import video2 from "../assets/alpha-vide-2.mp4";

const StudentShowcase = () => {
  const experiences = [
    {
      id: 1,
      title: "Trade Alpha Zone",
      tag: "Trading Community",
      focus: ["Model Colony Campus — Linguaphile Academia", "Saudabad Campus — Skill Box Institute"],
      video: video1,
      description: "Learn From Experienced Mentors & Grow With A Professional Trading Environment."
    },
    {
      id: 2,
      title: "Join Trade Alpha Zone",
      tag: "PHYSICAL TRAINING",
      focus: ["Team Collaboration", "Mental Discipline", "1-on-1 Coaching"],
      video: video2,
      description: "Step into the world of professional trading with expert mentorship, live market learning, and a powerful trading community."
    }
  ];

  return (
    <section className="relative bg-[#010413] py-32 px-6 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[18vw] font-black text-center mt-20 uppercase italic">SUCCESS</h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
             <div className="h-[2px] w-12 bg-blue-600"></div>
             <span className="text-blue-500 font-bold tracking-[0.4em] text-[10px] uppercase">Academy Insight</span>
          </div>
          <h2 className="text-5xl whitespace-pre md:text-8xl font-black text-white leading-[0.8] tracking-tighter uppercase italic">
            LEARNING  IN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-200">REAL-TIME.</span>
          </h2>
        </motion.div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {experiences.map((item) => (
            <VideoCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Separate Component for Video Logic (Mute/Unmute)
const VideoCard = ({ item }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group relative bg-[#0a1120]/60 border border-white/5 rounded-[45px] overflow-hidden hover:border-blue-500/40 transition-all duration-500"
    >
      <div className="flex flex-col md:flex-row h-full">
        {/* VIDEO SIDE (TikTok Style Vertical) */}
        <div className="w-full md:w-[45%] h-[450px] md:h-auto relative overflow-hidden bg-black">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          >
            <source src={item.video} type="video/mp4" />
          </video>
          
          {/* Mute/Unmute Button */}
          <button 
            onClick={toggleMute}
            className="absolute bottom-6 right-6 z-30 p-3 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-white hover:bg-blue-600 transition-colors"
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>

          {/* Vertical Badge */}
          <div className="absolute top-6 left-6 z-20 bg-blue-600 px-4 py-1.5 rounded-full flex items-center gap-2 shadow-xl shadow-blue-900/40">
             <Play size={12} fill="white" />
             <span className="text-[10px] font-black tracking-widest text-white uppercase">{item.tag}</span>
          </div>
        </div>

        {/* CONTENT SIDE */}
        <div className="w-full md:w-[55%] p-10 flex flex-col justify-center space-y-8">
          <div>
            <h3 className="text-4xl font-black text-white tracking-tighter uppercase italic leading-none">
              {item.title}
            </h3>
            <p className="mt-5 text-zinc-400 text-sm leading-relaxed font-medium">
              {item.description}
            </p>
          </div>

          {/* Learning Focus Tags */}
          <div className="space-y-4">
            <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Core Training Focus:</p>
            <div className="flex flex-wrap gap-2">
              {item.focus.map((point) => (
                <span key={point} className="px-4 py-2 bg-blue-500/5 border border-blue-500/10 rounded-xl text-[10px] font-bold text-blue-300 uppercase tracking-widest">
                  {point}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StudentShowcase;