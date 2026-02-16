export const SITE_CONFIG = {
  name: "Zachary White",
  title: "Portfolio",
  description: "Computer Science student at Tufts University - Software Engineering Portfolio",
  email: "zwhite03@tufts.edu",
  linkedin: "https://www.linkedin.com/in/zachary-white-455b37274/",
  github: "https://github.com/yourusername",
} as const;

export const NAVIGATION_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
] as const;
