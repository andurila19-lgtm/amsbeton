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
}

export const COMPANY_INFO = {
  legalName: "CV Anugerah Mecca Sejahtera",
  brandName: "AMS Beton",
  tagline: "Solusi Beton Ready Mix untuk Kebutuhan Konstruksi Anda",
  shortDesc: "Penyedia beton cor ready mix dan layanan sewa pompa beton terpercaya dengan standar mutu SNI untuk proyek residensial, komersial, maupun infrastruktur.",
  phone: "0812-8899-7600",
  phoneFormatted: "+62 812 8899 7600",
  whatsappNumber: "6281288997600",
  whatsappMessage: "Halo AMS Beton, saya ingin konsultasi dan meminta penawaran harga beton cor ready mix.",
  email: "penawaran@amsbeton.co.id",
  secondaryEmail: "cv.anugerahmeccasejahtera@gmail.com",
  officeAddress: "Kawasan Industri & Pergudangan Terpadu, Koridor Logistik Utama, Jabodetabek",
  batchingPlantLocations: [
    "Batching Plant Unit 1: Jalur Arteri Industri Bekasi - Karawang",
    "Batching Plant Unit 2: Koridor Logistik Lingkar Luar Jakarta - Tangerang",
    "Batching Plant Unit 3: Akses Jalan Raya Bogor - Depok"
  ],
  workingHours: "Senin - Sabtu: 07.30 - 17.30 WIB (Pengecoran proyek dan dispatching armada mixer beroperasi 24 jam sesuai jadwal pemesanan)",
  standards: [
    { title: "SNI 2847:2019", subtitle: "Persyaratan Beton Struktural untuk Bangunan Gedung" },
    { title: "PBI 1971 N.I.-2", subtitle: "Peraturan Beton Bertulang Indonesia" },
    { title: "ASTM C94", subtitle: "Standard Specification for Ready-Mixed Concrete" },
    { title: "SOP Quality Control", subtitle: "Pengujian Slump Cone & Uji Tekan Silinder 28 Hari" }
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
    description: "Mutu beton kelas B-0 untuk pekerjaan non-struktural sebagai lapisan dasar lantai kerja guna meratakan tanah dan melindungi tulangan dari kelembapan tanah."
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
    description: "Pilihan standar paling ekonomis dan populer untuk pengecoran dak lantai rumah tinggal tingkat dua yang memerlukan kekuatan struktural bertulang handal."
  },
  {
    grade: "K-250",
    name: "Beton Cor Mutu K-250",
    strengthKg: "250 kg/cm²",
    strengthMpa: "fc' 20.8 MPa",
    slump: "12 ± 2 cm",
    category: "Struktural Menengah",
    badge: "Pilihan Utama",
    recommendedFor: [
      "Dak rumah tinggal bertingkat & ruko 2-3 lantai",
      "Jalan komplek perumahan & akses ruko",
      "Pondasi tapak (footplate) & bore pile",
      "Kolom dan balok utama bangunan komersial"
    ],
    description: "Standar rekomendasi teknis para arsitek dan kontraktor untuk struktur beton bertulang rumah tinggal tingkat dan ruko."
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
      "Jalan rigid beton bertulang desa/kelurahan",
      "Struktur kolam renang & bak penampungan air"
    ],
    description: "Mutu beton dengan stabilitas struktur tinggi, kerapatan partikel unggul, serta tahan terhadap penetrasi air untuk basement atau konstruksi bertingkat."
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
      "Gedung bertingkat empat lantai ke atas"
    ],
    description: "Beton cor struktural kelas satu untuk pekerjaan sarana transportasi jalan raya, lantai pergudangan angkutan berat (forklift/kontainer), dan kolom penopang utama."
  },
  {
    grade: "K-350",
    name: "Beton Cor Mutu K-350",
    strengthKg: "350 kg/cm²",
    strengthMpa: "fc' 29.0 MPa",
    slump: "12 ± 2 cm",
    category: "Struktural Berat",
    recommendedFor: [
      "Abutment & gelagar jembatan",
      "Lantai dermaga & fasilitas pelabuhan",
      "Landasan parkir kontainer",
      "Spesifikasi bangunan tahan getaran gempa"
    ],
    description: "Mutu beton kinerja tinggi dengan kuat tekan superior, dirancang untuk proyek infrastruktur berspesifikasi berat dan lingkungan abrasif."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "standard-mixer",
    title: "Pengiriman Beton Truk Standar",
    shortDesc: "Armada mixer tronton kapasitas 7 m³ untuk proyek jalan lebar.",
    fullDesc: "Pengiriman beton cor menggunakan armada truck mixer kapasitas standar 7 kubik per rit. Dilengkapi sistem mixing putaran drum yang terkontrol untuk mempertahankan homogenitas dan slump beton selama perjalanan dari batching plant.",
    specs: [
      "Kapasitas muat: 7 m³ per rit",
      "Lebar jalan minimal: 3.5 meter",
      "Cocok untuk jalan raya, gedung, pergudangan, dan perumahan cluster",
      "Timbangan batching otomatis terkomputerisasi"
    ]
  },
  {
    id: "minimix",
    title: "Armada MiniMix (Molen Mini)",
    shortDesc: "Kapasitas 3 m³ khusus akses jalan sempit dan pemukiman padat.",
    fullDesc: "Solusi bagi lokasi proyek yang tidak dapat dilalui truk molen tronton besar. Armada MiniMix memiliki dimensi ramping sehingga tidak merusak paving blok perumahan atau gorong-gorong.",
    specs: [
      "Kapasitas muat: 3 m³ per rit",
      "Lebar jalan minimal: 2.5 sampai 3 meter",
      "Aman untuk paving block dan jembatan lingkungan",
      "Cocok untuk renovasi rumah tinggal dan gang pemukiman"
    ]
  },
  {
    id: "concrete-pump",
    title: "Sewa Pompa Beton (Concrete Pump)",
    shortDesc: "Armada pompa beton hidrolik untuk pengecoran vertikal dan horizontal.",
    fullDesc: "Menyediakan sewa concrete pump lengkap dengan operator dan pipa transfer. Mempercepat proses penuangan beton, menghemat tenaga kerja, dan menjaga batas initial setting time beton.",
    specs: [
      "Pompa Standar (Boom 18 meter) untuk bangunan 2-3 lantai",
      "Pompa Long Boom (Boom 28 meter) untuk ruko dan gedung komersial",
      "Pompa Super Long Boom (33-42 meter) untuk struktur tinggi",
      "Pompa Kodok / Pipa Darat (50-150 meter) untuk lokasi tanpa akses boom"
    ]
  },
  {
    id: "quality-control",
    title: "Uji Slump & Pengujian Mutu Lapangan",
    shortDesc: "Pengujian slump cone dan pembuatan sampel uji silinder di lokasi proyek.",
    fullDesc: "Tim teknisi memastikan setiap kubik beton cor yang tiba di lokasi memenuhi parameter kekentalan (slump). Sampel uji tekan dibuat sesuai prosedur SNI untuk dokumentasi sertifikasi mutu proyek Anda.",
    specs: [
      "Pengujian Slump Cone langsung sebelum penuangan dimulai",
      "Pembuatan benda uji silinder 15x30 cm atau kubus 15x15x15 cm",
      "Laporan hasil uji kuat tekan 7, 14, dan 28 hari dari laboratorium independen",
      "Konsultasi teknis rasio air dan workability beton di lapangan"
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Batching Plant Otomatis & Terkalibrasi",
    desc: "Penimbangan semen, pasir silika teruji, agregat batu split, dan air dikendalikan secara computerized tanpa takaran manual, menjamin konsistensi mutu di setiap rit pengiriman."
  },
  {
    title: "Ketepatan Waktu Menjaga Setting Time",
    desc: "Manajemen rute armada dan koordinasi terencana memastikan beton sampai di lokasi proyek sebelum batas awal pengikatan (initial setting time maksimal dua jam dari penimbangan)."
  },
  {
    title: "Pilihan Armada Truk Standar & MiniMix",
    desc: "Kombinasi armada truk standar 7 m³ untuk volume besar dan MiniMix 3 m³ untuk jalan sempit memberikan solusi tuntas untuk berbagai kondisi akses proyek."
  },
  {
    title: "Transparansi Kubikasi & Data Terverifikasi",
    desc: "Surat jalan resmi mencantumkan jam keluar batching plant, volume m³, mutu beton, dan nilai slump terukur. Didukung tim survey teknis lapangan yang siap membantu pengukuran."
  }
];

