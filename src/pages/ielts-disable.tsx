import Head from "next/head";
import IeltsAchievement from "@/components/ielts/IeltsAchievement";
import IeltsContent from "@/components/ielts/IeltsContent";
import WhyIelts from "@/components/ielts/WhyIelts";
import WaitlistForm from "@/components/ielts/WaitlistForm";
import IeltsHero from "@/components/ielts/IeltsHero";

export default function IeltsDisable() {
  return (
    <>
      <Head>
        <title>IELTS Hazırlık - Yer Dolu | LingEdu Dil</title>
        <meta
          name="description"
          content="IELTS hazırlık kursumuz şu anda dolu. Waitlist'e katılın, yer açıldığında size haber verelim. Profesyonel IELTS eğitimi için bekleme listesine eklenin."
        />
      </Head>
      <IeltsHero />
      <IeltsAchievement />
      <IeltsContent />
      <WhyIelts />
      <WaitlistForm />
    </>
  );
}

