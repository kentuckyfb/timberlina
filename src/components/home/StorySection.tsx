import React from 'react';
import { Link } from 'react-router-dom';
import CurveDecoration from '../ui/curve-decoration';

const StorySection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-[#121212] relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-[#e6b980]/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 md:w-80 md:h-80 bg-[#e6b980]/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container-custom relative z-10">
        {/* Main content with centered layout */}
        <div className="max-w-4xl mx-auto text-center mb-8">
          <span className="inline-block text-[#e6b980] font-medium tracking-wider mb-2 text-sm">OUR JOURNEY</span>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white font-playfair leading-tight">
            From Thumbelina to Timberlina: Our Story
          </h2>
        </div>
        
        {/* Story card - dark version */}
        <div className="max-w-3xl mx-auto bg-[#1a1a1a] rounded-lg p-6 md:p-8 shadow-lg relative border border-[#333]">
          {/* Decorative quote marks */}
          <div className="absolute top-2 left-2 text-[#e6b980]/20 text-5xl font-serif">"</div>
          <div className="absolute bottom-2 right-2 text-[#e6b980]/20 text-5xl font-serif">"</div>
          
          <div className="prose max-w-none text-white/80">
            <p>
              Forty-three years ago, in the quaint town of Mirigama, Sri Lanka, a craftsman sat in a modest woodworking 
              factory, humming a tune from "Thumbelina."
            </p>
            
            <p className="italic text-[#e6b980] border-l-4 border-[#e6b980] pl-4 my-4">
              "Thumbelina, what's the difference if you're very small, When your heart is filled with love you're nine feet tall."
            </p>
            
            <p>
              Inspired by these words, he envisioned creating something tangible—something miniature that embodied the 
              vastness of love and craftsmanship, just like Thumbelina. This vision gave birth to "Timberlina," a pioneering 
              name in the manufacture and export of dollhouses in Sri Lanka.
            </p>
          </div>
          
          <div className="mt-6 text-center">
            <Link to="/about" className="inline-block bg-[#e6b980] hover:bg-[#eacda3] text-[#121212] font-medium px-6 py-2 rounded-md transition-colors duration-300">
              Read The Full Story
            </Link>
          </div>
        </div>
        
        {/* Timeline elements - simplified for height constraints */}
        <div className="mt-8 flex justify-center">
          <div className="relative flex items-center justify-center gap-4 md:gap-8">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#333]"></div>
            
            {/* Timeline points - simplified */}
            <div className="flex items-center gap-2 relative z-10">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1a1a1a] border-2 border-[#e6b980] flex items-center justify-center">
                <span className="text-[#e6b980] font-bold text-xs md:text-sm">1980</span>
              </div>
              <span className="hidden md:inline text-white/70 text-sm">Founded</span>
            </div>
            
            <div className="flex items-center gap-2 relative z-10">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1a1a1a] border-2 border-[#e6b980] flex items-center justify-center">
                <span className="text-[#e6b980] font-bold text-xs md:text-sm">1995</span>
              </div>
              <span className="hidden md:inline text-white/70 text-sm">Global</span>
            </div>
            
            <div className="flex items-center gap-2 relative z-10">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1a1a1a] border-2 border-[#e6b980] flex items-center justify-center">
                <span className="text-[#e6b980] font-bold text-xs md:text-sm">2023</span>
              </div>
              <span className="hidden md:inline text-white/70 text-sm">Today</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;