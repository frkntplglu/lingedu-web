import LegalPageLayout from "@/components/legal/LegalPageLayout";

export default function DistanceSalesAgreement() {
  return (
    <LegalPageLayout
      title="Mesafeli Satış Sözleşmesi"
      description="LingEdu Dil mesafeli satış sözleşmesi ön bilgilendirme formu."
      lastUpdated="28 Ocak 2026"
    >
      <h2 className="text-[15px] font-bold text-gray-900 dark:text-white mt-8 mb-3">MADDE 1 - TARAFLAR:</h2>
      
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-5 mb-2">1.1 SATICI</h3>
      <dl className="grid grid-cols-[140px_1fr] sm:grid-cols-[160px_1fr] gap-x-4 gap-y-2 text-sm mb-4">
        <dt className="font-semibold text-gray-900 dark:text-white">Ünvanı :</dt>
        <dd>LingEdu Dil Eğitim Hizmetleri</dd>
        <dt className="font-semibold text-gray-900 dark:text-white">Adresi :</dt>
        <dd>Düzce, Türkiye</dd>
        <dt className="font-semibold text-gray-900 dark:text-white">Telefon :</dt>
        <dd>+90 XXX XXX XX XX</dd>
        <dt className="font-semibold text-gray-900 dark:text-white">Email :</dt>
        <dd>info@lingedudil.com</dd>
      </dl>

      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-5 mb-2">1.2 HİZMET ALAN</h3>
      <dl className="grid grid-cols-[160px_1fr] sm:grid-cols-[180px_1fr] gap-x-4 gap-y-2 text-sm mb-4">
        <dt className="font-semibold text-gray-900 dark:text-white">Adı/ Soyadı/ Unvanı :</dt>
        <dd>{"{{Data}}"}</dd>
        <dt className="font-semibold text-gray-900 dark:text-white">Adresi :</dt>
        <dd>{"{{Data}}"}</dd>
        <dt className="font-semibold text-gray-900 dark:text-white">Telefon :</dt>
        <dd>{"{{Data}}"}</dd>
        <dt className="font-semibold text-gray-900 dark:text-white">Email :</dt>
        <dd>{"{{Data}}"}</dd>
      </dl>

      <h2 className="text-[15px] font-bold text-gray-900 dark:text-white mt-8 mb-3">MADDE 2 - SÖZLEŞMENİN KONUSU:</h2>
      <p className="mb-4 text-justify">
        İşbu sözleşme konusu, sözleşmenin üçüncü maddesinde özellikleri, nitelikleri ve satış fiyatı belirtilen 
        çevrimiçi eğitim hizmetleri ile ilgili olarak ürünün kullanım hakkını sağlayan son kullanıcı lisansı ile 
        ürün teslimi konusunda tarafların hak ve yükümlülüklerinin belirlenmesidir. İşbu sözleşme, 6502 sayılı 
        Tüketicinin Korunması Hakkında Kanun ve ilgili Mesafeli Sözleşmeler Yönetmeliği'ne uygun olarak düzenlenmiştir.
      </p>

      <h2 className="text-[15px] font-bold text-gray-900 dark:text-white mt-8 mb-3">MADDE 3 - SÖZLEŞME KONUSU ÜRÜNÜN TEMEL NİTELİKLERİ:</h2>
      <p className="mb-3 text-justify">
        Satın alınan ürünün adı, modeli, ürünün türü, miktarı, marka/modeli, rengi, adedi, satış bedeli ve ödeme şekli ve diğer satış özellikleri aşağıda belirtildiği gibidir.
      </p>
      <dl className="grid grid-cols-[180px_1fr] sm:grid-cols-[200px_1fr] gap-x-4 gap-y-2 text-sm mb-4">
        <dt className="font-semibold text-gray-900 dark:text-white">Ürün Adı :</dt>
        <dd>{"{{Data}}"}</dd>
        <dt className="font-semibold text-gray-900 dark:text-white">Ürün Adedi :</dt>
        <dd>{"{{Data}}"}</dd>
        <dt className="font-semibold text-gray-900 dark:text-white">Satış Fiyatı (KDV Dahil) :</dt>
        <dd>{"{{Data}}"}</dd>
        <dt className="font-semibold text-gray-900 dark:text-white">Teslimat Adresi :</dt>
        <dd>Dijital ortamda teslim ve ifa edilecektir.</dd>
        <dt className="font-semibold text-gray-900 dark:text-white">Teslim Edilecek Kişi :</dt>
        <dd>{"{{Data}}"}</dd>
        <dt className="font-semibold text-gray-900 dark:text-white">Ödeme Şekli :</dt>
        <dd>{"{{Data}}"}</dd>
      </dl>

      <h2 className="text-[15px] font-bold text-gray-900 dark:text-white mt-8 mb-3">MADDE 4 - GENEL HÜKÜMLER:</h2>
      <p className="mb-3 text-justify">
        4.1. ALICI, bu sözleşmede satışa konu ürünün temel nitelikleri, satış fiyatı ve ödeme şekli ile 
        teslimata ilişkin tüm ön bilgileri okuyup bilgi sahibi olduğunu ve elektronik ortamda gerekli 
        teyidi verdiğini beyan eder.
      </p>
      <p className="mb-3 text-justify">
        4.2. Ürün, ALICI'nın belirttiği e-posta adresine ve dijital platforma erişim bilgileri ile birlikte 
        teslim edilecektir. Teslim anında ALICI'nın hazır bulunmaması halinde bile SATICI, edimini tam 
        ve eksiksiz olarak yerine getirmiş olarak kabul edilecektir.
      </p>
      <p className="mb-4 text-justify">
        4.3. SATICI, sözleşme konusu ürünü eksiksiz, siparişte belirtilen niteliklere uygun ve varsa garanti 
        belgeleri ve kullanım kılavuzları ile teslim etmeyi kabul ve taahhüt eder.
      </p>

      <h2 className="text-[15px] font-bold text-gray-900 dark:text-white mt-8 mb-3">MADDE 5 - HİZMET BEDELİ VE ÖDEME:</h2>
      <p className="mb-3">
        Hizmet bedeli, sipariş sırasında belirtilen tutardır. Tüm vergiler dahildir. 
        Ödeme, kredi kartı, banka kartı veya havale/EFT yoluyla yapılabilir.
      </p>
      <p className="mb-4">
        Taksitli ödemelerde banka komisyonu uygulanabilir. Taksit seçenekleri sipariş 
        sırasında gösterilmektedir.
      </p>

      <h2 className="text-[15px] font-bold text-gray-900 dark:text-white mt-8 mb-3">MADDE 6 - CAYMA HAKKI:</h2>
      <p className="mb-3 text-justify">
        6.1. ALICI, hizmetin başlamasından itibaren <strong className="font-semibold text-gray-800 dark:text-gray-200">14 (ondört) gün</strong> içinde herhangi bir 
        gerekçe göstermeksizin ve cezai şart ödemeksizin sözleşmeden cayma hakkına sahiptir.
      </p>
      <p className="mb-3 text-justify">
        6.2. Cayma hakkının kullanılması için bu süre içinde SATICI'ya faks, e-posta veya telefon ile 
        yazılı bildirimde bulunulması ve ürünün kullanılmamış olması gerekmektedir. Bu hakkın kullanılması 
        halinde, 3. kişiye veya ALICI'ya teslim edilen ürünün SATICI'ya gönderildiğine ilişkin kargo teslim 
        tutanağı örneği ile fatura aslının iadesi zorunludur.
      </p>
      <p className="mb-3 text-justify">
        6.3. Cayma hakkının kullanılması halinde SATICI, cayma bildiriminin kendisine ulaştığı tarihten 
        itibaren en geç 14 gün içinde toplam bedeli ALICI'ya iade edecektir.
      </p>
      <p className="mb-3">
        <strong className="font-semibold text-gray-800 dark:text-gray-200">6.4. Cayma hakkının kullanılamayacağı durumlar:</strong>
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-1">
        <li>Cayma süresi içinde tüm derslere katılım sağlanmışsa</li>
        <li>Dijital içeriklere tam erişim sağlanmışsa</li>
        <li>ALICI'nın isteği üzerine özelleştirilmiş içerikler</li>
        <li>İcra başlamış hizmetler</li>
      </ul>

      <h2 className="text-[15px] font-bold text-gray-900 dark:text-white mt-8 mb-3">MADDE 7 - YETKİLİ MAHKEME:</h2>
      <p className="mb-3 text-justify">
        İşbu sözleşmeden doğan uyuşmazlıklarda şikâyet ve itirazlar, aşağıdaki kanunda belirtilen parasal 
        sınırlar dahilinde tüketicinin yerleşim yerinin bulunduğu veya tüketici işleminin yapıldığı yerdeki 
        tüketici sorunları hakem heyetine veya tüketici mahkemesine yapılacaktır. Parasal sınıra ilişkin 
        bilgiler aşağıdadır:
      </p>
      <p className="mb-4 text-justify">
        6502 Sayılı Tüketicinin Korunması Hakkında Kanun'un 68. Maddesi gereği değeri belirli miktarın 
        altında olan uyuşmazlıklarda ilçe/il tüketici hakem heyetleri görevli olup, bu değerin üzerindeki 
        uyuşmazlıklar için Tüketici Mahkemeleri görevlidir.
      </p>

      <h2 className="text-[15px] font-bold text-gray-900 dark:text-white mt-8 mb-3">MADDE 8 - YÜRÜRLÜK:</h2>
      <p className="mb-4 text-justify">
        ALICI, Site üzerinden verdiği siparişe ait ödemeyi gerçekleştirdiğinde işbu sözleşmenin tüm 
        şartlarını kabul etmiş sayılır. SATICI, siparişin gerçekleşmesi öncesinde işbu sözleşmenin 
        sitede ALICI tarafından okunup kabul edildiğine dair onay alacak şekilde gerekli yazılımsal 
        düzenlemeleri yapmakla yükümlüdür.
      </p>
      <dl className="grid grid-cols-[100px_1fr] gap-x-4 gap-y-2 text-sm">
        <dt className="font-semibold text-gray-900 dark:text-white">SATICI :</dt>
        <dd>LingEdu Dil Eğitim Hizmetleri</dd>
        <dt className="font-semibold text-gray-900 dark:text-white">ALICI :</dt>
        <dd>{"{{Data}}"}</dd>
        <dt className="font-semibold text-gray-900 dark:text-white">TARİH :</dt>
        <dd>{"{{Data}}"}</dd>
      </dl>
    </LegalPageLayout>
  );
}
