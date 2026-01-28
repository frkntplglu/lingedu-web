import React from "react";
import Link from "next/link";

const ContactHeader = () => {
  return (
    <header className="pt-28 pb-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-background-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="mb-4 animate-fade-in">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href="/" className="text-gray-500 hover:text-primary transition">
                Ana Sayfa
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-primary font-medium">İletişim</li>
          </ol>
        </nav>
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white">
              Bize <span className="text-primary">Ulaşın</span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl">
              IELTS hazırlık süreci veya Speaking Club hakkında merak ettiklerinizi sorun. 
              Size en uygun programı birlikte planlayalım.
            </p>
          </div>
          
          {/* Quick contact badges */}
          <div className="flex flex-wrap gap-3">
            <a 
              href="mailto:info@lingedudil.com"
              className="flex items-center gap-2 text-sm bg-white dark:bg-card-dark px-4 py-2.5 rounded-full border border-gray-100 dark:border-gray-700 shadow-sm hover:border-primary hover:shadow-md transition-all group"
            >
              <span className="material-icons text-primary text-lg">email</span>
              <span className="text-gray-700 dark:text-gray-300 group-hover:text-primary transition-colors">info@lingedudil.com</span>
            </a>
            <div className="flex items-center gap-2 text-sm bg-primary/10 text-primary px-4 py-2.5 rounded-full font-medium">
              <span className="material-icons text-lg">schedule</span>
              <span>7/24 Yanıt</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ContactHeader;
