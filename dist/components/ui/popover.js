import { jsx as t } from "react/jsx-runtime";
import * as r from "@radix-ui/react-popover";
import { cn as d } from "../../lib/utils.js";
function p({
  ...o
}) {
  return /* @__PURE__ */ t(r.Root, { "data-slot": "popover", ...o });
}
function m({
  ...o
}) {
  return /* @__PURE__ */ t(r.Trigger, { "data-slot": "popover-trigger", ...o });
}
function c({
  className: o,
  align: e = "center",
  sideOffset: a = 4,
  ...n
}) {
  return /* @__PURE__ */ t(r.Portal, { children: /* @__PURE__ */ t(
    r.Content,
    {
      "data-slot": "popover-content",
      align: e,
      sideOffset: a,
      className: d(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border border-gray-200 dark:border-[var(--border)] p-4 shadow-md outline-hidden bg-[var(--input-background)] text-[var(--text)]",
        o
      ),
      ...n
    }
  ) });
}
function l({
  ...o
}) {
  return /* @__PURE__ */ t(r.Anchor, { "data-slot": "popover-anchor", ...o });
}
export {
  p as Popover,
  l as PopoverAnchor,
  c as PopoverContent,
  m as PopoverTrigger
};
