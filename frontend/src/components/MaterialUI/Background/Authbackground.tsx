import React, { useEffect, useRef } from 'react';
import { backgroundimages } from '../../../data/BackImages';

const Authbackground: React.FC = () => {
  // Refs for all containers
  const refs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ];

  // Shuffle array function
  const shuffleArray = (array: any[]) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  // Different scroll speeds for each column
  const speeds = [0.4, 0.6, 0.5, 0.7, 0.3];

  useEffect(() => {
    const cleanupFunctions = refs.map((ref, index) => {
      const container = ref.current;
      if (!container) return;

      let scrollPosition = 0;
      const speed = speeds[index] * (window.innerWidth < 768 ? 0.5 : 1);
      let animationFrameId: number;

      const scroll = () => {
        scrollPosition += speed;
        container.scrollTop = scrollPosition;
        
        if (scrollPosition >= container.scrollHeight / 2) {
          scrollPosition = 0;
          container.scrollTop = 0;
        }
        
        animationFrameId = requestAnimationFrame(scroll);
      };

      animationFrameId = requestAnimationFrame(scroll);
      return () => cancelAnimationFrame(animationFrameId);
    });

    return () => cleanupFunctions.forEach(cleanup => cleanup?.());
  }, []);

  // Responsive positions for each column
  const positions = [
    'right-[-80%] md:right-[-70%] lg:right-[-36%]', 
    'right-[-30%] md:right-[-25%] lg:right-[-6%]', 
    'left-[37.5%] md:left-[41.6%] lg:left-1/2', 
    'left-[-12.5%] md:left-[-3.7%] lg:left-[20%]', 
    'left-[-62.5%] md:left-[-49%] lg:left-[-10%]'
  ];

  // Background colors
  // const bgColors = [
  //   'bg-coffee', 
  //   'bg-candy', 
  //   'bg-neon_purple', 
  //   'bg-fashion_pink', 
  //   'bg-neon_blue'
  // ];

  return (
    <main className="w-full max-h-screen relative overflow-hidden">
      {/* Smoky Top Left Corner */}
      <div className="absolute top-0 bottom-0 w-full pointer-events-none z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-transparent opacity-50 backdrop-blur-sm"></div>
      </div>


      {/* Scrolling Columns */}
      {refs.map((ref, index) => {
    
        const shuffledImages = shuffleArray(backgroundimages);
        
        return (
          <div
            key={index}
            ref={ref}
            className={`absolute w-[160px] h-[150vh] md:w-[350px] md:h-[180vh] lg:w-[400px] ${positions[index]} rotate-[-30deg] top-[-20%] md:top-[-30%] flex flex-col gap-1 md:gap-2 p-1 overflow-hidden`}
          >
            {shuffledImages.map((item) => (
              <div key={`${index}-${item.id}`} className="w-full h-[150px] md:h-[300px] lg:h-[350px] border rounded-md flex-shrink-0">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover object-center rounded-md"
                />
              </div>
            ))}
            {shuffledImages.map((item) => (
              <div key={`${index}-dup-${item.id}`} className="w-full h-[200px] md:h-[300px] lg:h-[350px] border rounded-md flex-shrink-0">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover object-center rounded-md"
                />
              </div>
            ))}
          </div>
        );
      })}
    </main>
  );
};

export default Authbackground;