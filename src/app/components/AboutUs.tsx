import { motion } from "motion/react";
import imgCreditCardMockup from "figma:asset/d611d324fb27016cbeedb04e867db1df6debf6c5.png";
import svgPaths from "../../imports/svg-9vm3i7iyp0";

/* ─────────────────────────────────────────────────────────────────────────────
   Card dimensions (pre-transform), derived from the Figma hypot calculation:
     container: 436.808 × 252.18 px per slot
     width  = hypot(62.4506% × 436.808, 62.4506% × 252.18) ≈ 315 px
     height = hypot(37.5494% × 436.808, 37.5494% × 252.18) ≈ 189 px
   Transform order matches Tailwind v4: rotate THEN skew (CSS right-to-left),
   so visually: skewX is applied first, rotate second.
───────────────────────────────────────────────────────────────────────────── */
const CARD_W = 315;
const CARD_H = 189;
const CARD_TRANSFORM = "rotate(30deg) skewX(-30deg)";

/* ── Shared sub-components ── */

function PayPass({ pathD }: { pathD: string }) {
  return (
    <div className="absolute" style={{ width: 19.936, height: 23.923, right: 19, top: 19 }}>
      <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 19.9356 23.9228">
        <defs><clipPath id="pp-clip"><rect fill="white" height="23.9228" width="19.9356" /></clipPath></defs>
        <path d={pathD} stroke="white" strokeLinecap="round" strokeWidth="2.56315" clipPath="url(#pp-clip)" />
      </svg>
    </div>
  );
}

function MastercardBadge({
  left, right, middle, colored = false,
}: { left: string; right: string; middle: string; colored?: boolean }) {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] rounded-[3.987px]"
      style={{ left: 253, top: 140, width: 45.187, height: 31.897 }}>
      <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 29.7149 17.8097">
        <path d={left}   fill={colored ? "#ED2828" : "white"} opacity={colored ? 1 : 0.5} />
        <path d={right}  fill={colored ? "#FFC046" : "white"} opacity={colored ? 1 : 0.5} />
        <path d={middle} fill={colored ? "#ED2828" : "white"} />
      </svg>
    </div>
  );
}

function CardLabel({ name, left = 15, topName = 126, topNum = 150 }: { name: string; left?: number; topName?: number; topNum?: number }) {
  return (
    <>
      <p className="absolute whitespace-nowrap uppercase"
        style={{ fontFamily: "Manrope, sans-serif", fontWeight: 600, fontSize: 11.961, color: "white", letterSpacing: 0.5981, left, top: topName }}>
        {name}
      </p>
      <p className="absolute whitespace-nowrap"
        style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 15.949, color: "white", left: 19, top: 19 }}>
        Untitled.
      </p>
      <p className="absolute whitespace-nowrap"
        style={{ fontFamily: "Manrope, sans-serif", fontWeight: 600, fontSize: 15.949, color: "white", letterSpacing: 2.3923, left, top: topNum }}>
        1234 1234 1234 1234
      </p>
      <p className="absolute whitespace-nowrap"
        style={{ fontFamily: "Manrope, sans-serif", fontWeight: 600, fontSize: 11.961, color: "white", letterSpacing: 0.5981, right: 14, top: topName }}>
        06/24
      </p>
    </>
  );
}

