import React from 'react';
import anime from '../assets/icons/9anime.jpg'
import amazon from '../assets/icons/amazon.jpg'
import bilibili from '../assets/icons/bilibili.jpg'
import disney from '../assets/icons/disney.jpg'
import crunchroll from '../assets/icons/crunchroll.jpg'
import funimation from '../assets/icons/funimation.jpg'
import hulu from '../assets/icons/hulu.jpg'
import netflix from '../assets/icons/netflix.jpg'

const Competitors: React.FC = () => {
  // Competitor logos (replace with actual image paths)
  const competitors = [
    { id: 1, name: 'Crunchyroll', logo: crunchroll },
    { id: 2, name: 'Funimation', logo: funimation },
    { id: 3, name: 'Netflix', logo: netflix },
    { id: 4, name: 'Amazon', logo: amazon },
    { id: 5, name: 'Hulu', logo: hulu},
    { id: 6, name: 'Disney+', logo: disney },
    { id: 7, name: '9anime', logo: anime},
    { id: 8, name: 'Bilibili', logo: bilibili },
  ];

  // Duplicate the array for seamless looping
  const doubleCompetitors = [...competitors, ...competitors];

  return (
    <div className="w-full py-12 overflow-hidden">
      <h3 className="text-center text-black dark:text-white text-xl mb-8">
        Other Platforms We Outperform
      </h3>
      
      {/* Animated logo container */}
      <div className="relative w-full h-20">
        {/* First scroll (visible) */}
        <div className="absolute flex items-center space-x-10 lg:space-x-16 animate-infinite-scroll">
          {doubleCompetitors.map((item,idx) => (
            <div key={`first-${item.id}-${idx}`} className="flex-shrink-0">
              <img 
                src={item.logo} 
                alt={item.name}
                 className="lg:h-[120px] h-[50px] lg:w-[120px] md:w-[100px] md:h-[100px] opacity-70 hover:opacity-100 rounded-md transition-opacity"
                title={item.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Competitors;