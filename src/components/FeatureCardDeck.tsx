import React from 'react';
import FeatureCard from './FeatureCard';
import '../styles/FeatureCardDeck.css';

// Dummy MobileFeatureCard component (replace with your actual implementation or import)
const MobileFeatureCard = (props: any) => <FeatureCard {...props} />;

// Dummy TabletFeatureCard component (replace with your actual implementation or import)
const TabletFeatureCard = (props: any) => <FeatureCard {...props} />;

// Dummy DesktopFeatureCard component (replace with your actual implementation or import)
const DesktopFeatureCard = (props: any) => <FeatureCard {...props} />;

import noads from '../assets/images/noads.jpg'
import hd from '../assets/images/hd4k.jpg'
import library from '../assets/images/library.jpg'
import devices from '../assets/images/multiplr.jpg'
import offline from '../assets/images/hd4k.jpg'

const features = [
  {
    icon: '📚',
    heading: 'Extensive Library',
    subtitle: '10,000+ episodes, from classics to simulcasts!',
    banner: library,
  },
  {
    icon: '🚫',
    heading: 'Ad-Free Experience',
    subtitle: 'No interruptions, just pure anime enjoyment.',
    banner: noads,
  },
  {
    icon: '🎥',
    heading: 'HD & 4K Streaming',
    subtitle: 'Crisp, high-quality video for the best experience.',
    banner: hd,
  },
  {
    icon: '💻',
    heading: 'Multiple Devices',
    subtitle: 'Watch on phone, tablet, PC, or smart TV or laptop.',
    banner: devices,
  },
  {
    icon: '⬇️',
    heading: 'Offline Viewing',
    subtitle: 'Download and watch offline anytime.',
    banner: offline,
  },
];

const FeatureCardDeck: React.FC = () => {
  return (
    <div className="feature-card-container w-full">
      {/* Desktop Layout (original diamond layout - 4 cards) */}
      <div className="hidden lg:flex items-center justify-center min-h-[60vh] w-full">
        <div className="feature-card-deck">
          {features.slice(0, 4).map((feature, idx) => (
            <div className={`feature-card-wrapper card-${idx + 1}`} key={feature.heading}>
              <DesktopFeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>

      {/* Tablet Layout (2 columns - ALL cards) */}
      <div className="hidden md:flex lg:hidden justify-center min-h-[40vh] w-full p-4">
        <div className="grid grid-cols-2 gap-6 w-full max-w-4xl">
          {features.map((feature) => (
            <div key={feature.heading} className="tablet-card-wrapper">
              <TabletFeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout (1 column - ALL cards) */}
      <div className="flex md:hidden justify-center w-full p-4">
        <div className="grid grid-cols-1 gap-4 w-full max-w-md">
          {features.map((feature) => (
            <MobileFeatureCard key={feature.heading} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};


// const FeatureCardDeck: React.FC = () => {
//   return (
//     <div className="w-full px-4 py-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {features.map((feature) => (
//           <FeatureCard
//             key={feature.heading}
//             heading={feature.heading}
//             subtitle={feature.subtitle}
//             highlight={feature.icon}
//             banner={feature.banner}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };
export default FeatureCardDeck; 