import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Updated background path
import teacherBgImg from "../assets/Trade-hero-right.jpeg";

const NewHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 bg-[#010413] text-white">

      {/* ── BACKGROUND LAYER: HIGH VISIBILITY & CRYSTAL CLEAR ── */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
        <img
          src={teacherBgImg}
          alt="Trading Background"
          className="w-full h-full object-cover object-[70%_center] md:object-[85%_center] opacity-100 transition-all duration-300"
        />
        {/* Subtly tuned overlays for readability without blocking right-side details */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#010413] via-transparent to-[#010413]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#010413]/70 via-[#010413]/30 to-transparent" />
      </div>

      {/* ── RESPONSIVE FLEX OVERLAY: Added 2xl constraints for large monitors ── */}
      <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center relative z-10 gap-10 lg:gap-6 my-auto max-w-7xl 2xl:max-w-[1600px] 2xl:mx-auto w-full">

        {/* LEFT CONTENT BLOCK: Scaled width and spacing for 2xl monitors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:max-w-[55%] xl:max-w-[60%] 2xl:max-w-[52%] flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 2xl:space-y-9 shrink-0"
        >
          {/* Core Headings - Added 2xl:text-7xl and 2xl:leading for large screens */}
          <div className="space-y-2 w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-black tracking-tight leading-[1.05] 2xl:leading-[1.02] uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              LEARN TRADING.<br />
              FOLLOW SIGNALS.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400">
                USE SOFTWARE.<br />
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400">
                TRADE WITH CONFIDENCE.
              </span>
            </h1>
          </div>

          {/* Description Text - Added 2xl:text-base and increased width limit */}
          <p className="text-zinc-200 text-xs sm:text-sm 2xl:text-base font-normal max-w-[620px] 2xl:max-w-[760px] leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,1)] bg-[#010413]/30 backdrop-blur-[2px] p-3 rounded-xl lg:bg-transparent lg:backdrop-blur-none lg:p-0 space-y-3">
            <span className="font-bold text-blue-400">Trade Alpha Zone (TAZ)</span> is a trading-education and automated trade-research technology company founded by <span className="font-bold text-blue-400">Hamza Kayani</span>.<br className="mb-2" />

            TAZ builds trade-intelligence systems, analytical software, market-learning frameworks, and structured trader-development programmes.<br className="mb-2" />

            TAZ delivers education, research, tools, signals, forecasts, and analysis for knowledge development and independent trade decisions. TAZ does not hold client funds, execute trades, manage accounts, or operate as a broker.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default NewHero;