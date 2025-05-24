import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="max-w-[2280px] w-full text-white p-4 flex space-x-4">
      <Link to="/" className="hover:underline font-outfit">
        Accueil
      </Link>
      <Link to="/about" className="hover:underline">
        À propos
      </Link>
    </nav>
  );
};

export default Header;
