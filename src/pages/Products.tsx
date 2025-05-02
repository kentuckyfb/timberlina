import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { Hammer, Ruler, Leaf, Settings } from 'lucide-react';
import { Button } from '../components/ui/button';
import CurveDecoration from '../components/ui/curve-decoration';
import { productsData, productCategories } from '../data/products';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? productsData 
    : productsData.filter(product => 
        product.category?.toLowerCase() === activeCategory.toLowerCase()
      );

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-[#0a0a0a] text-theme-light py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-[#e6b980] text-sm font-medium tracking-wider mb-3">OUR COLLECTION</span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 font-poppins gradient-text">Our Products</h1>
            <p className="text-base md:text-lg text-white/80">
              Explore our collection of handcrafted dollhouses, each designed to inspire imagination and creativity.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-30 bg-grain bg-repeat"></div>
        <CurveDecoration position="bottom" fillColor="#121212" height="md" />
      </section>

      {/* Products Section */}
      <section className="py-12 md:py-16 bg-[#121212]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white font-poppins">All <span className="gradient-text">Products</span></h2>
            <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base">
              Browse our collection of handcrafted dollhouses, each meticulously designed and crafted from premium plantation timber.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {productCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm transition-colors ${
                  activeCategory === category.id
                    ? 'bg-[#e6b980] text-[#0a0a0a] font-medium'
                    : 'bg-[#1a1a1a] text-white/80 hover:bg-[#333]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-[#1a1a1a] overflow-hidden flex flex-col">
                {/* Fixed image container with aspect-square maintained but better image display */}
                <div className="aspect-square bg-[#1a1a1a] flex items-center justify-center p-4">
                  {!product.image ? (
                    <div className="text-white text-lg font-medium">No preview available</div>
                  ) : (
                    <img 
                      src={product.image} 
                      alt={product.name}
                      style={{
                        maxWidth: '80%',
                        maxHeight: '80%',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain'
                      }}
                      className="transition-transform duration-500 hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.parentElement.innerHTML = '<div class="text-white text-lg font-medium">No preview available</div>';
                      }}
                    />
                  )}
                </div>
                <div className="p-6 bg-[#0a0a0a] flex flex-col justify-between" style={{ height: "200px" }}>
                  <div>
                    <h3 className="text-lg font-semibold text-[#e6b980] mb-2 line-clamp-1">{product.name}</h3>
                    <p className="text-white/70 text-sm line-clamp-3">
                      {product.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <Link to={`/products/${product.id}`} className="w-full block">
                      <Button className="bg-[#e6b980] hover:bg-[#eacda3] text-[#121212] text-sm w-full">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Product Information Section */}
      <section className="py-16 md:py-24 bg-[#0a0a0a]">
        <CurveDecoration position="top" fillColor="#121212" height="md" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white font-poppins">
              <span className="gradient-text">Product Information</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mt-4 text-sm md:text-base">
              What makes our dollhouses special? Here's everything you need to know about our craftsmanship and materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] p-6 rounded-lg border border-[#333] transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl hover:shadow-[#e6b980]/10">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#e6b980]/10 rounded-full flex items-center justify-center">
                  <Hammer className="w-8 h-8 text-[#e6b980]" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-[#e6b980] mb-4">Craftsmanship</h3>
              <p className="text-white/70 text-center text-sm">
                Each dollhouse is meticulously hand-crafted using traditional techniques, ensuring exceptional quality and attention to detail.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] p-6 rounded-lg border border-[#333] transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl hover:shadow-[#e6b980]/10">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#e6b980]/10 rounded-full flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-[#e6b980]" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-[#e6b980] mb-4">Materials</h3>
              <p className="text-white/70 text-center text-sm">
                Made from sustainable plantation timber with non-toxic, child-safe finishes that are environmentally friendly.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] p-6 rounded-lg border border-[#333] transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl hover:shadow-[#e6b980]/10">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#e6b980]/10 rounded-full flex items-center justify-center">
                  <Settings className="w-8 h-8 text-[#e6b980]" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-[#e6b980] mb-4">Assembly</h3>
              <p className="text-white/70 text-center text-sm">
                Most dollhouses feature tool-free assembly with pre-constructed components for easy setup and enjoyment.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] p-6 rounded-lg border border-[#333] transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl hover:shadow-[#e6b980]/10">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#e6b980]/10 rounded-full flex items-center justify-center">
                  <Ruler className="w-8 h-8 text-[#e6b980]" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-[#e6b980] mb-4">Scalability</h3>
              <p className="text-white/70 text-center text-sm">
                Available in standard (1:12) and other specified scales to match your existing collection or preferences.
              </p>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-12 text-center">
            <Link to="/contact">
              <Button className="bg-[#e6b980] hover:bg-[#eacda3] text-[#121212] px-8 py-6 text-base">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Products;