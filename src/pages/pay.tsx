import Head from "next/head";
import PaymentHeader from "@/components/payment/PaymentHeader";
import PersonalInfo from "@/components/payment/PersonalInfo";
import PaymentMethod from "@/components/payment/PaymentMethod";
import OrderSummary from "@/components/payment/OrderSummary";

export default function Pay() {
  return (
    <>
      <Head>
        <title>Ödeme - LingEdu Dil | Ödemeyi Tamamla</title>
        <meta
          name="description"
          content="Eğitim kaydınızı kesinleştirmek için ödeme sayfası. Güvenli ödeme yöntemleri ile IELTS ve Speaking Club eğitimlerinize kayıt olun."
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
              <OrderSummary />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

