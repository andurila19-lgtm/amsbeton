export interface ConcreteGrade {
  grade: string;
  name: string;
  strengthKg: string;
  strengthMpa: string;
  slump: string;
  category: string;
  recommendedFor: string[];
  description: string;
  badge?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  specs: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  concreteGrade: string;
  volume: string;
  description: string;
  image: string;
  isIllustration?: boolean;
}

export const COMPANY_INFO = {
  legalName: "CV Anugerah Mecca Sejahtera",
  brandName: "AMS Beton",
  tagline: "Penyedia Beton Ready Mix & Layanan Pengecoran",
  shortDesc: "Penyedia pasokan beton cor ready mix dan layanan sewa pompa beton dengan standar mutu SNI untuk proyek residensial, komersial, maupun infrastruktur.",
  phone: "0812-3553-2223",
  phoneFormatted: "+62 812-3553-2223",
  whatsappNumber: "6281235532223",
  whatsappMessage: "Halo AMS Beton, saya ingin konsultasi dan meminta penawaran harga beton cor ready mix.",
  officeAddress: "Area Operasional & Distribusi Wilayah Jabodetabek dan Sekitarnya",
  batchingPlantLocations: [
    "Jaringan suplai pengiriman mencakup wilayah Jakarta, Bogor, Depok, Tangerang, Bekasi, dan Karawang.",
    "Pengiriman dikoordinasikan dari titik batching plant terdekat dengan lokasi proyek pemesan.",
    "Jadwal pengiriman dan ketersediaan slot armada diatur sesuai kesiapan lokasi pengecoran."
  ],
  workingHours: "Senin - Sabtu: 07.30 - 17.30 WIB (Layanan pengecoran malam / 24 jam dapat dikoordinasikan sesuai jadwal proyek)",
  standards: [
    { title: "SNI 2847:2019", subtitle: "Acuan Persyaratan Beton Struktural untuk Bangunan Gedung" },
    { title: "PBI 1971 N.I.-2", subtitle: "Pedoman Standar Beton Bertulang Indonesia" },
    { title: "ASTM C94", subtitle: "Spesifikasi Acuan Teknis Ready-Mixed Concrete" }
  ]
};