export const SERVICE_AREAS = [
  {
    city: "Jakarta Raya",
    coverage: ["Jakarta Timur", "Jakarta Selatan", "Jakarta Barat", "Jakarta Utara", "Jakarta Pusat"],
    radius: "Radius hingga 25 km",
    features: "Dukungan armada malam hari untuk penyesuaian aturan ganjil-genap dan jam operasional jalan protokol."
  },
  {
    city: "Bekasi & Cikarang",
    coverage: ["Kota Bekasi", "Bekasi Timur", "Tambun", "Cibitung", "Cikarang Industri", "Jababeka"],
    radius: "Radius hingga 30 km",
    features: "Jalur cepat dekat kawasan industri untuk cor workshop pabrik, gudang logistik, dan perumahan."
  },
  {
    city: "Tangerang & Banten",
    coverage: ["Kota Tangerang", "Tangerang Selatan", "BSD City", "Bintaro", "Gading Serpong", "Cikupa"],
    radius: "Radius hingga 30 km",
    features: "Pengiriman ke klaster hunian modern, ruko komersial, dan kawasan pengembangan properti."
  },
  {
    city: "Bogor & Depok",
    coverage: ["Kota Bogor", "Cibinong", "Citeureup", "Gunung Putri", "Kota Depok", "Cinere", "Sawangan"],
    radius: "Radius hingga 28 km",
    features: "Layanan armada MiniMix untuk area pemukiman perbukitan dan jalan lingkungan menanjak."
  },
  {
    city: "Karawang",
    coverage: ["Karawang Barat", "KIIC", "Suryacipta", "Telukjambe", "Klari"],
    radius: "Radius hingga 35 km",
    features: "Dukungan proyek infrastruktur kawasan industri dan lantai beban berat pergudangan."
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Pengecoran Rigid Pavement Kawasan Pergudangan Logistik",
    category: "Infrastruktur Industri",
    location: "Kawasan Industri Cikarang",
    concreteGrade: "Mutu K-300 Slump 12±2 cm",
    volume: "240 m³ (34 Rit Truk Standar)",
    description: "Perkerasan akses kontainer kelas berat dengan ketebalan 25 cm, menggunakan wiremesh M8 dan admixture retarder untuk menjaga kemudahan finishing di siang hari.",
    image: "/images/project-industrial-floor.jpg"
  },
  {
    id: "proj-2",
    title: "Pengecoran Pelat Lantai Ruko Komersial Tiga Lantai",
    category: "Komersial & Gedung",
    location: "Kawasan Niaga BSD Tangerang",
    concreteGrade: "Mutu K-250 Slump 12±2 cm",
    volume: "84 m³ dengan Pompa Standar",
    description: "Pengecoran dak lantai dua dan lantai tiga ruko terpadu dengan bantuan concrete pump boom 18 meter dalam satu sesi tanpa cold-joint.",
    image: "/images/project-infrastructure.jpg"
  },
  {
    id: "proj-3",
    title: "Renovasi Rumah Tinggal dengan Armada MiniMix",
    category: "Residensial Padat",
    location: "Pemukiman Tebet, Jakarta Selatan",
    concreteGrade: "Mutu K-225 Slump 12±2 cm",
    volume: "18 m³ (6 Rit MiniMix 3 m³)",
    description: "Pengecoran dak rumah bertingkat di gang dengan lebar jalan 2.8 meter menggunakan armada MiniMix dan pipa transfer darat tanpa mengganggu lalu lintas perumahan warga.",
    image: "/images/mixer-truck-batching-plant.jpg"
  },
  {
    id: "proj-4",
    title: "Pengecoran Slab Lantai Pabrik Manufaktur Presisi",
    category: "Lantai Industri",
    location: "Kawasan Industri Karawang",
    concreteGrade: "Mutu K-350 High Early",
    volume: "315 m³",
    description: "Lantai pabrik dengan spesifikasi kerataan tinggi, finish trowel mesin dengan kepadatan beton optimal untuk daya tahan getaran mesin presisi.",
    image: "/images/concrete-finishing.jpg"
  }
];
