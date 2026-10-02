import { jsxs as i, jsx as t } from "react/jsx-runtime";
import a from "clsx";
const m = ({ children: n, color: e = "primary", variant: s = "default", className: r, ...o }) => {
  const c = () => {
    const l = "form-checkbox", d = {
      default: "",
      rounded: "rounded-full",
      outline: `outline-${e}`,
      outlineRounded: `outline-${e} rounded-full`
    }, u = s === "default" || s === "rounded" ? {
      primary: "",
      success: "text-success",
      secondary: "text-secondary",
      danger: "text-danger",
      warning: "text-warning",
      info: "text-info",
      dark: "text-dark"
    } : { primary: "", success: "", secondary: "", danger: "", warning: "", info: "", dark: "" };
    return a(l, d[s], u[e]);
  };
  return /* @__PURE__ */ i("label", { className: a("inline-flex items-center", r), children: [
    /* @__PURE__ */ t("input", { type: "checkbox", className: c(), ...o }),
    n && /* @__PURE__ */ t("span", { className: "ml-2", children: n })
  ] });
};
export {
  m as default
};
