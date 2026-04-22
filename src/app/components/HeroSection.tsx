import { motion } from "motion/react";
import imgHero from "figma:asset/a187b20223b723965565d2a7e754c24228bf8686.png";
import svgPaths from "../../imports/svg-9vm3i7iyp0";

function JalurPayCardBadge() {
  return (
    <motion.div
      className="bg-white flex gap-[20px] items-center p-[14px] rounded-[16px] shadow-[20px_40px_80px_0px_rgba(45,51,81,0.12)]"
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex gap-[8px] items-end">
        <div className="h-[40px] relative w-[60px]">
          <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 64.0018 26.8913">
            <path d={svgPaths.p2c1b1f00} fill="#424242" />
            <path d={svgPaths.p44a4400} fill="#4C6AFF" />
          </svg>
        </div>
        <div className="flex flex-col gap-[4px] justify-center">
          <p className="text-[16px] text-black" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
            Jalur Pay
          </p>
          <p className="text-[12px] text-[#757b8a]" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
            Mastercard ~ 0259
          </p>
        </div>
      </div>
      <p className="text-[13px] text-[#101010] whitespace-nowrap" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>
        Rp.484390
      </p>
    </motion.div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

/* ─── Background blobs (shared) ─── */
function Blobs() {
  return (
    <>
      <div className="absolute pointer-events-none" style={{ right: "8%", top: -60, width: 520, height: 520, borderRadius: "50%", background: "rgba(16,83,243,0.07)", filter: "blur(110px)" }} />
      <div className="absolute pointer-events-none" style={{ left: "38%", bottom: -80, width: 400, height: 400, borderRadius: "50%", background: "rgba(76,106,255,0.06)", filter: "blur(90px)" }} />
      <div className="absolute pointer-events-none" style={{ left: "2%", top: "30%", width: 480, height: 480, borderRadius: "50%", background: "rgba(255,153,0,0.07)", filter: "blur(100px)" }} />
      <div className="absolute pointer-events-none" style={{ left: "20%", top: "-5%", width: 340, height: 340, borderRadius: "50%", background: "rgba(250,204,21,0.07)", filter: "blur(120px)" }} />
      <div className="absolute pointer-events-none" style={{ right: "2%", bottom: "5%", width: 300, height: 300, borderRadius: "50%", background: "rgba(235,110,70,0.07)", filter: "blur(100px)" }} />
      <div className="absolute pointer-events-none" style={{ left: "45%", top: "55%", width: 260, height: 260, borderRadius: "50%", background: "rgba(16,83,243,0.06)", filter: "blur(80px)" }} />
      <div className="absolute pointer-events-none" style={{ right: "30%", top: "10%", width: 220, height: 220, borderRadius: "50%", background: "rgba(76,106,255,0.08)", filter: "blur(70px)" }} />
    </>
  );
}

export function HeroSection() {
  return (
    <section className="bg-[#f7f9ff] w-full relative overflow-hidden flex justify-center">
      <Blobs />

      {/* ══════════ MOBILE layout (< lg) ══════════ */}
      <div className="relative z-10 flex flex-col items-center px-6 pt-10 pb-12 gap-8 w-full lg:hidden">
        {/* Text */}
        <motion.div
          className="flex flex-col gap-5 items-center text-center w-full max-w-[520px]"
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="text-[#101010] text-[36px] leading-[1.2] w-full"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
            custom={0}
            variants={fadeUp}
          >
            One Platform for Payments, Payouts &amp; Wallets in Indonesia
          </motion.h1>
          <motion.p
            className="text-[#757b8a] text-[15px] leading-[1.6] w-full max-w-[400px]"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
            custom={1}
            variants={fadeUp}
          >
            Accept payments, send payouts, and manage funds with a single integration. Built for businesses expanding in Indonesia.
          </motion.p>
          <motion.button
            custom={2}
            variants={fadeUp}
            className="bg-[#1053f3] text-white font-bold text-[16px] px-8 py-4 rounded-[8px]"
            style={{ fontFamily: "Inter, sans-serif" }}
            whileHover={{ scale: 1.05, backgroundColor: "#0d44d4" }}
            whileTap={{ scale: 0.97 }}
          >
            Register
          </motion.button>
          {/* Stats */}
          <motion.div
            className="flex gap-8 items-center justify-center mt-2"
            custom={3}
            variants={fadeUp}
          >
            <div className="flex flex-col gap-[4px] items-center">
              <p className="text-[#101010] text-[32px] leading-[1.3] tracking-[-1px]" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}>18k+</p>
              <p className="text-[#101010] text-[12px]" style={{ fontFamily: "Poppins, sans-serif" }}>Users</p>
            </div>
            <div className="h-10 w-[1px] bg-[#D6D6D6]" />
            <div className="flex flex-col gap-[4px] items-center">
              <p className="text-[#101010] text-[32px] leading-[1.3] tracking-[-1px]" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}>20+</p>
              <p className="text-[#101010] text-[12px]" style={{ fontFamily: "Poppins, sans-serif" }}>Partners</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="relative w-full max-w-[360px] h-[380px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <div className="absolute inset-0 overflow-hidden rounded-[24px]" style={{ transform: "scaleX(-1)" }}>
            <img
              src={imgHero}
              alt="Woman using phone"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%]">
            <JalurPayCardBadge />
          </div>
        </motion.div>
      </div>

      {/* ══════════ DESKTOP layout (≥ lg) ══════════ */}
      <div className="hidden lg:block relative h-[799px] max-w-[1440px] w-full mx-auto shrink-0">

        {/* LEFT: Hero Image */}
        <div
          className="absolute overflow-hidden"
          style={{ left: 76, top: 48, width: 587.601, height: 751.058 }}
        >
          {/* Dot pattern */}
          <div className="absolute" style={{ left: 76, top: 55, width: 104, height: 51 }}>
            <svg viewBox="0 0 104.017 50.968" fill="none" className="size-full">
              <path d={svgPaths.p9d09e30} fill="#1053F3" />
              <path d={svgPaths.p7876680} fill="#1053F3" />
              <path d={svgPaths.pf575300} fill="#1053F3" />
            </svg>
          </div>

          <div
            className="absolute overflow-hidden"
            style={{ left: 67, top: 65, width: 453, height: 687, transform: "scaleX(-1)" }}
          >
            <img
              src={imgHero}
              alt="Woman using phone"
              style={{ position: "absolute", width: "249.45%", height: "109.64%", left: "-113.4%", top: "-9.64%", maxWidth: "none", objectFit: "cover" }}
            />
          </div>

          <div className="absolute" style={{ left: 99, top: 459 }}>
            <JalurPayCardBadge />
          </div>
        </div>

        {/* Blue curved arrow */}
        <motion.div
          className="absolute flex items-center justify-center"
          style={{ left: 573, top: 344, width: 120.206, height: 124.958 }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
        >
          <div style={{ transform: "scaleY(-1) rotate(-146.38deg)", flexShrink: 0 }}>
            <svg width="79.902" height="96.931" viewBox="0 0 79.9023 96.9307" fill="none" style={{ overflow: "visible" }}>
              <path d={svgPaths.p340b0c80} fill="#1053F3" />
            </svg>
          </div>
        </motion.div>

        {/* RIGHT: Content */}
        <motion.div
          className="absolute flex flex-col gap-[30px] items-start"
          style={{ left: 744, top: 150 }}
          initial="hidden"
          animate="show"
        >
          <motion.div className="flex flex-col gap-[24px]" custom={0} variants={fadeUp}>
            <h1
              className="text-[#101010] text-[52px] leading-[1.2] w-[599px]"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
            >
              One Platform for Payments, Payouts &amp; Wallets in Indonesia
            </h1>
            <p
              className="text-[#757b8a] text-[16px] leading-[1.5] w-[451px]"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
            >
              Accept payments, send payouts, and manage funds with a single
              integration. Built for businesses expanding in Indonesia.
            </p>
          </motion.div>

          <motion.button
            custom={1}
            variants={fadeUp}
            className="bg-[#1053f3] text-white font-bold text-[16px] px-[32px] py-[16px] rounded-[8px] w-[218px]"
            style={{ fontFamily: "Inter, sans-serif" }}
            whileHover={{ scale: 1.05, backgroundColor: "#0d44d4" }}
            whileTap={{ scale: 0.97 }}
          >
            Register
          </motion.button>

          <motion.div
            className="flex gap-[48px] items-center"
            custom={2}
            variants={fadeUp}
            style={{ marginTop: 56 }}
          >
            <div className="flex flex-col gap-[4px]">
              <p className="text-[#101010] text-[40px] leading-[1.3] tracking-[-1px]"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}>
                18k+
              </p>
              <p className="text-[#101010] text-[12px] leading-[1.5]"
                style={{ fontFamily: "Poppins, sans-serif" }}>
                Users
              </p>
            </div>
            <div className="h-[48px] w-[1px] bg-[#D6D6D6]" />
            <div className="flex flex-col gap-[4px]">
              <p className="text-[#101010] text-[40px] leading-[1.3] tracking-[-1px]"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}>
                20+
              </p>
              <p className="text-[#101010] text-[12px] leading-[1.5]"
                style={{ fontFamily: "Poppins, sans-serif" }}>
                Partners
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
