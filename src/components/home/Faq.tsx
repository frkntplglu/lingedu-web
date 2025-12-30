import React, { useState } from "react";
import { FAQ } from "@/services";

interface FaqProps {
  faqs: FAQ[];
  isLoading?: boolean;
}

const Faq = ({ faqs, isLoading = false }: FaqProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white dark:bg-background-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-10 text-center">
          Sıkça Sorulan Sorular
        </h2>
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <span className="material-icons-outlined animate-spin text-primary text-4xl">
              refresh
            </span>
          </div>
        ) : faqs.length === 0 ? (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            Henüz soru bulunmamaktadır.
          </div>
        ) : (
          <div className="space-y-4">
            {faqs.map((faq, index) => (
            <div
              key={faq.id || index}
              className="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-5 bg-gray-50 dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-left"
              >
                <span className="font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                <span
                  className={`material-icons text-gray-400 transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  add
                </span>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 pt-4 bg-white dark:bg-gray-800">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Faq;
