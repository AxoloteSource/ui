import { jsx as u } from "react/jsx-runtime";
import { SizeEnum as t } from "../../enums/SizeEnum.js";
import { useClass as S } from "../../hooks/useClass.js";
import { Link as w } from "react-router-dom";
import { ButtonTypeEnum as o } from "./enums/buttonType.enum.js";
import { ButtonVariantEnum as h } from "./enums/buttonVariant.enum.js";
const k = {
  "round-alternate": "btn w-full flex justify-center btn-primary text-gray-100 p-4 rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500",
  rounded: "btn rounded-full btn-{color} cursor-pointer",
  "rounded-outline": "btn rounded-full btn-outline-{color} cursor-pointer",
  icon: "'ltr:ml-auto rtl:mr-auto btn p-2 rounded-full btn-{color} cursor-pointer",
  solid: "btn btn-{color} cursor-pointer",
  outline: "btn btn-outline-{color} cursor-pointer",
  circle: "btn rounded-full p-5 btn-{color} cursor-pointer",
  "icon-outline": "btn btn-outline-{color} cursor-pointer"
}, L = {
  [t.XXS]: "p-1 text-xs",
  [t.XS]: "p-1.5 text-xs",
  [t.SM]: "p-2 text-sm",
  [t.MD]: "p-2.5 text-sm",
  [t.LG]: "p-3 text-base",
  [t.XL]: "p-4 text-lg"
}, j = (a) => {
  const { variant: e, color: c, type: n, className: d = "", to: p = "", disabled: s, loading: r, children: l, size: m = t.MD } = a, { customClass: b } = S(k, e, c), f = L[m], x = () => n == o.Submit ? o.Submit : o.Button, i = `${b} ${f} ${d}`, g = n === o.Link ? w : "button", C = n === o.Link ? { to: p, className: `${i}`, disabled: !!(s || r) } : {
    type: x(),
    className: `${i}`,
    disabled: !!(s || r)
  }, y = r ? /* @__PURE__ */ u("span", { className: "inline-block h-5 w-5 animate-spin rounded-full border-2 border-white border-l-transparent align-middle" }) : e === h.Circle ? /* @__PURE__ */ u("span", { className: "absolute", children: l }) : l;
  return {
    tag: g,
    tagProps: C,
    customChildren: y
  };
};
export {
  k as buttonClasses,
  L as buttonSizeClasses,
  j as useButton
};
