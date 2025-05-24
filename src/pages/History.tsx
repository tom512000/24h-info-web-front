import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Footer from './Footer';

export default function History() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const scroll = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
      });

      return () => {
        scroll.destroy();
      };
    }
  }, []);

  const timeline = [
    {
      year: '1852',
      text: 'Origine de la Fête des Lumières : hommage à la Vierge Marie.',
    },
    { year: '1900', text: 'Développement de l’éclairage urbain à Lyon.' },
    {
      year: '1928',
      text: 'Premier éclairage public festif sur la colline de Fourvière.',
    },
    {
      year: '1960',
      text: 'Les premiers éclairages décoratifs apparaissent dans Lyon.',
    },
    {
      year: '1976',
      text: 'Introduction d’éclairages artistiques dans les rues commerçantes.',
    },
    {
      year: '1989',
      text: 'La fête devient plus artistique avec des installations modernes.',
    },
    {
      year: '1999',
      text: 'Création d’un parcours lumière à travers la Presqu’île.',
    },
    {
      year: '2000',
      text: 'Lyon se positionne comme capitale internationale des lumières.',
    },
    {
      year: '2010',
      text: 'Explosion du nombre d’artistes internationaux participants.',
    },
    {
      year: '2015',
      text: 'L’événement s’adapte après les attentats de Paris.',
    },
    { year: '2019', text: 'Des millions de visiteurs venus du monde entier.' },
    { year: '2020', text: 'Édition annulée pour cause de pandémie.' },
    { year: '2021', text: 'Retour progressif avec format réduit et contrôlé.' },
    {
      year: '2023',
      text: 'Édition hybride avec installations physiques et numériques.',
    },
  ];

  return (
    <div
      data-scroll-container
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-black via-[#0a0a2a] to-black text-white overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-[url('/lightning.png')] bg-cover bg-center opacity-10 animate-pulse-fast pointer-events-none z-0" />

      <section
        className="relative z-10 py-32 px-6 max-w-3xl mx-auto"
        data-scroll-section
      >
        <div
          className="absolute w-[30rem] h-[30rem] bg-cyan-400 rounded-full blur-3xl opacity-20 pointer-events-none animate-glow1 animate-glowFloat1"
          data-scroll
          data-scroll-speed="-1"
          style={{ top: '20%', left: '10%' }}
        />

        <div
          className="absolute w-[30rem] h-[30rem] bg-fuchsia-500 rounded-full blur-3xl opacity-25 pointer-events-none animate-glow2"
          data-scroll
          data-scroll-speed="-2"
        />
        <h1 className="text-4xl text-cyan-400 mb-16 text-center drop-shadow-[0_0_10px_cyan]">
          Histoire de la Fête des Lumières
        </h1>
        <div className="timeline relative flex flex-col gap-32 border-l-4 border-purple-500/30 sm:border-l-0 sm:border-r-0 sm:before:absolute sm:before:left-1/2 sm:before:top-0 sm:before:bottom-0 sm:before:w-1 sm:before:bg-purple-500/40 pl-6 sm:pl-0 sm:before:translate-x-[-0.5px]">
          {timeline.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`timeline-item relative opacity-0 translate-y-12 transition-all duration-1000 ease-out
                flex flex-col sm:flex-row ${isLeft ? 'sm:flex-row-reverse' : ''}
                items-start sm:items-center sm:justify-between`}
                data-scroll
                data-scroll-speed={isLeft ? '1' : '2'}
                data-scroll-class="is-reveal"
              >
                <div
                  className={`absolute top-2 w-6 h-6 bg-fuchsia-500 rounded-full shadow-[0_0_15px_#a855f7] ${isLeft ? '-right-3' : '-left-3'}`}
                />

                <div
                  className={`sm:w-[45%] ${isLeft ? 'text-right sm:pr-6' : 'text-left sm:pl-6'}`}
                >
                  <h2 className="text-3xl font-extrabold text-cyan-300 drop-shadow-[0_0_10px_cyan] mb-2 ml-[5%] mr-[5%]">
                    {item.year}
                  </h2>
                  <p className="text-2xl text-purple-100 leading-relaxed font-nowaltlight">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section data-scroll-section className="py-32 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold text-yellow-700">
          Lyon, Ville Lumière
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-gray-600 leading-relaxed text-lg">
          Depuis le XIXe siècle, Lyon brille par son innovation et sa culture.
          La Fête des Lumières est l’un de ses joyaux les plus emblématiques,
          alliant histoire, art et lumière.
        </p>
      </section>

      <Footer />
    </div>
  );
}
