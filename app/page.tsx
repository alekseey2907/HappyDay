'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navigation from './Navigation';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import GalleryPage from './GalleryPage';
import WishesPage from './WishesPage';
import SurprisePage from './SurprisePage';

interface Confetti {
  id: number;
  left: string;
  delay: string;
  duration: string;
  color: string;
}

export default function Home() {
  const [confetti, setConfetti] = useState<Confetti[]>([]);
  const [showContent, setShowContent] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showFireworks, setShowFireworks] = useState(false);
  const [fireworks, setFireworks] = useState<Confetti[]>([]);
  const [currentPage, setCurrentPage] = useState('home');

  const photos = [
    '/photo/photo_2025-08-06_21-57-45.jpg',
    '/photo/photo_2025-08-13_16-28-29.jpg',
    '/photo/photo_2025-08-24_12-27-36.jpg',
    '/photo/photo_2025-10-25_18-59-37.jpg',
    '/photo/photo_2025-10-11_17-28-43.jpg',
    '/photo/photo_2025-10-21_09-46-46.jpg',
    '/photo/photo_2025-03-12_11-05-40.jpg',
    '/photo/photo_2025-07-16_19-26-20.jpg',
    '/photo/photo_2025-10-22_22-48-58.jpg',
    '/photo/VuAJAzQejfMx7j5vAL0NuFqq9VcppgKwTHM43o9WX4L2VzQfERfy0kG37DZOK1NuZlfNRXt4Zsqz6Fm00PJB36k6.jpg',
  ];

  useEffect(() => {
    // Создаем конфетти
    const newConfetti: Confetti[] = [];
    const colors = ['#fce7f3', '#fbcfe8', '#f9a8d4', '#f472b6', '#ec4899'];
    
    for (let i = 0; i < 50; i++) {
      newConfetti.push({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        duration: `${5 + Math.random() * 5}s`,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    
    setConfetti(newConfetti);
    
    // Показываем контент после небольшой задержки
    setTimeout(() => setShowContent(true), 500);
  }, []);

  const calculateAge = () => {
    const birthDate = new Date('2001-10-26');
    const today = new Date();
    return today.getFullYear() - birthDate.getFullYear();
  };

  const triggerFireworks = () => {
    setShowFireworks(true);
    
    // Создаем салют
    const newFireworks: Confetti[] = [];
    const colors = ['#fce7f3', '#fbcfe8', '#f9a8d4', '#f472b6', '#ec4899', '#FFD700', '#FF69B4', '#FFA500'];
    
    for (let i = 0; i < 150; i++) {
      newFireworks.push({
        id: i,
        left: `${20 + Math.random() * 60}%`,
        delay: `${Math.random() * 0.8}s`,
        duration: `${1.5 + Math.random() * 2}s`,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    
    setFireworks(newFireworks);
    
    // Убираем салют через 4 секунды
    setTimeout(() => {
      setShowFireworks(false);
      setFireworks([]);
    }, 4500);
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      
      {/* Конфетти фон */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {confetti.map((item) => (
          <div
            key={item.id}
            className="confetti absolute w-2 h-2 rounded-full"
            style={{
              left: item.left,
              backgroundColor: item.color,
              animationDelay: item.delay,
              animationDuration: item.duration,
            }}
          />
        ))}
      </div>

      {/* Декоративные элементы */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-30 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-300 rounded-full opacity-30 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-pink-100 rounded-full opacity-20 blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-20 w-28 h-28 bg-pink-400 rounded-full opacity-20 blur-3xl animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-20 w-32 h-32 bg-pink-200 rounded-full opacity-25 blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Плавающие сердечки */}
        <div className="absolute top-10 right-1/4 text-pink-300 text-4xl opacity-30 animate-float">💕</div>
        <div className="absolute top-1/4 left-1/4 text-pink-400 text-3xl opacity-25 animate-float" style={{ animationDelay: '1s' }}>💖</div>
        <div className="absolute bottom-1/4 right-1/3 text-pink-300 text-5xl opacity-20 animate-float" style={{ animationDelay: '2s' }}>💝</div>
        <div className="absolute top-2/3 left-1/3 text-pink-200 text-4xl opacity-30 animate-float" style={{ animationDelay: '0.5s' }}>🌸</div>
        <div className="absolute bottom-20 left-1/4 text-pink-400 text-3xl opacity-25 animate-float" style={{ animationDelay: '1.5s' }}>✨</div>
      </div>

      {/* Основной контент */}
      <div className={`relative z-20 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {currentPage === 'home' && <HomePage calculateAge={calculateAge} />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'gallery' && <GalleryPage photos={photos} onImageClick={setSelectedImage} />}
        {currentPage === 'wishes' && <WishesPage />}
        {currentPage === 'surprise' && <SurprisePage triggerFireworks={triggerFireworks} />}

        {/* Футер */}
        <div className="text-center py-12 px-4">
          <p className="text-pink-500 text-lg">
            С любовью, 26 октября 2025 года 💕
          </p>
        </div>
      </div>

      {/* Салют */}
      {showFireworks && (
        <div className="fixed inset-0 pointer-events-none z-40">
          {fireworks.map((item, index) => {
            const angle = (index / fireworks.length) * 360;
            const distance = 200 + Math.random() * 300;
            return (
              <div
                key={item.id}
                className="absolute w-4 h-4 rounded-full"
                style={{
                  left: item.left,
                  top: '60%',
                  backgroundColor: item.color,
                  boxShadow: `0 0 10px ${item.color}`,
                  animation: `firework ${item.duration} ${item.delay} ease-out forwards`,
                  '--x': `${Math.cos(angle * Math.PI / 180) * distance}px`,
                  '--y': `${Math.sin(angle * Math.PI / 180) * distance}px`,
                } as React.CSSProperties}
              />
            );
          })}
        </div>
      )}

      {/* Модальное окно для просмотра фото */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-pink-300 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="relative w-full h-full">
              <Image
                src={photos[selectedImage]}
                alt={`Фото ${selectedImage + 1}`}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
