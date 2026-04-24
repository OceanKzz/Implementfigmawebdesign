import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, X } from "lucide-react";

const submitSuccessEvent = "jalurpay:open-submit-success-modal";

export function openSubmitSuccessModal() {
  window.dispatchEvent(new Event(submitSuccessEvent));
}

export function submitSuccessModalEventName() {
  return submitSuccessEvent;
}

interface SubmitSuccessModalProps {
  open: boolean;
  onClose: () => void;
}

export function SubmitSuccessModal({ open, onClose }: SubmitSuccessModalProps) {
  useEffect(() => {
    if (!open) return;

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

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-[#0b1534]/35 px-4 py-8 backdrop-blur-[3px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="submit-success-title"
        >
          <motion.div
            className="relative w-full max-w-[420px] overflow-hidden rounded-[24px] border border-[#dfe7ff] bg-white px-8 pb-8 pt-10 text-center shadow-[0_28px_80px_rgba(16,83,243,0.22)]"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            <button
              type="button"
              aria-label="Close success dialog"
              onClick={onClose}
              className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full text-[#757b8a] transition-colors hover:bg-[#f2f5ff] hover:text-[#1053f3]"
            >
              <X size={20} strokeWidth={2} />
            </button>

            <div className="mx-auto flex size-[96px] items-center justify-center rounded-full bg-[#e8efff] text-[#1053f3]">
              <div className="flex size-[72px] items-center justify-center rounded-full bg-[#1053f3] text-white shadow-[0_14px_30px_rgba(16,83,243,0.28)]">
                <CheckCircle2 size={42} strokeWidth={2.7} />
              </div>
            </div>

            <h2
              id="submit-success-title"
              className="mt-6 text-[24px] font-semibold leading-[1.3] text-[#101010]"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Submit successfully
            </h2>
            <p
              className="mx-auto mt-3 max-w-[310px] text-[15px] leading-[1.6] text-[#757b8a]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Thanks for reaching out. Our customer service team will contact you shortly.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="mt-7 flex h-[48px] w-full items-center justify-center rounded-[12px] bg-[#1053f3] px-6 text-[16px] font-bold text-white transition-colors hover:bg-[#0d44d4]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Back to Home
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
