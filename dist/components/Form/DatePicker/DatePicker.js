import { jsx as e, jsxs as l } from "react/jsx-runtime";
import { format as g } from "date-fns";
import { es as i } from "date-fns/locale";
import { CalendarIcon as C } from "lucide-react";
import * as M from "react";
import { useDatepicker as x } from "./useDatepicker.js";
import { WrapInput as S } from "../WrapInput.js";
import { Button as v } from "../../ui/button.js";
import { Calendar as P } from "../../ui/calendar.js";
import { Popover as j, PopoverTrigger as N, PopoverContent as O } from "../../ui/popover.js";
import { cn as w } from "../../../lib/utils.js";
function T({ className: s, name: o, formik: r, label: m, allowEmpty: c = !1, initialValue: f, enableMonthYearPicker: p = !0 }) {
  const { date: t, handleSelect: d } = x({
    name: o,
    formik: r,
    allowEmpty: c,
    initialValue: f
  }), [u, n] = M.useState(!1), h = (a) => {
    d(a), a && n(!1);
  };
  return /* @__PURE__ */ e(S, { name: o, formik: r, label: m, className: s, children: /* @__PURE__ */ l(j, { open: u, onOpenChange: n, children: [
    /* @__PURE__ */ e(N, { asChild: !0, children: /* @__PURE__ */ l(
      v,
      {
        id: o,
        variant: "outline",
        className: w("form-input w-full justify-start text-left font-normal", !t && "text-muted-foreground"),
        children: [
          /* @__PURE__ */ e(C, { className: "mr-2 h-4 w-4" }),
          t ? g(t, "d 'de' MMMM 'de' y", { locale: i }) : /* @__PURE__ */ e("span", { children: "Seleccionar fecha" })
        ]
      }
    ) }),
    /* @__PURE__ */ e(O, { className: "z-[9999] w-auto p-0", align: "start", children: /* @__PURE__ */ e(P, { initialFocus: !0, mode: "single", defaultMonth: t, selected: t, onSelect: h, numberOfMonths: 1, locale: i, enableMonthYearPicker: p }) })
  ] }) });
}
export {
  T as DatePicker
};
