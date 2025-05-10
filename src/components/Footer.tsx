import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">EcoSense Data</h3>
            <p className="text-gray-400">
              Environmental monitoring made simple
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} EcoSense Data. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer