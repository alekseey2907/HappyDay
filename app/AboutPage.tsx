export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-pink-600" style={{ fontFamily: 'var(--font-pacifico), cursive' }}>
        Всё о тебе, милашка 💖
      </h2>
      <p className="text-center text-pink-700 text-lg mb-12 max-w-2xl mx-auto">
        Ты удивительная, и вот что делает тебя такой особенной
      </p>

      {/* Секция с качествами */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-center mb-8 text-pink-600" style={{ fontFamily: 'var(--font-pacifico), cursive' }}>
          Твои качества ✨
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-lg">
            <div className="text-5xl mb-3">😊</div>
            <h4 className="text-lg font-bold text-pink-700">Милая</h4>
            <p className="text-sm text-pink-600 mt-2">Самая нежная и добрая</p>
          </div>
          <div className="bg-gradient-to-br from-pink-200 to-pink-300 rounded-3xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-lg">
            <div className="text-5xl mb-3">✨</div>
            <h4 className="text-lg font-bold text-pink-700">Красивая</h4>
            <p className="text-sm text-pink-600 mt-2">Красота внешняя и внутренняя</p>
          </div>
          <div className="bg-gradient-to-br from-pink-100 to-pink-300 rounded-3xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-lg">
            <div className="text-5xl mb-3">💆‍♀️</div>
            <h4 className="text-lg font-bold text-pink-700">Волшебные ручки</h4>
            <p className="text-sm text-pink-600 mt-2">Делаешь массаж просто безупречно</p>
          </div>
          <div className="bg-gradient-to-br from-pink-200 to-pink-400 rounded-3xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-lg">
            <div className="text-5xl mb-3">💖</div>
            <h4 className="text-lg font-bold text-pink-700">Любимая</h4>
            <p className="text-sm text-pink-600 mt-2">Моя единственная и неповторимая</p>
          </div>
          <div className="bg-gradient-to-br from-pink-300 to-pink-200 rounded-3xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-lg">
            <div className="text-5xl mb-3">🌟</div>
            <h4 className="text-lg font-bold text-pink-700">Умная</h4>
            <p className="text-sm text-pink-600 mt-2">Всегда знаешь, что сказать</p>
          </div>
          <div className="bg-gradient-to-br from-pink-100 to-pink-400 rounded-3xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-lg">
            <div className="text-5xl mb-3">🎭</div>
            <h4 className="text-lg font-bold text-pink-700">Веселая</h4>
            <p className="text-sm text-pink-600 mt-2">С тобой никогда не скучно</p>
          </div>
          <div className="bg-gradient-to-br from-pink-200 to-pink-300 rounded-3xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-lg">
            <div className="text-5xl mb-3">💫</div>
            <h4 className="text-lg font-bold text-pink-700">Заботливая</h4>
            <p className="text-sm text-pink-600 mt-2">Всегда поддержишь и поможешь</p>
          </div>
          <div className="bg-gradient-to-br from-pink-300 to-pink-400 rounded-3xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-lg">
            <div className="text-5xl mb-3">🌺</div>
            <h4 className="text-lg font-bold text-pink-700">Уникальная</h4>
            <p className="text-sm text-pink-600 mt-2">Такая одна на миллион</p>
          </div>
        </div>
      </div>

      {/* Секция "Почему я тебя люблю" */}
      <div>
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-10 text-pink-600" style={{ fontFamily: 'var(--font-pacifico), cursive' }}>
          Почему я тебя люблю 💕
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-6 shadow-xl border-l-4 border-pink-400 transform hover:scale-105 transition-all">
            <div className="flex items-start gap-4">
              <span className="text-4xl">💝</span>
              <div>
                <h4 className="text-xl font-bold text-pink-700 mb-2">Твоя улыбка</h4>

              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-6 shadow-xl border-l-4 border-pink-400 transform hover:scale-105 transition-all">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🌟</span>
              <div>
                <h4 className="text-xl font-bold text-pink-700 mb-2">Твоя доброта</h4>
               
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-6 shadow-xl border-l-4 border-pink-400 transform hover:scale-105 transition-all">
            <div className="flex items-start gap-4">
              <span className="text-4xl">✨</span>
              <div>
                <h4 className="text-xl font-bold text-pink-700 mb-2">Твой смех</h4>

              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-6 shadow-xl border-l-4 border-pink-400 transform hover:scale-105 transition-all">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🎨</span>
              <div>
                <h4 className="text-xl font-bold text-pink-700 mb-2">Твоя уникальность</h4>
  
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-6 shadow-xl border-l-4 border-pink-400 transform hover:scale-105 transition-all">
            <div className="flex items-start gap-4">
              <span className="text-4xl">💫</span>
              <div>
                <h4 className="text-xl font-bold text-pink-700 mb-2">Твои глаза</h4>

              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-white to-pink-50 rounded-2xl p-6 shadow-xl border-l-4 border-pink-400 transform hover:scale-105 transition-all">
            <div className="flex items-start gap-4">
              <span className="text-4xl">🌹</span>
              <div>
                <h4 className="text-xl font-bold text-pink-700 mb-2">То, как ты заботишься</h4>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
