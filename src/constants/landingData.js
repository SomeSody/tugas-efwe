export const NAV_LINKS = [
  { label: "Fitur", href: "#fitur" },
  { label: "FAQ", href: "#faq" },
]

export const HERO_DATA = {
  headline: "Sistem CRM Paling Simpel untuk Naikkan Penjualan",
  subheadline:
    "Kelola data pelanggan, lacak leads, dan tingkatkan konversi penjualan bisnis Anda — semua dalam satu platform yang mudah digunakan. Mulai gratis, tanpa kartu kredit.",
  primaryCta: { label: "Mulai Gratis", href: "/register" },
  secondaryCta: { label: "Pelajari Lebih Lanjut", href: "#fitur" },
}

export const TRUST_DATA = {
  title: "Dipercaya oleh +10,000 Pebisnis di Indonesia",
  stats: [
    { value: "10,000+", label: "Pengguna Aktif" },
    { value: "98%", label: "Kepuasan Pelanggan" },
    { value: "50M+", label: "Transaksi Diproses" },
    { value: "24/7", label: "Dukungan Pelanggan" },
  ],
}

export const FEATURES_DATA = [
  {
    id: "kelola-data",
    title: "Kelola Data Pelanggan",
    description:
      "Simpan dan organize semua data pelanggan Anda dalam satu tempat. Akses riwayat interaksi, catatan pembelian, dan preferensi pelanggan dengan mudah.",
    icon: "Users",
  },
  {
    id: "otomatisasi",
    title: "Otomatisasi Follow-Up",
    description:
      "Atur pengingat otomatis untuk follow-up pelanggan. Tidak ada lagi leads yang terlewat atau pelanggan yang terlantar.",
    icon: "Zap",
  },
  {
    id: "laporan",
    title: "Laporan & Analitik",
    description:
      "Dapatkan insight bisnis real-time dengan dashboard analitik yang intuitif. Pantau performa tim sales dan tren penjualan Anda.",
    icon: "BarChart3",
  },
]

export const FAQ_DATA = [
  {
    id: "faq-1",
    question: "Apakah benar-benar gratis untuk memulai?",
    answer:
      "Ya! Kami menyediakan paket gratis selamanya untuk hingga 100 kontak. Anda bisa upgrade kapan saja ketika bisnis Anda berkembang.",
  },
  {
    id: "faq-2",
    question: "Apakah data saya aman?",
    answer:
      "Keamanan data adalah prioritas utama kami. Semua data dienkripsi end-to-end dan disimpan di server yang tersertifikasi ISO 27001.",
  },
  {
    id: "faq-3",
    question: "Bisa diintegrasikan dengan tools lain?",
    answer:
      "Tentu saja. CRM kami mendukung integrasi dengan WhatsApp Business, email marketing tools, dan berbagai platform e-commerce populer.",
  },
  {
    id: "faq-4",
    question: "Apakah ada dukungan teknis?",
    answer:
      "Kami menyediakan dukungan 24/7 melalui live chat, email, dan telepon. Tim kami siap membantu Anda kapan saja.",
  },
]

export const PRICING_DATA = [
  {
    id: "free",
    name: "Free",
    price: "Rp 0",
    period: "selamanya",
    description: "Cocok untuk pebisnis pemula yang ingin mencoba.",
    features: [
      "Hingga 100 kontak",
      "Dashboard dasar",
      "1 pengguna",
      "Dukungan email",
    ],
    cta: "Mulai Gratis",
    ctaHref: "/register",
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "Rp 199.000",
    period: "/bulan",
    description: "Untuk bisnis yang serius meningkatkan penjualan.",
    features: [
      "Kontak tak terbatas",
      "Dashboard analitik lengkap",
      "Hingga 10 pengguna",
      "Integrasi WhatsApp & Email",
      "Dukungan prioritas 24/7",
    ],
    cta: "Coba 14 Hari Gratis",
    ctaHref: "/register",
    highlighted: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Solusi khusus untuk tim besar dan korporasi.",
    features: [
      "Semua fitur Pro",
      "Pengguna tak terbatas",
      "API akses penuh",
      "Manajer akun khusus",
      "SLA 99.9% uptime",
    ],
    cta: "Hubungi Kami",
    ctaHref: "/register",
    highlighted: false,
  },
]

export const FINAL_CTA_DATA = {
  headline: "Siap Tingkatkan Penjualan Anda?",
  subheadline: "Mulai Sekarang, Gratis 14 Hari. Tanpa kartu kredit.",
  ctaLabel: "Coba Gratis Sekarang",
  ctaHref: "/register",
}

export const FOOTER_DATA = {
  copyright: "© 2026 CRM App. All rights reserved.",
  links: [
    { label: "Syarat & Ketentuan", href: "#" },
    { label: "Kebijakan Privasi", href: "#" },
  ],
}
