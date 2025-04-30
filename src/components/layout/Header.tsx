
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 backdrop-blur-sm ${isScrolled ? 'bg-theme-dark/90 shadow-lg shadow-accent-teal/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="font-playfair text-2xl md:text-3xl font-semibold text-accent-teal gradient-text hover:text-glow transition-all">
          Timberlina
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center text-theme-light hover:text-accent-teal transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link to="/" className="text-theme-light hover:text-accent-teal transition-colors duration-300">Home</Link>
          <Link to="/about" className="text-theme-light hover:text-accent-teal transition-colors duration-300">About</Link>
          <Link to="/products" className="text-theme-light hover:text-accent-teal transition-colors duration-300">Products</Link>
          <Link to="/contact" className="btn-primary animate-bounce-subtle">Contact</Link>
        </nav>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#1a1a1a] shadow-md py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4 px-6">
              <Link 
                to="/" 
                className="text-theme-light hover:text-accent-teal transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-theme-light hover:text-accent-teal transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/products" 
                className="text-theme-light hover:text-accent-teal transition-colors duration-300 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                to="/contact" 
                className="btn-primary w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
