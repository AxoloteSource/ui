import { jsx as r, jsxs as t } from "react/jsx-runtime";
import { CheckCircle as o, Repeat as n, Info as a, TrendingDown as c, TrendingUp as i, AlertTriangle as l } from "lucide-react";
const g = {
  never_redeemed: l,
  purchases_up: i,
  purchases_down: c,
  no_activity: a,
  strong_repurchase: n,
  all_good: o
}, x = ({ insights: s }) => /* @__PURE__ */ r("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3", children: s.map((e) => {
  const d = g[e.icon] ?? a;
  return /* @__PURE__ */ t(
    "div",
    {
      className: "flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-800/40",
      children: [
        /* @__PURE__ */ r("span", { className: "bg-primary/10 text-primary rounded-lg p-2", children: /* @__PURE__ */ r(d, { size: 18 }) }),
        /* @__PURE__ */ r("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: e.text })
      ]
    },
    e.id
  );
}) });
export {
  x as default
};
