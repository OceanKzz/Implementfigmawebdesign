import { motion } from "motion/react";
import svgPaths from "../../imports/svg-9vm3i7iyp0";

const brands = [
  {
    name: "BCA",
    width: 157,
    height: 46,
    viewBox: "0 0 157.234 46.4521",
    paths: [
      svgPaths.p2832b180, svgPaths.p2535abc0, svgPaths.p228d7100,
      svgPaths.p43a8a40,  svgPaths.p153f8e80, svgPaths.p153bd8c0,
      svgPaths.p3b07e60,  svgPaths.p3905caf0, svgPaths.p310ef9a0,
      svgPaths.p3f4b7400, svgPaths.pc578680,  svgPaths.p1c259980,
      svgPaths.p1dc4f380, svgPaths.p38063200, svgPaths.p1fe13300,
      svgPaths.p314e8580,
    ],
  },
  {
    name: "BRI",
    width: 191,
    height: 45,
    viewBox: "0 0 190.684 45.2939",
    paths: [
      svgPaths.p2ed31fb0, svgPaths.p1a83b500, svgPaths.p27b28080,
      svgPaths.p1dc8aff0, svgPaths.p25bac080, svgPaths.p35e95c00,
      svgPaths.p38f8c980, svgPaths.p2cc15a00,
    ],
  },
  {
    name: "Mandiri",
    width: 157,
    height: 47,
    viewBox: "0 0 156.56 47.1943",
    paths: [
      svgPaths.p24b0a880, svgPaths.p25c6b100, svgPaths.p14585e00,
      svgPaths.p29352100, svgPaths.p1f35b700, svgPaths.p18a78000,
      svgPaths.pfbf680,   svgPaths.p2cda4800,
    ],
  },
  {
    name: "DANA",
    width: 160,
    height: 47,
    viewBox: "0 0 160.258 47.1943",
    paths: [svgPaths.pd8c4f80],
  },
  {
    name: "OVO",
    width: 109,
    height: 36,
    viewBox: "0 0 108.67 35.6212",
    paths: [svgPaths.p63ab800],
  },
];

export function BrandsBar() {
  return (
    <section className="bg-[#1053f3] w-full relative overflow-hidden flex items-center justify-center py-8 lg:h-[172px] lg:py-0">
      {/* Blobs */}
      <div className="absolute pointer-events-none" style={{ left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 600, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.06)", filter: "blur(60px)" }} />
      <div className="absolute pointer-events-none" style={{ left: "-4%", top: "0%", width: 280, height: 280, borderRadius: "50%", background: "rgba(255,255,255,0.05)", filter: "blur(70px)" }} />
      <div className="absolute pointer-events-none" style={{ right: "-3%", bottom: "-10%", width: 260, height: 260, borderRadius: "50%", background: "rgba(76,106,255,0.25)", filter: "blur(65px)" }} />
      <div className="absolute pointer-events-none" style={{ left: "35%", top: "-20%", width: 200, height: 200, borderRadius: "50%", background: "rgba(250,204,21,0.06)", filter: "blur(55px)" }} />
      <div className="absolute pointer-events-none" style={{ right: "25%", bottom: "-15%", width: 180, height: 180, borderRadius: "50%", background: "rgba(235,110,70,0.08)", filter: "blur(50px)" }} />

      <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-[120px] flex items-center justify-center">
        <motion.div
          className="flex flex-wrap gap-8 lg:gap-[91px] items-center justify-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {brands.map((brand) => (
            <motion.div
              key={brand.name}
              className="shrink-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08, opacity: 0.85 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <svg
                width={brand.width * 0.75}
                height={brand.height * 0.75}
                viewBox={brand.viewBox}
                fill="none"
                className="lg:w-auto lg:h-auto"
                style={{ width: brand.width, height: brand.height }}
              >
                {brand.paths.map((d, i) => (
                  <path key={i} d={d} fill="white" fillRule="evenodd" clipRule="evenodd" />
                ))}
              </svg>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
