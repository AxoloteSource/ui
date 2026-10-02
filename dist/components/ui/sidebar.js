import { jsx as t, jsxs as f } from "react/jsx-runtime";
import * as l from "react";
import { Slot as h } from "@radix-ui/react-slot";
import { cva as M } from "class-variance-authority";
import { PanelLeftIcon as z } from "lucide-react";
import { useIsMobile as I } from "../../hooks/useIsMobile.js";
import { cn as r } from "../../lib/utils.js";
import { Button as E } from "./button.js";
import { Input as D } from "./input.js";
import { Separator as T } from "./separator.js";
import { Sheet as B, SheetHeader as A, SheetTitle as O, SheetDescription as R, SheetContent as H } from "./sheet.js";
import { Skeleton as y } from "./skeleton.js";
import { Tooltip as K, TooltipTrigger as j, TooltipContent as G, TooltipProvider as L } from "./tooltip.js";
const $ = "sidebar_state", P = 3600 * 24 * 7, V = "16rem", W = "18rem", q = "3rem", F = "b", k = l.createContext(null);
function S() {
  const a = l.useContext(k);
  if (!a)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return a;
}
function de({
  defaultOpen: a = !0,
  open: e,
  onOpenChange: i,
  className: n,
  style: o,
  children: c,
  ...m
}) {
  const s = I(), [p, u] = l.useState(!1), [v, C] = l.useState(a), g = e ?? v, x = l.useCallback(
    (d) => {
      const b = typeof d == "function" ? d(g) : d;
      i ? i(b) : C(b), document.cookie = `${$}=${b}; path=/; max-age=${P}`;
    },
    [i, g]
  ), w = l.useCallback(() => s ? u((d) => !d) : x((d) => !d), [s, x, u]);
  l.useEffect(() => {
    const d = (b) => {
      b.key === F && (b.metaKey || b.ctrlKey) && (b.preventDefault(), w());
    };
    return window.addEventListener("keydown", d), () => window.removeEventListener("keydown", d);
  }, [w]);
  const N = g ? "expanded" : "collapsed", _ = l.useMemo(
    () => ({
      state: N,
      open: g,
      setOpen: x,
      isMobile: s,
      openMobile: p,
      setOpenMobile: u,
      toggleSidebar: w
    }),
    [N, g, x, s, p, u, w]
  );
  return /* @__PURE__ */ t(k.Provider, { value: _, children: /* @__PURE__ */ t(L, { delayDuration: 0, children: /* @__PURE__ */ t(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": V,
        "--sidebar-width-icon": q,
        ...o
      },
      className: r(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        n
      ),
      ...m,
      children: c
    }
  ) }) });
}
function se({
  side: a = "left",
  variant: e = "sidebar",
  collapsible: i = "offcanvas",
  className: n,
  children: o,
  ...c
}) {
  const { isMobile: m, state: s, openMobile: p, setOpenMobile: u } = S();
  return i === "none" ? /* @__PURE__ */ t(
    "div",
    {
      "data-slot": "sidebar",
      className: r(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        n
      ),
      ...c,
      children: o
    }
  ) : m ? /* @__PURE__ */ f(B, { open: p, onOpenChange: u, ...c, children: [
    /* @__PURE__ */ f(A, { className: "sr-only", children: [
      /* @__PURE__ */ t(O, { children: "Sidebar" }),
      /* @__PURE__ */ t(R, { children: "Displays the mobile sidebar." })
    ] }),
    /* @__PURE__ */ t(
      H,
      {
        "data-sidebar": "sidebar",
        "data-slot": "sidebar",
        "data-mobile": "true",
        className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
        style: {
          "--sidebar-width": W
        },
        side: a,
        children: /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col", children: o })
      }
    )
  ] }) : /* @__PURE__ */ f(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": s,
      "data-collapsible": s === "collapsed" ? i : "",
      "data-variant": e,
      "data-side": a,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: r(
              "relative h-svh w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              e === "floating" || e === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
            )
          }
        ),
        /* @__PURE__ */ t(
          "div",
          {
            className: r(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              a === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              e === "floating" || e === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              n
            ),
            ...c,
            children: /* @__PURE__ */ t(
              "div",
              {
                "data-sidebar": "sidebar",
                className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
                children: o
              }
            )
          }
        )
      ]
    }
  );
}
function le({
  className: a,
  onClick: e,
  ...i
}) {
  const { toggleSidebar: n } = S();
  return /* @__PURE__ */ f(
    E,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: r("h-7 w-7", a),
      onClick: (o) => {
        e?.(o), n();
      },
      ...i,
      children: [
        /* @__PURE__ */ t(z, {}),
        /* @__PURE__ */ t("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function ce({ className: a, ...e }) {
  const { toggleSidebar: i } = S();
  return /* @__PURE__ */ t(
    "button",
    {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: i,
      title: "Toggle Sidebar",
      className: r(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        a
      ),
      ...e
    }
  );
}
function ue({ className: a, ...e }) {
  return /* @__PURE__ */ t(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: r(
        "bg-background relative flex max-w-full min-h-svh flex-1 flex-col",
        "peer-data-[variant=inset]:min-h-[calc(100svh-(--spacing(4)))] md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-0",
        a
      ),
      ...e
    }
  );
}
function be({
  className: a,
  ...e
}) {
  return /* @__PURE__ */ t(
    D,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: r("bg-background h-8 w-full shadow-none", a),
      ...e
    }
  );
}
function pe({ className: a, ...e }) {
  return /* @__PURE__ */ t(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: r("flex flex-col gap-2 p-2", a),
      ...e
    }
  );
}
function fe({ className: a, ...e }) {
  return /* @__PURE__ */ t(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: r("flex flex-col gap-2 p-2", a),
      ...e
    }
  );
}
function me({
  className: a,
  ...e
}) {
  return /* @__PURE__ */ t(
    T,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: r("bg-sidebar-border mx-2 w-auto", a),
      ...e
    }
  );
}
function ge({ className: a, ...e }) {
  return /* @__PURE__ */ t(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: r(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        a
      ),
      ...e
    }
  );
}
function he({ className: a, ...e }) {
  return /* @__PURE__ */ t(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: r("relative flex w-full min-w-0 flex-col p-2", a),
      ...e
    }
  );
}
function ve({
  className: a,
  asChild: e = !1,
  ...i
}) {
  return /* @__PURE__ */ t(
    e ? h : "div",
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: r(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:select-none group-data-[collapsible=icon]:pointer-events-none",
        a
      ),
      ...i
    }
  );
}
function xe({
  className: a,
  asChild: e = !1,
  ...i
}) {
  return /* @__PURE__ */ t(
    e ? h : "button",
    {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: r(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        a
      ),
      ...i
    }
  );
}
function we({
  className: a,
  ...e
}) {
  return /* @__PURE__ */ t(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: r("w-full text-sm", a),
      ...e
    }
  );
}
function Se({ className: a, ...e }) {
  return /* @__PURE__ */ t(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: r("flex w-full min-w-0 flex-col gap-1", a),
      ...e
    }
  );
}
function Ne({ className: a, ...e }) {
  return /* @__PURE__ */ t(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: r("group/menu-item relative", a),
      ...e
    }
  );
}
const U = M(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function ye({
  asChild: a = !1,
  isActive: e = !1,
  variant: i = "default",
  size: n = "default",
  tooltip: o,
  className: c,
  ...m
}) {
  const s = a ? h : "button", { isMobile: p, state: u } = S(), v = /* @__PURE__ */ t(
    s,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": n,
      "data-active": e,
      className: r(U({ variant: i, size: n }), c),
      ...m
    }
  );
  return o ? (typeof o == "string" && (o = {
    children: o
  }), /* @__PURE__ */ f(K, { children: [
    /* @__PURE__ */ t(j, { asChild: !0, children: v }),
    /* @__PURE__ */ t(
      G,
      {
        side: "right",
        align: "center",
        hidden: u !== "collapsed" || p,
        ...o
      }
    )
  ] })) : v;
}
function ke({
  className: a,
  asChild: e = !1,
  showOnHover: i = !1,
  ...n
}) {
  return /* @__PURE__ */ t(
    e ? h : "button",
    {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      className: r(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        i && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        a
      ),
      ...n
    }
  );
}
function Ce({
  className: a,
  ...e
}) {
  return /* @__PURE__ */ t(
    "div",
    {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      className: r(
        "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        a
      ),
      ...e
    }
  );
}
function _e({
  className: a,
  showIcon: e = !1,
  ...i
}) {
  const [n] = l.useState(() => ({
    "--skeleton-width": `${Math.floor(Math.random() * 40) + 50}%`
    // Random width between 50 to 90%.
  }));
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: r("flex h-8 items-center gap-2 rounded-md px-2", a),
      ...i,
      children: [
        e && /* @__PURE__ */ t(
          y,
          {
            className: "size-4 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          }
        ),
        /* @__PURE__ */ t(
          y,
          {
            className: "h-4 max-w-(--skeleton-width) flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: n
          }
        )
      ]
    }
  );
}
function Me({ className: a, ...e }) {
  return /* @__PURE__ */ t(
    "ul",
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: r(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        a
      ),
      ...e
    }
  );
}
function ze({
  className: a,
  ...e
}) {
  return /* @__PURE__ */ t(
    "li",
    {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: r("group/menu-sub-item relative", a),
      ...e
    }
  );
}
function Ie({
  asChild: a = !1,
  size: e = "md",
  isActive: i = !1,
  className: n,
  ...o
}) {
  return /* @__PURE__ */ t(
    a ? h : "a",
    {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": e,
      "data-active": i,
      className: r(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        e === "sm" && "text-xs",
        e === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        n
      ),
      ...o
    }
  );
}
export {
  se as Sidebar,
  ge as SidebarContent,
  fe as SidebarFooter,
  he as SidebarGroup,
  xe as SidebarGroupAction,
  we as SidebarGroupContent,
  ve as SidebarGroupLabel,
  pe as SidebarHeader,
  be as SidebarInput,
  ue as SidebarInset,
  Se as SidebarMenu,
  ke as SidebarMenuAction,
  Ce as SidebarMenuBadge,
  ye as SidebarMenuButton,
  Ne as SidebarMenuItem,
  _e as SidebarMenuSkeleton,
  Me as SidebarMenuSub,
  Ie as SidebarMenuSubButton,
  ze as SidebarMenuSubItem,
  de as SidebarProvider,
  ce as SidebarRail,
  me as SidebarSeparator,
  le as SidebarTrigger,
  S as useSidebar
};
