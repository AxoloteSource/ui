import { useState as n, useEffect as o } from "react";
const c = (s = 768) => {
  const [t, i] = n(!1);
  return o(() => {
    const e = () => {
      i(window.innerWidth < s);
    };
    return e(), window.addEventListener("resize", e), () => {
      window.removeEventListener("resize", e);
    };
  }, [s]), t;
};
export {
  c as useIsMobile
};
