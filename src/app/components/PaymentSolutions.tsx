import { motion } from "motion/react";
import svgPaths from "../../imports/svg-9vm3i7iyp0";

interface SolutionCardProps {
  title: string;
  description: string;
  iconContent: React.ReactNode;
  highlighted?: boolean;
  delay: number;
}

function SolutionCard({ title, description, iconContent, highlighted, delay }: SolutionCardProps) {
  return (
    <motion.div
      className={`relative rounded-[16px] w-[276px] h-[291px] cursor-default select-none ${
        highlighted ? "bg-[#e9efff]" : "bg-white border border-[#1053f3]"
      }`}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, delay }}
      whileHover={{
        y: -8,
        boxShadow: "0 16px 48px 0 rgba(16,83,243,0.16)",
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
    >
      {/* Icon */}
      <div className="absolute left-[24px] top-[30px]">
        <motion.div
          className="bg-[#1053f3] rounded-[8px] size-[70px] flex items-center justify-center"
          whileHover={{ rotate: 6, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          {iconContent}
        </motion.div>
      </div>

      <div className="absolute left-[24px] top-[127px] w-[228px] flex flex-col gap-[12px]">
        <p className="text-[#101010] text-[18px] leading-[1.2]"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>
          {title}
        </p>
        <p className="text-[#757b8a] text-[16px] leading-[1.6]"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export function PaymentSolutions() {
  return (
    <section className="bg-white min-h-[606px] w-full flex items-center justify-center overflow-hidden relative">
      {/* Decorative blobs */}
      <div className="absolute pointer-events-none" style={{
        left: "50%", top: "-10%", transform: "translateX(-50%)",
        width: 700, height: 400, borderRadius: "50%",
        background: "rgba(16,83,243,0.04)",
        filter: "blur(120px)",
      }} />
      <div className="absolute pointer-events-none" style={{
        left: "-3%", bottom: "5%",
        width: 300, height: 300, borderRadius: "50%",
        background: "rgba(235,110,70,0.05)",
        filter: "blur(80px)",
      }} />
      <div className="max-w-[1440px] mx-auto w-full px-[229px] flex flex-col gap-[56px] items-center py-[103px]">
        <motion.h2
          className="text-[#101010] text-[40px] leading-[1.3] tracking-[-1px] text-center w-[620px]"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Payment Solutions
        </motion.h2>

        <div className="flex gap-[60px] items-start">
          <SolutionCard
            delay={0}
            title="Payment Collection"
            description="Accept payments through virtual accounts, e-wallets, and QRIS with a single integration across Indonesia"
            highlighted
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
            description="developer-friendly APIs, clear documentation, and real-time callbacks for seamless payment operations"
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