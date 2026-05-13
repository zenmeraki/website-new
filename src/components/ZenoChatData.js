
export const featureContent = {
  title: "Everything Your Team Needs to Manage WhatsApp at Scale",
  description:
    "ZenoChat gives your support and sales team a shared inbox, smart assignment, and live analytics — all built on Meta's official WhatsApp Business API.",
  benefits: [
    "Unified inbox — all WhatsApp conversations in one clean dashboard",
    "Assign chats to agents and track ownership in real time",
    "Send and receive images, PDFs, audio, and video inline",
    "Get 24-hour window alerts so you never miss a reply deadline",
  ],
};

export const pricingPlans = [
  {
    title: "Free",
    price: "₹0",
    period: "/month",
    description: "Get started with no credit card needed.",
    features: [
      "1 WhatsApp number",
      "2 team members",
      "1,000 conversations / mo",
      "Media message support",
    ],
  },
  {
    title: "Starter (Monthly)",
    price: "₹999",
    period: "/month",
    description: "For small teams getting off shared phones.",
    features: [
      "1 WhatsApp number",
      "5 team members",
      "5,000 conversations / mo",
      "Media message support",
    ],
  },
  {
    title: "Growth (Monthly)",
    price: "₹2,499",
    period: "/month",
    description: "For active merchant and support teams.",
    highlighted: true,
    features: [
      "1 WhatsApp number",
      "10 team members",
      "Unlimited conversations",
      "Response time analytics",
    ],
  },
  {
    title: "Scale (Monthly)",
    price: "₹6,999",
    period: "/month",
    description: "For larger operations with advanced needs.",
    features: [
      "Multiple phone numbers",
      "Unlimited team members",
      "Unlimited conversations",
      "Priority support + onboarding",
    ],
  },
];

export const faqs = [
  {
    question: "What is ZenoChat?",
    answer:
      "ZenoChat is a WhatsApp Business inbox built for merchant and support teams. It lets your entire team share one WhatsApp number, assign chats to agents, send media messages, and track response performance — all in one dashboard.",
  },
  {
    question: "How do I connect my WhatsApp number to ZenoChat?",
    answer:
      "You authorize via Meta's official OAuth flow. ZenoChat requests only the WhatsApp Business messaging scope, automatically registers your webhook, and has you live in under 5 minutes — no developer needed.",
  },
  {
    question: "Does ZenoChat charge per message?",
    answer:
      "No. ZenoChat charges a flat monthly fee and does not add any per-message fees on top. WhatsApp Business API conversation charges from Meta apply separately based on your usage.",
  },
  {
    question: "How many team members can use ZenoChat?",
    answer:
      "The Free plan supports 2 members. Starter supports 5, Growth supports 10, and Scale supports unlimited team members — so the whole company can be in one inbox.",
  },
  {
    question: "Can I send images, PDFs, and audio through ZenoChat?",
    answer:
      "Yes. ZenoChat renders all WhatsApp media types — images, documents, audio, and video — inline in the chat window. No broken CDN links, no downloading raw files.",
  },
  {
    question: "What is the 24-hour window alert?",
    answer:
      "Meta's WhatsApp Business API requires you to reply within 24 hours of a customer's last message. ZenoChat warns you before that window closes so you never lose the ability to reply.",
  },
  {
    question: "Is my WhatsApp access token safe with ZenoChat?",
    answer:
      "Your Meta access token is never exposed to the browser. All API calls go through ZenoChat's hardened backend. Access is scoped, logged, and auditable at all times.",
  },
];

export const privacySections = [
  {
    title: "1. Information We Collect",
    content: [
      "Account information: When you register, we collect your name, email address, and business name.",
      "WhatsApp Business data: We store conversation messages, customer phone numbers, and media files transmitted through the WhatsApp Business API on your behalf.",
      "Usage data: We collect information about how you use ZenoChat, including pages visited, features used, and actions taken within the platform.",
      "Device and technical data: IP address, browser type, operating system, and session identifiers for security and performance purposes.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "To provide, operate, and improve ZenoChat's core services.",
      "To authenticate your identity and secure your workspace.",
      "To route WhatsApp messages between your customers and your team.",
      "To send service-related notifications such as billing alerts and security updates.",
      "To analyse aggregate usage patterns and improve product features.",
    ],
  },
  {
    title: "3. Data Storage and Security",
    content: [
      "All data is stored on encrypted servers. Your Meta access token is AES-256 encrypted at rest and is never transmitted to the browser.",
      "All communication between your browser, our servers, and Meta's API uses TLS 1.3 encryption.",
      "We employ role-based access controls. Only authorised engineers can access production data, and all access is logged and audited.",
      "Each workspace's data is fully isolated — your conversations and contacts are never accessible to another merchant.",
    ],
  },
  {
    title: "4. Data Sharing",
    content: [
      "We do not sell your personal data or your customers' data to any third party.",
      "We share data with Meta solely to deliver WhatsApp messaging functionality as required by the WhatsApp Business API.",
      "We may use trusted third-party service providers (such as cloud hosting and payment processors) who are contractually bound to protect your data.",
      "We will disclose data if required by law or to protect the rights and safety of ZenoChat, its users, or the public.",
    ],
  },
  {
    title: "5. Data Retention and Deletion",
    content: [
      "Your conversation history and account data are retained for as long as your account is active.",
      "On cancellation, your data is retained for 30 days to allow export, then permanently deleted.",
      "You may request immediate deletion of your data at any time by contacting zenmerakihelp@gmail.com.",
      "We comply with the General Data Protection Regulation (GDPR) and India's Digital Personal Data Protection (DPDP) Act.",
    ],
  },
  {
    title: "6. Your Rights",
    content: [
      "Right to access: You may request a copy of the personal data we hold about you.",
      "Right to correction: You may ask us to correct inaccurate data.",
      "Right to deletion: You may request deletion of your personal data, subject to legal obligations.",
      "Right to portability: You may request your data in a machine-readable format.",
      "To exercise any of these rights, contact us at zenmerakihelp@gmail.com.",
    ],
  },
  {
    title: "7. Cookies",
    content: [
      "ZenoChat uses essential cookies for authentication and session management.",
      "We use analytics cookies to understand aggregate usage. These can be declined without affecting core functionality.",
      "We do not use advertising or tracking cookies.",
    ],
  },
  {
    title: "8. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. We will notify you by email and via an in-app banner at least 14 days before material changes take effect.",
      "Continued use of ZenoChat after the effective date constitutes acceptance of the updated policy.",
    ],
  },
];

