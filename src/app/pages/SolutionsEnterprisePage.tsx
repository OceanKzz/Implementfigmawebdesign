import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { CheckCheck, Clock3, Landmark, QrCode, ShieldCheck, Users, WalletCards } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { LeadFormMessage, leadFormButtonClass, useLeadFormValidation } from "../components/LeadFormValidation";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const heroImage = "https://www.figma.com/api/mcp/asset/e5cf77ff-e57d-4b6b-b978-1b38e94d4612";
const featureMark = "https://www.figma.com/api/mcp/asset/5f87470b-2c42-4daa-997e-30f4d03370f8";
const statsUpArrow = "https://www.figma.com/api/mcp/asset/2960052e-636a-4cca-a975-e032fecaa3cd";
const bankBca = "https://www.figma.com/api/mcp/asset/dfcc7e9b-1719-4794-bf48-c85d628dba56";
const bankBni = "https://www.figma.com/api/mcp/asset/4d4344b9-fce1-47f8-9de1-690756978c5c";
const bankMandiri = "https://www.figma.com/api/mcp/asset/31a06ab5-c729-49d4-bac6-9d17f778792d";
const walletOvo = "https://www.figma.com/api/mcp/asset/e0b4e2d2-8064-45e2-b8d5-309629541ab5";
const walletDana = "https://www.figma.com/api/mcp/asset/60792aa7-d350-4b92-97a2-4c938bca0c20";
const walletLinkAja = "https://www.figma.com/api/mcp/asset/19479f97-7752-4575-84c8-8f429be8799f";
const logoBca = "https://www.figma.com/api/mcp/asset/e5913d4b-ad0c-4cbd-83a4-2f37142cdca7";
const logoBni = "https://www.figma.com/api/mcp/asset/8afc2759-5c8f-43e7-9741-434a76d05814";
const logoMandiri = "https://www.figma.com/api/mcp/asset/2bb3eae0-2737-4aac-8d08-5bb205e8fcdb";
const logoBri = "https://www.figma.com/api/mcp/asset/37ce8456-7a58-4194-9d26-880946573585";
const logoQris = "https://www.figma.com/api/mcp/asset/e589d8e8-d95b-42ec-9abb-c2cff71362c6";
const logoDana = "https://www.figma.com/api/mcp/asset/791dc145-ae49-4bbc-8094-fdcdad068625";
const contactMask = "https://www.figma.com/api/mcp/asset/e6f56c6a-b473-4dd6-89d1-ba79f866bda8";
const contactBusiness = "https://www.figma.com/api/mcp/asset/7642c36c-079a-4941-b302-2788032e6893";
const contactService = "https://www.figma.com/api/mcp/asset/e307ad6c-5cb7-42eb-9f3a-31ee20e66b09";

const stats = [
  { value: 1000, suffix: "k+", label: "Merchants" },
  { value: 20, suffix: "+", label: "Bank Partners" },
  { value: 30, suffix: "+", label: "Payment Methods" },
  { value: 200, suffix: "K+", label: "Daily transactions" },
];

const paymentCards = [
  {
    icon: Users,
    title: "VA",
    description:
      "A Virtual Account is a digital payment method through an account that is created virtually for each customer",
  },
  {
    icon: QrCode,
    title: "QR",
    description:
      "With QRIS integration, you can easily accept payment transactions from various digital wallet applications using only one QR code",
  },
  {
    icon: Landmark,
    title: "BANK TRANSFER",
    description:
      "We already have very strong partners who can switch payment transactions of multiple banks with one click",
  },
  {
    icon: WalletCards,
    title: "DIRECT API",
    description:
      "Customize the payment page with your business identity and transaction needs in your online store / business application",
  },
];

const operationItems = [
  {
    color: "#b9efc6",
    icon: CheckCheck,
    title: "Real-time transfer",
    description: "Funds are processed instantly with immediate confirmation.",
  },
  {
    color: "#ffd4b2",
    icon: Clock3,
    title: "24/7 availability",
    description: "Payment and fund flows stay active around the clock.",
  },
  {
    color: "#dcc8ff",
    icon: ShieldCheck,
    title: "Easy Reconciliation",
    description: "Track and manage transactions with clear reporting and logs.",
  },
];

