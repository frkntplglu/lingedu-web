import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-background-dark pt-16 pb-8 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="LingEdu Dil" style={{height: 70}} />
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
              Modern eğitim metodları ve uzman kadro ile dil öğrenim
              yolculuğunuzda yanınızdayız.
            </p>
            <div className="flex space-x-4">
              <a className="text-gray-400 hover:text-primary transition" href="#">
                <i className="material-icons text-xl">facebook</i>
              </a>
              <a className="text-gray-400 hover:text-primary transition" href="#">
                <i className="material-icons text-xl">camera_alt</i>
              </a>
              <a className="text-gray-400 hover:text-primary transition" href="#">
                <i className="material-icons text-xl">alternate_email</i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">
              Kurumsal
            </h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <a className="hover:text-primary transition" href="#">
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition" href="#">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition" href="#">
                  Eğitmenler
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">
              Eğitimler
            </h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <a className="hover:text-primary transition" href="#">
                  IELTS Hazırlık
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition" href="#">
                  Speaking Club
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition" href="#">
                  İş İngilizcesi
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition" href="#">
                  Özel Ders
                </a>
              </li>
            </ul>
          </div>
          <div id="contact">
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">
              İletişim
            </h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>+(90) 555 123 45 67</li>
              <li>bilgi@ieltsmaster.com</li>
              <li>Levent, İstanbul, TR</li>
            </ul>
            <button className="mt-6 bg-primary/10 text-primary hover:bg-primary hover:text-white px-6 py-2 rounded-full text-sm font-semibold transition w-full md:w-auto">
              Mesaj Gönder
            </button>
          </div>
        </div>
        <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} LingEdu Dil. Tüm hakları saklıdır.
          </p>
          <p className="text-sm text-gray-400 mt-2 md:mt-0 flex items-center">
            Powered by{" "}
            <span className="font-semibold text-gray-600 dark:text-gray-300 ml-1">
              Fitzpoint
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
