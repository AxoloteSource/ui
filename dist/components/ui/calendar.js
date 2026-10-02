import { jsx as a, jsxs as i } from "react/jsx-runtime";
import * as g from "react";
import { format as b } from "date-fns";
import { es as k } from "date-fns/locale";
import { ChevronLeft as v, ChevronRight as x } from "lucide-react";
import { DayPicker as z } from "react-day-picker";
import { cn as e } from "../../lib/utils.js";
import { buttonVariants as s } from "./button.js";
const h = e(
  s({ variant: "outline" }),
  "size-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute"
), Y = e(
  s({ variant: "ghost" }),
  "h-8 p-0 text-sm font-normal"
), F = "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground";
function G({
  className: m,
  classNames: S,
  showOutsideDays: N = !0,
  enableMonthYearPicker: D = !1,
  ...r
}) {
  const [C, c] = g.useState("days"), [o, _] = g.useState(() => r.month ?? r.defaultMonth ?? /* @__PURE__ */ new Date()), [f, u] = g.useState(
    () => Math.floor((r.month ?? r.defaultMonth ?? /* @__PURE__ */ new Date()).getFullYear() / 10) * 10
  );
  g.useEffect(() => {
    r.month && _(r.month);
  }, [r.month]);
  const d = {
    months: "flex flex-col sm:flex-row gap-2",
    month: "flex flex-col gap-4",
    caption: "flex justify-center pt-1 relative items-center w-full",
    caption_label: "text-sm font-medium",
    nav: "flex items-center gap-1",
    nav_button: e(
      s({ variant: "outline" }),
      "size-7 bg-transparent p-0 opacity-50 hover:opacity-100"
    ),
    nav_button_previous: "absolute left-1",
    nav_button_next: "absolute right-1",
    table: "w-full border-collapse space-x-1",
    head_row: "w-full",
    head_cell: "text-center text-muted-foreground font-normal text-[0.8rem] py-1",
    row: "w-full mt-2",
    cell: e(
      "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-primary/10 dark:[&:has([aria-selected])]:bg-white/10 [&:has([aria-selected].day-range-end)]:rounded-r-md",
      r.mode === "range" ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md" : "[&:has([aria-selected])]:rounded-md"
    ),
    day: e(
      s({ variant: "ghost" }),
      "size-8 p-0 font-normal aria-selected:opacity-100"
    ),
    day_range_start: "day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground aria-selected:rounded-l-md",
    day_range_end: "day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground aria-selected:rounded-r-md",
    day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
    day_today: "ring-1 ring-primary",
    day_outside: "day-outside text-muted-foreground aria-selected:text-muted-foreground",
    day_disabled: "text-muted-foreground opacity-50",
    day_range_middle: "aria-selected:bg-primary/20 aria-selected:text-foreground dark:aria-selected:bg-white/15 aria-selected:rounded-none",
    day_hidden: "invisible",
    ...S
  }, w = {
    IconLeft: ({ className: t, ...n }) => /* @__PURE__ */ a(v, { className: e("size-4", t), ...n }),
    IconRight: ({ className: t, ...n }) => /* @__PURE__ */ a(x, { className: e("size-4", t), ...n })
  };
  if (!D)
    return /* @__PURE__ */ a(
      z,
      {
        showOutsideDays: N,
        className: e("p-3", m),
        classNames: d,
        components: w,
        ...r
      }
    );
  const y = (t) => {
    _(t), r.onMonthChange?.(t);
  }, p = (t) => {
    y(new Date(t, o.getMonth(), 1));
  }, j = (t) => {
    y(new Date(o.getFullYear(), t, 1)), c("days");
  }, A = ({ displayMonth: t, id: n }) => /* @__PURE__ */ i(
    "span",
    {
      id: n,
      className: e("flex items-center justify-center gap-1", d.caption_label),
      children: [
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            onClick: () => c("months"),
            className: e(s({ variant: "ghost" }), "h-7 px-2 text-sm font-medium"),
            children: b(t, "MMMM", { locale: k })
          }
        ),
        /* @__PURE__ */ a(
          "button",
          {
            type: "button",
            onClick: () => {
              u(Math.floor(o.getFullYear() / 10) * 10), c("years");
            },
            className: e(s({ variant: "ghost" }), "h-7 px-2 text-sm font-medium"),
            children: b(t, "yyyy")
          }
        )
      ]
    }
  );
  return C === "months" ? /* @__PURE__ */ i("div", { className: e("p-3 pt-4 w-[15.75rem]", m), children: [
    /* @__PURE__ */ i("div", { className: e(d.caption, "mb-2"), children: [
      /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          "aria-label": "Año anterior",
          onClick: () => p(o.getFullYear() - 1),
          className: e(h, "left-1"),
          children: /* @__PURE__ */ a(v, { className: "size-4" })
        }
      ),
      /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          "aria-label": "Seleccionar año",
          onClick: () => {
            u(Math.floor(o.getFullYear() / 10) * 10), c("years");
          },
          className: e(s({ variant: "ghost" }), "text-sm font-medium"),
          children: o.getFullYear()
        }
      ),
      /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          "aria-label": "Año siguiente",
          onClick: () => p(o.getFullYear() + 1),
          className: e(h, "right-1"),
          children: /* @__PURE__ */ a(x, { className: "size-4" })
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "grid grid-cols-3 gap-1", children: Array.from({ length: 12 }, (t, n) => {
      const l = o.getMonth() === n;
      return /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          "aria-current": l ? "date" : void 0,
          onClick: () => j(n),
          className: e(Y, l && F),
          children: b(new Date(2024, n, 1), "MMMM", { locale: k })
        },
        n
      );
    }) })
  ] }) : C === "years" ? /* @__PURE__ */ i("div", { className: e("p-3 pt-4 w-[15.75rem]", m), children: [
    /* @__PURE__ */ i("div", { className: e(d.caption, "mb-2"), children: [
      /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          "aria-label": "Década anterior",
          onClick: () => u((t) => t - 10),
          className: e(h, "left-1"),
          children: /* @__PURE__ */ a(v, { className: "size-4" })
        }
      ),
      /* @__PURE__ */ i("span", { "aria-current": "date", className: "text-sm font-medium", children: [
        f,
        " - ",
        f + 9
      ] }),
      /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          "aria-label": "Década siguiente",
          onClick: () => u((t) => t + 10),
          className: e(h, "right-1"),
          children: /* @__PURE__ */ a(x, { className: "size-4" })
        }
      )
    ] }),
    /* @__PURE__ */ a("div", { className: "grid grid-cols-5 gap-1", children: Array.from({ length: 10 }, (t, n) => {
      const l = f + n, M = o.getFullYear() === l;
      return /* @__PURE__ */ a(
        "button",
        {
          type: "button",
          "aria-current": M ? "date" : void 0,
          onClick: () => {
            p(l), c("months");
          },
          className: e(Y, M && F),
          children: l
        },
        l
      );
    }) })
  ] }) : /* @__PURE__ */ a(
    z,
    {
      ...r,
      showOutsideDays: N,
      className: e("p-3", m),
      classNames: d,
      components: { ...w, ...r.components, CaptionLabel: A },
      month: o,
      onMonthChange: y
    }
  );
}
export {
  G as Calendar
};
