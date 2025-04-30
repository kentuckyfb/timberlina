
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col dark-texture relative overflow-hidden">
      {/* Decorative curved elements */}
      <div className="hidden md:block absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#e6b980]/10 to-[#eacda3]/5 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/3 z-0 animate-float"></div>
      <div className="hidden md:block absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#e6b980]/10 to-[#eacda3]/5 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/3 z-0 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="hidden md:block absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-tr from-[#e6b980]/5 to-[#eacda3]/3 rounded-full filter blur-2xl z-0 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="hidden md:block absolute bottom-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-[#e6b980]/5 to-[#eacda3]/3 rounded-full filter blur-2xl z-0 animate-float" style={{ animationDelay: '3s' }}></div>
      
      <Header />
      <main className="flex-grow pt-20 relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
