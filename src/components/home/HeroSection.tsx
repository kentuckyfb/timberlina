import React from 'react';
import { Link } from 'react-router-dom';
import CurveDecoration from '../ui/curve-decoration';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 bg-[#0a0a0a]">
      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[#e6b980]/5"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e6b980' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-playfair leading-tight">
            Handcrafted Dollhouses Built to Inspire
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl">
            Meticulously crafted from premium plantation timber, our miniature worlds 
            bring imagination to life with exquisite detail and timeless design.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/products" className="btn-primary">
              Explore Collection
            </Link>
            <Link to="/about" className="btn-secondary border-white text-white hover:bg-white/20">
              Our Story
            </Link>
          </div>
        </div>
      </div>
      
      {/* Curve Decoration */}
      <CurveDecoration position="bottom" fillColor="#121212" height="lg" />
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-10">
        <svg 
          className="w-8 h-8 text-white" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
