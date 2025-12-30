import Head from "next/head";
import ContactForm from "@/components/contact/ContactForm";
import ContactHeader from "@/components/contact/ContactHeader";

export default function Contact() {
  return (
    <>
      <Head>
        <title>İletişim - LingEdu Dil | Bize Ulaşın</title>
        <meta
          name="description"
          content="LingEdu Dil ile iletişime geçin. Sorularınız için formu doldurun veya telefon, e-posta ve sosyal medya hesaplarımızdan bize ulaşın."
        />
      </Head>
      <ContactHeader />
      <ContactForm />
    </>
  );
}
