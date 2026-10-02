import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { Menu as s, MessageSquareMore as a } from "lucide-react";
import { useTranslation as c } from "react-i18next";
import { NoSelectedChatSvg as i } from "./NoSelectedChatSvg.js";
const x = ({ handleOpenMenu: r }) => {
  const { t: l } = c();
  return /* @__PURE__ */ t("div", { className: "relative flex h-full items-center justify-center p-4", children: [
    /* @__PURE__ */ e("button", { onClick: r, className: "hover:text-primary absolute top-4 text-lg xl:hidden ltr:left-4 rtl:right-4", children: /* @__PURE__ */ e(s, {}) }),
    /* @__PURE__ */ t("div", { className: "flex flex-col items-center justify-center py-8", children: [
      /* @__PURE__ */ e("div", { className: "mb-8 h-[calc(100vh_-_320px)] min-h-[120px] w-[280px] text-white md:w-[430px] dark:text-black", children: /* @__PURE__ */ e(i, {}) }),
      /* @__PURE__ */ t("p", { className: "bg-white-dark/20 mx-auto flex max-w-[190px] justify-center rounded-md p-2 font-semibold", children: [
        /* @__PURE__ */ e(a, { className: "mt-1 ltr:mr-2 rtl:ml-2" }),
        l("click_user_to_chat")
      ] })
    ] })
  ] });
};
export {
  x as NoSelectedChat
};
