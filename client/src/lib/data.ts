// Varoluşun İşçiliği — Yapılandırılmış Proje Verileri
// Tasarım: İnziva Odası — Derin Karanlık Minimalizm

export const IMAGES = {
  hero: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028218705/gtvHbRieRyiEuv4Eb54qMV/hero-cosmic-YJvfN4NnaVXkF2MCzGN4Kp.webp",
  architecture: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028218705/gtvHbRieRyiEuv4Eb54qMV/section-architecture-JejuWQqJcRTsi3pdyzbSv9.webp",
  modules: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028218705/gtvHbRieRyiEuv4Eb54qMV/section-modules-Z2tZqxgyCGYzEnWXeaxLRp.webp",
  team: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028218705/gtvHbRieRyiEuv4Eb54qMV/section-team-nuNBf8qJDm4Nr6wGiBWBXF.webp",
  roadmap: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028218705/gtvHbRieRyiEuv4Eb54qMV/section-roadmap-MBGvkCpFHuMqn6UK26Styi.webp",
  sistemMimarisi: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028218705/gtvHbRieRyiEuv4Eb54qMV/sistem_mimarisi_bf90f294.png",
  kullaniciAkisi: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028218705/gtvHbRieRyiEuv4Eb54qMV/kullanici_akisi_4b8a706c.png",
  gantt: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028218705/gtvHbRieRyiEuv4Eb54qMV/gantt_zamancizgisi_b33ddcfb.png",
  ekipOrganizasyon: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028218705/gtvHbRieRyiEuv4Eb54qMV/ekip_organizasyon_e5fb9ead.png",
};

export const NAV_ITEMS = [
  { id: "vizyon", label: "Vizyon", number: "01" },
  { id: "mimari", label: "Mimari", number: "02" },
  { id: "moduller", label: "Modüller", number: "03" },
  { id: "ekip", label: "Ekip", number: "04" },
  { id: "yolharitasi", label: "Yol Haritası", number: "05" },
  { id: "vizyon-uzun", label: "Gelecek", number: "06" },
];

export const VALUE_PROPOSITIONS = [
  {
    title: "Radikal Gizlilik",
    subtitle: "Zero-Knowledge Architecture",
    description:
      "Kullanıcıların en mahrem anıları ve psikolojik verileri dışarıya sızdırılmadan, kendi sunucularımızda barındırılan Local LLM'ler ile analiz edilecektir. Hiçbir veri üçüncü parti servislere gönderilmeyecektir.",
    icon: "shield",
  },
  {
    title: "Offline-First PWA",
    subtitle: "İnziva Desteği",
    description:
      "Makaledeki 'İnziva Randevusu' konseptine saygı duymak adına, kullanıcılar internet bağlantısı olmadan da verilerini girebilecek, sistem çevrimiçi olduğunda güvenli senkronizasyon sağlayacaktır.",
    icon: "wifi-off",
  },
  {
    title: "Bütüncül Sentez",
    subtitle: "Mise en place ve Pişirme",
    description:
      "Tek boyutlu kariyer testlerinin aksine, 6 farklı kategoriden toplanan dağınık veriler, NLP algoritmalarıyla anlamlı bir bütüne dönüştürülecektir.",
    icon: "layers",
  },
];

export const TECH_STACK = [
  { layer: "Frontend", tech: "Next.js (React 18+), Tailwind CSS, Zustand", reason: "PWA desteği, SSR, hızlı render, minimalist arayüz." },
  { layer: "Offline Depolama", tech: "IndexedDB (Dexie.js)", reason: "Çevrimdışı veri saklama ve senkronizasyon." },
  { layer: "Backend", tech: "FastAPI (Python 3.11+)", reason: "Hızlı asenkron API, AI/NLP kütüphaneleriyle doğal uyum." },
  { layer: "Veritabanı", tech: "PostgreSQL 16", reason: "Şifrelenmiş metinler, kullanıcı profilleri, test sonuçları." },
  { layer: "Önbellek", tech: "Redis 7", reason: "Hızlı veri erişimi ve oturum yönetimi." },
  { layer: "Yapay Zeka", tech: "Llama 3 8B / Mistral 7B (Self-Hosted)", reason: "Dış API'lere veri göndermeden metin analizi ve sentez." },
  { layer: "NLP Araçları", tech: "spaCy, NLTK, Sentence-Transformers", reason: "Duygu analizi, tema çıkarımı, semantik benzerlik." },
  { layer: "Konteyner", tech: "Docker, Docker Compose", reason: "Tüm bağımlılıkların tek komutla ayağa kaldırılması." },
  { layer: "CI/CD", tech: "GitHub Actions", reason: "Otomatik test, lint kontrolü ve dağıtım." },
  { layer: "Sunucu", tech: "Self-Managed VPS", reason: "KVKK uyumluluğu, verilerin Türkiye'de kalması." },
];

