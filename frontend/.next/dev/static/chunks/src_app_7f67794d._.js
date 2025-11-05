(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/redux/userSlice.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearUser",
    ()=>clearUser,
    "default",
    ()=>__TURBOPACK__default__export__,
    "setUser",
    ()=>setUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
"use client";
;
const initialState = {
    user: null
};
const userSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action)=>{
            state.user = action.payload;
        },
        clearUser: (state)=>{
            state.user = null;
        }
    }
});
const { setUser, clearUser } = userSlice.actions;
const __TURBOPACK__default__export__ = userSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/redux/store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$redux$2f$userSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/redux/userSlice.ts [app-client] (ecmascript)");
"use client";
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        user: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$redux$2f$userSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/utility/storage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getToken",
    ()=>getToken,
    "removeToken",
    ()=>removeToken,
    "setToken",
    ()=>setToken
]);
const getToken = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return localStorage.getItem("token");
    }
    //TURBOPACK unreachable
    ;
};
const setToken = (token)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.setItem("token", token);
    }
};
const removeToken = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.removeItem("token");
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/lib/axiosInstance.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utility$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utility/storage.ts [app-client] (ecmascript)");
;
;
const axiosInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api",
    headers: {
        "Content-Type": "application/json"
    }
});
axiosInstance.interceptors.request.use((config)=>{
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utility$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getToken"])();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error)=>Promise.reject(error));
axiosInstance.interceptors.response.use((response)=>response, (error)=>{
    if (error.response?.status === 401) {
        console.warn("Unauthorized - redirect to login maybe?");
        localStorage.removeItem("token");
    }
    return Promise.reject(error);
});
const __TURBOPACK__default__export__ = axiosInstance;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/utility/axiosApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyForJob",
    ()=>applyForJob,
    "createJob",
    ()=>createJob,
    "deleteJob",
    ()=>deleteJob,
    "deleteUser",
    ()=>deleteUser,
    "fetchJobById",
    ()=>fetchJobById,
    "fetchJobs",
    ()=>fetchJobs,
    "fetchJobsforAdmin",
    ()=>fetchJobsforAdmin,
    "fetchUserApplications",
    ()=>fetchUserApplications,
    "fetchUserById",
    ()=>fetchUserById,
    "fetchUsers",
    ()=>fetchUsers,
    "getMe",
    ()=>getMe,
    "loginUser",
    ()=>loginUser,
    "signupUser",
    ()=>signupUser,
    "updateApplicationStatus",
    ()=>updateApplicationStatus,
    "updateJob",
    ()=>updateJob,
    "updateUser",
    ()=>updateUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$axiosInstance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/lib/axiosInstance.tsx [app-client] (ecmascript)");
;
const fetchUserApplications = async ()=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$axiosInstance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/applications/my");
    console.log("11", res);
    return res.data;
};
const applyForJob = async (jobId)=>{
    console.log("job id is", jobId);
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$axiosInstance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`/applications/${jobId}/apply`);
    return res.data;
};
const loginUser = async (data)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$axiosInstance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/auth/login", data);
    return res.data;
};
const signupUser = async (data)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$axiosInstance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/auth/signup", data);
    return res.data;
};
const fetchJobs = async ()=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$axiosInstance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/jobs");
    return res.data;
};
const fetchJobById = async (id)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$axiosInstance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/jobs/${id}`);
    return res.data;
};
const createJob = async (job)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$axiosInstance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("/jobs", job);
    return res.data;
};
const updateJob = async ({ _id, ...data })=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$axiosInstance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/jobs/${_id}`, data);
    return res.data;
};
const deleteJob = async (id)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$axiosInstance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/jobs/${id}`);
    return res.data;
};
const fetchUsers = async ()=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$axiosInstance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/users");
    return res.data;
};
const fetchUserById = async (id)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$axiosInstance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/users/${id}`);
    return res.data;
};
const updateUser = async (id, data)=>{
    let payload = data;
    let headers = {};
    // If resume file exists, send FormData
    if (data.resume instanceof File) {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value])=>{
            if (key === "skills" && Array.isArray(value)) {
                value.forEach((skill)=>formData.append("skills[]", skill));
            } else {
                formData.append(key, value);
            }
        });
        payload = formData;
        headers = {
            "Content-Type": "multipart/form-data"
        };
    }
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$axiosInstance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/users/update/${id}`, payload, {
        headers
    });
    return res.data;
};
const deleteUser = async (id)=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$axiosInstance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/users/delete/${id}`);
    return res.data;
};
const getMe = async ()=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$axiosInstance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/auth/me");
    return res.data;
};
const updateApplicationStatus = async ({ id, status, feedback })=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$axiosInstance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].put(`/applications/${id}/status`, {
        status,
        adminFeedback: feedback
    });
    return res.data;
};
const fetchJobsforAdmin = async ()=>{
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$lib$2f$axiosInstance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("/api/jobs/getjobs");
    return res.data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/customHooks/useApi.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGetMe",
    ()=>useGetMe,
    "useLogin",
    ()=>useLogin,
    "useSignup",
    ()=>useSignup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utility$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utility/storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utility$2f$axiosApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utility/axiosApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$redux$2f$userSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/redux/userSlice.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const useLogin = ()=>{
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utility$2f$axiosApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loginUser"],
        onSuccess: {
            "useLogin.useMutation": (data)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utility$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setToken"])(data.token);
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$redux$2f$userSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setUser"])(data.user));
            }
        }["useLogin.useMutation"]
    });
};
_s(useLogin, "T3s2FAG2lrcYlFD5lf7SmHd+fr0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
const useSignup = ()=>{
    _s1();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utility$2f$axiosApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signupUser"],
        onSuccess: {
            "useSignup.useMutation": (data)=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utility$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setToken"])(data.token);
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$redux$2f$userSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setUser"])(data.user));
            }
        }["useSignup.useMutation"]
    });
};
_s1(useSignup, "T3s2FAG2lrcYlFD5lf7SmHd+fr0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
const useGetMe = ()=>{
    _s2();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "me"
        ],
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utility$2f$axiosApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMe"],
        retry: false
    });
};
_s2(useGetMe, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/auth/AuthInitializer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthInitializer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utility$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utility/storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$redux$2f$userSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/redux/userSlice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$customHooks$2f$useApi$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/customHooks/useApi.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function AuthInitializer() {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utility$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getToken"])();
    const { data, isSuccess, isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$customHooks$2f$useApi$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetMe"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthInitializer.useEffect": ()=>{
            if (!token) {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$redux$2f$userSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearUser"])());
                return;
            }
            if (isSuccess && data) dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$redux$2f$userSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setUser"])(data));
            if (isError) dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$redux$2f$userSlice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearUser"])());
        }
    }["AuthInitializer.useEffect"], [
        token,
        isSuccess,
        isError,
        data,
        dispatch
    ]);
    return null;
}
_s(AuthInitializer, "bP+KHRS4dS3vWDXFpDxdVC3zQL4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$customHooks$2f$useApi$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGetMe"]
    ];
});
_c = AuthInitializer;
var _c;
__turbopack_context__.k.register(_c, "AuthInitializer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$redux$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/redux/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$auth$2f$AuthInitializer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/auth/AuthInitializer.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]();
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
                client: queryClient,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
                    store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$redux$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"],
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$auth$2f$AuthInitializer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 16,
                            columnNumber: 13
                        }, this),
                        children
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 15,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 14,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = RootLayout;
var _c;
__turbopack_context__.k.register(_c, "RootLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_7f67794d._.js.map