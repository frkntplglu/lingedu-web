import React from "react";
import Link from "next/link";
import { CourseWithVariants } from "@/services";

interface ProductCardProps {
  product: CourseWithVariants;
}

const getIconForSlug = (slug: string): string => {
  const iconMap: Record<string, string> = {
    ielts: "description",
    "speaking-club": "record_voice_over",
    "speaking-club-aylik": "record_voice_over",
    "ozel-ders": "person",
    "is-ingilizcesi": "business_center",
    "genel-ingilizce": "menu_book",
    "cocuklar-icin-ingilizce": "child_care",
  };
  return iconMap[slug] || "school";
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const icon = getIconForSlug(product.slug);
  const variants = product.course_variants || [];
  const lowestPrice = variants.length > 0 
    ? Math.min(...variants.map(v => v.price || 0))
    : null;
  const variantCount = variants.length;

  return (
    <Link href={`/products/${product.slug}`}>
      <div className="bg-white dark:bg-card-dark border border-gray-100 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group cursor-pointer h-full flex flex-col">
        {/* Icon */}
        <div className="w-14 h-14 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-6 shadow-sm text-primary text-2xl group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition">
          <span className="material-icons">{icon}</span>
        </div>

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
              <span className="text-gray-400 text-sm">'den başlayan fiyatlarla</span>
            </div>
          )}
          
          <div className="flex items-center justify-between">
            {variantCount > 0 && (
              <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                {variantCount} Farklı Seçenek
              </span>
            )}
            <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              İncele
              <span className="material-icons text-base">arrow_forward</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
