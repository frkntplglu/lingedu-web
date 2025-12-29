import React from "react";

const StudentAchievements = () => {
  return (
    <section className="py-10 border-y border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 mb-6 uppercase tracking-widest">
          Öğrencilerimin kabul aldığı kurumlar
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <span className="text-xl font-bold text-gray-400 flex items-center gap-2">
            <span className="material-icons">school</span> UNI Global
          </span>
          <span className="text-xl font-bold text-gray-400 flex items-center gap-2">
            <span className="material-icons">language</span> Tech Institute
          </span>
          <span className="text-xl font-bold text-gray-400 flex items-center gap-2">
            <span className="material-icons">public</span> World Academy
          </span>
          <span className="text-xl font-bold text-gray-400 flex items-center gap-2">
            <span className="material-icons">history_edu</span> Edu Future
          </span>
          <span className="text-xl font-bold text-gray-400 flex items-center gap-2">
            <span className="material-icons">auto_stories</span> Bright Path
          </span>
        </div>
      </div>
    </section>
  );
};

export default StudentAchievements;
