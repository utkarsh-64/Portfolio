import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-800 py-8 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="text-center mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center">
              Made with <Heart size={16} className="mx-1 text-red-500" />
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              &copy; {currentYear} Utkarsh Lakhani. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-500">
          <p>Design inspiration from Apple and Portfolio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;