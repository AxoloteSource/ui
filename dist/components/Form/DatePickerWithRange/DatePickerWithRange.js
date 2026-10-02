import { jsx as r, jsxs as a, Fragment as s } from "react/jsx-runtime";
import { format as l } from "date-fns";
import { es as o } from "date-fns/locale";
import { CalendarIcon as p } from "lucide-react";
import { useDatepickerWithRange as u } from "./useDatepickerWithRange.js";
import { WrapInput as h } from "../WrapInput.js";
import { Button as M } from "../../ui/button.js";
import { Calendar as g } from "../../ui/calendar.js";
import { Popover as x, PopoverTrigger as v, PopoverContent as y } from "../../ui/popover.js";
import { cn as C } from "../../../lib/utils.js";
function b({
  className: i,
  name: t,
  formik: n,
  label: m,
  allowEmpty: c = !1,
  initialValues: d
}) {
  const { date: e, handleSelect: f } = u({
    name: t,
    formik: n,
    allowEmpty: c,
    initialValues: d
  });
  return /* @__PURE__ */ r(h, { name: t, formik: n, label: m, className: i, children: /* @__PURE__ */ a(x, { children: [
    /* @__PURE__ */ r(v, { asChild: !0, children: /* @__PURE__ */ a(M, { id: t, variant: "outline", className: C("w-full justify-start text-left font-normal", !e && "text-muted-foreground"), children: [
      /* @__PURE__ */ r(p, { className: "mr-2 h-4 w-4" }),
      e?.from ? e.to ? /* @__PURE__ */ a(s, { children: [
        l(e.from, "d 'de' MMMM 'de' y", { locale: o }),
        " - ",
        l(e.to, "d 'de' MMMM 'de' y", { locale: o })
      ] }) : l(e.from, "d 'de' MMMM 'de' y", { locale: o }) : /* @__PURE__ */ r("span", { children: "Seleccionar fechas" })
    ] }) }),
    /* @__PURE__ */ r(y, { className: "z-[9999] w-auto p-0", align: "start", children: /* @__PURE__ */ r(g, { initialFocus: !0, mode: "range", defaultMonth: e?.from, selected: e, onSelect: f, numberOfMonths: 2, locale: o }) })
  ] }) });
}
export {
  b as DatePickerWithRange
};
