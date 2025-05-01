import React from 'react';
import { Link } from 'react-router-dom';
import CurveDecoration from '../ui/curve-decoration';

const StorySection: React.FC = () => {
  return (
    <section className="section-padding bg-wood-lightest relative">

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="animate-on-scroll">
            
          </div>
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-wood-darkest font-playfair leading-tight">
              From Thumbelina to Timberlina: Our Story
            </h2>
            <div className="prose prose-lg text-wood-darkest/90 max-w-none">
              <p>
                Forty-three years ago, in the quaint town of Mirigama, Sri Lanka, a craftsman sat in a modest woodworking 
                factory, humming a tune from "Thumbelina."
              </p>
              <p className="italic">
                "Thumbelina, what's the difference if you're very small, When your heart is filled with love you're nine feet tall."
              </p>
              <p>
                Inspired by these words, he envisioned creating something tangible—something miniature that embodied the 
                vastness of love and craftsmanship, just like Thumbelina. This vision gave birth to "Timberlina," a pioneering 
                name in the manufacture and export of dollhouses in Sri Lanka.
              </p>
            </div>
            <div className="mt-6">
              <Link to="/about" className="btn-primary">
                Read The Full Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
