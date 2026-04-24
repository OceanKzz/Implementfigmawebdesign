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

export function getRoutePath(pathname = window.location.pathname) {
  const normalized = trimTrailingSlash(pathname);
  const matchedRoute = routes
    .slice()
    .sort((a, b) => b.length - a.length)
    .find((route) => normalized === route || normalized.endsWith(route));

  return matchedRoute ?? "/";
}

export function getAppBasePath(pathname = window.location.pathname) {
  const routePath = getRoutePath(pathname);

  if (routePath !== "/" && pathname.endsWith(routePath)) {
    return pathname.slice(0, -routePath.length) || "/";
  }

  const configuredBase = import.meta.env.BASE_URL;
  if (configuredBase && configuredBase !== "./") {
    return configuredBase;
  }

  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

export function appHref(path: string) {
  if (path === "#" || path.startsWith("http") || path.startsWith("mailto:")) {
    return path;
  }

  const basePath = getAppBasePath().replace(/\/+$/, "");
  const routePath = path.startsWith("/") ? path : `/${path}`;

  return `${basePath}${routePath}` || "/";
}
