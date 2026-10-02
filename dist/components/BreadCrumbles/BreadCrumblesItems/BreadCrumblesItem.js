import { jsx as r, Fragment as l } from "react/jsx-runtime";
import { useBreadCrumblesItems as n } from "./useBreadCrumblesItems.js";
import { memo as o } from "react";
import { Link as s } from "react-router-dom";
const d = ({ children: i, to: e, className: m }) => {
  const { childrenResult: t } = n({ children: i });
  return /* @__PURE__ */ r(l, { children: e ? /* @__PURE__ */ r("li", { children: /* @__PURE__ */ r(s, { className: `${m} text-primary hover:underline`, to: e, children: t }) }) : /* @__PURE__ */ r("li", { className: m, children: t }) });
}, p = o(d);
export {
  d as BreadCrumblesItems,
  p as default
};
