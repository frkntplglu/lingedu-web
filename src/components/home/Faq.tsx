import React, { useState, useMemo } from "react";
import { FAQ, FAQCategory } from "@/services";

interface FaqProps {
  faqs: FAQ[];
  categories: FAQCategory[];
  isLoading?: boolean;
}

const FaqSkeleton = () => (
  <div className="space-y-4">
    {/* Category tabs skeleton */}
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="skeleton-shimmer h-10 w-24 rounded-full"></div>
      ))}
    </div>
    {/* FAQ items skeleton */}
    {[1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden"
        style={{ animationDelay: `${i * 100}ms` }}
      >
        <div className="p-5 bg-gray-50 dark:bg-gray-900/50 flex justify-between items-center">
          <div className="skeleton-shimmer h-5 w-3/4 rounded"></div>
          <div className="skeleton-shimmer h-6 w-6 rounded"></div>
        </div>
      </div>
    ))}
  </div>
);

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
        <div className="animate-fade-in">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4 text-center">
            Sıkça Sorulan <span className="text-primary">Sorular</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-center mb-10">
            Merak ettiklerinize hızlıca yanıt bulun.
          </p>
        </div>
        
        {isLoading ? (
          <FaqSkeleton />
        ) : (
          <>
            {/* Category Tabs */}
            {categories.length > 0 && (
              <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in" style={{ animationDelay: '100ms' }}>
                {categories.map((category, index) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategoryId(category.id || null);
                      setOpenFaqId(null);
                    }}
                    className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                      selectedCategoryId === category.id
                        ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            )}

            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-icons text-2xl text-gray-400">help_outline</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                  {selectedCategoryId ? "Bu kategoride henüz soru bulunmamaktadır." : "Henüz soru bulunmamaktadır."}
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <div
                    key={faq.id || index}
                    className="border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden animate-fade-in-up hover:shadow-md transition-shadow"
                    style={{ animationDelay: `${(index + 2) * 50}ms` }}
                  >
                    <button
                      onClick={() => faq.id && toggleAccordion(faq.id)}
                      className="w-full flex justify-between items-center p-5 bg-gray-50 dark:bg-gray-900/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-left group"
                    >
                      <span className="font-semibold text-gray-900 dark:text-white pr-4 group-hover:text-primary transition-colors">
                        {faq.question}
                      </span>
                      <span
                        className={`material-icons text-gray-400 transition-all duration-300 flex-shrink-0 ${
                          openFaqId === faq.id ? "rotate-45 text-primary" : "group-hover:text-primary"
                        }`}
                      >
                        add
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openFaqId === faq.id ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <div className="px-5 pb-5 pt-4 bg-white dark:bg-gray-800">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Faq;
