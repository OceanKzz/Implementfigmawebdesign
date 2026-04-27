import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { LeadFormMessage, leadFormButtonClass, useLeadFormValidation } from "../components/LeadFormValidation";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const heroImage = "https://www.figma.com/api/mcp/asset/dd615769-7ab2-4340-a2be-7dd0fe47e28d";
const featuresImage = "https://www.figma.com/api/mcp/asset/8d4f4acc-0ea4-4168-bd00-6d298a19d97b";
const teamMemberA = "https://www.figma.com/api/mcp/asset/dfcd75eb-7a21-4469-9f2a-dbda84e1767a";
const teamMemberB = "https://www.figma.com/api/mcp/asset/0d93e48b-610d-4db2-8f5c-8795363776aa";
const teamMemberC = "https://www.figma.com/api/mcp/asset/af4297ea-ab2f-4ab2-b3ff-109fce5400c1";
const licensedCentralBank = "https://www.figma.com/api/mcp/asset/977e8f52-5700-44df-9d49-63d3cf8e43c5";
const licensedAes = "https://www.figma.com/api/mcp/asset/f3862aed-7262-4fa2-affc-81c8a0bfd181";
const licensedPci = "https://www.figma.com/api/mcp/asset/135501a6-224a-4c3d-b062-1579fcadc2cc";
const licensedIso = "https://www.figma.com/api/mcp/asset/1be1e779-0fcb-46d6-ad11-832a1e14bc36";
const licensedKominfo = "https://www.figma.com/api/mcp/asset/c5f8124f-7eb0-49be-ab5d-9aa3a4b50934";
const licensedFinance = "https://www.figma.com/api/mcp/asset/fba26bf7-46b3-4339-a23a-bc8248e83fab";
const licensedDukcapil = "https://www.figma.com/api/mcp/asset/cbd87c1f-66af-436e-8132-5abcc7677ea4";
const financeGlow = "https://www.figma.com/api/mcp/asset/b3ea1d44-0e49-4c8a-8ba5-13417d1ef4ea";
const iconVa = "https://www.figma.com/api/mcp/asset/2b001370-4268-4b12-a4a7-d805970dd422";
const iconQr = "https://www.figma.com/api/mcp/asset/b42181d1-9fa3-4bfc-9495-ddd239d7b278";
const iconDirectApi = "https://www.figma.com/api/mcp/asset/0ee16085-8d2e-4e2a-92cd-f2b1565feb82";
const iconBankTransfer = "https://www.figma.com/api/mcp/asset/85bc3041-0edc-49d2-85e9-b71ff8aa3464";
const contactMask = "https://www.figma.com/api/mcp/asset/4bc93558-a1c5-46db-ae8b-6c009a5063a1";
const contactBusiness = "https://www.figma.com/api/mcp/asset/a31ec281-a095-4115-b465-99aa814716bc";
const contactService = "https://www.figma.com/api/mcp/asset/9edba48a-a8ca-48fa-a5cf-26674fadfd55";

const stats = [
  { value: 1000, suffix: "k+", label: "Merchants" },
  { value: 20, suffix: "+", label: "Bank Partners" },
  { value: 30, suffix: "+", label: "Payment Methods" },
  { value: 200, suffix: "K+", label: "Daily transactions" },
];

const licensedLeft = [
  {
    icon: licensedCentralBank,
    title: "The Central Bank",
    description: "PJP Level 1, licensed operator",
  },
  {
    icon: licensedAes,
    title: "AES 256",
    description: "AES 256 certified for Security Encryption Standard",
  },
  {
    icon: licensedPci,
    title: "PCI DSS",
    description: "PCI DSS Certified with periodic audits",
  },
  {
    icon: licensedIso,
    title: "ISO/EIC 270001",
    description: "Certified for information security managementstandard",
  },
];

const licensedRight = [
  {
    icon: licensedKominfo,
    title: "Kominfo (Telecommunication & Information)",
    description:
      "Electronic System Operator Registered at the Ministry of Communication and Information of the Republic of Indonesia",
  },
  {
    icon: licensedFinance,
    title: "Ministry of Finance",
    description:
      "Registered as Other Perception Agency (Acceptance Agent) in the Electronic State Revenue System.",
  },
  {
    icon: licensedDukcapil,
    title: "DUKCAPIL",
    description: "In partnership with Dukcapil for identity verification",
  },
];

