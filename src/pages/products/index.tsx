import Head from "next/head";
import { useEffect, useState } from "react";
import { CourseWithVariants, courseService } from "@/services";
import ProductsList from "@/components/products/ProductsList";

export default function Products() {
  const [products, setProducts] = useState<CourseWithVariants[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        // Fetch all courses with their variants
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
        
        setProducts(coursesWithVariants.filter(Boolean));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Head>
        <title>Eğitim Ürünleri - LingEdu Dil | Tüm Kurslar ve Programlar</title>
        <meta
          name="description"
          content="LingEdu Dil eğitim programlarını keşfedin. IELTS hazırlık, Speaking Club, özel dersler ve daha fazlası. İhtiyacınıza uygun programı seçin."
        />
      </Head>
      <ProductsList products={products} isLoading={isLoading} />
    </>
  );
}
