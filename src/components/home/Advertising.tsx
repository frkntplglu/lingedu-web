import React from "react";

const Advertising = () => {
  return (
    <section
      className="py-24 bg-white dark:bg-background-dark overflow-hidden"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-200 dark:bg-purple-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-pink-200 dark:bg-pink-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
              <img
                alt="Instructor Portrait"
                className="w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCI6WYA8R-1c1LVy_Zs0nKtxwgzTpcZZEN_ciy88naT95j2gsFDZGBLV2MkFsDUKAI6_4Yhu48X_yQ4Ltf-YOR10cYIlUAX3-3jjYXwkK6jDVPRa6NAdfCzgEQ-Kc19W2w9tNKtQX-rGCsV4vmk4ItoDkrga6LgAlcD17R8Dm8XiUCtdMwoB1TaOWioUeqbqtMjrzaUSmQkhPloZyw-fm64FiVHxIKB4IE9RSpyKDiqO5STQRqGy7tJpD6AFjsh8Ka6stXjWAas8I"
              />
              <div className="absolute bottom-6 left-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur p-4 rounded-xl shadow-lg max-w-xs">
                <p className="text-2xl font-bold text-primary">98%</p>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Öğrenci Başarı Oranı
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              Bilgiyi Paylaşarak <br />{" "}
              <span className="text-primary">Geleceği Şekillendiriyoruz</span>
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
              Merhaba, ben Zeynep. 10 yıllık eğitim tecrübemle, öğrencilerin dil
              bariyerlerini aşmalarına ve global hedeflerine ulaşmalarına
              yardımcı oluyorum.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                  1000+
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Mezun Öğrenci
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                  10+
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Yıllık Tecrübe
                </p>
              </div>
            </div>
            <a
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-full font-semibold transition shadow-lg shadow-primary/30"
              href="#contact"
            >
              Daha Fazla Bilgi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertising;