export const termsSections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By creating a ZenoChat account or using any part of the ZenoChat platform, you agree to be bound by these Terms and Conditions.",
      "If you are using ZenoChat on behalf of a business, you represent that you have authority to bind that business to these Terms.",
      "If you do not agree to these Terms, you must not use ZenoChat.",
    ],
  },
  {
    title: "2. Description of Service",
    content: [
      "ZenoChat is a SaaS platform that provides a shared WhatsApp Business inbox, team assignment tools, and messaging analytics built on Meta's official WhatsApp Business API.",
      "ZenoChat is not affiliated with, endorsed by, or a product of Meta Platforms, Inc. WhatsApp is a trademark of Meta Platforms, Inc.",
      "We reserve the right to modify, suspend, or discontinue features of the service with reasonable notice.",
    ],
  },
  {
    title: "3. Account Responsibilities",
    content: [
      "You are responsible for maintaining the confidentiality of your account credentials.",
      "You must provide accurate information when creating your account and keep it up to date.",
      "You are responsible for all activity that occurs under your workspace, including the actions of invited team members.",
      "You must not share your account credentials or allow unauthorised access to your workspace.",
    ],
  },
  {
    title: "4. Acceptable Use",
    content: [
      "You may only use ZenoChat for lawful business communication purposes.",
      "You must comply with Meta's WhatsApp Business Policy and all applicable messaging regulations.",
      "You must not use ZenoChat to send spam, unsolicited bulk messages, or any content that violates applicable law.",
      "You must not attempt to reverse-engineer, scrape, or disrupt ZenoChat's infrastructure.",
      "We reserve the right to suspend or terminate accounts that violate these acceptable use standards.",
    ],
  },
  {
    title: "5. Billing and Payments",
    content: [
      "ZenoChat charges a flat monthly or annual subscription fee as described on the Pricing page.",
      "Subscription fees are billed in advance. All fees are exclusive of applicable taxes.",
      "WhatsApp Business API conversation charges from Meta are separate and billed directly by Meta based on your usage volume.",
      "Refunds are not provided for partial months. If you cancel, your access continues until the end of the current billing period.",
      "We reserve the right to change pricing with at least 30 days' advance notice.",
    ],
  },
  {
    title: "6. Intellectual Property",
    content: [
      "ZenoChat and its original content, features, and functionality are owned by Zen Meraki and are protected by intellectual property laws.",
      "You retain ownership of all content and data you bring into ZenoChat, including your customer conversations.",
      "By using ZenoChat, you grant us a limited licence to store and process your content solely to provide the service.",
    ],
  },
  {
    title: "7. Limitation of Liability",
    content: [
      "ZenoChat is provided on an 'as is' and 'as available' basis. We do not warrant uninterrupted, error-free operation.",
      "To the maximum extent permitted by law, ZenoChat shall not be liable for indirect, incidental, or consequential damages arising from your use of the service.",
      "Our total cumulative liability to you shall not exceed the fees you paid to ZenoChat in the three months preceding the claim.",
      "We are not responsible for any third-party service outages, including WhatsApp Business API downtime caused by Meta.",
    ],
  },
  {
    title: "8. Termination",
    content: [
      "You may terminate your account at any time from the Settings page.",
      "We may suspend or terminate your account immediately if you breach these Terms or engage in conduct that endangers the platform or other users.",
      "On termination, your data is retained for 30 days for export, then permanently deleted in accordance with our Privacy Policy.",
    ],
  },
  {
    title: "9. Governing Law",
    content: [
      "These Terms are governed by the laws of India.",
      "Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Kerala, India.",
      "If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.",
    ],
  },
  {
    title: "10. Contact",
    content: [
      "For questions about these Terms, contact us at zenmerakihelp@gmail.com.",
      "For privacy-related requests, contact zenmerakihelp@gmail.com.",
      "ZenoChat is operated by Zen Meraki, Kerala, India.",
    ],
  },
];