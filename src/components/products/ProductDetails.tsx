import React, { useState } from "react";
import { CourseWithVariants } from "@/services";

interface ProductDetailsProps {
  product: CourseWithVariants;
}

type TabType = "curriculum" | "details" | "maturities";

interface TabConfig {
  id: TabType;
  label: string;
  icon: string;
}

const tabs: TabConfig[] = [
  { id: "curriculum", label: "Müfredat", icon: "menu_book" },
  { id: "details", label: "Detaylar", icon: "info" },
  { id: "maturities", label: "Ödeme Seçenekleri", icon: "payments" },
];

// Mock curriculum data based on product slug
const getCurriculumForSlug = (slug: string) => {
  const curriculums: Record<string, { week: string; title: string; topics: string[] }[]> = {
    ielts: [
      { week: "Hafta 1-2", title: "Listening Modülü", topics: ["Soru tipleri analizi", "Not alma teknikleri", "Dikkat stratejileri", "Pratik testler"] },
      { week: "Hafta 3-4", title: "Reading Modülü", topics: ["Skimming & Scanning", "Paragraf eşleştirme", "True/False/Not Given", "Zaman yönetimi"] },
      { week: "Hafta 5-6", title: "Writing Modülü", topics: ["Task 1: Grafik analizi", "Task 2: Essay yazımı", "Paragraf yapısı", "Bağlaç kullanımı"] },
      { week: "Hafta 7-8", title: "Speaking Modülü", topics: ["Part 1: Tanışma", "Part 2: Cue Card", "Part 3: Tartışma", "Telaffuz ve akıcılık"] },
    ],
    "speaking-club-aylik": [
      { week: "Hafta 1-2", title: "Temel Konuşma", topics: ["Kendini tanıtma", "Günlük konuşmalar", "Soru sorma teknikleri", "Basit tartışmalar"] },
      { week: "Hafta 3-4", title: "Güncel Konular", topics: ["Haber tartışmaları", "Fikir beyan etme", "Argüman geliştirme", "Karşı görüş sunma"] },
      { week: "Hafta 5-6", title: "İş & Kariyer", topics: ["Mülakat simülasyonu", "Sunum yapma", "Profesyonel iletişim", "Email yazımı"] },
      { week: "Hafta 7-8", title: "İleri Konuşma", topics: ["Akademik tartışmalar", "Debate teknikleri", "Hikaye anlatımı", "Spontan konuşma"] },
    ],
    "ozel-ders": [
      { week: "Modül 1", title: "Seviye Belirleme", topics: ["Başlangıç testi", "İhtiyaç analizi", "Hedef belirleme", "Kişisel plan oluşturma"] },
      { week: "Modül 2", title: "Temel Geliştirme", topics: ["Grammar temelleri", "Vocabulary building", "Pronunciation", "Basic conversation"] },
      { week: "Modül 3", title: "Pratik Uygulama", topics: ["Role-play aktiviteleri", "Gerçek hayat senaryoları", "Hata analizi", "Geri bildirim"] },
      { week: "Modül 4", title: "İlerleme Değerlendirme", topics: ["Progress test", "Zayıf noktalar", "İleri hedefler", "Sertifika hazırlığı"] },
    ],
    "is-ingilizcesi": [
      { week: "Hafta 1-2", title: "İş Yazışmaları", topics: ["Profesyonel email", "Rapor yazımı", "Meeting notes", "Formal dil kullanımı"] },
      { week: "Hafta 3-4", title: "Sunum Becerileri", topics: ["Sunum yapısı", "Görsel kullanımı", "Beden dili", "Q&A yönetimi"] },
      { week: "Hafta 5-6", title: "Toplantı Yönetimi", topics: ["Meeting açılış/kapanış", "Tartışma yönetimi", "Karar alma", "Follow-up"] },
      { week: "Hafta 7-8", title: "Müzakere Teknikleri", topics: ["Negotiation basics", "Win-win stratejileri", "Objection handling", "Closing deals"] },
    ],
    "genel-ingilizce": [
      { week: "Modül 1", title: "Grammar Foundations", topics: ["Tense sistemi", "Passive voice", "Conditional", "Reported speech"] },
      { week: "Modül 2", title: "Vocabulary Expansion", topics: ["Tema bazlı kelime", "Phrasal verbs", "Idioms", "Collocations"] },
      { week: "Modül 3", title: "Skills Development", topics: ["Listening practice", "Reading comprehension", "Writing skills", "Speaking fluency"] },
      { week: "Modül 4", title: "Real-world Application", topics: ["Seyahat İngilizcesi", "Sosyal etkileşim", "Medya İngilizcesi", "Kültürel farkındalık"] },
    ],
    "cocuklar-icin-ingilizce": [
      { week: "Modül 1", title: "Fun Start", topics: ["Renkler ve sayılar", "Hayvanlar", "Aile üyeleri", "Oyunlar"] },
      { week: "Modül 2", title: "Daily Life", topics: ["Okul kelimeleri", "Yiyecek ve içecek", "Giysiler", "Hobiler"] },
      { week: "Modül 3", title: "Stories & Songs", topics: ["Popüler şarkılar", "Kısa hikayeler", "Karakter canlandırma", "Yaratıcı aktiviteler"] },
      { week: "Modül 4", title: "Communication", topics: ["Basit diyaloglar", "Soru-cevap", "Tanışma", "Günlük ifadeler"] },
    ],
  };
  return curriculums[slug] || curriculums["genel-ingilizce"];
};

