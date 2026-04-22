import { motion } from "motion/react";
import imgPhone from "figma:asset/eced62f9d681f416a2dfb4f294652f7b294e8de5.png";
import imgAvatar from "figma:asset/1edc9c1cecaecb0afaf338bd8f187f2b9376e5f0.png";
import svgPaths from "../../imports/svg-9vm3i7iyp0";

function ReceivedCard() {
  return (
    <motion.div
      className="bg-white flex gap-[8px] items-center p-[16px] rounded-[16px] shadow-[20px_40px_80px_0px_rgba(45,51,81,0.12)]"
      initial={{ x: -30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.55 }}
    >
      <div className="size-[40px] rounded-full border-[1.3px] border-white overflow-hidden shrink-0">
        <img src={imgAvatar} alt="avatar" className="size-full object-cover" />
      </div>
      <div className="flex flex-col gap-[2px]">
        <div className="flex items-center gap-[8px]">
          <p className="text-[#101010] text-[16px] leading-[1.5]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>
            Received Rp.45000
          </p>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d={svgPaths.p93c9530} fill="#23D16B" />
            <path d={svgPaths.p30544500} fill="white" />
          </svg>
        </div>
        <p className="text-[#757b8a] text-[14px] leading-[1.5]"
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
      /* edit user icon — three paths */
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="overflow-visible">
        <path d={svgPaths.p3af54600} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d={svgPaths.p37b2cc00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d={svgPaths.p6aa37c0}  stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Setup your payment",
    sub: "Fill in the details",
    bg: "#1053f3",
    icon: (
      /* mobile payment done icon */
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d={svgPaths.p33f7770} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Pay for your transfer",
    sub: "Send your money",
    bg: "#facc15",
    icon: (
      /* debit card purchase icon */
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d={svgPaths.p1d05f200} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
  },
];

function StepsCard() {
  return (
    <motion.div
      className="bg-white h-[242px] rounded-[16px] shadow-[20px_40px_80px_0px_rgba(45,51,81,0.12)] w-[307px] p-[24px] flex flex-col gap-[24px] justify-center"
      initial={{ x: 30, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.45, duration: 0.55 }}
    >
      {steps.map((step) => (
        <div key={step.title} className="flex gap-[16px] items-center">
          <motion.div
            className="size-[44px] rounded-[12px] shrink-0 flex items-center justify-center overflow-hidden"
            style={{ background: step.bg }}
            whileHover={{ scale: 1.12, rotate: 6 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            {step.icon}
          </motion.div>
          <div className="flex flex-col gap-[4px]">
            <p className="text-[#101010] text-[14px] leading-[1.5]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>
              {step.title}
            </p>
            <p className="text-[#757b8a] text-[14px] leading-[1.5]"
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
    <section className="bg-[#f7f9ff] min-h-[701px] w-full flex items-center justify-center overflow-hidden relative">
      {/* Decorative blobs */}
      <div className="absolute pointer-events-none" style={{
        right: "5%", top: "10%",
        width: 350, height: 350, borderRadius: "50%",
        background: "rgba(16,83,243,0.06)",
        filter: "blur(90px)",
      }} />
      <div className="absolute pointer-events-none" style={{
        left: "15%", bottom: "-5%",
        width: 300, height: 300, borderRadius: "50%",
        background: "rgba(235,110,70,0.06)",
        filter: "blur(80px)",
      }} />
      <div className="max-w-[1440px] mx-auto w-full px-[121px] flex gap-[47px] items-center py-[80px]">

        {/* Left: Phone + floating cards */}
        <div className="relative w-[503px] h-[556px] shrink-0">
          <motion.div
            className="absolute top-0 left-[84px] w-[419px] h-[494px] rounded-[16px] overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <img src={imgPhone} alt="App dashboard" className="w-full h-full object-contain rounded-[16px]" />
          </motion.div>
          <div className="absolute top-[37px] left-0">
            <ReceivedCard />
          </div>
          <div className="absolute bottom-0 right-0">
            <StepsCard />
          </div>
        </div>

        {/* Right: Text */}
        <motion.div
          className="flex flex-col gap-[24px] max-w-[529px]"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, delay: 0.2 }}
        >
          <h2
            className="text-[#101010] text-[40px] leading-[1.3] tracking-[-1px] w-[463px]"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
          >
            Transparent &amp; Competitive Pricing for Businesses
          </h2>
          <p
            className="text-[#101010] text-[16px] leading-[1.5] w-[529px]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
          >
            Optimized pricing structure with fast onboarding and efficient processing.
          </p>
          <p
            className="text-[#757b8a] text-[16px] leading-[1.6] w-[525px]"
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