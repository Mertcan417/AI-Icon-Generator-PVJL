// LoadingScreen.js
import React from 'react';

export default function LoadingScreen() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-90 z-50">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-500"></div>
      <p className="mt-5 text-xl font-bold text-gray-700">Generating Image...</p>
    </div>
  );
}
