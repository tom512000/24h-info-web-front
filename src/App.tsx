import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <>
      <div className="w-full flex justify-center p-2 bg-gray-800">
        <nav className="max-w-[2280px] w-full text-white p-4 flex space-x-4">
          <Link to="/" className="hover:underline">
            Accueil
          </Link>
          <Link to="/about" className="hover:underline">
            À propos
          </Link>
        </nav>
      </div>
      <div className="w-full h-full flex justify-center p-2 bg-white">
        <main className="max-w-[2280px] w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
