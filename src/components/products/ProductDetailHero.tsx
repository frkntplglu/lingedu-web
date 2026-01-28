import React from "react";
import Link from "next/link";
import { CourseWithVariants } from "@/services";

interface ProductDetailHeroProps {
  product?: CourseWithVariants | null;
  isLoading?: boolean;
}

const ProductDetailHeroSkeleton = () => (
  <section className="pt-32 pb-16 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="animate-pulse">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-40 mb-6"></div>
        <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded-lg w-3/4 mb-6"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-lg w-full max-w-2xl mb-2"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-lg w-2/3 max-w-xl"></div>
      </div>
    </div>
  </section>
);

const ProductDetailHero: React.FC<ProductDetailHeroProps> = ({ product, isLoading }) => {
  if (isLoading) {
    return <ProductDetailHeroSkeleton />;
  }

  if (!product) {
    return (
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="material-icons text-6xl text-gray-300 dark:text-gray-600 mb-4">
            search_off
          </span>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ürün Bulunamadı
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Aradığınız eğitim programı mevcut değil veya kaldırılmış olabilir.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full font-semibold transition"
          >
            <span className="material-icons text-base">arrow_back</span>
            Tüm Ürünlere Dön
          </Link>
        </div>
      </section>
    );
  }

  const variants = product.course_variants || [];
  const lowestPrice = variants.length > 0 
    ? Math.min(...variants.map(v => v.price || 0))
    : null;

  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-32 left-10 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center animate-pulse hidden lg:flex">
        <span className="material-icons-outlined text-primary text-3xl">school</span>
      </div>
      <div className="absolute top-48 right-16 w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center animate-bounce duration-[4000ms] hidden lg:flex">
        <span className="material-icons-outlined text-amber-600 text-2xl">emoji_events</span>
      </div>
      <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center animate-bounce duration-[3000ms] hidden lg:flex">
        <span className="material-icons-outlined text-emerald-500 text-xl">check_circle</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link href="/" className="text-gray-500 hover:text-primary transition">
                Ana Sayfa
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link href="/products" className="text-gray-500 hover:text-primary transition">
                Ürünler
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-primary font-medium">{product.title}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="material-icons text-base">verified</span>
              Profesyonel Eğitim
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight text-gray-900 dark:text-white">
              {product.title}
            </h1>

            <p className="text-lg text-text-muted-light dark:text-text-muted-dark mb-8 leading-relaxed">
              {product.mini_desc || product.description || "Bu eğitim programı ile hedeflerinize ulaşın."}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
                <span className="material-icons text-green-500 text-base">check_circle</span>
                Sertifikalı Eğitim
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
                <span className="material-icons text-green-500 text-base">groups</span>
                Uzman Kadro
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
                <span className="material-icons text-green-500 text-base">schedule</span>
                Esnek Program
              </div>
            </div>

            {/* Price Preview */}
            {lowestPrice !== null && lowestPrice > 0 && (
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-3xl font-bold text-primary">
                  ₺{lowestPrice.toLocaleString("tr-TR")}
                </span>
                <span className="text-gray-500">'den başlayan fiyatlarla</span>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-semibold transition shadow-xl shadow-primary/30 flex items-center justify-center gap-2"
                href="#pricing"
              >
                Fiyatları Gör
                <span className="material-icons-outlined text-sm">arrow_forward</span>
              </a>
              <Link
                href="/contact"
                className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-text-main-light dark:text-text-main-dark hover:border-primary px-8 py-4 rounded-full font-semibold transition flex items-center justify-center gap-2"
              >
                <span className="material-icons text-base">support_agent</span>
                Bilgi Al
              </Link>
            </div>
          </div>

          {/* Visual Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-amber-100/50 dark:from-primary/10 dark:to-amber-900/20 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white dark:bg-surface-dark rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <span className="material-icons text-primary text-3xl">school</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 text-sm">LingEdu Dil</p>
                </div>
              </div>

              {variants.length > 0 && (
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <span className="material-icons text-primary text-xl">category</span>
                    <span>{variants.length} farklı eğitim seçeneği</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <span className="material-icons text-primary text-xl">star</span>
                    <span>Deneyimli eğitmen kadrosu</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                    <span className="material-icons text-primary text-xl">workspace_premium</span>
                    <span>Sertifika imkanı</span>
                  </div>
                </div>
              )}

              <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Toplam öğrenci</span>
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center text-white text-xs font-bold border-2 border-white dark:border-gray-800"
                      >
                        {i}
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 text-xs font-bold border-2 border-white dark:border-gray-800">
                      +
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailHero;
