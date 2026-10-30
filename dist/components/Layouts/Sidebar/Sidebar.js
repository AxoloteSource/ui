import { jsx as e, jsxs as t } from "react/jsx-runtime";
import { MenuV2 as m } from "../../MenuV2/MenuV2.js";
import { useAxoloteUI as h } from "../../../contexts/AxoloteUIProvider.js";
import u from "react-perfect-scrollbar";
import { NavLink as p } from "react-router-dom";
import { useSidebar as x } from "./useSidebar.js";
const N = () => {
  const { semidark: n, toggleSidebar: s, t: i } = x(), { logo: a, logoDark: o, brandName: l, menu: d } = h(), r = l ?? i("brand_name"), c = d?.size ?? "md";
  return /* @__PURE__ */ e("div", { className: n ? "dark" : "", children: /* @__PURE__ */ e(
    "nav",
    {
      className: `sidebar fixed top-0 bottom-0 z-50 h-full min-h-screen w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300 ${n ? "text-white-dark" : ""}`,
      children: /* @__PURE__ */ t("div", { className: "bg-sidebar-background h-full", children: [
        /* @__PURE__ */ t("div", { className: "flex items-center justify-between px-4 py-3", children: [
          /* @__PURE__ */ t(p, { to: "/", className: "main-logo flex min-w-0 items-center gap-2", children: [
            a && /* @__PURE__ */ e("img", { src: a, alt: r, className: "h-9 w-auto dark:hidden" }),
            o && /* @__PURE__ */ e("img", { src: o, alt: r, className: "hidden h-9 w-auto dark:block" }),
            !a && !o && /* @__PURE__ */ e("span", { className: "truncate text-lg font-bold text-[var(--text)]", title: r, children: r })
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              className: "collapse-icon dark:hover:bg-dark-light/10 dark:text-white-light flex h-8 w-8 items-center rounded-full transition duration-300 hover:bg-gray-500/10 rtl:rotate-180",
              onClick: s,
              children: /* @__PURE__ */ t("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "m-auto h-5 w-5", children: [
                /* @__PURE__ */ e("path", { d: "M13 19L7 12L13 5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
                /* @__PURE__ */ e(
                  "path",
                  {
                    opacity: "0.5",
                    d: "M16.9998 19L10.9998 12L16.9998 5",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  }
                )
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ e(u, { className: "relative h-[calc(100vh-80px)]", children: /* @__PURE__ */ t("ul", { className: "relative space-y-0.5 p-4 py-0 font-semibold", "data-menu-size": c, children: [
          /* @__PURE__ */ t("h2", { className: "bg-background -mx-4 mb-1 flex items-center px-7 py-3 font-extrabold uppercase", style: { opacity: 0.5 }, children: [
            /* @__PURE__ */ e(
              "svg",
              {
                className: "hidden h-5 w-4 flex-none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                strokeWidth: "1.5",
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: /* @__PURE__ */ e("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
              }
            ),
            /* @__PURE__ */ e("span", { children: i("menu_1") })
          ] }),
          /* @__PURE__ */ e("li", { className: "nav-item", children: /* @__PURE__ */ e(m, {}) })
        ] }) })
      ] })
    }
  ) });
};
export {
  N as default
};
