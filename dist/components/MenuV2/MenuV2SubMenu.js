import { jsx as u } from "react/jsx-runtime";
import { MenuV2Header as f } from "./MenuV2Header.js";
import { MenuV2Item as h } from "./MenuV2Item.js";
const t = ({ items: n, editMode: e = !1, onEdit: a, onDelete: l, onToggleRole: p }) => n.length === 0 ? null : /* @__PURE__ */ u("ul", { className: "sub-menu text-gray-500", children: n.map(
  (r) => r.type === "header" || (r.children?.length ?? 0) > 0 ? /* @__PURE__ */ u(f, { item: r, editMode: e, onEdit: a, onDelete: l, onToggleRole: p }, r.id) : /* @__PURE__ */ u(h, { item: r, editMode: e, onEdit: a, onDelete: l, onToggleRole: p }, r.id)
) });
export {
  t as MenuV2SubMenu
};
