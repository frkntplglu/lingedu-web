import Head from "next/head";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { CourseWithVariants, courseService } from "@/services";
import ProductDetailHero from "@/components/products/ProductDetailHero";
import ProductVariants from "@/components/products/ProductVariants";
import ProductDetails from "@/components/products/ProductDetails";

interface ProductPageProps {
  product: CourseWithVariants | null;
  error?: string;
}

export default function ProductDetail({ product, error }: ProductPageProps) {
  const router = useRouter();
  console.log("product : ", product)
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">{error || 'The requested course could not be found.'}</p>
          <a href="/products" className="text-primary hover:underline">
            ← Back to Courses
          </a>
        </div>
      </div>
    );
  }

  const pageTitle = product.title
    ? `${product.title} - LingEdu Dil | Eğitim Programı`
    : "Eğitim Detayı - LingEdu Dil";

  const pageDescription = product.mini_desc || product.description
    ? `${product.mini_desc || product.description?.substring(0, 155)}...`
    : "LingEdu Dil eğitim programı detayları. Profesyonel dil eğitimi ile hedeflerinize ulaşın.";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="product" />
      </Head>
      <ProductDetailHero product={product} isLoading={false} />
      <>
        <ProductVariants
          variants={product.course_variants}
          isLoading={false}
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
    </>
  );
}

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async (context) => {
  const { slug } = context.params || {};

  if (!slug || typeof slug !== 'string') {
    return {
      props: {
        product: null,
        error: 'Invalid slug',
      },
    };
  }

  try {
    const product = await courseService.getBySlug(slug);
    return {
      props: {
        product,
      },
    };
  } catch (error) {
    return {
      props: {
        product: null,
        error: error instanceof Error ? error.message : 'Failed to fetch product',
      },
    };
  }
};
