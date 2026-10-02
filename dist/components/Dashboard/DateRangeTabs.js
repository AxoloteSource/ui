import { jsxs as m, jsx as t } from "react/jsx-runtime";
import { DASHBOARD_RANGE_OPTIONS as g } from "../../interfaces/models/Dashboard/IDashboard.js";
import { useState as n } from "react";
import { useTranslation as p } from "react-i18next";
const k = ({ range: d, onChange: s }) => {
  const { t: o } = p(), [r, l] = n(""), [a, y] = n(""), i = () => {
    r && a && s("custom", r, a);
  };
  return /* @__PURE__ */ m("div", { className: "flex flex-wrap items-center gap-3", children: [
    /* @__PURE__ */ t("div", { className: "inline-flex rounded-lg bg-gray-100 p-1 dark:bg-gray-800", children: g.map((e) => /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        onClick: () => s(e.key),
        className: `rounded-md px-3 py-1.5 text-sm font-medium transition ${d === e.key ? "bg-white text-gray-900 shadow-sm dark:bg-gray-700 dark:text-white" : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"}`,
        children: o(e.key, e.label)
      },
      e.key
    )) }),
    d === "custom" && /* @__PURE__ */ m("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ t(
        "input",
        {
          type: "date",
          value: r,
          onChange: (e) => l(e.target.value),
          className: "rounded-md border border-gray-200 px-2 py-1.5 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
        }
      ),
      /* @__PURE__ */ t("span", { className: "text-gray-400 dark:text-gray-500", children: "–" }),
      /* @__PURE__ */ t(
        "input",
        {
          type: "date",
          value: a,
          onChange: (e) => y(e.target.value),
          className: "rounded-md border border-gray-200 px-2 py-1.5 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200"
        }
      ),
      /* @__PURE__ */ t("button", { type: "button", onClick: i, className: "bg-primary rounded-md px-3 py-1.5 text-sm font-medium text-white", children: o("apply", "Aplicar") })
    ] })
  ] });
};
export {
  k as default
};
