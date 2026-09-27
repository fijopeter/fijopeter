export const profile = {
  name: "Fijo Peter",
  role: "Frontend & Full Stack Developer",
  tagline: "available for frontend & full stack roles",
  email: "fijopeter17@gmail.com",
  phone: "+918137002990",
  phoneDisplay: "8137002990",
  location: "Kerala, India",
  // TODO: verify this — you sent a GitHub link labeled "linked in",
  // so this LinkedIn URL is a guess based on the same handle
  linkedin: "https://www.linkedin.com/in/fijopeter",
  github: "https://github.com/fijopeter",

  stackGroups: [
    {
      label: "frontend",
      tag: "fe" as const,
      items: [
        "React.js",
        "Vue.js",
        "Next.js",
        "TypeScript",
        "Redux",
        "Zustand",
        "TanStack Query",
        "Tailwind CSS",
      ],
    },
    {
      label: "backend & api",
      tag: "fs" as const,
      items: [
        "Node.js",
        "Express.js",
        "GraphQL",
        "Apollo Federation",
        "REST APIs",
        "Apollo Client",
      ],
    },
    {
      label: "tooling & process",
      tag: "core" as const,
      items: [
        "Vitest",
        "Git",
        "Azure DevOps",
        "Agile/Scrum",
        "CI/CD",
        "Adobe Experience Manager",
        "Figma",
        "Postman",
      ],
    },
  ],

  employer: {
    name: "Deloitte — Frontend / Full Stack Developer",
    period: "Feb 2023 — Present",
  },

  projects: [
    {
      name: "Humana",
      stack: ["Vue.js", "Node.js", "Express", "GraphQL", "Apollo Federation"],
      summaryLine:
        "Federated GraphQL subgraphs on a distributed services team, consumed by Vue.js features.",
      impact: [
        "Built & maintained GraphQL subgraphs contributing to shared supergraph composition",
        "Shipped an AI-powered CVE remediation tool — cut manual security work by 80%, ~16 hrs/week saved",
      ],
    },
    {
      name: "OnlineStore",
      stack: ["React.js", "TypeScript", "Next.js", "GraphQL", "Zustand", "Vitest"],
      summaryLine:
        "Single-page checkout replacing a legacy 4-page flow, embedded as a React SPA in AEM.",
      impact: [
        "Reduced checkout steps by 75% with a 10-person engineering team",
        "Connected cart/order flow to headless commerce via Apollo Client in real time",
      ],
    },
    {
      name: "Fulfillment",
      stack: ["React.js", "TypeScript", "Node.js", "Tailwind CSS"],
      summaryLine:
        "Delivery-options micro frontend added to a high-traffic e-commerce platform.",
      impact: [
        "Embedded Google Maps for address validation, cutting invalid delivery submissions",
        "Owned checkout delivery UI logic driven by user type, cart, and timezone",
      ],
    },
    {
      name: "PSGOperate",
      stack: ["AngularJS", "HCL", "AEM"],
      summaryLine:
        "Storefront development and maintenance on a broader e-commerce platform team.",
      impact: [] as string[],
    },
  ],

  education: {
    degree: "B.Sc. Computer Science",
    school: "University of Calicut — Prajyoti Niketan College, Thrissur, Kerala",
  },
  certifications: [
    "Apollo GraphQL Developer – Associate",
    "AWS Certified Cloud Practitioner",
  ],
};