/* ── Card 0 — bottom (photo background) ── */
function CardPhoto() {
  return (
    <div className="relative rounded-[19.936px] size-full overflow-hidden">
      <img alt="card" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCreditCardMockup} />
      <div className="overflow-hidden relative size-full">
        <MastercardBadge left={svgPaths.p3b17edf0} right={svgPaths.p727400} middle={svgPaths.p3e178df2} colored />
        <CardLabel name="Phoenix Baker" left={16} topName={127} topNum={151} />
        <PayPass pathD={svgPaths.p1f1ce100} />
      </div>
      <div aria-hidden className="absolute border-[0.997px] border-white inset-0 pointer-events-none rounded-[19.936px] shadow-[7.974px_9.968px_15.949px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

/* ── Card 1 — glass/frosted (OLIVIA RHYE) ── */
function CardGlass1() {
  return (
    <div className="overflow-hidden relative rounded-[19.936px] border-[0.997px] border-white shadow-[7.974px_9.968px_15.949px_0px_rgba(0,0,0,0.05)] size-full"
      style={{ backdropFilter: "blur(5.981px)", backgroundImage: "linear-gradient(125.102deg, rgba(255,255,255,0.51) 3.5118%, rgba(255,255,255,0) 111.71%)" }}>
      <MastercardBadge left={svgPaths.p49ba00} right={svgPaths.p347b5b00} middle={svgPaths.p18875580} />
      <CardLabel name="OLIVIA RHYE" />
      <PayPass pathD={svgPaths.p114bc80} />
    </div>
  );
}

/* ── Card 2 — solid blue (Lana Steiner) ── */
function CardBlue() {
  return (
    <div className="bg-[#1053f3] overflow-hidden relative rounded-[19.936px] border-[0.997px] border-white shadow-[7.974px_9.968px_15.949px_0px_rgba(0,0,0,0.05)] size-full">
      {/* Colored mastercard */}
      <div className="absolute bg-[rgba(255,255,255,0.1)] rounded-[3.987px]"
        style={{ left: 253, top: 140, width: 45.187, height: 31.897 }}>
        <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 29.7149 17.8097">
          <path d={svgPaths.p7ec6b80} fill="#ED2828" />
          <path d={svgPaths.p78c8100} fill="#FFC046" />
          <path d={svgPaths.p34080400} fill="#ED2828" />
        </svg>
      </div>
      <CardLabel name="Lana Steiner" />
      <PayPass pathD={svgPaths.p2290a748} />
    </div>
  );
}

/* ── Card 3 — glass with gradient blob (Demi Wilkinson) ── */
function CardGlass2() {
  return (
    <div className="overflow-hidden relative rounded-[19.936px] border-[0.997px] border-white shadow-[7.974px_9.968px_15.949px_0px_rgba(0,0,0,0.05)] size-full"
      style={{ backdropFilter: "blur(5.981px)", backgroundImage: "linear-gradient(125.102deg, rgba(255,255,255,0.51) 3.5118%, rgba(255,255,255,0) 111.71%)" }}>
      {/* Colorful gradient blob */}
      <div className="absolute" style={{ left: -16.95, top: -16.95, width: 159.485, height: 159.485 }}>
        <div className="absolute" style={{ inset: "-80%" }}>
          <svg className="block size-full" fill="none" viewBox="0 0 414.661 414.661">
            <defs>
              <filter id="f-blob" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" x="0" y="0" width="414.661" height="414.661">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1" stdDeviation="63.794" />
              </filter>
            </defs>
            <g filter="url(#f-blob)">
              <path d={svgPaths.p26bcbc80} fill="#EE46BC" opacity="0.3" />
              <path d={svgPaths.p2cd0f300} fill="#EF6820" opacity="0.3" />
              <path d={svgPaths.p398a8980} fill="#2E90FA" opacity="0.3" />
              <path d={svgPaths.p2c392180} fill="#12B76A" opacity="0.3" />
            </g>
          </svg>
        </div>
      </div>
      <MastercardBadge left={svgPaths.p6a13600} right={svgPaths.p9a71000} middle={svgPaths.p38c31f00} />
      <CardLabel name="Demi Wilkinson" />
      <PayPass pathD={svgPaths.p389bc080} />
    </div>
  );
}

/* ── Shadow (bottom layer) ── */
function CardShadow() {
  return <div className="bg-[#101010] size-full" style={{ borderRadius: 16.784, filter: "blur(13.427px)", opacity: 0.15 }} />;
}

/*
  5 card layers, each occupying an "inset" strip of the 436.808 × 467 container.
  The inner div is CARD_W × CARD_H with the skew+rotate applied.
  All slot heights = 54% × 467 ≈ 252 px (so the hypot values are the same for every card).
*/
const SLOTS: Array<{ inset: [string, string, string, string]; content: React.ReactNode }> = [
  { inset: ["46%",   "0",     "0",     "0"    ], content: <CardShadow /> },
  { inset: ["34.5%", "0",     "11.5%", "0"    ], content: <CardPhoto /> },
  { inset: ["23%",   "0",     "23%",   "0"    ], content: <CardGlass1 /> },
  { inset: ["11.5%", "0",     "34.5%", "0"    ], content: <CardBlue /> },
  { inset: ["0",     "0",     "46%",   "0"    ], content: <CardGlass2 /> },
];

function CreditCardStack() {
  return (
    <div className="relative shrink-0" style={{ width: 436.808, height: 467 }}>
      {SLOTS.map(({ inset, content }, i) => (
        <div
          key={i}
          className="absolute flex items-center justify-center"
          style={{
            top:    inset[0],
            right:  inset[1],
            bottom: inset[2],
            left:   inset[3],
          }}
        >
          <div
            className="flex-none overflow-visible"
            style={{
              width:     CARD_W,
              height:    CARD_H,
              transform: CARD_TRANSFORM,
            }}
          >
            {content}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─── Section ─── */
export function AboutUs() {
  return (
    <section className="bg-white min-h-[678px] w-full relative overflow-hidden flex items-center justify-center">
      {/* Decorative blue glow top-right */}
      <div className="absolute pointer-events-none" style={{
        right: "-3%", top: "0",
        width: 580, height: 580, borderRadius: "50%",
        background: "rgba(215,227,255,0.7)", filter: "blur(160px)",
      }} />
      {/* Warm peach blob bottom-left */}
      <div className="absolute pointer-events-none" style={{
        left: "-2%", bottom: "0",
        width: 300, height: 300, borderRadius: "50%",
        background: "rgba(235,110,70,0.05)",
        filter: "blur(80px)",
      }} />

      <div className="max-w-[1440px] mx-auto w-full px-[171px] flex gap-[175px] items-center py-[122px]">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.02 }}
        >
          <CreditCardStack />
        </motion.div>

        {/* Right */}
        <motion.div
          className="flex flex-col gap-[80px]"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="flex flex-col gap-[16px]">
            <h2 className="text-[#101010] text-[40px] leading-[1.3] tracking-[-1px] w-[486px]"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}>
              Built for Reliable Transactions at Scale
            </h2>
            <p className="text-[#757b8a] text-[16px] leading-[1.6] w-[409px]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
              High success rates powered by multiple payment channels, ensuring
              stable and seamless transactions across Indonesia.
            </p>
          </div>

          <div className="flex gap-[16px] items-center">
            <div className="bg-[#1053f3] rounded-[13px] size-[46px] flex items-center justify-center shrink-0 overflow-hidden">
              <svg width="28" height="33" viewBox="0 0 28 33" fill="none">
                <defs><clipPath id="c-safe"><rect width="28" height="33" fill="white" /></clipPath></defs>
                <path d={svgPaths.p1448c7e0} fill="white" clipPath="url(#c-safe)" />
                <path d={svgPaths.p2c755d00} fill="#0328EE" clipPath="url(#c-safe)" />
              </svg>
            </div>
            <p className="text-[#101010] text-[16px] leading-[1.3] w-[272px]"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}>
              Transferring is very easy and super fast. Perfect payment app for all
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}