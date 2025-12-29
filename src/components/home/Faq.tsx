import React from "react";

const Faq = () => {
  return (
    <section className="py-20 bg-white dark:bg-background-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-10 text-center">
          Sıkça Sorulan Sorular
        </h2>
        <div className="space-y-4">
          <div className="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden">
            <button className="w-full flex justify-between items-center p-5 bg-gray-50 dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-left">
              <span className="font-semibold text-gray-900 dark:text-white">
                Dersler online mı yüz yüze mi?
              </span>
              <span className="material-icons text-gray-400">add</span>
            </button>
          </div>
          <div className="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden">
            <button className="w-full flex justify-between items-center p-5 bg-gray-50 dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-left">
              <span className="font-semibold text-gray-900 dark:text-white">
                Seviye tespit sınavı yapıyor musunuz?
              </span>
              <span className="material-icons text-gray-400">add</span>
            </button>
          </div>
          <div className="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden">
            <button className="w-full flex justify-between items-center p-5 bg-gray-50 dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-left">
              <span className="font-semibold text-gray-900 dark:text-white">
                Speaking Club grupları kaç kişilik?
              </span>
              <span className="material-icons text-gray-400">add</span>
            </button>
          </div>
          <div className="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden">
            <button className="w-full flex justify-between items-center p-5 bg-gray-50 dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-left">
              <span className="font-semibold text-gray-900 dark:text-white">
                Ödeme seçenekleri nelerdir?
              </span>
              <span className="material-icons text-gray-400">add</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
