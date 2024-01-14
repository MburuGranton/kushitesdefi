// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-white text-lg font-bold">SWAAP</a>

        {/* Navigation Links */}
        <div className="space-x-4">
          <a href="/swap" className="text-white">Swap</a>
          <a href="/stake" className="text-white">Stake</a>
          <a href="lend" className="text-white">Borrow</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
