import { jsx as e, jsxs as c } from "react/jsx-runtime";
import { cn as o } from "../../lib/utils.js";
import { Check as d } from "lucide-react";
import { Fragment as h } from "react";
const f = ({ steps: l, activeStep: m, onChange: s, className: n }) => l.length ? /* @__PURE__ */ e("div", { className: o("flex items-start", n), children: l.map((i, a) => {
  const r = a < m, t = a === m;
  return /* @__PURE__ */ c(h, { children: [
    /* @__PURE__ */ c("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          onClick: () => s?.(a),
          disabled: !r && !t,
          className: o(
            "flex h-12 w-12 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-200",
            r && "border-[var(--primary)] bg-[var(--primary)] text-white",
            t && "border-[var(--primary)] bg-[var(--primary)] text-white shadow-[var(--primary)]/30 shadow-lg",
            !r && !t && "border-[var(--border)] text-[var(--text-muted)]",
            (r || t) && s && "cursor-pointer hover:opacity-80",
            !r && !t && "cursor-default"
          ),
          "aria-label": `${i.label}${t ? " (active)" : ""}${r ? " (completed)" : ""}`,
          children: r ? /* @__PURE__ */ e(d, { className: "h-5 w-5", strokeWidth: 2.5 }) : i.icon ? /* @__PURE__ */ e("span", { className: o(!t && "opacity-50"), children: i.icon }) : /* @__PURE__ */ e("span", { children: a + 1 })
        }
      ),
      /* @__PURE__ */ e(
        "span",
        {
          className: o(
            "mt-2 text-center text-xs font-medium",
            t && "text-[var(--text)]",
            r && "text-[var(--text-muted)]",
            !r && !t && "text-[var(--text-muted)]"
          ),
          children: i.label
        }
      )
    ] }),
    a < l.length - 1 && /* @__PURE__ */ e(
      "div",
      {
        className: o(
          "mx-2 mt-6 h-0.5 flex-1 self-start transition-colors duration-300",
          r ? "bg-[var(--primary)]" : "bg-[var(--border)]"
        )
      }
    )
  ] }, a);
}) }) : null;
export {
  f as Wizard
};
