import { motion } from "motion/react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

type LegalPageKind = "terms" | "privacy";

type LegalSection = {
  title: string;
  body: string[];
};

const legalPages: Record<
  LegalPageKind,
  {
    eyebrow: string;
    title: string;
    intro: string;
    updated: string;
    sections: LegalSection[];
  }
> = {
  terms: {
    eyebrow: "Legal",
    title: "Terms & Conditions",
    updated: "Last updated: 28 April 2026",
    intro:
      "These Terms govern access to Jalur Pay services in Indonesia, including payment gateway, QRIS, checkout, API, acquiring support, settlement, reporting, and related merchant services.",
    sections: [
      {
        title: "1. Regulatory basis",
        body: [
          "Jalur Pay services are operated in line with applicable Indonesian payment system requirements, including Bank Indonesia rules for Payment Service Providers, national payment standards, QRIS requirements where relevant, anti-fraud controls, consumer protection obligations, and other laws that apply to electronic payment services.",
          "Merchants must use Jalur Pay only for lawful transactions and must hold all registrations, licenses, permits, tax numbers, and product approvals required for their business activity in Indonesia.",
        ],
      },
      {
        title: "2. Merchant onboarding and due diligence",
        body: [
          "Before activation, Jalur Pay may request identity, business, beneficial ownership, bank account, tax, website, product, transaction, and risk information. We may verify that information through public records, payment partners, government systems, sanctions databases, fraud databases, or other reasonable sources.",
          "You must keep onboarding information accurate and promptly notify us of changes to ownership, business model, settlement account, contact details, regulated products, or transaction profile. We may suspend onboarding or services if information is incomplete, misleading, expired, or inconsistent with risk requirements.",
        ],
      },
      {
        title: "3. Payment use and prohibited activity",
        body: [
          "You may accept payments only for goods and services disclosed during onboarding and approved by Jalur Pay. You must not process transactions involving fraud, illegal gambling, narcotics, counterfeit goods, money laundering, terrorist financing, unlawful lending, misleading investment schemes, unauthorized financial services, adult exploitation, sanctioned parties, or activity prohibited by Indonesian law, Bank Indonesia standards, card network rules, e-wallet rules, bank rules, or our payment partners.",
          "You are responsible for providing clear product descriptions, pricing, taxes, shipping terms, refund terms, customer service contacts, and transaction receipts to your customers.",
        ],
      },
      {
        title: "4. QRIS and local payment methods",
        body: [
          "Where QRIS is enabled, you must present and use QRIS in accordance with Bank Indonesia's Quick Response Code Indonesian Standard, including the approved merchant-presented or consumer-presented flow, transaction confirmation, merchant identity display, and any applicable transaction limits, merchant discount rate, refund, and settlement requirements.",
          "You must not alter QRIS codes, route transactions outside approved channels, misrepresent merchant identity, surcharge customers where prohibited, split transactions to avoid controls, or reuse dynamic QR codes in a way that creates incorrect payment values.",
        ],
      },
      {
        title: "5. Fees, settlement, reserves, and taxes",
        body: [
          "Fees, settlement schedules, settlement currency, chargeback handling, refund handling, withholding, rolling reserves, and other commercial terms are set out in the applicable order form, dashboard, or merchant agreement. Unless expressly stated otherwise, settlements are made to a verified bank account in the merchant's legal name.",
          "Jalur Pay may delay, withhold, net, or reserve funds when required by law, payment partners, regulator request, suspected fraud, excessive disputes, negative balances, sanctions screening, operational errors, or unresolved merchant obligations. You remain responsible for all taxes, duties, invoices, and statutory reporting related to your sales.",
        ],
      },
      {
        title: "6. Refunds, disputes, and complaints",
        body: [
          "You must maintain a fair customer complaint and refund process. Refunds should be processed through the original payment channel where supported and in line with the relevant payment method rules.",
          "If a customer, payment partner, regulator, bank, or e-wallet provider raises a dispute, you must provide requested evidence within the deadline we specify. Jalur Pay may debit disputed amounts, chargebacks, penalties, network fees, or investigation costs from your settlement balance or future settlements.",
        ],
      },
      {
        title: "7. Security and operational responsibilities",
        body: [
          "You must protect dashboard credentials, API keys, webhooks, payment pages, devices, QR materials, and customer information using reasonable technical and organizational controls. You must immediately notify Jalur Pay of suspected compromise, unauthorized transactions, data incidents, QR tampering, or fraud attempts.",
          "You must not test, scan, reverse engineer, overload, resell, sublicense, or interfere with Jalur Pay systems except as expressly permitted in writing.",
        ],
      },
      {
        title: "8. Suspension and termination",
        body: [
          "We may suspend or terminate services, disable payment methods, hold settlements, or request additional information if required by law, Bank Indonesia standards, payment partner instructions, risk controls, fraud concerns, unresolved complaints, or breach of these Terms.",
          "Termination does not affect obligations that arose before termination, including refunds, disputes, fees, taxes, confidentiality, data protection, settlement adjustments, and cooperation with investigations.",
        ],
      },
      {
        title: "9. Liability and governing law",
        body: [
          "Jalur Pay is not responsible for indirect, incidental, special, punitive, or consequential losses, or for losses caused by merchant error, third-party systems, force majeure, payment partner outages, customer disputes, or regulatory action outside our reasonable control.",
          "These Terms are governed by the laws of the Republic of Indonesia. Disputes should first be handled through good-faith discussion and complaint resolution. If unresolved, disputes may be submitted to the competent forum agreed in the merchant agreement or otherwise available under Indonesian law.",
        ],
      },
      {
        title: "10. Contact",
        body: [
          "For legal, compliance, payment dispute, or consumer protection matters, contact support@jalurpay.com. We may request identity verification before discussing account, transaction, or personal data matters.",
        ],
      },
    ],
  },
  privacy: {
    eyebrow: "Privacy",
    title: "Privacy Policy",
    updated: "Last updated: 28 April 2026",
    intro:
      "This Privacy Policy explains how Jalur Pay collects, uses, stores, shares, and protects personal data when providing payment services in Indonesia.",
    sections: [
      {
        title: "1. Indonesian privacy framework",
        body: [
          "Jalur Pay processes personal data in accordance with Indonesia's Personal Data Protection Law, applicable electronic system rules, Bank Indonesia payment system requirements, consumer protection principles, anti-fraud requirements, and obligations from banks, e-wallets, card networks, QRIS participants, and other payment partners.",
          "Depending on the activity, Jalur Pay may act as a personal data controller, joint controller, or processor for merchants and payment partners.",
        ],
      },
      {
        title: "2. Personal data we collect",
        body: [
          "We may collect identity and contact data, business registration data, beneficial ownership data, tax information, bank account details, customer payment information, transaction identifiers, order details, device and browser data, IP address, geolocation signals, risk and fraud indicators, communications, complaint records, API logs, webhook logs, and support records.",
          "We collect only data that is relevant to payment processing, merchant onboarding, compliance checks, fraud prevention, settlement, dispute handling, product operation, customer support, legal compliance, and service improvement.",
        ],
      },
      {
        title: "3. Legal bases and purposes",
        body: [
          "We process personal data based on consent, contract performance, legal obligation, protection of vital interests, public interest where applicable, and legitimate interests balanced against the rights of data subjects.",
          "Processing purposes include account registration, KYC and KYB checks, sanctions and AML screening, payment authorization, QRIS transaction processing, fraud monitoring, settlement, reconciliation, refunds, dispute evidence, reporting, audit, security, product analytics, customer support, regulator response, and enforcement of agreements.",
        ],
      },
      {
        title: "4. Data sharing",
        body: [
          "We may share personal data with merchants, customers, banks, e-wallet providers, QRIS participants, switching and settlement infrastructure, payment processors, fraud prevention providers, cloud and technology vendors, auditors, professional advisers, regulators, courts, law enforcement, and other parties required to complete or investigate a transaction.",
          "We require service providers to process data only for authorized purposes and to apply appropriate confidentiality, security, and retention controls.",
        ],
      },
      {
        title: "5. Cross-border transfer",
        body: [
          "Where business operations, cloud infrastructure, support, fraud monitoring, or payment partner processing require data to be transferred outside Indonesia, Jalur Pay applies safeguards required by Indonesian data protection law and relevant payment system standards.",
          "These safeguards may include contractual protections, access controls, transfer assessments, vendor due diligence, encryption, and limiting transfers to what is necessary for the relevant purpose.",
        ],
      },
      {
        title: "6. Security",
        body: [
          "We use technical and organizational measures designed to protect payment and personal data against unauthorized access, disclosure, alteration, misuse, destruction, and loss. These measures may include encryption in transit, restricted access, monitoring, logging, authentication controls, secure development practices, incident response, and vendor risk checks.",
          "No system is completely risk-free. Merchants and users must protect their own credentials, devices, QR materials, API keys, and account access.",
        ],
      },
      {
        title: "7. Retention",
        body: [
          "We retain personal data for as long as necessary to provide services, meet legal and regulatory obligations, handle disputes, prevent fraud, support audits, satisfy tax and accounting requirements, and maintain payment system records.",
          "When retention is no longer required, data will be deleted, destroyed, anonymized, or otherwise handled in accordance with applicable Indonesian law and operational requirements.",
        ],
      },
      {
        title: "8. Data subject rights",
        body: [
          "Subject to applicable law, individuals may request access, correction, update, deletion, withdrawal of consent, restriction or objection to processing, data portability where available, and information about processing activities.",
          "Some requests may be limited where Jalur Pay must keep data for payment settlement, fraud prevention, AML/CFT compliance, regulator reporting, dispute handling, tax, accounting, or legal claims. We may ask for verification before fulfilling a request.",
        ],
      },
      {
        title: "9. Cookies and analytics",
        body: [
          "We may use cookies, pixels, logs, and similar technologies to operate the website and dashboard, secure sessions, remember preferences, measure performance, detect abuse, improve products, and support customer service.",
          "You can control cookies through browser settings, but disabling certain cookies may affect account access, payment flow, fraud checks, or dashboard functionality.",
        ],
      },
      {
        title: "10. Incidents and complaints",
        body: [
          "If a personal data incident may affect your rights or payment security, Jalur Pay will assess the incident and provide notifications required by Indonesian law, regulator expectations, payment partner requirements, and contractual obligations.",
          "For privacy requests, data incidents, or complaints, contact support@jalurpay.com. Please include your name, merchant or transaction reference where relevant, contact details, and a clear description of the request.",
        ],
      },
    ],
  },
};

function SectionShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-[1120px] px-6 lg:px-10 ${className}`}>{children}</div>;
}

export function LegalPage({ kind }: { kind: LegalPageKind }) {
  const page = legalPages[kind];

  return (
    <div className="w-full overflow-x-clip bg-white">
      <Navbar />

      <motion.section
        className="relative overflow-hidden bg-[#f7f9ff]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <SectionShell className="relative py-16 lg:py-24">
          <p
            className="text-[14px] font-semibold uppercase text-[#1053f3]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {page.eyebrow}
          </p>
          <h1
            className="mt-5 max-w-[760px] text-[42px] font-semibold leading-[1.12] text-[#101010] lg:text-[68px]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {page.title}
          </h1>
          <p
            className="mt-6 max-w-[760px] text-[17px] leading-[1.8] text-[#344052] lg:text-[19px]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {page.intro}
          </p>
          <p className="mt-7 text-[14px] font-medium text-[#64748b]" style={{ fontFamily: "Inter, sans-serif" }}>
            {page.updated}
          </p>
        </SectionShell>
      </motion.section>

      <main className="bg-white">
        <SectionShell className="py-14 lg:py-20">
          <div className="space-y-10">
            {page.sections.map((section, index) => (
              <motion.section
                key={section.title}
                className="border-b border-[#e5e9f2] pb-10 last:border-b-0 last:pb-0"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.03, 0.18) }}
              >
                <h2
                  className="text-[24px] font-semibold leading-[1.35] text-[#0e1926] lg:text-[30px]"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {section.title}
                </h2>
                <div className="mt-5 space-y-4">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-[16px] leading-[1.85] text-[#445166] lg:text-[17px]"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        </SectionShell>
      </main>

      <Footer />
    </div>
  );
}
