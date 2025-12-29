import React from "react";

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Öğrencilerimiz <span className="text-primary">Ne Diyor?</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Başarı hikayelerimiz en büyük referansımızdır.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition relative">
            <span className="text-6xl text-purple-100 dark:text-purple-900 absolute top-4 left-4 font-serif">
              "
            </span>
            <p className="text-gray-600 dark:text-gray-300 mb-6 relative z-10">
              "Zeynep hoca ile çalışmak IELTS sürecimi tamamen değiştirdi.
              Stratejik yaklaşımı sayesinde 6.0 olan puanımı 7.5'e çıkardım."
            </p>
            <div className="flex items-center gap-3">
              <img
                alt="Student"
                className="w-10 h-10 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVHEXfq3fQGr6QhB9h1hKEqeEciFfxF_VDZBZpRX67-gMh3eFfT5NpnvBfujVn0OPxcmx5a-v6pP0oiAl9JgV_mhaV02rmk5gWATry_ERxAcNE-08QBhtRbsy8vABiDpQID0iTl4WeUFpj6ahFLx4V3qS5xXeL8nzPhBD0EyNMnCRFVPUL8-HoaPt3fdiEgGqF6e9JPnX3yqKCZ94QCjranFd-YvSryCPUulgnHVHRioPBRw-e1EQNVIUw062HdXw4QkCRVurYrU4"
              />
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                  Ayşe K.
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Yüksek Lisans Öğrencisi
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition relative">
            <span className="text-6xl text-purple-100 dark:text-purple-900 absolute top-4 left-4 font-serif">
              "
            </span>
            <p className="text-gray-600 dark:text-gray-300 mb-6 relative z-10">
              "Speaking Club dersleri sayesinde özgüvenim yerine geldi. Artık
              toplantılarda İngilizce konuşmaktan çekinmiyorum."
            </p>
            <div className="flex items-center gap-3">
              <img
                alt="Student"
                className="w-10 h-10 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs5gvHYX7S7N67-OWbRPO9t7zHlpo0rZW4P1AfebVyv6eX6IiBR_PRpFNfy5evUdsqraeAwDZTDRDFccrrrTGofF0LAwjQf9MJXkOmiZv1jazqrQOKf2aXZF4K7YDdq7AmkE5-cB03zqrHKpbvS7rSFFcisCZCNzwMNriGx15N48kvFNUi-Iu4Kqu2SGYKN_rDisQLFxBIr_Y-PZ7KvHahDJvzF3BIa9qrl2rQmgqkoqbMjgbiMbcEdK540i3k1pQe67xLoFeQXCc"
              />
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                  Mehmet T.
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Yazılım Mühendisi
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm hover:shadow-md transition relative">
            <span className="text-6xl text-purple-100 dark:text-purple-900 absolute top-4 left-4 font-serif">
              "
            </span>
            <p className="text-gray-600 dark:text-gray-300 mb-6 relative z-10">
              "İş İngilizcesi programı kariyerimde bir dönüm noktası oldu.
              Mülakat teknikleri dersi sayesinde global bir şirketten kabul
              aldım."
            </p>
            <div className="flex items-center gap-3">
              <img
                alt="Student"
                className="w-10 h-10 rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPMKraLORbKbKlpHNqFgShRLh2r7jYBRKZwMRgL69uJNjKHZnZ2k7wxeqz_ixn85tiHe7yeANK-3mfqyK_vMxtueV0-IHmWC0ziN5dtYMxOPF2stYv0lLaUvbRnan3MxifSuUWdvbFfbjVBeevw5SYnsSYCw6kgNph1JS_vH_9luXruMNEVcC4WFYIvwOhs32SKSp49llphNX7e_c5dFBWIj-SFBRLtYQbrLaudWOk3AsJmZcZdBm0cgXSS7krpQzx1lyUhxP7t4s"
              />
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                  Selin B.
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Pazarlama Uzmanı
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10 gap-3">
          <button className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:border-primary hover:text-primary transition">
            <span className="material-icons">west</span>
          </button>
          <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary-hover transition">
            <span className="material-icons">east</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
