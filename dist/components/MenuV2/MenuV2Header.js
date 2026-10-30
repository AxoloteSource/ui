import { jsxs as a, jsx as s } from "react/jsx-runtime";
import { ChevronRight as w } from "lucide-react";
import { useState as N, useEffect as k } from "react";
import A from "react-animate-height";
import { useTranslation as $ } from "react-i18next";
import { useLocation as j } from "react-router-dom";
import { MenuV2Actions as D } from "./MenuV2Actions.js";
import { MenuV2SubMenu as I } from "./MenuV2SubMenu.js";
import { resolveIcon as V } from "./resolveIcon.js";
const d = (e, t) => {
  if (!e || e === "#")
    return !1;
  const n = e.endsWith("/") ? e.slice(0, -1) : e;
  return n === t || n.length > 1 && t.startsWith(`${n}/`);
}, h = (e, t) => e.some((n) => d(n.path || n.route, t) || h(n.children ?? [], t)), q = ({ item: e, editMode: t = !1, onEdit: n, onDelete: l, onToggleRole: i }) => {
  const { t: m } = $(), v = j(), u = e.children ?? [], o = h(u, v.pathname), [x, c] = N(o), b = V(e.icon, "menu-icon group-hover:!text-primary shrink-0 ltr:mr-2"), f = t && e.has_role === !1, y = e.active === !1, p = t ? !0 : x;
  return k(() => {
    o && c(!0);
  }, [o]), /* @__PURE__ */ a("li", { className: "menu nav-item relative", children: [
    /* @__PURE__ */ a(
      "button",
      {
        tabIndex: 0,
        onClick: () => {
          t ? i?.(e) : c((r) => !r);
        },
        onKeyDown: (r) => {
          (r.key === "Enter" || r.key === " ") && (r.preventDefault(), t ? i?.(e) : c((g) => !g));
        },
        className: `group relative w-full cursor-pointer${t ? "ltr:pr-20 rtl:pl-20" : ""}${f ? "bg-gray-500!" : ""}`,
        children: [
          /* @__PURE__ */ a("span", { className: "flex w-full min-w-0 items-center justify-between", children: [
            /* @__PURE__ */ a("span", { className: "flex min-w-0 items-center", children: [
              b,
              /* @__PURE__ */ s("span", { className: `truncate ${f ? "text-white" : y ? "text-gray-400" : ""}`, title: m(e.name), children: m(e.name) })
            ] }),
            /* @__PURE__ */ s("span", { className: `shrink-0 ${p ? "!rotate-90" : "rtl:rotate-180"}`, children: /* @__PURE__ */ s(w, {}) })
          ] }),
          t && /* @__PURE__ */ s("span", { className: "absolute top-1/2 -translate-y-1/2 ltr:right-2 rtl:left-2", children: /* @__PURE__ */ s(D, { item: e, onEdit: n, onDelete: l }) })
        ]
      }
    ),
    /* @__PURE__ */ s(A, { duration: 300, height: p ? "auto" : 0, children: /* @__PURE__ */ s(I, { items: u, editMode: t, onEdit: n, onDelete: l, onToggleRole: i }) })
  ] });
};
export {
  q as MenuV2Header
};
