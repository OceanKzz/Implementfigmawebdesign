import { FormEvent, useState } from "react";
import { openSubmitSuccessModal } from "./SubmitSuccessModal";

export const leadFormButtonClass =
  "inline-flex h-[43px] items-center justify-center rounded-[32px] bg-[#1053f3] px-[32px] text-[17px] font-semibold text-white transition-colors hover:bg-[#0d44d4]";

export function useLeadFormValidation() {
  const [showIncompleteMessage, setShowIncompleteMessage] = useState(false);

  const submitLeadForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fields = Array.from(
      event.currentTarget.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
        "input, textarea, select",
      ),
    ).filter((field) => !field.disabled);
    const hasEmptyField = fields.some((field) => field.value.trim() === "");

    if (hasEmptyField) {
      setShowIncompleteMessage(true);
      return;
    }

    setShowIncompleteMessage(false);
    openSubmitSuccessModal();
  };

  return { showIncompleteMessage, submitLeadForm };
}

export function LeadFormMessage({ show }: { show: boolean }) {
  return (
    <div className="min-h-[20px] -mb-3">
      {show && (
        <p className="text-[13px] font-semibold leading-[20px] text-[#d92d20]" style={{ fontFamily: "Inter, sans-serif" }}>
          Please complete the form before sending.
        </p>
      )}
    </div>
  );
}
