import React from "react";

const ContactHeader = () => {
  return (
    <header className="relative pt-12 pb-24 overflow-hidden">
      <div className="absolute top-10 left-10 w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center animate-bounce duration-[3000ms]">
        <span className="text-2xl">👋</span>
      </div>
      <div className="absolute top-20 right-20 w-14 h-14 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center animate-bounce duration-[4000ms]">
        <span className="text-xl">📩</span>
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Hayalinizdeki Skor İçin <br />
          <span className="text-primary">Bizimle İletişime Geçin</span>
        </h1>
        <p className="text-lg text-muted-light dark:text-muted-dark max-w-2xl mx-auto mb-10">
          IELTS hazırlık süreci veya Speaking Club hakkında merak ettiklerinizi
          sorun. Size en uygun programı birlikte planlayalım.
        </p>
      </div>
    </header>
  );
};

export default ContactHeader;
