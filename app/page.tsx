'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

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

  const photos = [
    '/photo/photo_2025-08-06_21-57-45.jpg',
    '/photo/photo_2025-08-13_16-28-29.jpg',
    '/photo/photo_2025-08-24_12-27-36.jpg',
    '/photo/photo_2025-10-25_18-59-37.jpg',
    '/photo/photo_2025-10-11_17-28-43.jpg',
    '/photo/photo_2025-10-21_09-46-46.jpg',
    
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
      </div>

      {/* Основной контент */}
      <div className={`relative z-20 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Заголовок */}
        <div className="text-center pt-12 pb-8 px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent animate-float" style={{ fontFamily: 'var(--font-pacifico), cursive' }}>
            С Днём Рождения!
          </h1>
          <h2 className="text-4xl md:text-6xl font-semibold mb-6 text-pink-600" style={{ fontFamily: 'var(--font-pacifico), cursive' }}>
            Валерия
          </h2>
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="text-7xl">🎂</div>
            <div className="text-5xl md:text-7xl font-bold text-pink-500">
              {calculateAge()}
            </div>
            <div className="text-7xl">🎉</div>
          </div>
          <p className="text-xl md:text-2xl text-pink-700 max-w-3xl mx-auto leading-relaxed px-4">
            Самое любимое моё солнышко! Любимая моя Лерочка!
            Сегодня твой особенный день! 💕<br />
            Ты делаешь мою жизнь ярче и счастливее каждый день, огромное спасибо тебе за это<br />
            Желаю тебе всего самого лучшего, исполнения каждой мечты<br />
            и бесконечного счастья! 🌸✨
          </p>
        </div>

        {/* Галерея фотографий */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 text-pink-600" style={{ fontFamily: 'var(--font-pacifico), cursive' }}>
            Немного безумно красивых фотографий 📸
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => setSelectedImage(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <Image
                  src={photo}
                  alt={`Фото ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Пожелания */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-pink-200">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-6 text-pink-600" style={{ fontFamily: 'var(--font-pacifico), cursive' }}>
              Мои Пожелания Тебе 💝
            </h3>
            <div className="space-y-4 text-lg md:text-xl text-gray-700">
              <p className="flex items-start gap-3">
                <span className="text-3xl">🌟</span>
                <span>Пусть каждый день приносит радость и новые открытия</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-3xl">💖</span>
                <span>Будь всегда такой же красивой, нежной и классной</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-3xl">✨</span>
                <span>Пусть Лёшка никогда не портит настроение</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-3xl">🎈</span>
                <span>Оставайся всегда такой яркой и позитивной</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-3xl">🌸</span>
                <span>Пусть жизнь дарит только приятные сюрпризы</span>
              </p>
            </div>
            <div className="mt-8 text-center">
              <p className="text-2xl md:text-3xl font-semibold text-pink-600">
                Я люблю тебя! ❤️
              </p>
            </div>
          </div>
        </div>

        {/* Кнопка с салютом */}
        <div className="text-center py-8 px-4">
          <button
            onClick={triggerFireworks}
            className="group relative px-8 py-4 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white text-xl md:text-2xl font-bold rounded-full shadow-2xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300 animate-pulse-slow"
            style={{ fontFamily: 'var(--font-pacifico), cursive' }}
          >
            <span className="relative z-10">💝 Я тебя очень люблю 💝</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

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
