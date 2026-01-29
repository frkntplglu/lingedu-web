import React from "react";
import Link from "next/link";
import { CourseWithVariants } from "@/services";

interface ProductCardProps {
  product: CourseWithVariants;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const variants = product.course_variants || [];
  const lowestPrice = variants.length > 0
    ? Math.min(...variants.map(v => v.price || 0))
    : null;
  const variantCount = variants.length;

  return (
    <Link href={`/products/${product.slug}`}>
      <div className="bg-white dark:bg-card-dark border border-gray-100 dark:border-gray-700 rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group cursor-pointer h-full flex flex-col">
        {/* Image */}
        <div className="relative h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden">
          {product.image_url ? (
            <img
              src={product.image_url}
              alt={product.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10 p-8">
              <img
                src="/logo.png"
                alt="LingEdu"
                className="w-24 h-24 object-contain opacity-40"
              />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition">
            {product.title}
          </h3>

          {/* Description */}
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 flex-1 line-clamp-3">
            {product.mini_desc || product.description || "Bu eğitim programı hakkında detaylı bilgi için tıklayın."}
          </p>

          {/* Price & Variants Info */}
          <div className="space-y-3">
            {lowestPrice !== null && lowestPrice > 0 && (
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-primary">
                  ₺{lowestPrice.toLocaleString("tr-TR")}
                </span>
                <span className="text-gray-400 text-sm">'den başlayan</span>
              </div>
            )}

            <div className="flex items-center justify-between">
              {variantCount > 0 && (
                <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {variantCount} Seçenek
                </span>
              )}
              <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                İncele
                <span className="material-icons text-base">arrow_forward</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
