import { motion } from "motion/react";
import { CheckCircle2, QrCode, ShieldCheck, Store, WalletCards } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { openSubmitSuccessModal } from "../components/SubmitSuccessModal";

const heroImage = "https://www.figma.com/api/mcp/asset/5ad4cb30-b227-40d5-9ed9-32c13c9fd4e0";
const featureImage = "https://www.figma.com/api/mcp/asset/b0744cff-fce0-49a1-8425-7cba7c509f57";
const channelsRegister = "https://www.figma.com/api/mcp/asset/84108814-661b-4c71-9c69-74d02a537f03";
const channelsVerification = "https://www.figma.com/api/mcp/asset/3200a56d-3e47-488d-9f34-87f16691ce4b";
const channelsStart = "https://www.figma.com/api/mcp/asset/8bcc7745-9f60-40bc-95db-0be7193a9119";
const ellipseGlow = "https://www.figma.com/api/mcp/asset/e5b02e0d-9883-4abe-923f-312fbfb22d86";
const logoBca = "https://www.figma.com/api/mcp/asset/e5913d4b-ad0c-4cbd-83a4-2f37142cdca7";
const logoBni = "https://www.figma.com/api/mcp/asset/8afc2759-5c8f-43e7-9741-434a76d05814";
const logoMandiri = "https://www.figma.com/api/mcp/asset/2bb3eae0-2737-4aac-8d08-5bb205e8fcdb";
const logoBri = "https://www.figma.com/api/mcp/asset/37ce8456-7a58-4194-9d26-880946573585";
const logoQris = "https://www.figma.com/api/mcp/asset/e589d8e8-d95b-42ec-9abb-c2cff71362c6";
const logoDana = "https://www.figma.com/api/mcp/asset/791dc145-ae49-4bbc-8094-fdcdad068625";
const contactMask = "https://www.figma.com/api/mcp/asset/f820e1c5-ceeb-42a5-a7c6-02ba5bbda681";
const contactBusiness = "https://www.figma.com/api/mcp/asset/0725de19-0011-4088-b4f3-debdc1c8dba3";
const contactService = "https://www.figma.com/api/mcp/asset/54c53c53-4359-4e7d-ba5d-10af6b52a60d";

const channelCards = [
  {
    icon: channelsRegister,
    title: "Register",
    description: "Learn about the advantages of QRIS. Contact our sales team on the registration process.",
    highlighted: false,
  },
  {
    icon: channelsVerification,
    title: "Verification",
    description: "Complete all required paperwork. Our team will work with PTEN to register your company.",
    highlighted: true,
  },
  {
    icon: channelsStart,
    title: "Start Using QRIS",
    description: "Make QRIS the payment option in your store.",
    highlighted: false,
  },
];

const insertedBenefits = [
  {
    icon: QrCode,
    title: "One QR, many wallets",
    description: "Accept payments from major Indonesian wallets and bank apps with one QRIS setup.",
  },
  {
    icon: ShieldCheck,
    title: "Simpler daily operations",
    description: "Reduce cashier friction and keep payment acceptance consistent across outlets.",
  },
  {
    icon: WalletCards,
    title: "Faster checkout moments",
    description: "Give customers a familiar scan-and-pay flow that feels instant at the counter.",
  },
];

