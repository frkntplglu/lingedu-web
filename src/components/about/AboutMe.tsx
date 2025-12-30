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
          <p className="pb-4">
            Merhaba, ben <strong>Ayşe Gizem Çiftçi Topaloğlu</strong>. Yaklaşık <strong>10 yıldır</strong> öğretim
            görevlisi olarak çalışmakta ve İngilizce eğitimi alanında
            yetişkinlere özel ders ve grup dersleri vermekteyim. Lisans
            eğitimimi 2017 yılında <strong>Anadolu Üniversitesi İngilizce Öğretmenliği</strong>
            bölümünde, yüksek lisansımı ise 2021 yılında <strong>Kocaeli Üniversitesi
            İngiliz Dili Eğitimi</strong> alanında tamamladım. Şu anda da <strong>Çanakkale
            Onsekiz Mart Üniversitesinde</strong> aynı alanda doktora çalışmalarımı
            sürdürmekteyim.
          </p>
          <p className="pb-4">
            <strong>2021</strong> yılında kendi girişimim olan <strong>Speaking Club'ı</strong> kurdum ve o günden
            beri binlerce öğrenciyle konuşma pratiği yaptık. Uzmanlığımı bir
            ileri noktaya taşımak adına dünyanın ileri gelen kurumlarından IELTS
            eğitmenliği eğitimleri aldım ve IELTS Grup Dersleri programımı
            kurdum. Aktif olarak <strong>Speaking Club, IELTS Grup Dersleri ve IELTS
            Özel Ders</strong> programlarını yürütmekteyim.
          </p>
          <p className="pb-4">
            <span className="text-lg mb-4 font-bold block">Öğretmenlik Felsefem</span>
            <strong>Uzmanlık:</strong> Akademik geçmişim ve süregelen doktora
            çalışmalarım sayesinde, özellikle yetişkinlere İngilizce öğretme
            alanında derinleşmiş bir bilgi birikimine sahibim.
          </p>
          <p className="pb-4">
            <strong>Deneyim:</strong> Farklı seviye ve profildeki yetişkinlerle
            uzun yıllar çalıştığım için karşılaşılabilecek zorlukları önceden
            öngörebiliyor, buna uygun esnek ve etkili çözümler üretebiliyorum.
          </p>
          <p className="pb-4">
            <strong>İletişim:</strong> Açık, şeffaf ve yargılayıcı olmayan bir
            iletişim diliyle öğrencilerimle güvene dayalı bir bağ kurmayı
            hedefliyorum. Sorulara her zaman yanıt vermeye ve endişeleri
            dinlemeye hazırım.
          </p>
          <p className="pb-4">
            <strong>Detaylara Dikkat:</strong> En küçük ayrıntıya bile önem
            vererek yüksek kalitede eğitim sunmayı önceliğim haline getirdim.
          </p>
          <p className="pb-4">
            <strong>Esneklik:</strong> Her öğrencinin öğrenme biçimi farklıdır.
            Bu nedenle öğretim stilimi bireysel ihtiyaçlara göre
            şekillendiriyorum.
          </p>
          <p className="pb-4">
            <strong>Tutku:</strong> Öğretmenlik yalnızca bir meslek değil, benim
            için bir tutku. Öğrencilerimin öğrenme yolculuklarında yanlarında
            olmak, onlara ilham vermek ve İngilizceyi sevdirmek en büyük
            motivasyonum.
          </p>
          <p>
            Kısacası, İngilizceye küsmüş ya da mesafe koymuş bireylerle dil
            arasında yeniden köprü kurmayı hedefliyorum. Siz de bu yolculukta
            bana katılmak isterseniz, doğru yerdesiniz.
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
