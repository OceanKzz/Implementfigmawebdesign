import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { ProductApiPage } from "./pages/ProductApiPage";
import { ProductCheckoutPage } from "./pages/ProductCheckoutPage";
import { ProductQrisPage } from "./pages/ProductQrisPage";
import { SolutionsEnterprisePage } from "./pages/SolutionsEnterprisePage";
import { SolutionsSmbPage } from "./pages/SolutionsSmbPage";
import { getRoutePath } from "./routing";

export default function App() {
  const pathname = typeof window !== "undefined" ? getRoutePath(window.location.pathname) : "/";

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
}
