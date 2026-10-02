import { jsxs as t, jsx as e } from "react/jsx-runtime";
const x = ({ left: s, right: a, fillColor: p, borderColor: r, label: l }) => /* @__PURE__ */ t("div", { className: `absolute ${s} ${a} flex items-center justify-center pb-16`, children: [
  /* @__PURE__ */ e("span", { className: "absolute top-[-1.25rem] text-xs whitespace-nowrap", children: l }),
  /* @__PURE__ */ t("div", { className: `relative h-[5px] w-full ${p}`, children: [
    /* @__PURE__ */ e("div", { className: `absolute top-[-3px] left-0 h-0 w-0 border-t-[6px] border-r-[6px] border-b-[6px] ${r}` }),
    /* @__PURE__ */ e(
      "div",
      {
        className: `absolute top-[-3px] right-[-6px] h-0 w-0 border-t-[6px] border-b-[6px] border-l-[6px] border-t-transparent border-b-transparent ${r}`
      }
    )
  ] })
] });
export {
  x as default
};
