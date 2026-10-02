import { jsx as n, jsxs as x } from "react/jsx-runtime";
import { useMemo as b, useState as C, useCallback as L } from "react";
import O from "./useAccordion.js";
const j = ({ rotated: i = !1 }) => /* @__PURE__ */ n("div", { className: `${i ? "rotate-180" : ""} transition-transform duration-200 ltr:ml-auto rtl:mr-auto`, children: /* @__PURE__ */ n("svg", { className: "h-4 w-4", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ n("path", { d: "M19 9L12 15L5 9", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) }), A = ({
  open: i,
  duration: a = 300,
  className: c,
  children: f
}) => {
  const { contentRef: u, containerStyle: m } = O({ open: i, duration: a });
  return /* @__PURE__ */ n("div", { style: m, className: `overflow-hidden ${c || ""}`, children: /* @__PURE__ */ n("div", { ref: u, children: f }) });
}, W = ({
  items: i,
  className: a = "",
  itemClassName: c = "border border-[#d3d3d3] dark:border-[#1b2e4b] rounded",
  headerClassName: f = "p-4 w-full flex items-center text-white-dark dark:bg-[#1b2e4b] hover:text-primary transition-colors",
  contentClassName: u = "p-4 text-[13px] border-t border-[#d3d3d3] dark:border-[#1b2e4b]",
  allowMultiple: m = !1,
  defaultActiveId: p = null,
  defaultActiveIds: d,
  activeId: e,
  activeIds: t,
  onChange: h,
  showChevron: k = !0
}) => {
  const s = b(() => Array.isArray(t) || typeof e < "u", [e, t]), g = b(() => s ? Array.isArray(t) ? t : typeof e == "string" && e ? [e] : [] : d && d.length ? d : p ? [p] : [], [s, e, t, p, d]), [y, w] = C(g), l = b(
    () => s ? Array.isArray(t) ? t : typeof e == "string" && e ? [e] : [] : y,
    [s, e, t, y]
  ), N = L(
    (r) => {
      let o;
      m ? o = l.includes(r) ? l.filter(($) => $ !== r) : [...l, r] : o = l[0] === r ? [] : [r], s || w(o), h?.(o.length ? o : null);
    },
    [m, l, s, h]
  );
  return /* @__PURE__ */ n("div", { className: a, children: i.map((r) => {
    const o = l.includes(r.id);
    return /* @__PURE__ */ x("div", { className: `${c} mb-2 last:mb-0`, children: [
      /* @__PURE__ */ x("button", { type: "button", className: `${f} ${o ? "!text-primary" : ""}`, onClick: () => N(r.id), children: [
        r.leftIcon,
        /* @__PURE__ */ n("div", { className: r.leftIcon ? "ltr:mr-2 rtl:ml-2" : "", children: r.header }),
        k && /* @__PURE__ */ n(j, { rotated: o })
      ] }),
      /* @__PURE__ */ n(A, { open: o, children: /* @__PURE__ */ n("div", { className: u, children: r.content }) })
    ] }, r.id);
  }) });
};
export {
  W as Accordion,
  W as default
};
