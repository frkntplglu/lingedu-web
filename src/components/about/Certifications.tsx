import React from "react";

const Certifications = () => {
  return (
    <section className="py-20 bg-background-light dark:bg-background-dark border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-10 text-center">
          Eğitim &amp; Sertifikalar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-gray-700 text-center hover:border-primary/30 transition">
            <div className="w-12 h-12 mx-auto bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-primary mb-4">
              <span className="material-icons">school</span>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white">
              CELTA &amp; DELTA
            </h3>
            <p className="text-xs text-primary font-medium mt-1 mb-3">
              Cambridge University
            </p>
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
              Uluslararası İngilizce öğretmenliği diploması.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-gray-700 text-center hover:border-primary/30 transition">
            <div className="w-12 h-12 mx-auto bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center text-orange-500 mb-4">
              <span className="material-icons">workspace_premium</span>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white">
              IELTS Examiner
            </h3>
            <p className="text-xs text-primary font-medium mt-1 mb-3">
              Resmi Sertifika
            </p>
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
              3 Yıl resmi sınav değerlendirme tecrübesi.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-gray-700 text-center hover:border-primary/30 transition">
            <div className="w-12 h-12 mx-auto bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center text-teal-500 mb-4">
              <span className="material-icons">menu_book</span>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white">MA in TESOL</h3>
            <p className="text-xs text-primary font-medium mt-1 mb-3">
              University of Nottingham
            </p>
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
              Uygulamalı dilbilim yüksek lisans derecesi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
