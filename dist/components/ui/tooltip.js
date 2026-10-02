import { jsx as r, jsxs as d } from "react/jsx-runtime";
import * as o from "@radix-ui/react-tooltip";
import { cn as n } from "../../lib/utils.js";
function l({
  delayDuration: t = 0,
  ...i
}) {
  return /* @__PURE__ */ r(
    o.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration: t,
      ...i
    }
  );
}
function p({
  ...t
}) {
  return /* @__PURE__ */ r(l, { children: /* @__PURE__ */ r(o.Root, { "data-slot": "tooltip", ...t }) });
}
function f({
  ...t
}) {
  return /* @__PURE__ */ r(o.Trigger, { "data-slot": "tooltip-trigger", ...t });
}
function c({
  className: t,
  sideOffset: i = 4,
  children: e,
  ...a
}) {
  return /* @__PURE__ */ r(o.Portal, { children: /* @__PURE__ */ d(
    o.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset: i,
      className: n(
        "bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-w-sm rounded-md px-3 py-1.5 text-xs",
        t
      ),
      ...a,
      children: [
        e,
        /* @__PURE__ */ r(o.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
export {
  p as Tooltip,
  c as TooltipContent,
  l as TooltipProvider,
  f as TooltipTrigger
};
