import React from 'react';
import Recommendation from './HomeComponents/Recommendation';

interface RecommendedProps {
  top: any[];
  sidebarsVisible: boolean;
  index?: number; // Show anime at specific index
  indices?: number[]; // Show anime at specific indices (e.g., [0, 2, 4])
  id?: number | string; // Show anime with specific ID
  count?: number; // Number of anime to show (default: 1)
  excludeIds?: (number | string)[]; // IDs to exclude (already shown anime)
  className?: string; // Custom className for height
}

const Recommended: React.FC<RecommendedProps> = ({ 
  top, 
  sidebarsVisible, 
  index,
  indices,
  id,
  count = 1,
  excludeIds = [],
  className
}) => {
  // Determine which anime to show
  let animeToShow: any[] = [];
  
  if (id) {
    // Find anime by ID
    const foundAnime = top.find(anime => anime.id === id);
    if (foundAnime && !excludeIds.includes(foundAnime.id)) {
      animeToShow = [foundAnime];
    }
  } else if (indices && indices.length > 0) {
    // Show anime at specific indices (excluding already shown)
    animeToShow = indices
      .map(i => top[i])
      .filter(anime => anime !== undefined && !excludeIds.includes(anime.id));
  } else if (index !== undefined) {
    // Show anime starting from specific index (excluding already shown)
    const startIndex = index;
    const endIndex = Math.min(startIndex + count, top.length);
    animeToShow = top.slice(startIndex, endIndex)
      .filter(anime => !excludeIds.includes(anime.id));
  } else {
    // Default: show first anime(s) (excluding already shown)
    animeToShow = top
      .filter(anime => !excludeIds.includes(anime.id))
      .slice(0, count);
  }

  // Use custom className or default section styling
  const sectionClassName = className || "top-anime w-full mt-4";

  return (
    <section className={sectionClassName}>
      {top && top.length > 0 && animeToShow.length > 0 ? (
        <div className="flex w-full flex-col gap-4 mt-6">
          <h1 className="text-neon_purple dark:text-white font-bold text-md bg-fashion_pink pl-1 inline-block w-[120px] font-fira-code">Recommended</h1>
          {animeToShow.map(anime => (
            <Recommendation
              key={anime.id}
              name={anime.name}
              banner={anime.banner}
              sidebarsVisible={sidebarsVisible}
            />
          ))}
        </div>
      ) : (
        <div className="w-full p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded">
          No top anime data available. Top array length: {top?.length || 0}
        </div>
      )}
    </section>
  );
};

export default Recommended; 