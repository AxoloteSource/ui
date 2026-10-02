const u = ({ formik: e, name: r, className: t, size: d = "md" }) => {
  const a = {
    sm: "h-4 w-8",
    md: "h-6 w-12",
    lg: "h-8 w-16"
  }, l = {
    sm: "before:h-2.5 before:w-2.5 before:bottom-0.5 before:left-0.5 peer-checked:before:left-4.5",
    md: "before:h-4 before:w-4 before:bottom-1 before:left-1 peer-checked:before:left-7",
    lg: "before:h-6 before:w-6 before:bottom-1 before:left-1 peer-checked:before:left-9"
  }, f = !!e.values[r], o = e.errors[r], b = e.touched[r], s = !!o && !!b, c = (h) => {
    e.setFieldValue(r, h.target.checked);
  }, i = `
    block h-full rounded-full transition-all duration-300 ease-in-out
    ${l[d]}
    before:absolute before:rounded-full before:bg-white before:transition-all before:duration-300 before:ease-in-out
    before:shadow-sm

    bg-gray-300 dark:bg-dark
    peer-checked:bg-primary
    peer-focus:ring-2 peer-focus:ring-primary/30
    peer-checked:peer-hover:bg-primary-dark

    peer-disabled:opacity-50 peer-disabled:cursor-not-allowed
    before:peer-disabled:bg-gray-100 dark:before:peer-disabled:bg-gray-400

    dark:before:bg-white-dark dark:peer-checked:before:bg-white
    ${s ? "ring-2 ring-red-500" : ""}
  `;
  return {
    isChecked: f,
    fieldError: o,
    fieldTouched: b,
    hasError: s,
    handleChange: c,
    switchClassName: i,
    sizeClasses: a,
    combinedClassName: t
  };
};
export {
  u as default
};
