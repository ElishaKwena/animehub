// Custom hook to format numbers with 'k' and 'm' suffixes
const useFormatNumber = (num: number): string => {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(num % 1_000_000 === 0 ? 0 : 1) + 'M';
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(num % 1_000 === 0 ? 0 : 1) + 'K';
  } else {
    return num.toString();
  }
};

export default useFormatNumber; 