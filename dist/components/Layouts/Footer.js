import { jsxs as o, jsx as s } from "react/jsx-runtime";
import { useAxoloteUI as m } from "../../contexts/AxoloteUIProvider.js";
import { useTranslation as n } from "react-i18next";
import { Link as l } from "react-router-dom";
const x = () => {
  const { t: e } = n(), { footerLinks: a = [] } = m();
  return /* @__PURE__ */ o("div", { className: "dark:text-white-dark mt-auto p-6 pt-0 text-center ltr:sm:text-left rtl:sm:text-right", children: [
    "© ",
    (/* @__PURE__ */ new Date()).getFullYear(),
    ". ",
    e("brand_name"),
    " ",
    e("reserved_rights"),
    ".",
    " ",
    a.map((t, r) => /* @__PURE__ */ o("span", { children: [
      r > 0 && " | ",
      /* @__PURE__ */ s(l, { target: "_blank", to: t.to, className: "text-primary hover:underline", children: t.label })
    ] }, `${t.to}-${r}`))
  ] });
};
export {
  x as default
};
