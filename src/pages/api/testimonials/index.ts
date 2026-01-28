import type { NextApiRequest, NextApiResponse } from 'next';

export interface Testimonial {
  id?: number;
  client_fullname: string;
  client_job: string;
  comment: string;
  is_active: boolean;
  created_at?: string;
}

// Mock testimonial data (shared state)
const mockTestimonials: Testimonial[] = [
  {
    id: 1,
    client_fullname: "Elif Yılmaz",
    client_job: "Yazılım Mühendisi",
    comment: "IELTS hazırlık kursu sayesinde hedeflediğim 7.5 band skoruna ulaştım. Eğitmenler çok ilgili ve destekleyici.",
    is_active: true,
    created_at: "2025-12-15T10:00:00Z",
  },
  {
    id: 2,
    client_fullname: "Ahmet Kaya",
    client_job: "Üniversite Öğrencisi",
    comment: "Speaking Club'a katıldığımdan beri İngilizce konuşma özgüvenim çok arttı.",
    is_active: true,
    created_at: "2025-11-20T14:30:00Z",
  },
  {
    id: 3,
    client_fullname: "Zeynep Demir",
    client_job: "Pazarlama Müdürü",
    comment: "İş İngilizcesi kursunu tamamladıktan sonra uluslararası toplantılarda çok daha etkili iletişim kurmaya başladım.",
    is_active: true,
    created_at: "2025-10-10T09:15:00Z",
  },
  {
    id: 4,
    client_fullname: "Mehmet Aksoy",
    client_job: "Doktor",
    comment: "Özel ders programı tam ihtiyaçlarıma göre şekillendirildi. Esnek saatler ve kişiselleştirilmiş içerik.",
    is_active: true,
    created_at: "2025-09-05T16:45:00Z",
  },
  {
    id: 5,
    client_fullname: "Ayşe Çelik",
    client_job: "Öğretmen",
    comment: "Çocuğum Mini Kids programına katıldı ve İngilizceye karşı büyük bir ilgi geliştirdi.",
    is_active: true,
    created_at: "2025-08-22T11:00:00Z",
  },
  {
    id: 6,
    client_fullname: "Can Öztürk",
    client_job: "Girişimci",
    comment: "3 aylık yoğun IELTS programı sonunda Academic IELTS'te 8.0 aldım!",
    is_active: true,
    created_at: "2025-07-18T13:20:00Z",
  },
];

export { mockTestimonials };

type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<Testimonial[] | Testimonial>>
) {
  switch (req.method) {
    case 'GET':
      // Return only active testimonials
      const activeTestimonials = mockTestimonials.filter(t => t.is_active);
      return res.status(200).json({ success: true, data: activeTestimonials });

    case 'POST':
      // Create new testimonial
      const { client_fullname, client_job, comment, is_active = true } = req.body;
      
      if (!client_fullname || !comment) {
        return res.status(400).json({ success: false, error: 'Name and comment are required' });
      }

      const newTestimonial: Testimonial = {
        id: mockTestimonials.length + 1,
        client_fullname,
        client_job,
        comment,
        is_active,
        created_at: new Date().toISOString(),
      };
      
      mockTestimonials.push(newTestimonial);
      return res.status(201).json({ success: true, data: newTestimonial });

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
  }
}
