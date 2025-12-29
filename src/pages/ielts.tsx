import Head from "next/head";
import IeltsAchievement from "@/components/ielts/IeltsAchievement";
import IeltsBuy from "@/components/ielts/IeltsBuy";
import IeltsContent from "@/components/ielts/IeltsContent";
import IeltsHero from "@/components/ielts/IeltsHero";
import WhyIelts from "@/components/ielts/WhyIelts";

export default function Ielts() {
  return (
    <>
      <Head>
        <title>IELTS Hazırlık - IELTSMaster | Profesyonel IELTS Eğitimi</title>
        <meta
          name="description"
          content="IELTS sınavına profesyonel hazırlık. Uzman eğitmenlerle IELTS eğitimi alın, hedeflediğiniz band skoruna ulaşın. Detaylı içerik ve pratik testler."
        />
      </Head>
      <IeltsHero />
      <IeltsAchievement />
      <IeltsContent />
      <WhyIelts />
      <IeltsBuy />
    </>
  );
}
