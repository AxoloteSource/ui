import { jsxs as r, jsx as a } from "react/jsx-runtime";
import b from "./useSwitch.js";
const v = (e) => {
  const { label: i, formik: s, disabled: m = !1, id: n, size: t = "md", className: d } = e, { isChecked: o, handleChange: h, switchClassName: u, sizeClasses: N, combinedClassName: c } = b({
    formik: s,
    name: e.name,
    className: d,
    size: t
  }), l = String(e.name);
  return /* @__PURE__ */ r("div", { ...c ? { className: c } : {}, children: [
    i && /* @__PURE__ */ a("label", { htmlFor: n || l, children: i }),
    /* @__PURE__ */ a("div", { className: "relative", children: /* @__PURE__ */ r("div", { className: `relative ${N[t]}`, children: [
      /* @__PURE__ */ a(
        "input",
        {
          type: "checkbox",
          checked: o,
          onChange: h,
          disabled: m,
          className: "peer absolute z-10 h-full w-full cursor-pointer opacity-0 disabled:cursor-not-allowed",
          id: n || l,
          name: l
        }
      ),
      /* @__PURE__ */ a("span", { className: u })
    ] }) }),
    s.submitCount && s.errors[e.name] ? /* @__PURE__ */ a("div", { className: "text-danger mt-1", children: String(s.errors[e.name]) }) : ""
  ] });
};
export {
  v as default
};
