import React from "react";

const PersonalInfo = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
          1
        </div>
        <h2 className="text-xl font-bold text-text-main-light dark:text-text-main-dark">
          Kişisel Bilgiler
        </h2>
      </div>

      <div className="space-y-4">
        <div>
          <label
            className="block text-sm font-semibold mb-2 text-text-main-light dark:text-text-main-dark"
            htmlFor="firstName"
          >
            Adınız
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="material-icons-outlined text-gray-400 text-xl">
                person
              </span>
            </div>
            <input
              className="w-full pl-[3rem] pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
              id="firstName"
              placeholder="Örn. Ahmet"
              type="text"
            />
          </div>
        </div>

        <div>
          <label
            className="block text-sm font-semibold mb-2 text-text-main-light dark:text-text-main-dark"
            htmlFor="lastName"
          >
            Soyadınız
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="material-icons-outlined text-gray-400 text-xl">
                person
              </span>
            </div>
            <input
              className="w-full pl-[3rem] pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
              id="lastName"
              placeholder="Örn. Yılmaz"
              type="text"
            />
          </div>
        </div>

        <div>
          <label
            className="block text-sm font-semibold mb-2 text-text-main-light dark:text-text-main-dark"
            htmlFor="email"
          >
            E-posta Adresi
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="material-icons-outlined text-gray-400 text-xl">
                email
              </span>
            </div>
            <input
              className="w-full pl-[3rem] pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
              id="email"
              placeholder="ahmet@ornek.com"
              type="email"
            />
          </div>
        </div>

        <div>
          <label
            className="block text-sm font-semibold mb-2 text-text-main-light dark:text-text-main-dark"
            htmlFor="phone"
          >
            Telefon Numarası
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="material-icons-outlined text-gray-400 text-xl">
                phone
              </span>
            </div>
            <input
              className="w-full pl-[3rem] pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white"
              id="phone"
              placeholder="05XX XXX XX XX"
              type="tel"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;

