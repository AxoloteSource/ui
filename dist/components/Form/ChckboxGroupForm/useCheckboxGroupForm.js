import { useMemo as c } from "react";
const a = ({ formik: e, name: o }) => {
  const r = c(() => e.values[o] || [], [e, o]), s = e.errors[o], t = e.touched[o];
  return {
    fieldValue: r,
    showError: !!s && !!t,
    handleChange: async (u) => {
      await e.setFieldValue(o, u), await e.setFieldTouched(o, !0, !1);
    }
  };
};
export {
  a as useCheckboxGroupForm
};
