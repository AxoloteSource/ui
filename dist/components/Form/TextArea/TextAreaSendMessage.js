import { jsxs as p, Fragment as f, jsx as a } from "react/jsx-runtime";
const b = (d) => {
  const {
    inputKeyUpCallback: s,
    IconComponent: n,
    value: c,
    name: i,
    placeholder: u,
    wrapperClassName: l,
    inputCallback: r,
    disabled: m = !1,
    inputClassName: t,
    error: o
  } = d;
  return /* @__PURE__ */ p(f, { children: [
    /* @__PURE__ */ p("div", { className: `${l || "flex items-center border p-2 rounded"}`, children: [
      /* @__PURE__ */ a(
        "textarea",
        {
          value: c,
          name: i,
          disabled: m,
          placeholder: u,
          onKeyUp: s ? (e) => s(e) : void 0,
          onChange: r ? (e) => r(e) : void 0,
          className: `flex-1 outline-none resize-none ${t || ""}`
        }
      ),
      n && /* @__PURE__ */ a(n, {})
    ] }),
    o && o.map((e, C) => /* @__PURE__ */ a("p", { className: "text-red-500", children: e }, C))
  ] });
};
export {
  b as TextAreaSendMessage
};
