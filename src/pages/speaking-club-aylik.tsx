import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CourseWithVariants, courseService } from "@/services";
import HowToWork from "@/components/speaking/HowToWork";
import Pricing from "@/components/speaking/Pricing";
import SpeakingHero from "@/components/speaking/SpeakingHero";
import WhySpeakingClub from "@/components/speaking/WhySpeakingClub";

export default function SpeakingClub() {
  const router = useRouter();
  const [course, setCourse] = useState<CourseWithVariants | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setIsLoading(true);
        // Use the pathname as slug (e.g., "speaking-club")
        const slug = router.pathname.replace('/', '') || 'speaking-club';
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
        <title>Speaking Club - LingEdu Dil | İngilizce Konuşma Pratiği</title>
        <meta
          name="description"
          content="Speaking Club ile İngilizce konuşma pratiği yapın. Grup dersleri, interaktif aktiviteler ve uzman eğitmenlerle akıcı İngilizce konuşmayı öğrenin."
        />
      </Head>
      <SpeakingHero />
      <HowToWork />
      <WhySpeakingClub />
      <Pricing course={course} isLoading={isLoading} />
    </>
  );
}
