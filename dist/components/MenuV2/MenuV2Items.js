import { jsx as a, Fragment as u, jsxs as c } from "react/jsx-runtime";
import { Fragment as h } from "react";
import { MenuV2Header as t } from "./MenuV2Header.js";
import { MenuV2Item as V } from "./MenuV2Item.js";
import { MenuV2Section as x } from "./MenuV2Section.js";
const F = ({ items: m, editMode: s = !1, onEdit: f, onDelete: n, onToggleRole: p }) => /* @__PURE__ */ a(u, { children: m.map((r) => r.type === "section" ? /* @__PURE__ */ c(h, { children: [
  /* @__PURE__ */ a(
    x,
    {
      item: r,
      editMode: s,
      onEdit: f,
      onDelete: n,
      onToggleRole: p
    }
  ),
  /* @__PURE__ */ a(
    F,
    {
      items: r.children ?? [],
      editMode: s,
      onEdit: f,
      onDelete: n,
      onToggleRole: p
    }
  )
] }, r.id) : r.type === "header" || (r.children?.length ?? 0) > 0 ? /* @__PURE__ */ a(t, { item: r, editMode: s, onEdit: f, onDelete: n, onToggleRole: p }, r.id) : /* @__PURE__ */ a(V, { item: r, editMode: s, onEdit: f, onDelete: n, onToggleRole: p }, r.id)) });
export {
  F as MenuV2Items,
  F as default
};
