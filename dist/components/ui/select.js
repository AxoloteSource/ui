import { jsx as t, jsxs as n } from "react/jsx-runtime";
import * as a from "@radix-ui/react-select";
import { CheckIcon as c, ChevronDownIcon as l, ChevronUpIcon as d } from "lucide-react";
import { cn as r } from "../../lib/utils.js";
function v({
  ...e
}) {
  return /* @__PURE__ */ t(a.Root, { "data-slot": "select", ...e });
}
function x({
  ...e
}) {
  return /* @__PURE__ */ t(a.Group, { "data-slot": "select-group", ...e });
}
function h({
  ...e
}) {
  return /* @__PURE__ */ t(a.Value, { "data-slot": "select-value", ...e });
}
function b({
  className: e,
  children: s,
  ...o
}) {
  return /* @__PURE__ */ n(
    a.Trigger,
    {
      "data-slot": "select-trigger",
      className: r(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&>span]:line-clamp-1",
        e
      ),
      ...o,
      children: [
        s,
        /* @__PURE__ */ t(a.Icon, { asChild: !0, children: /* @__PURE__ */ t(l, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function w({
  className: e,
  children: s,
  position: o = "popper",
  ...i
}) {
  return /* @__PURE__ */ t(a.Portal, { children: /* @__PURE__ */ n(
    a.Content,
    {
      "data-slot": "select-content",
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border shadow-md",
        o === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: o,
      ...i,
      children: [
        /* @__PURE__ */ t(u, {}),
        /* @__PURE__ */ t(
          a.Viewport,
          {
            className: r(
              "p-1",
              o === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: s
          }
        ),
        /* @__PURE__ */ t(m, {})
      ]
    }
  ) });
}
function S({
  className: e,
  ...s
}) {
  return /* @__PURE__ */ t(
    a.Label,
    {
      "data-slot": "select-label",
      className: r("px-2 py-1.5 text-sm font-medium", e),
      ...s
    }
  );
}
function y({
  className: e,
  children: s,
  ...o
}) {
  return /* @__PURE__ */ n(
    a.Item,
    {
      "data-slot": "select-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        e
      ),
      ...o,
      children: [
        /* @__PURE__ */ t("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ t(a.ItemIndicator, { children: /* @__PURE__ */ t(c, { className: "size-4" }) }) }),
        /* @__PURE__ */ t(a.ItemText, { children: s })
      ]
    }
  );
}
function N({
  className: e,
  ...s
}) {
  return /* @__PURE__ */ t(
    a.Separator,
    {
      "data-slot": "select-separator",
      className: r("bg-border pointer-events-none -mx-1 my-1 h-px", e),
      ...s
    }
  );
}
function u({
  className: e,
  ...s
}) {
  return /* @__PURE__ */ t(
    a.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: r(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...s,
      children: /* @__PURE__ */ t(d, { className: "size-4" })
    }
  );
}
function m({
  className: e,
  ...s
}) {
  return /* @__PURE__ */ t(
    a.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: r(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      ...s,
      children: /* @__PURE__ */ t(l, { className: "size-4" })
    }
  );
}
export {
  v as Select,
  w as SelectContent,
  x as SelectGroup,
  y as SelectItem,
  S as SelectLabel,
  m as SelectScrollDownButton,
  u as SelectScrollUpButton,
  N as SelectSeparator,
  b as SelectTrigger,
  h as SelectValue
};
