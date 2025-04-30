import React from 'react';
import { Link } from 'react-router-dom';
import CurveDecoration from '../ui/curve-decoration';

const products = [
  {
    id: 1,
    name: "Carry & Go House",
    description: "A beautiful open-back dollhouse designed for portability and creative play.",
    image: "/public/lovable-uploads/630dba38-0e81-4917-8424-5c0e4c70f504.png",
    features: ["Portable design with handle", "Modular slide-in panels", "Ages 3+", "Easy assembly"]
  },
  {
    id: 2,
    name: "Victorian Dollhouse",
    description: "This handcrafted wooden Victorian style brings timeless charm and educational play together.",
    image: "/public/lovable-uploads/671132f2-a9d0-4e48-9900-f9dfc9736a78.png",
    features: ["Working doors and windows", "Open back design", "Ages 6+", "Tool-free assembly"]
  },
  {
    id: 3,
    name: "Malji Double Door",
    description: "One of our most popular houses, catering to children as well as adult collectors.",
    image: "/public/lovable-uploads/7b014b17-0b0b-49a6-97d7-f557bf309a68.png",
    features: ["Four accessible rooms", "Removable roof", "Openable windows and doors", "Easy-to-assemble panels"]
  }
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
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="bg-[#121212] border border-[#333333] animate-on-scroll"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="bg-[#0a0a0a] p-6">
                <h3 className="text-xl font-semibold mb-2 font-poppins text-[#e6b980]">{product.name}</h3>
                <p className="text-white/80 mb-4">{product.description}</p>
                <ul className="mb-6 space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-white/70">
                      <span className="text-[#e6b980] mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={`/products/${product.id}`} className="border border-[#e6b980] text-[#e6b980] hover:bg-[#e6b980]/10 py-2 w-full text-center flex items-center justify-center group">
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