import Head from "next/head";
import { GetServerSideProps } from "next";
import { FAQ, FAQCategory, Testimonial, faqService, testimonialService } from "@/services";
import Advertising from "@/components/home/Advertising";
import CourseCategories from "@/components/home/CourseCategories";
import Faq from "@/components/home/Faq";
import Hero from "@/components/home/Hero";
import HomeCta from "@/components/home/HomeCta";
import StudentAchievements from "@/components/home/StudentAchievements";
import Testimonials from "@/components/home/Testimonials";

interface HomePageProps {
  testimonials: Testimonial[];
  faqs: FAQ[];
  faqCategories: FAQCategory[];
}

export default function Home({ testimonials, faqs, faqCategories }: HomePageProps) {
  return (
    <>
      <Head>
        <title>Ana Sayfa - LingEdu Dil | IELTS Hazırlık ve İngilizce Eğitimleri</title>
        <meta
          name="description"
          content="LingEdu Dil ile IELTS sınavına hazırlanın, Speaking Club'a katılın ve özel derslerle İngilizce seviyenizi yükseltin. Modern eğitim metodları ve uzman kadro."
        />
      </Head>
      <Hero />
      <CourseCategories />
      <StudentAchievements />
      <Testimonials testimonials={testimonials} isLoading={false} />
      <Advertising />
      <Faq faqs={faqs} categories={faqCategories} isLoading={false} />
      <HomeCta />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  try {
    const [testimonialsData, faqsData, categoriesData] = await Promise.all([
      testimonialService.get(),
      faqService.get(),
      faqService.getCategories(),
    ]);

    return {
      props: {
        testimonials: testimonialsData,
        faqs: faqsData,
        faqCategories: categoriesData,
      },
    };
  } catch (error) {
    console.error("Error fetching home page data:", error);
    return {
      props: {
        testimonials: [],
        faqs: [],
        faqCategories: [],
      },
    };
  }
};
