import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { AlertTriangle as o, CheckCircle2 as i } from "lucide-react";
const l = {
  success: {
    container: "bg-green-50 border-green-200 text-green-700",
    icon: /* @__PURE__ */ e(i, { className: "h-5 w-5 text-green-500" })
  },
  warning: {
    container: "bg-yellow-50 border-yellow-200 text-yellow-700",
    icon: /* @__PURE__ */ e(o, { className: "h-5 w-5 text-yellow-500" })
  }
}, x = ({ variant: r = "success", label: s, children: a, className: c = "" }) => {
  const t = l[r];
  return /* @__PURE__ */ n("div", { className: `flex items-start gap-3 rounded-lg border px-4 py-3 shadow-sm ${t.container} ${c}`, children: [
    /* @__PURE__ */ e("span", { className: "mt-0.5 shrink-0", children: t.icon }),
    /* @__PURE__ */ n("div", { className: "min-w-0", children: [
      s && /* @__PURE__ */ e("p", { className: "text-xs font-semibold tracking-wide uppercase", children: s }),
      /* @__PURE__ */ e("p", { className: "mt-0.5 text-sm font-medium text-[var(--text)]", children: a })
    ] })
  ] });
};
export {
  x as default
};
