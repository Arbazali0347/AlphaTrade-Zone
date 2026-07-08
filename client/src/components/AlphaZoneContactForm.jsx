import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  User, Shield, MessageSquare, Send, CheckCircle, 
  MapPin, Phone, GraduationCap, Loader2 
} from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const AlphaZoneContactForm = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // Form State Data Model
  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '',
    contactNumber: '',
    city: '',
    course: 'TAZ Flagship Trading Program', // Fixed as per request: "Ek hi hai TAZ ka"
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // =================================================================
    // EMAILJS DIRECT DISPATCH INTEGRATION
    // Go to emailjs.com -> Create account -> Get these 3 Keys
    // =================================================================
    const SERVICE_ID = "service_7z0p1z8"; 
    const TEMPLATE_ID = "template_yewxa8r";
    const PUBLIC_KEY = "icVUwuq2CGvQBhAq3";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          setLoading(false);
          setSubmitted(true);
          // Reset form field models
          setFormData({
            fullName: '',
            whatsappNumber: '',
            contactNumber: '',
            city: '',
            course: 'TAZ Flagship Trading Program',
            message: ''
          });
      }, (error) => {
          setLoading(false);
          alert("Alpha System Node Error: Email dispatch failed. Please check backend keys config.");
          console.error(error.text);
      });
  };

  return (
    <div className="w-full bg-[#010413] text-white py-24 px-4 relative overflow-hidden font-sans select-none">
      
      {/* Tactical Ambient Cyber Glow Matrix */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/[0.03] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/[0.02] blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-stretch">
        
        {/* ================================================================= */}
        {/* LEFT PANEL: ELITE BRAND TEXT & SYSTEM CREDENTIALS                */}
        {/* ================================================================= */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-12 p-2">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-emerald-400 font-black tracking-[0.2em] text-[9px] uppercase">SECURE DISPATCH NODE</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none">
              SECURE YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-200 to-cyan-400">
                ALPHA SEAT
              </span>
            </h2>

            <p className="text-zinc-400 text-sm md:text-base font-medium leading-relaxed max-w-md">
              Initialize direct application protocols. Fill out your details architecture on the system network to route your request directly to Trade Alpha Zone high-priority servers.
            </p>
          </div>

          {/* Core Institutional Trust Metrics */}
          <div className="space-y-4 pt-6 border-t border-white/5">
            <div className="flex items-start gap-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:border-emerald-400/40 transition-colors">
                <Shield size={18} />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-zinc-200">End-to-End Encryption</h4>
                <p className="text-zinc-500 text-[11px] font-medium leading-normal">Your personal dynamic inputs are locked securely via standard pipeline encryption protocols.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 group">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400/40 transition-colors">
                <CheckCircle size={18} />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-zinc-200">Priority Core Access</h4>
                <p className="text-zinc-500 text-[11px] font-medium leading-normal">Validated submissions instantly notify our premium support desk for direct response handling.</p>
              </div>
            </div>
          </div>

          {/* Operational Framework Footer Stamp */}
          <div className="text-[10px] font-mono tracking-widest text-zinc-600 uppercase pt-4">
            SYSTEM HIERARCHY ID: TAZ_NODE_CONTACT_v2.0
          </div>
        </div>

        {/* ================================================================= */}
        {/* RIGHT PANEL: ALPHA ZONE HIGH-CONVERSION APPLICATION FORM         */}
        {/* ================================================================= */}
        <div className="lg:col-span-7 bg-gradient-to-b from-[#060b13] via-[#03060d] to-[#010205] border border-zinc-800/40 rounded-[2rem] p-6 md:p-10 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.95)] relative overflow-hidden group">
          {/* Top Green Accent Highlight Line */}
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent group-hover:via-emerald-400/50 transition-all duration-500" />
          
          {submitted ? (
            /* Submission Success Matrix Window Overlay */
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full py-16 flex flex-col items-center justify-center text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                <CheckCircle size={32} />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-black uppercase tracking-wide text-white">Data Log Successful</h3>
                <p className="text-zinc-400 text-xs font-medium max-w-xs leading-relaxed">
                  Your details have been successfully routed to the official Alpha Zone inbox database. Our team will ping you soon.
                </p>
              </div>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-4 px-5 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 font-bold text-[10px] tracking-widest uppercase hover:text-white transition-colors"
              >
                Submit Another Request
              </button>
            </motion.div>
          ) : (
            /* Active Live Form Terminal Layout */
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* FullName Input Field Node */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
                    <User size={12} className="text-emerald-400" /> Full Name
                  </label>
                  <input 
                    type="text" 
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g., Muhammad Ali"
                    className="w-full bg-[#02050f] border border-zinc-800/80 focus:border-emerald-500/40 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none transition-all duration-300"
                  />
                </div>

                {/* Whatsapp Number Input Field Node */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
                    <FaWhatsapp size={12} className="text-emerald-400" /> WhatsApp Number
                  </label>
                  <input 
                    type="tel" 
                    name="whatsappNumber"
                    required
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    placeholder="e.g., +923152939539"
                    className="w-full bg-[#02050f] border border-zinc-800/80 focus:border-emerald-500/40 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Contact Number Input Field Node */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
                    <Phone size={12} className="text-emerald-400" /> Contact Number
                  </label>
                  <input 
                    type="tel" 
                    name="contactNumber"
                    required
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="e.g., 03152939539"
                    className="w-full bg-[#02050f] border border-zinc-800/80 focus:border-emerald-500/40 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none transition-all duration-300"
                  />
                </div>

                {/* City Input Field Node */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
                    <MapPin size={12} className="text-emerald-400" /> City Location
                  </label>
                  <input 
                    type="text" 
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g., Karachi"
                    className="w-full bg-[#02050f] border border-zinc-800/80 focus:border-emerald-500/40 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>

              {/* Course Static Node Selector (Fixed Option Only) */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
                  <GraduationCap size={13} className="text-emerald-400" /> Authorized Course Program
                </label>
                <div className="w-full bg-[#040817] border border-emerald-500/20 text-emerald-400 font-bold rounded-xl px-4 py-3.5 text-xs flex items-center justify-between shadow-inner">
                  <span>TAZ ELITE ACADEMY PROGRAM (EXCLUSIVE SEAT)</span>
                  <span className="text-[9px] font-mono font-black text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">100% PREMIUM</span>
                </div>
                {/* Hidden field so that the EmailJS template parses it natively */}
                <input type="hidden" name="course" value={formData.course} />
              </div>

              {/* Custom Message input box */}
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 flex items-center gap-1.5">
                  <MessageSquare size={12} className="text-emerald-400" /> Custom Message
                </label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your current trading background or targets..."
                  className="w-full bg-[#02050f] border border-zinc-800/80 focus:border-emerald-500/40 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none resize-none transition-all duration-300"
                />
              </div>

              {/* Submit Dispatch Node Trigger */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-black font-black text-xs tracking-widest uppercase flex items-center justify-center gap-2 transform active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none shadow-[0_15px_30px_rgba(16,185,129,0.15)] hover:shadow-[0_20px_45px_rgba(16,185,129,0.3)] transition-all duration-350 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 size={14} className="animate-spin text-black" />
                      <span>Transmitting Terminal Logs...</span>
                    </>
                  ) : (
                    <>
                      <Send size={14} fill="currentColor" />
                      <span>Submit Application Details</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};

export default AlphaZoneContactForm;