import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Book, Heart, Leaf, Globe, Award } from 'lucide-react';
import CurveDecoration from '../components/ui/curve-decoration';

const About = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-[#0a0a0a] text-theme-light py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-[#e6b980] text-sm font-medium tracking-wider mb-3">OUR JOURNEY</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 font-poppins gradient-text">Our Story</h1>
            <p className="text-base md:text-lg text-white/80">
              From Thumbelina to Timberlina: A legacy of craftsmanship spanning over four decades
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-30 bg-grain bg-repeat"></div>
        <CurveDecoration position="bottom" fillColor="#121212" height="md" />
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 bg-theme-dark">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Story content */}
            <div className="lg:col-span-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white font-poppins">From <span className="gradient-text">Thumbelina</span> to <span className="gradient-text">Timberlina</span></h2>
              
              <div className="prose prose-lg text-white/80 max-w-none space-y-5 mb-8">
                <p className="text-base leading-relaxed">
                  In 1980, the founder of Timberlina was inspired by Hans Christian Andersen's "Thumbelina" tale to create miniature dollhouses that embodied love and craftsmanship. This vision gave birth to our brand in Mirigama, Sri Lanka.
                </p>
                
                <blockquote className="border-l-4 border-[#e6b980] pl-4 italic text-white my-6">
                  "Thumbelina, what's the difference if you're very small, When your heart is filled with love you're 9 feet tall."
                </blockquote>
                
                <p className="text-base leading-relaxed">
                  With skilled craftsmen from his village, our founder created exquisite wooden dollhouses built to withstand generations of play. These masterpieces quickly gained international recognition across the US, UK, Scandinavia, and Germany.
                </p>
                
                <p className="text-base leading-relaxed">
                  What makes Timberlina special is that each creation spans generations - from children's toys to cherished collector's items. Our attention to detail and premium craftsmanship have been our foundation for over four decades.
                </p>
              </div>
              
              {/* Timeline */}
              <div className="mt-10">
                <h3 className="text-xl font-bold mb-6 text-white font-poppins">Our <span className="gradient-text">Journey</span></h3>
                
                <div className="space-y-6 md:space-y-8">
                  <div className="relative pl-10 pb-3 border-l-2 border-[#e6b980]/30">
                    <div className="absolute left-[-16px] top-0">
                      <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border-2 border-[#e6b980] flex items-center justify-center">
                        <span className="text-[#e6b980] font-medium text-sm">1</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg text-[#e6b980] font-medium">1980: The Beginning</h4>
                      <p className="text-white/70 mt-1 text-sm">Timberlina was founded in Mirigama, Sri Lanka with a small team of skilled local craftsmen.</p>
                    </div>
                  </div>
                  
                  <div className="relative pl-10 pb-3 border-l-2 border-[#e6b980]/30">
                    <div className="absolute left-[-16px] top-0">
                      <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border-2 border-[#e6b980] flex items-center justify-center">
                        <span className="text-[#e6b980] font-medium text-sm">2</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg text-[#e6b980] font-medium">1985: International Expansion</h4>
                      <p className="text-white/70 mt-1 text-sm">Our first international orders arrived from the UK and Germany, launching Timberlina into global markets.</p>
                    </div>
                  </div>
                  
                  <div className="relative pl-10 pb-3 border-l-2 border-[#e6b980]/30">
                    <div className="absolute left-[-16px] top-0">
                      <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border-2 border-[#e6b980] flex items-center justify-center">
                        <span className="text-[#e6b980] font-medium text-sm">3</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg text-[#e6b980] font-medium">1995: Innovation Period</h4>
                      <p className="text-white/70 mt-1 text-sm">Introduction of new designs and techniques that became signatures of the Timberlina brand.</p>
                    </div>
                  </div>
                  
                  <div className="relative pl-10 pb-3 border-l-2 border-[#e6b980]/30">
                    <div className="absolute left-[-16px] top-0">
                      <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border-2 border-[#e6b980] flex items-center justify-center">
                        <span className="text-[#e6b980] font-medium text-sm">4</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg text-[#e6b980] font-medium">2010: Second Generation</h4>
                      <p className="text-white/70 mt-1 text-sm">The founder's daughter joined the business, bringing new ideas while maintaining the core values.</p>
                    </div>
                  </div>
                  
                  <div className="relative pl-10">
                    <div className="absolute left-[-16px] top-0">
                      <div className="w-8 h-8 rounded-full bg-[#1a1a1a] border-2 border-[#e6b980] flex items-center justify-center">
                        <span className="text-[#e6b980] font-medium text-sm">5</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg text-[#e6b980] font-medium">2023: Digital Transformation</h4>
                      <p className="text-white/70 mt-1 text-sm">Launch of our online presence, bringing our handcrafted dollhouses to a global audience.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar content */}
            <div className="lg:col-span-4">
              <div className="space-y-6">
                <div className="bg-[#1a1a1a] p-5 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4 font-poppins gradient-text">Our Values</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="mr-3 text-[#e6b980] bg-[#e6b980]/10 p-1.5 rounded-full">
                        <Award size={16} />
                      </div>
                      <span className="text-white/80 text-sm">Quality craftsmanship in every detail</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 text-[#e6b980] bg-[#e6b980]/10 p-1.5 rounded-full">
                        <Leaf size={16} />
                      </div>
                      <span className="text-white/80 text-sm">Sustainable and eco-friendly practices</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 text-[#e6b980] bg-[#e6b980]/10 p-1.5 rounded-full">
                        <Book size={16} />
                      </div>
                      <span className="text-white/80 text-sm">Educational and developmental focus</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 text-[#e6b980] bg-[#e6b980]/10 p-1.5 rounded-full">
                        <Globe size={16} />
                      </div>
                      <span className="text-white/80 text-sm">Global vision with local craftsmanship</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 text-[#e6b980] bg-[#e6b980]/10 p-1.5 rounded-full">
                        <Heart size={16} />
                      </div>
                      <span className="text-white/80 text-sm">Creating heirlooms, not just products</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
