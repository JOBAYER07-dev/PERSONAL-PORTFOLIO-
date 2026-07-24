module.exports = [
"[project]/app/projects/[id]/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectDetailPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const projects = [
    {
        id: 'reez-wear',
        num: '01',
        name: 'REEZ Wear',
        tagline: "Modern Men's Fashion E-commerce Platform",
        desc: "REEZ Wear is a full-stack men's fashion e-commerce platform with a sleek, minimalist UI. Users can browse products, filter by category and price, and track their orders. Admins get a full dashboard to manage products, oversee orders, and control user roles with analytics powered by Recharts.",
        stack: [
            'Next.js 15',
            'TypeScript',
            'Express.js',
            'MongoDB',
            'Better Auth',
            'Tailwind CSS',
            'Recharts',
            'Lucide React',
            'Sonner'
        ],
        live: 'https://reez-wear.vercel.app/',
        code: 'https://github.com/JOBAYER07-dev/REEZ_WEAR_CLIENT',
        challenges: [
            'Implementing role-based access control (RBAC) with Better Auth to separate User and Admin permissions across API routes.',
            "Integrating Google OAuth alongside Email/Password authentication using Better Auth's multi-provider setup.",
            'Building a real-time product search with category filters and dynamic price range sliders without excessive re-renders.',
            'Managing CORS and environment configuration across Vercel (client) and Render (server) for production deployment.'
        ],
        improvements: [
            'Add a wishlist feature so users can save products for later.',
            'Implement order status email notifications for users and admins.',
            'Add product review and rating system with verified purchase badges.',
            'Introduce a coupon/discount code system for promotional campaigns.'
        ]
    },
    {
        id: 'ticketbari',
        num: '02',
        name: 'TicketBari',
        tagline: 'Full-Stack Transport Ticket Booking Platform',
        desc: 'TicketBari is a comprehensive transport ticket booking platform with three user roles — User, Vendor, and Admin. Users can search routes, book seats, and pay securely. Vendors manage their own routes and trips. Admins oversee the entire platform with revenue analytics.',
        stack: [
            'Next.js 15',
            'Express.js',
            'MongoDB Atlas',
            'JWT Authentication',
            'Stripe',
            'Tailwind CSS',
            'DaisyUI',
            'Framer Motion',
            'imgbb'
        ],
        live: 'https://ticket-bari-client-one.vercel.app/',
        code: 'https://github.com/JOBAYER07-dev/TICKET-BARI-CLIENT',
        challenges: [
            'Implementing role-based access control (User, Vendor, Admin) with JWT and secure route protection.',
            'Integrating Stripe Checkout with currency fixed to USD and handling webhook events for payment confirmation.',
            'Managing CORS configuration across Vercel (client) and Render (server) for production deployment.',
            'Building real-time countdown timers for trip departures and handling seat availability concurrently.'
        ],
        improvements: [
            'Add real-time seat locking to prevent double booking during simultaneous purchases.',
            'Implement push notifications for booking confirmations and trip reminders.',
            'Add mobile app version using React Native for on-the-go ticket management.',
            'Introduce a review and rating system for vendors and routes.'
        ]
    },
    {
        id: 'mediqueue',
        num: '03',
        name: 'MediQueue',
        tagline: 'Full-Stack Medical Appointment & Queue System',
        desc: 'MediQueue is a full-stack medical appointment and queue management system. It allows patients to book appointments with doctors, manage their queue position in real time, and receive seamless scheduling. Role-based access ensures doctors, patients, and admins each have tailored experiences.',
        stack: [
            'Next.js',
            'Firebase Auth',
            'MongoDB Atlas',
            'JWT Authentication',
            'Express.js',
            'Tailwind CSS',
            'DaisyUI'
        ],
        live: 'https://medi-queue-ecru.vercel.app/',
        code: 'https://github.com/JOBAYER07-dev/-MediQueue',
        challenges: [
            'Configuring Firebase Authentication with JWT for dual-layer security on protected API routes.',
            'Setting up CORS correctly for both local development and Vercel production URLs.',
            'Managing real-time queue state across multiple users without a WebSocket server.',
            'Handling time slot conflicts and preventing double-booking for the same doctor.'
        ],
        improvements: [
            'Add WebSocket-based real-time queue updates so patients see live position changes.',
            'Integrate SMS/email reminders for upcoming appointments.',
            'Build a doctor dashboard with analytics on patient visits and appointment trends.',
            'Add telemedicine support with video consultation integration.'
        ]
    },
    {
        id: 'skillsphere',
        num: '04',
        name: 'SkillSphere',
        tagline: 'Online Learning Platform with Google OAuth',
        desc: 'SkillSphere is a modern online learning platform built with Next.js App Router. It features Google OAuth via BetterAuth, course browsing, enrollment, and a clean dashboard for tracking learning progress. MongoDB Atlas powers the backend data layer.',
        stack: [
            'Next.js 16',
            'BetterAuth',
            'Google OAuth',
            'MongoDB Atlas',
            'Tailwind CSS v4',
            'DaisyUI v5'
        ],
        live: 'https://skill-sphere-sable.vercel.app/',
        code: 'https://github.com/JOBAYER07-dev/SkillSphere',
        challenges: [
            'Setting up BetterAuth with Google OAuth in Next.js App Router — handling session cookies and Suspense boundaries for useSearchParams.',
            'Configuring MongoDB Atlas IP whitelist for Vercel serverless deployment.',
            'Managing Google OAuth in production mode with verified redirect URIs.',
            'Handling Tailwind v4 and DaisyUI v5 configuration without a tailwind.config.js file.'
        ],
        improvements: [
            'Add video lesson support with progress tracking per chapter.',
            'Implement a quiz and certification system upon course completion.',
            'Add instructor dashboard for course creation and student management.',
            'Integrate Stripe for paid course subscriptions.'
        ]
    },
    {
        id: 'github-issues-tracker',
        num: '05',
        name: 'GitHub Issues Tracker',
        tagline: 'Vanilla JS GitHub Issues Browser',
        desc: 'A Vanilla JavaScript application that fetches and displays GitHub repository issues in real time. Features include search, priority tagging, status filtering (open/closed), and a detail modal for each issue — all without any framework.',
        stack: [
            'HTML5',
            'Tailwind CSS',
            'Vanilla JavaScript',
            'GitHub REST API'
        ],
        live: 'https://jobayer07-dev.github.io/GitHub_Issue_Tracker/',
        code: 'https://github.com/JOBAYER07-dev/GitHub_Issue_Tracker',
        challenges: [
            'Working with GitHub REST API pagination and rate limiting without a backend proxy.',
            'Building a dynamic search and filter system in pure JavaScript without React state.',
            'Creating a modal detail view that is accessible and keyboard-navigable.',
            'Handling API errors gracefully and showing meaningful user feedback.'
        ],
        improvements: [
            'Add authentication to increase GitHub API rate limit from 60 to 5000 requests/hour.',
            'Allow users to search any public GitHub repository dynamically.',
            'Add label color coding and milestone tracking.',
            'Convert to a React app for better state management.'
        ]
    },
    {
        id: 'english-janala',
        num: '06',
        name: 'English Janala',
        tagline: 'Vocabulary Learning App with Speech API',
        desc: 'English Janala is a vocabulary learning app that helps users learn and pronounce English words. It uses the Web Speech API for text-to-speech pronunciation and pulls word data from a REST API, making it an interactive and engaging learning tool.',
        stack: [
            'Vanilla JavaScript',
            'Web Speech API',
            'REST API',
            'HTML5',
            'CSS3'
        ],
        live: 'https://jobayer07-dev.github.io/english-janala-project/',
        code: 'https://github.com/JOBAYER07-dev/english-janala-project',
        challenges: [
            'Integrating the Web Speech API across different browsers with varying support levels.',
            'Handling async REST API calls and gracefully managing loading and error states.',
            'Designing an intuitive vocabulary card UI that works on both desktop and mobile.'
        ],
        improvements: [
            'Add a spaced repetition algorithm (SRS) to improve vocabulary retention.',
            'Allow users to save favorite words and track their learning history.',
            'Add multiple choice quiz mode for testing vocabulary knowledge.',
            'Migrate to React for better component management.'
        ]
    },
    {
        id: 'bpl-players',
        num: '08',
        name: 'BPL Players Selection',
        tagline: 'Cricket Players Selection App',
        desc: 'A cricket player selection app for the Bangladesh Premier League. Users can browse available players, filter by category, and select their dream team within a coin budget. Features search, filter, and a live coin balance tracker.',
        stack: [
            'React',
            'Tailwind CSS',
            'DaisyUI',
            'REST API',
            'React Toastify'
        ],
        live: 'https://bpl-players-selection-from-world.netlify.app/',
        code: 'https://github.com/JOBAYER07-dev/bpl-project',
        challenges: [
            'Managing coin budget state across player selection and deselection actions.',
            'Implementing search and category filter simultaneously without performance issues.',
            'Preventing duplicate player selection and showing meaningful toast notifications.'
        ],
        improvements: [
            'Add player statistics and performance charts.',
            'Allow users to save and share their team selections.',
            'Add a comparison feature between two players.',
            'Introduce team rating based on selected players stats.'
        ]
    },
    {
        id: 'keen-keeper',
        num: '09',
        name: 'Keen Keeper',
        tagline: 'Friend Relationship Manager',
        desc: 'Keen Keeper is a friend relationship management app built with React. Users can add, view, and manage their friends list with lazy loading for performance. Features React Router v6 for navigation and Context API for global state.',
        stack: [
            'React',
            'React Router v6',
            'Context API',
            'DaisyUI',
            'Tailwind CSS'
        ],
        live: 'https://keenkeaper.netlify.app/',
        code: 'https://github.com/JOBAYER07-dev/KinKeeper',
        challenges: [
            'Implementing React Router v6 nested routes with lazy loading for performance optimization.',
            'Managing global state with Context API without prop drilling across deep component trees.',
            'Building a responsive card layout that works across all device sizes.'
        ],
        improvements: [
            'Add birthday reminders and relationship health tracking.',
            'Integrate a backend with MongoDB for persistent data storage.',
            'Add notes and interaction history per friend.',
            'Implement search and filter by relationship type.'
        ]
    },
    {
        id: 'digitools',
        num: '10',
        name: 'DigiTools',
        tagline: 'Digital Tools Marketplace',
        desc: 'DigiTools is a React-based digital tools marketplace where users can browse, add to cart, and purchase digital products. Features include cart management with quantity control, toast notifications for user feedback, and a smooth responsive UI.',
        stack: [
            'React 19',
            'Vite',
            'Tailwind CSS',
            'DaisyUI',
            'React Toastify'
        ],
        live: 'https://jobayer-digitool.netlify.app',
        code: 'https://github.com/JOBAYER07-dev/DigiTools',
        challenges: [
            'Managing cart state with add, remove, and quantity update operations using React hooks.',
            'Ensuring smooth user feedback with toast notifications for every cart interaction.',
            'Optimizing Vite build configuration for fast production deployment.'
        ],
        improvements: [
            'Add user authentication and persistent cart with localStorage or a backend.',
            'Integrate a payment gateway for actual purchases.',
            'Add product search, filter by category, and sort by price.',
            'Build a seller dashboard for product listing management.'
        ]
    }
];
function ProjectDetailPage({ params }) {
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["use"])(params);
    const project = projects.find((p)=>p.id === id);
    if (!project) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "min-h-screen pt-32 pb-24 px-6 md:px-16 max-w-4xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    x: -20
                },
                animate: {
                    opacity: 1,
                    x: 0
                },
                transition: {
                    duration: 0.4
                },
                className: "mb-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/projects",
                    className: "flex items-center gap-2 text-base-content/40 hover:text-[#c8f04e] text-sm transition-colors",
                    children: "← Back to Projects"
                }, void 0, false, {
                    fileName: "[project]/app/projects/[id]/page.jsx",
                    lineNumber: 267,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/projects/[id]/page.jsx",
                lineNumber: 261,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6
                },
                className: "mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 text-xs text-base-content/30 tracking-widest mb-4",
                        children: [
                            project.num,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-px bg-base-300"
                            }, void 0, false, {
                                fileName: "[project]/app/projects/[id]/page.jsx",
                                lineNumber: 284,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/projects/[id]/page.jsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-[family-name:var(--font-syne)] font-bold text-5xl md:text-6xl tracking-tight mb-3",
                        children: project.name
                    }, void 0, false, {
                        fileName: "[project]/app/projects/[id]/page.jsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#c8f04e] text-sm font-medium uppercase tracking-widest",
                        children: project.tagline
                    }, void 0, false, {
                        fileName: "[project]/app/projects/[id]/page.jsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/projects/[id]/page.jsx",
                lineNumber: 276,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6,
                    delay: 0.1
                },
                className: "w-full h-56 md:h-72 rounded-2xl bg-base-200 border border-base-300 flex items-center justify-center mb-12 overflow-hidden relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-[family-name:var(--font-syne)] font-bold text-6xl text-[#c8f04e]/20 mb-2",
                                children: project.num
                            }, void 0, false, {
                                fileName: "[project]/app/projects/[id]/page.jsx",
                                lineNumber: 302,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base-content/20 text-sm",
                                children: "Project Preview"
                            }, void 0, false, {
                                fileName: "[project]/app/projects/[id]/page.jsx",
                                lineNumber: 305,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/projects/[id]/page.jsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 right-4 flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: project.live,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "btn btn-sm rounded-full bg-[#c8f04e] text-black border-none hover:opacity-85",
                                children: "Live Site →"
                            }, void 0, false, {
                                fileName: "[project]/app/projects/[id]/page.jsx",
                                lineNumber: 309,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: project.code,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "btn btn-sm btn-outline rounded-full",
                                children: "GitHub →"
                            }, void 0, false, {
                                fileName: "[project]/app/projects/[id]/page.jsx",
                                lineNumber: 317,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/projects/[id]/page.jsx",
                        lineNumber: 308,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/projects/[id]/page.jsx",
                lineNumber: 295,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-3 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:col-span-2 space-y-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.15
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-[family-name:var(--font-syne)] font-bold text-xl mb-4",
                                        children: "About the Project"
                                    }, void 0, false, {
                                        fileName: "[project]/app/projects/[id]/page.jsx",
                                        lineNumber: 337,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base-content/60 leading-relaxed",
                                        children: project.desc
                                    }, void 0, false, {
                                        fileName: "[project]/app/projects/[id]/page.jsx",
                                        lineNumber: 340,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/projects/[id]/page.jsx",
                                lineNumber: 332,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.2
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-[family-name:var(--font-syne)] font-bold text-xl mb-4",
                                        children: "Challenges Faced"
                                    }, void 0, false, {
                                        fileName: "[project]/app/projects/[id]/page.jsx",
                                        lineNumber: 351,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3",
                                        children: project.challenges.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex gap-3 text-base-content/60 text-sm leading-relaxed",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#c8f04e] mt-0.5 shrink-0",
                                                        children: "→"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/projects/[id]/page.jsx",
                                                        lineNumber: 360,
                                                        columnNumber: 19
                                                    }, this),
                                                    c
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/app/projects/[id]/page.jsx",
                                                lineNumber: 356,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/projects/[id]/page.jsx",
                                        lineNumber: 354,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/projects/[id]/page.jsx",
                                lineNumber: 346,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.25
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-[family-name:var(--font-syne)] font-bold text-xl mb-4",
                                        children: "Future Improvements"
                                    }, void 0, false, {
                                        fileName: "[project]/app/projects/[id]/page.jsx",
                                        lineNumber: 373,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3",
                                        children: project.improvements.map((imp, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex gap-3 text-base-content/60 text-sm leading-relaxed",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#c8f04e] mt-0.5 shrink-0",
                                                        children: "✦"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/projects/[id]/page.jsx",
                                                        lineNumber: 382,
                                                        columnNumber: 19
                                                    }, this),
                                                    imp
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/app/projects/[id]/page.jsx",
                                                lineNumber: 378,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/projects/[id]/page.jsx",
                                        lineNumber: 376,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/projects/[id]/page.jsx",
                                lineNumber: 368,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/projects/[id]/page.jsx",
                        lineNumber: 330,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: 20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 0.6,
                            delay: 0.2
                        },
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-base-200 border border-base-300 rounded-2xl p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-[family-name:var(--font-syne)] font-bold text-sm uppercase tracking-widest mb-4 text-base-content/50",
                                        children: "Tech Stack"
                                    }, void 0, false, {
                                        fileName: "[project]/app/projects/[id]/page.jsx",
                                        lineNumber: 399,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: project.stack.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs bg-base-300 text-base-content/70 px-3 py-1.5 rounded-full",
                                                children: t
                                            }, t, false, {
                                                fileName: "[project]/app/projects/[id]/page.jsx",
                                                lineNumber: 404,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/projects/[id]/page.jsx",
                                        lineNumber: 402,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/projects/[id]/page.jsx",
                                lineNumber: 398,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-base-200 border border-base-300 rounded-2xl p-5 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-[family-name:var(--font-syne)] font-bold text-sm uppercase tracking-widest mb-4 text-base-content/50",
                                        children: "Links"
                                    }, void 0, false, {
                                        fileName: "[project]/app/projects/[id]/page.jsx",
                                        lineNumber: 416,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: project.live,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex items-center justify-between w-full text-sm text-[#c8f04e] hover:underline",
                                        children: [
                                            "Live Site ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "↗"
                                            }, void 0, false, {
                                                fileName: "[project]/app/projects/[id]/page.jsx",
                                                lineNumber: 425,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/projects/[id]/page.jsx",
                                        lineNumber: 419,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-px bg-base-300"
                                    }, void 0, false, {
                                        fileName: "[project]/app/projects/[id]/page.jsx",
                                        lineNumber: 427,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: project.code,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "flex items-center justify-between w-full text-sm text-base-content/60 hover:text-base-content transition-colors",
                                        children: [
                                            "GitHub Repository ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "↗"
                                            }, void 0, false, {
                                                fileName: "[project]/app/projects/[id]/page.jsx",
                                                lineNumber: 434,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/projects/[id]/page.jsx",
                                        lineNumber: 428,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/projects/[id]/page.jsx",
                                lineNumber: 415,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/projects/[id]/page.jsx",
                        lineNumber: 391,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/projects/[id]/page.jsx",
                lineNumber: 328,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 0.6,
                    delay: 0.4
                },
                className: "mt-16 pt-8 border-t border-base-300 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/projects",
                        className: "btn btn-outline btn-sm rounded-full",
                        children: "← All Projects"
                    }, void 0, false, {
                        fileName: "[project]/app/projects/[id]/page.jsx",
                        lineNumber: 447,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/contact",
                        className: "btn btn-sm rounded-full bg-[#c8f04e] text-black border-none hover:opacity-85",
                        children: "Hire Me →"
                    }, void 0, false, {
                        fileName: "[project]/app/projects/[id]/page.jsx",
                        lineNumber: 450,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/projects/[id]/page.jsx",
                lineNumber: 441,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/projects/[id]/page.jsx",
        lineNumber: 259,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_projects_%5Bid%5D_page_jsx_e81ff353._.js.map