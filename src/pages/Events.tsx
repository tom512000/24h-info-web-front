import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

interface EventItem {
  id: number;
  title: string;
  location: string;
  dates: string;
  hours: string;
  description: string;
  image: string;
}

export default function Events() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: containerRef.current!,
      smooth: true,
      multiplier: 0.8,
    });
    return () => scroll.destroy();
  }, []);

  const events: EventItem[] = [
    {
      id: 1,
      title: 'Nouvelle Vague',
      location: 'Gare Saint-Paul',
      dates: '7 au 10 décembre',
      hours: "19h à 23h (dimanche jusqu'à 22h)",
      description:
        'Un embarquement poétique à la gare Saint-Paul avec 4 artistes du vidéo-mapping.',
      image: '/images/event1.jpg',
    },
    {
      id: 2,
      title: 'Evanescent',
      location: 'Place Bellecour',
      dates: '7 au 10 décembre',
      hours: "19h à 23h (dimanche jusqu'à 22h)",
      description:
        'Des bulles géantes colorées pour une pause contemplative et immersive.',
      image: '/images/event2.jpg',
    },
    {
      id: 3,
      title: 'Ceux du fleuve',
      location: 'Colline de Fourvière',
      dates: '7 au 10 décembre',
      hours: "19h à 23h (dimanche jusqu'à 22h)",
      description:
        'Une immersion onirique dans les rêves des habitants endormis.',
      image: '/images/event3.jpg',
    },
    {
      id: 4,
      title: 'Aj Vana Be',
      location: 'Place de la Bourse',
      dates: '7 au 10 décembre',
      hours: "19h à 23h (dimanche jusqu'à 22h)",
      description:
        'Un totem de 32 baignoires illuminées interrogeant l’eau et le recyclage.',
      image: '/images/event4.jpg',
    },
    {
      id: 5,
      title: 'Slow Light',
      location: 'Place Rambaud',
      dates: '7 au 10 décembre',
      hours: "19h à 23h (dimanche jusqu'à 22h)",
      description:
        'Une installation étudiante sans électricité pour contempler les étoiles.',
      image: '/images/event5.jpg',
    },
    {
      id: 6,
      title: 'All the trees',
      location: "Parc de la Tête d'Or",
      dates: '7 au 10 décembre',
      hours: "19h à 23h (dimanche jusqu'à 22h, fermeture du parc 30min avant)",
      description:
        'Un hommage visuel aux arbres via laser et engagement écologique.',
      image: '/images/event6.jpg',
    },
  ];

  return (
    <div
      data-scroll-container
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-black via-[#0a0a2a] to-black text-white overflow-hidden"
    >
      <section
        data-scroll-section
        className="py-32 px-6 max-w-4xl mx-auto space-y-16"
      >
        <h1 className="text-4xl text-yellow-400 text-center mb-12 drop-shadow-[0_0_10px_yellow]">
          Nos prochains événements
        </h1>

        {events.map((ev) => (
          <div
            key={ev.id}
            className={`
                group relative rounded-2xl overflow-hidden shadow-lg
                mb-12
                opacity-0 translate-y-8
                transition-all duration-700 ease-out
                ${ev.id === 6 ? '' : ''}
              `}
            data-scroll
            data-scroll-speed="1"
            data-scroll-class="is-reveal"
          >
            <img
              src={ev.image}
              alt={ev.title}
              className="w-full h-64 object-cover transition-all duration-500 group-hover:blur-sm"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-50">
              <h2 className="text-2xl font-bold mb-1">{ev.title}</h2>
              <p className="italic mb-2">
                {ev.location} • {ev.dates} • {ev.hours}
              </p>
              <p className="text-lg">{ev.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
