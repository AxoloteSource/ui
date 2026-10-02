import { jsx as t, jsxs as r } from "react/jsx-runtime";
import { useTranslation as p } from "react-i18next";
import n from "../Buttons/Button.js";
import { ButtonVariantEnum as i } from "../Buttons/enums/buttonVariant.enum.js";
import u from "../File/File.js";
import d from "../Modal/Modal.js";
import f from "../Typography/Typography.js";
import { TypographyVariantEnum as h } from "../Typography/enums/typographyVariant.enum.js";
const k = ({ isOpen: e, close: a, url: l, name: m, onClickApprove: c, onClickDecline: s }) => {
  const { t: o } = p();
  return /* @__PURE__ */ t(d, { title: "Documento", isOpen: e, close: a, children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ t(f, { variant: h.H3, children: m }),
    /* @__PURE__ */ t(u, { url: l }),
    /* @__PURE__ */ r("div", { className: "mt-5 flex justify-end gap-2", children: [
      /* @__PURE__ */ t(n, { variant: i.Outline, className: "btn-outline-success", onClick: c, children: o("approve") }),
      /* @__PURE__ */ t(n, { variant: i.Outline, className: "btn-outline-danger", onClick: s, children: o("decline") })
    ] })
  ] }) });
};
export {
  k as default
};
