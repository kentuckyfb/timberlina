import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { ShoppingCart } from 'lucide-react';
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

      {/* Info Section */}
      <section className="py-12 md:py-16 bg-[#0a0a0a]">
        <CurveDecoration position="top" fillColor="#121212" height="md" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className="inline-block text-[#e6b980] text-sm font-medium tracking-wider mb-3">CUSTOM CREATIONS</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white font-poppins">Custom <span className="gradient-text">Dollhouses</span></h2>
              <div className="prose prose-lg text-white/80 max-w-none">
                <p className="text-sm md:text-base">
                  Beyond our standard collection, Timberlina offers custom dollhouse creation services. 
                  Whether you're looking for a specific style, size, or special features, our skilled craftsmen 
                  can bring your vision to life.
                </p>
                <p className="text-sm md:text-base mt-4">
                  Custom dollhouses make perfect gifts for special occasions or unique collector's items. 
                  Contact us to discuss your specific requirements and let us create a one-of-a-kind miniature 
                  masterpiece for you.
                </p>
              </div>
              
              <div className="mt-6">
                <Link to="/contact">
                  <Button className="bg-[#e6b980] hover:bg-[#eacda3] text-[#121212] font-medium">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Request Custom Dollhouse
                  </Button>
                </Link>
              </div>
            </div>
            
            <div>
              <div className="bg-[#1a1a1a] p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-[#e6b980] font-poppins gradient-text">Product Information</h3>
                <ul className="space-y-4 md:space-y-6">
                  <li className="flex items-start">
                    <span className="text-[#e6b980] mr-4 text-xl md:text-2xl">01</span>
                    <div>
                      <span className="font-medium text-white block text-base md:text-lg">Craftsmanship</span>
                      <span className="text-white/70 mt-1 block text-sm">
                        Each dollhouse is meticulously hand-crafted using traditional techniques, ensuring exceptional quality.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#e6b980] mr-4 text-xl md:text-2xl">02</span>
                    <div>
                      <span className="font-medium text-white block text-base md:text-lg">Materials</span>
                      <span className="text-white/70 mt-1 block text-sm">
                        Made from sustainable plantation timber with non-toxic, child-safe finishes.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#e6b980] mr-4 text-xl md:text-2xl">03</span>
                    <div>
                      <span className="font-medium text-white block text-base md:text-lg">Assembly</span>
                      <span className="text-white/70 mt-1 block text-sm">
                        Most dollhouses feature tool-free assembly with pre-constructed components.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#e6b980] mr-4 text-xl md:text-2xl">04</span>
                    <div>
                      <span className="font-medium text-white block text-base md:text-lg">Scalability</span>
                      <span className="text-white/70 mt-1 block text-sm">
                        Available in standard 1:12 scale, with select models in 1:24 scale.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Products;