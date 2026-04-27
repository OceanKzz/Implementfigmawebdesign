import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { LeadFormMessage, useLeadFormValidation } from "../components/LeadFormValidation";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const heroImage = "https://www.figma.com/api/mcp/asset/a849ee4f-2dc8-4f04-b171-811b32804b2a";
const contactWave = "https://www.figma.com/api/mcp/asset/0d47233e-1da3-424b-b79d-d492bdd12791";
const contactDots = "https://www.figma.com/api/mcp/asset/ab28efec-9f40-4cde-a5fe-cf57fc413109";
const ornamentLeft = "https://www.figma.com/api/mcp/asset/9bbc62f9-07a4-476e-bce2-19f31f1e8094";
const ornamentRight = "https://www.figma.com/api/mcp/asset/9144a398-ee75-4572-a7e8-00576955ecf2";
const iconBusiness = "https://www.figma.com/api/mcp/asset/bc3ff974-f03e-438c-a026-f996717566b1";
const iconService = "https://www.figma.com/api/mcp/asset/97418475-74f1-4dfb-8736-53a4ea58fcba";
const footerBg = "https://www.figma.com/api/mcp/asset/5e64f5ad-ea13-4f73-b0ad-71e487fa612e";
const footerArc = "https://www.figma.com/api/mcp/asset/02fdc358-0a38-44e4-8380-7af2367240c8";
const footerDivider = "https://www.figma.com/api/mcp/asset/e40f0e9e-0b75-4f77-8384-20c8a42b46bc";
const addressIcon = "https://www.figma.com/api/mcp/asset/04411882-468f-474d-9121-ce9bbd528ad1";
const emailRing = "https://www.figma.com/api/mcp/asset/7b30c274-8752-4615-9545-32ff93bde8ac";
const emailIcon = "https://www.figma.com/api/mcp/asset/8720e031-bfdd-4abd-aca0-51ac077a82bf";

