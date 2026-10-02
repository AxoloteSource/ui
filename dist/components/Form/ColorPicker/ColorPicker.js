import { jsxs as o, jsx as r } from "react/jsx-runtime";
const u = ({ name: l, label: a, formik: e, className: d = "" }) => {
  const t = e.values[l] || "";
  return /* @__PURE__ */ o("div", { className: d, children: [
    a && /* @__PURE__ */ r("label", { className: "mb-1 block text-sm font-medium", children: a }),
    /* @__PURE__ */ o("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ r("div", { className: "relative", children: /* @__PURE__ */ r(
        "input",
        {
          type: "color",
          value: t || "#000000",
          onChange: (s) => e.setFieldValue(l, s.target.value),
          className: "h-10 w-16 cursor-pointer rounded border border-gray-300 bg-transparent p-1"
        }
      ) }),
      /* @__PURE__ */ r(
        "input",
        {
          type: "text",
          value: t,
          onChange: (s) => e.setFieldValue(l, s.target.value),
          placeholder: "#000000",
          className: "h-10 flex-1 rounded-md border border-gray-300 bg-white px-3 text-sm outline-none focus:border-blue-500"
        }
      ),
      t && /* @__PURE__ */ r("span", { className: "inline-block h-8 w-8 flex-shrink-0 rounded-full border border-gray-300", style: { backgroundColor: t } })
    ] }),
    e.submitCount && e.errors[l] ? /* @__PURE__ */ r("div", { className: "text-danger mt-1 text-xs", children: String(e.errors[l]) }) : null
  ] });
};
export {
  u as default
};
