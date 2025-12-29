import Head from "next/head";
import Advertising from "@/components/home/Advertising";
import CourseCategories from "@/components/home/CourseCategories";
import Faq from "@/components/home/Faq";
import Hero from "@/components/home/Hero";
import HomeCta from "@/components/home/HomeCta";
import StudentAchievements from "@/components/home/StudentAchievements";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ana Sayfa - IELTSMaster | IELTS Hazırlık ve İngilizce Eğitimleri</title>
        <meta
          name="description"
          content="IELTSMaster ile IELTS sınavına hazırlanın, Speaking Club'a katılın ve özel derslerle İngilizce seviyenizi yükseltin. Modern eğitim metodları ve uzman kadro."
        />
      </Head>
      <Hero />
      <CourseCategories />
      <StudentAchievements />
      <Advertising />
      <Testimonials />
      <Faq />
      <HomeCta />
    </>
  );
}
