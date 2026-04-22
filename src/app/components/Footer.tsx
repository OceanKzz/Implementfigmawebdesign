import { motion } from "motion/react";
import svgPaths from "../../imports/svg-9vm3i7iyp0";

export function Footer() {
  return (
    <footer className="bg-[#1053f3] min-h-[621px] w-full relative overflow-hidden flex justify-center">
      {/* Decorative arc */}
      <div className="absolute bottom-[-44%] right-[50px] w-[623px] pointer-events-none opacity-20">
        <svg viewBox="0 0 573 623" fill="none">
          <path d={svgPaths.pe250ac0} fill="white" />
        </svg>
      </div>

      {/* Accent blobs */}
      <div className="absolute pointer-events-none" style={{
        left: "-5%", top: "10%",
        width: 480, height: 480, borderRadius: "50%",
        background: "rgba(255,255,255,0.05)",
        filter: "blur(100px)",
      }} />
      <div className="absolute pointer-events-none" style={{
        right: "10%", top: "5%",
        width: 320, height: 320, borderRadius: "50%",
        background: "rgba(76,106,255,0.25)",
        filter: "blur(90px)",
      }} />

      <div className="relative max-w-[1440px] mx-auto w-full px-[120px]">
        <motion.div
          className="pt-[80px] pb-[40px] w-[762px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <p className="text-white text-[64px] leading-[1.2] tracking-[-1px]"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}>
            Let's join Jalur Pay,
          </p>
          <p className="text-white text-[64px] leading-[1.2] tracking-[-1px]"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}>
            We protect your money
          </p>
        </motion.div>

        {/* Contact info */}
        <motion.div
          className="flex gap-[48px] items-start mb-[80px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          <div className="flex gap-[14px] items-center">
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
              <circle cx="23" cy="23" r="23" fill="white" />
              <path d={svgPaths.p17529d00} stroke="#1053F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d={svgPaths.p3f9c080}  stroke="#1053F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="text-white text-[16px] leading-[24px] w-[260px]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}>
              <p>1929, Bancangan, Sambit,</p>
              <p>Suroboyo, Wakanda</p>
            </div>
          </div>
          <div className="flex gap-[14px] items-center">
            {/*
              Email icon: white 46×46 circle + envelope path.
              The path is in a 0→20 × 0→16 coordinate space.
              Figma places it at offset (13, 15) within the 46×46 SVG,
              derived from: circle center(11,11) + inset(3,5) - overflow(1,1) = (13,15)
            */}
            <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
              <circle cx="23" cy="23" r="23" fill="white" />
              <path
                d={svgPaths.p211bc780}
                stroke="#1053F3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(13, 15)"
              />
            </svg>
            <p className="text-white text-[16px]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}>
              support@jalurpay.com
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-[2px] bg-[#3B8CF4] mb-[40px]" />

        {/* Bottom */}
        <div className="flex items-center justify-between pb-[40px]">
          <p className="text-white text-[16px]" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}>
            © Jalur Pay by <span style={{ fontWeight: 700 }}>Jalur Pay Inc.</span>
          </p>
          <div className="flex gap-[45px] items-center">
            {["Terms & Conditions", "Privacy Policy"].map((link) => (
              <motion.a
                key={link}
                href="#"
                className="text-white text-[16px] hover:underline"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                whileHover={{ opacity: 0.8 }}
              >
                {link}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}