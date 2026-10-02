import { jsx as n } from "react/jsx-runtime";
import { createContext as a, useContext as i } from "react";
const l = {
  theme: "light",
  menu: "vertical",
  layout: "full",
  rtlClass: "ltr",
  animation: "",
  navbar: "navbar-sticky",
  semidark: !1,
  sidebar: !1
}, e = {
  themeConfig: l,
  setThemeConfig: () => {
  },
  toggleSidebar: () => {
  }
}, t = a(e);
function f({ children: o, value: r }) {
  return /* @__PURE__ */ n(t.Provider, { value: { ...e, ...r }, children: o });
}
function m() {
  return i(t);
}
export {
  f as AxoloteUIProvider,
  m as useAxoloteUI
};
