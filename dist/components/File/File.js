import { jsx as s, jsxs as p } from "react/jsx-runtime";
import { useState as n, useEffect as d } from "react";
const b = ({ className: c = "", url: a }) => {
  const [t, o] = n(null), [f, e] = n(!0);
  if (d(() => {
    let i = !0;
    return e(!0), fetch(a).then((r) => r.blob()).then((r) => {
      i && (o(r), e(!1));
    }).catch(() => {
      i && e(!1);
    }), () => {
      i = !1;
    };
  }, [a]), f)
    return /* @__PURE__ */ s("div", { children: "Loading..." });
  if (!t)
    return null;
  const l = URL.createObjectURL(t);
  return /* @__PURE__ */ p("div", { className: c, children: [
    t.type.startsWith("image/") && /* @__PURE__ */ s("img", { src: l, alt: "File" }),
    t.type === "application/pdf" && /* @__PURE__ */ s("embed", { src: l, type: "application/pdf", width: "100%", height: "600px" })
  ] });
};
export {
  b as default
};
