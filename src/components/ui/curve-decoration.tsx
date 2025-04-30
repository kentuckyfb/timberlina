import React from 'react';

interface CurveDecorationProps {
  position: 'top' | 'bottom';
  fillColor: string;
  height?: 'sm' | 'md' | 'lg';
}

const CurveDecoration: React.FC<CurveDecorationProps> = ({ 
  position, 
  fillColor,
  height = 'md'
}) => {
  // Determine height based on prop
  const heightValues = {
    sm: { desktop: '80px', mobile: '40px' },
    md: { desktop: '120px', mobile: '60px' },
    lg: { desktop: '160px', mobile: '80px' }
  };
  
  const desktopHeight = heightValues[height].desktop;
  const mobileHeight = heightValues[height].mobile;
  
  return (
    <div 
      className={`absolute left-0 right-0 w-full z-10 pointer-events-none overflow-hidden ${
        position === 'top' ? 'top-0' : 'bottom-0'
      }`}
      style={{ 
        height: desktopHeight,
        maxHeight: '15vh' // Ensures it never takes up too much vertical space on small screens
      }}
    >
      {position === 'top' ? (
        <svg 
          className="absolute w-full h-full" 
          style={{ transform: 'rotate(180deg)' }}
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path 
            fill={fillColor} 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,96C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      ) : (
        <svg 
          className="absolute w-full h-full" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path 
            fill={fillColor} 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,128C672,107,768,85,864,96C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      )}
    </div>
  );
};

export default CurveDecoration;