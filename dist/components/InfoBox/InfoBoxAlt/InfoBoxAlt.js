import { jsx as e, jsxs as t } from "react/jsx-runtime";
import i from "../InfoBox.js";
const a = ({ title: l, value: r, icon: s }) => /* @__PURE__ */ e(i, { children: /* @__PURE__ */ t("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ t("div", { children: [
    /* @__PURE__ */ e("h4", { className: "text-lg font-semibold", children: l }),
    /* @__PURE__ */ e("p", { className: "mt-2 text-3xl text-[var(--text)]", children: r })
  ] }),
  /* @__PURE__ */ e("div", { className: "h-10 w-10 text-[var(--text)]", children: s })
] }) });
export {
  a as default
};
