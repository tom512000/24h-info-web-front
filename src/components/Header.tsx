import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="max-w-[2280px] w-full text-white p-4 flex space-x-4">
      <Link to="/" className="hover:underline">
        Accueil
      </Link>
      <Link to="/about" className="hover:underline">
        À propos
      </Link>
      <Link to="/history" className="hover:underline">
        Histoire
      </Link>
    </nav>
  );
};

export default Header;