const formFields = [
  ["Name", "Corporate email"],
  ["Company Name"],
  ["Your company's industry"],
  ["Phone"],
  ["In which countries do you want to process with Jalur?"],
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

function ContactIconRow({
  icon,
  children,
  textClassName = "text-white",
}: {
  icon: string;
  children: React.ReactNode;
  textClassName?: string;
}) {
  return (
    <div className="flex items-center gap-[14px]">
      <ImageWithFallback src={icon} alt="" className="h-[46px] w-[46px] shrink-0 object-contain" />
      <div className={`text-[16px] leading-[24px] lg:text-[20px] ${textClassName}`} style={{ fontFamily: "Inter, sans-serif" }}>
        {children}
      </div>
    </div>
  );
}

function FormInput({
  label,
}: {
  label: string;
}) {
  return (
    <label className="block w-full">
      <span
        className="block text-[14px] leading-[26px] tracking-[0.14px] text-[#1a1a1a]"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        {label}
      </span>
      <input
        className="mt-[6px] h-[38px] w-full rounded-[52px] border border-[#1053f3] bg-white px-4 text-[14px] outline-none transition-shadow focus:shadow-[0_0_0_3px_rgba(16,83,243,0.16)]"
        aria-label={label}
        name={label}
      />
    </label>
  );
}

export function ContactPage() {
  const { showIncompleteMessage, submitLeadForm } = useLeadFormValidation();

  return (
    <div className="w-full overflow-x-clip bg-white">
      <Navbar activeItem="Contact us" />

      <motion.section
        className="relative overflow-hidden bg-[#f7f9ff]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="relative h-[380px] lg:h-[439px]">
          <ImageWithFallback src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#f7f9ff_0%,rgba(247,249,255,0.76)_30%,rgba(247,249,255,0.05)_100%)]" />
          <h1
            className="absolute left-1/2 top-[154px] w-[555px] max-w-[calc(100%-48px)] -translate-x-1/2 text-center text-[44px] font-semibold leading-[1.2] tracking-[-1px] text-[#101010] lg:top-[162px] lg:text-[64px]"
            style={{ fontFamily: '"Poppins:SemiBold", Poppins, sans-serif' }}
          >
            Contact us
          </h1>
        </div>
      </motion.section>

      <motion.section
        className="bg-[#1053f3]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <SectionShell className="py-10 lg:py-[62px]">
          <div className="flex flex-col gap-8 lg:ml-[102px] lg:flex-row lg:items-center lg:gap-[22px]">
            <ContactIconRow icon={addressIcon}>
              <p>1929, Bancangan, Sambit,</p>
              <p>Surabaya, Wakanda</p>
            </ContactIconRow>
            <div className="flex items-center gap-[14px]">
              <div className="relative h-[46px] w-[46px] shrink-0">
                <ImageWithFallback src={emailRing} alt="" className="h-full w-full object-contain" />
                <ImageWithFallback src={emailIcon} alt="" className="absolute left-[11px] top-[11px] h-[24px] w-[24px] object-contain" />
              </div>
              <p className="text-[16px] text-white lg:text-[20px]" style={{ fontFamily: "Inter, sans-serif" }}>
                support@jalurpay.com
              </p>
            </div>
          </div>
        </SectionShell>
      </motion.section>

      <motion.section
        className="relative overflow-hidden bg-[#f7f9ff]"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
      >
        <ImageWithFallback src={contactWave} alt="" className="pointer-events-none absolute bottom-0 left-1/2 w-[1592px] max-w-none -translate-x-1/2 opacity-60" />
        <ImageWithFallback src={contactDots} alt="" className="pointer-events-none absolute left-[-76px] top-[69px] hidden h-[560px] w-[560px] object-cover opacity-20 lg:block" />
        <ImageWithFallback src={ornamentLeft} alt="" className="pointer-events-none absolute left-[-166px] top-[104px] hidden h-[374px] w-[374px] object-contain lg:block" />
        <ImageWithFallback src={ornamentRight} alt="" className="pointer-events-none absolute right-[-168px] top-[350px] hidden h-[372px] w-[372px] rotate-[89deg] object-contain lg:block" />

        <SectionShell className="relative py-16 lg:py-[85px]">
          <div className="mx-auto grid max-w-[972px] gap-12 lg:grid-cols-[412px_464px] lg:gap-[95px]">
            <motion.div
              className="flex flex-col gap-12 lg:gap-[72px]"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55 }}
            >
              <div>
                <h2
                  className="max-w-[374px] text-[32px] font-semibold leading-[1.28] tracking-[-0.36px] text-[#0e1926] lg:text-[36px] lg:leading-[46px]"
                  style={{ fontFamily: '"Poppins:SemiBold", Poppins, sans-serif' }}
                >
                  Say hello to your new financial technology partner
                </h2>
                <p
                  className="mt-[25px] max-w-[412px] text-[16px] font-medium leading-[1.6] text-[#757b8a]"
                  style={{ fontFamily: '"Inter:Medium", Inter, sans-serif' }}
                >
                  We are a financial technology platform that empowers businesses across the world to reach their
                  ambitions faster. With us your business will unlock these features:
                </p>
              </div>

              <div className="flex max-w-[332px] flex-col gap-[27px]">
                {[
                  { icon: iconBusiness, text: "Customize the right solution for your business", className: "h-[24px] w-[24px] rotate-180 -scale-y-100" },
                  { icon: iconService, text: "Professional customer service staff will answer your questions", className: "h-[32px] w-[32px]" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-[13px]">
                    <div className="flex h-[41px] w-[41px] shrink-0 items-center justify-center rounded-full bg-[#1053f3]">
                      <ImageWithFallback src={item.icon} alt="" className={`${item.className} object-contain`} />
                    </div>
                    <p
                      className="w-[278px] text-[14px] font-medium leading-[23px] tracking-[-0.14px] text-[#0e1926]"
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
              className="flex w-full flex-col gap-5 rounded-[24px] border border-[#e3e3e3] bg-white px-[31px] py-[24px] lg:h-[557px] lg:justify-center"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55 }}
            >
              {formFields.map((row) => (
                <div key={row.join("-")} className={row.length === 2 ? "grid gap-5 sm:grid-cols-2 lg:gap-[32px]" : ""}>
                  {row.map((label) => (
                    <FormInput key={label} label={label} />
                  ))}
                </div>
              ))}
              <LeadFormMessage show={showIncompleteMessage} />
              <motion.button
                type="submit"
                className="flex h-[43px] w-[108px] items-center justify-center rounded-[32px] bg-[#1053f3] text-[17px] text-white self-start relative overflow-hidden"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
                initial={{ scale: 1 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.04, backgroundColor: "#0d44d4" }}
                whileTap={{ scale: 0.97 }}
              >
                Send
              </motion.button>
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
        <div className="pointer-events-none absolute bottom-[-44.93%] right-[91px] top-[52.66%] hidden w-[623px] lg:block">
          <ImageWithFallback src={footerArc} alt="" className="h-full w-full object-contain" />
        </div>
        <SectionShell className="relative py-16 lg:pb-[40px] lg:pt-[80px]">
          <h2
            className="max-w-[762px] text-[40px] font-semibold leading-[1.2] tracking-[-1px] text-white lg:text-[64px]"
            style={{ fontFamily: '"Poppins:SemiBold", Poppins, sans-serif' }}
          >
            Let&apos;s join Jalur Pay, We protect your money
          </h2>

          <div className="mt-12 flex flex-col gap-8 lg:mt-[86px] lg:flex-row lg:gap-[48px]">
            <ContactIconRow icon={addressIcon} textClassName="text-white lg:text-[16px]">
              <p>1929, Bancangan, Sambit,</p>
              <p>Surabaya, Wakanda</p>
            </ContactIconRow>
            <div className="flex items-center gap-[14px]">
              <div className="relative h-[46px] w-[46px] shrink-0">
                <ImageWithFallback src={emailRing} alt="" className="h-full w-full object-contain" />
                <ImageWithFallback src={emailIcon} alt="" className="absolute left-[11px] top-[11px] h-[24px] w-[24px] object-contain" />
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
