import React from "react";

const HowToWork = () => {
  return (
    <section className="py-20 bg-surface-light dark:bg-surface-dark" id="details">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nasıl Çalışır?</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Speaking Club sürecimiz, sizi konuşmaya teşvik etmek ve
            hatalarınızdan öğrenmenizi sağlamak üzerine kurgulanmıştır.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-background-dark p-8 rounded-2xl shadow-soft hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-accent-orange dark:bg-orange-900/30 rounded-2xl flex items-center justify-center mb-6 text-orange-500 text-2xl font-bold">
              <span className="material-icons-round">assignment</span>
            </div>
            <h3 className="text-xl font-bold mb-3">1. Seviye Belirleme</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Katılım öncesi kısa bir görüşme ile seviyenizi belirliyor ve size
              en uygun, benzer seviyedeki katılımcıların olduğu gruba
              yerleştiriyoruz.
            </p>
          </div>
          <div className="bg-white dark:bg-background-dark p-8 rounded-2xl shadow-soft hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-accent-light dark:bg-primary/20 rounded-2xl flex items-center justify-center mb-6 text-primary text-2xl font-bold">
              <span className="material-icons-round">groups</span>
            </div>
            <h3 className="text-xl font-bold mb-3">2. Haftalık Oturumlar</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Her hafta belirlenen gün ve saatte Zoom üzerinden buluşuyoruz.
              Önceden gönderilen materyaller ve konu başlıkları üzerinden
              tartışıyoruz.
            </p>
          </div>
          <div className="bg-white dark:bg-background-dark p-8 rounded-2xl shadow-soft hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 bg-accent-green dark:bg-green-900/30 rounded-2xl flex items-center justify-center mb-6 text-green-600 text-2xl font-bold">
              <span className="material-icons-round">tips_and_updates</span>
            </div>
            <h3 className="text-xl font-bold mb-3">3. Geri Bildirim</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Oturum sonunda eğitmen, yapılan hataları düzeltir, kelime
              önerilerinde bulunur ve telaffuz çalışmaları yaptırır.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToWork;
