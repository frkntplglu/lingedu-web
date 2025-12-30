import React from "react";
import Head from "next/head";
import AdminLayout from "@/components/admin/AdminLayout";

const AdminDashboardPage: React.FC = () => {
  // Şimdilik statik/mock sayılar (sadece UI)
  const stats = [
    {
      label: "Toplam Sipariş",
      value: "32",
      icon: "shopping_cart",
      accent: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300",
    },
    {
      label: "Toplam Kurs",
      value: "4",
      icon: "menu_book",
      accent:
        "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-300",
    },
    {
      label: "İletişim Formu",
      value: "18",
      icon: "mail",
      accent:
        "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-300",
    },
    {
      label: "Öğrenci Yorumu",
      value: "9",
      icon: "chat",
      accent:
        "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-300",
    },
  ];

  return (
    <>
      <Head>
        <title>Admin - Yönetim Paneli</title>
      </Head>
      <AdminLayout>
        <div className="mb-6 space-y-1">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Yönetim Paneli
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Siparişler, kurslar ve iletişim trafiğine genel bakış.
          </p>
        </div>

        {/* İstatistik kartları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-4 flex items-center gap-4"
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.accent}`}
              >
                <span className="material-icons-outlined text-lg">
                  {item.icon}
                </span>
              </div>
              <div className="flex-1">
                <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {item.label}
                </div>
                <div className="text-xl font-bold text-gray-900 dark:text-white">
                  {item.value}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* İki kolonlu basit özet */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
                Son Siparişler (UI)
              </h2>
              <span className="text-xs text-primary cursor-pointer">
                Tümünü Gör
              </span>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    Ahmet Yılmaz
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Speaking Club - Akşam Grubu
                  </div>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300">
                  Ödeme Bekliyor
                </span>
              </li>
              <li className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    Elif K.
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    IELTS Özel Ders (1:1)
                  </div>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">
                  Ödendi
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-gray-900 dark:text-white">
                Son İletişim Formları (UI)
              </h2>
              <span className="text-xs text-primary cursor-pointer">
                Tümünü Gör
              </span>
            </div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    IELTS Özel Ders Hakkında Bilgi
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    ahmet@example.com
                  </div>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300">
                  Yanıt Bekliyor
                </span>
              </li>
              <li className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    Speaking Club Seviye ve Saat Bilgisi
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    elif@example.com
                  </div>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">
                  Yanıtlandı
                </span>
              </li>
            </ul>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminDashboardPage;

