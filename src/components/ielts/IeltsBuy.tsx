import React from "react";

const IeltsBuy = () => {
  return (
    <section
      className="py-24 bg-surface-light dark:bg-surface-dark relative"
      id="pricing"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-50 dark:from-purple-900/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Sizin İçin En Uygun <span className="text-primary">Planı Seçin</span>
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark text-lg">
            Öğrenme stilinize ve hedeflerinize uygun eğitim modelini belirleyin.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card-light dark:bg-card-dark rounded-[2rem] p-8 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl transition duration-300 flex flex-col relative">
          <div className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-4 py-2 rounded-bl-2xl rounded-tr-2xl">
              Başlangıç: 26 Ocak 2026
            </div>
            <div className="mb-6">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Popüler
              </span>
              <h3 className="text-2xl font-bold mt-4">Grup Dersi</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark mt-2">
                Dinamik sınıf ortamında interaktif öğrenme.
              </p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold text-text-main-light dark:text-text-main-dark">
                ₺4.500
              </span>
              <span className="text-text-muted-light dark:text-text-muted-dark">
                /kur
              </span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3">
                <span className="material-icons-outlined text-green-500">
                  check
                </span>
                <span className="text-text-muted-light dark:text-text-muted-dark">
                  Max 6 kişilik sınıflar
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons-outlined text-green-500">
                  check
                </span>
                <span className="text-text-muted-light dark:text-text-muted-dark">
                  40 Saat Canlı Ders
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons-outlined text-green-500">
                  check
                </span>
                <span className="text-text-muted-light dark:text-text-muted-dark">
                  Haftalık Speaking Club
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons-outlined text-green-500">
                  check
                </span>
                <span className="text-text-muted-light dark:text-text-muted-dark">
                  Ders Kayıtlarına Erişim
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons-outlined text-green-500">
                  check
                </span>
                <span className="text-text-muted-light dark:text-text-muted-dark">
                  5 Adet Essay Kontrolü
                </span>
              </li>
            </ul>
            <button className="w-full py-4 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition duration-300">
              Kaydol
            </button>
          </div>
          <div className="bg-primary text-white rounded-[2rem] p-8 shadow-xl hover:shadow-2xl transition duration-300 flex flex-col relative transform md:-translate-y-4">
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold mt-4">Özel Ders (1:1)</h3>
              <p className="text-purple-100 mt-2">
                Tamamen size ve hedeflerinize özel program.
              </p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold">₺8.000</span>
              <span className="text-purple-200">/paket</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3">
                <span className="material-icons-outlined text-white">check</span>
                <span className="text-purple-50">Birebir İlgi ve Takip</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons-outlined text-white">check</span>
                <span className="text-purple-50">20 Saat Özel Ders</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons-outlined text-white">check</span>
                <span className="text-purple-50">Esnek Ders Saatleri</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons-outlined text-white">check</span>
                <span className="text-purple-50">Sınırsız Writing Kontrolü</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons-outlined text-white">check</span>
                <span className="text-purple-50">Kişiye Özel Strateji Planı</span>
              </li>
            </ul>
            <button className="w-full py-4 rounded-xl bg-white text-primary font-bold hover:bg-gray-100 transition duration-300">
              Hemen Başla
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IeltsBuy;
