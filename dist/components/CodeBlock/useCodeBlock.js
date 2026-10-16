import t from "highlight.js/lib/core";
import m from "highlight.js/lib/languages/bash";
import n from "highlight.js/lib/languages/css";
import g from "highlight.js/lib/languages/javascript";
import u from "highlight.js/lib/languages/json";
import l from "highlight.js/lib/languages/php";
import h from "highlight.js/lib/languages/typescript";
import d from "highlight.js/lib/languages/xml";
import { useState as f, useEffect as y } from "react";
const L = ["bash", "css", "javascript", "json", "php", "typescript", "xml"];
t.registerLanguage("bash", m);
t.registerLanguage("css", n);
t.registerLanguage("javascript", g);
t.registerLanguage("json", u);
t.registerLanguage("php", l);
t.registerLanguage("typescript", h);
t.registerLanguage("xml", d);
const G = ({ code: r, language: o }) => {
  const [a, i] = f(!1), s = o ? L.includes(o) : !1, p = s ? o : t.highlightAuto(r).language ?? "plaintext", c = s ? t.highlight(r, { language: o }).value : t.highlightAuto(r).value;
  return y(() => {
    if (a) {
      const e = setTimeout(() => i(!1), 2e3);
      return () => clearTimeout(e);
    }
  }, [a]), {
    detectedLanguage: p,
    highlightedCode: c,
    copied: a,
    copyToClipboard: async () => {
      try {
        await navigator.clipboard.writeText(r), i(!0);
      } catch {
        const e = document.createElement("textarea");
        e.value = r, document.body.appendChild(e), e.select(), document.execCommand("copy"), document.body.removeChild(e), i(!0);
      }
    }
  };
};
export {
  G as useCodeBlock
};
