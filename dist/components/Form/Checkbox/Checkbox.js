import { jsxs as t, jsx as s } from "react/jsx-runtime";
import h from "../Input/UseInput.js";
import { Field as g } from "formik";
const k = (d) => {
  const { name: e, formik: a, label: n, disabled: c = !1, className: i, onChange: o, onKeyUp: m } = d, { combinedClassName: r } = h({
    formik: a,
    name: e,
    className: i
  }), b = !!a.values[e];
  return /* @__PURE__ */ t("div", { ...r ? { className: r } : {}, children: [
    /* @__PURE__ */ t("label", { htmlFor: e, className: "flex items-center gap-2", children: [
      /* @__PURE__ */ s(
        g,
        {
          id: e,
          name: e,
          type: "checkbox",
          disabled: c,
          checked: b,
          onChange: (l) => {
            a.setFieldValue(e, l.target.checked), o && o(l);
          },
          onKeyUp: m,
          className: "form-checkbox rounded border-gray-300 disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b]"
        }
      ),
      n && /* @__PURE__ */ s("span", { className: "text-sm font-medium", children: n })
    ] }),
    a.submitCount && a.errors[e] ? /* @__PURE__ */ s("div", { className: "text-danger mt-1", children: String(a.errors[e]) }) : ""
  ] });
};
export {
  k as default
};
