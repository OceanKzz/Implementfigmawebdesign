import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { LeadFormMessage, leadFormButtonClass, useLeadFormValidation } from "../components/LeadFormValidation";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const heroBg = "https://www.figma.com/api/mcp/asset/e30bb743-9456-47b8-bd3d-3d99ad8e5884";
const quoteMark = "https://www.figma.com/api/mcp/asset/371f7fc1-38ca-44d4-aa32-54fd3e84d50f";
const codeImage = "https://www.figma.com/api/mcp/asset/08a91ae9-6a10-4dde-8ee1-502e6158bbce";
const codeButtonIcon = "https://www.figma.com/api/mcp/asset/1d51553d-d7c6-4efd-9612-ee79583441c7";
const iconStaff = "https://www.figma.com/api/mcp/asset/2aa94a43-c1f0-4218-a30c-02a1ae9167d6";
const iconServices = "https://www.figma.com/api/mcp/asset/89d832be-9932-492b-ada1-db3c646c6a01";
const iconPolicy = "https://www.figma.com/api/mcp/asset/b3ad6624-d029-4555-af9f-ebaf2ea59bb0";
const testimonialImage = "https://www.figma.com/api/mcp/asset/0c55cea9-1321-40c5-b5e4-e24e356eb04e";
const productsBand = "https://www.figma.com/api/mcp/asset/f1228f74-bb5e-4ef0-ad89-1b17be371389";
const contactMask = "https://www.figma.com/api/mcp/asset/da8da538-69c4-455e-9a2e-19e85ba4d6f5";
const contactBusiness = "https://www.figma.com/api/mcp/asset/2e2849ad-39f1-4474-92e8-35e1df982b89";
const contactService = "https://www.figma.com/api/mcp/asset/45de6d21-9938-42fb-924b-56328da3c23a";
const footerBg = "https://www.figma.com/api/mcp/asset/e82b8e70-7140-4d31-81f5-37db4d45961d";
const footerArc = "https://www.figma.com/api/mcp/asset/7a0781ad-aba0-45a3-af19-d12de65a7e90";
const footerDivider = "https://www.figma.com/api/mcp/asset/0d246af8-e063-4af2-a382-6469de2f2d34";
const footerAddress = "https://www.figma.com/api/mcp/asset/0e8b9f55-666e-4f93-9682-0e9c809e0a8b";
const footerEmailRing = "https://www.figma.com/api/mcp/asset/d816c3b4-2bb3-4766-b269-5423fc72f580";
const footerEmail = "https://www.figma.com/api/mcp/asset/89cc7923-c33f-48fd-9720-f7de5b08ccd0";

