import { jsxs as o, jsx as r } from "react/jsx-runtime";
import { BreadCrumbles as i } from "../BreadCrumbles/BreadCrumbles.js";
import p from "../BreadCrumbles/BreadCrumblesItems/BreadCrumblesItem.js";
import t from "../Typography/Typography.js";
import { TypographyVariantEnum as f } from "../Typography/enums/typographyVariant.enum.js";
import { useTranslation as g } from "react-i18next";
const k = ({ children: n, title: l, titleTranslation: m, helpDescription: s, headerAction: c, breadCrumblesItems: d, className: x }) => {
  const { t: e } = g();
  return /* @__PURE__ */ o("div", { className: x, children: [
    d?.length && /* @__PURE__ */ r(i, { className: "mb-1", children: d?.map((a, h) => /* @__PURE__ */ r(p, { to: a.to, className: a.className, children: typeof a.children == "string" ? e(a.children) : a.children }, h)) }),
    (l || m || s || c) && /* @__PURE__ */ o("div", { className: "mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between", children: [
      /* @__PURE__ */ o("div", { className: "flex flex-col items-start", children: [
        l ? /* @__PURE__ */ r(t, { variant: f.H2, className: "font-bold", children: l }) : m && /* @__PURE__ */ r(t, { variant: f.H2, className: "font-bold", children: e(m).charAt(0).toUpperCase() + e(m).slice(1) }),
        s && /* @__PURE__ */ r("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: typeof s == "string" ? e(s) : s })
      ] }),
      c && /* @__PURE__ */ r("div", { className: "flex-shrink-0", children: c })
    ] }),
    n
  ] });
};
export {
  k as Page
};
