import React from "react";
import Link from "next/link";
import { CourseVariant } from "@/services";

interface ProductVariantsProps {
  variants?: CourseVariant[];
  isLoading?: boolean;
}

const ProductVariantsSkeleton = () => (
  <div className="max-w-4xl mx-auto">
    <div className="space-y-4">
      {[1, 2].map((i) => (
        <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 animate-pulse">
          <div className="flex justify-between gap-8">
            <div className="flex-1 space-y-3">
              <div className="h-7 bg-gray-100 dark:bg-gray-700 rounded w-40"></div>
              <div className="h-5 bg-gray-100 dark:bg-gray-700 rounded w-56"></div>
              <div className="space-y-2 pt-4">
                <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded w-11/12"></div>
                <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded w-10/12"></div>
              </div>
            </div>
            <div className="w-48 flex-shrink-0">
              <div className="h-10 bg-gray-100 dark:bg-gray-700 rounded w-32 mb-3"></div>
              <div className="h-11 bg-gray-100 dark:bg-gray-700 rounded-xl w-full"></div>
            </div>
          </div>
        </div>
      ))}
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
  console.log("my variant : ", variants)
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

        {/* Variant Cards */}
        <div className="max-w-lg mx-auto space-y-4">
          {variants.map((variant) => (
            <div
              key={variant.id}
              className={`bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 transition-all duration-200 hover:border-primary dark:hover:border-primary hover:shadow-md`}
            >
              <div className="flex gap-6">
                {/* Left: Content */}
                <div className="flex-1 space-y-4">
                  {/* Title & Subtitle */}
                  <div>
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {variant.title}
                      </h3>
                      {variant.is_featured && (
                        <span className="text-xs font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-2 py-0.5 rounded-full">
                          Popüler
                        </span>
                      )}
                    </div>
                    {variant.mini_desc && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {variant.mini_desc}
                      </p>
                    )}
                  </div>

                  {/* Features List */}
                  {variant.description && (
                    <div className="text-sm text-gray-700 dark:text-gray-300 prose prose-sm dark:prose-invert max-w-none
                      prose-ul:m-0 prose-ul:space-y-2 prose-li:flex prose-li:items-start prose-li:gap-2
                      [&_ul]:list-none [&_ul]:pl-0"
                      dangerouslySetInnerHTML={{
                        __html: variant.description.replace(/<li>/g, '<li class="flex items-start gap-2"><span class="text-primary mt-0.5">✓</span><span>')
                      }}
                    />
                  )}
                </div>

                {/* Right: CTA & Price */}
                <div className="flex-shrink-0 flex flex-col items-end justify-between">
                  <Link
                    href={`/pay/${variant.id}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary-hover transition-colors duration-200 whitespace-nowrap"
                  >
                    Kayıt Ol
                  </Link>
                  <div className="text-right mt-2">
                    {variant.price ? (
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        {formatPrice(+variant.price)}
                      </p>
                    ) : (
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Fiyat için iletişime geçin
                      </p>
                    )}
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {variant.start_date ? formatDate(variant.start_date) : 'İletişime geçin'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

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
