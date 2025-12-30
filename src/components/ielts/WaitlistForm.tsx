import React, { useState } from "react";

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredStartDate: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: API call to add to waitlist
    // await waitlistService.post(formData);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", preferredStartDate: "" });
    }, 1000);
  };

  return (
    <section className="py-24 bg-surface-light dark:bg-surface-dark relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-50 dark:from-purple-900/10 to-transparent"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-card-light dark:bg-card-dark rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700">
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-icons-outlined text-primary text-4xl">
                notifications_active
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Şu Anda <span className="text-primary">Yer Dolu</span>
            </h2>
            <p className="text-text-muted-light dark:text-text-muted-dark text-lg max-w-2xl mx-auto">
              IELTS hazırlık kursumuz şu anda dolu. Waitlist'e katılın, yer açıldığında size öncelikli olarak haber verelim.
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="material-icons-outlined text-green-600 dark:text-green-400 text-3xl">
                  check_circle
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-text-main-light dark:text-text-main-dark">
                Waitlist'e Eklendiniz!
              </h3>
              <p className="text-text-muted-light dark:text-text-muted-dark mb-6">
                Yer açıldığında size e-posta ile haber vereceğiz.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-primary hover:underline font-medium"
              >
                Yeni bir kayıt yapmak için tıklayın
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-sm font-semibold mb-2 text-text-main-light dark:text-text-main-dark"
                    htmlFor="name"
                  >
                    Adınız Soyadınız
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="material-icons-outlined text-gray-400 text-xl">
                        person
                      </span>
                    </div>
                    <input
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                      id="name"
                      name="name"
                      placeholder="Örn: Ahmet Yılmaz"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-semibold mb-2 text-text-main-light dark:text-text-main-dark"
                    htmlFor="email"
                  >
                    E-posta Adresiniz
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="material-icons-outlined text-gray-400 text-xl">
                        email
                      </span>
                    </div>
                    <input
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                      id="email"
                      name="email"
                      placeholder="ornek@email.com"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-semibold mb-2 text-text-main-light dark:text-text-main-dark"
                    htmlFor="phone"
                  >
                    Telefon Numaranız
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="material-icons-outlined text-gray-400 text-xl">
                        phone
                      </span>
                    </div>
                    <input
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                      id="phone"
                      name="phone"
                      placeholder="05XX XXX XX XX"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-semibold mb-2 text-text-main-light dark:text-text-main-dark"
                    htmlFor="preferredStartDate"
                  >
                    Tercih Ettiğiniz Başlangıç Tarihi
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="material-icons-outlined text-gray-400 text-xl">
                        calendar_today
                      </span>
                    </div>
                    <input
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
                      id="preferredStartDate"
                      name="preferredStartDate"
                      type="date"
                      value={formData.preferredStartDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-accent-light dark:bg-accent-light/10 rounded-xl border border-primary/20">
                <span className="material-icons-outlined text-primary text-xl flex-shrink-0 mt-0.5">
                  info
                </span>
                <div className="text-sm text-text-muted-light dark:text-text-muted-dark">
                  <p className="font-semibold mb-1 text-text-main-light dark:text-text-main-dark">
                    Waitlist'e katıldığınızda:
                  </p>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Yer açıldığında size öncelikli olarak haber vereceğiz</li>
                    <li>Özel indirimlerden ilk siz haberdar olacaksınız</li>
                    <li>Kurs başlangıç tarihlerinden önceden bilgilendirileceksiniz</li>
                  </ul>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-purple-200 dark:shadow-none flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="material-icons-outlined animate-spin">refresh</span>
                    Gönderiliyor...
                  </>
                ) : (
                  <>
                    Waitlist'e Katıl
                    <span className="material-icons-outlined group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;

