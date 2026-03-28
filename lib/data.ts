import { IProject, IExperience, IEducation } from '@/types';

export const GENERAL_INFO = {
    name: 'Ahmad Hassan',
    email: 'meahmad626@gmail.com',
    phone: '+92 315 0567401',
    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Ahmad, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Ahmadhassan21' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/ahmad-hassan-54035b3a1/' },
];

/* ── Tech Stack ─────────────────────────────────────────── */
export const MY_STACK = {
    frontend: [
        { name: 'HTML', icon: '/logo/html.svg' },
        { name: 'CSS', icon: '/logo/css.svg' },
        { name: 'JavaScript', icon: '/logo/js.png' },
        { name: 'React.js', icon: '/logo/react.png' },
        { name: 'Next.js', icon: '/logo/next.png' },
        { name: 'Redux Toolkit', icon: '/logo/redux.png' },
        { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
        { name: 'Bootstrap', icon: '/logo/bootstrap.svg' },
        { name: 'Liquid', icon: '/logo/liquid.svg' },
        { name: 'GSAP', icon: '/logo/gsap.png' },
    ],
    backend: [
        { name: 'Node.js', icon: '/logo/node.png' },
        { name: 'Express.js', icon: '/logo/express.png' },
        { name: 'MongoDB', icon: '/logo/mongodb.svg' },
        { name: 'Mongoose', icon: '/logo/mongoose.svg' },
    ],
    tools: [
        { name: 'Git', icon: '/logo/git.png' },
        { name: 'GitHub', icon: '/logo/github.png' },
        { name: 'Vercel', icon: '/logo/vercel.svg' },
        { name: 'Netlify', icon: '/logo/netlify.svg' },
    ],
    design: [
        { name: 'Google Stitch', icon: '/logo/google-stitch.svg' },
        { name: 'Visily', icon: '/logo/visily.svg' },
    ],
};

/* ── Projects ───────────────────────────────────────────── */
export const PROJECTS: IProject[] = [
    {
        title: 'Biostarks Dashboard',
        tagline: 'Biostarks Results & Health Insights Platform',
        slug: 'biostarks-dashboard',
        liveUrl: 'https://results.biostarks.com/welcome',
        year: 2025,
        description:
            'A secure and interactive dashboard for users to view biomarker results, track health insights, and manage their accounts with personalized data tracking.',
        bullets: [
            'Developed a secure, interactive dashboard for viewing biomarker results with real-time data rendering.',
            'Implemented authentication and account management for personalized health tracking.',
            'Ensured scalability and full responsiveness across devices, improving usability for diverse users.',
        ],
        role: 'Frontend Developer',
        techStack: ['React.js', 'Chakra UI', 'REST API Integration'],
        thumbnail: '/projects/images/Biostarks.png',
        longThumbnail: '/projects/images/Biostarks.png',
        images: ['/projects/images/Biostarks.png'],
    },
    {
        title: 'AuditMyStore',
        tagline: 'AI-Powered Shopify Store Audit Tool',
        slug: 'auditmystore',
        sourceCode: 'https://github.com/Ahmadhassan21/AuditMyStore',
        year: 2025,
        description:
            'A Shopify-aware audit dashboard that scores CRO, SEO, performance, accessibility, and UX for any store URL, powered by AI for structured analysis and prioritized recommendations.',
        bullets: [
            'Built a full-stack audit dashboard scoring CRO, SEO, performance, accessibility, and UX for any Shopify store URL.',
            'Implemented auth with an email-first anonymous flow and client-side AI integration returning structured JSON with scores and prioritized issues.',
            'Integrated Hugging Face API for intelligent, automated store auditing with actionable insights.',
        ],
        role: 'Full-Stack Developer',
        techStack: [
            'React',
            'Vite',
            'Tailwind CSS',
            'Radix UI',
            'Node.js',
            'Express',
            'MongoDB',
            'JWT',
            'Hugging Face API',
        ],
        thumbnail: '/projects/images/auditmystore.png',
        longThumbnail: '/projects/images/auditmystore.png',
        images: ['/projects/images/auditmystore.png'],
    },
    {
        title: 'Adeeb Survey',
        tagline: 'Survey Dashboard with Optimized Performance',
        slug: 'adeeb-survey',
        liveUrl: 'https://survey-project-five.vercel.app',
        year: 2024,
        description:
            'A streamlined survey dashboard featuring optimized state management, efficient API calls, and personalized data tracking for user insights.',
        bullets: [
            'Designed a survey dashboard with optimized state management and efficient API integration.',
            'Improved performance by reducing load times by 30% through code optimization.',
            'Added authentication and personalized data tracking for actionable user insights.',
        ],
        role: 'Frontend Developer',
        techStack: ['React.js', 'Chakra UI', 'Context API'],
        thumbnail: '/projects/images/adeeb-survey.png',
        longThumbnail: '/projects/images/adeeb-survey.png',
        images: ['/projects/images/adeeb-survey.png'],
    },
];

/* ── Experience ─────────────────────────────────────────── */
export const MY_EXPERIENCE: IExperience[] = [
    {
        title: 'MERN Stack Developer',
        company: 'Wixpa',
        companyUrl: 'https://wixpa.com/',
        duration: 'Feb 2025 — Present',
        bullets: [
            'Own features end-to-end — from architecting MongoDB schemas and building JWT-secured REST APIs to shipping pixel-perfect React interfaces from Figma.',
            'Optimize for real-world performance, pushing back on shortcuts that would hurt the product long-term.',
            'Deliver tested, clean, and scalable code built to last without needing a rewrite six months later.',
        ],
    },
    {
        title: 'Frontend & Shopify Developer',
        company: 'Softileo',
        companyUrl: 'https://softileo.com/',
        duration: '2024 — 2025',
        bullets: [
            'Developed and customized Shopify themes using Liquid, translating complex Figma designs into fast-loading, conversion-optimized storefronts.',
            'Integrated third-party Shopify apps, custom metafields, and dynamic sections to extend store functionality beyond default theme limitations.',
            'Delivered tailored eCommerce solutions matching brand identity precisely for multiple clients.',
        ],
    },
];

/* ── Education ──────────────────────────────────────────── */
export const MY_EDUCATION: IEducation[] = [
    {
        degree: 'BS Computer Science',
        institution: 'Virtual University of Pakistan',
    },
    {
        degree: 'ICS',
        institution: 'Air Base Inter College',
    },
];
