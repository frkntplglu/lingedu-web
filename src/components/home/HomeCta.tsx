import React from "react";

const HomeCta = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto bg-primary rounded-3xl overflow-hidden shadow-2xl relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 py-16 px-8 text-center text-white">
          <span className="inline-block p-3 bg-white/20 rounded-full mb-6 backdrop-blur-sm transform rotate-12">
            <span className="text-3xl">🚀</span>
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            İlk Adımı Atın - <br /> Bugün Öğrenmeye Başlayın!
          </h2>
          <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto mb-10">
            Sınırlı kontenjan ile açılan sınıflarda yerinizi ayırtın ve
            hayallerinize bir adım daha yaklaşın.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition shadow-lg">
              İletişime Geç
            </button>
          </div>
        </div>
        <img
          alt="User"
          className="hidden md:block absolute top-10 left-20 w-12 h-12 rounded-full border-2 border-white/50 animate-bounce"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKKL2KINSecjwSenILaD3OAGm0lbBhH-vzMmLYuuL3xxmXo2X4WjxoNA0Fqskr1GNEW4Kcfi6bLHDv91zQzzfebf4bStSA-iLD8JNghiSIwY7yv-Sv1ToKGk0ogYrRTmo8aY3zQZfmGvdqXK0Niy51g9_q4SZIs-ddwvXgKFJyStdKXowt6O7x_P5qWHo_3P32a2m0P0CoAtTpCtqRnq8kY2Fhp9dnV7waOPXSisAWMdc_d-y3XrAawHKgBAwROGkdOXurWIdOwfQ"
          style={{animationDuration: '3s'}}
        />
        <img
          alt="User"
          className="hidden md:block absolute bottom-20 right-20 w-14 h-14 rounded-full border-2 border-white/50 animate-bounce"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWP4aOTZdeZ8uxH7LbpUZHNkce5XcX11ZCFC2dwEexk7Dj7W_yIYudbkHBIUgmG2uk2SzJg2MvWhV-Ns6GpI97KUsDbwd9cA5CzBSjnjarCPcmBZ65r0UloUW08KsdMkNOd7ZLTgAn_glfJVBEWQp4nWte9TR8JdVr98waUMjt_11qvF8BSvsg0TBzq5E6wBbN_kT99Pc3PbUzNCS4_LhFUyFYoQAjz8dvPPnF4CDboXQFIEX6U7s2P4kQuyTuqu2AXy-yhP2ZZHw"
          style={{animationDuration: '4s', animationDelay: '1s'}}
        />
      </div>
    </section>
  );
};

export default HomeCta;
