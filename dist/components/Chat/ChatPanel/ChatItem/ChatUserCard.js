import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { Avatar as h } from "../../../Avatar/Avatar.js";
import { Menu as x } from "lucide-react";
const b = ({
  id: s,
  title: i,
  subtitle: d,
  optionalMessage: t,
  isButtonHover: m = !1,
  isActive: c = !1,
  className: l = "",
  showMenu: n = !1,
  handleOpenMenu: o,
  onClickOpenChat: a
}) => /* @__PURE__ */ r(
  "button",
  {
    onClick: () => a && a(s),
    className: `flex w-full ${c ? "bg-gray-100" : ""} items-center justify-between rounded-md p-2 ${m ? "dark:hover:text-primary hover:text-primary cursor-pointer hover:bg-gray-100 dark:hover:bg-[#050b14]" : ""} ${l}`,
    children: [
      n && /* @__PURE__ */ e("div", { className: "hover:text-primary mr-2 p-2 text-lg xl:hidden", children: /* @__PURE__ */ e(x, { onClick: o }) }),
      /* @__PURE__ */ e("div", { className: "flex-1", children: /* @__PURE__ */ r("div", { className: `flex items-center ${l ?? ""}`, children: [
        /* @__PURE__ */ e("div", { className: "flex-none", children: /* @__PURE__ */ e(h, { className: "md:h-auto md:w-12" }) }),
        /* @__PURE__ */ r("div", { className: "mx-3 ltr:text-left rtl:text-right", children: [
          /* @__PURE__ */ e("p", { className: "mb-1 font-semibold", children: i }),
          /* @__PURE__ */ e("p", { className: "text-white-dark text-xs", children: d })
        ] })
      ] }) }),
      t && /* @__PURE__ */ e("div", { className: "text-xs font-semibold whitespace-nowrap", children: /* @__PURE__ */ e("p", { children: t }) })
    ]
  }
);
export {
  b as ChatUserCard
};
