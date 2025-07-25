import React, { Fragment } from 'react';
interface LogoProps {
  className?: string;
  color?: string;
  textColor?: string;
  showText?: boolean;
  size?: 'small' | 'medium' | 'large';
}
export const Logo: React.FC<LogoProps> = ({
  className = '',
  color = '#7e22ce',
  // Default purple color
  textColor = '#1f2937',
  // Default text color
  showText = true,
  size = 'medium'
}) => {
  // Set dimensions based on size
  const dimensions = {
    small: {
      width: 32,
      height: 32,
      textClass: 'text-lg ml-2'
    },
    medium: {
      width: 40,
      height: 40,
      textClass: 'text-xl ml-2'
    },
    large: {
      width: 48,
      height: 48,
      textClass: 'text-2xl ml-3'
    }
  };
  const {
    width,
    height,
    textClass
  } = dimensions[size];
  return <div className={`flex items-center ${className}`}>
      <svg width={width} height={height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Circular background */}
        <circle cx="24" cy="24" r="22" fill={color} />
        <circle cx="24" cy="24" r="18" fill="white" />
        {/* Stylized spine */}
        <path d="M24 6 L24 42" stroke={color} strokeWidth="2" strokeLinecap="round" />
        {/* Vertebrae elements */}
        {[12, 17, 22, 27, 32, 37].map((y, i) => <Fragment key={i}>
            <ellipse cx="24" cy={y} rx="6" ry="2.5" fill={color} opacity="0.9" />
            <line x1="18" y1={y} x2="30" y2={y} stroke={color} strokeWidth="3" strokeLinecap="round" />
          </Fragment>)}
        {/* BTH letters around the top */}
        <path d="M16 10 L16 16 L19 16 C20.1 16 21 15.1 21 14 C21 12.9 20.1 12 19 12 L16 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M24 10 L24 16 M22 10 L26 10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M29 10 L29 16 L32 16 C33.1 16 34 15.1 34 14 L34 12 C34 10.9 33.1 10 32 10 L29 10Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
      {showText && <span className={`font-bold ${textClass}`} style={{
      color: textColor
    }}>
          BTH Chiropractic
        </span>}
    </div>;
};