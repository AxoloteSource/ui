import { jsx as e, jsxs as t } from "react/jsx-runtime";
import { ArrowIcon as h } from "../Lists/IconListItem.js";
import { cn as m } from "../../lib/utils.js";
const p = ({ title: a, description: l, price: i, period: n, features: d, buttonText: r, onButtonClick: o }) => /* @__PURE__ */ t("div", { className: "group hover:border-primary rounded border border-black p-3 text-center transition-all lg:p-5 dark:border-[#1b2e4b]", children: [
  /* @__PURE__ */ e("h3", { className: "text-xl lg:text-2xl", children: a }),
  /* @__PURE__ */ e("div", { className: "group-hover:border-primary dark:border-white-dark mx-auto my-6 w-1/5 border-t border-black transition-all" }),
  /* @__PURE__ */ e("p", { className: "text-[15px]", children: l }),
  /* @__PURE__ */ t("div", { className: "group-hover:text-primary my-7 p-2.5 text-center text-lg transition-all", children: [
    /* @__PURE__ */ t("strong", { className: "group-hover:text-primary dark:text-white-dark text-3xl text-[#3b3f5c] transition-all lg:text-5xl", children: [
      "$",
      i
    ] }),
    " /",
    " ",
    n
  ] }),
  /* @__PURE__ */ e("ul", { className: "group-hover:text-primary mb-5 space-y-2.5 font-semibold transition-all", children: d.map((s, c) => /* @__PURE__ */ t("li", { className: "flex items-center justify-center", children: [
    /* @__PURE__ */ e(h, { className: "text-primary inline h-3.5 w-3.5 ltr:mr-1 rtl:ml-1 rtl:rotate-180" }),
    s
  ] }, c)) }),
  /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      onClick: o,
      className: "btn hover:border-primary hover:bg-primary/10 hover:text-primary dark:border-white-dark/50 dark:text-white-dark w-full text-black shadow-none transition-all",
      children: r
    }
  )
] }), g = ({ title: a, description: l, price: i, period: n, features: d, popular: r, popularLabel: o, buttonText: s, onButtonClick: c }) => /* @__PURE__ */ t(
  "div",
  {
    className: m(
      "border-white-light border p-4 transition-all duration-300 lg:p-9 dark:border-[#1b2e4b]",
      r ? "relative rounded-t-md" : "rounded-md hover:shadow-[0_0_15px_1px_rgba(113,106,202,0.20)] ltr:md:rounded-r-none rtl:md:rounded-l-none"
    ),
    children: [
      r && /* @__PURE__ */ e("div", { className: "bg-primary absolute inset-x-0 -top-0 flex h-10 items-center justify-center rounded-t-md text-base text-white md:-top-[30px]", children: o }),
      /* @__PURE__ */ e("h3", { className: "dark:text-white-light mb-5 text-xl font-semibold text-black", children: a }),
      /* @__PURE__ */ e("p", { children: l }),
      /* @__PURE__ */ t("div", { className: "my-7 p-2.5 text-center text-lg", children: [
        /* @__PURE__ */ t("strong", { className: m("text-xl lg:text-3xl", r ? "text-primary lg:text-4xl" : "dark:text-white-light text-[#3b3f5c]"), children: [
          "$",
          i
        ] }),
        " /",
        " ",
        n
      ] }),
      /* @__PURE__ */ t("div", { className: "mb-6", children: [
        /* @__PURE__ */ e("strong", { className: "dark:text-white-light mb-3 inline-block text-[15px] text-black", children: "Features" }),
        /* @__PURE__ */ e("ul", { className: "space-y-3", children: d.map((x, b) => /* @__PURE__ */ e("li", { children: x }, b)) })
      ] }),
      /* @__PURE__ */ e("button", { type: "button", onClick: c, className: m("btn w-full", r ? "btn-primary" : "btn-dark"), children: s })
    ]
  }
), u = ({ title: a, description: l, price: i, features: n, buttonText: d, onButtonClick: r }) => /* @__PURE__ */ t("div", { className: "group border-white-light rounded border transition-all duration-300 dark:border-[#1b2e4b]", children: [
  /* @__PURE__ */ t("div", { className: "border-white-light border-b p-5 pt-0 dark:border-[#1b2e4b]", children: [
    /* @__PURE__ */ t("span", { className: "dark:text-white-light border-primary flex h-[70px] w-[70px] -translate-y-[30px] items-center justify-center rounded border-2 bg-white text-xl font-bold text-[#3b3f5c] shadow-[0_0_15px_1px_rgba(113,106,202,0.20)] transition-all duration-300 group-hover:-translate-y-10 lg:h-[100px] lg:w-[100px] lg:text-3xl dark:bg-black", children: [
      "$",
      i
    ] }),
    /* @__PURE__ */ e("h3", { className: "mt-4 mb-2.5 text-xl lg:text-2xl", children: a }),
    /* @__PURE__ */ e("p", { className: "text-[15px]", children: l })
  ] }),
  /* @__PURE__ */ t("div", { className: "p-5", children: [
    /* @__PURE__ */ e("ul", { className: "mb-5 space-y-2.5 font-semibold", children: n.map((o, s) => /* @__PURE__ */ e("li", { children: o }, s)) }),
    /* @__PURE__ */ e("button", { type: "button", onClick: r, className: "btn btn-primary w-full", children: d })
  ] })
] }), k = {
  basic: p,
  toggle: g,
  animated: u
}, v = ({ variant: a = "basic", ...l }) => {
  const i = k[a];
  return /* @__PURE__ */ e(i, { ...l });
};
export {
  v as PricingCard,
  v as default
};
