import Head from "next/head";
import { GetServerSideProps } from "next";
import { Testimonial, testimonialService } from "@/services";
import AboutHero from "@/components/about/AboutHero";
import AboutMe from "@/components/about/AboutMe";
import Certifications from "@/components/about/Certifications";
import Testimonials from "@/components/home/Testimonials";

interface AboutPageProps {
  testimonials: Testimonial[];
}

export default function About({ testimonials }: AboutPageProps) {
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
      <Testimonials testimonials={testimonials} isLoading={false} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<AboutPageProps> = async () => {
  try {
    const testimonials = await testimonialService.get();
    return {
      props: {
        testimonials,
      },
    };
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return {
      props: {
        testimonials: [],
      },
    };
  }
};
