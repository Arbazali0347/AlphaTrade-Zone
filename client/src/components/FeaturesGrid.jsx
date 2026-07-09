import React from 'react';
import { CheckSquare, ArrowRight, Globe, ShieldAlert } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import teach from '../assets/teacher-screen-bg.jpeg'; // Local image for the Trading Academy card

const SERVICES = [
  {
    title: "JOIN TRADING ACADEMY",
    subtitle: "From Basics to Advanced",
    bgImage: teach,
    points: [
      "Market Structure",
      "Sessions & Liquidity",
      "Risk & Price Action",
      "Risk Management",
      "Live Classes & Workshops"
    ],
    link: "/join"
  },
  {
    title: "GET TRADING SIGNALS",
    subtitle: "Live Trade Guidance",
    bgImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
    points: [
      "High Probability Setups",
      "Entries, SL & TP Levels",
      "Invalidations & Confidence",
      "Multi-Timeframe Context",
      "Real-Time Updates"
    ],
    link: "/software/autosignal-x"
  },
  {
    title: "ENTRY - TARGETS BY SOFTWARES",
    subtitle: "Tools That Empower",
    bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    points: [
      "TradingView Based",
      "Auto Entry & Targets",
      "Smart Alerts",
      "Trade Management",
      "Performance Tracking"
    ],
    link: "/software/autosignal-x"
  },
  {
    title: "PLATFORM SELECTION GUIDANCE",
    subtitle: "Trade with the Right Platform",
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
    points: [
      "Partner Exchange Ecosystem",
      "Platform Infrastructure",
      "Execution Speed & Spreads",
      "Account Types Guidance",
      "Ongoing Infrastructure Support"
    ],
    link: "/academy"
  }
];

const FeaturesGrid = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#010413] text-white py-12 px-4 md:px-8 border-t border-zinc-900/80">
      <div className="max-w-7xl mx-auto w-full space-y-10">
        
        {/* ── MAIN 4-COLUMN CARDS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="relative group rounded-xl border border-zinc-800/40 bg-[#04081e]/40 p-5 overflow-hidden flex flex-col justify-between h-full backdrop-blur-sm transition-all duration-300 hover:border-blue-500/30"
            >
              {/* Background Cover Overlay */}
              <div 
                className="absolute inset-0 z-0 opacity-50 mix-blend-screen scale-105 transition-transform duration-500 group-hover:scale-110 pointer-events-none"
                style={{ 
                  backgroundImage: `linear-gradient(to right, #04081e 40%, transparent 95%), 
                                    linear-gradient(to bottom, #04081e 10%, transparent 90%), 
                                    url(${service.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'left'
                }}
              />

              {/* Card Content Area */}
              <div className="relative z-10 space-y-5 w-full">
                
                {/* ── PREMIUM SOLID BLUE CAPSULE BUTTON ── */}
                <div 
                  onClick={() => navigate(service.link)}
                  className="flex items-center justify-between p-3 px-4 bg-[#1d5eff] hover:bg-blue-600 rounded-2xl cursor-pointer transition-all duration-200 shadow-[0_4px_15px_rgba(29,94,255,0.25)] select-none"
                >
                  <div className="flex flex-col text-left space-y-0.5 min-w-0">
                    <h4 className="font-black text-[9px] sm:text-[10px] uppercase tracking-wider text-white truncate">
                      {service.title}
                    </h4>
                    <p className="text-[8px] sm:text-[9px] text-blue-100 font-medium opacity-95 truncate">
                      {service.subtitle}
                    </p>
                  </div>
                  
                  {/* Small Action Arrow */}
                  <div className="text-white opacity-95 shrink-0 ml-2">
                    <ArrowRight size={12} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Point Lists with custom lucide icons */}
                <ul className="space-y-2 pt-1">
                  {service.points.map((point, ptIdx) => (
                    <li key={ptIdx} className="flex items-center gap-2.5 text-zinc-400 text-xs">
                      <CheckSquare size={13} className="text-blue-500 shrink-0 opacity-85" />
                      <span className="font-medium tracking-wide">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* ── FOOTER SUB-BAR DETAILS ── */}
        <div className="pt-6 border-t border-zinc-900/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-left text-[11px] text-zinc-500 font-medium">
          
          {/* Brand/Identity Meta */}
          <div className="flex items-center gap-2 text-blue-500/80">
            <Globe size={14} className="shrink-0" />
            <span className="tracking-wide">
              Trade Alpha Zone - Trading Education, Signals, Software & Partner Platforms
            </span>
          </div>

          {/* Legal/Risk Disclaimer Warning */}
          <div className="flex items-start gap-2 max-w-md lg:max-w-xl">
            <ShieldAlert size={14} className="text-zinc-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              Trading involves risk. Past performance is not indicative of future results.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturesGrid;