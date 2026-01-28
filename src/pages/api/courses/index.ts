import type { NextApiRequest, NextApiResponse } from 'next';
import type { Course, CourseWithVariants } from '@/services/courseService';

// Mock course data (shared state)
const mockCourses: CourseWithVariants[] = [
  {
    id: "1",
    title: "IELTS Hazırlık Programı",
    slug: "ielts",
    mini_desc: "Akademik ve Genel IELTS sınavlarına yönelik kapsamlı hazırlık programı. Hedeflediğiniz band skoruna ulaşın.",
    description: "<p>IELTS sınavına profesyonel hazırlık programımız ile hedeflediğiniz skora ulaşın.</p>",
    created_at: "2025-01-01T00:00:00Z",
    course_variants: [
      {
        id: "1a",
        title: "Grup Dersi",
        course_id: "1",
        price: 4500,
        capacity: 6,
        mini_desc: "Max 6 kişilik sınıflarda etkili öğrenme",
        description: "<ul><li>40 Saat Canlı Ders</li><li>Haftalık Speaking Club</li></ul>",
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
        description: "<ul><li>20 Saat Özel Ders</li><li>Esnek Ders Saatleri</li></ul>",
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
    mini_desc: "Farklı seviyeler için özel gruplar ile konuşma pratiği yapın.",
    description: "<p>Speaking Club, İngilizce konuşma becerilerinizi geliştirmek için tasarlanmış interaktif bir programdır.</p>",
    created_at: "2025-01-02T00:00:00Z",
    course_variants: [
      {
        id: "2a",
        title: "Aylık Üyelik",
        course_id: "2",
        price: 750,
        mini_desc: "Haftalık 2 oturum, esnek saatler",
        description: "<ul><li>8 Haftalık Oturum</li><li>Seviye Grupları</li></ul>",
        is_featured: true,
        created_at: "2025-01-02T00:00:00Z",
      },
      {
        id: "2b",
        title: "3 Aylık Paket",
        course_id: "2",
        price: 1800,
        mini_desc: "%20 indirimli paket fiyatı",
        description: "<ul><li>24 Haftalık Oturum</li><li>Seviye Atlama Garantisi</li></ul>",
        is_featured: false,
        created_at: "2025-01-02T00:00:00Z",
      },
    ],
  },
  {
    id: "3",
    title: "Birebir Özel Ders",
    slug: "ozel-ders",
    mini_desc: "Kişisel hedeflerinize ve eksiklerinize odaklanan yoğun program.",
    description: "<p>Özel ders programımız, tamamen sizin ihtiyaçlarınıza göre şekillenir.</p>",
    created_at: "2025-01-03T00:00:00Z",
    course_variants: [
      {
        id: "3a",
        title: "10 Ders Paketi",
        course_id: "3",
        price: 3500,
        mini_desc: "Temel paket",
        description: "<ul><li>10 Saat Birebir Ders</li></ul>",
        is_featured: false,
        created_at: "2025-01-03T00:00:00Z",
      },
      {
        id: "3b",
        title: "20 Ders Paketi",
        course_id: "3",
        price: 6000,
        mini_desc: "En popüler seçenek",
        description: "<ul><li>20 Saat Birebir Ders</li><li>Bonus 2 Ders</li></ul>",
        is_featured: true,
        created_at: "2025-01-03T00:00:00Z",
      },
    ],
  },
  {
    id: "4",
    title: "İş İngilizcesi",
    slug: "is-ingilizcesi",
    mini_desc: "Profesyonel iş hayatında başarılı iletişim için gerekli İngilizce becerileri.",
    description: "<p>İş İngilizcesi programımız, profesyonel hayatta ihtiyaç duyacağınız tüm iletişim becerilerini kapsar.</p>",
    created_at: "2025-01-04T00:00:00Z",
    course_variants: [
      {
        id: "4a",
        title: "Kurumsal Eğitim",
        course_id: "4",
        price: 12000,
        capacity: 10,
        mini_desc: "Şirketler için özel program",
        description: "<ul><li>40 Saat Eğitim</li><li>Sunum Teknikleri</li></ul>",
        is_featured: true,
        created_at: "2025-01-04T00:00:00Z",
      },
    ],
  },
  {
    id: "5",
    title: "Genel İngilizce",
    slug: "genel-ingilizce",
    mini_desc: "A1'den C2'ye kadar tüm seviyelerde genel İngilizce eğitimi.",
    description: "<p>Genel İngilizce programımız, dil öğrenme yolculuğunuzun her aşamasında yanınızda.</p>",
    created_at: "2025-01-05T00:00:00Z",
    course_variants: [
      {
        id: "5a",
        title: "Başlangıç Seviyesi",
        course_id: "5",
        price: 2500,
        mini_desc: "A1-A2 seviyesi için",
        description: "<ul><li>Temel Gramer</li><li>Günlük Konuşma</li></ul>",
        is_featured: false,
        created_at: "2025-01-05T00:00:00Z",
      },
      {
        id: "5b",
        title: "Orta Seviye",
        course_id: "5",
        price: 3000,
        mini_desc: "B1-B2 seviyesi için",
        description: "<ul><li>İleri Gramer</li><li>Akıcı Konuşma</li></ul>",
        is_featured: true,
        created_at: "2025-01-05T00:00:00Z",
      },
    ],
  },
  {
    id: "6",
    title: "Çocuklar İçin İngilizce",
    slug: "cocuklar-icin-ingilizce",
    mini_desc: "4-12 yaş arası çocuklar için eğlenceli ve interaktif İngilizce dersleri.",
    description: "<p>Çocuklarınız için tasarlanmış eğlenceli ve etkili İngilizce programımız.</p>",
    created_at: "2025-01-06T00:00:00Z",
    course_variants: [
      {
        id: "6a",
        title: "Mini Kids (4-6 yaş)",
        course_id: "6",
        price: 1800,
        mini_desc: "Oyunlarla öğrenme",
        description: "<ul><li>Şarkılar ve Oyunlar</li></ul>",
        is_featured: false,
        created_at: "2025-01-06T00:00:00Z",
      },
      {
        id: "6b",
        title: "Kids (7-12 yaş)",
        course_id: "6",
        price: 2200,
        mini_desc: "İnteraktif dersler",
        description: "<ul><li>Hikaye Tabanlı Öğrenme</li></ul>",
        is_featured: true,
        created_at: "2025-01-06T00:00:00Z",
      },
    ],
  },
];

export { mockCourses };

type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<Course[] | Course>>
) {
  switch (req.method) {
    case 'GET':
      // Return all courses without variants
      const courses = mockCourses.map(({ course_variants, ...course }) => course);
      return res.status(200).json({ success: true, data: courses });

    case 'POST':
      // Create new course
      const { title, slug, mini_desc, description } = req.body;
      
      if (!title || !slug) {
        return res.status(400).json({ success: false, error: 'Title and slug are required' });
      }

      const newCourse: CourseWithVariants = {
        id: String(mockCourses.length + 1),
        title,
        slug,
        mini_desc,
        description,
        created_at: new Date().toISOString(),
        course_variants: [],
      };
      
      mockCourses.push(newCourse);
      return res.status(201).json({ success: true, data: newCourse });

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
  }
}
