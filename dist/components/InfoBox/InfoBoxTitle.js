import { jsxs as s, jsx as e } from "react/jsx-runtime";
const n = ({ children: t, subtitle: a }) => /* @__PURE__ */ s("div", { className: "mb-12 text-center", children: [
  /* @__PURE__ */ e("h2", { className: "mb-2 text-3xl font-bold text-gray-600", children: t }),
  a && /* @__PURE__ */ s("div", { className: "flex items-center justify-center space-x-2", children: [
    /* @__PURE__ */ e("span", { className: "h-px w-16 bg-gray-300" }),
    /* @__PURE__ */ e("span", { className: "font-normal text-gray-500", children: a }),
    /* @__PURE__ */ e("span", { className: "h-px w-16 bg-gray-300" })
  ] })
] });
export {
  n as default
};
