-- LingEdu Database Schema
-- PostgreSQL Database Creation Script

-- Drop existing tables if they exist (in correct order due to foreign keys)
DROP TABLE IF EXISTS contact_forms CASCADE;
DROP TABLE IF EXISTS faqs CASCADE;
DROP TABLE IF EXISTS course_variants CASCADE;
DROP TABLE IF EXISTS courses CASCADE;
DROP TABLE IF EXISTS testimonials CASCADE;
DROP TABLE IF EXISTS faq_categories CASCADE;

-- ============================================
-- FAQ Categories Table
-- ============================================
CREATE TABLE faq_categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100),
    sort_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_name_length CHECK (char_length(name) >= 2 AND char_length(name) <= 100)
);

-- Create indexes for faq_categories
CREATE UNIQUE INDEX idx_faq_categories_slug ON faq_categories(slug) WHERE slug IS NOT NULL;
CREATE INDEX idx_faq_categories_sort_order ON faq_categories(sort_order);
CREATE INDEX idx_faq_categories_is_active ON faq_categories(is_active);

-- ============================================
-- Courses Table
-- ============================================
CREATE TABLE courses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) NOT NULL UNIQUE,
    mini_desc VARCHAR(500),
    description TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_title_length CHECK (char_length(title) >= 2 AND char_length(title) <= 255)
);

-- Create indexes for courses
CREATE INDEX idx_courses_is_active ON courses(is_active);

-- ============================================
-- Course Variants Table
-- ============================================
CREATE TABLE course_variants (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    course_id UUID NOT NULL,
    title VARCHAR(255) NOT NULL,
    mini_desc VARCHAR(500),
    description TEXT,
    price DECIMAL(10, 2),
    capacity INTEGER,
    start_date DATE,
    is_featured BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_course_variants_course
        FOREIGN KEY (course_id)
        REFERENCES courses(id)
        ON DELETE CASCADE,
    CONSTRAINT chk_price_positive CHECK (price IS NULL OR price >= 0),
    CONSTRAINT chk_capacity_min CHECK (capacity IS NULL OR capacity >= 1)
);

-- Create indexes for course_variants
CREATE INDEX idx_course_variants_course_id ON course_variants(course_id);
CREATE INDEX idx_course_variants_is_featured ON course_variants(is_featured);
CREATE INDEX idx_course_variants_is_active ON course_variants(is_active);

-- ============================================
-- Testimonials Table
-- ============================================
CREATE TABLE testimonials (
    id SERIAL PRIMARY KEY,
    client_fullname VARCHAR(255) NOT NULL,
    client_job VARCHAR(255),
    comment TEXT NOT NULL,
    rating INTEGER,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_client_fullname_length CHECK (char_length(client_fullname) >= 2 AND char_length(client_fullname) <= 255),
    CONSTRAINT chk_comment_length CHECK (char_length(comment) >= 10 AND char_length(comment) <= 2000),
    CONSTRAINT chk_rating_range CHECK (rating IS NULL OR (rating >= 1 AND rating <= 5))
);

-- Create indexes for testimonials
CREATE INDEX idx_testimonials_is_active ON testimonials(is_active);
CREATE INDEX idx_testimonials_created_at ON testimonials(created_at);

-- ============================================
-- FAQs Table
-- ============================================
CREATE TABLE faqs (
    id SERIAL PRIMARY KEY,
    category_id INTEGER,
    question VARCHAR(500) NOT NULL,
    answer TEXT NOT NULL,
    sort_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_faqs_category
        FOREIGN KEY (category_id)
        REFERENCES faq_categories(id)
        ON DELETE SET NULL,
    CONSTRAINT chk_question_length CHECK (char_length(question) >= 10 AND char_length(question) <= 500)
);

-- Create indexes for faqs
CREATE INDEX idx_faqs_category_id ON faqs(category_id);
CREATE INDEX idx_faqs_sort_order ON faqs(sort_order);
CREATE INDEX idx_faqs_is_active ON faqs(is_active);

-- ============================================
-- Contact Forms Table
-- ============================================
CREATE TYPE contact_form_status AS ENUM ('pending', 'read', 'replied', 'archived');

