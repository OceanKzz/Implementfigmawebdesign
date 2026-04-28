import { FormEvent, useState } from "react";
import { openSubmitSuccessModal } from "./SubmitSuccessModal";

type UserInfoPayload = {
  aboutAs: string;
  company: string;
  companyIndustry: string;
  email: string;
  message: string;
  phone: string;
  useCountries: string;
  userName: string;
};

const userInfoEndpoint = "/jalurpay/userInfo/add";

const emptyUserInfoPayload: UserInfoPayload = {
  aboutAs: "",
  company: "",
  companyIndustry: "",
  email: "",
  message: "",
  phone: "",
  useCountries: "",
  userName: "",
};

function normalizeFieldName(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function getFieldLabel(field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement) {
  const labelledBy = field.getAttribute("aria-label") ?? field.name ?? field.placeholder ?? "";
  if (labelledBy) return labelledBy;

  const label = field.closest("label");
  return label?.querySelector("span")?.textContent ?? label?.textContent ?? "";
}

function getPayloadKey(label: string): keyof UserInfoPayload | null {
  const normalized = normalizeFieldName(label);

  if (["name", "user name", "your name"].includes(normalized)) return "userName";
  if (normalized.includes("email")) return "email";
  if (normalized.includes("phone")) return "phone";
  if (normalized.includes("company name") || normalized === "company") return "company";
  if (normalized.includes("industry")) return "companyIndustry";
  if (normalized.includes("countries") || normalized === "country") return "useCountries";
  if (normalized.includes("hear about") || normalized.includes("source")) return "aboutAs";
  if (normalized.includes("help") || normalized.includes("message")) return "message";

  return null;
}

export function buildUserInfoPayload(form: HTMLFormElement): UserInfoPayload {
  const payload = { ...emptyUserInfoPayload };
  const fields = Array.from(
    form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>("input, textarea, select"),
  ).filter((field) => !field.disabled);

  fields.forEach((field) => {
    const key = getPayloadKey(getFieldLabel(field));
    if (!key) return;
    payload[key] = field.value.trim();
  });

  return payload;
}

export async function submitUserInfo(payload: UserInfoPayload) {
  const response = await fetch(userInfoEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Failed to submit user info: ${response.status}`);
  }

  const result = (await response.json()) as { code?: number; msg?: string };
  if (result.code !== 0) {
    throw new Error(result.msg || "Failed to submit user info");
  }

  return result;
}

export const leadFormButtonClass =
  "inline-flex h-[43px] items-center justify-center rounded-[32px] bg-[#1053f3] px-[32px] text-[17px] font-semibold text-white transition-colors hover:bg-[#0d44d4]";

export function useLeadFormValidation() {
  const [showIncompleteMessage, setShowIncompleteMessage] = useState(false);
  const [showSubmitError, setShowSubmitError] = useState(false);

  const submitLeadForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fields = Array.from(
      event.currentTarget.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
        "input, textarea, select",
      ),
    ).filter((field) => !field.disabled);
    const hasEmptyField = fields.some((field) => field.value.trim() === "");

    if (hasEmptyField) {
      setShowIncompleteMessage(true);
      setShowSubmitError(false);
      return;
    }

    setShowIncompleteMessage(false);
    setShowSubmitError(false);

    try {
      await submitUserInfo(buildUserInfoPayload(event.currentTarget));
      event.currentTarget.reset();
      openSubmitSuccessModal();
    } catch {
      setShowSubmitError(true);
    }
  };

  return { showIncompleteMessage: showIncompleteMessage || showSubmitError, submitLeadForm };
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
