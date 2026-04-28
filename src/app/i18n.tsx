import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "id";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);
const storageKey = "jalurpay-language";
const originalTextNodes = new WeakMap<Text, string>();

const translations: Record<string, string> = {
  Home: "Beranda",
  Solutions: "Solusi",
  Product: "Produk",
  About: "Tentang",
  "Contact us": "Hubungi kami",
  "Explore API": "Jelajahi API",
  "Small Medium Business": "Usaha Kecil dan Menengah",
  Enterprise: "Enterprise",
  Checkout: "Checkout",
  API: "API",
  QRIS: "QRIS",
  "Flexible payment solutions tailored for businesses at every stage of growth.":
    "Solusi pembayaran fleksibel untuk bisnis di setiap tahap pertumbuhan.",
  "Fast setup and ready-to-use payment collection for growing teams.":
    "Penyiapan cepat dan penerimaan pembayaran siap pakai untuk tim yang sedang bertumbuh.",
  "Robust payment infrastructure for high-volume and complex operations.":
    "Infrastruktur pembayaran tangguh untuk volume tinggi dan operasi kompleks.",
  "A complete platform to launch payments, optimize conversions, and scale revenue.":
    "Platform lengkap untuk meluncurkan pembayaran, mengoptimalkan konversi, dan meningkatkan pendapatan.",
  "Hosted payment experiences designed to improve payment success.":
    "Pengalaman pembayaran hosted yang dirancang untuk meningkatkan keberhasilan pembayaran.",
  "Developer-friendly endpoints to build custom payment flows your way.":
    "Endpoint ramah developer untuk membangun alur pembayaran sesuai kebutuhan Anda.",
  "One QR integration to accept wallet and bank app payments in Indonesia.":
    "Satu integrasi QR untuk menerima pembayaran dompet digital dan aplikasi bank di Indonesia.",
  "Sign In": "Masuk",
  Register: "Daftar",
  Send: "Kirim",
  "Back to Home": "Kembali ke Beranda",
  "Submit successfully": "Berhasil dikirim",
  "Thanks for reaching out. Our customer service team will contact you shortly.":
    "Terima kasih telah menghubungi kami. Tim layanan pelanggan kami akan segera menghubungi Anda.",
  "Join In": "Bergabung",
  "E-mail": "Email",
  Name: "Nama",
  Company: "Perusahaan",
  Country: "Negara",
  "Corporate email": "Email perusahaan",
  "Company Name": "Nama perusahaan",
  "Your company's industry": "Industri perusahaan Anda",
  Phone: "Telepon",
  "In which countries do you want to process with Jalur?":
    "Di negara mana Anda ingin memproses pembayaran dengan Jalur?",
  "Where did you hear about us?": "Dari mana Anda mengetahui kami?",
  "How can we help you?": "Bagaimana kami dapat membantu Anda?",
  "Please complete the form before sending.": "Lengkapi formulir sebelum mengirim.",
  "Terms & Conditions": "Syarat & Ketentuan",
  "Privacy Policy": "Kebijakan Privasi",

  "One Platform for Payments, Payouts & Wallets in Indonesia":
    "Satu Platform untuk Pembayaran, Pencairan Dana & Dompet di Indonesia",
  "Accept payments, send payouts, and manage funds with a single integration. Built for businesses expanding in Indonesia.":
    "Terima pembayaran, kirim pencairan dana, dan kelola dana dengan satu integrasi. Dibangun untuk bisnis yang berkembang di Indonesia.",
  Users: "Pengguna",
  Partners: "Mitra",
  "Built for Reliable Transactions at Scale": "Dibangun untuk Transaksi Andal dalam Skala Besar",
  "High success rates powered by multiple payment channels, ensuring stable and seamless transactions across Indonesia.":
    "Tingkat keberhasilan tinggi didukung berbagai kanal pembayaran, memastikan transaksi stabil dan lancar di seluruh Indonesia.",
  "Transferring is very easy and super fast. Perfect payment app for all":
    "Transfer sangat mudah dan super cepat. Aplikasi pembayaran yang tepat untuk semua orang",
  "Your funds will be in your account within seconds.": "Dana Anda akan masuk ke rekening dalam hitungan detik.",
  "High success rate": "Tingkat keberhasilan tinggi",
  "for every transaction": "untuk setiap transaksi",
  "Always-on processing": "Pemrosesan selalu aktif",
  "with real-time response": "dengan respons real-time",
  "Supported channels": "Kanal yang didukung",
  "across Indonesia": "di seluruh Indonesia",
  "Received Rp.45000": "Menerima Rp.45000",
  "From Angelilce Neisa!": "Dari Angelilce Neisa!",
  "Sign Up for Free": "Daftar Gratis",
  "Virtual account": "Virtual account",
  "Setup your payment": "Atur pembayaran Anda",
  "Fill in the details": "Isi detailnya",
  "Pay for your transfer": "Bayar transfer Anda",
  "Send your money": "Kirim uang Anda",
  "Transparent & Competitive Pricing for Businesses": "Harga Transparan & Kompetitif untuk Bisnis",
  "Optimized pricing structure with fast onboarding and efficient processing.":
    "Struktur harga yang dioptimalkan dengan onboarding cepat dan pemrosesan efisien.",
  "We understand how important the cost factor is in managing a business, and that is why we are committed to providing solutions that are economical but still high quality.":
    "Kami memahami pentingnya faktor biaya dalam mengelola bisnis, karena itu kami berkomitmen menyediakan solusi yang ekonomis namun tetap berkualitas tinggi.",
  "We always ready to help by providing the best service in":
    "Kami selalu siap membantu dengan memberikan layanan terbaik di",
  "the filed of finance for you good finance provides a better life":
    "bidang keuangan untuk Anda, karena keuangan yang baik memberi hidup yang lebih baik",
  "Faster ways to make transactions": "Cara lebih cepat untuk bertransaksi",
  "Payments can be made securely": "Pembayaran dapat dilakukan dengan aman",
  "Alternate sources of currency": "Sumber mata uang alternatif",
  "The transaction can be completed in just a few seconds":
    "Transaksi dapat diselesaikan hanya dalam beberapa detik",
  "Online payments are easier to process, give you more information online, and make processing faster.":
    "Pembayaran online lebih mudah diproses, memberi Anda lebih banyak informasi secara online, dan mempercepat pemrosesan.",
  "If you don't have time for checkout lines, online payments make it easy to whip out your credit or debit card.":
    "Jika Anda tidak punya waktu untuk antre di kasir, pembayaran online memudahkan penggunaan kartu kredit atau debit Anda.",
  "Focused on Indonesia, Ready for Expansion": "Fokus di Indonesia, Siap untuk Ekspansi",
  "Over 500k businesses powered with us": "Lebih dari 500 ribu bisnis didukung bersama kami",
  "Users use our platform around the world": "Pengguna memakai platform kami di seluruh dunia",
  "Ratings on multiple software platforms": "Rating di berbagai platform perangkat lunak",
  "More than 30 countries trust our platform": "Lebih dari 30 negara mempercayai platform kami",
  "Our Payment Solutions": "Solusi Pembayaran Kami",
  "Payment Collection": "Penerimaan Pembayaran",
  "Accept payments through virtual accounts, e-wallets, and QRIS with a single integration across Indonesia":
    "Terima pembayaran melalui virtual account, e-wallet, dan QRIS dengan satu integrasi di seluruh Indonesia",
  Payout: "Pencairan Dana",
  "Send funds instantly to banks and e-wallets with automated processing, real-time status updates, and reliable delivery":
    "Kirim dana secara instan ke bank dan e-wallet dengan pemrosesan otomatis, pembaruan status real-time, dan pengiriman andal",
  "Developer-friendly APIs, clear documentation, and real-time callbacks for seamless payment operations":
    "API ramah developer, dokumentasi jelas, dan callback real-time untuk operasi pembayaran yang lancar",
  "Jalur Pay provides the best value for you": "Jalur Pay memberikan nilai terbaik untuk Anda",
  "Anything unclear or need some help? Relax, we are 24/7 for you":
    "Ada yang belum jelas atau butuh bantuan? Tenang, kami siap 24/7 untuk Anda",
  "Let's join Jalur Pay,": "Mari bergabung dengan Jalur Pay,",
  "We protect your money": "Kami melindungi uang Anda",

  "Easy payment collection designed specifically for SMB":
    "Penerimaan pembayaran yang mudah, dirancang khusus untuk UKM",
  "Simple development, can be started in minutes, covers major payment methods in Indonesia.":
    "Pengembangan sederhana, dapat dimulai dalam hitungan menit, mencakup metode pembayaran utama di Indonesia.",
  Merchants: "Merchant",
  "Bank Partners": "Mitra Bank",
  "Payment Methods": "Metode Pembayaran",
  "Daily transactions": "Transaksi harian",
  "Our Remote Team": "Tim Remote Kami",
  "Boost Online Transactions, Select Payment Solutions As Required":
    "Tingkatkan Transaksi Online, Pilih Solusi Pembayaran Sesuai Kebutuhan",
  "We'll match you with our team of expert strategists who will make sure your top-of-the-line strategies are always on target. Contact us today to get started!":
    "Kami akan menghubungkan Anda dengan tim ahli strategi kami yang memastikan strategi terbaik Anda selalu tepat sasaran. Hubungi kami hari ini untuk memulai!",
  "Service Team": "Tim Layanan",
  "Professional Rating": "Rating Profesional",
  "Our Licensed System Protects Your Transactions": "Sistem Berlisensi Kami Melindungi Transaksi Anda",
  "We're committed to your business's transaction success": "Kami berkomitmen pada keberhasilan transaksi bisnis Anda",
  "The Central Bank": "Bank Sentral",
  "PJP Level 1, licensed operator": "Operator berlisensi PJP Level 1",
  "AES 256 certified for Security Encryption Standard": "Tersertifikasi AES 256 untuk standar enkripsi keamanan",
  "PCI DSS Certified with periodic audits": "Tersertifikasi PCI DSS dengan audit berkala",
  "Certified for information security managementstandard": "Tersertifikasi untuk standar manajemen keamanan informasi",
  "Kominfo (Telecommunication & Information)": "Kominfo (Telekomunikasi & Informasi)",
  "Electronic System Operator Registered at the Ministry of Communication and Information of the Republic of Indonesia":
    "Penyelenggara Sistem Elektronik yang terdaftar di Kementerian Komunikasi dan Informatika Republik Indonesia",
  "Ministry of Finance": "Kementerian Keuangan",
  "Registered as Other Perception Agency (Acceptance Agent) in the Electronic State Revenue System.":
    "Terdaftar sebagai Lembaga Persepsi Lainnya dalam Sistem Penerimaan Negara Elektronik.",
  "In partnership with Dukcapil for identity verification": "Bermitra dengan Dukcapil untuk verifikasi identitas",
  "What drives Finance Flow?": "Apa yang mendorong Finance Flow?",
  "Just one integration to get multiple payment methods at once on your business site.":
    "Cukup satu integrasi untuk mendapatkan berbagai metode pembayaran sekaligus di situs bisnis Anda.",
  "A Virtual Account is a digital payment method through an account that is created virtually for each customer":
    "Virtual Account adalah metode pembayaran digital melalui rekening yang dibuat secara virtual untuk setiap pelanggan",
  "With QRIS integration, you can easily accept payment transactions from various digital wallet applications using only one QR code":
    "Dengan integrasi QRIS, Anda dapat menerima transaksi pembayaran dari berbagai aplikasi dompet digital hanya dengan satu kode QR",
  "We already have very strong partners who can switch payment transactions of multiple banks with one click":
    "Kami memiliki mitra yang kuat untuk memproses transaksi pembayaran dari berbagai bank dengan satu klik",
  "Customize the payment page with your business identity and transaction needs in your online store / business application":
    "Sesuaikan halaman pembayaran dengan identitas bisnis dan kebutuhan transaksi di toko online / aplikasi bisnis Anda",

  "Build enterprise-level payment and fund management facilities":
    "Bangun fasilitas pembayaran dan pengelolaan dana tingkat enterprise",
  "Provides payment collection, payment processing, wallet, and API capabilities to support high concurrency and complex business scenarios.":
    "Menyediakan kemampuan penerimaan pembayaran, pemrosesan pembayaran, dompet, dan API untuk mendukung konkurensi tinggi serta skenario bisnis kompleks.",
  "Sales Report": "Laporan Penjualan",
  "My product": "Produk saya",
  Competitor: "Kompetitor",
  Sales: "Penjualan",
  Marketing: "Pemasaran",
  "from last year": "dari tahun lalu",
  "Flexible Payment Infrastructure Built for Your Business":
    "Infrastruktur Pembayaran Fleksibel untuk Bisnis Anda",
  "Jalur Pay integrates seamlessly with your systems, enabling you to customize payment flows, reduce failures, and scale operations efficiently.":
    "Jalur Pay terintegrasi mulus dengan sistem Anda, memungkinkan Anda menyesuaikan alur pembayaran, mengurangi kegagalan, dan meningkatkan operasi secara efisien.",
  "Smart routing to improve transaction success rates": "Routing cerdas untuk meningkatkan tingkat keberhasilan transaksi",
  "Automated retries to recover failed payments": "Percobaan ulang otomatis untuk memulihkan pembayaran yang gagal",
  "Secure authentication to protect user access": "Autentikasi aman untuk melindungi akses pengguna",
  "Core Payment Capabilities": "Kapabilitas Pembayaran Inti",
  "Everything you need to accept and process payments at enterprise scale.":
    "Semua yang Anda butuhkan untuk menerima dan memproses pembayaran pada skala enterprise.",
  "How It Works": "Cara Kerja",
  "Built for Reliable Payment Operations": "Dibangun untuk Operasi Pembayaran Andal",
  "Real-time transfer": "Transfer real-time",
  "Funds are processed instantly with immediate confirmation.": "Dana diproses seketika dengan konfirmasi langsung.",
  "24/7 availability": "Tersedia 24/7",
  "Payment and fund flows stay active around the clock.": "Alur pembayaran dan dana tetap aktif sepanjang waktu.",
  "Easy Reconciliation": "Rekonsiliasi Mudah",
  "Track and manage transactions with clear reporting and logs.": "Lacak dan kelola transaksi dengan laporan dan log yang jelas.",
  "Widely Supported Payment Methods in Indonesia": "Metode Pembayaran yang Didukung Luas di Indonesia",
  "Almost all banks and financial institutions in Indonesia, making it a widely available and convenient payment method.":
    "Hampir semua bank dan lembaga keuangan di Indonesia, menjadikannya metode pembayaran yang luas dan praktis.",
  "Trusted by Growing Businesses": "Dipercaya Bisnis yang Bertumbuh",
  "Companies rely on Jalur Pay to process payments, manage funds, and scale efficiently.":
    "Perusahaan mengandalkan Jalur Pay untuk memproses pembayaran, mengelola dana, dan berkembang secara efisien.",

  "Ready-to-Use Checkout Pages Integrated with Payment Gateway":
    "Halaman Checkout Siap Pakai yang Terintegrasi dengan Payment Gateway",
  "Start accepting digital payments instantly on your business website & app, offer multiple payment methods, support multiple languages.":
    "Mulai terima pembayaran digital secara instan di situs web & aplikasi bisnis Anda, tawarkan berbagai metode pembayaran, dan dukung banyak bahasa.",
  "Payment Methods Supported": "Metode Pembayaran yang Didukung",
  "A better way to accept payments": "Cara yang lebih baik untuk menerima pembayaran",
  "Fast Integration": "Integrasi Cepat",
  "Get your checkout page live quickly with just a few lines of code and flexible API options.":
    "Jalankan halaman checkout Anda dengan cepat hanya dengan beberapa baris kode dan opsi API yang fleksibel.",
  "No Payment Page Needed": "Tidak Perlu Membuat Halaman Pembayaran",
  "Skip building your own checkout page. Use redirect or embed options to go live instantly.":
    "Lewati pembuatan halaman checkout sendiri. Gunakan opsi redirect atau embed agar langsung berjalan.",
  "Works Across All Platforms": "Berjalan di Semua Platform",
  "Compatible with web, mobile apps, and API, ensuring smooth payments across all devices.":
    "Kompatibel dengan web, aplikasi seluler, dan API, memastikan pembayaran lancar di semua perangkat.",
  "Accelerate your Business Success with JalurPay, the Payments Platform for Global Companies.":
    "Percepat Kesuksesan Bisnis Anda dengan JalurPay, Platform Pembayaran untuk Perusahaan Global.",
  "Widely used in Indonesia, it has become the preferred choice for online payments due to its security and efficiency.":
    "Banyak digunakan di Indonesia dan menjadi pilihan utama untuk pembayaran online karena keamanan dan efisiensinya.",
  Redirection: "Redirect",
  "Pop-up": "Pop-up",
  "Hosted Payment Page": "Halaman Pembayaran Hosted",
  "Redirect customers to a secure hosted payment page to complete transactions seamlessly. This method is ideal for websites, invoices, and manual payment scenarios where flexibility and simplicity are required.":
    "Arahkan pelanggan ke halaman pembayaran hosted yang aman untuk menyelesaikan transaksi dengan lancar. Metode ini ideal untuk situs web, invoice, dan skenario pembayaran manual yang membutuhkan fleksibilitas dan kesederhanaan.",
  "Embedded Pop-up Checkout": "Checkout Pop-up Tertanam",
  "Open a lightweight payment pop-up without leaving your page. This flow keeps users inside your product while still offering a fast and secure payment experience.":
    "Buka pop-up pembayaran ringan tanpa meninggalkan halaman Anda. Alur ini menjaga pengguna tetap di dalam produk sambil memberi pengalaman pembayaran cepat dan aman.",
  "Expand your business to Indonesia": "Perluas bisnis Anda ke Indonesia",
  "Customize the right solution for your business": "Sesuaikan solusi yang tepat untuk bisnis Anda",
  "Professional customer service staff will answer your questions":
    "Staf layanan pelanggan profesional akan menjawab pertanyaan Anda",

  "Seamlessly connect your systems and build payments your way":
    "Hubungkan sistem Anda dengan mulus dan bangun pembayaran sesuai cara Anda",
  "Seamlessly embed payment capabilities into your systems, platforms, or applications through powerful API integration capabilities.":
    "Sematkan kemampuan pembayaran dengan mulus ke sistem, platform, atau aplikasi Anda melalui integrasi API yang kuat.",
  "Built for developers, designed for scale": "Dibangun untuk developer, dirancang untuk skala besar",
  "We provide clear, stable, and highly standardized API interfaces to help developers complete integration in the shortest possible time. Whether it's a startup project or a high-concurrency business scenario, it can run stably and scale easily.":
    "Kami menyediakan antarmuka API yang jelas, stabil, dan sangat terstandarisasi untuk membantu developer menyelesaikan integrasi secepat mungkin. Baik proyek startup maupun skenario bisnis berkonkurensi tinggi, semuanya dapat berjalan stabil dan mudah diskalakan.",
  "Full control over your payment flow": "Kontrol penuh atas alur pembayaran Anda",
  "You have complete control over every step of the payment process, from transaction creation to payment confirmation.":
    "Anda memiliki kontrol penuh atas setiap langkah proses pembayaran, mulai dari pembuatan transaksi hingga konfirmasi pembayaran.",
  "Create & Manage Payment Orders": "Buat & Kelola Order Pembayaran",
  "Create and manage payment orders with flexible API parameters.":
    "Buat dan kelola order pembayaran dengan parameter API yang fleksibel.",
  "Real-time Payment Status via Webhooks": "Status Pembayaran Real-time via Webhook",
  "Receive instant payment status updates through secure webhooks.":
    "Terima pembaruan status pembayaran secara instan melalui webhook yang aman.",
  "Transaction Query & Status Sync": "Query Transaksi & Sinkronisasi Status",
  "Query transaction details and keep payment status fully synchronized.":
    "Query detail transaksi dan jaga status pembayaran tetap tersinkronisasi.",
  "Easy integration, fast go-live": "Integrasi mudah, go-live cepat",
  "From integration to deployment, it only takes a few simple steps":
    "Dari integrasi hingga deployment, hanya perlu beberapa langkah sederhana",
  "Get API Key": "Dapatkan API Key",
  "Generate your API credentials to start integration.": "Buat kredensial API Anda untuk memulai integrasi.",
  "Test in Sandbox Environment": "Uji di Lingkungan Sandbox",
  "Validate your integration in a safe testing environment.": "Validasi integrasi Anda di lingkungan pengujian yang aman.",
  "Go Live in Production": "Go Live di Produksi",
  "Switch to production and start processing real transactions.":
    "Beralih ke produksi dan mulai memproses transaksi nyata.",
  "Expand your business to Colombia": "Perluas bisnis Anda ke Kolombia",

  "Accept Cashless Payments Made Easier in Your Store": "Permudah Pembayaran Nontunai di Toko Anda",
  "Enable seamless QR payments with QRIS, Indonesia's unified QR standard. Accept payments from multiple e-wallets and banks through a single integration, improving conversion and simplifying operations.":
    "Aktifkan pembayaran QR yang lancar dengan QRIS, standar QR terpadu Indonesia. Terima pembayaran dari berbagai e-wallet dan bank melalui satu integrasi, meningkatkan konversi dan menyederhanakan operasional.",
  "Accept QRIS Payments One QR Code for All Indonesian Wallets":
    "Terima Pembayaran QRIS, Satu Kode QR untuk Semua Dompet Digital Indonesia",
  "Accept payments from all major QR-enabled wallets and banking apps across Indonesia, including leading e-wallet providers and mobile banking platforms.":
    "Terima pembayaran dari semua dompet digital dan aplikasi bank berkemampuan QR utama di Indonesia, termasuk penyedia e-wallet dan mobile banking terkemuka.",
  "Daily growth of users": "Pertumbuhan pengguna harian",
  "Growth Index": "Indeks Pertumbuhan",
  "3 Steps to Create QRIS": "3 Langkah Membuat QRIS",
  "Learn about the advantages of QRIS. Contact our sales team on the registration process.":
    "Pelajari keunggulan QRIS. Hubungi tim sales kami untuk proses pendaftaran.",
  Verification: "Verifikasi",
  "Complete all required paperwork. Our team will work with PTEN to register your company.":
    "Lengkapi semua dokumen yang diperlukan. Tim kami akan bekerja dengan PTEN untuk mendaftarkan perusahaan Anda.",
  "Start Using QRIS": "Mulai Gunakan QRIS",
  "Make QRIS the payment option in your store.": "Jadikan QRIS opsi pembayaran di toko Anda.",
  "In-Store Advantage": "Keunggulan di Toko",
  "Why QRIS feels better at the point of sale": "Mengapa QRIS terasa lebih baik di kasir",
  "A stronger bridge between setup and adoption, showing why one QR flow makes counters feel faster, cleaner, and easier to manage.":
    "Jembatan yang lebih kuat antara penyiapan dan adopsi, menunjukkan mengapa satu alur QR membuat kasir terasa lebih cepat, rapi, dan mudah dikelola.",
  "One QR, many wallets": "Satu QR, banyak dompet",
  "Accept payments from major Indonesian wallets and bank apps with one QRIS setup.":
    "Terima pembayaran dari dompet digital dan aplikasi bank utama Indonesia dengan satu setup QRIS.",
  "Simpler daily operations": "Operasional harian lebih sederhana",
  "Reduce cashier friction and keep payment acceptance consistent across outlets.":
    "Kurangi hambatan di kasir dan jaga penerimaan pembayaran tetap konsisten di seluruh outlet.",
  "Faster checkout moments": "Momen checkout lebih cepat",
  "Give customers a familiar scan-and-pay flow that feels instant at the counter.":
    "Berikan pelanggan alur scan-and-pay yang familiar dan terasa instan di kasir.",
  "Use our products to stay one step ahead!": "Gunakan produk kami agar selalu selangkah lebih maju!",
  "Join over 12 million people who choose us for fast and secure online payment methods. We are simpler and cheaper than banks and non-banks.":
    "Bergabunglah dengan lebih dari 12 juta orang yang memilih kami untuk metode pembayaran online yang cepat dan aman. Kami lebih sederhana dan lebih murah daripada bank maupun non-bank.",
  "Expand your business to Vietnam": "Perluas bisnis Anda ke Vietnam",

  "About us": "Tentang kami",
  "Why Jalur Pay Agency?": "Mengapa Jalur Pay Agency?",
  "We are more than just a payment gateway provider, we are a financial technology platform that helps businesses achieve their goals faster. We provide end-to-end payment capabilities, data enhancements and financial products to leading global companies.":
    "Kami lebih dari sekadar penyedia payment gateway; kami adalah platform teknologi finansial yang membantu bisnis mencapai tujuan lebih cepat. Kami menyediakan kemampuan pembayaran end-to-end, pengayaan data, dan produk finansial untuk perusahaan global terkemuka.",
  "Jalur Pay is a secure and efficient electronic payment system that enables real-time transfers, operating 24/7. It offers a low-cost, convenient payment solution supported by a wide range of financial institutions.":
    "Jalur Pay adalah sistem pembayaran elektronik yang aman dan efisien untuk transfer real-time, beroperasi 24/7. Solusi pembayaran ini berbiaya rendah, praktis, dan didukung berbagai lembaga keuangan.",
  "Delivering tech solutions": "Menghadirkan solusi teknologi",
  "We are a team of 200+ who are passionate about making the world a better place.":
    "Kami adalah tim beranggotakan 200+ orang yang bersemangat membuat dunia menjadi lebih baik.",
  "Leveraging tech to drive a better IT experience": "Memanfaatkan teknologi untuk pengalaman IT yang lebih baik",
  "Professional code platform": "Platform kode profesional",
  "Better services": "Layanan lebih baik",
  "We share our processes and gain your trust.": "Kami membagikan proses kami dan membangun kepercayaan Anda.",
  "Employees worldwide": "Karyawan di seluruh dunia",
  "In every area where we provide services, we have professional service personnel.":
    "Di setiap area layanan, kami memiliki tenaga layanan profesional.",
  "Multiple countries": "Berbagai negara",
  "We have obtained support from local governments in Indonesia, Mexico, Colombia and Vietnam, and provide reliable services to local areas.":
    "Kami telah mendapatkan dukungan dari pemerintah lokal di Indonesia, Meksiko, Kolombia, dan Vietnam, serta menyediakan layanan andal untuk wilayah setempat.",
  "What our customer says about Jalur Workspace": "Apa kata pelanggan kami tentang Jalur Workspace",
  "\"Our goal was to find a company that would provide us with a reliable, flexible product and that, from its founder as well as its entire team, would have the ability to provide agile, customer-oriented support and accompany us in our needs. Jalur meets all these attributes.\"":
    "\"Tujuan kami adalah menemukan perusahaan yang menyediakan produk andal dan fleksibel, serta memiliki kemampuan memberi dukungan yang lincah, berorientasi pelanggan, dan mendampingi kebutuhan kami. Jalur memenuhi semua atribut tersebut.\"",
  "Project Manager at Doku": "Project Manager di Doku",
  "Expand your business worldwide": "Perluas bisnis Anda ke seluruh dunia",
  "Let's join Jalur Pay, We protect your money": "Mari bergabung dengan Jalur Pay, kami melindungi uang Anda",

  "Say hello to your new financial technology partner": "Sapa mitra teknologi finansial baru Anda",
  "We are a financial technology platform that empowers businesses across the world to reach their ambitions faster. With us your business will unlock these features:":
    "Kami adalah platform teknologi finansial yang memberdayakan bisnis di seluruh dunia untuk mencapai ambisinya lebih cepat. Bersama kami, bisnis Anda akan membuka fitur-fitur ini:",
  "Expand your business Across Indonesia": "Perluas bisnis Anda di seluruh Indonesia",
};

