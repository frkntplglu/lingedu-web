import Head from "next/head";
import AboutHero from "@/components/about/AboutHero";
import AboutMe from "@/components/about/AboutMe";
import Certifications from "@/components/about/Certifications";
import Testimonials from "@/components/home/Testimonials";

export default function About() {
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
    </>
  );
}
