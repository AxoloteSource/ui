import { jsx as m } from "react/jsx-runtime";
import { useAxoloteUI as c } from "../../contexts/AxoloteUIProvider.js";
import { MenuV2Items as p } from "./MenuV2Items.js";
import { SortableMenuV2 as x } from "./sortable/SortableMenuV2.js";
const M = ({
  menu: f,
  editMode: t = !1,
  onEdit: s,
  onDelete: r,
  onToggleRole: n,
  sortable: o = !1,
  onReorder: u,
  reorderLabel: a = "Reorder menu item"
}) => {
  const { menu: l } = c(), e = f ?? l;
  if (!e?.items?.length)
    return null;
  const i = e.size ?? "md";
  return o && t && u ? /* @__PURE__ */ m(
    x,
    {
      items: e.items,
      editMode: t,
      size: i,
      reorderLabel: a,
      onReorder: u,
      onEdit: s,
      onDelete: r,
      onToggleRole: n
    }
  ) : /* @__PURE__ */ m("ul", { "data-menu-size": i, children: /* @__PURE__ */ m(p, { items: e.items, editMode: t, onEdit: s, onDelete: r, onToggleRole: n }) });
};
export {
  M as MenuV2,
  M as default
};
