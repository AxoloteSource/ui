import { jsx as e, jsxs as t } from "react/jsx-runtime";
import { useAxoloteUI as b } from "../../contexts/AxoloteUIProvider.js";
import { LogOut as w } from "lucide-react";
import { useEffect as N } from "react";
import { useTranslation as y } from "react-i18next";
import { useLocation as L, Link as C } from "react-router-dom";
import "../Dropdown/Dropdown.js";
import "../Dropdown/DropdownItem.js";
import z from "../Dropdown/DropdownOld.js";
import M from "../ThemeToggle.js";
const U = () => {
  const { user: a, logout: p, logo: n, logoDark: d, userAvatar: o, brandName: k, themeConfig: l, toggleSidebar: c } = b(), g = L(), { t: s } = y();
  N(() => {
    const i = document.querySelector('ul.horizontal-menu a[href="' + window.location.pathname + '"]');
    if (i) {
      i.classList.add("active");
      const h = document.querySelectorAll("ul.horizontal-menu .nav-link.active");
      for (let r = 0; r < h.length; r++)
        h[0]?.classList.remove("active");
      const u = i.closest("ul.sub-menu");
      if (u) {
        const r = u.closest("li.menu")?.querySelectorAll(".nav-link");
        if (r && r.length) {
          const v = r[0];
          setTimeout(() => {
            v.classList.add("active");
          }, 0);
        }
      }
    }
  }, [g]);
  const x = () => {
    p?.();
  }, f = l.rtlClass === "rtl", m = k ?? s("brand_name");
  return /* @__PURE__ */ e("header", { className: `z-40 ${l.semidark && l.menu === "horizontal" ? "dark" : ""}`, children: /* @__PURE__ */ e("div", { className: "shadow-sm", children: /* @__PURE__ */ t("div", { className: "bg-navbar-background relative flex w-full items-center px-5 py-2.5", children: [
    /* @__PURE__ */ t("div", { className: "horizontal-logo flex items-center justify-between lg:hidden ltr:mr-2 rtl:ml-2", children: [
      /* @__PURE__ */ t(C, { to: "/", className: "main-logo flex shrink-0 items-center", children: [
        n && /* @__PURE__ */ e("img", { src: n, alt: m, className: "mr-2 h-8 w-auto dark:hidden" }),
        d && /* @__PURE__ */ e("img", { src: d, alt: m, className: "mr-2 hidden h-8 w-auto dark:block" })
      ] }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: "collapse-icon hover:text-primary dark:hover:text-primary bg-white-light/40 dark:bg-dark/40 hover:bg-white-light/90 dark:hover:bg-dark/60 relative z-50 flex flex-none rounded-full p-2 lg:hidden ltr:ml-2 rtl:mr-2 dark:text-[#d0d2d6]",
          onClick: c,
          children: /* @__PURE__ */ t("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
            /* @__PURE__ */ e("path", { d: "M20 7L4 7", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
            /* @__PURE__ */ e("path", { opacity: "0.5", d: "M20 12L4 12", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
            /* @__PURE__ */ e("path", { d: "M20 17L4 17", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
          ] })
        }
      )
    ] }),
    l.sidebar && /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: "collapse-icon hover:text-primary dark:hover:text-primary bg-white-light/40 dark:bg-dark/40 hover:bg-white-light/90 dark:hover:bg-dark/60 relative z-50 hidden flex-none rounded-full p-2 lg:flex ltr:mr-2 rtl:ml-2 dark:text-[#d0d2d6]",
        onClick: c,
        title: "Mostrar navegación",
        children: /* @__PURE__ */ t("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ e("path", { d: "M20 7L4 7", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { opacity: "0.5", d: "M20 12L4 12", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }),
          /* @__PURE__ */ e("path", { d: "M20 17L4 17", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
        ] })
      }
    ),
    /* @__PURE__ */ t("div", { className: "flex items-center space-x-1.5 sm:flex-1 lg:space-x-2 ltr:ml-auto ltr:sm:ml-0 rtl:mr-auto rtl:space-x-reverse sm:rtl:mr-0 dark:text-[#d0d2d6]", children: [
      /* @__PURE__ */ e("div", { className: "sm:ltr:mr-auto sm:rtl:ml-auto" }),
      /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(M, {}) }),
      /* @__PURE__ */ e("div", { className: "dropdown flex shrink-0", children: /* @__PURE__ */ e(
        z,
        {
          offset: [0, 8],
          placement: `${f ? "bottom-start" : "bottom-end"}`,
          btnClassName: "relative group block",
          button: o ? /* @__PURE__ */ e("img", { className: "h-9 w-9 rounded-full object-cover saturate-50 group-hover:saturate-100", src: o, alt: "userProfile" }) : /* @__PURE__ */ e("span", { className: "bg-primary/20 text-primary flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold", children: a?.name?.charAt(0)?.toUpperCase() ?? "?" }),
          children: /* @__PURE__ */ t("ul", { className: "text-dark dark:text-white-light/90 w-[230px] !py-0 font-semibold", children: [
            /* @__PURE__ */ e("li", { children: /* @__PURE__ */ t("div", { className: "flex items-center px-4 py-4", children: [
              o && /* @__PURE__ */ e("img", { className: "h-10 w-10 rounded-md object-cover", src: o, alt: "userProfile" }),
              /* @__PURE__ */ t("div", { className: "truncate ltr:pl-4 rtl:pr-4", children: [
                /* @__PURE__ */ t("h4", { className: "text-base", children: [
                  /* @__PURE__ */ e("span", { className: "bg-success-light text-success rounded px-1 text-xs", children: s("admin") }),
                  /* @__PURE__ */ e("br", {}),
                  a?.name
                ] }),
                /* @__PURE__ */ e("button", { type: "button", className: "hover:text-primary text-black/60 dark:text-white dark:hover:text-white", children: a?.email })
              ] })
            ] }) }),
            /* @__PURE__ */ e("li", { className: "border-white-light dark:border-white-light/10 border-t", children: /* @__PURE__ */ t("a", { onClick: x, className: "text-danger cursor-pointer py-3", children: [
              /* @__PURE__ */ e(w, { className: "ltr:mr-2" }),
              s("logout")
            ] }) })
          ] })
        }
      ) })
    ] })
  ] }) }) });
};
export {
  U as default
};
