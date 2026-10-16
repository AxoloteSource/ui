import { jsxs as a, jsx as n } from "react/jsx-runtime";
import { ChevronRight as w } from "lucide-react";
import { useState as N, useEffect as k } from "react";
import A from "react-animate-height";
import { useTranslation as $ } from "react-i18next";
import { useLocation as j } from "react-router-dom";
import { MenuV2Actions as D } from "./MenuV2Actions.js";
import { MenuV2SubMenu as I } from "./MenuV2SubMenu.js";
import { resolveIcon as V } from "./resolveIcon.js";
const d = (t, e) => {
  if (!t || t === "#")
    return !1;
  const s = t.endsWith("/") ? t.slice(0, -1) : t;
  return s === e || s.length > 1 && e.startsWith(`${s}/`);
}, h = (t, e) => t.some((s) => d(s.path || s.route, e) || h(s.children ?? [], e)), q = ({ item: t, editMode: e = !1, onEdit: s, onDelete: l, onToggleRole: i }) => {
  const { t: m } = $(), v = j(), f = t.children ?? [], o = h(f, v.pathname), [x, c] = N(o), b = V(t.icon, "group-hover:!text-primary shrink-0 ltr:mr-2"), u = e && t.has_role === !1, y = t.active === !1, p = e ? !0 : x;
  return k(() => {
    o && c(!0);
  }, [o]), /* @__PURE__ */ a("li", { className: "menu nav-item relative", children: [
    /* @__PURE__ */ a(
      "button",
      {
        tabIndex: 0,
        onClick: () => {
          e ? i?.(t) : c((r) => !r);
        },
        onKeyDown: (r) => {
          (r.key === "Enter" || r.key === " ") && (r.preventDefault(), e ? i?.(t) : c((g) => !g));
        },
        className: `group relative w-full cursor-pointer${e ? "ltr:pr-20 rtl:pl-20" : ""}${u ? "bg-gray-500!" : ""}`,
        children: [
          /* @__PURE__ */ a("span", { className: "flex w-full min-w-0 items-center justify-between", children: [
            /* @__PURE__ */ a("span", { className: "flex min-w-0 items-center", children: [
              b,
              /* @__PURE__ */ n("span", { className: `truncate ${u ? "text-white" : y ? "text-gray-400" : ""}`, title: m(t.name), children: m(t.name) })
            ] }),
            /* @__PURE__ */ n("span", { className: `shrink-0 ${p ? "!rotate-90" : "rtl:rotate-180"}`, children: /* @__PURE__ */ n(w, {}) })
          ] }),
          e && /* @__PURE__ */ n("span", { className: "absolute top-1/2 -translate-y-1/2 ltr:right-2 rtl:left-2", children: /* @__PURE__ */ n(D, { item: t, onEdit: s, onDelete: l }) })
        ]
      }
    ),
    /* @__PURE__ */ n(A, { duration: 300, height: p ? "auto" : 0, children: /* @__PURE__ */ n(I, { items: f, editMode: e, onEdit: s, onDelete: l, onToggleRole: i }) })
  ] });
};
export {
  q as MenuV2Header
};
