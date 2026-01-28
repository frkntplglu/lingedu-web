import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-background-dark pt-16 pb-8 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="LingEdu Dil" style={{height: 70}} />
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 max-w-xs">
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
          
          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Kurumsal */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wider mb-4">
                Kurumsal
              </h3>
              <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                <li>
                  <Link className="hover:text-primary transition" href="/">
                    Ana Sayfa
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition" href="/products">
                    Ürünler
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition" href="/about">
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition" href="/contact">
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Eğitimler */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wider mb-4">
                Eğitimler
              </h3>
              <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                <li>
                  <Link className="hover:text-primary transition" href="/products/ielts">
                    IELTS Hazırlık
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition" href="/products/speaking-club-aylik">
                    Speaking Club
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition" href="/products/ozel-ders">
                    Özel Ders
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition" href="/products">
                    Tüm Ürünler
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Yasal */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wider mb-4">
                Yasal
              </h3>
              <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                <li>
                  <Link className="hover:text-primary transition" href="/kullanim-kosullari">
                    Kullanım Koşulları
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition" href="/gizlilik-politikasi">
                    Gizlilik Politikası
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition" href="/mesafeli-satis-sozlesmesi">
                    Mesafeli Satış
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary transition" href="/kvkk">
                    KVKK
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* İletişim */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wider mb-4">
                İletişim
              </h3>
              <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="material-icons text-base text-primary mt-0.5">phone</span>
                  <span>+(90) 555 123 45 67</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-icons text-base text-primary mt-0.5">email</span>
                  <span>info@lingedudil.com</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-icons text-base text-primary mt-0.5">location_on</span>
                  <span>Düzce, Türkiye</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 dark:border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} LingEdu Dil. Tüm hakları saklıdır.
          </p>
          <p className="text-sm text-gray-400 flex items-center">
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
