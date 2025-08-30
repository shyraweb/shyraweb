type Section = {
  title: string;
  introduction?: string;
  points: string[];
  conclusion?: string;
};

export const sections: Section[] = [
  {
    title: "Platform Usage & Access",
    introduction:
      "SiRa AI is a website builder platform that enables users to design, customize, and export websites using templates, AI assistance, and code generation. By accessing and using SiRa AI, you agree to:",
    points: [
      "Use the platform for lawful purposes only",
      "Not attempt to reverse engineer, resell, or exploit the platform",
      "Respect the intellectual property rights of templates, designs, and generated content",
      "Avoid using bots, scrapers, or automated tools to misuse the service",
    ],
  },
  {
    title: "Intellectual Property & Generated Code",
    introduction:
      "All templates, design assets, and platform features within SiRa AI are protected by intellectual property laws. This includes:",
    points: [
      "Pre-designed templates and UI components",
      "Platform features such as the editor and AI assistant",
      "Branding, logos, and marketing materials",
      "Training data, algorithms, and unique design outputs",
    ],
    conclusion:
      "Users may export and use generated website code (HTML, TailwindCSS, React.js, Next.js) for personal or commercial projects. However, resale or redistribution of SiRa AI templates and platform features is prohibited.",
  },
  {
    title: "Customization, AI Assistance & Limitations",
    introduction:
      "SiRa AI offers tools like drag-and-drop editing, TailwindCSS customization, and AI-powered content or design suggestions. Please note:",
    points: [
      "AI-generated content and designs are suggestions and may require review",
      "Users are responsible for verifying and modifying exported code before production use",
      "Deleted elements can be restored during editing but may not be recoverable after export",
      "Integration with external tools or services may be subject to their own terms",
    ],
    conclusion:
      "While SiRa AI makes website building easier, users must ensure final output aligns with their intended use case.",
  },
  {
    title: "Data Privacy & Security",
    introduction:
      "We take your privacy seriously and ensure secure handling of user data. While using SiRa AI:",
    points: [
      "Only essential technical and analytics data may be collected to improve user experience",
      "Personal information is stored only with explicit user consent",
      "Data is encrypted and backed up regularly",
      "Your data will never be sold to third parties",
      "You may request deletion or export of your data at any time",
    ],
    conclusion:
      "Your privacy and security are our priority. All practices follow industry standards and compliance guidelines.",
  },
  {
    title: "Support & Communication",
    introduction:
      "When reaching out to our support team for assistance:",
    points: [
      "Provide accurate information about your issue or request",
      "Maintain respectful and professional communication",
      "Use official support channels (chat, email, or help desk)",
      "Expect responses during designated business hours",
      "Respect confidentiality in all communications",
    ],
  },
  {
    title: "Updates, Modifications & Availability",
    introduction:
      "SiRa AI is continuously evolving to improve user experience. We reserve the right to:",
    points: [
      "Update or modify templates, features, and platform tools",
      "Introduce new functionalities or remove outdated ones",
      "Revise these terms to reflect new policies or regulations",
      "Change subscription plans or pricing (if applicable)",
      "Temporarily suspend services for maintenance or upgrades",
    ],
    conclusion:
      "Any major changes will be reflected in the 'Last Updated' date shown on this page.",
  },
  {
    title: "Disclaimer",
    introduction:
      "While we strive to deliver the best experience, please note:",
    points: [
      "SiRa AI is provided 'as is' without warranties of any kind",
      "Generated websites may require adjustments for production environments",
      "Performance may vary depending on hosting provider, device, or browser",
      "We do not guarantee success or results from using AI-generated content",
      "Users are responsible for testing and validating their websites before deployment",
    ],
    conclusion:
      "Always review and test exported code thoroughly before using it in live environments.",
  },
];