export const MODULES = [
  {
    number: "01",
    title: "İnziva Odası",
    subtitle: "Kullanıcı Kayıt ve Güvenli Alan",
    description:
      "Kullanıcının sisteme güvenli bir şekilde giriş yapması ve 'Radikal Dürüstlük ve Beklenti Detoksu' sözleşmesini onaylaması. Parola aynı zamanda veritabanı şifreleme anahtarının türetilmesinde kullanılır.",
    quote:
      "Bu analiz sürecinde; 'Hangi meslek daha çok para kazandırır, hangi unvan havalıdır, ailem benden ne bekliyor' gibi dışsal zehirleri mutfağın kapısında bırakıyorum.",
  },
  {
    number: "02",
    title: "Dijital Şâkile Defteri",
    subtitle: "Veri Toplama Merkezi",
    description:
      "Makaledeki 6 kategorinin dijital karşılığı: Bilimsel Ölçüm Araçları (Enneagram, RIASEC, MBTI), Biyografik Arkeoloji (Sıfır Noktası mülakatı), İçsel Termodinamik Verileri (Akış listesi, Kutsal Izdırap radarı, Gönüllü Hamallık kapasitesi).",
    categories: [
      "Bilimsel Ölçüm Araçları",
      "Biyografik Arkeoloji",
      "İçsel Termodinamik Verileri",
      "Sosyal Aynalama",
      "Dijital Ayak İzi",
      "Zihinsel Hijyen",
    ],
  },
  {
    number: "03",
    title: "Sosyal Aynalama",
    subtitle: "Johari Penceresi Modülü",
    description:
      "Kullanıcı, 3 farklı kişiye (aile üyesi, eski dost, mevcut arkadaş) anonim geri bildirim linkleri oluşturur. Zahmetsizlik Sorusu, Kriz Sorusu ve Uyumsuzluk Sorusu içeren formlar ile dış bakış açısı toplanır.",
    questions: [
      "Zahmetsizlik Sorusu — Hangi işleri hiç zorlanmadan yapıyor?",
      "Kriz Sorusu — Zor anlarda nasıl tepki veriyor?",
      "Uyumsuzluk Sorusu — Hangi ortamlarda huzursuz oluyor?",
    ],
  },
  {
    number: "04",
    title: "Çapraz Analiz Motoru",
    subtitle: "Pişirme Aşaması",
    description:
      "Sistemin kalbi. Kantitatif çapraz referanslama, kalitatif NLP analizi ve bütüncül sentez olmak üzere üç aşamalı analiz süreci. Local LLM tüm verileri çapraz analiz ederek 'Nihai Mesleki Algoritma'yı ortaya çıkarır.",
    stages: [
      { name: "Kantitatif Çapraz Referanslama", desc: "Enneagram, RIASEC ve MBTI arasındaki tutarlılıklar ve çelişkiler" },
      { name: "Kalitatif NLP Analizi", desc: "Duygu analizi, tema çıkarımı, kelime frekans analizi" },
      { name: "Bütüncül Sentez", desc: "Tüm verilerin Local LLM ile çapraz analizi" },
    ],
  },
  {
    number: "05",
    title: "Zihin Haritası ve Rapor",
    subtitle: "Sunum Katmanı",
    description:
      "Dinamik Zihin Haritası, Radar Grafikleri (5 boyut) ve Nihai Mesleki Algoritma raporu. Kullanıcının şâkilesine uygun mesleki yönelimleri, güçlü yönleri ve kör noktaları adım adım açıklar.",
    dimensions: [
      "Ontolojik Arkeoloji",
      "Enerji Termodinamiği",
      "Aksiyolojik Pusula",
      "Istırabın Estetiği",
      "Johari Penceresi",
    ],
  },
];

