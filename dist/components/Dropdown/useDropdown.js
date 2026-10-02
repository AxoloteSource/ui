import { useClass as b } from "../../hooks/useClass.js";
import { useState as o, useEffect as w, useImperativeHandle as y } from "react";
import { usePopper as C } from "react-popper";
import { buttonClasses as R } from "../Buttons/useButton.js";
const g = {
  ...R,
  points: "points-class",
  "points-alt": "points-alt-class"
}, h = (c) => {
  const { variant: i, color: l, forwardedRef: a } = c, { customClass: m } = b(g, i, l), [f, s] = o(!1), [e, p] = o(null), [t, u] = o(null), { styles: d, attributes: E } = C(e, t, {
    placement: "bottom-end",
    strategy: "fixed",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 0]
        }
      }
    ]
  });
  return w(() => {
    const n = (v) => {
      const r = v.target;
      e?.contains(r) || t?.contains(r) || s(!1);
    };
    return document.addEventListener("mousedown", n), () => {
      document.removeEventListener("mousedown", n);
    };
  }, [e, t]), y(a, () => ({
    close() {
      s(!1);
    }
  })), {
    referenceRef: { current: e },
    setVisibility: s,
    visibility: f,
    popperRef: { current: t },
    setReferenceElement: p,
    setPopperElement: u,
    styles: d,
    attributes: E,
    customClass: m
  };
};
export {
  g as classes,
  h as useDropdown
};
