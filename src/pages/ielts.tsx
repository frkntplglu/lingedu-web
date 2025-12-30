import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CourseWithVariants, courseService } from "@/services";
import IeltsAchievement from "@/components/ielts/IeltsAchievement";
import IeltsBuy from "@/components/ielts/IeltsBuy";
import IeltsContent from "@/components/ielts/IeltsContent";
import IeltsHero from "@/components/ielts/IeltsHero";
import WhyIelts from "@/components/ielts/WhyIelts";

export default function Ielts() {
  const router = useRouter();
  const [course, setCourse] = useState<CourseWithVariants | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setIsLoading(true);
        // Use the pathname as slug (e.g., "ielts")
        const slug = router.pathname.replace('/', '') || 'ielts';
        const courseData = await courseService.getBySlug(slug);
        setCourse(courseData);
      } catch (error) {
        console.error("Error fetching course:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (router.isReady) {
      fetchCourse();
    }
  }, [router.isReady, router.pathname]);

  return (
    <>
      <Head>
        <title>IELTS Hazırlık - LingEdu Dil | Profesyonel IELTS Eğitimi</title>
        <meta
          name="description"
          content="IELTS sınavına profesyonel hazırlık. Uzman eğitmenlerle IELTS eğitimi alın, hedeflediğiniz band skoruna ulaşın. Detaylı içerik ve pratik testler."
        />
      </Head>
      <IeltsHero />
      <IeltsAchievement />
      <IeltsContent />
      <WhyIelts />
      <IeltsBuy course={course} isLoading={isLoading} />
    </>
  );
}
