import React from "react";

const AboutHero = () => {
  return (
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-fade-in">
            <span className="inline-block py-1 px-3 rounded-full bg-purple-50 dark:bg-purple-900/30 text-primary text-xs font-bold tracking-wide uppercase mb-6">
              Profesyonel IELTS Eğitmeni
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-gray-900 dark:text-white leading-tight">
              Hedeflerinize Giden Yolda <br />
              <span className="text-primary">Güvenilir Rehberiniz</span>
            </h1>
            <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-8 leading-relaxed">
              Boğaziçi mezunu, eski IELTS Examiner ve 10+ yıllık deneyime sahip
              bir eğitmen olarak, dil bariyerini aşmanız için stratejik ve sonuç
              odaklı bir yaklaşım sunuyorum.
            </p>
            <div className="grid grid-cols-3 gap-8 border-t border-gray-100 dark:border-gray-800 pt-8">
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  10+
                </p>
                <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                  Yıl Deneyim
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  2k+
                </p>
                <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                  Mezun
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  98%
                </p>
                <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                  Memnuniyet
                </p>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 dark:bg-gray-800">
              <img
                alt="Selin Yılmaz"
                className="w-full h-full object-cover"
                src="/agc.jpeg"
              />
            </div>
            <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-primary/20 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
