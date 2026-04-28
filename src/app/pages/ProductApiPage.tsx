import { motion } from "motion/react";
import { CheckCircle2, Code2, KeyRound, Plane, ShieldCheck, Wallet } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { LeadFormMessage, leadFormButtonClass, useLeadFormValidation } from "../components/LeadFormValidation";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const heroIllustration = "https://www.figma.com/api/mcp/asset/f5938469-6a20-49b3-8b2e-835c1dd1d265";
const developerImage = "https://www.figma.com/api/mcp/asset/68ae81aa-8f16-4ce5-8418-fc077da983a4";
const developerOverlay = "https://www.figma.com/api/mcp/asset/ea2fbab5-91f1-4c31-8dc9-249aedd1bf17";
const flowImage = "https://www.figma.com/api/mcp/asset/ec5b0cb3-dda1-4269-a662-599be74537d2";
const stepsWaveImage = "https://www.figma.com/api/mcp/asset/a5d016d4-5bb7-4f2c-9c80-694fc3aac487";

const payBca = "https://www.figma.com/api/mcp/asset/e5913d4b-ad0c-4cbd-83a4-2f37142cdca7";
const payBni = "https://www.figma.com/api/mcp/asset/8afc2759-5c8f-43e7-9741-434a76d05814";
const payBri = "https://www.figma.com/api/mcp/asset/37ce8456-7a58-4194-9d26-880946573585";
const payQris = "https://www.figma.com/api/mcp/asset/e589d8e8-d95b-42ec-9abb-c2cff71362c6";
const payMandiri = "https://www.figma.com/api/mcp/asset/2bb3eae0-2737-4aac-8d08-5bb205e8fcdb";
const payDana = "https://www.figma.com/api/mcp/asset/791dc145-ae49-4bbc-8094-fdcdad068625";
const contactBusinessIcon = "https://www.figma.com/api/mcp/asset/fa4b02a6-3793-4cc4-8837-d2c065dd2074";
const contactServiceIcon = "https://www.figma.com/api/mcp/asset/052e568d-cf06-4d9a-8785-970db2a1f1c0";

const controlItems = [
  {
    icon: Plane,
    title: "Create & Manage Payment Orders",
    description: "Create and manage payment orders with flexible API parameters.",
  },
  {
    icon: ShieldCheck,
    title: "Real-time Payment Status via Webhooks",
    description: "Receive instant payment status updates through secure webhooks.",
  },
  {
    icon: Wallet,
    title: "Transaction Query & Status Sync",
    description: "Query transaction details and keep payment status fully synchronized.",
  },
];

const steps = [
  {
    icon: KeyRound,
    title: "Get API Key",
    description: "Generate your API credentials to start integration.",
  },
  {
    icon: Code2,
    title: "Test in Sandbox Environment",
    description: "Validate your integration in a safe testing environment.",
  },
  {
    icon: CheckCircle2,
    title: "Go Live in Production",
    description: "Switch to production and start processing real transactions.",
  },
];

