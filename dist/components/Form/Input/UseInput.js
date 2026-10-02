import { useState as l } from "react";
const c = ({ formik: s, name: r, className: t }) => {
  const [o, a] = l(!1), e = () => {
    a(!o);
  }, n = [s.submitCount && s.errors[r] ? "has-error" : "", t].filter(Boolean).join(" ");
  return {
    showPassword: o,
    togglePasswordVisibility: e,
    combinedClassName: n
  };
};
export {
  c as default
};
