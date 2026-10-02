import { jsx as e, jsxs as c, Fragment as d } from "react/jsx-runtime";
import i from "react";
const t = ({ children: r, className: l = "" }) => /* @__PURE__ */ e("div", { className: `hidden sm:block ${l}`, children: /* @__PURE__ */ e("ul", { className: "flex space-x-2 rtl:space-x-reverse", children: i.Children.map(r, (s, a) => /* @__PURE__ */ c(d, { children: [
  a !== 0 && /* @__PURE__ */ e("li", { children: "/" }),
  s
] })) }) });
export {
  t as BreadCrumbles
};
