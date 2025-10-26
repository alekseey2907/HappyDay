'use client';

import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    { id: 'home', name: 'Главная', icon: '🏠' },
    { id: 'about', name: 'О тебе', icon: '💖' },
    { id: 'gallery', name: 'Галерея', icon: '📸' },
    { id: 'wishes', name: 'Пожелания', icon: '✨' },
    { id: 'surprise', name: 'Сюрприз', icon: '🎁' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg border-b-4 border-pink-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl">💝</span>
              <h1 className="text-xl font-bold text-pink-600" style={{ fontFamily: 'var(--font-pacifico), cursive' }}>
                Для Валерии
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-2">
              {pages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => onPageChange(page.id)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                    currentPage === page.id
                      ? 'bg-gradient-to-r from-pink-400 to-pink-600 text-white shadow-lg scale-105'
                      : 'text-pink-600 hover:bg-pink-100'
                  }`}
                >
                  <span>{page.icon}</span>
                  <span className="font-medium">{page.name}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-pink-600 text-3xl"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-pink-200">
            <div className="px-4 py-2 space-y-2">
              {pages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => {
                    onPageChange(page.id);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                    currentPage === page.id
                      ? 'bg-gradient-to-r from-pink-400 to-pink-600 text-white shadow-lg'
                      : 'text-pink-600 hover:bg-pink-100'
                  }`}
                >
                  <span className="text-xl">{page.icon}</span>
                  <span className="font-medium">{page.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-16"></div>
    </>
  );
}
