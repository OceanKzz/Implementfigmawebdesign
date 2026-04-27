import { useState } from "react";
import { motion } from "motion/react";
import { CreditCard, Layers3, Rocket } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { LeadFormMessage, leadFormButtonClass, useLeadFormValidation } from "../components/LeadFormValidation";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const heroPhone = "https://www.figma.com/api/mcp/asset/71b43f2c-2f52-46f0-a8fc-f59b8c14fe9c";
const payBca = "https://www.figma.com/api/mcp/asset/e5913d4b-ad0c-4cbd-83a4-2f37142cdca7";
const payBni = "https://www.figma.com/api/mcp/asset/8afc2759-5c8f-43e7-9741-434a76d05814";
const payBri = "https://www.figma.com/api/mcp/asset/37ce8456-7a58-4194-9d26-880946573585";
const payQris = "https://www.figma.com/api/mcp/asset/e589d8e8-d95b-42ec-9abb-c2cff71362c6";
const payMandiri = "https://www.figma.com/api/mcp/asset/2bb3eae0-2737-4aac-8d08-5bb205e8fcdb";
const payDana = "https://www.figma.com/api/mcp/asset/791dc145-ae49-4bbc-8094-fdcdad068625";
const businessImage = "https://www.figma.com/api/mcp/asset/d757e816-ca50-4971-ab59-e54bea813030";
const howItWorksMask = "https://www.figma.com/api/mcp/asset/a1584190-c731-488b-89a7-82d6ff78a640";
const howItWorksImage = "https://www.figma.com/api/mcp/asset/d54290ad-8994-4805-a131-754e474f2f79";
const ellipseGlow = "https://www.figma.com/api/mcp/asset/29194902-6434-4ab8-9c51-93946fff7b09";
const ellipseGlow2 = "https://www.figma.com/api/mcp/asset/e9f819f6-2128-405c-b86a-01d1ad145ef4";
const contactMask = "https://www.figma.com/api/mcp/asset/1f1d99a6-ea0c-411d-b37b-91956e8d4314";
const contactBusiness = "https://www.figma.com/api/mcp/asset/3ff04e58-c651-4a6a-a3fb-5fbcb6ead581";
const contactService = "https://www.figma.com/api/mcp/asset/87abd23a-2ba8-4c67-9618-96215b71191f";

const supportedPayments = [
  { src: payBca, alt: "BCA", box: "h-[42px] w-[144px]" },
  { src: payBni, alt: "BNI", box: "h-[38px] w-[135px]" },
  { src: payMandiri, alt: "Mandiri", box: "h-[42px] w-[139px]" },
  { src: payBri, alt: "Bank BRI", box: "h-[38px] w-[160px]" },
  { src: payQris, alt: "QRIS", box: "h-[47px] w-[125px]" },
  { src: payDana, alt: "DANA", box: "h-[41px] w-[139px]" },
];