const paymentCards = [
  {
    icon: iconVa,
    title: "VA",
    description:
      "A Virtual Account is a digital payment method through an account that is created virtually for each customer",
  },
  {
    icon: iconQr,
    title: "QR",
    description:
      "With QRIS integration, you can easily accept payment transactions from various digital wallet applications using only one QR code",
  },
  {
    icon: iconBankTransfer,
    title: "BANK TRANSFER",
    description:
      "We already have very strong partners who can switch payment transactions of multiple banks with one click",
  },
  {
    icon: iconDirectApi,
    title: "DIRECT API",
    description:
      "Customize the payment page with your business identity and transaction needs in your online store / business application",
  },
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
    const initialValue = 1;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const nextValue = Math.round(initialValue + (value - initialValue) * eased);
      setDisplayValue(nextValue);

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(tick);
      }
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

export function SolutionsSmbPage() {
  const { showIncompleteMessage, submitLeadForm } = useLeadFormValidation();

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
          className="pointer-events-none absolute inset-0 hidden h-full w-full object-cover object-[72%_center] lg:block"
        />
        <SectionShell className="relative flex min-h-[330px] items-center pb-14 pt-[58px] lg:min-h-[444px] lg:pb-0 lg:pt-[58px]">
          <ImageWithFallback
            src={heroImage}
            alt=""
            className="pointer-events-none absolute inset-x-0 top-0 h-full w-full object-cover object-[72%_center] opacity-100 lg:hidden"
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
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Easy payment collection designed specifically for SMB
            </motion.h1>
            <motion.p
              className="mt-6 max-w-[470px] text-[15px] leading-[1.2] tracking-[-1px] text-[#878787] lg:text-[16px]"
              style={{ fontFamily: '"Poppins:Regular", Poppins, sans-serif' }}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
            >
              Simple development, can be started in minutes, covers major payment methods in Indonesia.
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
                <div
                  className="mt-1 text-[12px] leading-[1.5]"
                  style={{ fontFamily: '"Poppins:Regular", Poppins, sans-serif' }}
                >
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
        <SectionShell className="py-16 lg:py-[68px]">
          <div className="grid items-center gap-12 lg:grid-cols-[438px_1fr] lg:gap-[209px]">
            <motion.div
              className="relative mx-auto w-full max-w-[378px]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <ImageWithFallback
                src={featuresImage}
                alt="SMB team working together"
                className="h-auto w-full rounded-[189px] object-cover"
              />
              <motion.div
                className="absolute bottom-[18px] left-[109px] flex h-[96px] w-[329px] max-w-[calc(100%-24px)] items-center gap-6 rounded-[16px] bg-white px-5 py-5 shadow-[20px_40px_80px_0_rgba(45,51,81,0.12)]"
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <div className="relative h-[54px] w-[120px]">
                  <ImageWithFallback src={teamMemberA} alt="" className="absolute left-0 top-0 h-[54px] w-[54px]" />
                  <ImageWithFallback src={teamMemberB} alt="" className="absolute left-[32px] top-0 h-[54px] w-[54px]" />
                  <ImageWithFallback src={teamMemberC} alt="" className="absolute left-[66px] top-0 h-[54px] w-[54px]" />
                </div>
                <div>
                  <div
                    className="text-[24px] font-bold leading-[1.5] text-[#101010]"
                    style={{ fontFamily: "Archivo, Inter, sans-serif" }}
                  >
                    1.289
                  </div>
                  <div
                    className="text-[16px] font-medium leading-[1.6] text-[#757b8a]"
                    style={{ fontFamily: '"Inter:Medium", Inter, sans-serif' }}
                  >
                    Our Remote Team
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="max-w-[546px]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="text-[38px] font-bold leading-[1.2] text-[#101010] lg:text-[44px]"
                style={{ fontFamily: '"Poppins:Bold", Poppins, sans-serif' }}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45 }}
              >
                Boost Online Transactions, Select Payment Solutions As Required
              </motion.h2>
              <motion.p
                className="mt-8 max-w-[483px] text-[16px] font-medium leading-[1.6] text-[#757b8a]"
                style={{ fontFamily: '"Inter:Medium", Inter, sans-serif' }}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45, delay: 0.08 }}
              >
                We&apos;ll match you with our team of expert strategists who will make sure your top-of-the-line
                strategies are always on target. Contact us today to get started!
              </motion.p>
              <div className="mt-14 flex gap-[45px]">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.45, delay: 0.16 }}
                >
                  <div
                    className="text-[40px] font-bold leading-[1.2] text-[#101010]"
                    style={{ fontFamily: '"Poppins:Bold", Poppins, sans-serif' }}
                  >
                    200+
                  </div>
                  <div
                    className="mt-2 text-[16px] font-medium leading-[1.5] text-[#757b8a]"
                    style={{ fontFamily: '"Inter:Medium", Inter, sans-serif' }}
                  >
                    Service Team
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.45, delay: 0.24 }}
                >
                  <div
                    className="text-[40px] font-bold leading-[1.2] text-[#101010]"
                    style={{ fontFamily: '"Poppins:Bold", Poppins, sans-serif' }}
                  >
                    8.990
                  </div>
                  <div
                    className="mt-2 text-[16px] font-medium leading-[1.6] text-[#757b8a]"
                    style={{ fontFamily: '"Inter:Medium", Inter, sans-serif' }}
                  >
                    Professional Rating
                  </div>
                </motion.div>
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
          <motion.div
            className="mx-auto max-w-[541px] text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-[34px] font-semibold leading-[1.3] tracking-[-1px] text-[#101010] lg:text-[40px]"
              style={{ fontFamily: '"Poppins:SemiBold", Poppins, sans-serif' }}
            >
              Our Licensed System Protects Your Transactions
            </h2>
            <p
              className="mt-4 text-[16px] font-medium leading-[1.6] text-[#757b8a]"
              style={{ fontFamily: '"Inter:Medium", Inter, sans-serif' }}
            >
              We&apos;re committed to your business&apos;s transaction success
            </p>
          </motion.div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[409px_445px] lg:justify-center lg:gap-[92px]">
            <div className="space-y-[5px]">
              {licensedLeft.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="flex min-h-[105px] items-center gap-6 rounded-[16px] border border-[#e2e8f0] bg-white px-[19px] py-4"
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <ImageWithFallback src={item.icon} alt="" className="h-[71px] w-[78px] object-contain" />
                  <div>
                    <h3
                      className="text-[20px] font-semibold leading-6 text-[#101010]"
                      style={{ fontFamily: '"Inter:Semi_Bold", Inter, sans-serif' }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="mt-1 max-w-[271px] text-[14px] leading-[21px] text-[#757b8a]"
                      style={{ fontFamily: '"Inter:Regular", Inter, sans-serif' }}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-[8px]">
              {licensedRight.map((item, index) => (
                <motion.div
                  key={item.title}
                  className={`flex items-center gap-6 rounded-[16px] border border-[#e2e8f0] bg-white px-[20px] py-5 ${
                    index === 0 ? "min-h-[152px]" : index === 1 ? "min-h-[133px]" : "min-h-[140px]"
                  }`}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <ImageWithFallback
                    src={item.icon}
                    alt=""
                    className={`${index === 2 ? "h-[85px] w-[65px]" : "h-[70px] w-[70px]"} object-contain`}
                  />
                  <div>
                    <h3
                      className="max-w-[302px] text-[20px] font-semibold leading-6 text-[#101010]"
                      style={{ fontFamily: '"Inter:Semi_Bold", Inter, sans-serif' }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="mt-1 max-w-[302px] text-[14px] leading-[21px] text-[#757b8a]"
                      style={{ fontFamily: '"Inter:Regular", Inter, sans-serif' }}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionShell>
      </motion.section>

      <motion.section
        className="relative overflow-hidden bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SectionShell className="relative py-16 lg:py-[82px]">
          <ImageWithFallback
            src={financeGlow}
            alt=""
            className="pointer-events-none absolute right-[-260px] top-16 hidden w-[578px] opacity-80 lg:block"
          />
          <motion.div
            className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-[38px] font-bold leading-[1.2] text-[#101010] lg:text-[42px]"
              style={{ fontFamily: '"Poppins:Bold", Poppins, sans-serif' }}
            >
              What drives Finance Flow?
            </h2>
            <p
              className="max-w-[496px] text-[18px] leading-[32px] text-[#101010]"
              style={{ fontFamily: '"DM_Sans:Regular", "DM Sans", sans-serif' }}
            >
              Just one integration to get multiple payment methods at once on your business site.
            </p>
          </motion.div>

          <div className="relative z-10 mt-10 grid gap-[22px] lg:grid-cols-2 lg:gap-y-[44px] lg:gap-x-[20px]">
            {paymentCards.map((item, index) => (
              <motion.div
                key={item.title}
                className="flex min-h-[230px] items-start gap-6 rounded-[30px] bg-[#f7f9ff] px-6 py-10 lg:min-h-[246px] lg:rounded-[40px] lg:px-8 lg:py-[58px]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -6, boxShadow: "0 24px 50px rgba(16,83,243,0.08)" }}
              >
                <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-[20px] bg-[#1053f3]">
                  <ImageWithFallback src={item.icon} alt="" className="h-[54px] w-[54px] object-contain" />
                </div>
                <div>
                  <h3
                    className="text-[18px] font-bold uppercase tracking-[0.9px] text-[#101010]"
                    style={{ fontFamily: '"Inter:Bold", Inter, sans-serif' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-4 max-w-[402px] text-[18px] leading-[32px] text-[#757b8a]"
                    style={{ fontFamily: '"Inter:Regular", Inter, sans-serif' }}
                  >
                    {item.description}
                  </p>
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
              <h2
                className="text-[36px] font-semibold leading-[46px] tracking-[-0.36px]"
                style={{ fontFamily: '"Poppins:SemiBold", Poppins, sans-serif' }}
              >
                Expand your business to Indonesia
              </h2>
              <div className="mt-[72px] space-y-[27px]">
                <div className="flex items-center gap-[13px]">
                  <div className="flex h-[41px] w-[41px] items-center justify-center rounded-full bg-[#1053f3]">
                    <ImageWithFallback src={contactBusiness} alt="" className="h-6 w-6 object-contain" />
                  </div>
                  <p
                    className="max-w-[278px] text-[14px] font-medium leading-[23px] tracking-[-0.14px]"
                    style={{ fontFamily: '"Poppins:Medium", Poppins, sans-serif' }}
                  >
                    Customize the right solution for your business
                  </p>
                </div>
                <div className="flex items-center gap-[13px]">
                  <div className="flex h-[41px] w-[41px] items-center justify-center rounded-full bg-[#1053f3]">
                    <ImageWithFallback src={contactService} alt="" className="h-8 w-8 object-contain" />
                  </div>
                  <p
                    className="max-w-[278px] text-[14px] font-medium leading-[23px] tracking-[-0.14px]"
                    style={{ fontFamily: '"Poppins:Medium", Poppins, sans-serif' }}
                  >
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
                  <span
                    className="block text-[14px] leading-[26px] tracking-[0.14px] text-[#1a1a1a]"
                    style={{ fontFamily: '"Poppins:Regular", Poppins, sans-serif' }}
                  >
                    Name
                  </span>
                  <input className="h-[38px] w-full rounded-[52px] border border-[#1053f3] px-4 outline-none" />
                </label>
                <label className="block">
                  <span
                    className="block text-[14px] leading-[26px] tracking-[0.14px] text-[#1a1a1a]"
                    style={{ fontFamily: '"Poppins:Regular", Poppins, sans-serif' }}
                  >
                    Corporate email
                  </span>
                  <input className="h-[38px] w-full rounded-[52px] border border-[#1053f3] px-4 outline-none" />
                </label>
              </div>
              <label className="mt-5 block">
                <span
                  className="block text-[14px] leading-[26px] tracking-[0.14px] text-[#1a1a1a]"
                  style={{ fontFamily: '"Poppins:Regular", Poppins, sans-serif' }}
                >
                  Where did you hear about us?
                </span>
                <input className="h-[38px] w-full rounded-[52px] border border-[#1053f3] px-4 outline-none" />
              </label>
              <label className="mt-5 block">
                <span
                  className="block text-[14px] leading-[26px] tracking-[0.14px] text-[#1a1a1a]"
                  style={{ fontFamily: '"Poppins:Regular", Poppins, sans-serif' }}
                >
                  Phone
                </span>
                <input className="h-[38px] w-full rounded-[52px] border border-[#1053f3] px-4 outline-none" />
              </label>
              <LeadFormMessage show={showIncompleteMessage} />
              <button
                type="submit"
                className={leadFormButtonClass}
                style={{ fontFamily: '"Poppins:SemiBold", Poppins, sans-serif' }}
              >
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
