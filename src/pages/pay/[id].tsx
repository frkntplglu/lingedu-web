import Head from "next/head";
import { GetServerSideProps } from "next";
import { CourseVariant, CourseWithVariants, courseService } from "@/services";
import PaymentHeader from "@/components/payment/PaymentHeader";
import PersonalInfo from "@/components/payment/PersonalInfo";
import PaymentMethod from "@/components/payment/PaymentMethod";
import OrderSummary from "@/components/payment/OrderSummary";

interface PayPageProps {
  variant: CourseVariant | null;
  course: CourseWithVariants | null;
  error?: string;
}

export default function Pay({ variant, course, error }: PayPageProps) {
  if (error || !variant || !course) {
    return (
      <>
        <Head>
          <title>Ürün Bulunamadı - LingEdu Dil</title>
        </Head>
        <section className="min-h-screen flex items-center justify-center bg-surface-light dark:bg-surface-dark">
          <div className="text-center px-4">
            <span className="material-icons text-6xl text-gray-300 dark:text-gray-600 mb-4">
              error_outline
            </span>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Ürün Bulunamadı
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {error || 'Seçtiğiniz ürün bulunamadı veya kaldırılmış.'}
            </p>
            <a
              href="/products"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full font-semibold transition"
            >
              <span className="material-icons text-base">shopping_cart</span>
              Ürünlere Dön
            </a>
          </div>
        </section>
      </>
    );
  }

  const subtotal = Number(variant.price) || 0;
  const vat = subtotal * 0.20;
  const total = subtotal + vat;

  return (
    <>
      <Head>
        <title>Ödeme - LingEdu Dil | {variant.title}</title>
        <meta
          name="description"
          content={`${course.title} - ${variant.title} eğitimi için ödeme sayfası.`}
        />
      </Head>
      <section className="bg-surface-light dark:bg-surface-dark min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <PaymentHeader />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Form */}
            <div className="lg:col-span-2">
              <div className="bg-card-light dark:bg-card-dark p-8 rounded-2xl shadow-soft border border-gray-100 dark:border-gray-800">
                <form className="space-y-8">
                  <PersonalInfo />
                  <PaymentMethod />
                </form>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <OrderSummary
                course={course}
                variant={variant}
                subtotal={subtotal}
                vat={vat}
                total={total}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<PayPageProps> = async (context) => {
  const { id } = context.params || {};

  if (!id || typeof id !== 'string') {
    return {
      props: {
        variant: null,
        course: null,
        error: 'Geçersiz ürün ID',
      },
    };
  }

  try {
    // Fetch variant by ID
    const variant = await courseService.getVariantById(id);

    // Fetch course with variants by ID
    const course = await courseService.getByIdWithVariants(variant.course_id);

    return {
      props: {
        variant,
        course,
      },
    };
  } catch (error) {
    return {
      props: {
        variant: null,
        course: null,
        error: error instanceof Error ? error.message : 'Failed to fetch product',
      },
    };
  }
};
