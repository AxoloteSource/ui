import { jsx as r, Fragment as s, jsxs as n } from "react/jsx-runtime";
import { UserRound as o } from "lucide-react";
import { useAvatar as i } from "./useAvatar.js";
const m = ({ status: t, imagePath: e, className: l = "" }) => {
  const { avatarStatus: a } = i({ status: t ?? null });
  return /* @__PURE__ */ r(s, { children: /* @__PURE__ */ n("div", { className: "relative flex-none", children: [
    e ? /* @__PURE__ */ r("img", { src: e, className: `h-10 w-10 rounded-full object-cover transition-all duration-300 ${l ?? ""}` }) : /* @__PURE__ */ r("div", { className: `flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-400 transition-all duration-300 ${l ?? ""}`, children: /* @__PURE__ */ r(o, { className: "h-6 w-6" }) }),
    t && /* @__PURE__ */ r("div", { className: "absolute bottom-0 ltr:right-0 rtl:left-0", children: /* @__PURE__ */ r("div", { className: `${a} h-4 w-4 rounded-full` }) })
  ] }) });
};
export {
  m as Avatar
};
