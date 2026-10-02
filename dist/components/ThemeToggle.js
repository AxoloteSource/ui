import { jsxs as y, jsx as t } from "react/jsx-runtime";
import { useAxoloteUI as k } from "../contexts/AxoloteUIProvider.js";
import { useTheme as p } from "../contexts/ThemeProvider.js";
import { Sun as v, Monitor as w, Moon as I } from "lucide-react";
const N = ({ className: c = "", size: r = 20, variant: l = "default", showLabel: m = !1, onThemeChange: o }) => {
  const { theme: h, setTheme: d } = k(), { theme: i, setTheme: u } = p(), e = h ?? i, g = d ?? u, x = () => {
    const a = ["light", "dark", "system"], T = (a.indexOf(e) + 1) % a.length, n = a[T];
    g(n), o && o(n);
  }, f = () => {
    switch (l) {
      case "outline":
        return "border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800";
      case "ghost":
        return "rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800";
      default:
        return "bg-white-light/40 dark:bg-dark/40 hover:bg-white-light/90 dark:hover:bg-dark/60 rounded-full";
    }
  }, b = () => {
    switch (e) {
      case "dark":
        return /* @__PURE__ */ t(I, { size: r });
      case "system":
        return /* @__PURE__ */ t(w, { size: r });
      default:
        return /* @__PURE__ */ t(v, { size: r });
    }
  }, s = () => {
    switch (e) {
      case "system":
        return "Sistema";
      case "light":
        return "Claro";
      case "dark":
        return "Oscuro";
      default:
        return "Desconocido";
    }
  };
  return /* @__PURE__ */ y(
    "button",
    {
      className: `${f()} ${c} hover:text-primary flex items-center justify-center p-2 text-gray-700 transition-colors duration-200 dark:text-gray-300`,
      onClick: x,
      title: `Cambiar a tema ${s()}`,
      "aria-label": `Tema actual: ${e}`,
      children: [
        b(),
        m && /* @__PURE__ */ t("span", { className: "ml-2 text-sm font-medium capitalize", children: s() })
      ]
    }
  );
};
export {
  N as default
};
