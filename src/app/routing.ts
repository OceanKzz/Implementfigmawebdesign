const routes = [
  "/about",
  "/contact",
  "/solutions/enterprise",
  "/solutions/smb",
  "/product/checkout",
  "/product/api",
  "/product/qris",
];

function trimTrailingSlash(path: string) {
  return path.length > 1 ? path.replace(/\/+$/, "") : path;
}

function normalizeRoute(path: string) {
  const route = path.startsWith("/") ? path : `/${path}`;
  return trimTrailingSlash(route);
}

export function getRoutePath() {
  const hashRoute = window.location.hash.startsWith("#/")
    ? window.location.hash.slice(1)
    : "";
  const normalized = normalizeRoute(hashRoute || window.location.pathname);
  const matchedRoute = routes
    .slice()
    .sort((a, b) => b.length - a.length)
    .find((route) => normalized === route || normalized.endsWith(route));

  return matchedRoute ?? "/";
}

export function appHref(path: string) {
  if (path === "#" || path.startsWith("http") || path.startsWith("mailto:")) {
    return path;
  }

  return `#${normalizeRoute(path)}`;
}
