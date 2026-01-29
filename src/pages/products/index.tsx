import Head from "next/head";
import { GetServerSideProps } from "next";
import { CourseWithVariants, courseService } from "@/services";
import ProductsList from "@/components/products/ProductsList";

interface ProductsPageProps {
  products: CourseWithVariants[];
  error?: string;
}

export default function Products({ products, error }: ProductsPageProps) {
  return (
    <>
      <Head>
        <title>Eğitim Ürünleri - LingEdu Dil | Tüm Kurslar ve Programlar</title>
        <meta
          name="description"
          content="LingEdu Dil eğitim programlarını keşfedin. IELTS hazırlık, Speaking Club, özel dersler ve daha fazlası. İhtiyacınıza uygun programı seçin."
        />
      </Head>
      <ProductsList products={products || []} isLoading={false} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps<ProductsPageProps> = async () => {
  try {
    // Fetch all courses
    const courses = await courseService.get();

    // Fetch variants for each course
    const coursesWithVariants = await Promise.all(
      courses.map(async (course) => {
        try {
          const courseWithVariants = await courseService.getBySlug(course.slug);
          return courseWithVariants;
        } catch {
          return { ...course, course_variants: [] };
        }
      })
    );

    const products = coursesWithVariants.filter(Boolean);

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    return {
      props: {
        products: [],
        error: error instanceof Error ? error.message : 'Failed to fetch products',
      },
    };
  }
};
