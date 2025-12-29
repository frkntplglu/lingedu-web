import React from "react";

const IeltsContent = () => {
  return (
    <section className="py-24 bg-surface-light dark:bg-surface-dark" id="modules">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Ders <span className="text-primary">İçeriği &amp; Modüller</span>
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark text-lg max-w-2xl">
            IELTS Academic ve General Training formatlarına uygun, dört temel
            beceriyi kapsayan yoğunlaştırılmış program.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-card-light dark:bg-card-dark p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 border border-gray-100 dark:border-gray-700 group">
            <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <span className="material-icons-outlined text-primary text-2xl">
                headphones
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3">Listening</h3>
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-4">
              Farklı aksanları anlama, not alma teknikleri ve çeldiricileri
              eleme stratejileri.
            </p>
            <ul className="text-sm space-y-2 text-text-muted-light dark:text-text-muted-dark">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>4 Bölüm
                Analizi
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>Soru
                Tipleri
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>Deneme
                Sınavları
              </li>
            </ul>
          </div>
          <div className="bg-card-light dark:bg-card-dark p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 border border-gray-100 dark:border-gray-700 group">
            <div className="w-14 h-14 bg-pink-100 dark:bg-pink-900/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <span className="material-icons-outlined text-pink-500 text-2xl">
                menu_book
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3">Reading</h3>
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-4">
              Hızlı okuma (skimming &amp; scanning), kelime analizi ve zaman
              yönetimi.
            </p>
            <ul className="text-sm space-y-2 text-text-muted-light dark:text-text-muted-dark">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                Akademik Metinler
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>T/F/NG
                Taktikleri
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>Kelime
                Listeleri
              </li>
            </ul>
          </div>
          <div className="bg-card-light dark:bg-card-dark p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 border border-gray-100 dark:border-gray-700 group">
            <div className="w-14 h-14 bg-teal-100 dark:bg-teal-900/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <span className="material-icons-outlined text-teal-500 text-2xl">
                edit_note
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3">Writing</h3>
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-4">
              Task 1 (Grafik Yorumlama) ve Task 2 (Essay) için şablonlar ve
              gramer yapıları.
            </p>
            <ul className="text-sm space-y-2 text-text-muted-light dark:text-text-muted-dark">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>Essay
                Planlama
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>
                Detaylı Feedback
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-teal-500 rounded-full"></span>Skor
                Kriterleri
              </li>
            </ul>
          </div>
          <div className="bg-card-light dark:bg-card-dark p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 border border-gray-100 dark:border-gray-700 group">
            <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
              <span className="material-icons-outlined text-orange-500 text-2xl">
                record_voice_over
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3">Speaking</h3>
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-4">
              Akıcılık, telaffuz ve kelime çeşitliliği üzerine birebir
              pratikler.
            </p>
            <ul className="text-sm space-y-2 text-text-muted-light dark:text-text-muted-dark">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>Mock
                Exam (Simülasyon)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>Part
                1, 2, 3 Analizi
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                Idiom Kullanımı
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IeltsContent;
