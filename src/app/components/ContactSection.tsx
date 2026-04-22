import { useState } from "react";
import { motion } from "motion/react";
import svgPaths from "../../imports/svg-9vm3i7iyp0";

const inputClass =
  "rounded-[52px] border border-[#1053f3] px-[14px] text-[14px] outline-none focus:ring-2 focus:ring-[#1053f3]/30 transition h-[42px] w-full";
const labelClass = "text-[#1a1a1a] text-[14px] leading-[26px] tracking-[0.14px]";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", source: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="bg-[#f7f9ff] w-full relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <svg className="size-full" viewBox="0 0 1440 697" fill="none">
          <path d={svgPaths.p2b2e7f00} fill="#004DA8" />
          <path d={svgPaths.p305d6c00} fill="#004DA8" />
          <path d={svgPaths.pb6ad000}  fill="#004DA8" />
        </svg>
      </div>

      {/* Blobs */}
      <div className="absolute pointer-events-none" style={{ left: "5%", top: "-10%", width: 400, height: 400, borderRadius: "50%", background: "rgba(16,83,243,0.06)", filter: "blur(110px)" }} />
      <div className="absolute pointer-events-none" style={{ right: "3%", bottom: "-5%", width: 350, height: 350, borderRadius: "50%", background: "rgba(76,106,255,0.07)", filter: "blur(100px)" }} />
      <div className="absolute pointer-events-none" style={{ right: "15%", top: "5%", width: 320, height: 320, borderRadius: "50%", background: "rgba(250,204,21,0.07)", filter: "blur(120px)" }} />
      <div className="absolute pointer-events-none" style={{ left: "30%", bottom: "0%", width: 300, height: 300, borderRadius: "50%", background: "rgba(235,110,70,0.07)", filter: "blur(110px)" }} />
      <div className="absolute pointer-events-none" style={{ left: "55%", top: "30%", width: 240, height: 240, borderRadius: "50%", background: "rgba(16,83,243,0.05)", filter: "blur(90px)" }} />
      <div className="absolute pointer-events-none" style={{ left: "0%", bottom: "10%", width: 200, height: 200, borderRadius: "50%", background: "rgba(76,106,255,0.07)", filter: "blur(80px)" }} />

      <div className="relative max-w-[1440px] mx-auto w-full px-6 lg:px-[233px] flex flex-col lg:flex-row gap-10 lg:gap-[72px] items-start lg:items-center justify-center py-16 lg:py-[85px]">

        {/* Left */}
        <motion.div
          className="flex flex-col gap-8 lg:gap-[72px] w-full lg:w-auto"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
        >
          <h2
            className="text-[#1a1a1a] text-[28px] lg:text-[36px] leading-[1.3] lg:leading-[46px] tracking-[-0.36px] lg:w-[410px]"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
          >
            Anything unclear or need some help? Relax, we are 24/7 for you
          </h2>

          <div className="flex flex-col gap-[22px] lg:gap-[27px]">
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d={svgPaths.p30339100} fill="white" />
                    <path d={svgPaths.p365a7900} fill="white" />
                  </svg>
                ),
                text: "Customize the right solution for your business",
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d={svgPaths.p36547500} fill="white" />
                  </svg>
                ),
                text: "Professional customer service staff will answer your questions",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex gap-[13px] items-center"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
              >
                <div className="bg-[#1053f3] rounded-full size-[41px] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <p className="text-[14px] text-black leading-[23px] tracking-[-0.14px] lg:w-[278px]"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}>
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white border border-[#e3e3e3] rounded-[24px] w-full lg:w-[464px] lg:shrink-0 px-5 lg:px-[31px] py-6 lg:py-[24px] flex flex-col gap-[18px] lg:gap-[20px]"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col gap-[6px] flex-1">
              <label className={labelClass} style={{ fontFamily: "Poppins, sans-serif" }}>Name</label>
              <input name="name" value={form.name} onChange={handleChange}
                className={inputClass} style={{ fontFamily: "Poppins, sans-serif" }} />
            </div>
            <div className="flex flex-col gap-[6px] flex-1">
              <label className={labelClass} style={{ fontFamily: "Poppins, sans-serif" }}>Corporate email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange}
                className={inputClass} style={{ fontFamily: "Poppins, sans-serif" }} />
            </div>
          </div>

          <div className="flex flex-col gap-[6px]">
            <label className={labelClass} style={{ fontFamily: "Poppins, sans-serif" }}>Where did you hear about us?</label>
            <input name="source" value={form.source} onChange={handleChange}
              className={inputClass} style={{ fontFamily: "Poppins, sans-serif" }} />
          </div>

          <div className="flex flex-col gap-[6px]">
            <label className={labelClass} style={{ fontFamily: "Poppins, sans-serif" }}>Phone</label>
            <input name="phone" type="tel" value={form.phone} onChange={handleChange}
              className={inputClass} style={{ fontFamily: "Poppins, sans-serif" }} />
          </div>

          <div className="flex flex-col gap-[6px]">
            <label className={labelClass} style={{ fontFamily: "Poppins, sans-serif" }}>How can we help you?</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows={4}
              className="w-full rounded-[18px] border border-[#1053f3] px-[14px] py-[10px] text-[14px] resize-none outline-none focus:ring-2 focus:ring-[#1053f3]/30 transition"
              style={{ fontFamily: "Poppins, sans-serif" }} />
          </div>

          <motion.button
            type="submit"
            className="bg-[#1053f3] text-white text-[17px] h-[43px] px-[32px] rounded-[32px] self-start relative overflow-hidden"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
            whileHover={{ scale: 1.04, backgroundColor: "#0d44d4" }}
            whileTap={{ scale: 0.97 }}
          >
            {sent ? "✓ Sent!" : "Send"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
