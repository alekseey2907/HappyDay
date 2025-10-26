export default function HomePage({ calculateAge }: { calculateAge: () => number }) {
  return (
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
      <p className="text-xl md:text-2xl text-pink-700 max-w-3xl mx-auto leading-relaxed px-4 mb-8">
        Самое любимое моё солнышко! Любимая моя Лерочка!
        Сегодня твой особенный день! 💕<br />
        Ты делаешь мою жизнь ярче и счастливее каждый день, огромное спасибо тебе за это<br />
        Желаю тебе всего самого лучшего, исполнения каждой мечты<br />
        и бесконечного счастья! 🌸✨
      </p>

      {/* Быстрая навигация */}
      <div className="mt-12 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer">
          <div className="text-5xl mb-2">💖</div>
          <p className="text-pink-700 font-semibold">Узнай больше</p>
          <p className="text-xs text-pink-600 mt-1">О тебе →</p>
        </div>
        <div className="bg-gradient-to-br from-pink-200 to-pink-300 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer">
          <div className="text-5xl mb-2">📸</div>
          <p className="text-pink-700 font-semibold">Наши фото</p>
          <p className="text-xs text-pink-600 mt-1">Галерея →</p>
        </div>
        <div className="bg-gradient-to-br from-pink-100 to-pink-300 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer">
          <div className="text-5xl mb-2">✨</div>
          <p className="text-pink-700 font-semibold">Пожелания</p>
          <p className="text-xs text-pink-600 mt-1">Для тебя →</p>
        </div>
        <div className="bg-gradient-to-br from-pink-200 to-pink-400 rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer">
          <div className="text-5xl mb-2">🎁</div>
          <p className="text-pink-700 font-semibold">Сюрприз</p>
          <p className="text-xs text-pink-600 mt-1">Открыть →</p>
        </div>
      </div>

      {/* Романтическая цитата */}
      <div className="max-w-4xl mx-auto px-4 py-12 mt-8">
        <div className="relative bg-gradient-to-r from-pink-100 via-pink-50 to-pink-100 rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="absolute -top-4 -left-4 text-6xl text-pink-300 opacity-50">"</div>
          <div className="absolute -bottom-4 -right-4 text-6xl text-pink-300 opacity-50">"</div>
          <p className="text-xl md:text-2xl text-center text-pink-800 italic font-medium leading-relaxed">
            С тобой каждый день как праздник, даже песни PHARAOH`a не такие классные`, 
          </p>
        </div>
      </div>
    </div>
  );
}
