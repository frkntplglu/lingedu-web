import Head from "next/head";
import Link from "next/link";

export default function PaymentFailed() {
  return (
    <>
      <Head>
        <title>Ödeme Başarısız - LingEdu Dil</title>
        <meta
          name="description"
          content="Ödeme işlemi başarısız oldu. Lütfen tekrar deneyin veya farklı bir ödeme yöntemi seçin."
        />
      </Head>
      <section className="min-h-screen flex items-center justify-center bg-surface-light dark:bg-surface-dark py-12 px-4">
        <div className="max-w-md w-full">
          {/* Failed Card */}
          <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 p-8 text-center">
            {/* Failed Icon */}
            <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-icons text-red-500 dark:text-red-400 text-5xl">
                cancel
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-bold text-text-main-light dark:text-text-main-dark mb-3">
              Ödeme Başarısız
            </h1>

            {/* Message */}
            <p className="text-text-muted-light dark:text-text-muted-dark mb-8">
              Üzgünüz, ödeme işleminiz tamamlanamadı. Lütfen bilgilerinizi kontrol edip tekrar deneyin.
            </p>

            {/* Possible Reasons */}
            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-6 mb-8 text-left">
              <p className="text-sm font-semibold text-text-main-light dark:text-text-main-dark mb-4">
                Olası nedenler:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="material-icons text-red-500 dark:text-red-400 text-lg mt-0.5">
                    error
                  </span>
                  <span className="text-sm text-text-muted-light dark:text-text-muted-dark">
                    Yetersiz bakiye
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-icons text-red-500 dark:text-red-400 text-lg mt-0.5">
                    error
                  </span>
                  <span className="text-sm text-text-muted-light dark:text-text-muted-dark">
                    Kart bilgileri hatalı
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-icons text-red-500 dark:text-red-400 text-lg mt-0.5">
                    error
                  </span>
                  <span className="text-sm text-text-muted-light dark:text-text-muted-dark">
                    İnternet bağlantı sorunu
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-icons text-red-500 dark:text-red-400 text-lg mt-0.5">
                    error
                  </span>
                  <span className="text-sm text-text-muted-light dark:text-text-muted-dark">
                    Banka reddetti
                  </span>
                </li>
              </ul>
            </div>

            {/* Help Box */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="material-icons text-yellow-600 dark:text-yellow-400 text-xl mt-0.5">
                  contact_support
                </span>
                <div className="text-left">
                  <p className="text-sm font-medium text-yellow-900 dark:text-yellow-100 mb-1">
                    Yardıma mı ihtiyacınız var?
                  </p>
                  <p className="text-xs text-yellow-700 dark:text-yellow-300">
                    Sorun yaşarsanız destek ekibimizle iletişime geçebilirsiniz.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => window.history.back()}
                className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 group"
              >
                <span className="material-icons text-lg">refresh</span>
                Tekrar Dene
                <span className="material-icons group-hover:rotate-180 transition-transform">
                  replay
                </span>
              </button>
              <Link
                href="/products"
                className="w-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-text-main-light dark:text-text-main-dark font-semibold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <span className="material-icons text-lg">shopping_cart</span>
                Ürünlere Dön
              </Link>
            </div>
          </div>

          {/* Contact Support */}
          <div className="text-center mt-6">
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-2">
              Hala sorun mu yaşıyorsunuz?
            </p>
            <Link
              href="/contact"
              className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
            >
              <span className="material-icons text-base">phone</span>
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
