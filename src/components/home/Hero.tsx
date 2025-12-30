import React from "react";

const Hero = () => {
  return (
    <header className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="absolute top-0 left-10 w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center transform -rotate-12 animate-bounce hidden lg:flex">
          <span className="text-4xl">🎓</span>
        </div>
        <div className="absolute top-10 right-20 w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center transform rotate-12 animate-pulse hidden lg:flex">
          <span className="text-3xl">🗣️</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
          İngilizcenizi Geliştirin ve <br className="hidden lg:block" />
          <span className="text-gradient">Dünyaya Açılın</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 mb-10">
          IELTS sınavında hedeflediğiniz skora ulaşın veya Speaking Club ile
          akıcı konuşma pratiği yapın. Uzman eğitmen rehberliğinde
          potansiyelinizi keşfedin.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all shadow-xl shadow-primary/30 flex items-center justify-center gap-2"
            href="#courses"
          >
            Eğitimleri İncele
            <span className="material-icons ml-2 text-sm">arrow_forward</span>
          </a>
          <a
            className="px-8 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-semibold rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center justify-center"
            href="#contact"
          >
            Ücretsiz Danışmanlık
          </a>
        </div>
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-6 relative group">
            <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3 transition group-hover:rotate-1"></div>
            <img
              alt="Students studying together"
              className="relative rounded-2xl shadow-2xl w-full h-80 object-cover transform -rotate-1 transition group-hover:rotate-0"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV--yulZdFuXZrgndSrqPoN7Llqmy7aINk37LjPc_I_SiwRVGQHTNxk5VqI2ZWB9V9f3w7oiT70CfgiDg5mT9381LCsTg4MmTSL404MeA64H4UT08-13nIxm4j48nlLFp4YpVQQJ8ExuHfVVKoo_zSwIG09GET3AUqQdOAFUuNO0OrOLKOgdnsG3ue3HxrFWTV0LsJ8czdx4CiXcGZtYCwoy1oQibrAvIUicBpj86cWGrTaL6HTnQTIQ5qooX3DnIcYm-kNpsI0_M"
            />
          </div>
          <div className="lg:col-span-6 grid grid-cols-2 gap-6">
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl flex flex-col justify-center items-center text-center">
              <div className="flex -space-x-4 mb-4">
                <img
                  alt="Student 1"
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkAHbobvdty-sY-C_GGLSGm0clMBrdXKO3u3M1ICd3x_bOAZvStsE0lA68UvJpybk2Vpf4WQQcfggBq2hJhQvgfcmp3pB0tCzYSoQv-mgEiTj6TecBN_ONBTMhjU1ps9EWTTxsC7tPbTMm0-N2uDsZCi3uyZsdpPalHrNd1UT-qBt4yjYJ18VrzwUL6TAQRl-2r2cZEvUNf6CotAKlHP9yl8QEDnKwDSudyb7U5v5IVan_ctnbEncF4stKT8pZjBSbpMH_ZpV7T48"
                />
                <img
                  alt="Student 2"
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0Y3gJLsahOLtGzZ8R6FTQ5_do17Fv71Hbq0Xzr9GcL8E3BUFCuWWvvNSXbmCTc3-l2djsXvb2QBpkj4JJl6c-eTOVAqGpfY62Fek5uGWRJ1K7JnosV1vpR2ZEYosgS3djPuVDg1p1iMlIcPiVjeeT9FQDQYPOGCBlln7APnNEh3tr_uxltrEF-C4Xt2saxxNR2WxXKIVbkWaTqHRJMvs1EyCjtUOPw7a7hBz4HOYKFcXXLgvpbK_Q8mVUle5iB2ay-KPRBSUYIlc"
                />
                <img
                  alt="Student 3"
                  className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjloLNeK0YnzyJhSwn4oBxn1FENSmDHXUZiTI1JT23vp8_2w1pWn5PeEeLzgN0ARoS6hXYjE5y7mPn7CWmfGy1JQVErbzR5pQq31vnwvpcWqhB55P46_vGdjd4hnTQykxX38vlgflEMwT4nElcb-snHn-zDNBDTmCwdA05ZNXOH0COn5kDKb7zezbXum-1bc4n3Dt_npA9oAk97v9lGPq8NuVGJTCVICTmRs6HPgsi6UVuexXyzC0-0YLu7BrevBGCYQALbAp50nE"
                />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                500+ Mutlu Öğrenci
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Başarı hikayelerine katılın
              </p>
            </div>
            <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-2xl flex flex-col justify-between">
              <p className="font-medium text-teal-900 dark:text-teal-100 italic mb-4">
                "Dil öğrenmek, dünyayı farklı bir pencereden görmektir."
              </p>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-2"></div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300">
                  Günün Mottosu
                </span>
              </div>
            </div>
            <div className="col-span-2 relative h-48 rounded-2xl overflow-hidden group">
              <img
                alt="Online learning session"
                className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEj8dVSvk5OYayPlUpoWjnC-ys81OS7KlsJRbpzNN6Wab7WzYi1eOZuvGA-Q4PewWH0v6UdYZ0ooMLxOqWC8Mp1UpJEBWJarSd1qzYudi9raHRL-2UvH5pfo3-cMEiOuo9a7vltFYtKuk9gCtJs2uYVupTHWIt4FjSFqtbKxRlvS7-ko4aKujl2AzXzkzvIaOXA5OtrB6asbxjquIwIOfocO-qN2-x0u8PQ8mZCIPB4VpFA0c_r66i-W5TFAwbhB1exKOORsMYilQ"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h4 className="font-bold">Online Eğitim</h4>
                  <p className="text-sm opacity-90">Her yerden erişim imkanı</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
