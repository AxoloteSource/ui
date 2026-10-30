import { jsx as t } from "react/jsx-runtime";
import { useAxoloteUI as i } from "../../contexts/AxoloteUIProvider.js";
import { MenuV2Items as l } from "./MenuV2Items.js";
const x = ({ menu: n, editMode: m = !1, onEdit: o, onDelete: r, onToggleRole: u }) => {
  const { menu: s } = i(), e = n ?? s;
  return e?.items?.length ? /* @__PURE__ */ t("ul", { children: /* @__PURE__ */ t(l, { items: e.items, editMode: m, onEdit: o, onDelete: r, onToggleRole: u }) }) : null;
};
export {
  x as MenuV2,
  x as default
};
