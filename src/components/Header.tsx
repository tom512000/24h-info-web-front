import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const menuItems = [
    { to: '/', label: 'Accueil' },
    { to: '/about', label: 'À propos' },
    { to: '/history', label: 'Histoire' },
  ];

  return (
    <nav className="max-w-[2280px] w-full px-8 py-6 flex justify-center gap-8 bg-black text-white z-50 relative">
      {menuItems.map((item, idx) => (
        <Link
          key={idx}
          to={item.to}
          className="relative group text-lg uppercase font-bold"
        >
          <span
            className="block skew-x-[-15deg] border-2 border-fuchsia-500 px-6 py-2 transition-all duration-300
                       bg-black group-hover:bg-fuchsia-500/10 group-hover:drop-shadow-[0_0_10px_#d946ef]">
            <span className="block skew-x-[15deg] text-white relative z-10">
              {item.label}
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-fuchsia-400 text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">⚡</span>
            </span>
          </span>
        </Link>
      ))}
    </nav>
  );
};

export default Header;
