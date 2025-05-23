import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import History from './pages/History';

function App() {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4 flex space-x-4">
        <Link to="/" className="hover:underline">Accueil</Link>
        <Link to="/about" className="hover:underline">À propos</Link>
        <Link to="/history" className="hover:underline">Histoire</Link>
      </nav>

      <main className="mt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          {/* ajoute d’autres routes ici */}
        </Routes>
      </main>
    </div>
  );
}

export default App
