import { jsx as c, Fragment as B } from "react/jsx-runtime";
import d, { memo as g } from "react";
import { ButtonTypeEnum as E } from "./enums/buttonType.enum.js";
import { ButtonVariantEnum as h } from "./enums/buttonVariant.enum.js";
import { useButton as x } from "./useButton.js";
const y = ({
  disabled: t = !1,
  type: o = E.Button,
  variant: r = h.Solid,
  children: m,
  className: e,
  color: n = "primary",
  loading: a = !1,
  size: u,
  to: i,
  onClick: s
}) => {
  const { tag: f, tagProps: p, customChildren: l } = x({
    variant: r,
    type: o,
    color: n,
    to: i,
    className: e,
    loading: a,
    children: m,
    disabled: t,
    size: u
  });
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    /* @__PURE__ */ c(B, { children: d.createElement(f, { ...p, onClick: s }, l) })
  );
}, R = g(y);
export {
  R as default
};
