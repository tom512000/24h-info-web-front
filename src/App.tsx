import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';

function App() {
  return (
    <>
      <div className="w-full flex justify-center p-2 bg-[#0E100F]">
        <Header />
      </div>
      <div className="w-full h-full flex justify-center p-2 bg-[#0E100F]">
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
