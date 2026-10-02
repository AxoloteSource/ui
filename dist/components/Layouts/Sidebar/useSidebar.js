import { useState as d, useEffect as i } from "react";
import { useTranslation as g } from "react-i18next";
import { useLocation as k } from "react-router-dom";
import { useAxoloteUI as p } from "../../../contexts/AxoloteUIProvider.js";
const L = () => {
  const [r, c] = d(""), { themeConfig: n, toggleSidebar: s } = p(), u = k(), { t: l } = g(), a = n.semidark, m = (e) => {
    c((t) => t === e ? "" : e);
  };
  return i(() => {
    const e = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
    if (e) {
      e.classList.add("active");
      const t = e.closest("ul.sub-menu");
      if (t) {
        const o = t.closest("li.menu")?.querySelectorAll(".nav-link");
        if (o && o.length) {
          const f = o[0];
          setTimeout(() => {
            f.click();
          });
        }
      }
    }
  }, []), i(() => {
    window.innerWidth < 1024 && n.sidebar && s();
  }, [u]), {
    semidark: a,
    toggleSidebar: s,
    t: l,
    currentMenu: r,
    toggleMenu: m
  };
};
export {
  L as useSidebar
};
