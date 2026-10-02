import { jsxs as d, Fragment as F, jsx as e } from "react/jsx-runtime";
import c from "./DragDropFiles.js";
import { Field as n } from "formik";
const x = ({ multiple: s = !0, isLoading: o, name: r, formik: t, accept: l }) => {
  const a = async (i) => {
    s ? await t.setFieldValue(r, i) : await t.setFieldValue(r, i[0]);
  };
  return /* @__PURE__ */ d(F, { children: [
    /* @__PURE__ */ e(n, { name: r, id: r, children: () => /* @__PURE__ */ e(c, { isLoading: o, onUploadFile: a, multiple: s, accept: l }) }),
    t.submitCount && t.errors[r] ? /* @__PURE__ */ e("div", { className: "text-danger mt-1", children: t.errors[r].toString() }) : ""
  ] });
};
export {
  x as default
};
