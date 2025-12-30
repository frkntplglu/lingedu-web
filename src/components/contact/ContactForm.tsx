import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { contactFormService } from "@/services";

const ContactForm = () => {
  const validationSchema = Yup.object({
    fullname: Yup.string()
      .required("Adınız soyadınız zorunludur")
      .min(2, "Adınız en az 2 karakter olmalıdır"),
    email: Yup.string()
      .required("E-posta adresi zorunludur")
      .email("Geçerli bir e-posta adresi giriniz")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Geçerli bir e-posta adresi giriniz"
      ),
    subject: Yup.string().required("Konu seçimi zorunludur"),
    message: Yup.string()
      .required("Mesajınız zorunludur")
      .min(10, "Mesajınız en az 10 karakter olmalıdır"),
    terms_accepted: Yup.boolean()
      .required("KVKK aydınlatma metnini kabul etmelisiniz")
      .oneOf([true], "KVKK aydınlatma metnini kabul etmelisiniz"),
  });

  const initialValues = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
    terms_accepted: false,
  };

  const handleSubmit = async (
    values: typeof initialValues,
    { setStatus, setSubmitting }: { setStatus: (status: string | null) => void; setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      await contactFormService.post({
        fullname: values.fullname,
        email: values.email,
        subject: values.subject,
        message: values.message,
      });
      setStatus("submitted");
    } catch (error: any) {
      // Log detailed error for debugging
      console.error("Contact form submission error:", {
        error,
        message: error?.message,
        stack: error?.stack,
        response: error?.response,
        values: {
          fullname: values.fullname,
          email: values.email,
          subject: values.subject,
        },
      });
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-card-light dark:bg-card-dark p-8 rounded-2xl border border-gray-100 dark:border-gray-800 h-full">
            <h3 className="text-2xl font-bold mb-6">İletişim Bilgileri</h3>
            <p className="text-muted-light dark:text-muted-dark mb-8">
              Aşağıdaki kanallardan bana doğrudan ulaşabilir veya sosyal medya
              hesaplarımı takip edebilirsiniz.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                  <span className="material-icons-outlined">phone_iphone</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Telegram</h4>
                  <p className="text-muted-light dark:text-muted-dark text-sm mb-1">
                    Hafta içi 09:00 - 18:00
                  </p>
                  <a
                    className="text-lg font-medium hover:text-primary transition-colors"
                    href="tel:+905551234567"
                  >
                    @lingedudil
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                  <span className="material-icons-outlined">email</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">E-posta</h4>
                  <p className="text-muted-light dark:text-muted-dark text-sm mb-1">
                    Her zaman yazabilirsiniz
                  </p>
                  <a
                    className="text-lg font-medium hover:text-blue-600 transition-colors"
                    href="mailto:hello@brightmind.com"
                  >
                    info@lingedudil.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center text-green-600 flex-shrink-0">
                  <span className="material-icons-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Ofis</h4>
                  <p className="text-muted-light dark:text-muted-dark text-lg">
                    Düzce, Türkiye     
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h4 className="font-bold mb-4">Sosyal Medya</h4>
              <div className="flex gap-4">
                <a
                  className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-600 dark:text-gray-300"
                  href="#"
                >
                  <span className="material-icons text-xl">x</span>
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-600 dark:text-gray-300"
                  href="#"
                >
                  <span className="material-icons text-xl">instagram_icon</span>
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-600 dark:text-gray-300"
                  href="#"
                >
                  <span className="material-icons-outlined text-xl">youtube</span>
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-white dark:bg-gray-700 shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-all text-gray-600 dark:text-gray-300"
                  href="#"
                >
                  <span className="material-icons-outlined text-xl">play_circle</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-2xl shadow-xl shadow-purple-100 dark:shadow-none border border-gray-100 dark:border-gray-700">
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-2">Mesaj Gönderin</h3>
              <p className="text-muted-light dark:text-muted-dark">
                Formu doldurun, en kısa sürede size dönüş yapalım.
              </p>
            </div>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              initialStatus={null}
            >
              {({ errors, touched, isSubmitting, status, setStatus, resetForm }) => {
                if (status === "submitted") {
                  return (
                    <div className="text-center py-10">
                      <span className="material-icons-outlined text-green-500 text-6xl mb-4">
                        check_circle
                      </span>
                      <h3 className="text-2xl font-bold text-text-main-light dark:text-text-main-dark mb-3">
                        Mesajınız Gönderildi!
                      </h3>
                      <p className="text-text-muted-light dark:text-text-muted-dark mb-6">
                        Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
                      </p>
                      <button
                        onClick={() => {
                          setStatus(null);
                          resetForm();
                        }}
                        className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full font-semibold transition"
                      >
                        Yeni Mesaj Gönder
                      </button>
                    </div>
                  );
                }

                return (
                  <Form className="space-y-6">
                    {status === "error" && (
                      <div className="bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 text-red-800 dark:text-red-200 px-4 py-3 rounded-xl relative" role="alert">
                        <strong className="font-bold">Hata!</strong>
                        <span className="block sm:inline"> Form gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          className="block text-sm font-semibold mb-2 ml-1"
                          htmlFor="fullname"
                        >
                          Adınız Soyadınız
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="material-icons-outlined text-gray-400">
                              person
                            </span>
                          </div>
                          <Field
                            name="fullname"
                            className={`w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white ${
                              errors.fullname && touched.fullname
                                ? "border-red-500 dark:border-red-500"
                                : "border-gray-200 dark:border-gray-700"
                            }`}
                            placeholder="Örn: Ahmet Yılmaz"
                            type="text"
                          />
                        </div>
                        <ErrorMessage
                          name="fullname"
                          component="div"
                          className="text-red-500 text-sm mt-1 ml-1"
                        />
                      </div>

                      <div>
                        <label
                          className="block text-sm font-semibold mb-2 ml-1"
                          htmlFor="email"
                        >
                          E-posta Adresiniz
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="material-icons-outlined text-gray-400">
                              alternate_email
                            </span>
                          </div>
                          <Field
                            name="email"
                            className={`w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white ${
                              errors.email && touched.email
                                ? "border-red-500 dark:border-red-500"
                                : "border-gray-200 dark:border-gray-700"
                            }`}
                            placeholder="ornek@email.com"
                            type="email"
                          />
                        </div>
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-500 text-sm mt-1 ml-1"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-sm font-semibold mb-2 ml-1"
                        htmlFor="subject"
                      >
                        Konu
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="material-icons-outlined text-gray-400">
                            topic
                          </span>
                        </div>
                        <Field
                          as="select"
                          name="subject"
                          className={`w-full pl-10 pr-10 py-3 bg-gray-50 dark:bg-gray-900 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white appearance-none ${
                            errors.subject && touched.subject
                              ? "border-red-500 dark:border-red-500"
                              : "border-gray-200 dark:border-gray-700"
                          }`}
                        >
                          <option value="">Konu seçiniz</option>
                          <option value="IELTS Özel Ders">IELTS Özel Ders</option>
                          <option value="Speaking Club Bilgi">Speaking Club Bilgi</option>
                          <option value="Kurumsal Eğitim">Kurumsal Eğitim</option>
                          <option value="Diğer">Diğer</option>
                        </Field>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span className="material-icons-outlined text-gray-400">
                            expand_more
                          </span>
                        </div>
                      </div>
                      <ErrorMessage
                        name="subject"
                        component="div"
                        className="text-red-500 text-sm mt-1 ml-1"
                      />
                    </div>

                    <div>
                      <label
                        className="block text-sm font-semibold mb-2 ml-1"
                        htmlFor="message"
                      >
                        Mesajınız
                      </label>
                      <Field
                        as="textarea"
                        name="message"
                        className={`w-full p-4 bg-gray-50 dark:bg-gray-900 border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all dark:text-white resize-none ${
                          errors.message && touched.message
                            ? "border-red-500 dark:border-red-500"
                            : "border-gray-200 dark:border-gray-700"
                        }`}
                        placeholder="Size nasıl yardımcı olabiliriz?"
                        rows={5}
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="text-red-500 text-sm mt-1 ml-1"
                      />
                    </div>

                    <div className="flex items-start">
                      <Field
                        name="terms_accepted"
                        type="checkbox"
                        className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary dark:bg-gray-900 dark:border-gray-600 mt-0.5"
                        id="terms"
                      />
                      <label
                        className="ml-2 text-sm text-muted-light dark:text-muted-dark"
                        htmlFor="terms"
                      >
                        <a className="text-primary hover:underline" href="#">
                          KVKK Aydınlatma Metni
                        </a>
                        'ni okudum ve kabul ediyorum.
                      </label>
                    </div>
                    <ErrorMessage
                      name="terms_accepted"
                      component="div"
                      className="text-red-500 text-sm mt-1 ml-1"
                    />

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-primary/30  dark:shadow-none flex items-center justify-center gap-2 group"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="material-icons-outlined animate-spin">
                            sync
                          </span>
                          Gönderiliyor...
                        </>
                      ) : (
                        <>
                          Gönder
                          <span className="material-icons-outlined group-hover:translate-x-1 transition-transform">
                            send
                          </span>
                        </>
                      )}
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
