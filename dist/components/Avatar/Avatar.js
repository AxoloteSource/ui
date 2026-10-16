import { jsx as t, Fragment as i, jsxs as c } from "react/jsx-runtime";
import { useAvatar as o } from "./useAvatar.js";
const n = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23e5e7eb'/%3E%3Ccircle cx='20' cy='15' r='7' fill='%239ca3af'/%3E%3Cpath d='M7 35c0-7.2 5.8-11 13-11s13 3.8 13 11z' fill='%239ca3af'/%3E%3C/svg%3E", v = ({ status: a, imagePath: l, className: e = "" }) => {
  const r = l || n, { avatarStatus: s } = o({ status: a ?? null });
  return /* @__PURE__ */ t(i, { children: /* @__PURE__ */ c("div", { className: "relative flex-none", children: [
    /* @__PURE__ */ t("img", { src: r, className: `h-10 w-10 rounded-full object-cover transition-all duration-300 ${e ?? ""}` }),
    a && /* @__PURE__ */ t("div", { className: "absolute bottom-0 ltr:right-0 rtl:left-0", children: /* @__PURE__ */ t("div", { className: `${s} h-4 w-4 rounded-full` }) })
  ] }) });
};
export {
  v as Avatar
};
