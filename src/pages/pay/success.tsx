import Head from "next/head";
import Link from "next/link";

export default function PaymentSuccess() {
  return (
    <>
      <Head>
        <title>Ödeme Başarılı - LingEdu Dil</title>
        <meta
          name="description"
          content="Ödemeniz başarıyla alındı. Eğitim journey'nize başlayabilirsiniz!"
        />
      </Head>
      <section className="min-h-screen flex items-center justify-center bg-surface-light dark:bg-surface-dark py-12 px-4">
        <div className="max-w-md w-full">
          {/* Success Card */}
          <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800 p-8 text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-icons text-green-500 dark:text-green-400 text-5xl">
                check_circle
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl font-bold text-text-main-light dark:text-text-main-dark mb-3">
              Ödeme Başarılı!
            </h1>

            {/* Message */}
            <p className="text-text-muted-light dark:text-text-muted-dark mb-8">
              Eğitim kaydınız başarıyla tamamlandı. En kısa sürede e-posta adresinize detaylı bilgi gönderilecektir.
            </p>

            {/* Order Details */}
            <div className="bg-accent-light dark:bg-accent-light/20 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-text-muted-light dark:text-text-muted-dark">
                  Sipariş Numarası
                </span>
                <span className="font-mono font-bold text-text-main-light dark:text-text-main-dark">
                  #LD-12345
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-muted-light dark:text-text-muted-dark">
                  Tarih
                </span>
                <span className="font-medium text-text-main-light dark:text-text-main-dark">
                  {new Date().toLocaleDateString('tr-TR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="material-icons text-blue-500 dark:text-blue-400 text-xl mt-0.5">
                  info
                </span>
                <div className="text-left">
                  <p className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-1">
                    Ne yapmalısınız?
                  </p>
                  <p className="text-xs text-blue-700 dark:text-blue-300">
                    Eğitim başlangıç tarihinden önce size giriş bilgileri ve ders programı gönderilecektir.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link
                href="/products"
                className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 group"
              >
                <span className="material-icons text-lg">school</span>
                Diğer Eğitimler
                <span className="material-icons group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/"
                className="w-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-text-main-light dark:text-text-main-dark font-semibold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <span className="material-icons text-lg">home</span>
                Ana Sayfaya Dön
              </Link>
            </div>
          </div>

          {/* Contact Support */}
          <div className="text-center mt-6">
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark mb-2">
              Sorularınız mı var?
            </p>
            <Link
              href="/contact"
              className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
            >
              <span className="material-icons text-base">support_agent</span>
              Destek Ekibiyle İletişime Geçin
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
