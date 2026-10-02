import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { cn as i } from "../../lib/utils.js";
const d = ({ value: r, onChange: o, monthlyLabel: a = "Monthly", yearlyLabel: s = "Yearly", yearlyBadge: l, className: c }) => /* @__PURE__ */ t("div", { className: i("mt-5 flex justify-center space-x-4 text-base font-semibold md:mt-10", c), children: [
  /* @__PURE__ */ e("span", { className: r ? "text-white-dark" : "text-primary", children: a }),
  /* @__PURE__ */ t("label", { className: "relative h-6 w-12", children: [
    /* @__PURE__ */ e(
      "input",
      {
        type: "checkbox",
        checked: r,
        onChange: () => o(!r),
        className: "peer absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
      }
    ),
    /* @__PURE__ */ e("span", { className: "bg-icon outline_checkbox peer-checked:border-primary peer-checked:before:bg-primary dark:border-white-dark dark:before:bg-white-dark block h-full rounded-full border-2 border-[#ebedf2] transition-all before:absolute before:bottom-1 before:h-4 before:w-4 before:rounded-full before:bg-[#ebedf2] before:bg-center before:bg-no-repeat before:transition-all before:duration-300 ltr:before:left-1 ltr:peer-checked:before:left-7 rtl:before:right-1 rtl:peer-checked:before:right-7" })
  ] }),
  /* @__PURE__ */ t("span", { className: "relative", children: [
    /* @__PURE__ */ e("span", { className: r ? "text-primary" : "text-white-dark", children: s }),
    l && /* @__PURE__ */ e("span", { className: "bg-success absolute my-auto hidden rounded-full px-2 py-0.5 text-xs whitespace-nowrap text-white ltr:left-full ltr:ml-2 rtl:right-full rtl:mr-2", children: l })
  ] })
] });
export {
  d as PricingToggle,
  d as default
};
