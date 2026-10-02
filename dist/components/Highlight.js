import { jsx as i } from "react/jsx-runtime";
import h from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import { useRef as l, useEffect as o } from "react";
const n = ({ children: r }) => {
  const e = l(null);
  return o(() => {
    const t = e.current?.querySelector("pre");
    t && h.highlightElement(t);
  }, []), /* @__PURE__ */ i("div", { ref: e, className: "highlight-el", children: r });
};
export {
  n as default
};
