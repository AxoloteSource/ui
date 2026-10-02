import { jsx as i, jsxs as r } from "react/jsx-runtime";
import l from "../../Buttons/Button.js";
import { ButtonTypeEnum as n } from "../../Buttons/enums/buttonType.enum.js";
import { ButtonVariantEnum as h } from "../../Buttons/enums/buttonVariant.enum.js";
import g from "../../Modal/Modal.js";
import { Formik as x, Form as y } from "formik";
import { Funnel as F } from "lucide-react";
import { useModalFilter as b } from "./useModalFilter.js";
const E = (a) => {
  const { t: e, isOpen: m, validationSchema: c, title: s, children: t, initialValues: u, close: d, handleSubmit: p, onClear: f } = b(a);
  return /* @__PURE__ */ i(g, { className: "w-full max-w-lg", title: s, isOpen: m, close: d, icon: /* @__PURE__ */ i(F, {}), children: /* @__PURE__ */ i(x, { enableReinitialize: !0, initialValues: u, validationSchema: c, onSubmit: p, children: (o) => /* @__PURE__ */ r(y, { className: "grid grid-cols-12 gap-3", children: [
    typeof t == "function" ? t(o) : t,
    /* @__PURE__ */ r("div", { className: "col-span-12 mt-3 flex justify-end gap-2", children: [
      /* @__PURE__ */ i(l, { onClick: () => f(o), type: n.Button, color: "danger", variant: h.Outline, children: e("clear") }),
      /* @__PURE__ */ i(l, { className: "", type: n.Submit, children: e("filter") })
    ] })
  ] }) }) });
};
export {
  E as ModalFilter
};
