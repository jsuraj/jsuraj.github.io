export function slugify(input?: string) {
  if (!input) return "";

  // make lower case and trim
  var slug = input.toLowerCase().trim();

  // remove accents from charaters
  slug = slug.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // replace invalid chars with spaces
  slug = slug.replace(/[^a-z0-9\s-]/g, " ").trim();

  // replace multiple spaces or hyphens with a single hyphen
  slug = slug.replace(/[\s-]+/g, "-");

  return slug;
}

export function isMobile() {
  const isBrowser =
    typeof window !== "undefined" && typeof navigator !== "undefined";

  if (!isBrowser) {
    console.warn("isMobile was called in a non-browser environment");
    return false;
  }

  // Check for touch capability
  let hasTouchScreen = false;
  if ("maxTouchPoints" in navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0;
  } else if ("msMaxTouchPoints" in navigator) {
    hasTouchScreen = (navigator as any).msMaxTouchPoints > 0;
  } else {
    const mQ = window.matchMedia("(pointer:coarse)");
    if (mQ && mQ.media === "(pointer:coarse)") {
      hasTouchScreen = !!mQ.matches;
    } else if ("orientation" in window) {
      hasTouchScreen = true; // deprecated, but good fallback
    } else {
      // Only as a last resort, fall back to user agent sniffing
      const UA = (navigator as any).userAgent;
      hasTouchScreen =
        /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
        /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
    }
  }

  // Check for mobile-specific user agent strings
  const mobileUA =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );

  // Check for small screen size (typical for mobile devices)
  const smallScreen = window.innerWidth <= 800 && window.innerHeight <= 600;

  // A device is considered mobile if it has a touch screen and either a mobile UA or a small screen
  return hasTouchScreen && (mobileUA || smallScreen);
}
