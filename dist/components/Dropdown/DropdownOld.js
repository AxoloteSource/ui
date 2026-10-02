import { jsxs as b, Fragment as E, jsx as c } from "react/jsx-runtime";
import { forwardRef as v, useState as r, useEffect as h, useImperativeHandle as w } from "react";
import { usePopper as y } from "react-popper";
const C = (e, a) => {
  const [n, t] = r(!1), [o, m] = r(null), [s, f] = r(null), { styles: d, attributes: u } = y(o, s, {
    placement: e.placement ?? "bottom-end",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: e.offset ?? [0, 0]
        }
      }
    ]
  });
  return h(() => {
    const l = (p) => {
      const i = p.target;
      o?.contains(i) || s?.contains(i) || t(!1);
    };
    return document.addEventListener("mousedown", l), () => {
      document.removeEventListener("mousedown", l);
    };
  }, [o, s]), w(a, () => ({
    close() {
      t(!1);
    }
  })), /* @__PURE__ */ b(E, { children: [
    /* @__PURE__ */ c("button", { ref: m, type: "button", className: e.btnClassName, onClick: () => t(!n), children: e.button }),
    /* @__PURE__ */ c("div", { ref: f, style: d.popper, ...u.popper, className: "z-50", onClick: () => t(!n), children: n && e.children })
  ] });
}, D = v(C);
export {
  D as default
};
