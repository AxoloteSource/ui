import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { useId as i } from "react";
function l({ className: r }) {
  const t = i();
  return /* @__PURE__ */ n("svg", { className: r, fill: "none", children: [
    /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ e("pattern", { id: t, x: "0", y: "0", width: "10", height: "10", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ e("path", { d: "M-3 13 15-5M-5 5l18-18M-1 21 17 3" }) }) }),
    /* @__PURE__ */ e("rect", { stroke: "none", fill: `url(#${t})`, width: "100%", height: "100%" })
  ] });
}
export {
  l as PlaceholderPattern
};