CREATE TABLE contact_forms (
    id SERIAL PRIMARY KEY,
    fullname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    subject VARCHAR(255) DEFAULT 'Genel',
    message TEXT NOT NULL,
    terms_accepted BOOLEAN DEFAULT false,
    status contact_form_status DEFAULT 'pending',
    ip_address VARCHAR(45),
    user_agent VARCHAR(500),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_fullname_length CHECK (char_length(fullname) >= 2 AND char_length(fullname) <= 255),
    CONSTRAINT chk_email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$'),
    CONSTRAINT chk_message_length CHECK (char_length(message) >= 10 AND char_length(message) <= 5000)
);

-- Create indexes for contact_forms
CREATE INDEX idx_contact_forms_email ON contact_forms(email);
CREATE INDEX idx_contact_forms_status ON contact_forms(status);
CREATE INDEX idx_contact_forms_created_at ON contact_forms(created_at);

-- ============================================
-- Enable UUID extension (required for gen_random_uuid())
-- ============================================
-- Note: If the extension is already enabled, this will return a notice but not error
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================
-- Optional: Add comments for documentation
-- ============================================
COMMENT ON TABLE faq_categories IS 'Categories for organizing FAQ entries';
COMMENT ON TABLE courses IS 'Course offerings (IELTS, Speaking Club, Private Lessons, etc.)';
COMMENT ON TABLE course_variants IS 'Pricing and capacity variants for courses';
COMMENT ON TABLE testimonials IS 'Client testimonials and reviews';
COMMENT ON TABLE faqs IS 'Frequently asked questions with category associations';
COMMENT ON TABLE contact_forms IS 'Contact form submissions from website visitors';

-- ============================================
-- Test Data - Comprehensive INSERT queries for testing
-- ============================================

-- Insert FAQ Categories
INSERT INTO faq_categories (name, slug, sort_order, is_active) VALUES
('Genel', 'genel', 1, true),
('IELTS', 'ielts', 2, true),
('Speaking Club', 'speaking-club', 3, true),
('Ödeme', 'odeme', 4, true),
('Teknik', 'teknik', 5, true);

-- Insert Courses
INSERT INTO courses (title, slug, mini_desc, description, is_active) VALUES
('IELTS Hazırlık Programı', 'ielts', 'Akademik ve Genel IELTS sınavlarına yönelik kapsamlı hazırlık programı.',
'<p>IELTS sınavına profesyonel hazırlık programımız ile hedeflediğiniz skora ulaşın. Deneyimli eğitmenlerimiz eşliğinde dört temel beceriyi (Reading, Writing, Listening, Speaking) geliştirin.</p><h3>Program İçeriği</h3><ul><li>Sınav formatı ve stratejileri</li><li>Zaman yönetimi teknikleri</li><li>Pratik sınavlar ve değerlendirme</li><li>Kişisel geri bildirim</li></ul>', true),

('Speaking Club', 'speaking-club-aylik', 'Farklı seviyeler için özel gruplar ile konuşma pratiği yapın.',
'<p>Speaking Club, İngilizce konuşma becerilerinizi geliştirmek için tasarlanmış interaktif bir programdır. Seviyenize uygun gruplarla düzenli pratik yaparak özgüveninizi artırın.</p><h3>Neler Kazanacaksınız?</h3><ul><li>Akıcı konuşma becerisi</li><li>Doğru telaffuz</li><li>Güncel konular hakkında tartışma yeteneği</li><li>İngilizce düşünme alışkanlığı</li></ul>', true),

('Birebir Özel Ders', 'ozel-ders', 'Kişisel hedeflerinize ve eksiklerinize odaklanan yoğun program.',
'<p>Özel ders programımız, tamamen sizin ihtiyaçlarınıza göre şekillenir. İster sınav hazırlığı, ister iş İngilizcesi, ister genel gelişim olsun - hedefiniz ne olursa olsun yanınızdayız.</p><h3>Avantajlar</h3><ul><li>%100 kişiye özel müfredat</li><li>Esnek ders saatleri</li><li>Hızlı ilerleme</li><li>Sürekli geri bildirim</li></ul>', true),

