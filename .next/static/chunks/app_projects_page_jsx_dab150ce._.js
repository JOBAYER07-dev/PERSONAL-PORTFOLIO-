(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/projects/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
;
const projects = [
    {
        id: 'ticketbari',
        num: '01',
        name: 'TicketBari',
        desc: 'A full-stack transport ticket booking platform with role-based access control, secure payments, and real-time seat management for Users, Vendors, and Admins.',
        stack: [
            'Next.js 15',
            'Express.js',
            'MongoDB Atlas',
            'JWT',
            'Stripe',
            'Tailwind CSS'
        ],
        live: 'https://ticket-bari-client-one.vercel.app/',
        code: 'https://github.com/JOBAYER07-dev/TICKET-BARI-CLIENT'
    },
    {
        id: 'mediqueue',
        num: '02',
        name: 'MediQueue',
        desc: 'A full-stack medical appointment & queue management system with real-time scheduling, role-based access, and seamless patient flow.',
        stack: [
            'Next.js',
            'Firebase',
            'MongoDB',
            'JWT',
            'Tailwind CSS'
        ],
        live: 'https://medi-queue-ecru.vercel.app/',
        code: 'https://github.com/JOBAYER07-dev/-MediQueue'
    },
    {
        id: 'skillsphere',
        num: '03',
        name: 'SkillSphere',
        desc: 'Online learning platform with Next.js App Router, BetterAuth (Google OAuth), and MongoDB Atlas.',
        stack: [
            'Next.js',
            'BetterAuth',
            'MongoDB Atlas',
            'DaisyUI'
        ],
        live: 'https://skill-sphere-sable.vercel.app/',
        code: 'https://github.com/JOBAYER07-dev/SkillSphere'
    },
    {
        id: 'github-issues-tracker',
        num: '04',
        name: 'GitHub Issues Tracker',
        desc: 'Vanilla JS app with real-time search, priority tags, status filter and issue detail modal.',
        stack: [
            'HTML',
            'Tailwind CSS',
            'JavaScript',
            'REST API'
        ],
        live: 'https://jobayer07-dev.github.io/GitHub_Issue_Tracker/',
        code: 'https://github.com/JOBAYER07-dev/GitHub_Issue_Tracker'
    },
    {
        id: 'english-janala',
        num: '05',
        name: 'English Janala',
        desc: 'Vocabulary learning app with Web Speech API pronunciation feature and REST API integration.',
        stack: [
            'JavaScript',
            'Web Speech API',
            'REST API'
        ],
        live: 'https://jobayer07-dev.github.io/english-janala-project/',
        code: 'https://github.com/JOBAYER07-dev/english-janala-project'
    },
    {
        id: 'bpl-players',
        num: '06',
        name: 'BPL Players Selection',
        desc: 'A cricket players selection app with REST API integration, search, and filter functionalities.',
        stack: [
            'React',
            'Tailwind CSS',
            'DaisyUI',
            'REST API'
        ],
        live: 'https://bpl-players-selection-from-world.netlify.app/',
        code: 'https://github.com/JOBAYER07-dev/bpl-project'
    },
    {
        id: 'keen-keeper',
        num: '07',
        name: 'Keen Keeper',
        desc: 'Friend relationship manager with React Router v6, Context API and lazy loading.',
        stack: [
            'React',
            'React Router v6',
            'Context API',
            'DaisyUI'
        ],
        live: 'https://keenkeaper.netlify.app/',
        code: 'https://github.com/JOBAYER07-dev/KinKeeper'
    },
    {
        id: 'digitools',
        num: '08',
        name: 'DigiTools',
        desc: 'React-based digital tools marketplace with cart management, toast notifications and smooth UX.',
        stack: [
            'React 19',
            'Tailwind CSS',
            'DaisyUI',
            'Vite'
        ],
        live: 'https://jobayer-digitool.netlify.app',
        code: 'https://github.com/JOBAYER07-dev/DigiTools'
    },
    {
        id: null,
        num: '09',
        name: 'Coming Soon...',
        desc: "I'm currently working on a full-stack project using Next.js.",
        stack: [
            'Next.js',
            'MongoDB',
            'Auth'
        ],
        live: null,
        code: null,
        upcoming: true
    }
];
function ProjectsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "min-h-screen pt-32 pb-24 px-6 md:px-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                className: "mb-14",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#c8f04e] text-xs uppercase tracking-widest font-medium",
                        children: "My Work"
                    }, void 0, false, {
                        fileName: "[project]/app/projects/page.jsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-[family-name:var(--font-syne)] font-bold text-5xl md:text-6xl tracking-tight mt-3",
                        children: "All Projects"
                    }, void 0, false, {
                        fileName: "[project]/app/projects/page.jsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/projects/page.jsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5",
                children: projects.map((param, i)=>{
                    let { id, num, name, desc, stack, live, code, upcoming } = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 40
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.55,
                            delay: i * 0.08
                        },
                        className: "group relative bg-base-200 rounded-2xl p-6 transition-all duration-300 overflow-hidden flex flex-col ".concat(upcoming ? 'border border-dashed border-base-300' : 'border border-base-300 hover:border-[#c8f04e]/25 hover:-translate-y-1'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0 right-0 h-0.5 bg-[#c8f04e] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                            }, void 0, false, {
                                fileName: "[project]/app/projects/page.jsx",
                                lineNumber: 129,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 text-xs text-base-content/30 tracking-widest mb-5",
                                children: [
                                    num,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 h-px bg-base-300"
                                    }, void 0, false, {
                                        fileName: "[project]/app/projects/page.jsx",
                                        lineNumber: 133,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/projects/page.jsx",
                                lineNumber: 131,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-[family-name:var(--font-syne)] font-bold text-xl mb-2 ".concat(upcoming ? 'text-base-content/40' : ''),
                                children: name
                            }, void 0, false, {
                                fileName: "[project]/app/projects/page.jsx",
                                lineNumber: 136,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm leading-relaxed mb-5 flex-1 ".concat(upcoming ? 'text-base-content/30' : 'text-base-content/50'),
                                children: desc
                            }, void 0, false, {
                                fileName: "[project]/app/projects/page.jsx",
                                lineNumber: 143,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-1.5 mb-6",
                                children: stack.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs bg-base-300 text-base-content/60 px-2.5 py-1 rounded-full",
                                        children: t
                                    }, t, false, {
                                        fileName: "[project]/app/projects/page.jsx",
                                        lineNumber: 153,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/projects/page.jsx",
                                lineNumber: 151,
                                columnNumber: 15
                            }, this),
                            !upcoming && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/projects/".concat(id),
                                        className: "btn btn-sm rounded-full bg-[#c8f04e] text-black border-none hover:opacity-85",
                                        children: "View Details →"
                                    }, void 0, false, {
                                        fileName: "[project]/app/projects/page.jsx",
                                        lineNumber: 164,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: live,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "btn btn-sm btn-outline rounded-full text-[#c8f04e] border-[#c8f04e]/30 hover:border-[#c8f04e]",
                                        children: "Live"
                                    }, void 0, false, {
                                        fileName: "[project]/app/projects/page.jsx",
                                        lineNumber: 170,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: code,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "btn btn-sm btn-outline rounded-full",
                                        children: "Code"
                                    }, void 0, false, {
                                        fileName: "[project]/app/projects/page.jsx",
                                        lineNumber: 178,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/projects/page.jsx",
                                lineNumber: 163,
                                columnNumber: 17
                            }, this)
                        ]
                    }, num, true, {
                        fileName: "[project]/app/projects/page.jsx",
                        lineNumber: 118,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/app/projects/page.jsx",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/projects/page.jsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
_c = ProjectsPage;
var _c;
__turbopack_context__.k.register(_c, "ProjectsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_projects_page_jsx_dab150ce._.js.map