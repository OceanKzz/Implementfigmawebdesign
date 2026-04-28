import { motion } from "motion/react";
import svgPaths from "../../imports/svg-9vm3i7iyp0";
import { appHref } from "../routing";

export function Footer() {
  return (
    <footer className="bg-[#1053f3] w-full relative overflow-hidden flex justify-center">
      {/* Decorative arc */}
      <div className="absolute bottom-[-44%] right-[50px] w-[623px] pointer-events-none opacity-20">
        <svg viewBox="0 0 573 623" fill="none">
          <path d={svgPaths.pe250ac0} fill="white" />
        </svg>
      </div>

      {/* Blobs */}
      <div className="absolute pointer-events-none" style={{ left: "-5%", top: "10%", width: 480, height: 480, borderRadius: "50%", background: "rgba(255,255,255,0.05)", filter: "blur(100px)" }} />
      <div className="absolute pointer-events-none" style={{ right: "10%", top: "5%", width: 320, height: 320, borderRadius: "50%", background: "rgba(76,106,255,0.25)", filter: "blur(90px)" }} />
      <div className="absolute pointer-events-none" style={{ left: "30%", top: "-5%", width: 380, height: 380, borderRadius: "50%", background: "rgba(250,204,21,0.07)", filter: "blur(130px)" }} />
      <div className="absolute pointer-events-none" style={{ left: "10%", bottom: "5%", width: 300, height: 300, borderRadius: "50%", background: "rgba(235,110,70,0.08)", filter: "blur(110px)" }} />
      <div className="absolute pointer-events-none" style={{ right: "-3%", bottom: "15%", width: 260, height: 260, borderRadius: "50%", background: "rgba(255,255,255,0.06)", filter: "blur(90px)" }} />
      <div className="absolute pointer-events-none" style={{ left: "55%", bottom: "0%", width: 220, height: 220, borderRadius: "50%", background: "rgba(76,106,255,0.20)", filter: "blur(80px)" }} />

      <div className="relative max-w-[1440px] mx-auto w-full px-6 lg:px-[120px]">
        <motion.div
          className="pt-12 lg:pt-[80px] pb-6 lg:pb-[40px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <p className="text-white text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.2] tracking-[-1px]"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}>
            Let's join Jalur Pay,
          </p>
          <p className="text-white text-[36px] sm:text-[48px] lg:text-[64px] leading-[1.2] tracking-[-1px]"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}>
            We protect your money
          </p>
        </motion.div>

        {/* Contact info */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 lg:gap-[48px] items-start mb-10 lg:mb-[80px]"
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
            <div className="text-white text-[15px] lg:text-[16px] leading-[24px] lg:w-[260px]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}>
              <p>1929, Bancangan, Sambit,</p>
              <p>Surabaya, Wakanda</p>
            </div>
          </div>
          <div className="flex gap-[14px] items-center">
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
            <p className="text-white text-[15px] lg:text-[16px]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}>
              support@jalurpay.com
            </p>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-[2px] bg-[#3B8CF4] mb-6 lg:mb-[40px]" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 lg:pb-[40px]">
          <p className="text-white text-[14px] lg:text-[16px]" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}>
            © Jalur Pay by <span style={{ fontWeight: 700 }}>Jalur Pay Inc.</span>
          </p>
          <div className="flex gap-6 lg:gap-[45px] items-center">
            {[
              { label: "Terms & Conditions", href: "/terms-and-conditions" },
              { label: "Privacy Policy", href: "/privacy-policy" },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={appHref(link.href)}
                className="text-white text-[14px] lg:text-[16px] hover:underline"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
                whileHover={{ opacity: 0.8 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
