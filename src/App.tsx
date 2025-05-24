import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import History from './pages/History';
import Events from './pages/Events';

function App() {
  return (
    <>
      <div className="w-full flex justify-center bg-[#0E100F]">
        <Header />
      </div>
      <div className="w-full h-full flex justify-center bg-[#0E100F]">
        <main className="max-w-[2280px] w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/history" element={<History />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
