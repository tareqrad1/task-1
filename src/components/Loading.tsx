import React from 'react';

const Loading: React.FC = () => {
  return (
    <div 
      className="flex flex-col items-center justify-center p-20 min-h-[300px] text-green-500 bg-gray-900 h-screen"
      aria-label="Loading characters"
    >
      <div 
        className="w-16 h-16 border-4 border-t-4 border-green-500 border-opacity-25 rounded-full animate-spin mb-4"
        style={{ borderTopColor: '#10b981', borderBottomColor: '#10b981' }} // Tailwind Green-500
      ></div>
    </div>
  );
};

export default Loading;