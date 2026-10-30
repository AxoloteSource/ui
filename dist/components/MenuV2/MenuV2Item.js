import { jsxs as l, jsx as t } from "react/jsx-runtime";
import { useTranslation as f } from "react-i18next";
import { NavLink as u } from "react-router-dom";
import { MenuV2Actions as h } from "./MenuV2Actions.js";
import { resolveIcon as v } from "./resolveIcon.js";
const b = ({ item: r, editMode: s = !1, onEdit: o, onDelete: c, onToggleRole: i }) => {
  const { t: a } = f(), m = v(r.icon, "menu-icon group-hover:!text-primary shrink-0 ltr:mr-2"), e = s && r.has_role === !1, p = r.active === !1;
  return /* @__PURE__ */ l("li", { className: "menu nav-item relative", children: [
    /* @__PURE__ */ t(
      u,
      {
        to: r.path || r.route || "#",
        onClick: (n) => {
          s && (n.preventDefault(), i?.(r));
        },
        className: ({ isActive: n }) => `group${s ? "ltr:pr-20 rtl:pl-20" : ""}${e ? "bg-gray-500!" : ""}${!s && n ? "active" : ""}`,
        children: /* @__PURE__ */ l("div", { className: "flex min-w-0 items-center", children: [
          m,
          /* @__PURE__ */ t("span", { className: `truncate ${e ? "text-white" : p ? "text-gray-400" : ""}`, title: a(r.name), children: a(r.name) })
        ] })
      }
    ),
    s && /* @__PURE__ */ t("span", { className: "absolute top-1/2 -translate-y-1/2 ltr:right-2 rtl:left-2", children: /* @__PURE__ */ t(h, { item: r, onEdit: o, onDelete: c }) })
  ] });
};
export {
  b as MenuV2Item
};
