import { jsx as r, jsxs as m } from "react/jsx-runtime";
import * as s from "react";
import { OTPInput as c, OTPInputContext as u } from "input-otp";
import { Minus as f } from "lucide-react";
import { cn as n } from "../../lib/utils.js";
const x = s.forwardRef(({ className: e, containerClassName: t, ...a }, o) => /* @__PURE__ */ r(
  c,
  {
    ref: o,
    containerClassName: n(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      t
    ),
    className: n("disabled:cursor-not-allowed", e),
    ...a
  }
));
x.displayName = "InputOTP";
const O = s.forwardRef(({ className: e, ...t }, a) => /* @__PURE__ */ r("div", { ref: a, className: n("flex items-center", e), ...t }));
O.displayName = "InputOTPGroup";
const P = s.forwardRef(({ index: e, className: t, ...a }, o) => {
  const i = s.useContext(u), { char: d, hasFakeCaret: l, isActive: p } = i.slots[e];
  return /* @__PURE__ */ m(
    "div",
    {
      ref: o,
      className: n(
        "relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        p && "z-10 ring-1 ring-ring",
        t
      ),
      ...a,
      children: [
        d,
        l && /* @__PURE__ */ r("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ r("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" }) })
      ]
    }
  );
});
P.displayName = "InputOTPSlot";
const T = s.forwardRef(({ ...e }, t) => /* @__PURE__ */ r("div", { ref: t, role: "separator", ...e, children: /* @__PURE__ */ r(f, {}) }));
T.displayName = "InputOTPSeparator";
export {
  x as InputOTP,
  O as InputOTPGroup,
  T as InputOTPSeparator,
  P as InputOTPSlot
};
