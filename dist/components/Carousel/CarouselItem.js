import { jsxs as s, jsx as e } from "react/jsx-runtime";
const c = ({ title: t, description: a, image: l }) => /* @__PURE__ */ s("div", { className: "relative", children: [
  /* @__PURE__ */ e("img", { src: l ? URL.createObjectURL(new Blob([l])) : "", className: "max-h-80 w-full object-cover", alt: "itemImage" }),
  (t || a) && /* @__PURE__ */ e("div", { className: "absolute top-1/4 z-[999] ltr:left-12 rtl:right-12", children: /* @__PURE__ */ s("div", { className: "bg-opacity-70 rounded bg-black p-2", children: [
    t && /* @__PURE__ */ e("div", { className: "text-base font-bold text-white sm:text-3xl", children: t }),
    a && /* @__PURE__ */ e("div", { className: "mt-1 hidden w-4/5 text-base font-medium text-white sm:mt-5 sm:block", children: a })
  ] }) })
] });
export {
  c as default
};
