import React, { useState, useMemo } from "react";
import { FAQ, FAQCategory } from "@/services";

interface FaqProps {
  faqs: FAQ[];
  categories: FAQCategory[];
  isLoading?: boolean;
}

const Faq = ({ faqs, categories, isLoading = false }: FaqProps) => {
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

  // Set first category as default when categories are loaded
  React.useEffect(() => {
    if (categories.length > 0 && selectedCategoryId === null) {
      setSelectedCategoryId(categories[0].id || null);
    }
  }, [categories, selectedCategoryId]);

  // Filter FAQs by selected category
  const filteredFaqs = useMemo(() => {
    if (!selectedCategoryId) return faqs;
    return faqs.filter((faq) => faq.category_id === selectedCategoryId);
  }, [faqs, selectedCategoryId]);

  const toggleAccordion = (faqId: number) => {
    setOpenFaqId(openFaqId === faqId ? null : faqId);
  };

  return (
    <section className="py-20 bg-white dark:bg-background-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-10 text-center">
          Sıkça Sorulan Sorular
        </h2>
        
        {/* Category Tabs */}
        {!isLoading && categories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategoryId(category.id || null);
                  setOpenFaqId(null); // Reset open accordion when switching categories
                }}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                  selectedCategoryId === category.id
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}

        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <span className="material-icons-outlined animate-spin text-primary text-4xl">
              refresh
            </span>
          </div>
        ) : filteredFaqs.length === 0 ? (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            {selectedCategoryId ? "Bu kategoride henüz soru bulunmamaktadır." : "Henüz soru bulunmamaktadır."}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
            <div
              key={faq.id || index}
              className="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => faq.id && toggleAccordion(faq.id)}
                className="w-full flex justify-between items-center p-5 bg-gray-50 dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-left"
              >
                <span className="font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                <span
                  className={`material-icons text-gray-400 transition-transform flex-shrink-0 ${
                    openFaqId === faq.id ? "rotate-45" : ""
                  }`}
                >
                  add
                </span>
              </button>
              {openFaqId === faq.id && (
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
