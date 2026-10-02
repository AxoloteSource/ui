import { jsxs as r, Fragment as C, jsx as a } from "react/jsx-runtime";
import { InputTypeEnum as f } from "./InputType.enum.js";
const v = (u) => {
  const {
    label: l,
    name: d,
    placeholder: c,
    disabled: i = !1,
    inputClassName: n,
    wrapperClassName: t,
    IconComponent: s,
    value: m,
    inputCallback: o,
    inputKeyUpCallback: p
  } = u;
  return /* @__PURE__ */ r(C, { children: [
    l && /* @__PURE__ */ a("label", { children: l }),
    /* @__PURE__ */ r("div", { className: `${t || "flex items-center border p-2 rounded bg-[var(--input-background)]"}`, children: [
      /* @__PURE__ */ a(
        "input",
        {
          onKeyUp: p ? (e) => p(e) : void 0,
          onChange: o ? (e) => o(e) : void 0,
          value: m,
          name: d,
          type: f.Text,
          placeholder: `${c}`,
          className: `${n || "flex-1 outline-none"}`,
          disabled: i
        }
      ),
      s && /* @__PURE__ */ a(s, {})
    ] })
  ] });
};
export {
  v as InputWithIcon
};
