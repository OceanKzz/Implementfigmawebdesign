import { useEffect, useState } from "react";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { ProductApiPage } from "./pages/ProductApiPage";
import { ProductCheckoutPage } from "./pages/ProductCheckoutPage";
import { ProductQrisPage } from "./pages/ProductQrisPage";
import { RegisterModal } from "./components/RegisterModal";
import { SubmitSuccessModal, submitSuccessModalEventName } from "./components/SubmitSuccessModal";
import { SolutionsEnterprisePage } from "./pages/SolutionsEnterprisePage";
import { SolutionsSmbPage } from "./pages/SolutionsSmbPage";
import { getRoutePath } from "./routing";

export default function App() {
  const [pathname, setPathname] = useState(() =>
    typeof window !== "undefined" ? getRoutePath() : "/",
  );
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [submitSuccessOpen, setSubmitSuccessOpen] = useState(false);

  useEffect(() => {
    const updatePathname = () => setPathname(getRoutePath());
    const openRegisterModal = () => setRegisterModalOpen(true);
    const openSubmitSuccessModal = () => setSubmitSuccessOpen(true);

    window.addEventListener("hashchange", updatePathname);
    window.addEventListener("popstate", updatePathname);
    window.addEventListener("jalurpay:open-register-modal", openRegisterModal);
    window.addEventListener(submitSuccessModalEventName(), openSubmitSuccessModal);

    return () => {
      window.removeEventListener("hashchange", updatePathname);
      window.removeEventListener("popstate", updatePathname);
      window.removeEventListener("jalurpay:open-register-modal", openRegisterModal);
      window.removeEventListener(submitSuccessModalEventName(), openSubmitSuccessModal);
    };
  }, []);

  const page = (() => {
  if (pathname === "/about") {
    return <AboutPage />;
  }

  if (pathname === "/contact") {
    return <ContactPage />;
  }

  if (pathname === "/solutions/smb") {
    return <SolutionsSmbPage />;
  }

  if (pathname === "/solutions/enterprise") {
    return <SolutionsEnterprisePage />;
  }

  if (pathname === "/product/checkout") {
    return <ProductCheckoutPage />;
  }

  if (pathname === "/product/api") {
    return <ProductApiPage />;
  }

  if (pathname === "/product/qris") {
    return <ProductQrisPage />;
  }

  return <HomePage />;
  })();

  return (
    <>
      {page}
      <RegisterModal open={registerModalOpen} onClose={() => setRegisterModalOpen(false)} />
      <SubmitSuccessModal open={submitSuccessOpen} onClose={() => setSubmitSuccessOpen(false)} />
    </>
  );
}
