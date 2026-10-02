import { jsx as n } from "react/jsx-runtime";
import * as o from "@radix-ui/react-toggle";
import { cva as a } from "class-variance-authority";
import { cn as s } from "../../lib/utils.js";
const d = a(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function u({
  className: e,
  variant: t,
  size: i,
  ...r
}) {
  return /* @__PURE__ */ n(
    o.Root,
    {
      "data-slot": "toggle",
      className: s(d({ variant: t, size: i, className: e })),
      ...r
    }
  );
}
export {
  u as Toggle,
  d as toggleVariants
};
