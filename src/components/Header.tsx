import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const menuItems = [
    { to: '/', label: 'Accueil' },
    { to: '/history', label: 'Histoire' },
  ];

  return (
    <nav className="max-w-[2280px] w-full px-8 py-6 flex justify-center items-center gap-8 bg-black text-white z-50 relative">
      <Link
        to={menuItems[0].to}
        className="relative group text-lg uppercase font-bold"
      >
        <span className="block skew-x-[-15deg] border-2 border-fuchsia-500 px-6 py-2 transition-all duration-300 bg-black group-hover:bg-fuchsia-500/10 group-hover:drop-shadow-[0_0_10px_#d946ef]">
          <span className="block skew-x-[15deg] text-white relative z-10">
            {menuItems[0].label}
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-fuchsia-400 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">⚡</span>
          </span>
        </span>
      </Link>

      <div className="mx-4">
        <img
          src="/logo.png"
          alt="Lyon 2025 Logo"
          className="h-12 w-auto drop-shadow-[0_0_10px_cyan]"
        />
      </div>

      <Link
        to={menuItems[1].to}
        className="relative group text-lg uppercase font-bold"
      >
        <span className="block skew-x-[-15deg] border-2 border-fuchsia-500 px-6 py-2 transition-all duration-300 bg-black group-hover:bg-fuchsia-500/10 group-hover:drop-shadow-[0_0_10px_#d946ef]">
          <span className="block skew-x-[15deg] text-white relative z-10">
            {menuItems[1].label}
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-fuchsia-400 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">⚡</span>
          </span>
        </span>
      </Link>
    </nav>
  );
};

export default Header;
