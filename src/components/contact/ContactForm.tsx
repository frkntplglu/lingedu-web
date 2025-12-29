import React from "react";

const ContactForm = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-card-light dark:bg-card-dark p-8 rounded-2xl border border-gray-100 dark:border-gray-800 h-full">
            <h3 className="text-2xl font-bold mb-6">İletişim Bilgileri</h3>
            <p className="text-muted-light dark:text-muted-dark mb-8">
              Aşağıdaki kanallardan bana doğrudan ulaşabilir veya sosyal medya
              hesaplarımı takip edebilirsiniz.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <span className="material-icons-outlined">phone_iphone</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Telefon</h4>
                  <p className="text-muted-light dark:text-muted-dark text-sm mb-1">
                    Hafta içi 09:00 - 18:00
                  </p>
                  <a
                    className="text-lg font-medium hover:text-primary transition-colors"
                    href="tel:+905551234567"
                  >
                    +90 (555) 123 45 67
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                  <span className="material-icons-outlined">email</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">E-posta</h4>
                  <p className="text-muted-light dark:text-muted-dark text-sm mb-1">
                    Her zaman yazabilirsiniz
                  </p>
                  <a
                    className="text-lg font-medium hover:text-blue-600 transition-colors"
                    href="mailto:hello@brightmind.com"
                  >
                    hello@brightmind.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600 flex-shrink-0">
                  <span className="material-icons-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Ofis</h4>
                  <p className="text-muted-light dark:text-muted-dark text-lg">
                    Maslak, İstanbul
                    <br />
                    Türkiye
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h4 className="font-bold mb-4">Sosyal Medya</h4>
              <div className="flex gap-4">
                <a
                  className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-600 dark:text-gray-300"
                  href="#"
                >
                  <span className="material-icons text-xl">x</span>
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-600 dark:text-gray-300"
                  href="#"
                >
                  <span className="material-icons text-xl">instagram_icon</span>
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-600 dark:text-gray-300"
                  href="#"
                >
                  <span className="material-icons-outlined text-xl">youtube</span>
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-600 dark:text-gray-300"
                  href="#"
                >
                  <span className="material-icons-outlined text-xl">play_circle</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-2xl shadow-xl shadow-purple-100 dark:shadow-none border border-gray-100 dark:border-gray-700">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-2">Mesaj Gönderin</h3>
              <p className="text-muted-light dark:text-muted-dark">
                Formu doldurun, en kısa sürede size dönüş yapalım.
              </p>
            </div>
            <form action="#" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-sm font-semibold mb-2 ml-1"
                    htmlFor="name"
                  >
                    Adınız Soyadınız
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="material-icons-outlined text-gray-400">
                        person
                      </span>
                    </div>
                    <input
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                      id="name"
                      placeholder="Örn: Ahmet Yılmaz"
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm font-semibold mb-2 ml-1"
                    htmlFor="email"
                  >
                    E-posta Adresiniz
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="material-icons-outlined text-gray-400">
                        alternate_email
                      </span>
                    </div>
                    <input
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                      id="email"
                      placeholder="ornek@email.com"
                      type="email"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-semibold mb-2 ml-1"
                  htmlFor="subject"
                >
                  Konu
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-icons-outlined text-gray-400">
                      topic
                    </span>
                  </div>
                  <select
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white appearance-none"
                    id="subject"
                  >
                    <option>IELTS Özel Ders</option>
                    <option>Speaking Club Bilgi</option>
                    <option>Kurumsal Eğitim</option>
                    <option>Diğer</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="material-icons-outlined text-gray-400">
                      expand_more
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-semibold mb-2 ml-1"
                  htmlFor="message"
                >
                  Mesajınız
                </label>
                <textarea
                  className="w-full p-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white resize-none"
                  id="message"
                  placeholder="Size nasıl yardımcı olabiliriz?"
                  rows={5}
                ></textarea>
              </div>
              <div className="flex items-center">
                <input
                  className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary dark:bg-gray-900 dark:border-gray-600"
                  id="terms"
                  type="checkbox"
                />
                <label
                  className="ml-2 text-sm text-muted-light dark:text-muted-dark"
                  htmlFor="terms"
                >
                  <a className="text-primary hover:underline" href="#">
                    KVKK Aydınlatma Metni
                  </a>
                  'ni okudum ve kabul ediyorum.
                </label>
              </div>
              <button
                className="w-full bg-primary hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-purple-200 dark:shadow-none flex items-center justify-center gap-2 group"
                type="submit"
              >
                Gönder
                <span className="material-icons-outlined group-hover:translate-x-1 transition-transform">
                  send
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
