import { jsxs as l, jsx as t } from "react/jsx-runtime";
import { useAxoloteUI as v } from "../../../contexts/AxoloteUIProvider.js";
import { ChevronRight as x } from "lucide-react";
import { useState as k } from "react";
import R from "react-animate-height";
import { useLocation as y, NavLink as m } from "react-router-dom";
const D = ({ name: r, to: u, icon: h, subItems: c = [], roles: n }) => {
  const { pathname: d } = y(), { user: f } = v(), o = c.length > 0, [a, p] = k(""), g = (e) => {
    p((s) => s === e ? "" : e);
  }, i = f?.role?.key ?? null;
  return !(i === "root") && n && n.length > 0 && i && !n.includes(i) ? null : /* @__PURE__ */ l("li", { className: "menu nav-item", children: [
    /* @__PURE__ */ l(
      m,
      {
        onClick: (e) => {
          o && e.preventDefault(), g(r);
        },
        to: u,
        className: "group",
        children: [
          /* @__PURE__ */ l("div", { className: "flex items-center", children: [
            h,
            /* @__PURE__ */ t("span", { children: r })
          ] }),
          o && /* @__PURE__ */ t("div", { className: a == r ? "!rotate-90" : "rtl:rotate-180", children: /* @__PURE__ */ t(x, {}) })
        ]
      }
    ),
    o && /* @__PURE__ */ t(R, { duration: 300, height: a == r ? "auto" : 0, children: /* @__PURE__ */ t("ul", { className: "sub-menu text-gray-500", children: c.map(({ path: e, name: s }, N) => /* @__PURE__ */ t("li", { children: /* @__PURE__ */ t(m, { className: `${e == d ? "active" : ""}`, to: e, children: s }) }, N)) }) })
  ] });
};
export {
  D as SidebarLink
};
