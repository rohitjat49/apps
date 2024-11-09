import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-navBar-bg py-4">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <img 
            src="/img/logo.avif" 
            alt="Logo" 
            className="w-12 sm:w-16 md:w-20 lg:ml-20 md:ml-2" 
          />
        </div>
        
        <div className="text-white text-lg sm:text-xl md:text-xl font-bold mr-4 lg:mr-6 xl:mr-32">
          100% donation policy
        </div>
      </div>
    </div>
  );
};

export default Navbar;
