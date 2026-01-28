import React, { useState } from "react";
import Link from "next/link";
import { CourseVariant } from "@/services";

interface ProductVariantsProps {
  variants?: CourseVariant[];
  isLoading?: boolean;
}

const ProductVariantsSkeleton = () => (
  <div className="max-w-4xl mx-auto">
    <div className="flex gap-4 mb-8 justify-center">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-12 w-32 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
      ))}
    </div>
    <div className="bg-gray-100 dark:bg-gray-800 rounded-[2rem] p-8 animate-pulse">
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-lg w-1/2 mb-4"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-lg w-3/4 mb-8"></div>
      <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg w-1/3 mb-8"></div>
      <div className="space-y-3 mb-8">
        {[1, 2, 3, 4].map((j) => (
          <div key={j} className="h-4 bg-gray-200 dark:bg-gray-700 rounded-lg w-full"></div>
        ))}
      </div>
      <div className="h-14 bg-gray-200 dark:bg-gray-700 rounded-xl w-full"></div>
    </div>
  </div>
);

const formatPrice = (price?: number) =>
  typeof price === "number" ? `₺${price.toLocaleString("tr-TR")}` : undefined;

const formatDate = (date?: string) =>
  date ? new Date(date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }) : undefined;

const ProductVariants: React.FC<ProductVariantsProps> = ({ variants = [], isLoading }) => {
  // Find the featured variant or default to first one
  const defaultVariant = variants.find(v => v.is_featured) || variants[0];
  const [selectedVariant, setSelectedVariant] = useState<CourseVariant | null>(defaultVariant || null);

  if (isLoading) {
    return (
      <section className="py-24 bg-surface-light dark:bg-surface-dark relative" id="pricing">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg w-1/3 mx-auto mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-lg w-1/2 mx-auto animate-pulse"></div>
          </div>
          <ProductVariantsSkeleton />
        </div>
      </section>
    );
  }

  if (!variants || variants.length === 0) {
    return (
      <section className="py-24 bg-surface-light dark:bg-surface-dark" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="material-icons text-6xl text-gray-300 dark:text-gray-600 mb-4">
              local_offer
            </span>
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
              Fiyat Bilgisi Mevcut Değil
            </h3>
            <p className="text-gray-500 dark:text-gray-500 mb-6">
              Bu eğitim için henüz fiyatlandırma seçenekleri eklenmemiş.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full font-semibold transition"
            >
              <span className="material-icons text-base">email</span>
              Fiyat Bilgisi Al
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-surface-light dark:bg-surface-dark relative" id="pricing">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Sizin İçin En Uygun <span className="text-primary">Planı Seçin</span>
          </h2>
          <p className="text-text-muted-light dark:text-text-muted-dark text-lg max-w-2xl mx-auto">
            Öğrenme stilinize ve hedeflerinize uygun eğitim modelini belirleyin.
          </p>
        </div>

        {/* Variant Selector Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {variants.map((variant) => (
            <button
              key={variant.id}
              onClick={() => setSelectedVariant(variant)}
              className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedVariant?.id === variant.id
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-white dark:bg-card-dark text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-primary hover:text-primary"
              }`}
            >
              {variant.is_featured && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 rounded-full">
                  Popüler
                </span>
              )}
              {variant.title}
            </button>
          ))}
        </div>

        {/* Selected Variant Details */}
        {selectedVariant && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-card-dark rounded-[2rem] p-8 md:p-12 border border-gray-100 dark:border-gray-700 shadow-xl relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                        {selectedVariant.title}
                      </h3>
                      {selectedVariant.is_featured && (
                        <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs font-bold px-3 py-1 rounded-full">
                          En Popüler
                        </span>
                      )}
                    </div>
                    {selectedVariant.mini_desc && (
                      <p className="text-text-muted-light dark:text-text-muted-dark text-lg">
                        {selectedVariant.mini_desc}
                      </p>
                    )}
                  </div>
                  
                  <div className="text-right">
                    <div className="text-4xl md:text-5xl font-bold text-primary">
                      {formatPrice(selectedVariant.price)}
                    </div>
                    {selectedVariant.capacity && (
                      <span className="text-text-muted-light dark:text-text-muted-dark text-sm">
                        {selectedVariant.capacity} kişilik
                      </span>
                    )}
                  </div>
                </div>

                {/* Start Date */}
                {selectedVariant.start_date && (
                  <div className="flex items-center gap-2 mb-6 text-sm">
                    <span className="material-icons text-primary text-xl">event</span>
                    <span className="text-gray-600 dark:text-gray-400">
                      Başlangıç: <strong className="text-gray-900 dark:text-white">{formatDate(selectedVariant.start_date)}</strong>
                    </span>
                  </div>
                )}

                {/* Description / Features */}
                {selectedVariant.description && (
                  <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="material-icons text-primary">checklist</span>
                      Paket İçeriği
                    </h4>
                    <div 
                      className="text-gray-600 dark:text-gray-400 prose prose-sm dark:prose-invert max-w-none 
                        prose-ul:space-y-2 prose-li:flex prose-li:items-start prose-li:gap-2
                        [&_ul]:list-none [&_ul]:pl-0 [&_li]:before:content-['✓'] [&_li]:before:text-primary [&_li]:before:font-bold"
                      dangerouslySetInnerHTML={{ __html: selectedVariant.description }}
                    />
                  </div>
                )}

                {/* CTA Button */}
                <Link
                  href="/contact"
                  className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary-hover transition duration-300 text-center block shadow-lg shadow-primary/30 text-lg flex items-center justify-center gap-2"
                >
                  <span className="material-icons">shopping_cart</span>
                  Hemen Kayıt Ol
                </Link>

                {/* Additional Info */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="material-icons text-green-500 text-base">verified</span>
                    Sertifika dahil
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-icons text-green-500 text-base">support_agent</span>
                    7/24 destek
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-icons text-green-500 text-base">replay</span>
                    7 gün iade garantisi
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Hangi planın size uygun olduğundan emin değil misiniz?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            <span className="material-icons text-base">support_agent</span>
            Ücretsiz danışmanlık alın
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductVariants;