const featureCards = [
  {
    icon: Rocket,
    title: "Fast Integration",
    description: "Get your checkout page live quickly with just a few lines of code and flexible API options.",
    highlighted: false,
  },
  {
    icon: Layers3,
    title: "No Payment Page Needed",
    description: "Skip building your own checkout page. Use redirect or embed options to go live instantly.",
    highlighted: true,
  },
  {
    icon: CreditCard,
    title: "Works Across All Platforms",
    description: "Compatible with web, mobile apps, and API, ensuring smooth payments across all devices.",
    highlighted: false,
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

export function ProductCheckoutPage() {
  const [checkoutMode, setCheckoutMode] = useState<"redirection" | "popup">("redirection");
  const [activeFeatureCard, setActiveFeatureCard] = useState(1);
  const { showIncompleteMessage, submitLeadForm } = useLeadFormValidation();

  const checkoutContent =
    checkoutMode === "redirection"
      ? {
          title: "Hosted Payment Page",
          description:
            "Redirect customers to a secure hosted payment page to complete transactions seamlessly. This method is ideal for websites, invoices, and manual payment scenarios where flexibility and simplicity are required.",
        }
      : {
          title: "Embedded Pop-up Checkout",
          description:
            "Open a lightweight payment pop-up without leaving your page. This flow keeps users inside your product while still offering a fast and secure payment experience.",
        };

  return (
    <div className="w-full overflow-x-hidden bg-white">
      <Navbar activeItem="Product" />

      <motion.section
        className="relative overflow-hidden bg-[linear-gradient(90deg,#ffffff_0%,#f8fbff_48%,#e9f3ff_100%)]"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="pointer-events-none absolute left-[48%] top-[146px] h-[420px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(16,83,243,0.14)_0%,rgba(16,83,243,0.06)_34%,rgba(16,83,243,0)_72%)]" />
        <div className="pointer-events-none absolute right-[-120px] top-[120px] h-[480px] w-[540px] rounded-full bg-[radial-gradient(circle,rgba(91,211,255,0.18)_0%,rgba(91,211,255,0.08)_34%,rgba(91,211,255,0)_70%)]" />
        <SectionShell className="relative flex min-h-[420px] items-center py-12 lg:min-h-[563px] lg:items-end lg:pb-0 lg:pt-[80px]">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[510px_1fr]">
            <motion.div
              className="max-w-[510px] lg:self-center lg:pb-[112px]"
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
              <h1
                className="text-[32px] font-semibold leading-[1.2] tracking-[-1px] text-[#101010] lg:text-[36px]"
                style={{ fontFamily: '"Poppins:SemiBold", Poppins, sans-serif' }}
              >
                Ready-to-Use Checkout Pages Integrated with Payment Gateway
              </h1>
              <p
                className="mt-8 max-w-[470px] text-[16px] leading-[1.5] text-[#878787]"
                style={{ fontFamily: '"Inter:Regular", Inter, sans-serif' }}
              >
                Start accepting digital payments instantly on your business website &amp; app, offer multiple payment
                methods, support multiple languages.
              </p>
            </motion.div>
            <motion.div
              className="flex justify-center self-end lg:justify-end"
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
            >
              <ImageWithFallback src={heroPhone} alt="Checkout on mobile" className="h-auto w-[280px] align-bottom lg:w-[319px]" />
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
        className="bg-[#f7f9ff]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SectionShell className="py-16 lg:py-[97px]">
          <div className="mx-auto max-w-[960px] text-center">
            <h2
              className="text-[40px] font-bold leading-[1.2] text-[#101010] lg:text-[48px]"
              style={{ fontFamily: "Archivo, sans-serif" }}
            >
              A better way to accept payments
            </h2>
          </div>
          <div className="mx-auto mt-14 grid max-w-[1020px] gap-[30px] lg:grid-cols-3 lg:gap-[60px]">
            {featureCards.map((card, index) => {
              const Icon = card.icon;
              const isActive = activeFeatureCard === index;
              return (
                <motion.div
                  key={card.title}
                  className={`min-h-[268px] rounded-[16px] p-6 shadow-[0_10px_30px_rgba(45,51,81,0.03)] transition-colors ${
                    isActive ? "bg-[#e9efff]" : "bg-white"
                  }`}
                  onMouseEnter={() => setActiveFeatureCard(index)}
                  onMouseLeave={() => setActiveFeatureCard(1)}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex h-[70px] w-[70px] items-center justify-center rounded-[8px] bg-[#1053f3]">
                    <Icon size={30} strokeWidth={2.2} color="#ffffff" />
                  </div>
                  <div className="mt-7">
                    <h3
                      className="text-[18px] font-bold leading-[1.2] text-[#101010]"
                      style={{ fontFamily: '"Inter:Bold", Inter, sans-serif' }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="mt-3 text-[16px] font-medium leading-[1.6] text-[#757b8a]"
                      style={{ fontFamily: '"Inter:Medium", Inter, sans-serif' }}
                    >
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
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
        <SectionShell className="py-14 lg:py-[102px]">
          <div className="mx-auto grid max-w-[1184px] items-center gap-12 lg:grid-cols-[584px_1fr] lg:gap-[99px]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <ImageWithFallback src={businessImage} alt="Business success" className="h-auto w-full rounded-[16px] object-cover" />
            </motion.div>
            <motion.div
              className="max-w-[500px]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-[34px] font-bold leading-[1.2] tracking-[-1px] text-[#101010] lg:text-[40px]"
                style={{ fontFamily: '"Poppins:Bold", Poppins, sans-serif' }}
              >
                Accelerate your Business Success with JalurPay, the Payments Platform for Global Companies.
              </h2>
              <p
                className="mt-6 text-[16px] font-medium leading-[1.6] text-[#757b8a]"
                style={{ fontFamily: '"Inter:Medium", Inter, sans-serif' }}
              >
                Widely used in Indonesia, it has become the preferred choice for online payments due to its security
                and efficiency.
              </p>
            </motion.div>
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
        <ImageWithFallback src={ellipseGlow} alt="" className="pointer-events-none absolute right-[-220px] top-[84px] hidden w-[578px] opacity-55 lg:block" />
        <ImageWithFallback src={ellipseGlow2} alt="" className="pointer-events-none absolute right-[-60px] top-[74px] hidden w-[560px] opacity-55 lg:block" />
        <SectionShell className="relative py-16 lg:py-[94px]">
          <div className="mx-auto grid max-w-[1134px] items-center gap-14 lg:grid-cols-[550px_1fr] lg:gap-[60px]">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55 }}
            >
              <div className="inline-flex rounded-[8px] border-[1.5px] border-[#dee4f7] bg-[rgba(239,242,251,0.3)] p-2">
                <button
                  type="button"
                  className={`h-[48px] w-[275px] rounded-[6px] text-[18px] transition-all ${
                    checkoutMode === "redirection"
                      ? "border-2 border-[rgba(14,8,84,0.04)] bg-white font-bold text-[#1053f3] shadow-[0_3px_40px_rgba(14,8,84,0.05)]"
                      : "font-medium text-[#6c727f]"
                  }`}
                  style={{ fontFamily: '"Plus_Jakarta_Sans:Bold", "Plus Jakarta Sans", sans-serif' }}
                  onClick={() => setCheckoutMode("redirection")}
                >
                  Redirection
                </button>
                <button
                  type="button"
                  className={`h-[48px] w-[155px] rounded-[6px] text-[18px] transition-all ${
                    checkoutMode === "popup"
                      ? "border-2 border-[rgba(14,8,84,0.04)] bg-white font-bold text-[#1053f3] shadow-[0_3px_40px_rgba(14,8,84,0.05)]"
                      : "font-medium text-[#6c727f]"
                  }`}
                  style={{
                    fontFamily:
                      checkoutMode === "popup"
                        ? '"Plus_Jakarta_Sans:Bold", "Plus Jakarta Sans", sans-serif'
                        : '"Plus_Jakarta_Sans:Medium", "Plus Jakarta Sans", sans-serif',
                  }}
                  onClick={() => setCheckoutMode("popup")}
                >
                  Pop-up
                </button>
              </div>
              <div className="mt-10 max-w-[550px]">
                <h2
                  className="min-h-[112px] text-[34px] font-bold leading-[1.4] tracking-[-0.4px] text-[#101010] lg:text-[40px]"
                  style={{ fontFamily: '"Plus_Jakarta_Sans:Bold", "Plus Jakarta Sans", sans-serif' }}
                >
                  {checkoutContent.title}
                </h2>
                <p
                  className="mt-6 min-h-[156px] max-w-[406px] text-[16px] font-medium leading-[1.6] text-[#757b8a]"
                  style={{ fontFamily: '"Inter:Medium", Inter, sans-serif' }}
                >
                  {checkoutContent.description}
                </p>
              </div>
            </motion.div>
            <motion.div
              className="relative flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55 }}
            >
              <div className="relative h-[400px] w-full max-w-[572px] overflow-hidden rounded-[200px] bg-[#edf4ff]">
                <div className="absolute inset-0 rounded-[200px] border-[26px] border-[#0c57b4]" />
                <ImageWithFallback
                  src={howItWorksImage}
                  alt="Secure hosted payment page"
                  className={`absolute inset-[26px] h-[calc(100%-52px)] w-[calc(100%-52px)] rounded-[176px] object-cover transition-opacity duration-300 ${
                    checkoutMode === "redirection" ? "opacity-100" : "opacity-0"
                  }`}
                />
                <ImageWithFallback
                  src={businessImage}
                  alt="Successful checkout completion"
                  className={`absolute inset-[26px] h-[calc(100%-52px)] w-[calc(100%-52px)] rounded-[176px] object-cover transition-opacity duration-300 ${
                    checkoutMode === "popup" ? "opacity-100" : "opacity-0"
                  }`}
                />
                <ImageWithFallback
                  src={howItWorksMask}
                  alt=""
                  className={`pointer-events-none absolute inset-[26px] h-[calc(100%-52px)] w-[calc(100%-52px)] rounded-[176px] object-cover transition-opacity duration-300 ${
                    checkoutMode === "redirection" ? "opacity-88" : "opacity-0"
                  }`}
                />
              </div>
            </motion.div>
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
