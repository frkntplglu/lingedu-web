import React from "react";
import { CourseVariant, CourseWithVariants } from "@/services";

interface OrderSummaryProps {
  course?: CourseWithVariants;
  variant?: CourseVariant;
  subtotal?: number;
  vat?: number;
  total?: number;
}

const OrderSummary = ({ course, variant, subtotal = 0, vat = 0, total = 0 }: OrderSummaryProps) => {
  if (!course || !variant) {
    return (
      <div className="bg-card-light dark:bg-card-dark p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 h-fit">
        <p className="text-center text-text-muted-light dark:text-text-muted-dark">
          Loading order details...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card-light dark:bg-card-dark p-6 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 h-fit">
      <h3 className="text-xl font-bold mb-6 text-text-main-light dark:text-text-main-dark">
        Sipariş Özeti
      </h3>

      {/* Course Item */}
      <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
        <div className="w-16 h-16 bg-accent-light dark:bg-accent-light/20 rounded-xl flex items-center justify-center flex-shrink-0">
          <span className="material-icons-outlined text-primary text-3xl">
            menu_book
          </span>
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-text-main-light dark:text-text-main-dark mb-1">
            {course.title}
          </h4>
          <p className="text-sm font-semibold text-primary mb-1">
            {variant.title}
          </p>
          {variant.capacity && (
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
              {variant.capacity} kişilik sınıf
            </p>
          )}
          {variant.start_date && (
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
              Başlangıç: {new Date(variant.start_date).toLocaleDateString('tr-TR')}
            </p>
          )}
          <p className="text-lg font-bold text-primary mt-2">
            ₺{subtotal.toLocaleString("tr-TR", { minimumFractionDigits: 2 })}
          </p>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-text-muted-light dark:text-text-muted-dark">
            Ara Toplam
          </span>
          <span className="text-text-main-light dark:text-text-main-dark font-medium">
            ₺{subtotal.toLocaleString("tr-TR", { minimumFractionDigits: 2 })}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-text-muted-light dark:text-text-muted-dark">
            KDV (%20)
          </span>
          <span className="text-text-main-light dark:text-text-main-dark font-medium">
            ₺{vat.toLocaleString("tr-TR", { minimumFractionDigits: 2 })}
          </span>
        </div>
        <div className="flex justify-between text-lg font-bold pt-3 border-t border-gray-200 dark:border-gray-700">
          <span className="text-text-main-light dark:text-text-main-dark">
            Toplam Tutar
          </span>
          <span className="text-text-main-light dark:text-text-main-dark">
            ₺{total.toLocaleString("tr-TR", { minimumFractionDigits: 2 })}
          </span>
        </div>
      </div>

      {/* Complete Payment Button */}
      <button
        className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-purple-200 dark:shadow-none flex items-center justify-center gap-2 group mb-4"
        type="submit"
      >
        Ödemeyi Tamamla
        <span className="material-icons-outlined group-hover:translate-x-1 transition-transform">
          arrow_forward
        </span>
      </button>

      {/* Legal Text */}
      <p className="text-xs text-text-muted-light dark:text-text-muted-dark text-center mb-6">
        "Ödemeyi Tamamla" butonuna tıklayarak{" "}
        <a href="#" className="text-primary hover:underline">
          Mesafeli Satış Sözleşmesi
        </a>
        'ni kabul etmiş olursunuz.
      </p>

      {/* Security and Payment Logos */}
      <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2 text-text-muted-light dark:text-text-muted-dark text-xs">
          <span className="material-icons-outlined text-sm">check_circle</span>
          <span>Secure</span>
        </div>
        <div className="flex items-center gap-3 text-text-muted-light dark:text-text-muted-dark text-xs">
          <span className="font-semibold">VISA</span>
          <span className="font-semibold">Mastercard</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;

