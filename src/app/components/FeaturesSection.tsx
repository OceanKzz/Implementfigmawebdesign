import { motion } from "motion/react";
import imgPhone from "figma:asset/eced62f9d681f416a2dfb4f294652f7b294e8de5.png";
import imgAvatar from "figma:asset/1edc9c1cecaecb0afaf338bd8f187f2b9376e5f0.png";
import svgPaths from "../../imports/svg-9vm3i7iyp0";

function ReceivedCard() {
  return (
    <motion.div
      className="bg-white flex gap-[8px] items-center p-[14px] rounded-[16px] shadow-[20px_40px_80px_0px_rgba(45,51,81,0.12)]"
      initial={{ x: -30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.55 }}
    >
      <div className="size-[36px] rounded-full border-[1.3px] border-white overflow-hidden shrink-0">
        <img src={imgAvatar} alt="avatar" className="size-full object-cover" />
      </div>
      <div className="flex flex-col gap-[2px]">
        <div className="flex items-center gap-[8px]">
          <p className="text-[#101010] text-[14px] leading-[1.5]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>
            Received Rp.45000
          </p>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d={svgPaths.p93c9530} fill="#23D16B" />
            <path d={svgPaths.p30544500} fill="white" />
          </svg>
        </div>
        <p className="text-[#757b8a] text-[12px] leading-[1.5]"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}>
          From Angelilce Neisa!
        </p>
      </div>
    </motion.div>
  );
}

const steps = [
  {
    title: "Sign Up for Free",
    sub: "Virtual account",
    bg: "#eb6e46",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="7" r="4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 8v6M21 11h-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Setup your payment",
    sub: "Fill in the details",
    bg: "#1053f3",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="18" r="0.5" fill="white" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Pay for your transfer",
    sub: "Send your money",
    bg: "#facc15",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 10h20" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 15h4" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

function StepsCard() {
  return (
    <motion.div
      className="bg-white rounded-[16px] shadow-[20px_40px_80px_0px_rgba(45,51,81,0.12)] w-[260px] lg:w-[307px] p-[20px] lg:p-[24px] flex flex-col gap-[20px] lg:gap-[24px] justify-center"
      initial={{ x: 30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.45, duration: 0.55 }}
    >
      {steps.map((step) => (
        <div key={step.title} className="flex gap-[14px] items-center">
          <motion.div
            className="size-[40px] rounded-[12px] shrink-0 flex items-center justify-center overflow-hidden"
            style={{ background: step.bg }}
            whileHover={{ scale: 1.12, rotate: 6 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            {step.icon}
          </motion.div>
          <div className="flex flex-col gap-[3px]">
            <p className="text-[#101010] text-[13px] leading-[1.5]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>
              {step.title}
            </p>
            <p className="text-[#757b8a] text-[13px] leading-[1.5]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
              {step.sub}
            </p>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export function FeaturesSection() {
  return (
    <section className="bg-[#f7f9ff] w-full flex items-center justify-center overflow-hidden relative">
      {/* Blobs */}
      <div className="absolute pointer-events-none" style={{ right: "5%", top: "10%", width: 350, height: 350, borderRadius: "50%", background: "rgba(16,83,243,0.06)", filter: "blur(90px)" }} />
      <div className="absolute pointer-events-none" style={{ left: "15%", bottom: "-5%", width: 300, height: 300, borderRadius: "50%", background: "rgba(235,110,70,0.06)", filter: "blur(80px)" }} />
      <div className="absolute pointer-events-none" style={{ left: "0%", top: "-5%", width: 320, height: 320, borderRadius: "50%", background: "rgba(250,204,21,0.07)", filter: "blur(110px)" }} />
      <div className="absolute pointer-events-none" style={{ right: "15%", bottom: "5%", width: 280, height: 280, borderRadius: "50%", background: "rgba(76,106,255,0.07)", filter: "blur(100px)" }} />
      <div className="absolute pointer-events-none" style={{ left: "40%", top: "40%", width: 240, height: 240, borderRadius: "50%", background: "rgba(16,83,243,0.05)", filter: "blur(90px)" }} />
      <div className="absolute pointer-events-none" style={{ right: "35%", top: "-8%", width: 200, height: 200, borderRadius: "50%", background: "rgba(235,110,70,0.05)", filter: "blur(75px)" }} />

      <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-[121px] flex flex-col-reverse lg:flex-row gap-10 lg:gap-[47px] items-center justify-center py-16 lg:py-[80px]">

        {/* Left: Phone + floating cards */}
        <div className="relative w-full max-w-[420px] lg:w-[503px] lg:max-w-none h-[420px] lg:h-[556px] shrink-0">
          <motion.div
            className="absolute top-0 left-[40px] lg:left-[84px] right-0 h-[380px] lg:h-[494px] rounded-[16px] overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <img src={imgPhone} alt="App dashboard" className="w-full h-full object-contain rounded-[16px]" />
          </motion.div>
          <div className="absolute top-[28px] lg:top-[37px] left-0">
            <ReceivedCard />
          </div>
          <div className="absolute bottom-0 right-0">
            <StepsCard />
          </div>
        </div>

        {/* Right: Text */}
        <motion.div
          className="flex flex-col gap-[24px] w-full lg:max-w-[529px]"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, delay: 0.2 }}
        >
          <h2
            className="text-[#101010] text-[28px] lg:text-[40px] leading-[1.3] tracking-[-1px]"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
          >
            Transparent &amp; Competitive Pricing for Businesses
          </h2>
          <p
            className="text-[#101010] text-[16px] leading-[1.5]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
          >
            Optimized pricing structure with fast onboarding and efficient processing.
          </p>
          <p
            className="text-[#757b8a] text-[16px] leading-[1.6]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
          >
            We understand how important the cost factor is in managing a business,
            and that is why we are committed to providing solutions that are
            economical but still high quality.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
