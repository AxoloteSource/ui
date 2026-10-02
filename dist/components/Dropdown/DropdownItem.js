import { jsx as t } from "react/jsx-runtime";
import { memo as n } from "react";
const m = ({ children: r, onClick: e = () => {
}, disabled: o = !1 }) => /* @__PURE__ */ t("li", { children: /* @__PURE__ */ t(
  "button",
  {
    type: "button",
    onClick: o ? void 0 : e,
    disabled: o,
    className: `flex gap-3 ${o ? "cursor-not-allowed opacity-50" : ""}`,
    children: r
  }
) }), a = n(m);
export {
  a as default
};
