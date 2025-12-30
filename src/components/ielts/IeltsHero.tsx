import React from "react";

const IeltsHero = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      <div className="absolute top-32 left-10 w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center animate-bounce duration-[3000ms]">
        <span className="material-icons-outlined text-primary text-2xl">mic</span>
      </div>
      <div className="absolute top-40 right-20 w-14 h-14 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center animate-bounce duration-[4000ms]">
        <span className="material-icons-outlined text-pink-500 text-2xl">edit</span>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          Master IELTS with <br />
          <span className="text-primary">Proven Strategies</span>
        </h1>
        <p className="text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark max-w-2xl mx-auto mb-10 leading-relaxed">
          Hedeflediğiniz skora ulaşmak için ihtiyacınız olan her şey burada.
          Kapsamlı modüller, sınav taktikleri ve size özel geri bildirimlerle
          IELTS yolculuğunuzu başarıyla tamamlayın.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-semibold transition shadow-xl shadow-primary/30 flex items-center gap-2"
            href="#pricing"
          >
            Kurs Seçenekleri
            <span className="material-icons-outlined text-sm">arrow_forward</span>
          </a>
          <a
            className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-text-main-light dark:text-text-main-dark hover:border-primary px-8 py-4 rounded-full font-semibold transition flex items-center gap-2"
            href="#modules"
          >
            Program Detayları
          </a>
        </div>
      </div>
    </section>
  );
};

export default IeltsHero;
