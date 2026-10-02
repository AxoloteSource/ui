import { jsx as e } from "react/jsx-runtime";
import { DataTable as l } from "mantine-datatable";
import { useMemo as s } from "react";
const m = ({ isLoading: n = !1, rowExpansion: r, className: a = "", datatablePros: t }) => {
  const i = s(() => r ? {
    ...t,
    rowExpansion: {
      content: r.content
    }
  } : t, [t, r]);
  return n ? /* @__PURE__ */ e("div", { className: `datatables ${a}`, children: /* @__PURE__ */ e("div", { className: "flex items-center justify-center p-6", children: /* @__PURE__ */ e("div", { className: "h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-blue-500" }) }) }) : /* @__PURE__ */ e("div", { className: `datatables ${a}`, children: /* @__PURE__ */ e(l, { ...i }) });
};
export {
  m as DataTable
};
