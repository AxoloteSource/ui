import { jsxs as t, jsx as e } from "react/jsx-runtime";
import s from "react";
const c = (l) => {
  const { title: a, subTitle: o, children: d, icon: r } = l;
  return /* @__PURE__ */ t("div", { className: "flex", children: [
    /* @__PURE__ */ e("div", { className: "relative z-[2] mb-5 before:absolute before:top-12 before:-bottom-[15px] before:left-1/2 before:-z-[1] before:block before:h-auto before:w-0 before:-translate-x-1/2 before:border-l-2 before:border-gray-200 ltr:mr-8 rtl:ml-8 dark:before:border-[#191e3a]", children: /* @__PURE__ */ e("div", { className: "flex items-center justify-center rounded-full border-2 border-gray-200 bg-white p-3 dark:border-gray-600 dark:bg-black", children: r && s.createElement(r, { size: 24, className: "text-gray-700 dark:text-gray-300" }) }) }),
    /* @__PURE__ */ t("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ e("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ e("h4", { className: "text-xl font-bold break-words text-blue-600 ltr:text-left rtl:text-right dark:text-blue-400", children: a }) }),
      /* @__PURE__ */ e("p", { className: "break-words text-gray-600 ltr:text-left rtl:text-right dark:text-gray-300", children: o }),
      /* @__PURE__ */ e("div", { className: "max-w-full overflow-hidden", children: d })
    ] })
  ] });
};
export {
  c as TimeLineItem
};
