import React from "react";

const IeltsAchievement = () => {
  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-7 relative group">
            <img
              alt="Student studying online"
              className="w-full h-[400px] object-cover rounded-3xl shadow-lg group-hover:shadow-xl transition duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy1xCXqQR9DuWOl7UivSRC2l3wwUPs_WIUucqFLI7EWqlhveGq3Z6QQllqeHy850gIhqskek0NeNpgibgdJuJaOVWMbqnI7jCBnxcowXmJxT8m_6d7k936FMXKyIP0I75ImPIvP8d_dgxMg9P0q6z_xLsN_Pxnou2M7tRSerAOnqneipZzoTfVgBRjJEvhWzt-yx2nV2BHB0n56V4aP7vXmjhH6pVo5ukG9zrB34d4UUP-AePq0a7jHcqYHsDHF3C6qbGcwcmJV8I"
            />
            <div className="absolute bottom-6 left-6 bg-white/90 dark:bg-black/80 backdrop-blur px-6 py-4 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                  <span className="material-icons-outlined text-green-600 dark:text-green-400">
                    check_circle
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold">Hedef Skor Garantisi</p>
                  <p className="text-xs text-text-muted-light dark:text-text-muted-dark">
                    Kanıtlanmış metodoloji
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="bg-orange-50 dark:bg-orange-900/20 p-8 rounded-3xl h-full flex flex-col justify-center items-center text-center border border-orange-100 dark:border-orange-900/50">
              <div className="flex -space-x-4 mb-4">
                <img
                  alt="Student"
                  className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800 object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbowt6BQwsTdx6uJPWIm_dpTlrMD0jzoS0-90CRPs4xnWIY-A5UjqwmIXTb8IXKtHQFk0fMjMpbB_jqy4jIL3aaQM7EPkWFE6YAmAMxf1GR25PYYqauRY5L5a1umxWfo751dxryzBJIeQFgHUbF9WsV5WR0HksbQ_QMQfLDWD7uko7JnzyurHVnUlHifu01lU-0qF0dODe1ycr6cTqReUeEzZNlzdPITHxCemlGSE87hbDik-nfTo6b5Ww93eNH_BvLh14hoYvu2g"
                />
                <img
                  alt="Student"
                  className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800 object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX6LXVMVLs0ZT2JUdcsYX4c9uAVqfi8XwCPbQ8k8aylGcMNxj0UKiRRL9y_dZZsqSWOkzfZTTqvZ6_Xq1NtQDs41fpLbikTfOrRLtnHLLOSnHQPNqMzaJEa6BwGms3cn7tE7Ty9Zz5h0gxq2jXbh8wEXAVaK3VZd7heFRkXsXZ--Nf2dIIUJCgSV03jmkXLNICr_bu2kr_iM-RGX0EcRdHPla5AxOdvtV_5K8F5ps5u-80VOSyj4VxVn7Ihy9FiT4TcOUev-O9NuM"
                />
                <img
                  alt="Student"
                  className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800 object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT8nqKoD6FWOnRwlvR2ORB4p-aNTs0ZZv5RhUAe5zGRnefyZQ9ilMl5e41Yfz_GTfzfE3k0Qg9IkAQqv2ogwFgKmJnphnaJkuAGkGiljjTkhG2hSFO6z0SUhOuOl06ILTEQeH-F2NJYYMi7ou9rthytmYfWki1Wm6-mabWfSKSOd84rkD-knryQ3likfctv1BUb06c4wmqTX3dbZf5576i_xSSRI86WtiMx8TI0if3_ROTr44gc_ZqxPUUZ0CYHE1QFEjPpeVSB5s"
                />
                <div className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-800 bg-orange-200 dark:bg-orange-700 flex items-center justify-center text-xs font-bold text-orange-800 dark:text-orange-100">
                  +500
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">500+ Başarılı Öğrenci</h3>
              <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
                Global üniversitelere kabul aldılar.
              </p>
            </div>
            <div className="bg-teal-50 dark:bg-teal-900/20 p-8 rounded-3xl h-full flex flex-col justify-center relative border border-teal-100 dark:border-teal-900/50">
              <span className="material-icons-outlined text-4xl text-teal-500 mb-3">
                format_quote
              </span>
              <p className="text-lg font-medium italic text-gray-800 dark:text-gray-200 mb-4">
                "IELTS sadece bir İngilizce sınavı değil, bir strateji oyunudur.
                Kuralları öğrenin ve kazanın."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-teal-200 dark:bg-teal-700 rounded-full flex items-center justify-center text-teal-800 dark:text-white font-bold">
                  ED
                </div>
                <div>
                  <p className="text-sm font-bold">Elif Demir</p>
                  <p className="text-xs text-text-muted-light dark:text-text-muted-dark">
                    Expert IELTS Instructor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IeltsAchievement;
