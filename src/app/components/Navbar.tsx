import { useState, useEffect } from "react";
import { motion } from "motion/react";
import svgPaths from "../../imports/svg-9vm3i7iyp0";

function LogoSVG() {
  return (
    <svg width="120" height="46" viewBox="0 0 171 66" fill="none">
      <path d={svgPaths.p8a54600} fill="#101010" />
      <path d={svgPaths.p55d0500} fill="#4C6AFF" />
      <path d={svgPaths.p3c2f480} fill="#101010" />
      <path d={svgPaths.p119ab780} fill="#101010" />
      <path d={svgPaths.p35178900} fill="#101010" />
      <path d={svgPaths.p1cf13300} fill="#101010" />
      <path d={svgPaths.p5183a00} fill="#101010" />
      <path d={svgPaths.p10a54700} fill="#101010" />
      <path d={svgPaths.p35373e80} fill="#101010" />
      <path d={svgPaths.p29c69c00} fill="#101010" />
    </svg>
  );
}

const navItems = [
  { label: "Home", active: true },
  { label: "Solutions", active: false },
  { label: "Product", active: false },
  { label: "About", active: false },
  { label: "Contact us", active: false },
  { label: "Explore API", active: false },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState("EN");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="bg-[#f7f9ff] h-[114px] w-full sticky top-0 z-50 transition-shadow duration-300 flex items-center justify-center"
      style={{
        boxShadow: scrolled ? "0 4px 24px 0 rgba(16,83,243,0.10)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
      initial={{ y: -114, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Centered content wrapper */}
      <div className="max-w-[1440px] mx-auto w-full px-[120px] flex items-center justify-between">
        <div className="flex items-center gap-[65px]">
          <div className="shrink-0">
            <LogoSVG />
          </div>
          <nav className="flex gap-[32px] items-center">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href="#"
                className={`text-[16px] leading-[1.5] transition-colors ${
                  item.active
                    ? "font-bold text-[#1053f3]"
                    : "font-normal text-[#757b8a] hover:text-[#1053f3]"
                }`}
                style={{ fontFamily: "Inter, sans-serif" }}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-[15px]">
          <motion.button
            onClick={() => setLang(lang === "EN" ? "ID" : "EN")}
            className="bg-[#dfe8ff] border border-[#1053f3] text-[#1053f3] font-bold text-[16px] px-[32px] py-[16px] rounded-[8px] w-[126px] flex items-center justify-center gap-[8px]"
            style={{ fontFamily: "Inter, sans-serif" }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            {lang}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d={svgPaths.p1ad1800} fill="#727272" />
            </svg>
          </motion.button>

          <motion.button
            className="bg-[#1053f3] text-white font-bold text-[16px] px-[32px] py-[16px] rounded-[8px] w-[126px]"
            style={{ fontFamily: "Inter, sans-serif" }}
            whileHover={{ scale: 1.04, backgroundColor: "#0d44d4" }}
            whileTap={{ scale: 0.97 }}
          >
            Sign In
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
