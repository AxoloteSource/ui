import { useTranslation as F } from "react-i18next";
const V = (f) => {
  const { t: p } = F(), { isOpen: y, close: c, filters: e, validationSchema: d, title: h, children: S, onSubmit: l } = f, m = e.reduce(
    (i, n) => ({
      ...i,
      [n.property]: n.initialValue
    }),
    {}
  ), g = f.initialValues ?? m, b = (i) => {
    i.resetForm({
      values: m
    });
  }, A = (i) => {
    const n = (o) => o.join("|"), s = [];
    Object.entries(i).forEach(([o, t]) => {
      if (t == null || t === "" || Array.isArray(t) && !t.length)
        return;
      let r;
      const a = e.find((D) => D.property === o)?.operator;
      Array.isArray(t) && t.length > 0 ? r = {
        property: o,
        value: n(t)
      } : typeof t == "object" && t !== null && "from" in t ? (t.from && (typeof t.from == "string" || typeof t.from == "number" || t.from instanceof Date) && (r = {
        property: `${o}_from`,
        value: new Date(t.from).toISOString().split("T")[0]
      }), "to" in t && t.to && (typeof t.to == "string" || typeof t.to == "number" || t.to instanceof Date) && (r = {
        property: `${o}_to`,
        value: new Date(t.to).toISOString().split("T")[0]
      }, s.push(r))) : t !== "" && (r = {
        property: o,
        value: t
      }), r && a && (r.operator = a), r && s.push(r);
    }), l && l({ filters: s }, i), c();
  };
  return {
    t: p,
    isOpen: y,
    filters: e,
    validationSchema: d,
    title: h || p("filters"),
    children: S,
    initialValues: g,
    close: c,
    handleSubmit: A,
    onClear: b
  };
};
export {
  V as useModalFilter
};
