import { jsx as r, Fragment as o, jsxs as i } from "react/jsx-runtime";
import { useAvatar as n } from "./useAvatar.js";
const d = ({ status: t, imagePath: e, className: s = "" }) => {
  const a = e || "/assets/images/user-profile.webp", { avatarStatus: l } = n({ status: t ?? null });
  return /* @__PURE__ */ r(o, { children: /* @__PURE__ */ i("div", { className: "relative flex-none", children: [
    /* @__PURE__ */ r("img", { src: a, className: `h-10 w-10 rounded-full object-cover transition-all duration-300 ${s ?? ""}` }),
    t && /* @__PURE__ */ r("div", { className: "absolute bottom-0 ltr:right-0 rtl:left-0", children: /* @__PURE__ */ r("div", { className: `${l} h-4 w-4 rounded-full` }) })
  ] }) });
};
export {
  d as Avatar
};
