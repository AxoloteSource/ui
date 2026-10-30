import { useState as l, useRef as d } from "react";
import { useTranslation as E } from "react-i18next";
import { formatDate as R } from "../../../../../lib/formatDate.js";
const D = ({ receiverId: g, scrollToBottom: f, handleAddMessage: S, sendMessage: h }) => {
  const { t: x } = E(), [s, a] = l(""), [p, m] = l([]), o = d(null), r = d({ start: 0, end: 0 });
  return {
    message: s,
    setMessage: a,
    handleSendMessage: async () => {
      if (s !== "")
        try {
          await h({ message: s, user_id: g }), m([]), S({
            isSender: !0,
            message: s,
            imagePath: "",
            timeAgo: R((/* @__PURE__ */ new Date()).toISOString())
          }), a(""), r.current = { start: 0, end: 0 }, f();
        } catch (e) {
          m(e?.response?.data?.data?.message || []);
        }
    },
    insertEmoji: (e) => {
      const t = o.current;
      if (!t) {
        a((i) => `${i}${e}`);
        return;
      }
      const n = t.value, u = Math.min(r.current.start, n.length), M = Math.min(Math.max(r.current.end, u), n.length), c = u + e.length;
      a((i) => `${i.slice(0, u)}${e}${i.slice(M)}`), r.current = { start: c, end: c }, document.activeElement === t && requestAnimationFrame(() => {
        o.current?.setSelectionRange(c, c);
      });
    },
    rememberSelection: (e) => {
      const t = e.currentTarget, n = t.selectionStart ?? 0;
      r.current = { start: n, end: t.selectionEnd ?? n };
    },
    focusTextarea: () => {
      const e = o.current;
      if (!e)
        return;
      e.focus();
      const { start: t, end: n } = r.current;
      e.setSelectionRange(t, n);
    },
    textareaRef: o,
    t: x,
    error: p
  };
};
export {
  D as useInputSendMessage
};
