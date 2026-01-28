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
            <div className="col-span-2 relative h-56 rounded-2xl overflow-hidden group bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-32 h-32 border border-white/30 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-48 h-48 border border-white/20 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/10 rounded-full"></div>
              </div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Top Row */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full mb-3">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      <span className="text-xs font-medium text-primary">Canlı Dersler</span>
                    </div>
                    <h4 className="font-bold text-white text-xl">Online Eğitim</h4>
                    <p className="text-sm text-gray-300 mt-1">Her yerden erişim imkanı</p>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <span className="material-icons text-primary text-lg">play_circle</span>
                    <span className="text-white text-sm font-medium">50+ Video</span>
                  </div>
                </div>
                
                {/* Bottom Row - Features */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 transition hover:bg-white/20">
                    <span className="material-icons text-teal-400 text-base">videocam</span>
                    <span className="text-white text-sm">HD Video</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 transition hover:bg-white/20">
                    <span className="material-icons text-amber-400 text-base">description</span>
                    <span className="text-white text-sm">PDF Notlar</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 transition hover:bg-white/20">
                    <span className="material-icons text-purple-400 text-base">quiz</span>
                    <span className="text-white text-sm">Pratik Testler</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 transition hover:bg-white/20">
                    <span className="material-icons text-rose-400 text-base">support_agent</span>
                    <span className="text-white text-sm">7/24 Destek</span>
                  </div>
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
