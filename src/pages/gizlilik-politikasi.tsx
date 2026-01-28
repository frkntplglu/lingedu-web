import LegalPageLayout from "@/components/legal/LegalPageLayout";

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout
      title="Gizlilik Politikası"
      description="LingEdu Dil gizlilik politikası ve kişisel verilerin korunması hakkında bilgilendirme."
      lastUpdated="28 Ocak 2026"
    >
      <h2 className="text-[15px] font-bold text-gray-900 dark:text-white mt-8 mb-3">MADDE 1 - GİRİŞ:</h2>
      <p className="mb-4 text-justify">
        LingEdu Dil olarak, kişisel verilerinizin güvenliği bizim için önemlidir. Bu gizlilik politikası, 
        hangi verileri topladığımızı, nasıl kullandığımızı ve koruduğumuzu açıklamaktadır.
      </p>

      <h2 className="text-[15px] font-bold text-gray-900 dark:text-white mt-8 mb-3">MADDE 2 - TOPLANAN VERİLER:</h2>
      <p className="mb-3">Aşağıdaki kişisel verileri toplayabiliriz:</p>
      
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-5 mb-2">2.1 Kimlik Bilgileri</h3>
      <p className="mb-3">Ad, soyad gibi kişisel kimlik bilgileriniz kayıt ve hizmet sunumu için toplanmaktadır.</p>
      
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-5 mb-2">2.2 İletişim Bilgileri</h3>
      <p className="mb-3">E-posta adresi ve telefon numarası gibi iletişim bilgileriniz sizinle iletişim kurmak için kullanılmaktadır.</p>
      
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-5 mb-2">2.3 Ödeme Bilgileri</h3>
      <p className="mb-3">Kredi kartı bilgileri güvenli ödeme altyapısı tarafından şifreli olarak işlenmekte ve saklanmaktadır.</p>
      
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-5 mb-2">2.4 Eğitim Bilgileri</h3>
      <p className="mb-3">Dil seviyesi, ders geçmişi ve ilerleme kayıtları eğitim hizmetlerinin sunulması için işlenmektedir.</p>
      
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-5 mb-2">2.5 Teknik Veriler</h3>
      <p className="mb-3">IP adresi, tarayıcı türü ve cihaz bilgisi gibi teknik veriler site güvenliği ve analiz için toplanmaktadır.</p>

      <h2 className="text-[15px] font-bold text-gray-900 dark:text-white mt-8 mb-3">MADDE 3 - VERİLERİN KULLANIM AMAÇLARI:</h2>
      <p className="mb-3">Kişisel verilerinizi aşağıdaki amaçlarla kullanıyoruz:</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Eğitim hizmetlerinin sunulması ve yönetimi</li>
        <li>Ödeme işlemlerinin gerçekleştirilmesi</li>
        <li>Müşteri desteği ve iletişim faaliyetleri</li>
        <li>Eğitim materyallerinin kişiselleştirilmesi</li>
        <li>Yasal yükümlülüklerin yerine getirilmesi</li>
        <li>Hizmet kalitesinin artırılması</li>
      </ul>

      <h2 className="text-[15px] font-bold text-gray-900 dark:text-white mt-8 mb-3">MADDE 4 - VERİLERİN PAYLAŞIMI:</h2>
      <p className="mb-3">
        4.1. Kişisel verileriniz, yasal zorunluluklar dışında üçüncü kişilerle paylaşılmaz.
      </p>
      <p className="mb-3">
        4.2. Ödeme işlemleri için güvenli ödeme altyapı sağlayıcıları ile çalışıyoruz.
      </p>
      <p className="mb-3">
        4.3. Veriler yurt dışına aktarılmamaktadır.
      </p>

      <h2 className="text-[15px] font-bold text-gray-900 dark:text-white mt-8 mb-3">MADDE 5 - VERİ GÜVENLİĞİ:</h2>
      <p className="mb-3">
        Verilerinizi korumak için endüstri standardı güvenlik önlemleri kullanıyoruz:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>SSL/TLS şifreleme ile güvenli veri iletimi</li>
        <li>Güvenli veri depolama altyapısı</li>
        <li>Erişim kontrolü ve yetkilendirme sistemleri</li>
        <li>Düzenli güvenlik denetimleri ve güncellemeler</li>
      </ul>

      <h2 className="text-[15px] font-bold text-gray-900 dark:text-white mt-8 mb-3">MADDE 6 - ÇEREZLER (COOKIES):</h2>
      <p className="mb-3">
        6.1. Sitemizde kullanıcı deneyimini iyileştirmek için çerezler kullanılmaktadır.
      </p>
      <p className="mb-3">
        6.2. Çerezleri tarayıcı ayarlarınızdan devre dışı bırakabilirsiniz; ancak bu durumda 
        bazı site özellikleri çalışmayabilir.
      </p>

      <h2 className="text-[15px] font-bold text-gray-900 dark:text-white mt-8 mb-3">MADDE 7 - VERİ SAKLAMA SÜRESİ:</h2>
      <p className="mb-4 text-justify">
        Kişisel verileriniz, hizmet ilişkisi süresince ve yasal yükümlülükler gereği gerekli 
        olan süre boyunca (en fazla 10 yıl) saklanır. Bu süre sonunda veriler silinir veya anonim hale getirilir.
      </p>

      <h2 className="text-[15px] font-bold text-gray-900 dark:text-white mt-8 mb-3">MADDE 8 - HAKLARINIZ:</h2>
      <p className="mb-3">KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
        <li>İşlenen veriler hakkında bilgi talep etme</li>
        <li>Verilerin düzeltilmesini isteme</li>
        <li>Verilerin silinmesini veya yok edilmesini talep etme</li>
        <li>İşlemeye itiraz etme</li>
        <li>Verilerin aktarıldığı üçüncü kişileri öğrenme</li>
      </ul>

      <h2 className="text-[15px] font-bold text-gray-900 dark:text-white mt-8 mb-3">MADDE 9 - İLETİŞİM:</h2>
      <p className="mb-4">
        Gizlilik politikası hakkında sorularınız veya KVKK kapsamındaki haklarınızı kullanmak için 
        aşağıdaki iletişim bilgilerinden bize ulaşabilirsiniz:
      </p>
      <dl className="grid grid-cols-[140px_1fr] sm:grid-cols-[160px_1fr] gap-x-4 gap-y-2 text-sm">
        <dt className="font-semibold text-gray-900 dark:text-white">Email :</dt>
        <dd>info@lingedudil.com</dd>
        <dt className="font-semibold text-gray-900 dark:text-white">Adres :</dt>
        <dd>Düzce, Türkiye</dd>
        <dt className="font-semibold text-gray-900 dark:text-white">Telefon :</dt>
        <dd>+90 XXX XXX XX XX</dd>
      </dl>
    </LegalPageLayout>
  );
}
