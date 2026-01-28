import Head from "next/head";
import { useEffect, useState } from "react";
import { Testimonial, testimonialService } from "@/services";
import AboutHero from "@/components/about/AboutHero";
import AboutMe from "@/components/about/AboutMe";
import Certifications from "@/components/about/Certifications";
import Testimonials from "@/components/home/Testimonials";

export default function About() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setIsLoading(true);
        const data = await testimonialService.get();
        setTestimonials(data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <>
      <Head>
        <title>Hakkımızda - LingEdu Dil | Eğitmenler ve Misyonumuz</title>
        <meta
          name="description"
          content="LingEdu Dil hakkında bilgi edinin. Uzman eğitmen kadromuz, eğitim metodlarımız ve başarı hikayelerimiz. Modern eğitim anlayışıyla yanınızdayız."
        />
      </Head>
      <AboutHero />
      <AboutMe />
      <Certifications />
      <Testimonials testimonials={testimonials} isLoading={isLoading} />
    </>
  );
}
