import { jsxs as o, jsx as e } from "react/jsx-runtime";
import { IconListItem as a } from "./IconListItem.js";
const m = ({ children: s, items: t, className: l = "" }) => (!t || t.length === 0) && !s ? null : /* @__PURE__ */ o("ul", { className: `space-y-2 font-semibold ${l}`, children: [
  s,
  t && t.map((n, r) => /* @__PURE__ */ e(a, { children: /* @__PURE__ */ e("span", { className: "list-text", children: n.text }) }, r))
] });
export {
  m as IconList,
  m as default
};