function normalizeText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function translateText(value: string, language: Language) {
  if (language === "en") return value;

  const leading = value.match(/^\s*/)?.[0] ?? "";
  const trailing = value.match(/\s*$/)?.[0] ?? "";
  const normalized = normalizeText(value);
  return translations[normalized] ? `${leading}${translations[normalized]}${trailing}` : value;
}

function translateAttributes(root: ParentNode, language: Language) {
  root.querySelectorAll<HTMLElement>("[aria-label], [placeholder], [title]").forEach((element) => {
    ["aria-label", "placeholder", "title"].forEach((attribute) => {
      const originalAttribute = `data-original-${attribute}`;
      const current = element.getAttribute(attribute);
      if (!current) return;

      if (!element.getAttribute(originalAttribute)) {
        element.setAttribute(originalAttribute, current);
      }

      const original = element.getAttribute(originalAttribute) ?? current;
      element.setAttribute(attribute, translateText(original, language));
    });
  });
}

function translateDom(language: Language) {
  const root = document.getElementById("root");
  if (!root) return;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const text = normalizeText(node.textContent ?? "");
      if (!text || /^[\d.,+\-%\s]+$/.test(text)) return NodeFilter.FILTER_REJECT;
      const parent = node.parentElement;
      if (
        !parent ||
        parent.closest("[data-no-translate]") ||
        ["SCRIPT", "STYLE", "TEXTAREA"].includes(parent.tagName)
      ) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const nodes: Text[] = [];
  while (walker.nextNode()) {
    nodes.push(walker.currentNode as Text);
  }

  nodes.forEach((node) => {
    if (!originalTextNodes.has(node)) {
      originalTextNodes.set(node, node.textContent ?? "");
    }
    const nextText = translateText(originalTextNodes.get(node) ?? node.textContent ?? "", language);
    if (node.textContent !== nextText) {
      node.textContent = nextText;
    }
  });

  translateAttributes(root, language);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === "undefined") return "en";
    return localStorage.getItem(storageKey) === "id" ? "id" : "en";
  });

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    localStorage.setItem(storageKey, nextLanguage);
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage(language === "en" ? "id" : "en"),
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}

export function TranslationLayer() {
  const { language } = useLanguage();

  useEffect(() => {
    translateDom(language);
    const root = document.getElementById("root");
    if (!root) return;

    const observer = new MutationObserver(() => {
      window.requestAnimationFrame(() => translateDom(language));
    });
    observer.observe(root, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [language]);

  return null;
}
