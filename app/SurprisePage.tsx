interface SurprisePageProps {
  triggerFireworks: () => void;
}

export default function SurprisePage({ triggerFireworks }: SurprisePageProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-pink-600" style={{ fontFamily: 'var(--font-pacifico), cursive' }}>
        Особенный Сюрприз 🎁
      </h2>
      <p className="text-center text-pink-700 text-lg mb-12 max-w-2xl mx-auto">
        Я приготовил для тебя кое-что особенное...
      </p>

      <div className="bg-gradient-to-br from-pink-50 to-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-pink-200 mb-8">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">💝</div>
          <h3 className="text-2xl md:text-3xl font-bold text-pink-700 mb-4">
            Для самой любимой девушки на свете
          </h3>
          
        </div>

        {/* Кнопка с салютом */}
        <div className="text-center py-8">
          <button
            onClick={triggerFireworks}
            className="group relative px-8 py-4 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 text-white text-xl md:text-2xl font-bold rounded-full shadow-2xl hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300 animate-pulse-slow"
            style={{ fontFamily: 'var(--font-pacifico), cursive' }}
          >
            <span className="relative z-10">💝 Я тебя очень люблю 💝</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <p className="text-pink-600 mt-4 text-sm">Нажми на кнопку! ✨</p>
        </div>
      </div>

     

      {/* Финальная цитата */}
      <div className="mt-12 relative bg-gradient-to-r from-pink-100 via-pink-50 to-pink-100 rounded-3xl p-8 md:p-12 shadow-xl">
        <div className="absolute -top-4 -left-4 text-6xl text-pink-300 opacity-50">"</div>
        <div className="absolute -bottom-4 -right-4 text-6xl text-pink-300 opacity-50">"</div>
        <p className="text-xl md:text-2xl text-center text-pink-800 italic font-medium leading-relaxed">
          С тобой каждый день - счастье. 
          Спасибо, что ты есть в моей жизни. 
          С Днём Рождения, Валерия Романовна ! 🎉💖
        </p>
      </div>
    </div>
  );
}
