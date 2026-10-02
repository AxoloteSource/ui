import { jsx as e, Fragment as o, jsxs as d } from "react/jsx-runtime";
const h = (l) => {
  const { label: s, name: a, formik: r, children: i, parentWrapper: m, parentClassName: t, className: c = "" } = l, n = /* @__PURE__ */ e(o, { children: /* @__PURE__ */ d("div", { className: `${c} ${r.submitCount && r.errors[a] ? "has-error" : ""}`, children: [
    s && /* @__PURE__ */ e("label", { htmlFor: a, children: s }),
    /* @__PURE__ */ e("div", { className: "relative", children: i }),
    r.submitCount && r.errors[a] ? /* @__PURE__ */ e("div", { className: "text-danger mt-1", children: String(r.errors[a]) }) : ""
  ] }) });
  return m ? /* @__PURE__ */ e("div", { className: `${t || ""}`, children: n }) : n;
};
export {
  h as WrapInput
};
