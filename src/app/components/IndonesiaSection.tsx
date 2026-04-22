import { motion } from "motion/react";
import imgMap from "figma:asset/3f297b6a3ec1658c5c2441934baa003fe2cbc805.png";
import svgPaths from "../../imports/svg-9vm3i7iyp0";

const globalStats = [
  { value: "350+", desc: "Over 500k business powered with us" },
  { value: "750k", desc: "Users used our platform in around the world" },
  { value: "4.8",  desc: "Ratings on multiple software platforms" },
  { value: "24+",  desc: "More than 30 countries trust our platform" },
];

export function IndonesiaSection() {
  return (
    <section className="bg-[#1053f3] min-h-[862px] w-full relative overflow-hidden flex justify-center">
      {/* Background pattern from Figma */}
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

      {/* Decorative color blobs */}
      <div className="absolute pointer-events-none" style={{
        left: "-5%", top: "10%",
        width: 400, height: 400, borderRadius: "50%",
        background: "rgba(255,255,255,0.06)",
        filter: "blur(100px)",
      }} />
      <div className="absolute pointer-events-none" style={{
        right: "-5%", bottom: "10%",
        width: 380, height: 380, borderRadius: "50%",
        background: "rgba(76,106,255,0.18)",
        filter: "blur(90px)",
      }} />

      <div className="relative max-w-[1440px] mx-auto w-full px-[120px] py-[63px]">
        <motion.h2
          className="text-white text-[40px] leading-[1.3] tracking-[-1px] text-center mx-auto mb-[50px]"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, maxWidth: 689 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Focused on Indonesia, Ready for Expansion
        </motion.h2>

        <motion.div
          className="w-full h-[452px] mb-[48px]"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={imgMap} alt="Indonesia Map" className="w-full h-full object-cover" />
        </motion.div>

        {/* Stats row — evenly distributed across the full width */}
        <div className="flex justify-between items-start">
          {globalStats.map((s, i) => (
            <motion.div
              key={s.value}
              className="flex flex-col gap-[4px] max-w-[240px]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="text-white text-[36px] leading-[46px]"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
                {s.value}
              </p>
              <p className="text-white text-[16px] leading-[26px]"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
