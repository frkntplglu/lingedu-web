import type { NextApiRequest, NextApiResponse } from 'next';

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
export const mockCategories: FAQCategory[] = [
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
    answer: "Derslerimiz online olarak Zoom üzerinden gerçekleştirilmektedir.",
    category_id: 1,
    faq_categories: { id: 1, name: "Genel" },
    created_at: "2025-12-01T10:00:00Z",
  },
  {
    id: 2,
    question: "Ders saatlerini kendim belirleyebilir miyim?",
    answer: "Özel ders paketlerinde ders saatlerinizi tamamen sizin programınıza göre ayarlıyoruz.",
    category_id: 1,
    faq_categories: { id: 1, name: "Genel" },
    created_at: "2025-11-28T14:00:00Z",
  },
  {
    id: 3,
    question: "IELTS kursu ne kadar sürüyor?",
    answer: "IELTS hazırlık kursumuz standart olarak 8 hafta sürmektedir.",
    category_id: 2,
    faq_categories: { id: 2, name: "IELTS" },
    created_at: "2025-11-25T09:00:00Z",
  },
  {
    id: 4,
    question: "IELTS sınavına kaç ay önce hazırlanmaya başlamalıyım?",
    answer: "Mevcut İngilizce seviyenize bağlı olarak 2-3 ay önceden hazırlanmaya başlamanızı öneriyoruz.",
    category_id: 2,
    faq_categories: { id: 2, name: "IELTS" },
    created_at: "2025-11-20T11:00:00Z",
  },
  {
    id: 5,
    question: "Speaking Club'a katılmak için minimum seviye gerekli mi?",
    answer: "Speaking Club'umuzda A2'den C2'ye kadar tüm seviyelere uygun gruplar bulunmaktadır.",
    category_id: 3,
    faq_categories: { id: 3, name: "Speaking Club" },
    created_at: "2025-11-15T16:00:00Z",
  },
  {
    id: 6,
    question: "Speaking Club oturumları kaç kişilik?",
    answer: "Her oturumda maksimum 6 kişi bulunmaktadır.",
    category_id: 3,
    faq_categories: { id: 3, name: "Speaking Club" },
    created_at: "2025-11-10T13:00:00Z",
  },
  {
    id: 7,
    question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
    answer: "Kredi kartı, banka kartı ve havale/EFT ile ödeme yapabilirsiniz.",
    category_id: 4,
    faq_categories: { id: 4, name: "Ödeme" },
    created_at: "2025-11-05T10:00:00Z",
  },
  {
    id: 8,
    question: "İade politikanız nedir?",
    answer: "İlk dersten sonraki 7 gün içinde memnun kalmazsanız tam iade yapıyoruz.",
    category_id: 4,
    faq_categories: { id: 4, name: "Ödeme" },
    created_at: "2025-11-01T12:00:00Z",
  },
];

export { mockFaqs };

type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<FAQ[] | FAQ>>
) {
  switch (req.method) {
    case 'GET':
      return res.status(200).json({ success: true, data: mockFaqs });

    case 'POST':
      // Create new FAQ
      const { question, answer, category_id } = req.body;
      
      if (!question || !answer) {
        return res.status(400).json({ success: false, error: 'Question and answer are required' });
      }

      const category = mockCategories.find(c => c.id === category_id);
      
      const newFaq: FAQ = {
        id: mockFaqs.length + 1,
        question,
        answer,
        category_id,
        faq_categories: category,
        created_at: new Date().toISOString(),
      };
      
      mockFaqs.push(newFaq);
      return res.status(201).json({ success: true, data: newFaq });

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
  }
}
