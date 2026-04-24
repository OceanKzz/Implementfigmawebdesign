import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import imgMap from "figma:asset/3f297b6a3ec1658c5c2441934baa003fe2cbc805.png";
import svgPaths from "../../imports/svg-9vm3i7iyp0";

const globalStats = [
  { target: 350, suffix: "+",  decimals: 0, desc: "Over 500k businesses powered with us" },
  { target: 750, suffix: "k",  decimals: 0, desc: "Users use our platform around the world" },
  { target: 4.8, suffix: "",   decimals: 1, desc: "Ratings on multiple software platforms" },
  { target: 24,  suffix: "+",  decimals: 0, desc: "More than 30 countries trust our platform" },
];

function useCountUp(target: number, decimals: number, duration = 1800) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;
    const increment = target / steps;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(parseFloat(current.toFixed(decimals)));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, target, decimals, duration]);

  return { ref, count };
}

function StatItem({ target, suffix, decimals, desc, delay }: {
  target: number; suffix: string; decimals: number; desc: string; delay: number;
}) {
  const { ref, count } = useCountUp(target, decimals);
  const display = decimals > 0 ? count.toFixed(decimals) : Math.round(count).toString();

  return (
    <motion.div
      className="flex flex-col gap-[4px]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <p
        ref={ref}
        className="text-white text-[28px] lg:text-[36px] leading-[1.3] lg:leading-[46px]"
        style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
      >
        {display}{suffix}
      </p>
      <p className="text-white text-[13px] lg:text-[16px] leading-[1.6]"
        style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}>
        {desc}
      </p>
    </motion.div>
  );
}

export function IndonesiaSection() {
  return (
    <section className="bg-[#1053f3] min-h-[600px] lg:min-h-[862px] w-full relative overflow-hidden flex justify-center">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 1440 862">
          <mask id="bg-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="1440" height="862">
            <rect fill="#1053F3" width="1440" height="862" />
          </mask>
          <g mask="url(#bg-mask)">
            <path d={svgPaths.p3739d380} fill="white" fillOpacity="0.2" />
            <path d={svgPaths.p1bea8580} fill="white" fillOpacity="0.2" />
          </g>
        </svg>
      </div>

      {/* Blobs */}
      <div className="absolute pointer-events-none" style={{ left: "-5%", top: "10%", width: 400, height: 400, borderRadius: "50%", background: "rgba(255,255,255,0.06)", filter: "blur(100px)" }} />
      <div className="absolute pointer-events-none" style={{ right: "-5%", bottom: "10%", width: 380, height: 380, borderRadius: "50%", background: "rgba(76,106,255,0.18)", filter: "blur(90px)" }} />
      <div className="absolute pointer-events-none" style={{ left: "30%", top: "-3%", width: 360, height: 360, borderRadius: "50%", background: "rgba(250,204,21,0.07)", filter: "blur(120px)" }} />
      <div className="absolute pointer-events-none" style={{ right: "25%", top: "15%", width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.05)", filter: "blur(90px)" }} />
      <div className="absolute pointer-events-none" style={{ left: "10%", bottom: "5%", width: 280, height: 280, borderRadius: "50%", background: "rgba(235,110,70,0.08)", filter: "blur(100px)" }} />
      <div className="absolute pointer-events-none" style={{ left: "55%", bottom: "0%", width: 240, height: 240, borderRadius: "50%", background: "rgba(255,255,255,0.05)", filter: "blur(80px)" }} />

      <div className="relative max-w-[1440px] mx-auto w-full px-6 lg:px-[120px] py-12 lg:py-[63px]">
        <motion.h2
          className="text-white text-[28px] lg:text-[40px] leading-[1.3] tracking-[-1px] text-center mx-auto mb-8 lg:mb-[50px]"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, maxWidth: 689 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Focused on Indonesia, Ready for Expansion
        </motion.h2>

        <motion.div
          className="w-full h-[220px] sm:h-[320px] lg:h-[452px] mb-8 lg:mb-[48px] rounded-[12px] overflow-hidden"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={imgMap} alt="Indonesia Map" className="w-full h-full object-cover" />
        </motion.div>

        {/* Stats: 2×2 grid on mobile, 4-col row on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:flex lg:justify-between lg:items-start">
          {globalStats.map((s, i) => (
            <StatItem key={s.target + s.suffix} {...s} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
