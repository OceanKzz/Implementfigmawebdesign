import { motion } from "motion/react";

interface StatCardProps {
  value: string;
  label1: string;
  label2: string;
  delay: number;
}

function StatCard({ value, label1, label2, delay }: StatCardProps) {
  return (
    <motion.div
      className="card-feature flex flex-col gap-[16px] items-start p-[24px] rounded-[16px] border border-[#ededed] cursor-default"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      whileHover={{
        scale: 1.04,
        boxShadow: "0 8px 32px 0 rgba(16,83,243,0.12)",
        borderColor: "#1053f3",
      }}
    >
      <p
        className="text-[#101010] text-[40px] leading-[1.3] tracking-[-1px]"
        style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
      >
        {value}
      </p>
      <p
        className="text-[#757b8a] text-[16px] leading-[1.5] w-[273px]"
        style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
      >
        {label1}
        <br />
        {label2}
      </p>
    </motion.div>
  );
}

const stats = [
  { value: "99%",  label1: "High success rate",          label2: "for every transaction" },
  { value: "24/7", label1: "Always-on processing",       label2: "with real-time response" },
  { value: "10+",  label1: "Supported channels",         label2: "across Indonesia" },
];

export function StatisticSection() {
  return (
    <section className="bg-white min-h-[484px] w-full flex items-center justify-center relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute pointer-events-none" style={{
        left: "-4%", top: "0%",
        width: 380, height: 380, borderRadius: "50%",
        background: "rgba(16,83,243,0.05)",
        filter: "blur(100px)",
      }} />
      <div className="absolute pointer-events-none" style={{
        right: "-2%", bottom: "0%",
        width: 320, height: 320, borderRadius: "50%",
        background: "rgba(76,106,255,0.06)",
        filter: "blur(90px)",
      }} />
      <div className="max-w-[1440px] mx-auto w-full px-[148px] flex flex-col gap-[56px] items-center py-[80px]">
        <motion.h2
          className="text-[#101010] text-[40px] leading-[1.3] tracking-[-1px] text-center w-[689px]"
          style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          Your funds will be in your account within seconds.
        </motion.h2>
        <div className="flex gap-[89px] items-start">
          {stats.map((s, i) => (
            <StatCard key={s.value} {...s} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}