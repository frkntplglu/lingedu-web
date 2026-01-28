export interface Course {
  id?: string;
  title: string;
  slug: string;
  mini_desc?: string;
  description?: string;
  created_at?: string;
}

export interface CourseVariant {
  id?: string;
  created_at?: string;
  title: string;
  course_id: string;
  price?: number;
  capacity?: number;
  description?: string;
  start_date?: string;
  mini_desc?: string;
  is_featured: boolean;
}

export interface CourseWithVariants extends Course {
  course_variants?: CourseVariant[];
}

// Mock course data
const mockCourses: CourseWithVariants[] = [
  {
    id: "1",
    title: "IELTS Hazırlık Programı",
    slug: "ielts",
    mini_desc: "Akademik ve Genel IELTS sınavlarına yönelik kapsamlı hazırlık programı. Hedeflediğiniz band skoruna ulaşın.",
    description: "<p>IELTS sınavına profesyonel hazırlık programımız ile hedeflediğiniz skora ulaşın. Deneyimli eğitmenlerimiz eşliğinde dört temel beceriyi (Reading, Writing, Listening, Speaking) geliştirin.</p><h3>Program İçeriği</h3><ul><li>Sınav formatı ve stratejileri</li><li>Zaman yönetimi teknikleri</li><li>Pratik sınavlar ve değerlendirme</li><li>Kişisel geri bildirim</li></ul>",
    created_at: "2025-01-01T00:00:00Z",
    course_variants: [
      {
        id: "1a",
        title: "Grup Dersi",
        course_id: "1",
        price: 4500,
        capacity: 6,
        mini_desc: "Max 6 kişilik sınıflarda etkili öğrenme",
        description: "<ul><li>40 Saat Canlı Ders</li><li>Haftalık Speaking Club</li><li>5 Adet Essay Kontrolü</li><li>Ders Kayıtlarına Erişim</li></ul>",
        is_featured: false,
        created_at: "2025-01-01T00:00:00Z",
      },
      {
        id: "1b",
        title: "Özel Ders Paketi",
        course_id: "1",
        price: 8500,
        capacity: 1,
        mini_desc: "Birebir ilgi ve kişiye özel program",
        description: "<ul><li>20 Saat Özel Ders</li><li>Esnek Ders Saatleri</li><li>Sınırsız Writing Kontrolü</li><li>Kişiye Özel Strateji Planı</li></ul>",
        start_date: "2026-02-15",
        is_featured: true,
        created_at: "2025-01-01T00:00:00Z",
      },
    ],
  },
  {
    id: "2",
    title: "Speaking Club",
    slug: "speaking-club-aylik",
    mini_desc: "Farklı seviyeler için özel gruplar ile konuşma pratiği yapın. Akıcı İngilizce konuşmayı öğrenin.",
    description: "<p>Speaking Club, İngilizce konuşma becerilerinizi geliştirmek için tasarlanmış interaktif bir programdır. Seviyenize uygun gruplarla düzenli pratik yaparak özgüveninizi artırın.</p><h3>Neler Kazanacaksınız?</h3><ul><li>Akıcı konuşma becerisi</li><li>Doğru telaffuz</li><li>Güncel konular hakkında tartışma yeteneği</li><li>İngilizce düşünme alışkanlığı</li></ul>",
    created_at: "2025-01-02T00:00:00Z",
    course_variants: [
      {
        id: "2a",
        title: "Aylık Üyelik",
        course_id: "2",
        price: 750,
        mini_desc: "Haftalık 2 oturum, esnek saatler",
        description: "<ul><li>8 Haftalık Oturum</li><li>Seviye Grupları</li><li>Sertifika</li><li>Kaynak Materyaller</li></ul>",
        is_featured: true,
        created_at: "2025-01-02T00:00:00Z",
      },
      {
        id: "2b",
        title: "3 Aylık Paket",
        course_id: "2",
        price: 1800,
        mini_desc: "%20 indirimli paket fiyatı",
        description: "<ul><li>24 Haftalık Oturum</li><li>Seviye Atlama Garantisi</li><li>Bonus Materyaller</li><li>Özel Etkinlikler</li></ul>",
        is_featured: false,
        created_at: "2025-01-02T00:00:00Z",
      },
    ],
  },
  {
    id: "3",
    title: "Birebir Özel Ders",
    slug: "ozel-ders",
    mini_desc: "Kişisel hedeflerinize ve eksiklerinize odaklanan yoğun program. Tamamen size özel müfredat.",
    description: "<p>Özel ders programımız, tamamen sizin ihtiyaçlarınıza göre şekillenir. İster sınav hazırlığı, ister iş İngilizcesi, ister genel gelişim olsun - hedefiniz ne olursa olsun yanınızdayız.</p><h3>Avantajlar</h3><ul><li>%100 kişiye özel müfredat</li><li>Esnek ders saatleri</li><li>Hızlı ilerleme</li><li>Sürekli geri bildirim</li></ul>",
    created_at: "2025-01-03T00:00:00Z",
    course_variants: [
      {
        id: "3a",
        title: "10 Ders Paketi",
        course_id: "3",
        price: 3500,
        mini_desc: "Temel paket",
        description: "<ul><li>10 Saat Birebir Ders</li><li>Ödev Takibi</li><li>Esnek Planlama</li><li>Materyal Desteği</li></ul>",
        is_featured: false,
        created_at: "2025-01-03T00:00:00Z",
      },
      {
        id: "3b",
        title: "20 Ders Paketi",
        course_id: "3",
        price: 6000,
        mini_desc: "En popüler seçenek",
        description: "<ul><li>20 Saat Birebir Ders</li><li>Ödev Takibi</li><li>Speaking Practice</li><li>İlerleme Raporu</li><li>Bonus 2 Ders</li></ul>",
        is_featured: true,
        created_at: "2025-01-03T00:00:00Z",
      },
    ],
  },
  {
    id: "4",
    title: "İş İngilizcesi",
    slug: "is-ingilizcesi",
    mini_desc: "Profesyonel iş hayatında başarılı iletişim için gerekli İngilizce becerileri kazanın.",
    description: "<p>İş İngilizcesi programımız, profesyonel hayatta ihtiyaç duyacağınız tüm iletişim becerilerini kapsar. Toplantılardan sunumlara, e-posta yazımından müzakere tekniklerine kadar.</p><h3>Kapsam</h3><ul><li>İş yazışmaları</li><li>Sunum teknikleri</li><li>Toplantı yönetimi</li><li>Müzakere becerileri</li><li>Networking İngilizcesi</li></ul>",
    created_at: "2025-01-04T00:00:00Z",
    course_variants: [
      {
        id: "4a",
        title: "Kurumsal Eğitim",
        course_id: "4",
        price: 12000,
        capacity: 10,
        mini_desc: "Şirketler için özel program",
        description: "<ul><li>40 Saat Eğitim</li><li>Sunum Teknikleri</li><li>E-mail Yazımı</li><li>Toplantı İngilizcesi</li><li>Sektöre Özel İçerik</li></ul>",
        is_featured: true,
        created_at: "2025-01-04T00:00:00Z",
      },
    ],
  },
  {
    id: "5",
    title: "Genel İngilizce",
    slug: "genel-ingilizce",
    mini_desc: "A1'den C2'ye kadar tüm seviyelerde genel İngilizce eğitimi. Temellerden ileri seviyeye.",
    description: "<p>Genel İngilizce programımız, dil öğrenme yolculuğunuzun her aşamasında yanınızda. Temel gramerden ileri düzey konuşma becerilerine kadar kapsamlı bir eğitim sunuyoruz.</p><h3>Seviyeler</h3><ul><li>A1-A2: Başlangıç</li><li>B1-B2: Orta Seviye</li><li>C1-C2: İleri Seviye</li></ul>",
    created_at: "2025-01-05T00:00:00Z",
    course_variants: [
      {
        id: "5a",
        title: "Başlangıç Seviyesi",
        course_id: "5",
        price: 2500,
        mini_desc: "A1-A2 seviyesi için",
        description: "<ul><li>Temel Gramer</li><li>Günlük Konuşma</li><li>Dinleme Pratiği</li><li>Kelime Hazinesi</li></ul>",
        is_featured: false,
        created_at: "2025-01-05T00:00:00Z",
      },
      {
        id: "5b",
        title: "Orta Seviye",
        course_id: "5",
        price: 3000,
        mini_desc: "B1-B2 seviyesi için",
        description: "<ul><li>İleri Gramer</li><li>Akıcı Konuşma</li><li>Yazma Becerileri</li><li>Okuma Anlama</li></ul>",
        is_featured: true,
        created_at: "2025-01-05T00:00:00Z",
      },
      {
        id: "5c",
        title: "İleri Seviye",
        course_id: "5",
        price: 3500,
        mini_desc: "C1-C2 seviyesi için",
        description: "<ul><li>Akademik İngilizce</li><li>Tartışma Becerileri</li><li>İleri Yazım</li><li>Edebiyat ve Kültür</li></ul>",
        is_featured: false,
        created_at: "2025-01-05T00:00:00Z",
      },
    ],
  },
  {
    id: "6",
    title: "Çocuklar İçin İngilizce",
    slug: "cocuklar-icin-ingilizce",
    mini_desc: "4-12 yaş arası çocuklar için eğlenceli ve interaktif İngilizce dersleri.",
    description: "<p>Çocuklarınız için tasarlanmış eğlenceli ve etkili İngilizce programımız, oyun tabanlı öğrenme metoduyla dil öğrenmeyi keyifli hale getirir.</p><h3>Metodoloji</h3><ul><li>Oyun tabanlı öğrenme</li><li>Şarkı ve hikayeler</li><li>İnteraktif aktiviteler</li><li>Yaş grubuna uygun içerik</li></ul>",
    created_at: "2025-01-06T00:00:00Z",
    course_variants: [
      {
        id: "6a",
        title: "Mini Kids (4-6 yaş)",
        course_id: "6",
        price: 1800,
        mini_desc: "Oyunlarla öğrenme",
        description: "<ul><li>Şarkılar ve Oyunlar</li><li>Temel Kelimeler</li><li>Görsel Materyaller</li><li>Eğlenceli Aktiviteler</li></ul>",
        is_featured: false,
        created_at: "2025-01-06T00:00:00Z",
      },
      {
        id: "6b",
        title: "Kids (7-12 yaş)",
        course_id: "6",
        price: 2200,
        mini_desc: "İnteraktif dersler",
        description: "<ul><li>Hikaye Tabanlı Öğrenme</li><li>Konuşma Pratiği</li><li>Yazma Başlangıcı</li><li>Proje Çalışmaları</li></ul>",
        is_featured: true,
        created_at: "2025-01-06T00:00:00Z",
      },
    ],
  },
];