export const TEAM_MEMBERS = [
  {
    role: "Proje Yöneticisi",
    abbr: "PM",
    responsibility: "Felsefenin dijital ürüne doğru aktarıldığından emin olmak. Ekipler arası koordinasyon, sprint planlama.",
    skills: "Agile/Scrum, ürün yönetimi, iletişim",
  },
  {
    role: "Psikolog / SME",
    abbr: "PSY",
    responsibility: "Kavramların algoritmik mantığını yazılımcılara çevirmek. Analiz metodolojisinin bilimsel geçerliliğini denetlemek.",
    skills: "Klinik psikoloji, psikometri, Enneagram/MBTI sertifikasyonu",
  },
  {
    role: "UI/UX Tasarımcısı",
    abbr: "UX",
    responsibility: "'İnziva' hissi veren, minimalist ve karanlık mod destekli arayüz tasarlamak.",
    skills: "Figma, kullanıcı araştırması, erişilebilirlik, tipografi",
  },
  {
    role: "Frontend Geliştirici",
    abbr: "FE",
    responsibility: "PWA mimarisini kurmak, çevrimdışı çalışma desteğini sağlamak, interaktif formları geliştirmek.",
    skills: "React/Next.js, TypeScript, PWA, IndexedDB",
  },
  {
    role: "Backend Geliştirici",
    abbr: "BE",
    responsibility: "API geliştirme, veritabanı şifreleme, güvenlik katmanları, senkronizasyon mekanizması.",
    skills: "Python/FastAPI, PostgreSQL, Redis, Docker",
  },
  {
    role: "AI/NLP Mühendisi",
    abbr: "AI",
    responsibility: "Local LLM kurulumu, Türkçe fine-tuning, NLP pipeline'ları, sentez prompt mühendisliği.",
    skills: "Transformers, spaCy, Ollama, prompt engineering",
  },
  {
    role: "QA Uzmanı",
    abbr: "QA",
    responsibility: "Fonksiyonel test, güvenlik testi, erişilebilirlik testi, performans testi.",
    skills: "Test otomasyon, güvenlik testi, WCAG standartları",
  },
];

export const ROADMAP_PHASES = [
  {
    phase: "Faz 1",
    title: "Kavramsal Temellendirme",
    weeks: "Hafta 1–2",
    tasks: [
      "Makalenin derinlemesine analizi ve kavramsal çerçevenin oluşturulması",
      "Psikolog ile birlikte analiz metodolojisinin algoritmik mantığının yazılması",
      "Kullanıcı personaları ve kullanıcı hikayeleri (user stories) oluşturulması",
      "Wireframe ve bilgi mimarisi tasarımı",
    ],
  },
  {
    phase: "Faz 2",
    title: "Altyapı Kurulumu",
    weeks: "Hafta 3–4",
    tasks: [
      "Docker Compose ortamının hazırlanması",
      "Veritabanı şeması ve şifreleme altyapısı",
      "CI/CD pipeline kurulumu",
      "Frontend iskelet yapısı ve tasarım sistemi",
    ],
  },
  {
    phase: "Faz 3",
    title: "Çekirdek Geliştirme",
    weeks: "Hafta 5–8",
    tasks: [
      "Kayıt/giriş ve şifreleme modülü",
      "Dijital Şâkile Defteri formları",
      "Sosyal Aynalama (anonim link sistemi)",
      "PWA ve offline depolama",
    ],
  },
  {
    phase: "Faz 4",
    title: "AI Entegrasyonu",
    weeks: "Hafta 9–10",
    tasks: [
      "Local LLM kurulumu ve Türkçe fine-tuning",
      "NLP pipeline'ları (duygu analizi, tema çıkarımı)",
      "Çapraz Analiz Motoru geliştirme",
      "Sentez prompt mühendisliği",
    ],
  },
  {
    phase: "Faz 5",
    title: "Sunum ve Test",
    weeks: "Hafta 11–12",
    tasks: [
      "Zihin Haritası ve Radar Grafikleri",
      "Nihai Rapor oluşturucu",
      "Kapsamlı QA ve güvenlik testleri",
      "Erişilebilirlik ve performans optimizasyonu",
    ],
  },
  {
    phase: "Faz 6",
    title: "Lansman",
    weeks: "Hafta 13–14",
    tasks: [
      "Beta test grubu ile kullanıcı testleri",
      "Geri bildirim döngüsü ve iyileştirmeler",
      "Üretim ortamına dağıtım",
      "Dokümantasyon ve bakım planı",
    ],
  },
];

export const FUTURE_VISION = [
  {
    title: "Türkiye Şâkile Haritası",
    description: "Anonim ve toplu verilerden oluşturulan, Türkiye genelinde mesleki eğilim ve şâkile dağılımlarını gösteren interaktif harita.",
  },
  {
    title: "Kurumsal B2B Modüller",
    description: "Şirketlerin çalışanlarının fıtrat-meslek uyumunu analiz etmesi için kurumsal lisanslama ve toplu analiz araçları.",
  },
  {
    title: "Eğitim Kurumları Entegrasyonu",
    description: "Üniversiteler ve liselerin kariyer danışmanlık merkezleriyle entegre çalışan, öğrenci yönlendirme modülü.",
  },
  {
    title: "Mentörlük Platformu",
    description: "Benzer şâkile profillerine sahip deneyimli profesyonellerle eşleşme ve mentorluk sistemi.",
  },
];
