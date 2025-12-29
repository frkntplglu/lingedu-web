import React from "react";

const WhyIelts = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-100 dark:bg-yellow-900 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <img
              alt="Group study"
              className="rounded-[2rem] shadow-2xl relative z-10 w-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQzAX7pjatT3BMIM9HpMLVk80kW4zas0NlcKBoBAqGxWtXU4zzi2A5wJ9yA0NEOZ0P01F-s8IzcRlFQfxI8CsMyAN3t8f73X2zAA858bN1nlVjDhT_dLJPx0u4q3S5E5R4MkGjvfw4wWbhPkjUnUbJF3aDMCKxg5Bq1GpucuhOE8T08egN51CHdqrUkHmEwTLuFybJupnW8JEFCTy4agN_McSGbWtfCr6miEvzb_rn8JXhgzvwEFn-Zg9gWPT4y2OLOxsBCrprLAI"
            />
            <div className="absolute -bottom-6 -left-6 z-20 bg-white dark:bg-card-dark p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 max-w-xs">
              <p className="text-3xl font-bold text-primary mb-1">7.5+</p>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                Öğrencilerimizin %85'inin hedeflediği ve ulaştığı ortalama skor.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">
              Skorunuzu <span className="text-primary">Maksimuma</span> Çıkarın
            </h2>
            <p className="text-text-muted-light dark:text-text-muted-dark text-lg mb-8">
              Sadece İngilizce bilmek yetmez, sınavın mantığını çözmek gerekir.
              BrightIELTS metodolojisi ile zamanı yönetmeyi ve sınavın
              tuzaklarından kaçınmayı öğrenin.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <span className="material-icons-outlined text-blue-600 dark:text-blue-400">
                    psychology
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Sınav Stratejileri</h4>
                  <p className="text-text-muted-light dark:text-text-muted-dark">
                    Ezberden uzak, analitik düşünmeye dayalı soru çözüm
                    teknikleri.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                  <span className="material-icons-outlined text-primary">
                    forum
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Birebir Geri Bildirim</h4>
                  <p className="text-text-muted-light dark:text-text-muted-dark">
                    Writing ve Speaking ödevleriniz için detaylı,
                    kişiselleştirilmiş analizler.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                  <span className="material-icons-outlined text-green-600 dark:text-green-400">
                    groups
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Speaking Club Desteği</h4>
                  <p className="text-text-muted-light dark:text-text-muted-dark">
                    Ders dışı konuşma kulüpleri ile akıcılığınızı ve
                    özgüveninizi artırın.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyIelts;
