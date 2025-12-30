import Head from "next/head";
import { useEffect, useState } from "react";
import { FAQ, FAQCategory, Testimonial, faqService, testimonialService } from "@/services";
import Advertising from "@/components/home/Advertising";
import CourseCategories from "@/components/home/CourseCategories";
import Faq from "@/components/home/Faq";
import Hero from "@/components/home/Hero";
import HomeCta from "@/components/home/HomeCta";
import StudentAchievements from "@/components/home/StudentAchievements";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [faqCategories, setFaqCategories] = useState<FAQCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [testimonialsData, faqsData, categoriesData] = await Promise.all([
          testimonialService.get(),
          faqService.get(),
          faqService.getCategories(),
        ]);
        setTestimonials(testimonialsData);
        setFaqs(faqsData);
        setFaqCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

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
      <Advertising />
      <Testimonials testimonials={testimonials} isLoading={isLoading} />
      <Faq faqs={faqs} categories={faqCategories} isLoading={isLoading} />
      <HomeCta />
    </>
  );
}
