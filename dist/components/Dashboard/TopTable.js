import { jsxs as a, jsx as r } from "react/jsx-runtime";
import c from "../Card/Card.js";
import g from "../Card/partials/CardTitle.js";
const h = ({ title: l, columns: d, rows: t }) => /* @__PURE__ */ a(c, { className: "rounded-xl p-5", children: [
  /* @__PURE__ */ r(g, { children: l }),
  /* @__PURE__ */ r("div", { className: "overflow-hidden rounded-lg border border-gray-100 dark:border-gray-800", children: /* @__PURE__ */ a("table", { className: "w-full text-left text-sm", children: [
    /* @__PURE__ */ r("thead", { className: "bg-gray-50 text-xs tracking-wide text-gray-500 uppercase dark:bg-gray-800/60 dark:text-gray-400", children: /* @__PURE__ */ r("tr", { children: d.map((e) => /* @__PURE__ */ r("th", { className: "px-4 py-2 font-semibold", children: e }, e)) }) }),
    /* @__PURE__ */ a("tbody", { className: "divide-y divide-gray-100 dark:divide-gray-800", children: [
      t.length === 0 && /* @__PURE__ */ r("tr", { children: /* @__PURE__ */ r("td", { colSpan: d.length, className: "px-4 py-4 text-center text-gray-400 dark:text-gray-500", children: "Sin registros para mostrar" }) }),
      t.map((e) => /* @__PURE__ */ r("tr", { className: "hover:bg-gray-50/50 dark:hover:bg-gray-800/40", children: e.cells.map((i, s) => /* @__PURE__ */ r("td", { className: "px-4 py-2.5 text-gray-700 dark:text-gray-300", children: i }, s)) }, e.id))
    ] })
  ] }) })
] });
export {
  h as default
};
