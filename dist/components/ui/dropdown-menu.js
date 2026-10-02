import { jsx as t, jsxs as s } from "react/jsx-runtime";
import * as n from "@radix-ui/react-dropdown-menu";
import { CheckIcon as i, CircleIcon as u, ChevronRightIcon as c } from "lucide-react";
import { cn as r } from "../../lib/utils.js";
function f({
  ...e
}) {
  return /* @__PURE__ */ t(n.Root, { "data-slot": "dropdown-menu", ...e });
}
function g({
  ...e
}) {
  return /* @__PURE__ */ t(n.Portal, { "data-slot": "dropdown-menu-portal", ...e });
}
function v({
  ...e
}) {
  return /* @__PURE__ */ t(
    n.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...e
    }
  );
}
function b({
  className: e,
  sideOffset: o = 4,
  ...a
}) {
  return /* @__PURE__ */ t(n.Portal, { children: /* @__PURE__ */ t(
    n.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: o,
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md",
        e
      ),
      ...a
    }
  ) });
}
function w({
  ...e
}) {
  return /* @__PURE__ */ t(n.Group, { "data-slot": "dropdown-menu-group", ...e });
}
function x({
  className: e,
  inset: o,
  variant: a = "default",
  ...d
}) {
  return /* @__PURE__ */ t(
    n.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": o,
      "data-variant": a,
      className: r(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...d
    }
  );
}
function h({
  className: e,
  children: o,
  checked: a,
  ...d
}) {
  return /* @__PURE__ */ s(
    n.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      checked: a,
      ...d,
      children: [
        /* @__PURE__ */ t("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ t(n.ItemIndicator, { children: /* @__PURE__ */ t(i, { className: "size-4" }) }) }),
        o
      ]
    }
  );
}
function z({
  ...e
}) {
  return /* @__PURE__ */ t(
    n.RadioGroup,
    {
      "data-slot": "dropdown-menu-radio-group",
      ...e
    }
  );
}
function D({
  className: e,
  children: o,
  ...a
}) {
  return /* @__PURE__ */ s(
    n.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: r(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...a,
      children: [
        /* @__PURE__ */ t("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ t(n.ItemIndicator, { children: /* @__PURE__ */ t(u, { className: "size-2 fill-current" }) }) }),
        o
      ]
    }
  );
}
function M({
  className: e,
  inset: o,
  ...a
}) {
  return /* @__PURE__ */ t(
    n.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": o,
      className: r(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        e
      ),
      ...a
    }
  );
}
function N({
  className: e,
  ...o
}) {
  return /* @__PURE__ */ t(
    n.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: r("bg-border -mx-1 my-1 h-px", e),
      ...o
    }
  );
}
function I({
  className: e,
  ...o
}) {
  return /* @__PURE__ */ t(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: r(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        e
      ),
      ...o
    }
  );
}
function y({
  ...e
}) {
  return /* @__PURE__ */ t(n.Sub, { "data-slot": "dropdown-menu-sub", ...e });
}
function _({
  className: e,
  inset: o,
  children: a,
  ...d
}) {
  return /* @__PURE__ */ s(
    n.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": o,
      className: r(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        e
      ),
      ...d,
      children: [
        a,
        /* @__PURE__ */ t(c, { className: "ml-auto size-4" })
      ]
    }
  );
}
function k({
  className: e,
  ...o
}) {
  return /* @__PURE__ */ t(
    n.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: r(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg",
        e
      ),
      ...o
    }
  );
}
export {
  f as DropdownMenu,
  h as DropdownMenuCheckboxItem,
  b as DropdownMenuContent,
  w as DropdownMenuGroup,
  x as DropdownMenuItem,
  M as DropdownMenuLabel,
  g as DropdownMenuPortal,
  z as DropdownMenuRadioGroup,
  D as DropdownMenuRadioItem,
  N as DropdownMenuSeparator,
  I as DropdownMenuShortcut,
  y as DropdownMenuSub,
  k as DropdownMenuSubContent,
  _ as DropdownMenuSubTrigger,
  v as DropdownMenuTrigger
};
