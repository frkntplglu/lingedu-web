import React from "react";

const CourseCategories = () => {
  return (
    <section className="py-20 bg-white dark:bg-background-dark" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
              Eğitim <span className="text-primary">Kategorileri</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              İhtiyacınıza uygun programı seçin.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-2xl p-8 hover:shadow-lg transition duration-300 group cursor-pointer">
            <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center mb-6 shadow-sm text-purple-600 dark:text-purple-400 text-2xl group-hover:scale-110 transition">
              <span className="material-icons">description</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              IELTS Hazırlık
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
              Akademik ve Genel IELTS sınavlarına yönelik stratejik çalışma
              planı.
            </p>
            <div className="text-xs font-semibold text-purple-600 dark:text-purple-400">
              40+ Ders • 8 Hafta
            </div>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-8 hover:shadow-lg transition duration-300 group cursor-pointer">
            <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center mb-6 shadow-sm text-orange-600 dark:text-orange-400 text-2xl group-hover:scale-110 transition">
              <span className="material-icons">record_voice_over</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Speaking Club
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
              Farklı seviyeler için özel gruplar ile konuşma pratiği yapın.
            </p>
            <div className="text-xs font-semibold text-orange-600 dark:text-orange-400">
              Haftalık Oturumlar • Esnek Saatler
            </div>
          </div>
          <div className="bg-teal-50 dark:bg-teal-900/20 rounded-2xl p-8 hover:shadow-lg transition duration-300 group cursor-pointer">
            <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center mb-6 shadow-sm text-teal-600 dark:text-teal-400 text-2xl group-hover:scale-110 transition">
              <span className="material-icons">person</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Birebir Özel Ders
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
              Kişisel hedeflerinize ve eksiklerinize odaklanan yoğun program.
            </p>
            <div className="text-xs font-semibold text-teal-600 dark:text-teal-400">
              Kişiye Özel • Online/Yüz Yüze
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;
