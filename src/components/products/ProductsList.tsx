import React from "react";
import Link from "next/link";
import { CourseWithVariants } from "@/services";
import ProductCard from "./ProductCard";

interface ProductsListProps {
  products: CourseWithVariants[];
  isLoading?: boolean;
}

const ProductsListSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <div
        key={i}
        className="bg-white dark:bg-card-dark border border-gray-100 dark:border-gray-700 rounded-2xl p-8 animate-pulse"
        style={{ animationDelay: `${i * 100}ms` }}
      >
        <div className="w-14 h-14 bg-gray-200 dark:bg-gray-700 rounded-xl mb-6"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-lg w-3/4 mb-3"></div>
        <div className="space-y-2 mb-6">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-lg w-full"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-lg w-5/6"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-lg w-2/3"></div>
        </div>
        <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-lg w-1/3 mb-3"></div>
        <div className="flex justify-between items-center">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-28"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
        </div>
      </div>
    ))}
  </div>
);

const ProductsList: React.FC<ProductsListProps> = ({ products, isLoading }) => {
  return (
    <section className="pt-28 pb-20 bg-gray-50 dark:bg-background-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="animate-fade-in">
            <nav className="mb-3">
              <ol className="flex items-center gap-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-primary transition">
                    Ana Sayfa
                  </Link>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-primary font-medium">Ürünler</li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
              Eğitim <span className="text-primary">Ürünleri</span>
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              İhtiyacınıza uygun programı seçin ve dil öğrenme yolculuğunuza başlayın.
            </p>
          </div>
          
          {/* Stats badges */}
          {!isLoading && products.length > 0 && (
            <div className="flex gap-3 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="flex items-center gap-2 text-sm bg-white dark:bg-card-dark px-4 py-2 rounded-full border border-gray-100 dark:border-gray-700 shadow-sm">
                <span className="material-icons text-primary text-lg">inventory_2</span>
                <span className="text-gray-700 dark:text-gray-300 font-medium">{products.length} Program</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-sm bg-white dark:bg-card-dark px-4 py-2 rounded-full border border-gray-100 dark:border-gray-700 shadow-sm">
                <span className="material-icons text-green-500 text-lg">verified</span>
                <span className="text-gray-700 dark:text-gray-300 font-medium">Sertifikalı</span>
              </div>
            </div>
          )}
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <ProductsListSkeleton />
        ) : products.length === 0 ? (
          <div className="text-center py-20 animate-fade-in">
            <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-icons text-4xl text-gray-400">inventory_2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
              Henüz ürün bulunmuyor
            </h3>
            <p className="text-gray-500 dark:text-gray-500 mb-6">
              Yakında yeni eğitim programları eklenecek.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              <span className="material-icons text-base">arrow_back</span>
              Ana Sayfaya Dön
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsList;
