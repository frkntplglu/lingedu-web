import React, { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";

interface LegalPageLayoutProps {
  title: string;
  description: string;
  lastUpdated: string;
  children: ReactNode;
}

const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({
  title,
  description,
  lastUpdated,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title} - LingEdu Dil</title>
        <meta name="description" content={description} />
      </Head>
      
      <section className="pt-28 pb-20 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-12 pb-8 border-b border-gray-200 dark:border-gray-700 animate-fade-in">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center gap-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-primary transition">
                    Ana Sayfa
                  </Link>
                </li>
                <li className="text-gray-300 dark:text-gray-600">/</li>
                <li className="text-gray-600 dark:text-gray-400">{title}</li>
              </ol>
            </nav>
            
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {title}
            </h1>
            <p className="text-gray-400 dark:text-gray-500 text-sm flex items-center gap-2">
              <span className="material-icons text-sm">schedule</span>
              Son güncelleme: {lastUpdated}
            </p>
          </header>

          {/* Content */}
          <article className="animate-fade-in-up text-[15px] leading-relaxed text-gray-600 dark:text-gray-400" style={{ animationDelay: '50ms' }}>
            {children}
          </article>

          {/* Footer Navigation */}
          <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link 
                href="/"
                className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-medium transition"
              >
                <span className="material-icons text-lg">arrow_back</span>
                Ana Sayfaya Dön
              </Link>
              
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <Link href="/kullanim-kosullari" className="hover:text-primary transition">Kullanım Koşulları</Link>
                <span className="text-gray-300 dark:text-gray-600">•</span>
                <Link href="/gizlilik-politikasi" className="hover:text-primary transition">Gizlilik</Link>
                <span className="text-gray-300 dark:text-gray-600">•</span>
                <Link href="/kvkk" className="hover:text-primary transition">KVKK</Link>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
};

export default LegalPageLayout;
