import { jsxs as b, jsx as a } from "react/jsx-runtime";
import { Badge as w } from "../Badge/Badge.js";
import { cn as i } from "../../lib/utils.js";
import { X as I } from "lucide-react";
import { useTabs as N } from "./useTabs.js";
const A = ({
  items: n,
  defaultActive: p = 0,
  activeIndex: v,
  onChange: u,
  onClose: d,
  variant: s = "underline",
  className: x = "",
  panelClassName: h = ""
}) => {
  const { activeIndex: c, setActiveIndex: m, handleKeyDown: y } = N({
    items: n,
    defaultActive: p,
    activeIndex: v,
    onChange: u
  }), o = n[c];
  return n.length ? /* @__PURE__ */ b("div", { className: i("w-full", x), children: [
    /* @__PURE__ */ a(
      "div",
      {
        role: "tablist",
        "aria-orientation": "horizontal",
        onKeyDown: y,
        className: i("flex overflow-x-auto border-b border-[var(--border)]", s === "pills" && "gap-1 border-b-0"),
        children: n.map((e, l) => {
          const r = l === c, f = `tab-${e.id}`, g = `tabpanel-${e.id}`;
          return /* @__PURE__ */ b(
            "button",
            {
              type: "button",
              role: "tab",
              id: f,
              "aria-selected": r,
              "aria-controls": g,
              "aria-disabled": e.disabled,
              tabIndex: r ? 0 : -1,
              disabled: e.disabled,
              onClick: () => m(l),
              className: i(
                "relative flex items-center gap-2 px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-all duration-200 outline-none",
                s === "underline" && [
                  "-mb-px border-b-2",
                  r ? "border-[var(--primary)] text-[var(--primary)]" : "border-transparent text-[var(--text-muted)] hover:border-[var(--border)] hover:text-[var(--text)]"
                ],
                s === "pills" && [
                  "rounded-md",
                  r ? "bg-[var(--primary)] text-white" : "text-[var(--text-muted)] hover:bg-[var(--muted)] hover:text-[var(--text)]"
                ],
                e.disabled && "cursor-not-allowed opacity-50"
              ),
              children: [
                e.icon && /* @__PURE__ */ a("span", { className: "h-4 w-4 shrink-0", children: e.icon }),
                /* @__PURE__ */ a("span", { children: e.label }),
                e.badge !== void 0 && /* @__PURE__ */ a(
                  w,
                  {
                    variant: r ? "primary" : "dark",
                    type: r ? "solid" : "outline",
                    shape: "pill",
                    className: "!my-0 text-[10px] leading-none",
                    children: e.badge
                  }
                ),
                e.closable && d && /* @__PURE__ */ a(
                  "span",
                  {
                    role: "button",
                    tabIndex: 0,
                    "aria-label": `Cerrar pestaña ${e.label}`,
                    onClick: (t) => {
                      t.stopPropagation(), d(l);
                    },
                    onKeyDown: (t) => {
                      (t.key === "Enter" || t.key === " ") && (t.preventDefault(), t.stopPropagation(), d(l));
                    },
                    className: "ml-0.5 rounded-full p-0.5 opacity-60 transition-opacity hover:opacity-100 focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:outline-none",
                    children: /* @__PURE__ */ a(I, { className: "h-3 w-3" })
                  }
                )
              ]
            },
            e.id
          );
        })
      }
    ),
    o && /* @__PURE__ */ a(
      "div",
      {
        role: "tabpanel",
        id: `tabpanel-${o.id}`,
        "aria-labelledby": `tab-${o.id}`,
        className: i("pt-4", h),
        children: o.content
      },
      o.id
    )
  ] }) : null;
};
export {
  A as Tabs
};
