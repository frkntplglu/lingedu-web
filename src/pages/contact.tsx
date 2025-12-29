import Head from "next/head";
import ContactForm from "@/components/contact/ContactForm";
import ContactHeader from "@/components/contact/ContactHeader";

export default function Contact() {
  return (
    <>
      <Head>
        <title>İletişim - IELTSMaster | Bize Ulaşın</title>
        <meta
          name="description"
          content="IELTSMaster ile iletişime geçin. Sorularınız için formu doldurun veya telefon, e-posta ve sosyal medya hesaplarımızdan bize ulaşın."
        />
      </Head>
      <ContactHeader />
      <ContactForm />
    </>
  );
}
