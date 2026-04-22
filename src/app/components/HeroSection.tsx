import { motion } from "motion/react";
import imgHero from "figma:asset/a187b20223b723965565d2a7e754c24228bf8686.png";
import svgPaths from "../../imports/svg-9vm3i7iyp0";

function JalurPayCardBadge() {
  return (
    <motion.div
      className="bg-white flex gap-[30px] items-center p-[16px] rounded-[16px] shadow-[20px_40px_80px_0px_rgba(45,51,81,0.12)]"
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex gap-[8px] items-end">
        <div className="h-[48px] relative w-[76px]">
          <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 64.0018 26.8913">
            <path d={svgPaths.p2c1b1f00} fill="#424242" />
            <path d={svgPaths.p44a4400} fill="#4C6AFF" />
          </svg>
        </div>
        <div className="flex flex-col gap-[8px] justify-center">
          <p className="text-[20px] text-black" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
            Jalur Pay
          </p>
          <p className="text-[14px] text-[#757b8a]" style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
            Mastercard ~ 0259
          </p>
        </div>
      </div>
      <p className="text-[14px] text-[#101010] whitespace-nowrap" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>
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

export function HeroSection() {
  return (
    <section className="bg-[#f7f9ff] h-[799px] overflow-hidden w-full shrink-0 relative flex justify-center">

      {/* ── Decorative background blobs ── */}
      {/* Blue blob — top right */}
      <div className="absolute pointer-events-none" style={{
        right: "8%", top: -60,
        width: 520, height: 520, borderRadius: "50%",
        background: "rgba(16,83,243,0.07)",
        filter: "blur(110px)",
      }} />
      {/* Soft purple blob — bottom center */}
      <div className="absolute pointer-events-none" style={{
        left: "38%", bottom: -80,
        width: 400, height: 400, borderRadius: "50%",
        background: "rgba(76,106,255,0.06)",
        filter: "blur(90px)",
      }} />
      {/* Warm orange blob — behind the person image */}
      <div className="absolute pointer-events-none" style={{
        left: "2%", top: "30%",
        width: 480, height: 480, borderRadius: "50%",
        background: "rgba(255,153,0,0.07)",
        filter: "blur(100px)",
      }} />

      {/* ── All content centered at 1440px ── */}
      <div className="max-w-[1440px] w-full relative h-full mx-auto">

        {/* ─── LEFT: Hero Image ─── */}
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

          {/* Person image — horizontally flipped so she faces right toward text */}
          <div
            className="absolute overflow-hidden"
            style={{
              left: 67,
              top: 65,
              width: 453,
              height: 687,
              transform: "scaleX(-1)",
            }}
          >
            <img
              src={imgHero}
              alt="Woman using phone"
              style={{
                position: "absolute",
                width: "249.45%",
                height: "109.64%",
                left: "-113.4%",
                top: "-9.64%",
                maxWidth: "none",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Payment card badge */}
          <div className="absolute" style={{ left: 99, top: 459 }}>
            <JalurPayCardBadge />
          </div>
        </div>

        {/* ─── Blue curved arrow ─── */}
        {/* Figma: absolute, left:573, top:344, 120.206×124.958, inner transform: scaleY(-1) rotate(-146.38deg) */}
        <motion.div
          className="absolute flex items-center justify-center"
          style={{ left: 573, top: 344, width: 120.206, height: 124.958 }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
        >
          <div style={{ transform: "scaleY(-1) rotate(-146.38deg)", flexShrink: 0 }}>
            <svg
              width="79.902"
              height="96.931"
              viewBox="0 0 79.9023 96.9307"
              fill="none"
              style={{ overflow: "visible" }}
            >
              <path d={svgPaths.p340b0c80} fill="#1053F3" />
            </svg>
          </div>
        </motion.div>

        {/* ─── RIGHT: Content ─── */}
        <motion.div
          className="absolute flex flex-col gap-[30px] items-start"
          style={{ left: 744, top: 150 }}
          initial="hidden"
          animate="show"
        >
          {/* Heading */}
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

          {/* CTA */}
          <motion.button
            custom={1}
            variants={fadeUp}
            className="bg-[#1053f3] text-white font-bold text-[16px] px-[32px] py-[16px] rounded-[8px] w-[218px]"
            style={{ fontFamily: "Inter, sans-serif" }}
            whileHover={{ scale: 1.05, backgroundColor: "#0d44d4" }}
            whileTap={{ scale: 0.97 }}
          >
            注册
          </motion.button>

          {/* Stats */}
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