// Simulate async delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const courseService = {
  // Get all courses
  get: async (): Promise<Course[]> => {
    await delay(300);
    return mockCourses.map(({ course_variants, ...course }) => course);
  },

  // Get single course by ID
  getById: async (id: string): Promise<Course> => {
    await delay(200);
    const course = mockCourses.find(c => c.id === id);
    if (!course) throw new Error('Course not found');
    const { course_variants, ...courseData } = course;
    return courseData;
  },

  // Get course by slug with variants
  getBySlug: async (slug: string): Promise<CourseWithVariants> => {
    await delay(300);
    const course = mockCourses.find(c => c.slug === slug);
    if (!course) throw new Error('Course not found');
    return course;
  },

  // Create new course (mock)
  post: async (data: Omit<Course, 'id' | 'created_at'>): Promise<Course> => {
    await delay(300);
    const newCourse: CourseWithVariants = {
      ...data,
      id: String(mockCourses.length + 1),
      created_at: new Date().toISOString(),
      course_variants: [],
    };
    mockCourses.push(newCourse);
    return newCourse;
  },

  // Update course (mock)
  put: async (id: string, data: Partial<Omit<Course, 'id' | 'created_at'>>): Promise<Course> => {
    await delay(300);
    const index = mockCourses.findIndex(c => c.id === id);
    if (index === -1) throw new Error('Course not found');
    mockCourses[index] = { ...mockCourses[index], ...data };
    return mockCourses[index];
  },

  // Delete course (mock)
  delete: async (id: string): Promise<void> => {
    await delay(200);
    const index = mockCourses.findIndex(c => c.id === id);
    if (index === -1) throw new Error('Course not found');
    mockCourses.splice(index, 1);
  },
};

export default courseService;