const supportedLogos = [
  { src: logoBca, alt: "BCA", box: "h-[42px] w-[144px]" },
  { src: logoBni, alt: "BNI", box: "h-[38px] w-[135px]" },
  { src: logoMandiri, alt: "Mandiri", box: "h-[42px] w-[139px]" },
  { src: logoBri, alt: "Bank BRI", box: "h-[38px] w-[160px]" },
  { src: logoQris, alt: "QRIS", box: "h-[47px] w-[125px]" },
  { src: logoDana, alt: "DANA", box: "h-[41px] w-[139px]" },
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

export function ProductQrisPage() {
  return (
    <div className="w-full overflow-x-hidden bg-white">
      <Navbar activeItem="Product" />

      <motion.section
        className="relative overflow-hidden bg-[#f7f9ff]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="pointer-events-none absolute left-[36%] top-[154px] h-[430px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(16,83,243,0.12)_0%,rgba(16,83,243,0.06)_36%,rgba(16,83,243,0)_72%)]" />
        <div className="pointer-events-none absolute right-[-80px] top-[154px] h-[430px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(91,211,255,0.14)_0%,rgba(91,211,255,0.08)_36%,rgba(91,211,255,0)_72%)]" />
        <SectionShell className="relative flex min-h-[420px] items-center py-12 lg:min-h-[563px] lg:py-0">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[510px_1fr]">
            <motion.div
              className="max-w-[510px]"
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <h1
                className="text-[32px] font-semibold leading-[1.2] tracking-[-1px] text-[#101010] lg:text-[36px]"
                style={{ fontFamily: '"Poppins:SemiBold", Poppins, sans-serif' }}
              >
                Accept Cashless Payments Made Easier in Your Store
              </h1>
              <p
                className="mt-8 max-w-[470px] whitespace-pre-line text-[16px] leading-[1.5] text-[#878787]"
                style={{ fontFamily: '"Poppins:Regular", Poppins, sans-serif' }}
              >
                Enable seamless QR payments with QRIS, Indonesia's unified QR standard.
                {"\n"}Accept payments from multiple e-wallets and banks through a single integration, improving
                conversion and simplifying operations.
              </p>
            </motion.div>
            <motion.div
              className="flex justify-center lg:justify-end lg:pr-[104px]"
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
            >
              <ImageWithFallback src={heroImage} alt="QRIS illustration" className="h-auto w-[280px] lg:w-[324px]" />
            </motion.div>
          </div>
        </SectionShell>
      </motion.section>

      <motion.section
        className="bg-white"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
      >
        <SectionShell className="py-16 lg:py-[80px]">
          <div className="mx-auto grid max-w-[1138px] items-center gap-12 lg:grid-cols-[516px_1fr] lg:gap-24">
            <motion.div
              className="overflow-hidden rounded-[16px]"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55 }}
            >
              <ImageWithFallback src={featureImage} alt="QRIS usage in store" className="h-auto w-full object-cover" />
            </motion.div>
            <motion.div
              className="max-w-[563px]"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55 }}
            >
              <h2
                className="text-[36px] font-semibold leading-[1.15] tracking-[-1px] text-[#1d1e25] lg:text-[44px]"
                style={{ fontFamily: '"Poppins:SemiBold", Poppins, sans-serif' }}
              >
                Accept QRIS Payments One QR Code for All Indonesian Wallets
              </h2>
              <p
                className="mt-8 max-w-[480px] text-[16px] font-medium leading-[1.6] text-[#757b8a]"
                style={{ fontFamily: '"Inter:Medium", Inter, sans-serif' }}
              >
                Accept payments from all major QR-enabled wallets and banking apps across Indonesia, including
                leading e-wallet providers and mobile banking platforms.
              </p>
              <div className="mt-10 flex gap-10">
                <div>
                  <p
                    className="text-[40px] font-semibold leading-[1.3] tracking-[-1px] text-[#101010]"
                    style={{ fontFamily: '"Poppins:SemiBold", Poppins, sans-serif' }}
                  >
                    1,289
                  </p>
                  <p
                    className="mt-3 w-[177px] text-[16px] font-medium leading-[1.6] text-[#757b8a]"
                    style={{ fontFamily: '"Inter:Medium", Inter, sans-serif' }}
                  >
                    Daily growth of users
                  </p>
                </div>
                <div>
                  <p
                    className="text-[40px] font-semibold leading-[1.3] tracking-[-1px] text-[#101010]"
                    style={{ fontFamily: '"Poppins:SemiBold", Poppins, sans-serif' }}
                  >
                    2,350
                  </p>
                  <p
                    className="mt-3 w-[159px] text-[16px] font-medium leading-[1.6] text-[#757b8a]"
                    style={{ fontFamily: '"Inter:Medium", Inter, sans-serif' }}
                  >
                    Growth Index
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </SectionShell>
      </motion.section>

      <motion.section
        className="bg-[#f7f9ff]"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
      >
        <SectionShell className="py-16 lg:py-[122px]">
          <div className="mx-auto max-w-[620px] text-center">
            <h2
              className="text-[40px] font-bold leading-[1.2] text-[#101010] lg:text-[48px]"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              3 Steps to Create QRIS
            </h2>
          </div>
          <div className="mx-auto mt-14 grid max-w-[948px] gap-[30px] lg:grid-cols-3 lg:gap-[60px]">
            {channelCards.map((card, index) => (
              <motion.div
                key={card.title}
                className={`group min-h-[291px] rounded-[16px] px-6 pb-8 pt-[30px] ${
                  card.highlighted ? "bg-[#e9efff]" : "bg-white"
                }`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 24px 60px rgba(16,83,243,0.10)",
                  backgroundColor: card.highlighted ? "#dce7ff" : "#f6f9ff",
                }}
              >
                <motion.div
                  className="flex h-[70px] w-[70px] items-center justify-center rounded-[8px] bg-[#1053f3] shadow-[0_14px_28px_rgba(16,83,243,0.18)]"
                  whileHover={{ scale: 1.06, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                >
                  <ImageWithFallback src={card.icon} alt="" className="h-[40px] w-[40px] object-contain" />
                </motion.div>
                <motion.h3
                  className="mt-7 text-[18px] font-bold leading-[1.2] text-[#101010]"
                  style={{ fontFamily: '"Inter:Bold", Inter, sans-serif' }}
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  className="mt-3 text-[16px] font-medium leading-[1.6] text-[#757b8a]"
                  style={{ fontFamily: '"Inter:Medium", Inter, sans-serif' }}
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  {card.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </SectionShell>
      </motion.section>

      <motion.section
        className="bg-white"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
      >
        <SectionShell className="py-14 lg:py-[86px]">
          <div className="relative mx-auto max-w-[1040px] overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#0f53f3_0%,#2a7bff_44%,#85d5ff_100%)] px-8 py-10 shadow-[0_30px_80px_rgba(16,83,243,0.18)] lg:px-12 lg:py-12">
            <div className="pointer-events-none absolute -left-[72px] top-[26px] h-[220px] w-[220px] rounded-full bg-[rgba(255,255,255,0.12)] blur-[10px]" />
            <div className="pointer-events-none absolute right-[-40px] top-[-36px] h-[240px] w-[240px] rounded-full bg-[rgba(255,255,255,0.14)] blur-[12px]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[140px] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.08)_100%)]" />
            <div className="relative grid items-start gap-10 lg:grid-cols-[320px_1fr] lg:gap-12">
              <div>
                <p
                  className="inline-flex rounded-full border border-[rgba(255,255,255,0.28)] bg-[rgba(255,255,255,0.12)] px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-white"
                  style={{ fontFamily: '"Inter:Bold", Inter, sans-serif' }}
                >
                  In-Store Advantage
                </p>
                <h3
                  className="mt-5 text-[32px] font-semibold leading-[1.1] tracking-[-0.8px] text-white"
                  style={{ fontFamily: '"Poppins:SemiBold", Poppins, sans-serif' }}
                >
                  Why QRIS feels better at the point of sale
                </h3>
                <p
                  className="mt-5 max-w-[290px] text-[16px] font-medium leading-[1.65] text-[rgba(255,255,255,0.82)]"
                  style={{ fontFamily: '"Inter:Medium", Inter, sans-serif' }}
                >
                  A stronger bridge between setup and adoption, showing why one QR flow makes counters feel faster,
                  cleaner, and easier to manage.
                </p>
              </div>
              <div className="grid gap-5 lg:grid-cols-3">
                {insertedBenefits.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      className="min-h-[220px] rounded-[24px] border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.12)] px-6 py-6 backdrop-blur-[10px] shadow-[0_18px_40px_rgba(5,35,120,0.15)]"
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      whileHover={{ y: -6 }}
                    >
                      <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[16px] bg-white text-[#1053f3] shadow-[0_10px_30px_rgba(255,255,255,0.18)]">
                        <Icon size={26} color="currentColor" strokeWidth={2.1} />
                      </div>
                      <h4
                        className="mt-6 text-[19px] font-bold leading-[1.25] text-white"
                        style={{ fontFamily: '"Inter:Bold", Inter, sans-serif' }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="mt-3 text-[15px] font-medium leading-[1.7] text-[rgba(255,255,255,0.8)]"
                        style={{ fontFamily: '"Inter:Medium", Inter, sans-serif' }}
                      >
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </SectionShell>
      </motion.section>

      <motion.section
        className="relative overflow-hidden bg-white"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
      >
        <ImageWithFallback src={ellipseGlow} alt="" className="pointer-events-none absolute right-[-140px] top-[50px] hidden w-[578px] opacity-55 lg:block" />
        <SectionShell className="py-16 lg:py-[67px]">
          <div className="mx-auto max-w-[491px] text-center">
            <h2
              className="text-[34px] font-semibold leading-[1.3] tracking-[-1px] text-[#101010] lg:text-[40px]"
              style={{ fontFamily: '"Poppins:SemiBold", Poppins, sans-serif' }}
            >
              Use our products to stay one step ahead!
            </h2>
            <p
              className="mx-auto mt-4 max-w-[454px] text-[16px] font-medium leading-[1.6] text-[#757b8a]"
              style={{ fontFamily: '"Inter:Medium", Inter, sans-serif' }}
            >
              Join over 12 million people who choose us for fast and secure online payment methods. We are simpler and
              cheaper than banks and non-banks.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-[776px] grid-cols-2 gap-4 lg:grid-cols-3">
            {supportedLogos.map((item, index) => (
              <motion.div
                key={`${item.alt}-${index}`}
                className="flex h-[90px] items-center justify-center rounded-[16px] border border-[#e2e8f0] bg-white px-8 shadow-[0_10px_30px_rgba(45,51,81,0.04)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <div className={`flex items-center justify-center ${item.box}`}>
                  <ImageWithFallback src={item.src} alt={item.alt} className="h-auto max-h-full w-auto max-w-full object-contain" />
                </div>
              </motion.div>
            ))}
          </div>
        </SectionShell>
      </motion.section>

      <motion.section
        className="relative overflow-hidden bg-[#1053f3]"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
      >
        <ImageWithFallback src={contactMask} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
        <SectionShell className="relative py-14 lg:py-[85px]">
          <div className="mx-auto grid max-w-[974px] items-center gap-14 lg:grid-cols-[332px_464px] lg:justify-center lg:gap-[72px]">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55 }}
            >
              <h2
                className="text-[32px] font-semibold leading-[1.28] tracking-[-0.36px] text-white lg:text-[36px]"
                style={{ fontFamily: '"Poppins:SemiBold", Poppins, sans-serif' }}
              >
                Expand your business to Vietnam
              </h2>
              <div className="mt-10 space-y-7">
                {[
                  { icon: contactBusiness, text: "Customize the right solution for your business" },
                  { icon: contactService, text: "Professional customer service staff will answer your questions" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-[13px]">
                    <div className="flex h-[41px] w-[41px] items-center justify-center rounded-full bg-[#0f4de0]">
                      <ImageWithFallback src={item.icon} alt="" className={`${item.icon === contactBusiness ? "h-[24px] w-[24px] rotate-180 -scale-y-100" : "h-[32px] w-[32px]"} object-contain`} />
                    </div>
                    <p
                      className="w-[278px] text-[14px] leading-[23px] tracking-[-0.14px] text-white"
                      style={{ fontFamily: '"Poppins:Medium", Poppins, sans-serif' }}
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.form
              className="rounded-[24px] border border-[#e3e3e3] bg-white px-[31px] py-[24px] shadow-[0_24px_60px_rgba(0,0,0,0.12)]"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55 }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[14px] leading-[26px] tracking-[0.14px] text-[#1a1a1a]" style={{ fontFamily: "Poppins, sans-serif" }}>
                    Name
                  </span>
                  <input className="mt-[6px] h-[38px] w-full rounded-[52px] border border-[#1053f3] px-4 outline-none" />
                </label>
                <label className="block">
                  <span className="text-[14px] leading-[26px] tracking-[0.14px] text-[#1a1a1a]" style={{ fontFamily: "Poppins, sans-serif" }}>
                    Corporate email
                  </span>
                  <input className="mt-[6px] h-[38px] w-full rounded-[52px] border border-[#1053f3] px-4 outline-none" />
                </label>
              </div>
              <label className="mt-5 block">
                <span className="text-[14px] leading-[26px] tracking-[0.14px] text-[#1a1a1a]" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Where did you hear about us?
                </span>
                <input className="mt-[6px] h-[38px] w-full rounded-[52px] border border-[#1053f3] px-4 outline-none" />
              </label>
              <label className="mt-5 block">
                <span className="text-[14px] leading-[26px] tracking-[0.14px] text-[#1a1a1a]" style={{ fontFamily: "Poppins, sans-serif" }}>
                  Phone
                </span>
                <input className="mt-[6px] h-[38px] w-full rounded-[52px] border border-[#1053f3] px-4 outline-none" />
              </label>
              <button
                type="button"
                onClick={openSubmitSuccessModal}
                className="mt-5 inline-flex h-[43px] items-center justify-center rounded-[32px] bg-[#1053f3] px-[32px] text-[18px] text-white"
                style={{ fontFamily: '"Poppins:SemiBold", Poppins, sans-serif' }}
              >
                Send
              </button>
            </motion.form>
          </div>
        </SectionShell>
      </motion.section>

      <Footer />
    </div>
  );
}