const trustedLogos = [
  { src: logoBca, alt: "BCA", boxClassName: "h-[42px] w-[144px]", imageClassName: "" },
  { src: logoBni, alt: "BNI", boxClassName: "h-[38px] w-[135px]", imageClassName: "" },
  { src: logoMandiri, alt: "Mandiri", boxClassName: "h-[42px] w-[139px]", imageClassName: "" },
  { src: logoBri, alt: "Bank BRI", boxClassName: "h-[38px] w-[160px]", imageClassName: "" },
  { src: logoQris, alt: "QRIS", boxClassName: "h-[47px] w-[125px]", imageClassName: "" },
  { src: logoDana, alt: "DANA", boxClassName: "h-[41px] w-[139px]", imageClassName: "" },
];

const supportedPayments = [
  { src: bankBca, bg: "#0060AF", alt: "BCA", boxClassName: "h-[14px] w-[56px]", imageClassName: "scale-[1.02]" },
  { src: bankBni, bg: "#ffffff", alt: "BNI", boxClassName: "h-[15px] w-[54px]", imageClassName: "scale-100" },
  { src: bankMandiri, bg: "#003D79", alt: "Mandiri", boxClassName: "h-[16px] w-[58px]", imageClassName: "scale-[0.96]" },
  { src: walletOvo, bg: "#4C3494", alt: "OVO", boxClassName: "h-[17px] w-[46px]", imageClassName: "scale-100" },
  { src: walletLinkAja, bg: "#E82529", alt: "LinkAja", boxClassName: "h-[21px] w-[40px]", imageClassName: "scale-[0.95]" },
  { src: walletDana, bg: "#108EE9", alt: "DANA", boxClassName: "h-[15px] w-[56px]", imageClassName: "scale-[0.98]" },
];

function SectionShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-[1440px] px-6 lg:px-[120px] ${className}`}>{children}</div>;
}

function CountUpStat({ value, suffix, duration = 1600 }: { value: number; suffix: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(1);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.45 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let animationFrame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(1 + (value - 1) * eased));
      if (progress < 1) animationFrame = window.requestAnimationFrame(tick);
    };

    animationFrame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [duration, hasStarted, value]);

  return (
    <div ref={ref}>
      {displayValue}
      {suffix}
    </div>
  );
}

function SalesChart() {
  const bluePoints = "M 8 150 C 24 172, 36 198, 54 186 S 82 108, 104 110 S 130 28, 160 30 S 198 130, 228 124 S 258 72, 286 76 S 314 124, 328 164";
  const redPoints = "M 8 170 C 26 178, 40 202, 60 198 S 86 136, 108 134 S 136 66, 166 70 S 198 140, 228 146 S 260 112, 288 116 S 314 150, 330 186";
  const columns = ["May", "Jun", "Jul", "Aug", "Sep", "Oct"];
  const linePositions = [36, 74, 112, 150, 188, 226, 264, 302];
  const months = [20, 76, 132, 188, 244, 300];

  return (
    <div className="relative h-[248px] overflow-hidden rounded-[6px] bg-[linear-gradient(180deg,#ffffff_0%,#f8faff_100%)]">
      <div className="absolute inset-y-[18px] left-[34px] right-[16px]">
        {linePositions.map((position) => (
          <div key={position} className="absolute bottom-[22px] top-[12px] w-px bg-[#e9eef7]" style={{ left: position }} />
        ))}
        <div className="absolute inset-x-0 bottom-[22px] h-px bg-[#eef2fa]" />
        <svg viewBox="0 0 340 210" className="absolute inset-0 h-full w-full overflow-visible">
          <path d={redPoints} fill="none" stroke="#ff5555" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d={bluePoints} fill="none" stroke="#2f7af1" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="160" cy="30" r="6.5" fill="#2f7af1" stroke="#ffffff" strokeWidth="3" />
        </svg>
        <div className="absolute left-[146px] top-[10px] rounded-[8px] border border-[#edf1fb] bg-white px-3 py-2 shadow-[0_10px_20px_rgba(45,51,81,0.1)]">
          <div className="flex items-center gap-2 text-[14px] font-semibold text-[#1d1e25]" style={{ fontFamily: "Inter, sans-serif" }}>
            <span className="h-[8px] w-[8px] rounded-[2px] bg-[#2280ff]" />
            820
          </div>
        </div>
      </div>

      <div className="absolute left-[4px] top-[30px] flex h-[170px] flex-col justify-between text-[12px] text-[#808d9e]" style={{ fontFamily: "Inter, sans-serif" }}>
        <span>1k</span>
        <span>800</span>
        <span>600</span>
        <span>400</span>
        <span>200</span>
        <span>0</span>
      </div>

      <div className="absolute bottom-0 left-[34px] right-[12px] flex justify-between text-[12px] text-[#808d9e]" style={{ fontFamily: "Inter, sans-serif" }}>
        {columns.map((month, index) => (
          <span key={month} style={{ transform: `translateX(${months[index] === 20 ? "0" : "0"})` }}>
            {month}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SolutionsEnterprisePage() {
  const { formMessage, showIncompleteMessage, submitLeadForm } = useLeadFormValidation();

  return (
    <div className="w-full overflow-x-hidden bg-white">
      <Navbar activeItem="Solutions" />

      <motion.section
        className="relative overflow-hidden bg-[#f7f9ff]"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <ImageWithFallback
          src={heroImage}
          alt=""
          className="pointer-events-none absolute inset-0 hidden h-full w-full object-cover object-[76%_center] lg:block"
        />
        <SectionShell className="relative flex min-h-[330px] items-center pb-14 pt-[58px] lg:min-h-[444px] lg:pb-0 lg:pt-[58px]">
          <ImageWithFallback
            src={heroImage}
            alt=""
            className="pointer-events-none absolute inset-x-0 top-0 h-full w-full object-cover object-[76%_center] lg:hidden"
          />
          <motion.div
            className="relative z-10 max-w-[470px] pt-4 lg:pt-0"
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <motion.h1
              className="text-[34px] font-semibold leading-[1.2] tracking-[-1px] text-[#101010] lg:text-[42px]"
              style={{ fontFamily: '"Poppins:SemiBold", Poppins, sans-serif' }}
            >
              Build enterprise-level payment and fund management facilities
            </motion.h1>
            <motion.p
              className="mt-6 max-w-[470px] text-[15px] leading-[1.2] tracking-[-1px] text-[#878787] lg:text-[16px]"
              style={{ fontFamily: '"Poppins:Regular", Poppins, sans-serif' }}
            >
              Provides payment collection, payment processing, wallet, and API capabilities to support high
              concurrency and complex business scenarios.
            </motion.p>
          </motion.div>
        </SectionShell>
      </motion.section>

      <motion.section
        className="bg-[#1053f3]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <SectionShell className="py-8 lg:py-[44px]">
          <div className="grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:gap-0">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                className={`flex flex-col items-center justify-center text-center text-white lg:min-h-[84px] ${
                  index < stats.length - 1 ? "lg:border-r lg:border-white/40" : ""
                }`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div
                  className={`tracking-[-1px] ${index === 0 ? "text-[48px]" : "text-[40px]"} leading-[1.3]`}
                  style={{ fontFamily: '"Poppins:SemiBold", Poppins, sans-serif' }}
                >
                  <CountUpStat value={item.value} suffix={item.suffix} />
                </div>
                <div className="mt-1 text-[12px] leading-[1.5]" style={{ fontFamily: '"Poppins:Regular", Poppins, sans-serif' }}>
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </SectionShell>
      </motion.section>

      <motion.section
        className="bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SectionShell className="py-16 lg:py-[109px]">
          <div className="mx-auto grid max-w-[1060px] items-center gap-12 lg:grid-cols-[419px_1fr] lg:gap-[112px]">
            <motion.div
              className="relative mx-auto w-full max-w-[419px]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-[8px] border border-[#eef2fb] bg-white p-5 shadow-[20px_40px_80px_0_rgba(89,96,135,0.12)]">
                <div className="text-[24px] font-bold leading-[30px] text-[#1d1e25]" style={{ fontFamily: "Inter, sans-serif" }}>
                  Sales Report
                </div>
                <div className="mt-4 flex gap-8 text-[14px] text-[#1d1e25]" style={{ fontFamily: "Inter, sans-serif" }}>
                  <div className="flex items-center gap-2">
                    <span className="h-[7px] w-[7px] rounded-[2px] bg-[#2280ff]" />
                    <span>My product</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-[7px] w-[7px] rounded-[2px] bg-[#ff5555]" />
                    <span>Competitor</span>
                  </div>
                </div>
                <div className="mt-4">
                  <SalesChart />
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-0 rounded-[8px] bg-[#1053f3] p-5 shadow-[20px_40px_80px_0_rgba(45,51,81,0.12)]">
                {[
                  { title: "Sales", value: "Rp31,092", percent: "4.2%" },
                  { title: "Marketing", value: "Rp29,128", percent: "2.1%" },
                ].map((item) => (
                  <div key={item.title} className="min-w-0 pr-4 last:pr-0">
                    <div className="text-[14px] font-semibold leading-5 text-[#8aa5f6]" style={{ fontFamily: "Inter, sans-serif" }}>
                      {item.title}
                    </div>
                    <div className="mt-1 text-[28px] font-bold leading-[1.05] text-white lg:text-[31px]" style={{ fontFamily: "Inter, sans-serif" }}>
                      {item.value}
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-[14px]">
                      <span className="flex items-center gap-1 font-semibold text-[#60d39c]" style={{ fontFamily: "Inter, sans-serif" }}>
                        <ImageWithFallback src={statsUpArrow} alt="" className="h-3 w-3" />
                        {item.percent}
                      </span>
                      <span className="text-[#8a89ff]" style={{ fontFamily: "Inter, sans-serif" }}>
                        from last year
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="max-w-[605px]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-[38px] font-semibold leading-[1.1] text-[#101010] lg:text-[48px]"
                style={{ fontFamily: '"Poppins:SemiBold", Poppins, sans-serif' }}
              >
                Flexible Payment Infrastructure Built for Your Business
              </h2>
              <p
                className="mt-6 max-w-[447px] text-[16px] font-medium leading-[1.6] text-[#757b8a]"
                style={{ fontFamily: '"Inter:Medium", Inter, sans-serif' }}
              >
                Jalur Pay integrates seamlessly with your systems, enabling you to customize payment flows, reduce
                failures, and scale operations efficiently.
              </p>
              <div className="mt-10 space-y-4">
                {[
                  "Smart routing to improve transaction success rates",
                  "Automated retries to recover failed payments",
                  "Secure authentication to protect user access",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.7 }}
                    transition={{ duration: 0.35, delay: index * 0.08 }}
                  >
                    <ImageWithFallback src={featureMark} alt="" className="h-[22px] w-[22px]" />
                    <p className="text-[16px] font-medium text-[#101010]" style={{ fontFamily: '"Inter:Medium", Inter, sans-serif' }}>
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </SectionShell>
      </motion.section>

      <motion.section
        className="bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SectionShell className="py-10 lg:py-[54px]">
          <div className="mx-auto flex max-w-[1060px] flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <h2 className="text-[34px] font-semibold leading-[1.2] text-[#101010] lg:text-[40px]" style={{ fontFamily: '"Poppins:SemiBold", Poppins, sans-serif' }}>
              Core Payment Capabilities
            </h2>
            <p className="max-w-[460px] text-[16px] leading-[26px] text-[#757b8a]" style={{ fontFamily: '"Inter:Medium", Inter, sans-serif' }}>
              Everything you need to accept and process payments at enterprise scale.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-[1060px] gap-[22px] lg:grid-cols-2 lg:gap-y-[26px]">
            {paymentCards.map((item, index) => (
              <motion.div
                key={item.title}
                className="flex min-h-[150px] items-start gap-5 rounded-[16px] bg-[#f7f9ff] px-6 py-7"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -5, boxShadow: "0 24px 50px rgba(16,83,243,0.08)" }}
              >
                <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-[18px] bg-[#1053f3]">
                  <item.icon size={28} strokeWidth={2.2} color="#ffffff" />
                </div>
                <div>
                  <h3 className="text-[18px] font-bold tracking-[0.6px] text-[#101010]" style={{ fontFamily: '"Inter:Bold", Inter, sans-serif' }}>
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[402px] text-[14px] leading-[24px] text-[#808d9e]" style={{ fontFamily: '"Inter:Medium", Inter, sans-serif' }}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionShell>
      </motion.section>

      <motion.section
        className="bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SectionShell className="py-14 lg:py-[64px]">
          <div className="mx-auto max-w-[1060px] text-center">
            <div className="text-[10px] font-bold uppercase tracking-[1.6px] text-[#1053f3]" style={{ fontFamily: "Inter, sans-serif" }}>
              How It Works
            </div>
            <h2 className="mt-3 text-[34px] font-semibold leading-[1.2] text-[#101010] lg:text-[40px]" style={{ fontFamily: '"Poppins:SemiBold", Poppins, sans-serif' }}>
              Built for Reliable Payment Operations
            </h2>
          </div>

          <div className="mx-auto mt-10 grid max-w-[1060px] gap-10 rounded-[18px] bg-[#f7f9ff] p-8 lg:grid-cols-[1fr_1fr] lg:gap-[80px] lg:px-[72px] lg:py-[58px]">
            <div className="flex h-full flex-col justify-center gap-8 lg:gap-10">
              {operationItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="flex items-start gap-5 border-b border-[#dfe5f2] pb-8 last:border-b-0 last:pb-0 lg:gap-6 lg:pb-9"
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.45 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                  >
                    <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: item.color }}>
                      <Icon size={22} color="#4f5968" />
                    </div>
                    <div>
                      <h3 className="text-[24px] font-semibold leading-[30px] tracking-[-1px] text-[#1d1e25]" style={{ fontFamily: '"Poppins:SemiBold", Poppins, sans-serif' }}>
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-[399px] text-[16px] leading-6 text-[#808d9e]" style={{ fontFamily: '"Inter:Medium", Inter, sans-serif' }}>
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="max-w-[445px] text-[38px] font-semibold leading-[1.2] text-[#1d1e25] lg:text-[48px]" style={{ fontFamily: '"Poppins:SemiBold", Poppins, sans-serif' }}>
                Widely Supported Payment Methods in Indonesia
              </h3>
              <p className="mt-5 max-w-[462px] text-[16px] font-medium leading-[26px] text-[#808d9e]" style={{ fontFamily: '"DM_Sans:Regular", "DM Sans", sans-serif' }}>
                Almost all banks and financial institutions in Indonesia, making it a widely available and convenient
                payment method.
              </p>
              <div className="mt-10 grid max-w-[300px] grid-cols-3 gap-[18px]">
                {supportedPayments.map((item) => (
                  <div
                    key={item.alt}
                    className="flex h-[50px] items-center justify-center rounded-[4px] px-2"
                    style={{ backgroundColor: item.bg }}
                  >
                    <div className={`flex items-center justify-center ${item.boxClassName}`}>
                      <ImageWithFallback
                        src={item.src}
                        alt={item.alt}
                        className={`h-auto max-h-full w-auto max-w-full shrink-0 object-contain ${item.imageClassName}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </SectionShell>
      </motion.section>

      <motion.section
        className="bg-[#f7f9ff]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SectionShell className="py-16 lg:py-[67px]">
          <div className="mx-auto max-w-[491px] text-center">
            <h2 className="text-[34px] font-semibold leading-[1.3] tracking-[-1px] text-[#101010] lg:text-[40px]" style={{ fontFamily: '"Poppins:SemiBold", Poppins, sans-serif' }}>
              Trusted by Growing Businesses
            </h2>
            <p className="mt-4 text-[16px] font-medium leading-[1.6] text-[#757b8a]" style={{ fontFamily: '"Inter:Medium", Inter, sans-serif' }}>
              Companies rely on Jalur Pay to process payments, manage funds, and scale efficiently.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-[792px] grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-[16px]">
            {trustedLogos.map((item, index) => (
              <motion.div
                key={item.alt}
                className="flex h-[90px] items-center justify-center rounded-[16px] border border-[#e2e8f0] bg-white px-8 shadow-[0_10px_30px_rgba(45,51,81,0.04)]"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <div className={`flex items-center justify-center ${item.boxClassName}`}>
                  <ImageWithFallback
                    src={item.src}
                    alt={item.alt}
                    className={`h-auto max-h-full w-auto max-w-full shrink-0 object-contain ${item.imageClassName}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </SectionShell>
      </motion.section>

      <motion.section
        className="relative overflow-hidden bg-[#1053f3]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <ImageWithFallback src={contactMask} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
        <SectionShell className="relative z-10 py-16 lg:py-[85px]">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-center lg:gap-[72px]">
            <motion.div
              className="max-w-[410px] text-white"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-[36px] font-semibold leading-[46px] tracking-[-0.36px]" style={{ fontFamily: '"Poppins:SemiBold", Poppins, sans-serif' }}>
                Expand your business Across Indonesia
              </h2>
              <div className="mt-[72px] space-y-[27px]">
                <div className="flex items-center gap-[13px]">
                  <div className="flex h-[41px] w-[41px] items-center justify-center rounded-full bg-[#1053f3]">
                    <ImageWithFallback src={contactBusiness} alt="" className="h-6 w-6 object-contain" />
                  </div>
                  <p className="max-w-[278px] text-[14px] font-medium leading-[23px] tracking-[-0.14px]" style={{ fontFamily: '"Poppins:Medium", Poppins, sans-serif' }}>
                    Customize the right solution for your business
                  </p>
                </div>
                <div className="flex items-center gap-[13px]">
                  <div className="flex h-[41px] w-[41px] items-center justify-center rounded-full bg-[#1053f3]">
                    <ImageWithFallback src={contactService} alt="" className="h-8 w-8 object-contain" />
                  </div>
                  <p className="max-w-[278px] text-[14px] font-medium leading-[23px] tracking-[-0.14px]" style={{ fontFamily: '"Poppins:Medium", Poppins, sans-serif' }}>
                    Professional customer service staff will answer your questions
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.form
              onSubmit={submitLeadForm}
              className="w-full max-w-[464px] rounded-[24px] border border-[#e3e3e3] bg-white px-[31px] py-6"
              initial={{ opacity: 0, x: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <div className="grid gap-5 lg:grid-cols-2 lg:gap-x-8">
                <label className="block">
                  <span className="block text-[14px] leading-[26px] tracking-[0.14px] text-[#1a1a1a]" style={{ fontFamily: '"Poppins:Regular", Poppins, sans-serif' }}>
                    Name
                  </span>
                  <input className="h-[38px] w-full rounded-[52px] border border-[#1053f3] px-4 outline-none" />
                </label>
                <label className="block">
                  <span className="block text-[14px] leading-[26px] tracking-[0.14px] text-[#1a1a1a]" style={{ fontFamily: '"Poppins:Regular", Poppins, sans-serif' }}>
                    Corporate email
                  </span>
                  <input className="h-[38px] w-full rounded-[52px] border border-[#1053f3] px-4 outline-none" />
                </label>
              </div>
              <label className="mt-5 block">
                <span className="block text-[14px] leading-[26px] tracking-[0.14px] text-[#1a1a1a]" style={{ fontFamily: '"Poppins:Regular", Poppins, sans-serif' }}>
                  Where did you hear about us?
                </span>
                <input className="h-[38px] w-full rounded-[52px] border border-[#1053f3] px-4 outline-none" />
              </label>
              <label className="mt-5 block">
                <span className="block text-[14px] leading-[26px] tracking-[0.14px] text-[#1a1a1a]" style={{ fontFamily: '"Poppins:Regular", Poppins, sans-serif' }}>
                  Phone
                </span>
                <input className="h-[38px] w-full rounded-[52px] border border-[#1053f3] px-4 outline-none" />
              </label>
              <LeadFormMessage show={showIncompleteMessage} message={formMessage} />
              <button type="submit" className={leadFormButtonClass} style={{ fontFamily: '"Poppins:SemiBold", Poppins, sans-serif' }}>
                Send
              </button>
            </motion.form>
          </div>
          <div className="mt-10 h-[2px] w-full bg-white/50" />
        </SectionShell>
      </motion.section>

      <Footer />
    </div>
  );
}
