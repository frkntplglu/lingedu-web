import React from "react";

const SpeakingHero = () => {
  return (
    <header className="relative pt-20 pb-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-background-dark -z-10"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary rounded-full blur-3xl opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light dark:bg-primary/20 text-primary font-semibold text-sm mb-6">
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          Yeni Gruplar Başlıyor!
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          İngilizce Konuşma <br />
          Korkunu <span className="text-primary">Speaking Club</span> ile Yen
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Akıcı konuşmak için ihtiyacın olan tek şey pratik. Haftalık oturumlar,
          geri bildirimler ve destekleyici bir toplulukla İngilizceni bir üst
          seviyeye taşı.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2"
            href="#pricing"
          >
            Paketleri İncele
            <span className="material-icons-round">arrow_forward</span>
          </a>
          <a
            className="px-8 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-semibold rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center justify-center"
            href="#details"
          >
            Nasıl Çalışır?
          </a>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-gray-200 dark:border-gray-800 pt-10">
          <div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              500+
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Mutlu Öğrenci
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              50+
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Aktif Grup
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              1000+
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Saat Pratik
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white">
              4.9/5
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Kullanıcı Puanı
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SpeakingHero;
