import React from "react";

const WhySpeakingClub = () => {
  return (
    <section className="py-24 bg-background-light dark:bg-background-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-orange rounded-full opacity-50 blur-2xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-light rounded-full opacity-50 blur-2xl"></div>
            <img
              alt="Students talking online"
              className="relative rounded-3xl shadow-2xl w-full object-cover h-[500px]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfQG5-YunKzSwoUPkmFaTwUhhtKQQUZ6e59r2ONNPRFDkBNxJvtOQEr19_wRW-ggga0LipF_TnydCd7lQk9IkJJWofmIxEt8EnqowdWLy3hdqgMI3y26B4p7Mm2ENVeMwFbHZjJ2ngjYAjxnz2nOwQ0shR9RdF3SPKqXHhIOzvMU_aqwd1sIQ6OFHgubF9vYtgmTffjHYnII2oXgcmi5NX5LlezZzL4jqO_oFD63w3jS0JQyjzIoIUCcESzLIWbvZqUMHJZ94KNds"
            />
            <div
              className="absolute bottom-10 left-[-20px] bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl max-w-xs animate-bounce"
              style={{animationDuration: '3s'}}
            >
              <div className="flex items-center gap-4">
                <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded-full text-green-600">
                  <span className="material-icons-round">trending_up</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Ortalama Gelişim
                  </p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">
                    %93 Akıcılık Artışı
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Neden Katılmalısın?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Kitaplardan öğrenmek bir yere kadar. Gerçek hayatta konuşabilmek
              için o korkuyu yenmen gerek. İşte size sunduğumuz avantajlar:
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                  <span className="material-icons-round text-sm">check</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Maksimum 6 Kişilik Gruplar</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Kalabalık sınıflarda kaybolmayın. Herkese konuşma sırası
                    gelen butik gruplar.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                  <span className="material-icons-round text-sm">check</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Özel Materyal Desteği</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Her ders öncesi konu ile ilgili kelime listesi, okuma
                    parçası ve sorular.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
                  <span className="material-icons-round text-sm">check</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Hata Analizi Raporu</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Ders sonrası kişisel gelişiminizi takip edebileceğiniz
                    detaylı rapor.
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

export default WhySpeakingClub;