('İş İngilizcesi', 'is-ingilizcesi', 'Profesyonel iş hayatında başarılı iletişim için gerekli İngilizce becerileri kazanın.',
'<p>İş İngilizcesi programımız, profesyonel hayatta ihtiyaç duyacağınız tüm iletişim becerilerini kapsar. Toplantılardan sunumlara, e-posta yazımından müzakere tekniklerine kadar.</p><h3>Kapsam</h3><ul><li>İş yazışmaları</li><li>Sunum teknikleri</li><li>Toplantı yönetimi</li><li>Müzakere becerileri</li><li>Networking İngilizcesi</li></ul>', true),

('Genel İngilizce', 'genel-ingilizce', 'A1''den C2''ye kadar tüm seviyelerde genel İngilizce eğitimi.',
'<p>Genel İngilizce programımız, dil öğrenme yolculuğunuzun her aşamasında yanınızda. Temel gramerden ileri düzey konuşma becerilerine kadar kapsamlı bir eğitim sunuyoruz.</p><h3>Seviyeler</h3><ul><li>A1-A2: Başlangıç</li><li>B1-B2: Orta Seviye</li><li>C1-C2: İleri Seviye</li></ul>', true);

-- Get the first course ID for variants (we'll use a placeholder approach)
-- In practice, you might want to use the actual UUIDs from the courses you just inserted

-- Insert Course Variants (using generated UUIDs - replace with actual course IDs)
INSERT INTO course_variants (course_id, title, mini_desc, description, price, capacity, start_date, is_featured, is_active) VALUES
-- IELTS variants (assuming first course ID)
('00000000-0000-0000-0000-000000000001', 'Grup Dersi', 'Max 6 kişilik sınıflarda etkili öğrenme',
'<ul><li>40 Saat Canlı Ders</li><li>Haftalık Speaking Club</li><li>5 Adet Essay Kontrolü</li><li>Ders Kayıtlarına Erişim</li></ul>',
4500, 6, '2026-02-15', false, true),

('00000000-0000-0000-0000-000000000001', 'Özel Ders Paketi', 'Birebir ilgi ve kişiye özel program',
'<ul><li>20 Saat Özel Ders</li><li>Esnek Ders Saatleri</li><li>Sınırsız Writing Kontrolü</li><li>Kişiye Özel Strateji Planı</li></ul>',
8500, 1, '2026-02-15', true, true),

-- Speaking Club variants (assuming second course ID)
('00000000-0000-0000-0000-000000000002', 'Aylık Üyelik', 'Haftalık 2 oturum, esnek saatler',
'<ul><li>8 Haftalık Oturum</li><li>Seviye Grupları</li><li>Sertifika</li><li>Kaynak Materyaller</li></ul>',
750, NULL, NULL, true, true),

('00000000-0000-0000-0000-000000000002', '3 Aylık Paket', '%20 indirimli paket fiyatı',
'<ul><li>24 Haftalık Oturum</li><li>Seviye Atlama Garantisi</li><li>Bonus Materyaller</li><li>Özel Etkinlikler</li></ul>',
1800, NULL, NULL, false, true),

-- Private Lesson variants (assuming third course ID)
('00000000-0000-0000-0000-000000000003', '10 Ders Paketi', 'Temel paket',
'<ul><li>10 Saat Birebir Ders</li><li>Ödev Takibi</li><li>Esnek Planlama</li><li>Materyal Desteği</li></ul>',
3500, 1, NULL, false, true),

('00000000-0000-0000-0000-000000000003', '20 Ders Paketi', 'En popüler seçenek',
'<ul><li>20 Saat Birebir Ders</li><li>Ödev Takibi</li><li>Speaking Practice</li><li>İlerleme Raporu</li><li>Bonus 2 Ders</li></ul>',
6000, 1, NULL, true, true);

-- Note: Replace the placeholder UUIDs (00000000-0000-0000-0000-000000000001, etc.)
-- with actual course IDs after inserting courses, or use this query pattern:
-- INSERT INTO course_variants (course_id, title, mini_desc, description, price, is_featured)
-- SELECT id, 'Grup Dersi', 'Max 6 kişilik sınıflarda', 'Description...', 4500, false
-- FROM courses WHERE slug = 'ielts';

-- Insert Testimonials
INSERT INTO testimonials (client_fullname, client_job, comment, rating, is_active) VALUES
('Elif Yılmaz', 'Yazılım Mühendisi', 'IELTS hazırlık kursu sayesinde hedeflediğim 7.5 band skoruna ulaştım. Eğitmenler çok ilgili ve destekleyici. Özellikle Speaking modülündeki gelişimim inanılmazdı!', 5, true),
('Ahmet Kaya', 'Üniversite Öğrencisi', 'Speaking Club''a katıldığımdan beri İngilizce konuşma özgüvenim çok arttı. Artık yabancılarla rahatça iletişim kurabiliyorum. Harika bir deneyimdi!', 5, true),
('Zeynep Demir', 'Pazarlama Müdürü', 'İş İngilizcesi kursunu tamamladıktan sonra uluslararası toplantılarda çok daha etkili iletişim kurmaya başladım. Yatırımın karşılığını fazlasıyla aldım.', 5, true),
('Mehmet Aksoy', 'Doktor', 'Özel ders programı tam ihtiyaçlarıma göre şekillendirildi. Esnek saatler ve kişiselleştirilmiş içerik sayesinde hızlı ilerleme kaydettim.', 5, true),
('Ayşe Çelik', 'Öğretmen', 'Çocuğum Mini Kids programına katıldı ve İngilizceye karşı büyük bir ilgi geliştirdi. Oyun tabanlı öğrenme metodu gerçekten çok etkili!', 5, true),
('Can Öztürk', 'Girişimci', '3 aylık yoğun IELTS programı sonunda Academic IELTS''te 8.0 aldım. Yurtdışı yüksek lisans hayalime bir adım daha yaklaştım!', 5, true),
('Selin Arslan', 'İK Uzmanı', 'Genel İngilizce kursu ile İngilizcemi B1''den B2''ye taşıdım. Sınıf ortamı çok iyiydi, eğitmenimiz sabırlı ve bilgilendiriciydi.', 4, true),
('Burak Yılmaz', 'Mimar', 'Speaking Club oturumları her zaman haftanın en keyifli anı. Farklı konularda tartışmak hem bilgimi artırıyor hem de konuşma becerimi geliştiriyor.', 5, true);

-- Insert FAQs
INSERT INTO faqs (question, answer, category_id, sort_order, is_active) VALUES
-- Genel (category_id = 1)
('Dersler nasıl yapılıyor?', 'Derslerimiz online olarak Zoom üzerinden gerçekleştirilmektedir. Kayıt olan öğrencilerimize ders linki e-posta ile gönderilir. İsterseniz derslere mobil cihazlarınızdan da katılabilirsiniz.', 1, 1, true),
('Ders saatlerini kendim belirleyebilir miyim?', 'Özel ders paketlerinde ders saatlerinizi tamamen sizin programınıza göre ayarlıyoruz. Grup dersleri için ise belirli saatler mevcuttur, ancak farklı saat dilimlerinde gruplarımız bulunmaktadır.', 1, 2, true),

-- IELTS (category_id = 2)
('IELTS kursu ne kadar sürüyor?', 'IELTS hazırlık kursumuz standart olarak 8 hafta sürmektedir. Ancak öğrencinin mevcut seviyesine ve hedef skoruna göre bu süre uzatılabilir veya kısaltılabilir.', 2, 1, true),
('IELTS sınavına kaç ay önce hazırlanmaya başlamalıyım?', 'Mevcut İngilizce seviyenize bağlı olarak değişmekle birlikte, ortalama 2-3 ay önceden hazırlanmaya başlamanızı öneriyoruz. Seviye tespit sınavımızla size en uygun süreyi belirleyebiliriz.', 2, 2, true),
('Sınav stratejileri öğretiliyor mu?', 'Evet, programımızda IELTS sınavının her bölümü için özel stratejiler ve zaman yönetimi teknikleri öğretiliyor. Uzun süredir IELTS eğitimi veren uzman eğitmenlerimizle çalışacaksınız.', 2, 3, true),

-- Speaking Club (category_id = 3)
('Speaking Club''a katılmak için minimum seviye gerekli mi?', 'Speaking Club''umuzda A2''den C2''ye kadar tüm seviyelere uygun gruplar bulunmaktadır. Seviyenize uygun gruba yerleştirilirsiniz, bu sayede rahat bir ortamda pratik yapabilirsiniz.', 3, 1, true),
('Speaking Club oturumları kaç kişilik?', 'Her oturumda maksimum 6 kişi bulunmaktadır. Bu sayede herkesin yeterince konuşma pratiği yapma imkanı olur ve eğitmenimiz herkese bireysel geri bildirim verebilir.', 3, 2, true),
('Toplantı konuları nasıl belirleniyor?', 'Her hafta farklı bir tema belirliyoruz: güncel olaylar, teknoloji, kültür, seyahat, iş hayatı gibi. Katılımcılarımızın da önerilerini dikkate alıyoruz.', 3, 3, true),

-- Ödeme (category_id = 4)
('Hangi ödeme yöntemlerini kabul ediyorsunuz?', 'Kredi kartı, banka kartı ve havale/EFT ile ödeme yapabilirsiniz. Kredi kartı ile taksitli ödeme seçeneğimiz de mevcuttur.', 4, 1, true),
('İade politikanız nedir?', 'İlk dersten sonraki 7 gün içinde memnun kalmazsanız tam iade yapıyoruz. Kurs başladıktan sonra yapılan iptallerde kalan ders sayısına göre kısmi iade yapılmaktadır.', 4, 2, true),
('Kurumsal eğitim için fiyat alabilir miyim?', 'Elbette, şirket veya kurumunuz için özel teklif hazırlamaktan mutluluk duyarız. Lütfen bizimle iletişime geçin, size en uygun çözümü sunalım.', 4, 3, true),

-- Teknik (category_id = 5)
('Hangi platformu kullanıyorsunuz?', 'Derslerimiz için Zoom kullanıyoruz. Ayrıca ders materyallerini ve ödevleri paylaşmak için Google Classroom ve额外 kaynaklara erişim için bir öğrenci portalı sağlıyoruz.', 5, 1, true),
('Teknik gereksinimler nelerdir?', 'Derslere katılmak için稳定的 internet bağlantısı, bir bilgisayar veya tablet, ve mikrofonlu kulaklık yeterlidir. Kamera kullanımı zorunlu olmasa da tavsiye edilir.', 5, 2, true);

-- Insert Contact Forms (sample submissions for testing)
INSERT INTO contact_forms (fullname, email, phone, subject, message, terms_accepted, status, ip_address, user_agent) VALUES
('Ayşe Demir', 'ayse.demir@example.com', '+905321234567', 'Genel', 'IELTS kursunuz hakkında bilgi almak istiyorum. Başlangıç seviyesindeyim, kaç ayda hedeflediğim 6.0 band skoruna ulaşabilirim?', true, 'read', '192.168.1.100', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'),
('Mehmet Yılmaz', 'mehmet.yilmaz@firmasi.com', '+905321234568', 'Kurumsal', 'Şirketimiz için yaklaşık 10 kişilik bir grup ile İş İngilizcesi eğitimi almak istiyoruz. Fiyat teklifi rica ediyorum.', true, 'pending', '192.168.1.101', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'),
('Zeynep Kaya', 'zeynepk@student.edu.tr', NULL, 'Öğrenci', 'Özel ders paketlerinizin fiyatları ve müfredat hakkında detaylı bilgi alabilir miyim?', true, 'replied', '192.168.1.102', 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)'),
('Caner Erkin', 'caner.erkin@example.com', '+905321234569', 'Speaking Club', 'Speaking Club''a katılmak istiyorum ancak şu an yurt dışındayım. Online katılım mümkün mü?', true, 'read', '192.168.1.103', 'Mozilla/5.0 (Linux; Android 10)');
