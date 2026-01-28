import React from "react";
import Link from "next/link";

const categories = [
  {
    title: "IELTS Hazırlık",
    description: "Akademik ve Genel IELTS sınavlarına yönelik stratejik çalışma planı.",
    info: "40+ Ders • 8 Hafta",
    icon: "description",
    href: "/products/ielts",
    colorClass: "bg-purple-50 dark:bg-purple-900/20",
    iconBg: "bg-white dark:bg-gray-800",
    iconColor: "text-purple-600 dark:text-purple-400",
    infoColor: "text-purple-600 dark:text-purple-400",
  },
  {
    title: "Speaking Club",
    description: "Farklı seviyeler için özel gruplar ile konuşma pratiği yapın.",
    info: "Haftalık Oturumlar • Esnek Saatler",
    icon: "record_voice_over",
    href: "/products/speaking-club-aylik",
    colorClass: "bg-orange-50 dark:bg-orange-900/20",
    iconBg: "bg-white dark:bg-gray-800",
    iconColor: "text-orange-600 dark:text-orange-400",
    infoColor: "text-orange-600 dark:text-orange-400",
  },
  {
    title: "Birebir Özel Ders",
    description: "Kişisel hedeflerinize ve eksiklerinize odaklanan yoğun program.",
    info: "Kişiye Özel • Online/Yüz Yüze",
    icon: "person",
    href: "/products/ozel-ders",
    colorClass: "bg-teal-50 dark:bg-teal-900/20",
    iconBg: "bg-white dark:bg-gray-800",
    iconColor: "text-teal-600 dark:text-teal-400",
    infoColor: "text-teal-600 dark:text-teal-400",
  },
];

const CourseCategories = () => {
  return (
    <section className="py-20 bg-white dark:bg-background-dark" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 animate-fade-in">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
              Eğitim <span className="text-primary">Kategorileri</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              İhtiyacınıza uygun programı seçin.
            </p>
          </div>
          <Link 
            href="/products"
            className="mt-4 md:mt-0 text-primary font-semibold flex items-center gap-1 hover:gap-2 transition-all"
          >
            Tümünü Gör
            <span className="material-icons text-base">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link key={category.title} href={category.href}>
              <div 
                className={`${category.colorClass} rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer h-full animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-14 h-14 ${category.iconBg} rounded-xl flex items-center justify-center mb-6 shadow-sm ${category.iconColor} text-2xl group-hover:scale-110 transition-transform`}>
                  <span className="material-icons">{category.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  {category.description}
                </p>
                <div className={`text-xs font-semibold ${category.infoColor} flex items-center justify-between`}>
                  <span>{category.info}</span>
                  <span className="material-icons text-base opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;
