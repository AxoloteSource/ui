import { jsx as e, jsxs as n } from "react/jsx-runtime";
import { useLoadingFullScreen as t } from "./useLoadingFullScreen.js";
const o = (r) => {
  const { isLoading: i, message: s } = r, { initialMessage: l } = t(s);
  return i ? /* @__PURE__ */ e("div", { className: "bg-opacity-75 fixed inset-0 z-50 flex items-center justify-center bg-black", children: /* @__PURE__ */ n("div", { className: "flex flex-col items-center rounded-lg bg-white p-6 shadow-lg", children: [
    /* @__PURE__ */ e("div", { className: "border-primary mb-4 h-16 w-16 animate-spin rounded-full border-t-4 border-b-4" }),
    /* @__PURE__ */ e("p", { className: "font-medium text-gray-700", children: l })
  ] }) }) : null;
};
export {
  o as default
};
