import { jsxs as t, jsx as e } from "react/jsx-runtime";
import o from "../Card/Card.js";
import n from "../Card/partials/CardTitle.js";
import { chartColors as c } from "../../lib/chartColors.js";
const h = ({ items: s, colorByStatus: d }) => /* @__PURE__ */ t(o, { className: "rounded-xl p-5", children: [
  /* @__PURE__ */ e(n, { children: "Salud del programa de lealtad" }),
  /* @__PURE__ */ t("div", { className: "space-y-5", children: [
    s.length === 0 && /* @__PURE__ */ e("p", { className: "text-sm text-gray-400 dark:text-gray-500", children: "Sin datos suficientes para este período." }),
    s.map((a) => {
      const l = d[a.status] ?? c.primary, r = a.pct ?? 0;
      return /* @__PURE__ */ t("div", { children: [
        /* @__PURE__ */ t("div", { className: "flex items-center justify-between text-sm", children: [
          /* @__PURE__ */ e("span", { className: "font-medium text-gray-700 dark:text-gray-300", children: a.label }),
          /* @__PURE__ */ e("span", { className: "rounded-full px-2 py-0.5 text-xs font-semibold", style: { color: l, backgroundColor: `${l}1A` }, children: a.status })
        ] }),
        /* @__PURE__ */ t("div", { className: "mt-1 flex items-end justify-between", children: [
          /* @__PURE__ */ t("span", { className: "text-lg font-bold text-gray-900 dark:text-gray-100", children: [
            a.value.toLocaleString(),
            a.total != null && /* @__PURE__ */ t("span", { className: "text-sm font-normal text-gray-400 dark:text-gray-500", children: [
              " / ",
              a.total.toLocaleString()
            ] })
          ] }),
          r != null && /* @__PURE__ */ t("span", { className: "text-xs text-gray-400 dark:text-gray-500", children: [
            r,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ e("div", { className: "mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800", children: /* @__PURE__ */ e("div", { className: "h-full rounded-full", style: { width: `${Math.min(Math.max(r, 3), 100)}%`, backgroundColor: l } }) })
      ] }, a.key);
    })
  ] })
] });
export {
  h as default
};
