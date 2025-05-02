import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsData } from '../../data/products';
import CurveDecoration from '../ui/curve-decoration';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const productId = id || '0';
  const product = productsData.find(p => p.id === productId);
  
  // Error state if product not found
  if (!product) {
    return (
      <div className="py-16 md:py-24 bg-[#121212]">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto bg-[#1a1a1a] p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Product Not Found</h2>
            <p className="text-white/70 mb-6">
              The product you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/products" className="bg-[#e6b980] hover:bg-[#eacda3] text-[#121212] px-6 py-3 inline-block font-medium">
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Related products - show 3 other products
  const relatedProducts = productsData
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  // If we don't have enough related products in the same category, add some from other categories
  if (relatedProducts.length < 3) {
    const additionalProducts = productsData
      .filter(p => p.id !== product.id && p.category !== product.category)
      .slice(0, 3 - relatedProducts.length);
    
    relatedProducts.push(...additionalProducts);
  }

  return (
    <>
      {/* Product Header */}
      <section className="relative bg-[#0a0a0a] text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link to="/products" className="text-[#e6b980] hover:text-[#eacda3] transition-colors flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Back to Products
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#e6b980]">{product.name}</h1>
          <p className="text-white/80 max-w-3xl">{product.shortDescription}</p>
        </div>
        
        {/* Add extra padding at the bottom to prevent content overlap with curve */}
        <div className="pb-8 md:pb-16"></div>
        
        <CurveDecoration position="bottom" fillColor="#0a0a0a" height="md" />
      </section>
      
      {/* Product Details */}
      <section className="py-16 bg-[#121212]">
        {/* Add top padding to prevent overlap with curve */}
        <div className="pt-4 md:pt-8"></div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Product Image */}
            <div>
              <div className="border border-[#333] overflow-hidden bg-[#1a1a1a] flex items-center justify-center p-4">
                {!product.image ? (
                  <div className="text-white text-lg font-medium">No preview available</div>
                ) : (
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    style={{
                      maxWidth: '90%',
                      maxHeight: '90%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain'
                    }}
                    className="transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.parentElement.innerHTML = '<div class="text-white text-lg font-medium">No preview available</div>';
                    }}
                  />
                )}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                <div>
                  <span className="text-[#e6b980] text-sm uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {product.name}
                  </h2>
                </div>
                {product.price && (
                  <div className="text-2xl font-bold text-white">
                    ${product.price.toFixed(2)}
                  </div>
                )}
              </div>
              
              <div className="mb-8 text-white/80">
                <p>{product.description}</p>
              </div>

              <div className="bg-[#1a1a1a] border border-[#333] p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4 text-[#e6b980]">Product Specifications</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {product.dimensions && (
                    <div>
                      <h4 className="font-medium text-[#e6b980] mb-1">Dimensions</h4>
                      <p className="text-white/70">{product.dimensions}</p>
                    </div>
                  )}
                  
                  {product.targetAudience && (
                    <div>
                      <h4 className="font-medium text-[#e6b980] mb-1">Target Audience</h4>
                      <p className="text-white/70">{product.targetAudience}</p>
                    </div>
                  )}
                  
                  {product.material && (
                    <div>
                      <h4 className="font-medium text-[#e6b980] mb-1">Material</h4>
                      <p className="text-white/70">{product.material}</p>
                    </div>
                  )}
                  
                  {product.packaging && (
                    <div>
                      <h4 className="font-medium text-[#e6b980] mb-1">Packaging</h4>
                      <p className="text-white/70">{product.packaging}</p>
                    </div>
                  )}
                </div>
              </div>

              {product.features && product.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-[#e6b980]">Features & Benefits</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#e6b980] mr-2 mt-1 text-lg">•</span>
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className="bg-[#e6b980] hover:bg-[#eacda3] text-[#0a0a0a] font-medium px-6 py-3 flex items-center text-sm md:text-base">
                  <span>Contact Us About This Product</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Products - FIXED "You May Also Like" SECTION */}
      <section className="py-16 bg-[#0a0a0a] relative">
        {/* Add top padding to prevent overlap with curve */}
        <div className="pt-8 md:pt-16"></div>
        
        <CurveDecoration position="top" fillColor="#121212" height="md" />
        
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white text-center">
            You May Also <span className="text-[#e6b980]">Like</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link 
                key={relatedProduct.id} 
                to={`/products/${relatedProduct.id}`}
                className="bg-[#1a1a1a] overflow-hidden group"
              >
                {/* Fixed image container with aspect ratio maintained */}
                <div className="aspect-square bg-[#1a1a1a] flex items-center justify-center p-4">
                  {!relatedProduct.image ? (
                    <div className="text-white text-lg font-medium">No preview available</div>
                  ) : (
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.name} 
                      style={{
                        maxWidth: '80%',
                        maxHeight: '80%',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain'
                      }}
                      className="transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.parentElement.innerHTML = '<div class="text-white text-lg font-medium">No preview available</div>';
                      }}
                    />
                  )}
                </div>
                
                <div className="p-4 md:p-6 bg-[#0a0a0a]">
                  <h3 className="text-base md:text-lg font-medium text-[#e6b980] mb-2 truncate">{relatedProduct.name}</h3>
                  <div className="flex justify-between items-center">
                    {relatedProduct.price && (
                      <span className="text-white text-sm md:text-base">${relatedProduct.price.toFixed(2)}</span>
                    )}
                    <span className="bg-[#e6b980] text-[#0a0a0a] px-3 py-1 text-xs md:text-sm">View Details</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;