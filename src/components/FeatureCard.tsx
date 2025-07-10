import React from 'react';
import '../styles/FeatureCard.css';

interface FeatureCardProps {
  heading: string;
  subtitle: string;
  highlight: string;
  banner:string
}

const MobileFeatureCard: React.FC<FeatureCardProps> = ({ heading, subtitle, highlight, banner }) => {
  return (
    <div className="block md:hidden bg-frost dark:bg-dark800 rounded-lg p-2 shadow-md">
    <div className="feature-card bg-frost dark:bg-black">
      <div className="w-full h-[220px] sm:h-[200px]">
        <img 
          src={banner} 
          alt="" 
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <p className="text-lg sm:text-xl font-bold text-fashion_pink">{heading}</p>
        <p className="text-sm sm:text-base text-smokey_black dark:text-white mt-2">{subtitle}</p>
        <p className="text-neon_purple font-semibold mt-2">{highlight}</p>
      </div>
    </div>
    </div>
  );
};

// 1. Update DesktopFeatureCard to ensure proper isolation
const DesktopFeatureCard: React.FC<FeatureCardProps> = ({ heading, subtitle, highlight, banner }) => {
  return (
    <div className="hidden lg:block"> {/* Only show on desktop */}
      <div className="feature-card-animated bg-frost dark:bg-black">
        <div className="uiverse-card">
          <div className="w-full">
            <img src={banner} alt="" className="w-full object-cover h-[200px]"/>
          </div>
          <p className="uiverse-heading text-fashion_pink">{heading}</p>
          <p className='text-smokey_black dark:text-white'>{subtitle}</p>
          <p className='text-neon_purple'>{highlight}</p>
        </div>
      </div>
    </div>
  );
};

// 2. Update TabletFeatureCard with explicit non-animated styles
const TabletFeatureCard: React.FC<FeatureCardProps> = ({ heading, subtitle, highlight, banner }) => {
  return (
    <div className="hidden md:block lg:hidden"> {/* Only show on tablet */}
      <div className="bg-frost dark:bg-dark800 rounded-lg p-4 shadow-lg">
        <div className="flex flex-col gap-4">
          <div className="w-full h-[250px]">
            <img 
              src={banner} 
              alt="" 
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="w-full"> {/* Changed from w-2/3 to w-full */}
            <p className="text-xl font-bold text-fashion_pink">{heading}</p>
            <p className="text-base text-smokey_black dark:text-white mt-2">{subtitle}</p>
            <p className="text-neon_purple font-semibold mt-2">{highlight}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
const FeatureCard: React.FC<FeatureCardProps> = (props) => {
  return (
    <>
    <MobileFeatureCard {...props}/>
    <DesktopFeatureCard {...props}/>
    <TabletFeatureCard {...props}/>
    </>

  );
};


export default FeatureCard; 