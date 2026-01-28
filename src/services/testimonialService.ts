export interface Testimonial {
  id?: number;
  client_fullname: string;
  client_job: string;
  comment: string;
  is_active: boolean;
  created_at?: string;
}

// Mock testimonial data
const mockTestimonials: Testimonial[] = [
  {
    id: 1,
    client_fullname: "Elif Yılmaz",
    client_job: "Yazılım Mühendisi",
    comment: "IELTS hazırlık kursu sayesinde hedeflediğim 7.5 band skoruna ulaştım. Eğitmenler çok ilgili ve destekleyici. Özellikle Speaking modülündeki gelişimim inanılmazdı!",
    is_active: true,
    created_at: "2025-12-15T10:00:00Z",
  },
  {
    id: 2,
    client_fullname: "Ahmet Kaya",
    client_job: "Üniversite Öğrencisi",
    comment: "Speaking Club'a katıldığımdan beri İngilizce konuşma özgüvenim çok arttı. Artık yabancılarla rahatça iletişim kurabiliyorum. Harika bir deneyimdi!",
    is_active: true,
    created_at: "2025-11-20T14:30:00Z",
  },
  {
    id: 3,
    client_fullname: "Zeynep Demir",
    client_job: "Pazarlama Müdürü",
    comment: "İş İngilizcesi kursunu tamamladıktan sonra uluslararası toplantılarda çok daha etkili iletişim kurmaya başladım. Yatırımın karşılığını fazlasıyla aldım.",
    is_active: true,
    created_at: "2025-10-10T09:15:00Z",
  },
  {
    id: 4,
    client_fullname: "Mehmet Aksoy",
    client_job: "Doktor",
    comment: "Özel ders programı tam ihtiyaçlarıma göre şekillendirildi. Esnek saatler ve kişiselleştirilmiş içerik sayesinde hızlı ilerleme kaydettim.",
    is_active: true,
    created_at: "2025-09-05T16:45:00Z",
  },
  {
    id: 5,
    client_fullname: "Ayşe Çelik",
    client_job: "Öğretmen",
    comment: "Çocuğum Mini Kids programına katıldı ve İngilizceye karşı büyük bir ilgi geliştirdi. Oyun tabanlı öğrenme metodu gerçekten çok etkili!",
    is_active: true,
    created_at: "2025-08-22T11:00:00Z",
  },
  {
    id: 6,
    client_fullname: "Can Öztürk",
    client_job: "Girişimci",
    comment: "3 aylık yoğun IELTS programı sonunda Academic IELTS'te 8.0 aldım. Yurtdışı yüksek lisans hayalime bir adım daha yaklaştım!",
    is_active: true,
    created_at: "2025-07-18T13:20:00Z",
  },
];

// Simulate async delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const testimonialService = {
  // Get all testimonials
  get: async (): Promise<Testimonial[]> => {
    await delay(300);
    return mockTestimonials.filter(t => t.is_active);
  },

  // Get single testimonial by ID
  getById: async (id: number): Promise<Testimonial> => {
    await delay(200);
    const testimonial = mockTestimonials.find(t => t.id === id);
    if (!testimonial) throw new Error('Testimonial not found');
    return testimonial;
  },

  // Create new testimonial (mock - just returns the data with an ID)
  post: async (data: Omit<Testimonial, 'id' | 'created_at'>): Promise<Testimonial> => {
    await delay(300);
    const newTestimonial: Testimonial = {
      ...data,
      id: mockTestimonials.length + 1,
      created_at: new Date().toISOString(),
    };
    mockTestimonials.push(newTestimonial);
    return newTestimonial;
  },

  // Update testimonial (mock)
  put: async (id: number, data: Partial<Omit<Testimonial, 'id' | 'created_at'>>): Promise<Testimonial> => {
    await delay(300);
    const index = mockTestimonials.findIndex(t => t.id === id);
    if (index === -1) throw new Error('Testimonial not found');
    mockTestimonials[index] = { ...mockTestimonials[index], ...data };
    return mockTestimonials[index];
  },

  // Delete testimonial (mock)
  delete: async (id: number): Promise<void> => {
    await delay(200);
    const index = mockTestimonials.findIndex(t => t.id === id);
    if (index === -1) throw new Error('Testimonial not found');
    mockTestimonials.splice(index, 1);
  },
};

export default testimonialService;
