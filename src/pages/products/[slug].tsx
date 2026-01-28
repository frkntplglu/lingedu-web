import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CourseWithVariants, courseService } from "@/services";
import ProductDetailHero from "@/components/products/ProductDetailHero";
import ProductVariants from "@/components/products/ProductVariants";
import ProductDetails from "@/components/products/ProductDetails";

export default function ProductDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const [product, setProduct] = useState<CourseWithVariants | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!slug || typeof slug !== "string") return;
      
      try {
        setIsLoading(true);
        const productData = await courseService.getBySlug(slug);
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      } finally {
        setIsLoading(false);
      }
    };

    if (router.isReady) {
      fetchProduct();
    }
  }, [router.isReady, slug]);

  const pageTitle = product?.title 
    ? `${product.title} - LingEdu Dil | Eğitim Programı`
    : "Eğitim Detayı - LingEdu Dil";
  
  const pageDescription = product?.mini_desc || product?.description
    ? `${product.mini_desc || product.description?.substring(0, 155)}...`
    : "LingEdu Dil eğitim programı detayları. Profesyonel dil eğitimi ile hedeflerinize ulaşın.";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        {product && (
          <>
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:type" content="product" />
          </>
        )}
      </Head>
      <ProductDetailHero product={product} isLoading={isLoading} />
      {product && (
        <>
          <ProductVariants 
            variants={product.course_variants} 
            isLoading={isLoading} 
          />
          
          {/* Tabbed Program Details Section */}
          <ProductDetails product={product} />
          
          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-br from-primary to-primary/80">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Hemen Başlamaya Hazır mısınız?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                {product.title} eğitimine katılın ve dil öğrenme yolculuğunuzda bir adım öne geçin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#pricing"
                  className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition shadow-xl flex items-center justify-center gap-2"
                >
                  Kayıt Ol
                  <span className="material-icons text-base">arrow_upward</span>
                </a>
                <a
                  href="/contact"
                  className="bg-white/10 text-white border border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition flex items-center justify-center gap-2"
                >
                  <span className="material-icons text-base">phone</span>
                  Bize Ulaşın
                </a>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