export const CONCRETE_GRADES: ConcreteGrade[] = [
  {
    grade: "K-175",
    name: "Beton Cor Mutu K-175",
    strengthKg: "175 kg/cm²",
    strengthMpa: "fc' 14.5 MPa",
    slump: "12 ± 2 cm",
    category: "Non-Struktural",
    recommendedFor: [
      "Lantai kerja (lean concrete / rabat beton)",
      "Pondasi dasar saluran drainase",
      "Perkerasan tanah sebelum cor struktural",
      "Jalan setapak non-beban kendaraan"
    ],
    description: "Mutu beton untuk pekerjaan non-struktural sebagai lapisan dasar lantai kerja guna meratakan permukaan dan melindungi tulangan."
  },
  {
    grade: "K-200",
    name: "Beton Cor Mutu K-200",
    strengthKg: "200 kg/cm²",
    strengthMpa: "fc' 16.6 MPa",
    slump: "12 ± 2 cm",
    category: "Non-Struktural",
    recommendedFor: [
      "Jalan lingkungan pemukiman non-truk",
      "Lantai garasi mobil pribadi",
      "Lapangan parkir kendaraan roda empat ringan",
      "Pondasi pagar keliling & rabat keliling gedung"
    ],
    description: "Digunakan pada pekerjaan perkerasan jalan lingkungan pemukiman dengan intensitas lalu lintas ringan serta lantai garasi rumah."
  },
  {
    grade: "K-225",
    name: "Beton Cor Mutu K-225",
    strengthKg: "225 kg/cm²",
    strengthMpa: "fc' 18.7 MPa",
    slump: "12 ± 2 cm",
    category: "Struktural Ringan",
    recommendedFor: [
      "Dak cor lantai rumah tinggal 2 lantai",
      "Sloof dan balok pengikat",
      "Kolom praktis dan tangga rumah",
      "Dudukan tandon air & kanopi beton"
    ],
    description: "Pilihan umum untuk pengecoran dak lantai rumah tinggal tingkat yang membutuhkan kekuatan struktur bertulang."
  },
  {
    grade: "K-250",
    name: "Beton Cor Mutu K-250",
    strengthKg: "250 kg/cm²",
    strengthMpa: "fc' 20.8 MPa",
    slump: "12 ± 2 cm",
    category: "Struktural Menengah",
    badge: "Pilihan Umum",
    recommendedFor: [
      "Dak rumah bertingkat & ruko 2-3 lantai",
      "Jalan komplek perumahan & akses ruko",
      "Pondasi tapak (footplate) & bore pile",
      "Kolom dan balok utama bangunan"
    ],
    description: "Standar yang umum direkomendasikan untuk konstruksi struktur beton bertulang rumah tinggal bertingkat dan bangunan ruko."
  },
  {
    grade: "K-275",
    name: "Beton Cor Mutu K-275",
    strengthKg: "275 kg/cm²",
    strengthMpa: "fc' 22.8 MPa",
    slump: "12 ± 2 cm",
    category: "Struktural Menengah",
    recommendedFor: [
      "Ruko 3-4 lantai & perkantoran",
      "Lantai gudang beban sedang",
      "Jalan rigid beton bertulang lingkungan",
      "Struktur kolam renang & bak penampungan air"
    ],
    description: "Mutu beton dengan stabilitas struktur baik dan kerapatan campuran untuk bangunan bertingkat menengah."
  },
  {
    grade: "K-300",
    name: "Beton Cor Mutu K-300",
    strengthKg: "300 kg/cm²",
    strengthMpa: "fc' 24.9 MPa",
    slump: "12 ± 2 cm",
    category: "Struktural Berat",
    badge: "Standar Rigid Pavement",
    recommendedFor: [
      "Jalan raya rigid pavement beban berat",
      "Lantai pabrik & workshop manufaktur",
      "Gudang logistik jalur forklift",
      "Gedung bertingkat tinggi"
    ],
    description: "Beton cor struktural untuk sarana perkerasan jalan rigid pavement, lantai pergudangan, dan struktur pemikul beban berat."
  },
  {
    grade: "K-350",
    name: "Beton Cor Mutu K-350",
    strengthKg: "350 kg/cm²",
    strengthMpa: "fc' 29.0 MPa",
    slump: "12 ± 2 cm",
    category: "Struktural Berat",
    recommendedFor: [
      "Abutment jembatan & struktur pratekan",
      "Lantai dermaga & fasilitas pergudangan berat",
      "Landasan parkir kendaraan berat",
      "Struktur khusus tahan beban getaran"
    ],
    description: "Beton mutu tinggi dengan karakteristik kuat tekan superior untuk pekerjaan infrastruktur dan struktur berspesifikasi khusus."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "standard-mixer",
    title: "Pengiriman Beton Truk Standar",
    shortDesc: "Armada mixer kapasitas 7 m³ untuk lokasi proyek dengan akses jalan lebar.",
    fullDesc: "Layanan suplai beton cor menggunakan armada truck mixer kapasitas standar 7 kubik per rit. Putaran drum mixer terjaga untuk mempertahankan konsistensi adukan selama perjalanan menuju lokasi proyek.",
    specs: [
      "Kapasitas muat standar: 7 m³ per rit",
      "Kebutuhan lebar jalan: minimal 3.5 meter",
      "Sesuai untuk proyek jalan, ruko, gedung, dan komplek perumahan cluster",
      "Disertai surat jalan rincian waktu dan mutu pengiriman"
    ]
  },
  {
    id: "minimix",
    title: "Pengiriman Armada MiniMix",
    shortDesc: "Kapasitas 3 m³ khusus akses jalan terbatas dan gang pemukiman padat.",
    fullDesc: "Solusi untuk lokasi proyek yang tidak dapat diakses oleh truk tronton besar. Armada MiniMix memiliki dimensi lebih ramping sehingga ramah terhadap jalan lingkungan dan paving blok.",
    specs: [
      "Kapasitas muat: 3 m³ per rit",
      "Kebutuhan lebar jalan: minimal 2.5 sampai 3 meter",
      "Meminimalkan risiko kerusakan pada jembatan lingkungan & paving",
      "Cocok untuk proyek renovasi rumah tinggal di pemukiman padat"
    ]
  },
  {
    id: "concrete-pump",
    title: "Layanan Sewa Pompa Beton (Concrete Pump)",
    shortDesc: "Peralatan pompa beton untuk mempercepat penuangan vertikal dan horizontal.",
    fullDesc: "Menyediakan layanan sewa concrete pump beserta tim operator untuk mengalirkan adukan beton langsung ke titik bekisting, membantu efisiensi waktu penuangan di lapangan.",
    specs: [
      "Pompa Standar (Boom 18 meter) untuk pengecoran bangunan 2 lantai",
      "Pompa Long Boom (Boom 28 meter) untuk ruko dan gedung",
      "Pompa Kodok / Pipa Darat untuk lokasi pengecoran tanpa akses boom",
      "Membantu penuangan selesai dalam batas waktu yang ditentukan"
    ]
  },
  {
    id: "quality-control",
    title: "Pemeriksaan Slump & Mutu Lapangan",
    shortDesc: "Pengujian nilai slump beton di lokasi sebelum proses penuangan dimulai.",
    fullDesc: "Pengecekan slump cone dilakukan saat armada tiba untuk memastikan workability adukan sesuai pesanan sebelum beton dialirkan ke area kerja proyek.",
    specs: [
      "Pemeriksaan nilai slump langsung di lokasi proyek",
      "Acuan slump standar 12 ± 2 cm (atau sesuai kesepakatan)",
      "Pencegahan penambahan air yang tidak terukur agar mutu terjaga",
      "Dukungan teknis koordinasi kesiapan area pengecoran"
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Presisi Penakaran Material",
    desc: "Komposisi semen, agregat pasir, batu split, dan air ditakar dengan sistem mekanik terkalibrasi untuk menjaga konsistensi mutu pada setiap rit."
  },
  {
    title: "Perhatian Terhadap Batas Waktu",
    desc: "Manajemen rute dan koordinasi kedatangan armada diarahkan agar beton tiba dan dituangkan dalam batas waktu kerja adukan (initial setting time)."
  },
  {
    title: "Fleksibilitas Truk Standar & MiniMix",
    desc: "Tersedia pilihan armada truk standar kapasitas 7 m³ untuk volume besar dan MiniMix 3 m³ untuk akses jalan lingkungan yang sempit."
  },
  {
    title: "Transparansi Surat Jalan",
    desc: "Setiap pengiriman disertai surat jalan resmi yang memuat informasi mutu beton, volume pemesanan, dan waktu pengiriman dari plant."
  }
];

export const SERVICE_AREAS = [
  {
    city: "Jakarta",
    coverage: ["Jakarta Timur", "Jakarta Selatan", "Jakarta Barat", "Jakarta Utara", "Jakarta Pusat"],
    radius: "Konfirmasi rute operasional",
    features: "Dukungan penjadwalan malam hari untuk menyesuaikan pembatasan lalu lintas dan ganjil-genap."
  },
  {
    city: "Bekasi & Cikarang",
    coverage: ["Kota Bekasi", "Kabupaten Bekasi", "Tambun", "Cibitung", "Cikarang"],
    radius: "Konfirmasi rute operasional",
    features: "Jalur pengiriman untuk proyek industri, pergudangan, perumahan, dan komersial."
  },
  {
    city: "Tangerang & Tangsel",
    coverage: ["Kota Tangerang", "Tangerang Selatan", "BSD", "Bintaro", "Gading Serpong", "Cikupa"],
    radius: "Konfirmasi rute operasional",
    features: "Pengiriman ke area pengembangan kawasan residensial baru dan bangunan ruko."
  },
  {
    city: "Bogor & Depok",
    coverage: ["Kota Bogor", "Kabupaten Bogor", "Cibinong", "Kota Depok", "Cinere", "Sawangan"],
    radius: "Konfirmasi rute operasional",
    features: "Tersedia opsi armada MiniMix untuk area pemukiman dengan lebar jalan terbatas."
  },
  {
    city: "Karawang & Sekitarnya",
    coverage: ["Karawang Barat", "Karawang Timur", "Kawasan Industri", "Klari", "Telukjambe"],
    radius: "Konfirmasi rute operasional",
    features: "Pelayanan pasokan beton cor untuk kebutuhan perkerasan jalan dan lantai gudang."
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Aplikasi Perkerasan Jalan & Akses Pergudangan",
    category: "Referensi Aplikasi Industri",
    location: "Kawasan Industri & Pergudangan",
    concreteGrade: "Mutu K-300 / K-350",
    volume: "Truk Mixer Standar",
    description: "Contoh aplikasi beton ready mix untuk perkerasan kaku (rigid pavement) pada area lalu lintas kendaraan muatan berat.",
    image: "/images/project-industrial-floor.jpg",
    isIllustration: true
  },
  {
    id: "proj-2",
    title: "Aplikasi Pengecoran Pelat Lantai Bangunan Bertingkat",
    category: "Referensi Aplikasi Komersial",
    location: "Konstruksi Ruko & Gedung",
    concreteGrade: "Mutu K-250 / K-275",
    volume: "Dengan Pompa Beton (Concrete Pump)",
    description: "Contoh pengerjaan pengecoran pelat lantai dan balok struktur bangunan menggunakan bantuan concrete pump boom.",
    image: "/images/project-infrastructure.jpg",
    isIllustration: true
  },
  {
    id: "proj-3",
    title: "Aplikasi Pengecoran Dak Rumah Akses Jalan Terbatas",
    category: "Referensi Aplikasi Residensial",
    location: "Pemukiman Residensial",
    concreteGrade: "Mutu K-225 / K-250",
    volume: "Armada MiniMix 3 m³",
    description: "Contoh penerapan pengecoran lantai dak rumah tinggal pada area pemukiman dengan akses jalan terbatas menggunakan armada MiniMix.",
    image: "/images/mixer-truck-batching-plant.jpg",
    isIllustration: true
  },
  {
    id: "proj-4",
    title: "Aplikasi Finishing Lantai Gudang & Workshop",
    category: "Referensi Aplikasi Lantai",
    location: "Fasilitas Workshop & Gudang",
    concreteGrade: "Mutu K-275 / K-300",
    volume: "Lantai Kerja & Struktur",
    description: "Contoh pengerjaan finishing lantai beton dengan trowel mesin untuk mendapatkan permukaan rata dan padat.",
    image: "/images/concrete-finishing.jpg",
    isIllustration: true
  }
];
