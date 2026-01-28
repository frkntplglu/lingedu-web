export interface FAQCategory {
  id?: number;
  name: string;
  created_at?: string;
}

export interface FAQ {
  id?: number;
  question: string;
  answer: string;
  category_id?: number;
  faq_categories?: FAQCategory;
  created_at?: string;
}

// Mock FAQ categories
const mockCategories: FAQCategory[] = [
  { id: 1, name: "Genel", created_at: "2025-01-01T00:00:00Z" },
  { id: 2, name: "IELTS", created_at: "2025-01-01T00:00:00Z" },
  { id: 3, name: "Speaking Club", created_at: "2025-01-01T00:00:00Z" },
  { id: 4, name: "Ödeme", created_at: "2025-01-01T00:00:00Z" },
];

// Mock FAQ data
const mockFaqs: FAQ[] = [
  {
    id: 1,
    question: "Dersler nasıl yapılıyor?",
    answer: "Derslerimiz online olarak Zoom üzerinden gerçekleştirilmektedir. Kayıt olan öğrencilerimize ders linki e-posta ile gönderilir. İsterseniz derslere mobil cihazlarınızdan da katılabilirsiniz.",
    category_id: 1,
    faq_categories: { id: 1, name: "Genel" },
    created_at: "2025-12-01T10:00:00Z",
  },
  {
    id: 2,
    question: "Ders saatlerini kendim belirleyebilir miyim?",
    answer: "Özel ders paketlerinde ders saatlerinizi tamamen sizin programınıza göre ayarlıyoruz. Grup dersleri için ise belirli saatler mevcuttur, ancak farklı saat dilimlerinde gruplarımız bulunmaktadır.",
    category_id: 1,
    faq_categories: { id: 1, name: "Genel" },
    created_at: "2025-11-28T14:00:00Z",
  },
  {
    id: 3,
    question: "IELTS kursu ne kadar sürüyor?",
    answer: "IELTS hazırlık kursumuz standart olarak 8 hafta sürmektedir. Ancak öğrencinin mevcut seviyesine ve hedef skoruna göre bu süre uzatılabilir veya kısaltılabilir.",
    category_id: 2,
    faq_categories: { id: 2, name: "IELTS" },
    created_at: "2025-11-25T09:00:00Z",
  },
  {
    id: 4,
    question: "IELTS sınavına kaç ay önce hazırlanmaya başlamalıyım?",
    answer: "Mevcut İngilizce seviyenize bağlı olarak değişmekle birlikte, ortalama 2-3 ay önceden hazırlanmaya başlamanızı öneriyoruz. Seviye tespit sınavımızla size en uygun süreyi belirleyebiliriz.",
    category_id: 2,
    faq_categories: { id: 2, name: "IELTS" },
    created_at: "2025-11-20T11:00:00Z",
  },
  {
    id: 5,
    question: "Speaking Club'a katılmak için minimum seviye gerekli mi?",
    answer: "Speaking Club'umuzda A2'den C2'ye kadar tüm seviyelere uygun gruplar bulunmaktadır. Seviyenize uygun gruba yerleştirilirsiniz, bu sayede rahat bir ortamda pratik yapabilirsiniz.",
    category_id: 3,
    faq_categories: { id: 3, name: "Speaking Club" },
    created_at: "2025-11-15T16:00:00Z",
  },
  {
    id: 6,
    question: "Speaking Club oturumları kaç kişilik?",
    answer: "Her oturumda maksimum 6 kişi bulunmaktadır. Bu sayede herkesin yeterince konuşma pratiği yapma imkanı olur ve eğitmenimiz herkese bireysel geri bildirim verebilir.",
    category_id: 3,
    faq_categories: { id: 3, name: "Speaking Club" },
    created_at: "2025-11-10T13:00:00Z",
  },
  {
    id: 7,
    question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
    answer: "Kredi kartı, banka kartı ve havale/EFT ile ödeme yapabilirsiniz. Kredi kartı ile taksitli ödeme seçeneğimiz de mevcuttur.",
    category_id: 4,
    faq_categories: { id: 4, name: "Ödeme" },
    created_at: "2025-11-05T10:00:00Z",
  },
  {
    id: 8,
    question: "İade politikanız nedir?",
    answer: "İlk dersten sonraki 7 gün içinde memnun kalmazsanız tam iade yapıyoruz. Kurs başladıktan sonra yapılan iptallerde kalan ders sayısına göre kısmi iade yapılmaktadır.",
    category_id: 4,
    faq_categories: { id: 4, name: "Ödeme" },
    created_at: "2025-11-01T12:00:00Z",
  },
];

// Simulate async delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const faqService = {
  // Get all FAQs with categories
  get: async (): Promise<FAQ[]> => {
    await delay(300);
    return mockFaqs;
  },

  // Get all FAQ categories
  getCategories: async (): Promise<FAQCategory[]> => {
    await delay(200);
    return mockCategories;
  },

  // Get single FAQ by ID
  getById: async (id: number): Promise<FAQ> => {
    await delay(200);
    const faq = mockFaqs.find(f => f.id === id);
    if (!faq) throw new Error('FAQ not found');
    return faq;
  },

  // Create new FAQ (mock)
  post: async (data: Omit<FAQ, 'id' | 'created_at'>): Promise<FAQ> => {
    await delay(300);
    const newFaq: FAQ = {
      ...data,
      id: mockFaqs.length + 1,
      created_at: new Date().toISOString(),
    };
    mockFaqs.push(newFaq);
    return newFaq;
  },

  // Update FAQ (mock)
  put: async (id: number, data: Partial<Omit<FAQ, 'id' | 'created_at'>>): Promise<FAQ> => {
    await delay(300);
    const index = mockFaqs.findIndex(f => f.id === id);
    if (index === -1) throw new Error('FAQ not found');
    mockFaqs[index] = { ...mockFaqs[index], ...data };
    return mockFaqs[index];
  },

  // Delete FAQ (mock)
  delete: async (id: number): Promise<void> => {
    await delay(200);
    const index = mockFaqs.findIndex(f => f.id === id);
    if (index === -1) throw new Error('FAQ not found');
    mockFaqs.splice(index, 1);
  },
};

export default faqService;
