import { AvailableComponent } from "@/types/editor";

export const COMPONENTS_CATEGORY = [
  {
    category: "Authentication Pages",
    items: [
      { id: "login", name: "Login", icon: "🔑" },
      { id: "sign-up", name: "Sign up", icon: "✍️" },
    ],
  },
  {
    category: "Layout Components",
    items: [
      { id: "header", name: "Header", icon: "⬆️" },
      { id: "sidebar", name: "Sidebar", icon: "➡️" },
      { id: "footer", name: "Footer", icon: "⬇️" },
    ],
  },
  {
    category: "Homepage Sections",
    items: [
      { id: "hero-section", name: "Hero Section", icon: "🌟" },
      { id: "testimonials", name: "Testimonials", icon: "💬" },
      { id: "pricing", name: "Pricing", icon: "💰" },
      { id: "faq", name: "FAQ", icon: "❓" },
      { id: "contact-us", name: "Contact Us", icon: "📞" },
    ],
  },
  {
    category: "Content Pages / Features",
    items: [
      { id: "blog", name: "Blog", icon: "✍️" },
      { id: "review", name: "Review", icon: "⭐" },
    ],
  },
  {
    category: "UI Components",
    items: [
      { id: "card", name: "Card", icon: "📄" },
      { id: "form", name: "Form", icon: "📝" },
    ],
  },
  {
    category: "Dashboard / Private Pages",
    items: [
      { id: "dashboard", name: "Dashboard", icon: "📊" },
      { id: "profile", name: "Profile", icon: "🦸" },
      { id: "settings", name: "Settings", icon: "⚙️" },
      { id: "notifications", name: "Notifications", icon: "🔔" },
      { id: "checkout", name: "Checkout", icon: "🛒" },
      { id: "teams", name: "Teams", icon: "👥" },
    ],
  },
];

export const COMPONENTS_LIST_WITH_CATEGORY: AvailableComponent[] = [
  { id: "login", name: "Login", icon: "🔐" },
  { id: "sign-up", name: "Sign up", icon: "📝" },
  { id: "header", name: "Header", icon: "⬆️" },
  { id: "sidebar", name: "Sidebar", icon: "➡️" },
  { id: "footer", name: "Footer", icon: "⬇️" },
  { id: "hero-section", name: "Hero Section", icon: "🌟" },
  { id: "testimonials", name: "Testimonials", icon: "💬" },
  { id: "pricing", name: "Pricing", icon: "💰" },
  { id: "faq", name: "FAQ", icon: "❓" },
  { id: "contact-us", name: "Contact Us", icon: "📞" },
  { id: "blog", name: "Blogs", icon: "✍️" },
  { id: "review", name: "Review", icon: "⭐" },
  { id: "card", name: "Card", icon: "📄" },
  { id: "form", name: "Form", icon: "📝" },
  { id: "dashboard", name: "Dashboard", icon: "📊" },
  { id: "profile", name: "Profile", icon: "🦸" },
  { id: "settings", name: "Settings", icon: "⚙️" },
  { id: "notifications", name: "Notifications", icon: "🔔" },
  { id: "checkout", name: "Checkout", icon: "🛒" },
  { id: "teams", name: "Teams", icon: "👥" },
];
