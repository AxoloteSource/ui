import { jsxs as n, jsx as s } from "react/jsx-runtime";
import b from "clsx";
import { Field as c } from "formik";
import { PhoneField as u } from "./partials/PhoneField.js";
const N = (a) => {
  const { label: t, name: r, formik: e, disabled: i = !1, nameCode: o, country: l = "mx" } = a, m = b({
    "has-error": e.submitCount && (e.errors[r] || e.errors[o])
  });
  return /* @__PURE__ */ n("div", { className: m, children: [
    t && /* @__PURE__ */ s("label", { htmlFor: r, children: t }),
    /* @__PURE__ */ s(
      c,
      {
        type: "tel",
        disabled: i,
        name: r,
        id: r,
        className: "form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b]",
        children: (d) => /* @__PURE__ */ s(u, { ...d, nameCode: o, country: l })
      }
    ),
    e.submitCount && (e.errors[r] || e.errors[o]) ? /* @__PURE__ */ n("div", { className: "text-danger mt-1", children: [
      e.errors[r],
      " ",
      e.errors[o]
    ] }) : ""
  ] });
};
export {
  N as default
};
