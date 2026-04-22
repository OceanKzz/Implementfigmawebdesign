import { motion } from "motion/react";
import svgPaths from "../../imports/svg-9vm3i7iyp0";

interface SolutionCardProps {
  title: string;
  description: string;
  iconContent: React.ReactNode;
  delay: number;
}

function SolutionCard({ title, description, iconContent, delay }: SolutionCardProps) {
  return (
    <motion.div
      className="relative rounded-[16px] w-full lg:w-[276px] lg:h-[291px] min-h-[240px] cursor-default select-none bg-white border border-[#1053f3] p-6 lg:p-0"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, delay }}
      whileHover={{
        y: -8,
        backgroundColor: "#e9efff",
        boxShadow: "0 16px 48px 0 rgba(16,83,243,0.16)",
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
    >
      {/* Icon */}
      <div className="lg:absolute lg:left-[24px] lg:top-[30px] mb-4 lg:mb-0">
        <motion.div
          className="bg-[#1053f3] rounded-[8px] size-[60px] lg:size-[70px] flex items-center justify-center"
          whileHover={{ rotate: 6, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          {iconContent}
        </motion.div>
      </div>

      <div className="lg:absolute lg:left-[24px] lg:top-[127px] lg:w-[228px] flex flex-col gap-[10px] lg:gap-[12px]">
        <p className="text-[#101010] text-[17px] lg:text-[18px] leading-[1.2]"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>
          {title}
        </p>
        <p className="text-[#757b8a] text-[14px] lg:text-[16px] leading-[1.6]"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export function PaymentSolutions() {
  return (
    <section className="bg-white w-full flex items-center justify-center overflow-hidden relative">
      {/* Blobs */}
      <div className="absolute pointer-events-none" style={{ left: "50%", top: "-10%", transform: "translateX(-50%)", width: 700, height: 400, borderRadius: "50%", background: "rgba(16,83,243,0.04)", filter: "blur(120px)" }} />
      <div className="absolute pointer-events-none" style={{ left: "-3%", bottom: "5%", width: 300, height: 300, borderRadius: "50%", background: "rgba(235,110,70,0.05)", filter: "blur(80px)" }} />
      <div className="absolute pointer-events-none" style={{ right: "-2%", top: "5%", width: 360, height: 360, borderRadius: "50%", background: "rgba(250,204,21,0.07)", filter: "blur(130px)" }} />
      <div className="absolute pointer-events-none" style={{ right: "10%", bottom: "-5%", width: 300, height: 300, borderRadius: "50%", background: "rgba(76,106,255,0.07)", filter: "blur(110px)" }} />
      <div className="absolute pointer-events-none" style={{ left: "20%", top: "20%", width: 240, height: 240, borderRadius: "50%", background: "rgba(16,83,243,0.05)", filter: "blur(90px)" }} />
      <div className="absolute pointer-events-none" style={{ left: "60%", top: "10%", width: 200, height: 200, borderRadius: "50%", background: "rgba(235,110,70,0.06)", filter: "blur(80px)" }} />

      <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-[229px] flex flex-col gap-10 lg:gap-[56px] items-center py-16 lg:py-[103px]">
        <motion.h2
          className="text-[#101010] text-[28px] lg:text-[40px] leading-[1.3] tracking-[-1px] text-center lg:w-[620px]"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Payment Solutions
        </motion.h2>

        {/* Cards: stacked on mobile, row on desktop */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[60px] items-stretch lg:items-start w-full lg:w-auto">
          <SolutionCard
            delay={0}
            title="Payment Collection"
            description="Accept payments through virtual accounts, e-wallets, and QRIS with a single integration across Indonesia"
            iconContent={
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d={svgPaths.p2d2f3180} fill="white" />
              </svg>
            }
          />
          <SolutionCard
            delay={0.12}
            title="Payout"
            description="Send funds instantly to banks and e-wallets with automated processing, real-time status updates, and reliable delivery"
            iconContent={
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d={svgPaths.p1a66f180} fill="white" />
              </svg>
            }
          />
          <SolutionCard
            delay={0.24}
            title="API"
            description="Developer-friendly APIs, clear documentation, and real-time callbacks for seamless payment operations"
            iconContent={
              <p className="text-white text-[24px] leading-[1.2]"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>
                API
              </p>
            }
          />
        </div>
      </div>
    </section>
  );
}
