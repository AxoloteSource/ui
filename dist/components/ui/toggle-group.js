import { jsx as i } from "react/jsx-runtime";
import * as d from "react";
import * as s from "@radix-ui/react-toggle-group";
import { cn as l } from "../../lib/utils.js";
import { toggleVariants as m } from "./toggle.js";
const u = d.createContext({
  size: "default",
  variant: "default"
});
function p({
  className: a,
  variant: o,
  size: t,
  children: e,
  ...n
}) {
  return /* @__PURE__ */ i(
    s.Root,
    {
      "data-slot": "toggle-group",
      "data-variant": o,
      "data-size": t,
      className: l(
        "group/toggle-group flex items-center rounded-md data-[variant=outline]:shadow-xs",
        a
      ),
      ...n,
      children: /* @__PURE__ */ i(u.Provider, { value: { variant: o, size: t }, children: e })
    }
  );
}
function v({
  className: a,
  children: o,
  variant: t,
  size: e,
  ...n
}) {
  const r = d.useContext(u);
  return /* @__PURE__ */ i(
    s.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": r.variant || t,
      "data-size": r.size || e,
      className: l(
        m({
          variant: r.variant || t,
          size: r.size || e
        }),
        "min-w-0 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
        a
      ),
      ...n,
      children: o
    }
  );
}
export {
  p as ToggleGroup,
  v as ToggleGroupItem
};
