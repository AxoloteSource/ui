import { jsxs as l, jsx as e } from "react/jsx-runtime";
import { XCircle as s, AlertTriangle as a, CheckCircle as c, Info as i } from "lucide-react";
import { cn as b } from "../../lib/utils.js";
const g = {
  info: i,
  success: c,
  warning: a,
  error: s
}, m = {
  info: "border-blue-500 bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-200",
  success: "border-green-500 bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-200",
  warning: "border-yellow-500 bg-yellow-50 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-200",
  error: "border-red-500 bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-200"
}, u = ({ type: r = "info", title: o, children: t, className: d }) => {
  const n = g[r];
  return /* @__PURE__ */ l("div", { className: b("flex items-start gap-3 rounded-lg border-l-4 p-4", m[r], d), children: [
    /* @__PURE__ */ e(n, { className: "mt-0.5 h-5 w-5 shrink-0" }),
    /* @__PURE__ */ l("div", { children: [
      o && /* @__PURE__ */ e("p", { className: "font-semibold", children: o }),
      /* @__PURE__ */ e("div", { className: "text-sm", children: t })
    ] })
  ] });
};
export {
  u as default
};
