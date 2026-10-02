import { jsx as e } from "react/jsx-runtime";
const b = ({ ticks: r }) => /* @__PURE__ */ e("div", { className: "absolute top-[10%] right-[5%] left-[7%] flex items-center justify-center pb-16", children: /* @__PURE__ */ e("div", { className: "dark:bg-black-light relative h-[2px] w-full bg-black", children: r.map((l, t) => /* @__PURE__ */ e(
  "div",
  {
    style: { left: `${l}%` },
    className: "absolute top-[0px] h-0 w-0 border-t-[6px] border-r-[1px] border-b-[6px] border-l-[1px] dark:border-black-light border-black"
  },
  t
)) }) });
export {
  b as default
};
