import { jsxs as s, jsx as r } from "react/jsx-runtime";
const c = ({ message: e, children: t }) => /* @__PURE__ */ s("div", { className: "bg-background/80 sticky top-0 z-10 flex items-center justify-center gap-2 px-3 py-1 backdrop-blur", role: "status", "aria-live": "polite", children: [
  t,
  /* @__PURE__ */ r("div", { className: "text-muted-foreground py-2 text-center text-xs", children: e })
] });
export {
  c as ChatMessage
};
