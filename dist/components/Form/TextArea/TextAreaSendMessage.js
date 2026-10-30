import { jsxs as c, Fragment as b, jsx as a } from "react/jsx-runtime";
const K = (m) => {
  const {
    inputKeyUpCallback: n,
    inputKeyDownCallback: l,
    inputSelectCallback: s,
    IconComponent: t,
    value: u,
    name: C,
    placeholder: f,
    wrapperClassName: r,
    startAdornment: o,
    inputRef: x,
    inputCallback: d,
    disabled: h = !1,
    inputClassName: i,
    error: p
  } = m;
  return /* @__PURE__ */ c(b, { children: [
    /* @__PURE__ */ c("div", { className: `${r || "flex items-center border p-2 rounded"}`, children: [
      o && /* @__PURE__ */ a("div", { className: "mr-2 flex shrink-0 items-center", children: o }),
      /* @__PURE__ */ a(
        "textarea",
        {
          ref: x,
          value: u,
          name: C,
          disabled: h,
          placeholder: f,
          onKeyUp: n ? (e) => n(e) : void 0,
          onKeyDown: l ? (e) => l(e) : void 0,
          onSelect: s ? (e) => s(e) : void 0,
          onChange: d ? (e) => d(e) : void 0,
          className: `flex-1 outline-none resize-none ${i || ""}`
        }
      ),
      t && /* @__PURE__ */ a(t, {})
    ] }),
    p && p.map((e, v) => /* @__PURE__ */ a("p", { className: "text-red-500", children: e }, v))
  ] });
};
export {
  K as TextAreaSendMessage
};
