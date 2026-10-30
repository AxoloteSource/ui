import { jsx as r } from "react/jsx-runtime";
import { MenuV2Items as m } from "./MenuV2Items.js";
const a = ({ items: e, editMode: n = !1, onEdit: u, onDelete: t, onToggleRole: l }) => e.length === 0 ? null : /* @__PURE__ */ r("ul", { className: "sub-menu text-gray-500", children: /* @__PURE__ */ r(m, { items: e, editMode: n, onEdit: u, onDelete: t, onToggleRole: l }) });
export {
  a as MenuV2SubMenu
};
