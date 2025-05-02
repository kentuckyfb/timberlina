import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import { Book, Heart, Leaf, Globe, Award, Check } from 'lucide-react';
import CurveDecoration from '../components/ui/curve-decoration';

const About = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-[#0a0a0a] text-theme-light py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-[#e6b980] text-sm font-medium tracking-wider mb-3">OUR STORY</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 font-poppins gradient-text">About Us</h1>
            <p className="text-base md:text-lg text-white/80">
              Handcrafted Dollhouses Since 1980
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
                  Forty-three years ago, in the quiet town of Mirigama, Sri Lanka, a man sat in a modest woodworking workshop, softly humming a tune from Thumbelina—Hans Christian Andersen's tale of a tiny girl with a giant heart.
                </p>
                
                <blockquote className="border-l-4 border-[#e6b980] pl-4 italic text-white my-6">
                  "Thumbelina, what's the difference if you're very small? When your heart is full of love, you are nine feet tall."
                </blockquote>
                
                <p className="text-base leading-relaxed">
                  These words sparked a vision: to create something small in scale yet grand in heart—miniature homes that reflected the beauty of craftsmanship and the warmth of love. And so, Timberlina was born: a pioneering name in handcrafted wooden dollhouses.
                </p>
                
                <p className="text-base leading-relaxed">
                  Timberlina has been globally recognized since 1980 for its exceptional craftsmanship, quality materials, and timeless design. Each dollhouse is a celebration of traditional woodworking, designed to inspire creativity and last for generations.
                </p>
                
                <h3 className="text-xl font-bold mt-8 mb-4 text-white font-poppins">Rooted in <span className="gradient-text">Craftsmanship</span>, Built with <span className="gradient-text">Love</span></h3>
                
                <p className="text-base leading-relaxed">
                  From the beginning, Timberlina has been about more than just wood and nails. Together with handpicked skilled craftsmen, we began building dollhouses and miniature furniture that were not only beautiful but also made to last—designed to be played with, cherished, and passed down through generations.
                </p>
                
                <p className="text-base leading-relaxed">
                  What started in a humble village grew into a brand recognized far beyond Sri Lanka. Timberlina dollhouses found homes in the US, UK, Scandinavia, and Germany, earning praise at international toy fairs for their impeccable quality and artistry.
                </p>
                
                <h3 className="text-xl font-bold mt-8 mb-4 text-white font-poppins">More Than Just a <span className="gradient-text">Dollhouse</span></h3>
                
                <p className="text-base leading-relaxed">
                  At Timberlina, we believe in timeless play. Our dollhouses aren't just toys—they're creative canvases, collector's pieces, and heirlooms in the making. Whether you're a child, a hobbyist, or a lifelong collector, Timberlina brings joy and craftsmanship to every stage of life.
                </p>
                
                <p className="text-base leading-relaxed">
                  Today, 43 years later, Timberlina continues to grow—still rooted in the values our founder began with. We are proud to honor his legacy, leading Timberlina with the same passion, creativity, and unwavering commitment to excellence.
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
              {/* Our Values */}
              <div className="bg-[#1a1a1a] p-5 rounded-lg mb-6">
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
              
              {/* Why Choose Timberlina */}
              <div className="bg-[#1a1a1a] p-5 rounded-lg mb-6">
                <h3 className="text-lg font-semibold mb-4 font-poppins gradient-text">Why Choose Timberlina?</h3>
                <ul className="space-y-4">
                  <li>
                    <h4 className="text-[#e6b980] font-medium mb-1 flex items-center">
                      <Check size={16} className="mr-2" /> Handcrafted Excellence
                    </h4>
                    <p className="text-white/80 text-sm pl-6">Every house is meticulously made by skilled artisans using premium, sustainably sourced timber.</p>
                  </li>
                  <li>
                    <h4 className="text-[#e6b980] font-medium mb-1 flex items-center">
                      <Check size={16} className="mr-2" /> Functional & Beautiful
                    </h4>
                    <p className="text-white/80 text-sm pl-6">Designed with functional doors and windows, Timberlina dollhouses are both stunning and practical. The natural wood finish makes them ideal for painting and personalisation.</p>
                  </li>
                  <li>
                    <h4 className="text-[#e6b980] font-medium mb-1 flex items-center">
                      <Check size={16} className="mr-2" /> Built to Last
                    </h4>
                    <p className="text-white/80 text-sm pl-6">Our craftsmanship ensures durability without compromising on aesthetic detail.</p>
                  </li>
                </ul>
              </div>
              
              {/* Product Information */}
              <div className="bg-[#1a1a1a] p-5 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 font-poppins gradient-text">Our Products</h3>
                
                <div className="mb-4">
                  <h4 className="text-[#e6b980] font-medium mb-2">Assembly Options</h4>
                  <ul className="text-white/80 text-sm space-y-2 pl-5 list-decimal">
                    <li>Fully Assembled – Professionally glued and ready to enjoy.</li>
                    <li>Pre-Assembled (Detachable) – Comes assembled, but easy to take apart and reassemble.</li>
                    <li>Flat-Packed DIY Kit – Includes clear, step-by-step instructions for hobbyists and DIY enthusiasts.</li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-[#e6b980] font-medium mb-2">Furniture & Accessories</h4>
                  <p className="text-white/80 text-sm">Enhance your dollhouse with made-to-order miniature wooden furniture, designed to perfectly match the 1:12 scale standard.</p>
                </div>
                
                <div>
                  <h4 className="text-[#e6b980] font-medium mb-2">Models & Scale Options</h4>
                  <ul className="text-white/80 text-sm space-y-1 pl-5 list-disc">
                    <li>7 Unique Dollhouse Models</li>
                    <li>Up to 12 Variations per Model</li>
                    <li>Select models also available in 1:24 scale</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          
        </div>
      </section>
    </MainLayout>
  );
};

export default About;