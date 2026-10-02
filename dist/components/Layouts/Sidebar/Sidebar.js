import { jsx as e, jsxs as r } from "react/jsx-runtime";
import { MenuV2 as d } from "../../MenuV2/MenuV2.js";
import { useAxoloteUI as c } from "../../../contexts/AxoloteUIProvider.js";
import m from "react-perfect-scrollbar";
import { NavLink as h } from "react-router-dom";
import { useSidebar as p } from "./useSidebar.js";
const w = () => {
  const { semidark: o, toggleSidebar: n, t: a } = p(), { logo: s, logoDark: t, brandName: l } = c(), i = l ?? a("brand_name");
  return /* @__PURE__ */ e("div", { className: o ? "dark" : "", children: /* @__PURE__ */ e(
    "nav",
    {
      className: `sidebar fixed top-0 bottom-0 z-50 h-full min-h-screen w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300 ${o ? "text-white-dark" : ""}`,
      children: /* @__PURE__ */ r("div", { className: "bg-sidebar-background h-full", children: [
        /* @__PURE__ */ r("div", { className: "flex items-center justify-between px-4 py-3", children: [
          /* @__PURE__ */ r(h, { to: "/", className: "main-logo flex shrink-0 items-center", children: [
            t && /* @__PURE__ */ e("img", { src: s, alt: i, className: "h-9 w-auto dark:hidden" }),
            t && /* @__PURE__ */ e("img", { src: t, alt: i, className: "hidden h-9 w-auto dark:block" })
          ] }),
          /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              className: "collapse-icon dark:hover:bg-dark-light/10 dark:text-white-light flex h-8 w-8 items-center rounded-full transition duration-300 hover:bg-gray-500/10 rtl:rotate-180",
              onClick: n,
              children: /* @__PURE__ */ r("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "m-auto h-5 w-5", children: [
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
        /* @__PURE__ */ e(m, { className: "relative h-[calc(100vh-80px)]", children: /* @__PURE__ */ r("ul", { className: "relative space-y-0.5 p-4 py-0 font-semibold", children: [
          /* @__PURE__ */ r("h2", { className: "bg-background -mx-4 mb-1 flex items-center px-7 py-3 font-extrabold uppercase", style: { opacity: 0.5 }, children: [
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
            /* @__PURE__ */ e("span", { children: a("menu_1") })
          ] }),
          /* @__PURE__ */ e("li", { className: "nav-item", children: /* @__PURE__ */ e(d, {}) })
        ] }) })
      ] })
    }
  ) });
};
export {
  w as default
};
