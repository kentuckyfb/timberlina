
import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-20 bg-grain bg-repeat"></div>
      
      <div className="absolute top-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#121212" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,96C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll">
          <span className="inline-block text-accent-teal text-sm font-medium tracking-wider mb-3">MAKE IT YOURS</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-theme-light font-poppins">
            Ready to Own a <span className="gradient-text">Timeless Piece</span> of Craftsmanship?
          </h2>
          <p className="text-lg md:text-xl mb-12 text-theme-light/80">
            Browse our collection of handcrafted dollhouses or get in touch to inquire about custom options.
            Our dedicated team is ready to help you find the perfect miniature world for your home.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/products" className="btn-primary group animate-bounce-subtle">
              <span>Explore Our Collection</span>
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
            <Link to="/contact" className="btn-secondary group">
              <span>Contact Us</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
