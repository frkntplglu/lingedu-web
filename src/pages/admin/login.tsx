import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const AdminLoginPage: React.FC = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Şimdilik sadece UI: başarılı varsayıp FAQ sayfasına yönlendiriyoruz
    router.push("/admin/faqs");
  };

  return (
    <>
      <Head>
        <title>Admin Giriş - LingEdu Dil</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-surface-light dark:bg-surface-dark px-4">
        <div className="max-w-md w-full bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 p-8 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Admin Paneli
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Yönetim paneline erişmek için giriş yapın.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                E-posta
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-gray-900 dark:text-white"
                placeholder="admin@LingEdu Dil.com"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Şifre
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-gray-900 dark:text-white"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold text-sm shadow-lg shadow-primary/30 transition"
            >
              Giriş Yap
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLoginPage;


