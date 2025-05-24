import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Footer from './Footer';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
    });
    return () => {
      scroll.destroy();
    };
  }, []);

  const images = [
    '/images/fete-lumiere-lyon-centre.jpg',
    '/images/HYPERLAPSE_0179-DNG.jpg',
  ];

  return (
    <div
      data-scroll-container
      ref={containerRef}
      className="min-h-screen bg-black text-white overflow-hidden font-outfit relative"
    >
      <section
        data-scroll-section
        className="h-screen flex items-center justify-center relative"
      >
        <h1
          data-scroll
          data-scroll-speed="2"
          className="text-7xl md:text-9xl font-bold text-center max-w-6xl px-6 drop-shadow-[0_0_25px_#00ffff]"
        >
          La ville s'endort, la lumière s'éveille.
        </h1>
        <div
          className="absolute top-[20%] left-[10%] w-[20rem] h-[20rem] bg-cyan-400 rounded-full blur-3xl opacity-10 pointer-events-none"
          data-scroll
          data-scroll-speed="-2"
        />
        <div
          className="absolute bottom-[10%] right-[5%] w-[15rem] h-[15rem] bg-purple-500 rounded-full blur-2xl opacity-20 pointer-events-none"
          data-scroll
          data-scroll-speed="-3"
        />
      </section>

      {images.map((src, i) => (
        <section
          key={i}
          data-scroll-section
          className={`min-h-[100vh] flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between gap-12 px-8 py-32 relative`}
        >
          <img
            src={src}
            alt={`Fête ${i + 1}`}
            data-scroll
            data-scroll-speed={i % 2 === 0 ? '1' : '-1'}
            className="w-full md:w-3/4 rounded-3xl shadow-2xl border-[6px] border-fuchsia-500"
          />
          <p
            data-scroll
            data-scroll-speed={i % 2 === 0 ? '-2' : '2'}
            className="text-4xl md:text-6xl max-w-2xl leading-snug text-center md:text-left text-cyan-200 drop-shadow-[0_0_10px_#22d3ee]"
          >
            {i % 2 === 0
              ? 'Les rues dansent sous des milliers de lueurs.'
              : 'Une toile de lumières peinte par le silence.'}
          </p>

          <div
            className={`absolute w-[10rem] h-[10rem] ${i % 2 === 0 ? 'top-[10%] left-[5%]' : 'bottom-[15%] right-[10%]'} bg-pink-500 rounded-full blur-2xl opacity-15 pointer-events-none animate-pulse`}
            data-scroll
            data-scroll-speed="-3"
          />
          <div
            className="absolute w-40 h-40 border-2 border-cyan-400 rounded-full animate-spin-slow opacity-10"
            style={{
              top: '40%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            data-scroll
            data-scroll-speed="-1"
          />
        </section>
      ))}

      <section
        data-scroll-section
        className="py-60 px-8 text-center bg-black text-cyan-400 text-5xl md:text-7xl font-bold drop-shadow-[0_0_25px_cyan]"
      >
        Et toi, jusqu'où suivras-tu la lumière ?
        <p className="mt-8 text-lg md:text-2xl text-purple-200 drop-shadow-[0_0_10px_purple]">
          Entre chaque reflet, un rêve. Sous chaque lueur, une histoire.
        </p>
      </section>

      <Footer />
    </div>
  );
}