// Mock maturity/payment options
const getMaturityOptions = (price: number) => [
  { months: 1, label: "Tek Çekim", amount: price, total: price, discount: 0 },
  { months: 3, label: "3 Taksit", amount: Math.ceil(price / 3), total: price, discount: 0 },
  { months: 6, label: "6 Taksit", amount: Math.ceil((price * 1.05) / 6), total: Math.ceil(price * 1.05), discount: -5 },
  { months: 9, label: "9 Taksit", amount: Math.ceil((price * 1.08) / 9), total: Math.ceil(price * 1.08), discount: -8 },
];

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState<TabType>("curriculum");
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  
  const curriculum = getCurriculumForSlug(product.slug);
  const lowestPrice = product.course_variants?.reduce((min, v) => 
    v.price && v.price < min ? v.price : min, 
    product.course_variants[0]?.price || 0
  ) || 0;
  const maturities = getMaturityOptions(lowestPrice);

  return (
    <section className="py-20 bg-white dark:bg-background-dark">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Program <span className="text-primary">Detayları</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Eğitim içeriği, detaylar ve ödeme seçeneklerini inceleyin.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-2xl p-1.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-white dark:bg-card-dark text-primary shadow-md"
                    : "text-gray-600 dark:text-gray-400 hover:text-primary"
                }`}
              >
                <span className="material-icons text-xl">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-gray-50 dark:bg-surface-dark rounded-3xl p-8 md:p-12">
          {/* Curriculum Tab */}
          {activeTab === "curriculum" && (
            <div>
              <div className="space-y-3">
                {curriculum.map((item, index) => {
                  const isExpanded = expandedModule === index;
                  return (
                    <div 
                      key={index}
                      className={`bg-white dark:bg-card-dark rounded-xl border transition-all cursor-pointer ${
                        isExpanded 
                          ? "border-primary shadow-md" 
                          : "border-gray-100 dark:border-gray-700 hover:border-primary/30"
                      }`}
                      onClick={() => setExpandedModule(isExpanded ? null : index)}
                    >
                      <div className="flex items-center gap-4 p-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0 transition-colors ${
                          isExpanded 
                            ? "bg-primary text-white" 
                            : "bg-primary/10 text-primary"
                        }`}>
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className={`font-semibold transition-colors ${
                            isExpanded ? "text-primary" : "text-gray-900 dark:text-white"
                          }`}>
                            {item.title}
                          </h4>
                          {!isExpanded && (
                            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                              {item.topics.join(" • ")}
                            </p>
                          )}
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-gray-400 dark:text-gray-500 hidden sm:block">
                            {item.week}
                          </span>
                          <span className={`material-icons text-gray-400 transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}>
                            expand_more
                          </span>
                        </div>
                      </div>
                      
                      {/* Expandable content */}
                      <div className={`overflow-hidden transition-all duration-300 ${
                        isExpanded ? "max-h-96" : "max-h-0"
                      }`}>
                        <div className="px-4 pb-4 pt-2 border-t border-gray-100 dark:border-gray-700">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {item.topics.map((topic, topicIndex) => (
                              <div 
                                key={topicIndex}
                                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                              >
                                <span className="material-icons text-primary text-base">check</span>
                                {topic}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{curriculum.length} modül</span>
                <span className="flex items-center gap-1">
                  <span className="material-icons text-base text-green-500">check_circle</span>
                  Sertifika dahil
                </span>
              </div>
            </div>
          )}

          {/* Details Tab */}
          {activeTab === "details" && (
            <div className="space-y-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <span className="material-icons text-primary text-2xl">info</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Program Detayları</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Eğitim hakkında önemli bilgiler</p>
                </div>
              </div>

              {/* Program Description */}
              {product.description && (
                <div 
                  className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-400"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              )}

              {/* Key Features Grid */}
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white dark:bg-card-dark rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-icons text-primary text-2xl">schedule</span>
                    <h4 className="font-bold text-gray-900 dark:text-white">Ders Süresi</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">Her ders 60 dakika sürmektedir. Dersler Zoom üzerinden canlı olarak gerçekleştirilir.</p>
                </div>
                
                <div className="bg-white dark:bg-card-dark rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-icons text-primary text-2xl">groups</span>
                    <h4 className="font-bold text-gray-900 dark:text-white">Sınıf Kapasitesi</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">Grup derslerinde maksimum 6 kişi bulunur. Bu sayede herkes aktif katılım sağlar.</p>
                </div>
                
                <div className="bg-white dark:bg-card-dark rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-icons text-primary text-2xl">video_library</span>
                    <h4 className="font-bold text-gray-900 dark:text-white">Ders Kayıtları</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">Tüm dersler kayıt altına alınır ve 30 gün boyunca tekrar izleyebilirsiniz.</p>
                </div>
                
                <div className="bg-white dark:bg-card-dark rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-icons text-primary text-2xl">workspace_premium</span>
                    <h4 className="font-bold text-gray-900 dark:text-white">Sertifika</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">Program sonunda başarı sertifikası verilir. LinkedIn profilinize ekleyebilirsiniz.</p>
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-6 border border-amber-200 dark:border-amber-800">
                <div className="flex items-start gap-3">
                  <span className="material-icons text-amber-600 text-2xl">lightbulb</span>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Gereksinimler</h4>
                    <ul className="text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                      <li>• Stabil internet bağlantısı</li>
                      <li>• Bilgisayar veya tablet (mikrofon ve kamera)</li>
                      <li>• Zoom uygulaması (ücretsiz)</li>
                      <li>• Haftalık 2-4 saat çalışma süresi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Maturities Tab */}
          {activeTab === "maturities" && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <span className="material-icons text-primary text-2xl">credit_card</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Ödeme Seçenekleri</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Size uygun ödeme planını seçin</p>
                </div>
              </div>

              {/* Payment Options */}
              <div className="grid md:grid-cols-2 gap-4">
                {maturities.map((maturity, index) => (
                  <div 
                    key={index}
                    className={`relative bg-white dark:bg-card-dark rounded-2xl p-6 border-2 transition hover:shadow-lg cursor-pointer ${
                      index === 0 
                        ? "border-primary shadow-lg" 
                        : "border-gray-100 dark:border-gray-700 hover:border-primary/50"
                    }`}
                  >
                    {index === 0 && (
                      <div className="absolute -top-3 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                        Önerilen
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-lg">{maturity.label}</h4>
                        {maturity.discount !== 0 && (
                          <span className="text-red-500 text-sm font-medium">
                            +%{Math.abs(maturity.discount)} vade farkı
                          </span>
                        )}
                        {maturity.discount === 0 && maturity.months === 1 && (
                          <span className="text-green-500 text-sm font-medium">
                            En avantajlı
                          </span>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">
                          ₺{maturity.amount.toLocaleString("tr-TR")}
                        </div>
                        {maturity.months > 1 && (
                          <span className="text-gray-500 text-sm">/ ay</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                      <span className="text-gray-500 dark:text-gray-400 text-sm">Toplam</span>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        ₺{maturity.total.toLocaleString("tr-TR")}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Payment Methods */}
              <div className="bg-white dark:bg-card-dark rounded-2xl p-6 border border-gray-100 dark:border-gray-700 mt-8">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4">Kabul Edilen Ödeme Yöntemleri</h4>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
                    <span className="material-icons text-gray-600">credit_card</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">Kredi Kartı</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
                    <span className="material-icons text-gray-600">account_balance</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">Havale/EFT</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
                    <span className="material-icons text-gray-600">payments</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">Banka Kartı</span>
                  </div>
                </div>
              </div>

              {/* Refund Policy */}
              <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-6 border border-green-200 dark:border-green-800">
                <div className="flex items-start gap-3">
                  <span className="material-icons text-green-600 text-2xl">verified_user</span>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">7 Gün İade Garantisi</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      İlk dersten sonraki 7 gün içinde memnun kalmazsanız, ödemenizin tamamını iade ediyoruz. 
                      Hiçbir soru sormadan, hiçbir koşul öne sürmeden.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
