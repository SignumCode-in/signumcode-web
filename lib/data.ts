export const caseStudies = [
    {
        slug: "fintech-dashboard",
        title: "CapitalEdge: Advanced Wealth Management",
        client: "CapitalEdge Fintech",
        industry: "FinTech",
        problem: "CapitalEdge required a unified dashboard to manage diverse investment portfolios for HNI clients. The existing system was fragmented, slow, and lacked real-time risk assessment capabilities.",
        solution: "We engineered a clean-architecture dashboard using Next.js 15 and Node.js. We implemented a real-time data engine with Redis and WebSockets, providing sub-second updates for global market trends and automated portfolio rebalancing alerts.",
        tech: ["Next.js", "Node.js", "Redis", "WebSockets", "D3.js", "TypeScript"],
        results: [
            "40% faster portfolio analysis",
            "Real-time tracking for $100M+ AUM",
            "Reduced client onboarding time by 65%"
        ],
        image: "/images/case-studies/fintech-dashboard.png",
    },
    {
        slug: "eco-health-app",
        title: "VerdaLife: Gamified Sustainability",
        client: "VerdaLife Inc.",
        industry: "Health Tech",
        problem: "VerdaLife struggled to maintain user engagement in their sustainability goals. Users found habit tracking tedious and lacked clear incentives for climate-positive actions.",
        solution: "We built a high-performance Flutter mobile application with a gamified UX. Using Firebase for real-time leaderboards and Node.js for habit-analysis algorithms, we created an ecosystem where users earn rewards for carbon-saving habits.",
        tech: ["Flutter", "Firebase", "Node.js", "Google Cloud", "Lottie Animations"],
        results: [
            "250k+ active monthly users",
            "Average daily engagement increased by 180%",
            "4.9/5 stars on App Store & Play Store"
        ],
        image: "/images/case-studies/eco-health.png",
    },
    {
        slug: "logistics-saas",
        title: "SwiftLog: Enterprise Route Optimization",
        client: "SwiftLog Logistics",
        industry: "Logistics",
        problem: "Global logistics provider SwiftLog was losing 12% margin due to inefficient route planning and delayed communications between warehouse and fleet.",
        solution: "We developed a robust SaaS platform using Go and gRPC for high-concurrency fleet management. Our AI-driven route optimization engine reduced fuel consumption and delivery times significantly, all deployed on a scalable Kubernetes cluster.",
        tech: ["Go", "Next.js", "gRPC", "PostgreSQL", "Kubernetes", "Docker"],
        results: [
            "15% reduction in yearly fuel costs",
            "Real-time tracking for 15,000+ active vehicles",
            "Automated 90% of dispatch operations"
        ],
        image: "/images/case-studies/logistics-saas.png",
    },
];

export const blogPosts = [
    {
        slug: "scaling-flutter-apps-2026",
        title: "Scaling Flutter Apps: The 2026 Architecture Handbook",
        excerpt: "Moving beyond simple state management. How we use Clean Architecture and Domain-Driven Design to build Flutter apps that scale to millions of users.",
        date: "Jan 12, 2026",
        author: "Arjun Mehta",
        category: "Technical",
        image: "/images/blog/flutter-architecture.png",
    },
    {
        slug: "why-nextjs-is-king-for-seo",
        title: "Next.js 16: Still the King of SEO for Modern Web Apps",
        excerpt: "Deep dive into React Server Components, Streaming, and the new Metadata API. Why SignumCode chooses Next.js for every high-growth startup.",
        date: "Jan 05, 2026",
        author: "Sarah Chen",
        category: "Strategy",
        image: "/images/blog/nextjs-seo.png",
    },
    {
        slug: "secure-backend-architecture",
        title: "The Zero-Trust Backend: Security Checklist for 2026",
        excerpt: "Data breaches are more expensive than ever. Explore our internal security audits, OIDC implementations, and encryption-at-rest strategies.",
        date: "Dec 15, 2025",
        author: "Engineering Team",
        category: "Security",
        image: "/images/blog/backend-security.png",
    },
];
