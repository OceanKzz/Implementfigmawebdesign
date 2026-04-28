import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BadgeCheck, Building2, ChevronDown, Globe2, Mail, UserCircle, X } from "lucide-react";
import svgPaths from "../../imports/svg-9vm3i7iyp0";
import { buildUserInfoPayload, submitUserInfo } from "./LeadFormValidation";

const registerModalEvent = "jalurpay:open-register-modal";

export function openRegisterModal() {
  window.dispatchEvent(new Event(registerModalEvent));
}

function WhiteLogo() {
  return (
    <svg width="128" height="50" viewBox="0 0 171 66" fill="none" aria-hidden="true">
      <path d={svgPaths.p8a54600} fill="white" />
      <path d={svgPaths.p55d0500} fill="white" />
      <path d={svgPaths.p3c2f480} fill="white" />
      <path d={svgPaths.p119ab780} fill="white" />
      <path d={svgPaths.p35178900} fill="white" />
      <path d={svgPaths.p1cf13300} fill="white" />
      <path d={svgPaths.p5183a00} fill="white" />
      <path d={svgPaths.p10a54700} fill="white" />
      <path d={svgPaths.p35373e80} fill="white" />
      <path d={svgPaths.p29c69c00} fill="white" />
    </svg>
  );
}

function FieldLabel({ children }: { children: string }) {
  return (
    <label
      className="text-[12px] font-bold leading-[1.5] text-[#757b8a]"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {children}
    </label>
  );
}

interface FieldProps {
  icon: typeof Mail;
  label: string;
  type?: string;
}

function TextField({ icon: Icon, label, type = "text" }: FieldProps) {
  return (
    <div className="flex h-[52px] items-center gap-2 rounded-[12px] bg-[#f5f5f7] px-4 text-[#1f2a44]">
      <Icon size={20} strokeWidth={2} />
      <input
        aria-label={label}
        className="min-w-0 flex-1 bg-transparent text-[16px] font-medium leading-[1.5] text-[#101010] outline-none placeholder:text-[#757b8a]"
        placeholder={label}
        required
        type={type}
        style={{ fontFamily: "Inter, sans-serif" }}
      />
    </div>
  );
}

interface RegisterModalProps {
  open: boolean;
  onClose: () => void;
}

export function RegisterModal({ open, onClose }: RegisterModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      setSubmitError(false);
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, open]);

  const submitRegistration = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError(false);

    try {
      await submitUserInfo(buildUserInfoPayload(event.currentTarget));
      event.currentTarget.reset();
      setSubmitted(true);
    } catch {
      setSubmitError(true);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/20 px-4 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="register-modal-title"
        >
          <motion.div
            className="relative w-full max-w-[478px] overflow-hidden rounded-[20px] bg-white shadow-[0_28px_80px_rgba(16,83,243,0.18)]"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <div className="relative flex h-[81px] items-center justify-between bg-gradient-to-r from-[#75aaf8] to-[#1053f3] px-[22px] pr-[58px]">
              <h2
                id="register-modal-title"
                className="capitalize text-[20px] font-bold leading-[1.32] text-white"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                <span className="block">Join In</span>
                <span className="block">Jalur Pay</span>
              </h2>
              <WhiteLogo />
              <button
                type="button"
                aria-label="Close register dialog"
                onClick={onClose}
                className="absolute right-[14px] top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full text-white/85 transition-colors hover:bg-white/16 hover:text-white focus:bg-white/16 focus:outline-none focus:ring-2 focus:ring-white/60"
              >
                <X size={20} strokeWidth={2.4} />
              </button>
            </div>

            {submitted ? (
              <div className="flex min-h-[533px] flex-col items-center px-[25px] pb-[68px] pt-[92px] text-center">
                <div className="flex size-[110px] items-center justify-center rounded-full bg-gradient-to-br from-[#4aa4f4] to-[#1d63f3] text-white shadow-[0_12px_26px_rgba(16,83,243,0.22)]">
                  <BadgeCheck size={74} strokeWidth={2.8} />
                </div>
                <p
                  className="mt-[10px] text-[20px] font-medium leading-[1.5] text-black"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Submit successfully
                </p>
                <p
                  className="mt-[12px] max-w-[409px] text-[14px] font-normal leading-[1.5] text-[#8e8e93]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Customer service will send the login information and link to your email
                </p>
                <button
                  className="mt-[56px] flex h-[52px] w-full items-center justify-center rounded-[12px] bg-[#1053f3] px-8 text-[16px] font-bold leading-[1.5] text-white transition-colors hover:bg-[#0d44d4]"
                  type="button"
                  onClick={onClose}
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Back to Home
                </button>
              </div>
            ) : (
              <form className="flex min-h-[533px] flex-col px-[25px] pb-[26px] pt-[28px]" onSubmit={submitRegistration}>
                <div className="flex flex-col gap-[6px]">
                  <FieldLabel>E-mail</FieldLabel>
                  <TextField icon={Mail} label="E-mail" type="email" />
                </div>

                <div className="mt-[22px] grid grid-cols-1 gap-[12px] sm:grid-cols-2">
                  <div className="flex flex-col gap-[6px]">
                    <FieldLabel>Name</FieldLabel>
                    <TextField icon={UserCircle} label="Name" />
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <FieldLabel>Company</FieldLabel>
                    <TextField icon={Building2} label="Company" />
                  </div>
                </div>

                <div className="mt-[22px] flex flex-col gap-[6px]">
                  <FieldLabel>Country</FieldLabel>
                  <div className="relative flex h-[52px] items-center gap-2 rounded-[12px] border border-[#f5f5f7] bg-white px-4 text-[#1f2a44]">
                    <Globe2 size={20} strokeWidth={2} />
                    <select
                      aria-label="Country"
                      className="min-w-0 flex-1 appearance-none bg-transparent text-[16px] font-medium leading-[1.5] text-[#757b8a] outline-none"
                      defaultValue=""
                      required
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      <option value="" disabled>
                        Country
                      </option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Philippines">Philippines</option>
                    </select>
                    <ChevronDown className="pointer-events-none text-[#101010]" size={20} strokeWidth={2} />
                  </div>
                </div>

                <button
                  className="mt-[48px] flex h-[52px] w-full items-center justify-center rounded-[12px] bg-[#1053f3] px-8 text-[16px] font-bold leading-[1.5] text-white transition-colors hover:bg-[#0d44d4]"
                  type="submit"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  Submit
                </button>

                <div className="min-h-[20px]">
                  {submitError && (
                    <p className="mt-2 text-[13px] font-semibold leading-[20px] text-[#d92d20]" style={{ fontFamily: "Inter, sans-serif" }}>
                      Submission failed. Please try again.
                    </p>
                  )}
                </div>

                <p
                  className="mt-[4px] text-[14px] font-normal leading-[1.5] text-[#8e8e93]"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  After submitting the information, the customer service will send the{" "}
                  <span className="text-[#1053f3]">login information</span> and{" "}
                  <span className="text-[#1053f3]">link</span> to your email
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
