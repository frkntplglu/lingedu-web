import React from "react";
import { CourseWithVariants } from "@/services";

interface PricingProps {
  course?: CourseWithVariants | null;
  isLoading?: boolean;
}

const Pricing: React.FC<PricingProps> = ({ course, isLoading }) => {
  const mainVariant = course?.course_variants?.[0];
  const formattedPrice =
    typeof mainVariant?.price === "number"
      ? `₺${mainVariant.price.toLocaleString("tr-TR")}`
      : "₺1.250";

  return (
    <section className="py-24 bg-surface-light dark:bg-surface-dark" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Yatırımın Kendine
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            {course?.title || "Katılım Planı ve Program"}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {course?.mini_desc ||
              "Hedefinize uygun gün ve saati seçerek hemen konuşmaya başlayın."}
          </p>
        </div>
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 relative bg-white dark:bg-background-dark rounded-3xl p-8 border-2 border-primary shadow-xl flex flex-col h-full">
            <div className="mb-2">
              <span className="px-3 py-1 bg-accent-light dark:bg-primary/20 text-primary rounded-full text-xs font-bold  tracking-wide">
                Kontenjanlar sınırlıdır!
              </span>
            </div>
            <h3 className="text-3xl font-bold mb-2 mt-4">{course?.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">
              {course?.mini_desc}
            </p>
            <div className="flex items-baseline mb-8 pb-8 border-b border-gray-100 dark:border-gray-800">
              <span className="text-5xl font-extrabold text-gray-900 dark:text-white">
                {formattedPrice}
              </span>
              <span className="text-gray-500 dark:text-gray-400 ml-2 font-medium">
                /ay
              </span>
            </div>
            <div className="space-y-5 flex-1">
              {course?.description}
              {/* <div className="flex items-start gap-4">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 shrink-0">
                  <span className="material-icons-round text-xl">event_repeat</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    Haftada 2 Saat Pratik
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Her hafta 2 oturum, toplamda ayda 8 saat yoğun konuşma
                    pratiği.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 shrink-0">
                  <span className="material-icons-round text-xl">groups</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    Butik Gruplar
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Maksimum 5 kişilik sınıflarda herkese yeterli konuşma
                    süresi.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 shrink-0">
                  <span className="material-icons-round text-xl">
                    library_books
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    Premium Materyaller
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Ders öncesi hazırlık dosyaları ve ders sonrası detaylı
                    analizler.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-600 shrink-0">
                  <span className="material-icons-round text-xl">analytics</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    Kişisel Gelişim Raporu
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Her ay sonu detaylı geri bildirim ve seviye analizi.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
          <div className="lg:col-span-7 bg-white dark:bg-background-dark rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Size Uygun Zamanı Seçin</h3>
            <form action="#" className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {course?.course_variants?.map(variant => {
                  return <label className="relative cursor-pointer group">
                  <input
                    checked={false}
                    className="peer sr-only"
                    name="schedule"
                    type="radio"
                  />
                  <div className="p-5 rounded-2xl border-2 border-gray-100 dark:border-gray-700 hover:border-primary dark:hover:border-primary peer-checked:border-primary peer-checked:bg-primary/5 transition-all h-full">
                    <div className="flex justify-between items-start mb-3">
                      <span className="material-icons-round text-gray-400 peer-checked:text-primary transition-colors text-2xl">
                        wb_twilight
                      </span>
                    </div>
                    <h4 className="font-bold text-lg mb-1">{variant.title}</h4>
                    <div className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-lg text-xs font-semibold text-gray-700 dark:text-gray-300">
                      {variant.description}
                    </div>
                  </div>
                </label>
                })}
              </div>
              <div className="grid md:grid-cols-2 gap-4 pt-6 border-t border-gray-100 dark:border-gray-800">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Adınız Soyadınız
                  </label>
                  <input
                    className="w-full px-4 rounded-xl border-gray-300 dark:border-gray-700 dark:bg-surface-dark focus:border-primary focus:ring-primary shadow-sm h-12"
                    placeholder="Örn: Ahmet Yılmaz"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    E-posta Adresiniz
                  </label>
                  <input
                    className="w-full px-4 rounded-xl border-gray-300 dark:border-gray-700 dark:bg-surface-dark focus:border-primary focus:ring-primary shadow-sm h-12"
                    placeholder="ahmet@ornek.com"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Telefon Numaranız
                  </label>
                  <input
                    className="w-full px-4 rounded-xl border-gray-300 dark:border-gray-700 dark:bg-surface-dark focus:border-primary focus:ring-primary shadow-sm h-12"
                    placeholder="0555 123 45 67"
                    type="tel"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    İngilizce Seviyeniz
                  </label>
                  <select className="w-full px-4 rounded-xl border-gray-300 dark:border-gray-700 dark:bg-surface-dark focus:border-primary focus:ring-primary shadow-sm h-12">
                    <option>Seçiniz</option>
                    <option>A2 - Pre-Intermediate</option>
                    <option>B1 - Intermediate</option>
                    <option>B2 - Upper Intermediate</option>
                    <option>C1 - Advanced</option>
                  </select>
                </div>
              </div>
              <div className="pt-4">
                <button
                  className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary-dark transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-3 text-lg"
                  type="button"
                >
                  Kaydı Tamamla
                  <span className="material-icons-round">arrow_forward</span>
                </button>
                <p className="text-xs text-center text-gray-400 mt-4">
                  Butona tıklayarak{" "}
                  <a className="underline hover:text-primary" href="#">
                    Kullanım Koşulları
                  </a>
                  'nı kabul etmiş olursunuz.
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            *Tüm paketlerde ilk ders deneme dersidir, memnun kalmazsanız %100
            iade garantisi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
