import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Building2, BriefcaseBusiness, Code2, CreditCard, QrCode, Store } from "lucide-react";
import svgPaths from "../../imports/svg-9vm3i7iyp0";
import { appHref } from "../routing";
import { openRegisterModal } from "./RegisterModal";

function LogoSVG() {
  return (
    <svg width="128" height="50" viewBox="0 0 171 66" fill="none">
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

type NavItemLabel = "Home" | "Solutions" | "Product" | "About" | "Contact us" | "Explore API";

type DropdownLabel = "Solutions" | "Product";

const navItems: Array<{ label: NavItemLabel; href: string }> = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions/smb" },
  { label: "Product", href: "/product/checkout" },
  { label: "About", href: "/about" },
  { label: "Contact us", href: "/contact" },
  { label: "Explore API", href: "#" },
];

const dropdownMenus: Record<
  DropdownLabel,
  {
    title: string;
    description: string;
    items: Array<{
      label: string;
      description: string;
      href: string;
      icon: typeof Store;
    }>;
  }
> = {
  Solutions: {
    title: "Solutions",
    description: "Flexible payment solutions tailored for businesses at every stage of growth.",
    items: [
      {
        label: "Small Medium Business",
        description: "Fast setup and ready-to-use payment collection for growing teams.",
        href: "/solutions/smb",
        icon: Store,
      },
      {
        label: "Enterprise",
        description: "Robust payment infrastructure for high-volume and complex operations.",
        href: "/solutions/enterprise",
        icon: Building2,
      },
    ],
  },
  Product: {
    title: "Product",
    description: "A complete platform to launch payments, optimize conversions, and scale revenue.",
    items: [
      {
        label: "Checkout",
        description: "Hosted payment experiences designed to improve payment success.",
        href: "/product/checkout",
        icon: CreditCard,
      },
      {
        label: "API",
        description: "Developer-friendly endpoints to build custom payment flows your way.",
        href: "/product/api",
        icon: Code2,
      },
      {
        label: "QRIS",
        description: "One QR integration to accept wallet and bank app payments in Indonesia.",
        href: "/product/qris",
        icon: QrCode,
      },
    ],
  },
};

interface NavbarProps {
  activeItem?: NavItemLabel;
}

export function Navbar({ activeItem = "Home" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState("EN");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownLabel | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<DropdownLabel | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleCloseDropdown = () => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setOpenDropdown(null);
    }, 140);
  };

  const openDropdownMenu = (label: DropdownLabel) => {
    clearCloseTimer();
    setOpenDropdown(label);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => () => clearCloseTimer(), []);

  return (
    <motion.header
      className="bg-[#f7f9ff] w-full sticky top-0 z-50 transition-shadow duration-300"
      style={{
        boxShadow: scrolled ? "0 4px 24px 0 rgba(16,83,243,0.10)" : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Desktop nav */}
      <div className="hidden lg:flex max-w-[1440px] mx-auto w-full px-[120px] h-[114px] items-center justify-between">
        <div className="flex items-center gap-[52px]">
          <div className="shrink-0">
            <a href={appHref("/")} aria-label="JalurPay home" className="block">
              <LogoSVG />
            </a>
          </div>
          <nav className="flex gap-[32px] items-center">
            {navItems.map((item) => (
              <motion.div
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  if (item.label === "Solutions" || item.label === "Product") {
                    openDropdownMenu(item.label);
                  } else {
                    scheduleCloseDropdown();
                  }
                }}
                onMouseLeave={() => {
                  if (item.label === "Solutions" || item.label === "Product") {
                    scheduleCloseDropdown();
                  }
                }}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <a
                  href={appHref(item.href)}
                  className={`flex items-center gap-1 text-[16px] leading-[1.5] transition-colors ${
                    item.label === activeItem || openDropdown === item.label
                      ? "font-bold text-[#1053f3]"
                      : "font-normal text-[#757b8a] hover:text-[#1053f3]"
                  }`}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {item.label}
                  {(item.label === "Solutions" || item.label === "Product") && (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 18 18"
                      fill="none"
                      className={`transition-transform ${openDropdown === item.label ? "rotate-[-90deg]" : "rotate-90"}`}
                    >
                      <path d={svgPaths.p1ad1800} fill={item.label === activeItem || openDropdown === item.label ? "#1053f3" : "#757b8a"} />
                    </svg>
                  )}
                </a>
              </motion.div>
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
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ transform: "rotate(90deg)" }}>
              <path d={svgPaths.p1ad1800} fill="#727272" />
            </svg>
          </motion.button>

          <motion.button
            className="bg-[#1053f3] text-white font-bold text-[16px] px-[32px] py-[16px] rounded-[8px] w-[126px]"
            style={{ fontFamily: "Inter, sans-serif" }}
            onClick={openRegisterModal}
            whileHover={{ scale: 1.04, backgroundColor: "#0d44d4" }}
            whileTap={{ scale: 0.97 }}
          >
            Sign In
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {openDropdown && (
          <motion.div
            className="absolute left-0 top-full hidden w-full border-t border-[#e6ecff] bg-[#f7f9ff]/95 backdrop-blur-[14px] lg:block"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onMouseEnter={clearCloseTimer}
            onMouseLeave={scheduleCloseDropdown}
          >
            <div className="mx-auto grid max-w-[1440px] grid-cols-[300px_1fr] gap-14 px-[120px] py-12">
              <div className="max-w-[220px]">
                <h3
                  className="text-[18px] font-bold leading-[1.2] text-[#101010]"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {dropdownMenus[openDropdown].title}
                </h3>
                <p
                  className="mt-5 text-[16px] leading-[1.6] text-[#5f6778]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {dropdownMenus[openDropdown].description}
                </p>
              </div>

              <div
                className={`grid gap-5 ${
                  dropdownMenus[openDropdown].items.length === 2 ? "grid-cols-2 max-w-[760px]" : "grid-cols-3"
                }`}
              >
                {dropdownMenus[openDropdown].items.map((subItem, index) => {
                  const Icon = subItem.icon;
                  return (
                    <motion.a
                      key={subItem.label}
                      href={appHref(subItem.href)}
                      className="group rounded-[20px] border border-transparent bg-white/55 p-5 transition-colors hover:border-[#d8e4ff] hover:bg-white"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.22, delay: index * 0.05 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#e8efff] text-[#1053f3] transition-transform group-hover:scale-105">
                          <Icon size={22} strokeWidth={2.1} />
                        </div>
                        <div>
                          <div
                            className="text-[17px] font-semibold leading-[1.35] text-[#101010]"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                          >
                            {subItem.label}
                          </div>
                          <p
                            className="mt-2 text-[14px] leading-[1.6] text-[#6d7483]"
                            style={{ fontFamily: "Inter, sans-serif" }}
                          >
                            {subItem.description}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile nav */}
      <div className="flex lg:hidden items-center justify-between px-4 py-4">
        <a href={appHref("/")} aria-label="JalurPay home" className="block">
          <LogoSVG />
        </a>
        <div className="flex items-center gap-3">
          <motion.button
            className="bg-[#1053f3] text-white font-bold text-[14px] px-4 py-2 rounded-[8px]"
            style={{ fontFamily: "Inter, sans-serif" }}
            onClick={openRegisterModal}
            whileTap={{ scale: 0.97 }}
          >
            Sign In
          </motion.button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-[8px] border border-[#e3e3e3]"
          >
            <span className={`block w-5 h-0.5 bg-[#101010] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#101010] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#101010] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="lg:hidden bg-[#f7f9ff] border-t border-[#e3e3e3] px-4 pb-4 flex flex-col gap-2"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-[#f0f0f0]">
                <div className="flex items-center justify-between">
                  <a
                    href={appHref(item.href)}
                    className={`py-3 text-[16px] ${
                      item.label === activeItem ? "text-[#1053f3] font-bold" : "text-[#757b8a]"
                    }`}
                    style={{ fontFamily: "Inter, sans-serif" }}
                    onClick={() => {
                      if (item.label !== "Solutions" && item.label !== "Product") {
                        setMenuOpen(false);
                      }
                    }}
                  >
                    {item.label}
                  </a>

                  {(item.label === "Solutions" || item.label === "Product") && (
                    <button
                      className="px-2 py-3"
                      onClick={() =>
                        setMobileExpanded((prev) => (prev === item.label ? null : item.label))
                      }
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 18 18"
                        fill="none"
                        className={`transition-transform ${mobileExpanded === item.label ? "rotate-[-90deg]" : "rotate-90"}`}
                      >
                        <path d={svgPaths.p1ad1800} fill="#757b8a" />
                      </svg>
                    </button>
                  )}
                </div>

                {(item.label === "Solutions" || item.label === "Product") && mobileExpanded === item.label && (
                  <div className="pb-3 pl-2">
                    <p
                      className="pb-3 text-[13px] leading-[1.6] text-[#6d7483]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {dropdownMenus[item.label].description}
                    </p>
                    <div className="space-y-2">
                      {dropdownMenus[item.label].items.map((subItem) => {
                        const Icon = subItem.icon;
                        return (
                          <a
                            key={subItem.label}
                            href={appHref(subItem.href)}
                            className="flex gap-3 rounded-[14px] bg-white/80 px-3 py-3"
                            onClick={() => setMenuOpen(false)}
                          >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-[#e8efff] text-[#1053f3]">
                              <Icon size={18} strokeWidth={2.1} />
                            </div>
                            <div>
                              <div
                                className="text-[14px] font-semibold text-[#101010]"
                                style={{ fontFamily: "Poppins, sans-serif" }}
                              >
                                {subItem.label}
                              </div>
                              <p
                                className="mt-1 text-[12px] leading-[1.5] text-[#6d7483]"
                                style={{ fontFamily: "Inter, sans-serif" }}
                              >
                                {subItem.description}
                              </p>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => setLang(lang === "EN" ? "ID" : "EN")}
              className="mt-2 self-start bg-[#dfe8ff] border border-[#1053f3] text-[#1053f3] font-bold text-[14px] px-4 py-2 rounded-[8px] flex items-center gap-2"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {lang}
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none" style={{ transform: "rotate(90deg)" }}>
                <path d={svgPaths.p1ad1800} fill="#727272" />
              </svg>
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
