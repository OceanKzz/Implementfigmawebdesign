import { motion } from "motion/react";
import { Banknote, Shield, Zap } from "lucide-react";
import imgImage1 from "figma:asset/b64dc1c924948ddcda3a717d66e99bb0cd0754ee.png";
import imgAvatar from "figma:asset/1edc9c1cecaecb0afaf338bd8f187f2b9376e5f0.png";

const features = [
  {
    Icon: Zap,
    title: "Faster ways to make transactions",
    desc: "The transaction can be completed in just a few seconds",
  },
  {
    Icon: Shield,
    title: "Payments can be made securely",
    desc: "Online payments are easier to process, give you more information online, and make processing faster.",
  },
  {
    Icon: Banknote,
    title: "Alternate sources of currency",
    desc: "If you don't have time for checkout lines, online payments make it easy to whip out your credit or debit card.",
  },
];

export function ValueSection() {
  return (
    <section className="bg-white w-full relative overflow-hidden flex items-center justify-center">
      {/* Blobs */}
      <div className="absolute pointer-events-none" style={{ right: "-4%", top: "5%", width: 420, height: 420, borderRadius: "50%", background: "rgba(16,83,243,0.05)", filter: "blur(110px)" }} />
      <div className="absolute pointer-events-none" style={{ left: "30%", bottom: "-8%", width: 360, height: 360, borderRadius: "50%", background: "rgba(250,204,21,0.07)", filter: "blur(90px)" }} />
      <div className="absolute pointer-events-none" style={{ left: "-3%", top: "0%", width: 380, height: 380, borderRadius: "50%", background: "rgba(235,110,70,0.06)", filter: "blur(130px)" }} />
      <div className="absolute pointer-events-none" style={{ right: "20%", bottom: "5%", width: 300, height: 300, borderRadius: "50%", background: "rgba(76,106,255,0.07)", filter: "blur(110px)" }} />
      <div className="absolute pointer-events-none" style={{ left: "50%", top: "5%", width: 260, height: 260, borderRadius: "50%", background: "rgba(250,204,21,0.06)", filter: "blur(100px)" }} />
      <div className="absolute pointer-events-none" style={{ left: "15%", bottom: "10%", width: 220, height: 220, borderRadius: "50%", background: "rgba(16,83,243,0.05)", filter: "blur(85px)" }} />

      <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-[120px] flex flex-col lg:flex-row justify-between gap-12 lg:gap-[60px] py-16 lg:py-[80px]">

        {/* Left: Heading + image */}
        <motion.div
          className="flex flex-col gap-[16px] w-full lg:max-w-[571px]"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
        >
          <h2
            className="text-[#101010] text-[28px] lg:text-[40px] leading-[1.3] tracking-[-1px]"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
          >
            Jalur Pay provides the best value for you
          </h2>
          <div className="text-[#757b8a] text-[16px] leading-[1.6]"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
            <p>We always ready to help by providing the best service in</p>
            <p>the filed of finance for you good finance provides a better life</p>
          </div>

          <div className="relative mt-[24px] lg:mt-[32px]">
            <div className="w-full lg:w-[490px] h-[220px] sm:h-[280px] lg:h-[318px] rounded-[16px] overflow-hidden">
              <img src={imgImage1} alt="App feature" className="w-full h-full object-cover rounded-[16px]" />
            </div>
            {/* Floating payment badge */}
            <motion.div
              className="absolute bottom-[-16px] right-2 lg:right-[60px] bg-white flex gap-4 lg:gap-[30px] items-center p-3 lg:p-[16px] rounded-[16px] shadow-[20px_40px_80px_0px_rgba(45,51,81,0.12)]"
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              animate={{ y: [0, -6, 0] }}
              transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 0.55, delay: 0.4 } }}
            >
              <div className="flex gap-[8px] items-center">
                <div className="size-[36px] lg:size-[40px] rounded-full overflow-hidden border-[1.3px] border-white">
                  <img src={imgAvatar} alt="avatar" className="size-full object-cover" />
                </div>
                <div className="flex flex-col gap-[3px]">
                  <p className="text-[#1053f3] text-[16px] lg:text-[20px]"
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
                    Jalur Pay
                  </p>
                  <p className="text-[#757b8a] text-[12px] lg:text-[14px]"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
                    Mastercard ~ 0259
                  </p>
                </div>
              </div>
              <p className="text-[#101010] text-[13px] lg:text-[14px]"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>
                Rp.484390
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Feature list */}
        <div className="flex flex-col gap-4 lg:gap-[24px] lg:pt-[69px] w-full lg:max-w-[480px]">
          {features.map((feat, i) => {
            const Icon = feat.Icon;

            return (
            <motion.div
              key={feat.title}
              className="flex gap-[20px] lg:gap-[24px] items-start px-4 lg:px-[24px] py-4 lg:py-[18px]"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.14 }}
            >
              <motion.div
                className="bg-[#101010] rounded-full size-[48px] lg:size-[56px] flex items-center justify-center shrink-0"
                whileHover={{ scale: 1.12, backgroundColor: "#1053f3" }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <Icon className="size-[24px] text-white" strokeWidth={2.2} />
              </motion.div>
              <div className="flex flex-col gap-[12px] lg:gap-[16px]">
                <p className="text-[#101010] text-[16px] leading-[1.5]"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}>
                  {feat.title}
                </p>
                <p className="text-[#757b8a] text-[14px] leading-[1.5] lg:max-w-[360px]"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}>
                  {feat.desc}
                </p>
              </div>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}
