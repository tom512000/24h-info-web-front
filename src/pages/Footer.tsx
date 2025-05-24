import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      data-scroll-section
      className="bg-black text-center text-white py-20 px-8 border-t-2 border-fuchsia-500/30 relative font-outfit overflow-hidden"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <span className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-fuchsia-400 to-transparent animate-neon-x" />
        <span className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-neon-x delay-300" />
        <span className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-neon-y delay-500" />
        <span className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-neon-y" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-xl md:text-2xl leading-relaxed">
        <p className="mb-6">
          Rendez-vous à{' '}
          <a
            href="https://www.lyon.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fuchsia-400 hover:underline"
          >
            Lyon
          </a>{' '}
          du <span className="text-cyan-400">5 au 8 décembre 2025</span>
        </p>
        <p className="mb-6">
          Accès facile en train, tram ou à pied. Le centre-ville devient un parcours immersif de lumière et d’émotions.
        </p>
        <p className="italic text-purple-300">
          “Quand la nuit tombe, Lyon s’illumine comme un rêve éveillé.”
        </p>

        <nav className="flex flex-wrap justify-center gap-6 text-lg mb-16">
          <Link to="/" className="text-fuchsia-400 hover:underline">
            Accueil
          </Link>
          <Link to="/history" className="text-fuchsia-400 hover:underline">
            Histoire
          </Link>
          <Link to="/events" className="text-fuchsia-400 hover:underline">
            Évènements
          </Link>
        </nav>

        <div className="flex justify-center gap-8 text-2xl mb-24">
          <a
            href="https://www.instagram.com/fetedeslumieres/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fuchsia-400 hover:text-white transition-colors duration-300"
          >
            Instagram
          </a>
          <a
            href="https://www.facebook.com/fetedeslumieres"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fuchsia-400 hover:text-white transition-colors duration-300"
          >
            Facebook
          </a>
          <a
            href="https://www.tiktok.com/@villedelyon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fuchsia-400 hover:text-white transition-colors duration-300"
          >
            TikTok
          </a>
        </div>
      </div>

      <div className="absolute w-32 h-32 bg-fuchsia-500 rounded-full blur-3xl opacity-20 bottom-10 left-10 pointer-events-none" data-scroll data-scroll-speed="-2" />
      <div className="absolute w-24 h-24 bg-cyan-400 rounded-full blur-2xl opacity-15 top-10 right-10 pointer-events-none" data-scroll data-scroll-speed="-1" />
    </footer>
  );
};

export default Footer;
