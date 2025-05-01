import React from 'react';
import { Link } from 'react-router-dom';
import CurveDecoration from '../ui/curve-decoration';
import { productsData } from '../../data/products';

// Select featured products from the productsData array
const featuredProducts = [
  productsData.find(product => product.id === "A1"), // The Victorian
  productsData.find(product => product.id === "A2"), // Malji
  productsData.find(product => product.id === "B2"), // Pack n go/Linas carry n Go/TIm n'Trot
];

const FeaturedProducts: React.FC = () => {
  return (
    <section className="section-padding bg-theme-dark relative">
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-accent-teal text-sm font-medium tracking-wider mb-3">FEATURED COLLECTION</span>
          <h2 className="text-3xl md:text-4xl font-bold text-theme-light mb-4 font-poppins">Our Featured <span className="gradient-text">Dollhouses</span></h2>
          <p className="text-theme-light/70 max-w-2xl mx-auto">
            Discover our most beloved handcrafted dollhouses, each meticulously created to inspire 
            imagination and provide years of joy.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-[#121212] border border-[#333333] animate-on-scroll"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-64 overflow-hidden flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-auto h-auto max-w-full max-h-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="bg-[#0a0a0a] p-6 flex flex-col" style={{ height: "280px" }}>
                <h3 className="text-xl font-semibold mb-2 font-poppins text-[#e6b980]">{product.name}</h3>
                <p className="text-white/80 mb-4 line-clamp-2">{product.description}</p>
                
                <Link to={`/products/${product.id}`} className="border border-[#e6b980] text-[#e6b980] hover:bg-[#e6b980]/10 py-2 w-full text-center flex items-center justify-center group mt-auto">
                  <span>View Details</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll">
          <Link to="/products" className="btn-primary group">
            <span>View All Products</span>
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;