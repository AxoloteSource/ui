import { jsx as e, Fragment as n, jsxs as t } from "react/jsx-runtime";
import { Avatar as s } from "../../Avatar/Avatar.js";
const m = ({ imagePath: d, message: a, isSender: r, timeAgo: l }) => /* @__PURE__ */ e(n, { children: /* @__PURE__ */ e("div", { className: "mt-4 mb-4", children: /* @__PURE__ */ t("div", { className: `flex items-start gap-3 ${r ? "justify-end" : ""}`, children: [
  /* @__PURE__ */ e("div", { className: `flex-none ${r ? "order-2" : ""}`, children: /* @__PURE__ */ e(s, { imagePath: d }) }),
  /* @__PURE__ */ t("div", { className: "space-y-2", children: [
    /* @__PURE__ */ e("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ e(
      "div",
      {
        className: `${r ? "!bg-primary rounded-md bg-black/10 p-4 py-2 text-white ltr:rounded-br-none rtl:rounded-bl-none dark:bg-gray-800" : "rounded-md bg-black/10 p-4 py-2 ltr:rounded-bl-none rtl:rounded-br-none dark:bg-gray-800"}`,
        children: a
      }
    ) }),
    /* @__PURE__ */ e("div", { className: `text-white-dark text-xs ${r ? "ltr:text-right rtl:text-left" : ""}`, children: l })
  ] })
] }) }) });
export {
  m as SingleMessage
};
