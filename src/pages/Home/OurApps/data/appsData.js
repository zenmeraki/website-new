/**
 * 📱 appsData.js
 * ---------------------------------------------------------
 * Centralized data source for "Our Apps" showcase section.
 * Each object represents an app card with image, description,
 * route link, and optional theme accent.
 *
 * Used in: OurAppsPage.jsx
 */

export const appsData = [
  {
    id: 1,
    title: "MetaMatrix",
    subtitle: "AI-Powered Business Assistant",
    description:
      "Automate workflows, gain insights, and boost productivity with AI-powered solutions.",
    image: "/public/metamatrix.jpeg",
    link: "/metamatrix-app",
    accent: "#00BFA6",
  },
  {
    id: 2,
    title: "Conversify",
    subtitle: "Omnichannel Chat Platform",
    description:
      "Empower customer engagement with a unified dashboard for WhatsApp, Instagram, and web chat.",
    image: "/public/conversify.jpeg",
    link: "/conversify-app",
    accent: "#1976D2",
  },
  {
    id: 3,
    title: "Tap2Share",
    subtitle: "Digital Business Card App",
    description:
      "Share your profile instantly via NFC and QR codes. Make networking effortless and sustainable with Tap2Share.",
    image: "/public/tap2.jpeg",
    link: "/tap2share-app",
    accent: "#4CAF50",
  },
  {
    id: 4,
    title: "MultiVendor",
    subtitle: "Marketplace Management Suite",
    description:
      "Manage vendors, products, and orders seamlessly across your entire eCommerce ecosystem with scalable tools.",
    image: "/public/vendor.jpeg",
    link: "/multivendor-app",
    accent: "#FF9800",
  },
  
  {
    id: 5,
    title: "EduTech",
    subtitle: "Smart Learning Platform",
    description:
      "Reimagine education with personalized dashboards, AI-assisted assessments, and real-time progress analytics.",
    image: "/public/edutech.jpeg",
    link: "/edutech-app",
    accent: "#9C27B0",
  },
  {
    id: 6,
    title: "Visual Search AI",
    subtitle: "Image-Based Product Discovery",
    description:
      "Search products visually using advanced AI recognition. Snap, find, and buy — powered by visual intelligence.",
    image: "/public/visual.jpeg",
    link: "/visual-search-app",
    accent: "#E91E63",
  },
  {
    id: 7,
    title: "Deskribe",
    subtitle: "Image-Based Product Discovery",
    description:
      "Generate SEO-friendly product descriptions instantly to improve store visibility and sales.",
    image: "/public/deskribe.jpeg",
    link: "/deskribe-app",
    accent: "#E91E63",
  },
];