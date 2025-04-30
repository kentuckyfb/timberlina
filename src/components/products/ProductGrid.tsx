import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productsData } from '../../data/products';

interface ProductGridProps {
  categoryFilter?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ categoryFilter = 'all' }) => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  
  useEffect(() => {
    if (categoryFilter === 'all') {
      setFilteredProducts(productsData);
    } else {
      setFilteredProducts(productsData.filter(product => 
        product.category?.toLowerCase() === categoryFilter.toLowerCase()
      ));
    }
  }, [categoryFilter]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {filteredProducts.map((product) => (
        <div key={product.id} className="bg-[#1a1a1a] overflow-hidden">
          <div className="aspect-square overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="p-6 bg-[#0a0a0a]">
            <h3 className="text-lg font-semibold text-[#e6b980] mb-2">{product.name}</h3>
            <p className="text-white/70 text-sm mb-4">{product.shortDescription}</p>
            <div className="flex justify-between items-center">
              {product.price && (
                <span className="text-white font-medium">${product.price.toFixed(2)}</span>
              )}
              <Link to={`/products/${product.id}`}>
                <button className="bg-[#e6b980] hover:bg-[#eacda3] text-[#121212] text-sm px-4 py-2">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;