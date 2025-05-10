import React from 'react';
import { Leaf } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 transition-transform hover:scale-105">
          <Leaf className="h-8 w-8 text-green-600" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
            EcoSense Data
          </h1>
        </div>
        <nav>
          <a 
            href="#" 
            className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200"
          >
            Dashboard
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;