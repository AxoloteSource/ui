import { jsxs as F, Fragment as v, jsx as t } from "react/jsx-runtime";
import { useFloating as w, autoUpdate as b, offset as y, flip as O, shift as P, useHover as R, useFocus as S, useDismiss as j, useRole as k, useInteractions as D, FloatingPortal as I } from "@floating-ui/react";
import z from "clsx";
import { useState as A } from "react";
const N = ({ children: o, content: n, placement: r = "top", offset: i = 5, className: l = "" }) => {
  const [s, a] = A(!1), {
    refs: { setFloating: c, setReference: f },
    floatingStyles: p,
    context: e
  } = w({
    open: s,
    onOpenChange: a,
    placement: r,
    // Asegurar que el tooltip permanezca en la pantalla
    whileElementsMounted: b,
    middleware: [
      y(i),
      O({
        fallbackAxisSideDirection: "start"
      }),
      P()
    ]
  }), m = R(e, { move: !1 }), d = S(e), u = j(e), g = k(e, { role: "tooltip" }), { getReferenceProps: x, getFloatingProps: h } = D([m, d, u, g]);
  return /* @__PURE__ */ F(v, { children: [
    /* @__PURE__ */ t("div", { ref: f, ...x(), children: o }),
    /* @__PURE__ */ t(I, { children: s && /* @__PURE__ */ t(
      "div",
      {
        ref: c,
        style: p,
        ...h(),
        className: z("z-[9999] rounded bg-black px-2 py-1 text-xs text-white shadow-md", l),
        children: n
      }
    ) })
  ] });
};
export {
  N as Tooltip
};
