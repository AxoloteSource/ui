import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { useAxoloteUI as u } from "../../contexts/AxoloteUIProvider.js";
import { useState as s, useEffect as h, Suspense as p } from "react";
import g from "../Portals.js";
import b from "./Footer.js";
import w from "./Header.js";
import v from "./Setting.js";
import x from "./Sidebar/Sidebar.js";
const C = ({ children: i }) => {
  const { themeConfig: o, toggleSidebar: l } = u(), [c, m] = s(!1), [d, r] = s(!1), f = () => {
    document.body.scrollTop = 0, document.documentElement.scrollTop = 0;
  }, n = () => {
    document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ? r(!0) : r(!1);
  };
  return h(() => {
    window.addEventListener("scroll", n);
    const a = document.getElementsByClassName("screen_loader");
    return a?.length && (a[0].classList.add("animate__fadeOut"), setTimeout(() => {
      m(!1);
    }, 200)), () => {
      window.removeEventListener("onscroll", n);
    };
  }, []), /* @__PURE__ */ t("div", { className: "relative", children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: `${!o.sidebar && "hidden" || ""} fixed inset-0 z-50 bg-[black]/60 lg:hidden`,
        onClick: l
      }
    ),
    c && /* @__PURE__ */ e("div", { className: "screen_loader animate__animated fixed inset-0 z-[60] grid place-content-center bg-[#fafafa] dark:bg-[#060818]", children: /* @__PURE__ */ t("svg", { width: "64", height: "64", viewBox: "0 0 135 135", xmlns: "http://www.w3.org/2000/svg", fill: "#4361ee", children: [
      /* @__PURE__ */ e("path", { d: "M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z", children: /* @__PURE__ */ e("animateTransform", { attributeName: "transform", type: "rotate", from: "0 67 67", to: "-360 67 67", dur: "2.5s", repeatCount: "indefinite" }) }),
      /* @__PURE__ */ e("path", { d: "M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z", children: /* @__PURE__ */ e("animateTransform", { attributeName: "transform", type: "rotate", from: "0 67 67", to: "360 67 67", dur: "8s", repeatCount: "indefinite" }) })
    ] }) }),
    /* @__PURE__ */ e("div", { className: "fixed bottom-6 z-50 ltr:right-6 rtl:left-6", children: d && /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: "btn btn-outline-primary dark:hover:bg-primary animate-pulse rounded-full bg-[#fafafa] p-2 dark:bg-[#060818]",
        onClick: f,
        children: /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-4 w-4", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8 7l4-4m0 0l4 4m-4-4v18" }) })
      }
    ) }),
    /* @__PURE__ */ e(v, {}),
    /* @__PURE__ */ t("div", { className: `${o.navbar} main-container dark:text-white-dark min-h-screen text-black`, children: [
      /* @__PURE__ */ e(x, {}),
      /* @__PURE__ */ t("div", { className: "main-content flex min-h-screen flex-col", children: [
        /* @__PURE__ */ e(w, {}),
        /* @__PURE__ */ e(p, { children: /* @__PURE__ */ e("div", { className: `${o.animation} animate__animated p-6`, children: i }) }),
        /* @__PURE__ */ e(b, {}),
        /* @__PURE__ */ e(g, {})
      ] })
    ] })
  ] });
};
export {
  C as default
};
