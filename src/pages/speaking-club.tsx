import Head from "next/head";
import HowToWork from "@/components/speaking/HowToWork";
import Pricing from "@/components/speaking/Pricing";
import SpeakingHero from "@/components/speaking/SpeakingHero";
import WhySpeakingClub from "@/components/speaking/WhySpeakingClub";

export default function SpeakingClub() {
  return (
    <>
      <Head>
        <title>Speaking Club - IELTSMaster | İngilizce Konuşma Pratiği</title>
        <meta
          name="description"
          content="Speaking Club ile İngilizce konuşma pratiği yapın. Grup dersleri, interaktif aktiviteler ve uzman eğitmenlerle akıcı İngilizce konuşmayı öğrenin."
        />
      </Head>
      <SpeakingHero />
      <HowToWork />
      <WhySpeakingClub />
      <Pricing />
    </>
  );
}
