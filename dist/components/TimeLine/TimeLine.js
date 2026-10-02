import { jsxs as i, Fragment as n, jsx as e } from "react/jsx-runtime";
const m = (t) => {
  const { title: r, children: s } = t;
  return /* @__PURE__ */ i(n, { children: [
    /* @__PURE__ */ e("div", { className: "mb-5 flex items-center justify-between", children: /* @__PURE__ */ e("h5", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: r }) }),
    /* @__PURE__ */ e("div", { className: "mb-5", children: s })
  ] });
};
export {
  m as TimeLine
};
