import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import festivalVideo from "../assets/festival-video.mp4";

const FestivalPopup = () => {
    const [isVisible, setIsVisible] = useState(true);
    const videoRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/festivals') {
            setIsVisible(false);
            return;
        }

        const isClosed = sessionStorage.getItem('taz_festival_popup_closed');
        if (!isClosed) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [location.pathname]);

    const handleClose = (e) => {
        // Strict stop propagation taaki download ya navigation trigger na ho
        e.preventDefault();
        e.stopPropagation(); 
        setIsVisible(false);
        sessionStorage.setItem('taz_festival_popup_closed', 'true');
    };

    const handleNavigate = () => {
        navigate('/festivals');
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 150, damping: 18 }}
                    onClick={handleNavigate}
                    // select-none prevents the browser from trying to copy/save the component as a graphic node
                    className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 w-56 md:w-80 aspect-video bg-[#030712] border border-blue-500/30 rounded-2xl md:rounded-[1.5rem] overflow-hidden shadow-[0_0_25px_rgba(37,99,235,0.2)] cursor-pointer group select-none touch-none"
                >
                    {/* Video Element - Sealed from direct context menu triggers */}
                    <video
                        ref={videoRef}
                        src={festivalVideo}
                        className="w-full h-full object-cover pointer-events-none"
                        autoPlay
                        loop
                        muted
                        playsInline
                        disablePictureInPicture
                        controlsList="nodownload"
                    />

                    {/* Premium Dark Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30 pointer-events-none group-hover:from-black/95 transition-all duration-300" />

                    {/* Fully Functional Isolated Close Trigger */}
                    <button
                        type="button"
                        onClick={handleClose}
                        onMouseDown={(e) => e.stopPropagation()} // Extra guard against browser image drag mechanics
                        className="absolute top-2.5 right-2.5 z-50 p-1.5 rounded-xl bg-black/80 hover:bg-red-500 text-white/80 hover:text-white border border-white/5 transition-colors backdrop-blur-md shadow-md cursor-pointer"
                        title="Close Highlight"
                    >
                        <X size={12} />
                    </button>

                    {/* Floating Info Text Grid */}
                    <div className="absolute bottom-2.5 inset-x-3 md:bottom-3 md:inset-x-4 space-y-0.5 pointer-events-none">
                        <div className="flex items-center gap-1.5 text-cyan-400">
                            <Sparkles size={10} className="animate-pulse" />
                            <span className="text-[8px] font-black uppercase tracking-widest bg-cyan-950/80 border border-cyan-500/20 px-1.5 py-0.5 rounded">
                                Live Event
                            </span>
                        </div>
                        <h4 className="text-[11px] md:text-xs font-black uppercase italic text-white tracking-tight leading-tight group-hover:text-cyan-400 transition-colors truncate">
                            15 Jun TAZ Festival
                        </h4>
                        <p className="text-[9px] md:text-[10px] text-zinc-400 font-medium truncate">
                            Click to watch full showcase arena
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FestivalPopup;