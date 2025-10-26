export default function WishesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-pink-600" style={{ fontFamily: 'var(--font-pacifico), cursive' }}>
        Мои Пожелания Тебе 💝
      </h2>
      <p className="text-center text-pink-700 text-lg mb-12 max-w-2xl mx-auto">
        В твой особенный день желаю тебе всего самого лучшего
      </p>

      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-pink-200 mb-8">
        <div className="space-y-6 text-lg md:text-xl text-gray-700">
          <p className="flex items-start gap-4 p-4 bg-pink-50 rounded-xl transform hover:scale-105 transition-all">
            <span className="text-4xl">🌟</span>
            <span>Пусть каждый день приносит радость и новые открытия</span>
          </p>
          <p className="flex items-start gap-4 p-4 bg-pink-50 rounded-xl transform hover:scale-105 transition-all">
            <span className="text-4xl">💖</span>
            <span>Будь всегда такой же красивой, нежной и классной</span>
          </p>
          <p className="flex items-start gap-4 p-4 bg-pink-50 rounded-xl transform hover:scale-105 transition-all">
            <span className="text-4xl">✨</span>
            <span>Пусть Лёшка никогда не портит настроение</span>
          </p>
          <p className="flex items-start gap-4 p-4 bg-pink-50 rounded-xl transform hover:scale-105 transition-all">
            <span className="text-4xl">🎈</span>
            <span>Оставайся всегда такой яркой и позитивной</span>
          </p>
          <p className="flex items-start gap-4 p-4 bg-pink-50 rounded-xl transform hover:scale-105 transition-all">
            <span className="text-4xl">🌸</span>
            <span>Пусть жизнь дарит только приятные сюрпризы</span>
          </p>
          <p className="flex items-start gap-4 p-4 bg-pink-50 rounded-xl transform hover:scale-105 transition-all">
            <span className="text-4xl">🎯</span>
            <span>Пусть все твои мечты сбываются одна за другой</span>
          </p>
          <p className="flex items-start gap-4 p-4 bg-pink-50 rounded-xl transform hover:scale-105 transition-all">
            <span className="text-4xl">💫</span>
            <span>Желаю крепкого здоровья и океана позитива</span>
          </p>
          <p className="flex items-start gap-4 p-4 bg-pink-50 rounded-xl transform hover:scale-105 transition-all">
            <span className="text-4xl">🌈</span>
            <span>Пусть твоя жизнь будет яркой, как радуга после дождя</span>
          </p>
        </div>
        <div className="mt-10 text-center">
          <p className="text-3xl md:text-4xl font-semibold text-pink-600 mb-4">
            Я люблю тебя! ❤️
          </p>
          </div>
      </div>

      {/* Дополнительная секция */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl p-6 text-center shadow-lg">
          <div className="text-5xl mb-3">🎂</div>
          <h3 className="text-xl font-bold text-pink-700 mb-2">Здоровья</h3>
          <p className="text-pink-600">Крепкого и на долгие годы</p>
        </div>
        <div className="bg-gradient-to-br from-pink-200 to-pink-300 rounded-2xl p-6 text-center shadow-lg">
          <div className="text-5xl mb-3">💰</div>
          <h3 className="text-xl font-bold text-pink-700 mb-2">Успеха</h3>
          <p className="text-pink-600">Во всех начинаниях</p>
        </div>
        <div className="bg-gradient-to-br from-pink-300 to-pink-400 rounded-2xl p-6 text-center shadow-lg">
          <div className="text-5xl mb-3">😊</div>
          <h3 className="text-xl font-bold text-pink-700 mb-2">Счастья</h3>
          <p className="text-pink-600">Бесконечного и настоящего</p>
        </div>
      </div>
    </div>
  );
}
