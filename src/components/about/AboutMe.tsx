import React from "react";

const AboutMe = () => {
  return (
    <section className="py-20 bg-surface-light dark:bg-surface-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Kimim ve <span className="text-primary">Nasıl Öğretiyorum?</span>
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark">
            Akademik geçmişim ve eğitim felsefem hakkında kısa bir özet.
          </p>
        </div>
        <div className="prose prose-lg dark:prose-invert mx-auto text-text-muted-light dark:text-text-muted-dark">
          <p>
            Merhaba, ben Selin. İngilizce öğretme tutkum{" "}
            <strong>Boğaziçi Üniversitesi İngiliz Dili ve Edebiyatı</strong>{" "}
            bölümünde başladı. Mezuniyetimin ardından Londra'da uygulamalı
            dilbilim üzerine yüksek lisans yaparak, dil edinimi konusundaki
            teorik bilgilerimi pratik deneyimlerle harmanladım.
          </p>
          <p>
            Yıllarca süren <strong>IELTS Examiner</strong> (Sınav Yapıcı)
            tecrübem, öğrencilerin en çok nerede zorlandığını ve sınavın aslında
            neyi ölçtüğünü içeriden görmemi sağladı. Bu sayede, ezbere dayalı
            değil, analitik ve stratejik bir eğitim modeli geliştirdim.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm flex gap-4 items-start">
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-lg">
              <span className="material-icons">psychology</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                Stratejik Yaklaşım
              </h3>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                Sadece İngilizceyi değil, sınavın psikolojisini ve soru çözme
                tekniklerini öğreterek puanınızı maksimize ediyoruz.
              </p>
            </div>
          </div>
          <div className="bg-white dark:bg-background-dark p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm flex gap-4 items-start">
            <div className="p-3 bg-green-50 dark:bg-green-900/20 text-green-600 rounded-lg">
              <span className="material-icons">record_voice_over</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                Özgüven Odaklı
              </h3>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
                Hata yapmaktan korkulmayan Speaking Club ortamında, akıcı
                konuşma pratiğini ön planda tutuyoruz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
