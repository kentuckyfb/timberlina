import React from 'react';
import CurveDecoration from '../ui/curve-decoration';

const features = [
  {
    title: "Handcrafted Excellence",
    description: "Each dollhouse is individually manufactured by skilled craftsmen with decades of experience.",
    icon: "🔨"
  },
  {
    title: "Premium Materials",
    description: "Made from beautiful plantation timber, ensuring durability and a timeless natural finish.",
    icon: "🌳"
  },
  {
    title: "Educational Value",
    description: "Our dollhouses foster creativity, problem-solving, and spatial awareness in children.",
    icon: "📚"
  },
  {
    title: "Sustainable Production",
    description: "Eco-friendly manufacturing processes and responsibly sourced materials.",
    icon: "♻️"
  },
  {
    title: "Functional Features",
    description: "Working doors and windows, removable roofs, and easy interior access for realistic play.",
    icon: "🚪"
  },
  {
    title: "Easy Assembly",
    description: "Tool-free assembly with pre-constructed components and color-coded panels.",
    icon: "🔧"
  }
];

const FeatureSection: React.FC = () => {
  return (
    <section className="section-padding bg-[#121212] relative">

      {/* Plain background color - no pattern */}

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Timberlina</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Our dollhouses aren't just toys - they're heirlooms designed to be loved for generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="backdrop-blur-md bg-[#1a1a1a]/80 p-6 rounded-lg border border-[#e6b980]/20 hover:border-[#e6b980]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(230,185,128,0.1)]"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white font-playfair">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <blockquote className="max-w-3xl mx-auto italic text-xl md:text-2xl text-white/80">
            "It's not just a dollhouse! It spans generations, bridging the gap from being a delightful toy for the very young to becoming a cherished hobby craft or collector's item for the mature audience."
          </blockquote>
        </div>
      </div>

      {/* Bottom curve decoration - using the current section color (#121212) as fillColor */}
      <CurveDecoration position="bottom" fillColor="#121212" height="md" />
    </section>
  );
};

export default FeatureSection;