import { jsx as s, Fragment as n } from "react/jsx-runtime";
import { TypographyVariantEnum as c } from "./enums/typographyVariant.enum.js";
import { useTypography as f } from "./useTypography.js";
import l from "react";
const h = ({ variant: r = c.P, children: t, color: a, className: o = "", fontBold: e = !1 }) => {
  const { customClass: m, tag: p } = f({ variant: r, color: a, fontBold: e });
  return /* @__PURE__ */ s(n, { children: l.createElement(p, { className: `${m} ${o}` }, t) });
};
export {
  h as default
};
