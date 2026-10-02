import { useState as k, useCallback as u } from "react";
const D = ({ items: t, defaultActive: v = 0, activeIndex: f, onChange: d }) => {
  const [p, h] = k(v), c = f !== void 0, r = c ? f : p, o = u(
    (e) => {
      e < 0 || e >= t.length || t[e]?.disabled || (c || h(e), d?.(e));
    },
    [c, t, d]
  ), a = u(
    (e, n) => {
      let l = e;
      const s = t.length;
      for (let b = 0; b < s; b++)
        if (l = (l + n + s) % s, !t[l]?.disabled) return l;
      return e;
    },
    [t]
  ), i = u(
    (e) => {
      let n = r;
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault(), n = a(r, -1);
          break;
        case "ArrowRight":
          e.preventDefault(), n = a(r, 1);
          break;
        case "Home":
          e.preventDefault(), n = a(-1, 1);
          break;
        case "End":
          e.preventDefault(), n = a(t.length, -1);
          break;
        default:
          return;
      }
      o(n);
    },
    [r, a, o, t.length]
  );
  return {
    activeIndex: r,
    setActiveIndex: o,
    handleKeyDown: i
  };
};
export {
  D as useTabs
};