const blueCards = [
  {
    title: "Better services",
    description: "We share our processes and gain your trust.",
    bg: "#E0FECD",
    icon: iconServices,
  },
  {
    title: "Employees worldwide",
    description: "In every area where we provide services, we have professional service personnel.",
    bg: "#FFF1ED",
    icon: iconStaff,
  },
  {
    title: "Multiple countries",
    description:
      "We have obtained support from local governments in Indonesia, Mexico, Colombia and Vietnam, and provide reliable services to local areas.",
    bg: "#F0F0FF",
    icon: iconPolicy,
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

function RingPattern({ className = "", light = false }: { className?: string; light?: boolean }) {
  const borderColor = light ? "rgba(255,255,255,0.34)" : "rgba(16,43,84,0.22)";

  return (
    <div className={`pointer-events-none absolute hidden aspect-square lg:block ${className}`}>
      <div className="absolute inset-0 rounded-full border" style={{ borderColor }} />
      <div className="absolute inset-[17%] rounded-full border" style={{ borderColor }} />
    </div>
  );
}

export function AboutPage() {
  const { showIncompleteMessage, submitLeadForm } = useLeadFormValidation();

  return (
    <div className="w-full overflow-x-clip bg-white">
      <Navbar activeItem="About" />

      <motion.section
        className="relative overflow-hidden bg-[#f7f9ff]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="absolute inset-0 top-[114px] hidden lg:block">
          <ImageWithFallback src={heroBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#f7f9ff_12.5%,rgba(247,249,255,0)_100%)]" />
        </div>
        <SectionShell className="relative min-h-[420px] py-12 lg:min-h-[673px] lg:py-0">
          <div className="pt-20 lg:pt-[172px]">
            <h1
              className="mx-auto max-w-[555px] text-center text-[40px] font-semibold leading-[1.2] tracking-[-1px] text-[#101010] lg:text-[64px]"
              style={{ fontFamily: '"Poppins:SemiBold", Poppins, sans-serif' }}
            >
              About us
            </h1>
          </div>
        </SectionShell>
      </motion.section>

      <motion.section
        className="relative bg-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
      >
        <RingPattern className="right-[-250px] top-[22px] w-[760px]" />
        <SectionShell className="relative py-16 lg:py-[92px]">
          <h2
            className="max-w-[953px] text-[44px] font-semibold leading-[1.14] tracking-[-1.44px] text-[#0e1926] lg:text-[72px]"
            style={{ fontFamily: '"Poppins:SemiBold", Poppins, sans-serif' }}
          >
            Why Jalur Pay Agency?
          </h2>
          <p
            className="mt-8 max-w-[699px] text-[18px] leading-[1.8] text-black lg:text-[20px]"
            style={{ fontFamily: '"Poppins:Regular", Poppins, sans-serif' }}
          >
            We are more than just a payment gateway provider, we are a financial technology platform that helps
            businesses achieve their goals faster. We provide end-to-end payment capabilities, data enhancements and
            financial products to leading global companies.
          </p>
          <div className="mt-16 flex max-w-[940px] gap-8 lg:mt-[148px]">
            <ImageWithFallback src={quoteMark} alt="" className="h-[68px] w-[90px] shrink-0 object-contain" />
            <p
              className="max-w-[655px] text-[24px] leading-[1.5] text-[#0e1926] lg:text-[32px] lg:leading-[48px]"
              style={{ fontFamily: '"Poppins:Medium", Poppins, sans-serif' }}
            >
              Jalur Pay is a secure and efficient electronic payment system that enables real-time transfers, operating
              24/7. It offers a low-cost, convenient payment solution supported by a wide range of financial
              institutions.
            </p>
          </div>
        </SectionShell>
      </motion.section>

      <motion.section
        className="relative overflow-hidden bg-[#1053f3]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
      >
        <RingPattern className="right-[-210px] top-[42px] w-[700px]" light />
        <div className="pointer-events-none absolute right-0 top-[122px] hidden h-px w-[520px] bg-[rgba(255,255,255,0.26)] lg:block" />
        <SectionShell className="relative py-16 lg:py-[120px]">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <h2
              className="max-w-[492px] text-[44px] font-bold leading-[1.02] text-white lg:text-[60px]"
              style={{ fontFamily: '"Poppins:Bold", Poppins, sans-serif' }}
            >
              Delivering tech solutions
            </h2>
            <p
              className="max-w-[448px] pt-2 text-[16px] leading-[1.6] text-white"
              style={{ fontFamily: '"Poppins:Medium", Poppins, sans-serif' }}
            >
              We are a team of 200+ who are passionate about making the world a better place.
            </p>
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-[586px_285px_285px] lg:grid-rows-[236px_236px] lg:gap-x-[15px] lg:gap-y-7">
            <motion.div
              className="relative row-span-2 overflow-hidden rounded-[16px]"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55 }}
            >
              <ImageWithFallback src={codeImage} alt="Professional code platform" className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 top-0 h-[271px] bg-[linear-gradient(180deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0)_100%)]" />
              <h3
                className="absolute left-12 top-12 max-w-[376px] text-[32px] font-bold leading-[1.1] text-white lg:text-[40px]"
                style={{ fontFamily: "Urbanist, sans-serif" }}
              >
                Leveraging tech to drive a better IT experience
              </h3>
              <div className="absolute bottom-12 left-12 inline-flex items-center gap-3 rounded-[8px] bg-[#A7F46A] px-6 py-4">
                <span
                  className="text-[16px] font-bold leading-[1.5] text-[#101010]"
                  style={{ fontFamily: '"Inter:Bold", Inter, sans-serif' }}
                >
                  Professional code platform
                </span>
                <ImageWithFallback src={codeButtonIcon} alt="" className="h-6 w-6 object-contain" />
              </div>
            </motion.div>

            {blueCards.map((card, index) => {
              let layoutClass = "";
              if (card.title === "Better services") layoutClass = "lg:col-start-2 lg:row-start-1";
              if (card.title === "Employees worldwide") layoutClass = "lg:col-start-2 lg:row-start-2";
              if (card.title === "Multiple countries") layoutClass = "lg:col-start-3 lg:row-start-1 lg:row-span-2 lg:min-h-[500px] justify-between";

              return (
                <motion.div
                  key={card.title}
                  className={`flex flex-col rounded-[16px] px-8 py-8 ${layoutClass}`}
                  style={{ backgroundColor: card.bg }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <p
                    className="max-w-[209px] text-[14px] leading-[1.5] text-[#101010]"
                    style={{ fontFamily: '"Poppins:Regular", Poppins, sans-serif' }}
                  >
                    {card.description}
                  </p>
                  <div className="mt-10 flex items-end justify-between">
                    <h4
                      className={`max-w-[199px] text-[28px] font-semibold leading-[1.1] text-[#101010] lg:text-[32px]`}
                      style={{ fontFamily: '"Poppins:SemiBold", Poppins, sans-serif' }}
                    >
                      {card.title}
                    </h4>
                    <ImageWithFallback src={card.icon} alt="" className="h-6 w-6 object-contain" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </SectionShell>
      </motion.section>

      <motion.section
        className="bg-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
      >
        <SectionShell className="py-16 lg:pb-[122px] lg:pt-[138px]">
          <div className="grid items-start gap-10 lg:grid-cols-[449px_411px] lg:gap-[188px]">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55 }}
            >
              <ImageWithFallback src={testimonialImage} alt="Customer testimonial" className="h-auto w-full rounded-[16px] object-cover lg:h-[491px]" />
            </motion.div>
            <motion.div
              className="flex flex-col gap-8 lg:gap-[92px]"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55 }}
            >
              <h2
                className="max-w-[411px] text-[34px] font-bold leading-[1.2] text-[#101010] lg:text-[40px]"
                style={{ fontFamily: '"Poppins:Bold", Poppins, sans-serif' }}
              >
                What our customer says about Jalur Workspace
              </h2>
              <div className="flex flex-col gap-8 lg:gap-10">
                <p
                  className="max-w-[369px] text-[16px] font-medium leading-[1.6] text-[#757b8a]"
                  style={{ fontFamily: '"Inter:Medium", Inter, sans-serif' }}
                >
                  "Our goal was to find a company that would provide us with a reliable, flexible product and that, from
                  its founder as well as its entire team, would have the ability to provide agile, customer-oriented
                  support and accompany us in our needs. Jalur meets all these attributes."
                </p>
                <div>
                  <p className="text-[16px] font-bold text-[#101010]" style={{ fontFamily: '"Inter:Bold", Inter, sans-serif' }}>
                    Zhafira Aduhai
                  </p>
                  <p className="mt-2 text-[14px] font-medium text-[#757b8a]" style={{ fontFamily: '"Inter:Medium", Inter, sans-serif' }}>
                    Project Manager at Doku
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </SectionShell>
      </motion.section>

      <motion.section
        className="relative overflow-hidden bg-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
      >
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
        </SectionShell>
        <ImageWithFallback src={productsBand} alt="" className="block h-auto w-full object-cover" />
      </motion.section>

      <motion.section
        className="relative overflow-hidden bg-[#1053f3]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
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
                Expand your business worldwide
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
        </SectionShell>
      </motion.section>

      <motion.footer
        className="relative overflow-hidden bg-[#1053f3]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
      >
        <ImageWithFallback src={footerBg} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover" />
        <div className="pointer-events-none absolute bottom-[-44.93%] right-[91px] top-[52.66%] w-[623px]">
          <ImageWithFallback src={footerArc} alt="" className="h-full w-full object-contain" />
        </div>
        <SectionShell className="relative py-16 lg:py-[80px]">
          <h2
            className="max-w-[762px] text-[40px] font-semibold leading-[1.2] tracking-[-1px] text-white lg:text-[64px]"
            style={{ fontFamily: '"Poppins:SemiBold", Poppins, sans-serif' }}
          >
            Let's join Jalur Pay, We protect your money
          </h2>

          <div className="mt-16 flex flex-col gap-8 lg:mt-[86px] lg:flex-row lg:gap-[48px]">
            <div className="flex items-center gap-[14px]">
              <ImageWithFallback src={footerAddress} alt="" className="h-[46px] w-[46px] object-contain" />
              <div className="w-[260px] text-[16px] leading-[24px] text-white" style={{ fontFamily: "Inter, sans-serif" }}>
                <p>1929, Bancangan, Sambit,</p>
                <p>Surabaya, Wakanda</p>
              </div>
            </div>
            <div className="flex items-center gap-[14px]">
              <div className="relative h-[46px] w-[46px]">
                <ImageWithFallback src={footerEmailRing} alt="" className="h-full w-full object-contain" />
                <ImageWithFallback src={footerEmail} alt="" className="absolute left-[11px] top-[11px] h-[24px] w-[24px] object-contain" />
              </div>
              <p className="text-[16px] text-white" style={{ fontFamily: "Inter, sans-serif" }}>
                support@jalurpay.com
              </p>
            </div>
          </div>

          <ImageWithFallback src={footerDivider} alt="" className="mt-12 h-[2px] w-full object-cover lg:mt-[120px]" />

          <div className="mt-10 flex flex-col gap-4 text-[16px] text-white lg:flex-row lg:items-center lg:justify-between">
            <p style={{ fontFamily: "Inter, sans-serif" }}>© Jalur Pay by Jalur Pay Inc.</p>
            <div className="flex gap-[45px]" style={{ fontFamily: "Inter, sans-serif" }}>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </SectionShell>
      </motion.footer>
    </div>
  );
}