const supportedPayments = [
  { src: payBca, alt: "BCA", box: "h-[42px] w-[144px]" },
  { src: payBni, alt: "BNI", box: "h-[38px] w-[135px]" },
  { src: payMandiri, alt: "Mandiri", box: "h-[42px] w-[139px]" },
  { src: payBri, alt: "Bank BRI", box: "h-[38px] w-[160px]" },
  { src: payQris, alt: "QRIS", box: "h-[47px] w-[125px]" },
  { src: payDana, alt: "DANA", box: "h-[41px] w-[139px]" },
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

export function ProductApiPage() {
  const { formMessage, showIncompleteMessage, submitLeadForm } = useLeadFormValidation();

  return (
    <div className="w-full overflow-x-hidden bg-white">
      <Navbar activeItem="Product" />

      <motion.section
        className="relative overflow-hidden bg-[#f7f9ff]"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="pointer-events-none absolute left-[36%] top-[154px] h-[430px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(16,83,243,0.12)_0%,rgba(16,83,243,0.06)_36%,rgba(16,83,243,0)_72%)]" />
        <div className="pointer-events-none absolute right-[-80px] top-[154px] h-[430px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(91,211,255,0.14)_0%,rgba(91,211,255,0.08)_36%,rgba(91,211,255,0)_72%)]" />
        <SectionShell className="relative flex min-h-[420px] items-center py-12 lg:min-h-[563px] lg:py-0">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[510px_1fr]">
            <motion.div
              className="max-w-[510px]"
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
            >
              <h1
                className="text-[32px] font-semibold leading-[1.2] tracking-[-1px] text-[#101010] lg:text-[36px]"
                style={{ fontFamily: '"Poppins:SemiBold", Poppins, sans-serif' }}
              >
                Seamlessly connect your systems and build payments your way
              </h1>
              <p
                className="mt-8 max-w-[470px] text-[16px] leading-[1.5] text-[#878787]"
                style={{ fontFamily: '"Inter:Regular", Inter, sans-serif' }}
              >
                Seamlessly embed payment capabilities into your systems, platforms, or applications through powerful
                API integration capabilities.
              </p>
            </motion.div>
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
            >
              <ImageWithFallback
                src={heroIllustration}
                alt="Payment API illustration"
                className="h-auto w-full max-w-[616px] object-contain"
              />
            </motion.div>
          </div>
        </SectionShell>
      </motion.section>

      <motion.section
        className="bg-white"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <SectionShell className="py-16 lg:py-[102px]">
          <div className="mx-auto grid max-w-[1184px] items-center gap-12 lg:grid-cols-[584px_1fr] lg:gap-[99px]">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55 }}
            >
              <div className="relative overflow-hidden rounded-[16px]">
                <ImageWithFallback
                  src={developerImage}
                  alt="Developer-ready API experience"
                  className="h-auto w-full rounded-[16px] object-cover"
                />
                <ImageWithFallback
                  src={developerOverlay}
                  alt=""
                  className="pointer-events-none absolute inset-0 h-full w-full rounded-[16px] object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              className="max-w-[500px]"
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55 }}
            >
              <h2
                className="text-[34px] font-semibold leading-[1.2] tracking-[-1px] text-[#101010] lg:text-[40px]"
                style={{ fontFamily: '"Poppins:SemiBold", Poppins, sans-serif' }}
              >
                Built for developers, designed for scale
              </h2>
              <p
                className="mt-6 text-[16px] font-medium leading-[1.6] text-[#757b8a]"
                style={{ fontFamily: '"Inter:Medium", Inter, sans-serif' }}
              >
                We provide clear, stable, and highly standardized API interfaces to help developers complete
                integration in the shortest possible time. Whether it's a startup project or a high-concurrency
                business scenario, it can run stably and scale easily.
              </p>
            </motion.div>
          </div>
        </SectionShell>
      </motion.section>

      <motion.section
        className="relative overflow-hidden bg-white"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="pointer-events-none absolute right-[-220px] top-[116px] hidden h-[578px] w-[578px] rounded-full bg-[radial-gradient(circle,rgba(16,83,243,0.10)_0%,rgba(16,83,243,0.04)_42%,rgba(16,83,243,0)_72%)] lg:block" />
        <SectionShell className="py-16 lg:py-[80px]">
          <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[490px_1fr]">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55 }}
            >
              <h2
                className="max-w-[571px] text-[34px] font-semibold leading-[1.3] tracking-[-1px] text-[#101010] lg:text-[40px]"
                style={{ fontFamily: '"Poppins:SemiBold", Poppins, sans-serif' }}
              >
                Full control over your payment flow
              </h2>
              <p
                className="mt-4 max-w-[495px] text-[16px] font-medium leading-[1.6] text-[#757b8a]"
                style={{ fontFamily: '"Inter:Medium", Inter, sans-serif' }}
              >
                You have complete control over every step of the payment process, from transaction creation to payment
                confirmation.
              </p>
              <div className="mt-10 overflow-hidden rounded-[16px]">
                <ImageWithFallback src={flowImage} alt="Payment API flow visualization" className="h-auto w-full object-cover" />
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col gap-3 lg:pt-[74px]"
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55 }}
            >
              {controlItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    className="flex gap-6 rounded-[18px] px-6 py-5"
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                  >
                    <div className="flex h-[56px] w-[56px] shrink-0 items-center justify-center rounded-full bg-[#101010]">
                      <Icon size={24} color="#ffffff" strokeWidth={2.1} />
                    </div>
                    <div>
                      <h3
                        className="text-[22px] font-bold leading-[1.3] text-[#101010] lg:text-[24px]"
                        style={{ fontFamily: '"Inter:Bold", Inter, sans-serif' }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="mt-3 max-w-[430px] text-[16px] font-medium leading-[1.6] text-[#757b8a]"
                        style={{ fontFamily: '"Inter:Medium", Inter, sans-serif' }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </SectionShell>
      </motion.section>

      <motion.section
        className="relative overflow-hidden bg-white"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <SectionShell className="relative py-16 lg:py-[65px]">
          <div className="mx-auto max-w-[550px] text-center">
            <h2
              className="text-[34px] font-bold leading-[1.4] tracking-[-0.4px] text-[#101010] lg:text-[40px]"
              style={{ fontFamily: '"Plus Jakarta Sans:Bold", "Plus Jakarta Sans", sans-serif' }}
            >
              Easy integration, fast go-live
            </h2>
            <p
              className="mx-auto mt-6 max-w-[406px] text-[16px] font-medium leading-[1.6] text-[#757b8a]"
              style={{ fontFamily: '"Inter:Medium", Inter, sans-serif' }}
            >
              From integration to deployment, it only takes a few simple steps
            </p>
          </div>
          <div className="mx-auto mt-14 grid w-full max-w-[1090px] gap-12 text-center lg:grid-cols-3 lg:gap-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  className="relative"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <div className="mx-auto flex h-[100px] w-[100px] items-center justify-center rounded-[25px] bg-[linear-gradient(180deg,#3777ff_0%,#1053f3_100%)] shadow-[0_16px_28px_rgba(16,83,243,0.2)]">
                    <Icon size={34} color="#ffffff" strokeWidth={2.2} />
                  </div>
                  <h3
                    className="mt-6 text-[16px] font-semibold leading-[1.2] text-[#1053f3]"
                    style={{ fontFamily: '"Inter:SemiBold", Inter, sans-serif' }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="mx-auto mt-4 max-w-[318px] text-[14px] leading-[24px] text-[#423d3d]"
                    style={{ fontFamily: '"Roboto:Light", Roboto, sans-serif', fontWeight: 300 }}
                  >
                    {step.description}
                  </p>
              </motion.div>
            );
          })}
          </div>
        </SectionShell>
        <div className="pointer-events-none relative left-1/2 h-[174px] w-screen -translate-x-1/2 overflow-hidden opacity-60">
          <ImageWithFallback
            src={stepsWaveImage}
            alt=""
            className="absolute left-0 top-[-180.23%] h-[605.32%] w-full max-w-none"
          />
        </div>
      </motion.section>

      <motion.section
        className="bg-[#f7f9ff]"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <SectionShell className="py-16 lg:py-[67px]">
          <div className="mx-auto max-w-[491px] text-center">
            <h2
              className="text-[34px] font-semibold leading-[1.3] tracking-[-1px] text-[#101010] lg:text-[40px]"
              style={{ fontFamily: '"Poppins:SemiBold", Poppins, sans-serif' }}
            >
              Payment Methods Supported
            </h2>
          </div>
          <div className="mx-auto mt-14 grid max-w-[776px] grid-cols-2 gap-4 lg:grid-cols-3">
            {supportedPayments.map((item, index) => (
              <motion.div
                key={`${item.alt}-${index}`}
                className="flex h-[90px] items-center justify-center rounded-[16px] border border-[#e2e8f0] bg-white px-8 shadow-[0_10px_30px_rgba(45,51,81,0.04)]"
                initial={{ opacity: 0, y: 22 }}
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
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_30%,rgba(255,255,255,0.12)_0,rgba(255,255,255,0)_36%),radial-gradient(circle_at_80%_18%,rgba(91,211,255,0.18)_0,rgba(91,211,255,0)_35%)]" />
        <SectionShell className="relative py-14 lg:py-[85px]">
          <div className="mx-auto grid w-full max-w-[974px] items-center gap-14 lg:grid-cols-[332px_464px] lg:justify-center lg:gap-[72px]">
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
                Expand your business to Colombia
              </h2>
              <div className="mt-10 space-y-7">
                {[
                  "Customize the right solution for your business",
                  "Professional customer service staff will answer your questions",
                ].map((text) => (
                  <div key={text} className="flex items-center gap-[13px]">
                    <div className="flex h-[41px] w-[41px] items-center justify-center rounded-full bg-[#0f4de0]">
                      <ImageWithFallback
                        src={text.includes("Customize") ? contactBusinessIcon : contactServiceIcon}
                        alt=""
                        className={`${text.includes("Customize") ? "h-[24px] w-[24px] rotate-180 -scale-y-100" : "h-[32px] w-[32px]"} object-contain`}
                      />
                    </div>
                    <p
                      className="w-[278px] text-[14px] leading-[23px] tracking-[-0.14px] text-white"
                      style={{ fontFamily: '"Poppins:Medium", Poppins, sans-serif' }}
                    >
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.form
              onSubmit={submitLeadForm}
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
              <LeadFormMessage show={showIncompleteMessage} message={formMessage} />
              <button
                type="submit"
                className={leadFormButtonClass}
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
