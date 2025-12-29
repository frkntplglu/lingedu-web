import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout = ({ children, title, description }: LayoutProps) => {
  const defaultTitle = "IELTSMaster - IELTS Hazırlık ve İngilizce Eğitimleri";
  const defaultDescription =
    "Modern eğitim metodları ve uzman kadro ile dil öğrenim yolculuğunuzda yanınızdayız. IELTS hazırlık, Speaking Club ve özel dersler.";

  return (
    <>
      <Head>
        <title>{title || defaultTitle}</title>
        <meta name="description" content={description || defaultDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
