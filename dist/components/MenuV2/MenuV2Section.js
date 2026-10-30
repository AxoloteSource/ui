import { jsx as r, jsxs as u } from "react/jsx-runtime";
import { useTranslation as f } from "react-i18next";
import { MenuV2Actions as x } from "./MenuV2Actions.js";
const g = ({ item: n, editMode: e = !1, onEdit: a, onDelete: i, onToggleRole: c }) => {
  const { t: s } = f(), l = e && n.has_role === !1, p = n.active === !1, o = () => {
    e && c?.(n);
  };
  return /* @__PURE__ */ r("li", { className: "nav-item relative", children: /* @__PURE__ */ u(
    "h2",
    {
      className: `bg-background -mx-4 mb-1 flex items-center px-7 py-3 font-extrabold uppercase menu-section${e ? " cursor-pointer ltr:pr-20 rtl:pl-20" : ""}${l ? " bg-gray-500!" : ""}`,
      style: { opacity: 0.5 },
      title: s(n.name),
      role: e ? "button" : void 0,
      tabIndex: e ? 0 : void 0,
      onClick: o,
      onKeyDown: (t) => {
        e && (t.key === "Enter" || t.key === " ") && (t.preventDefault(), o());
      },
      children: [
        /* @__PURE__ */ r(
          "svg",
          {
            className: "hidden h-5 w-4 flex-none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: "1.5",
            fill: "none",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: /* @__PURE__ */ r("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
          }
        ),
        /* @__PURE__ */ r("span", { className: `truncate ${l ? "text-white" : p ? "text-gray-400" : ""}`, children: s(n.name) }),
        e && /* @__PURE__ */ r("span", { className: "absolute top-1/2 -translate-y-1/2 ltr:right-2 rtl:left-2", children: /* @__PURE__ */ r(x, { item: n, onEdit: a, onDelete: i }) })
      ]
    }
  ) });
};
export {
  g as MenuV2Section
};
