import { jsxs as R, jsx as n } from "react/jsx-runtime";
import { useSensors as _, useSensor as M, PointerSensor as z, KeyboardSensor as G, DndContext as H, MeasuringStrategy as U, closestCenter as V, DragOverlay as W } from "@dnd-kit/core";
import { sortableKeyboardCoordinates as k, SortableContext as q, verticalListSortingStrategy as B } from "@dnd-kit/sortable";
import { useState as S, useMemo as f } from "react";
import { SortableMenuRow as F, MenuRowContent as J, MENU_INDENTATION_WIDTH as O } from "./SortableMenuRow.js";
import { flattenTree as Q, removeChildrenOf as X, getProjection as b, moveItem as Y, buildTree as Z } from "./tree.js";
const ae = ({ items: o, editMode: d, size: l = "md", reorderLabel: v, onReorder: C, onEdit: x, onDelete: j, onToggleRole: N }) => {
  const [t, D] = S(null), [h, c] = S(null), [y, m] = S(0), T = _(
    M(z, { activationConstraint: { distance: 6 } }),
    M(G, {
      coordinateGetter: k
    })
  ), r = f(() => Q(o), [o]), a = f(() => t ? X(r, [t]) : r, [t, r]), E = f(() => r.find(({ id: e }) => e === t), [t, r]), u = t && h ? b(a, t, h, y, O) : null, g = () => {
    D(null), c(null), m(0);
  }, K = ({ active: e }) => {
    const s = String(e.id);
    D(s), c(s), m(0);
  }, w = ({ over: e }) => {
    c(e ? String(e.id) : null);
  }, A = ({ delta: e }) => {
    m(e.x);
  }, P = ({ active: e, over: s }) => {
    const p = String(e.id), i = s ? String(s.id) : null;
    if (!i || p === i) {
      g();
      return;
    }
    const I = b(a, p, i, y, O), L = Y(r, p, i, I.parentId, I.depth);
    g(), C(Z(L));
  };
  return /* @__PURE__ */ R(
    H,
    {
      sensors: T,
      collisionDetection: V,
      measuring: { droppable: { strategy: U.Always } },
      onDragStart: K,
      onDragOver: w,
      onDragMove: A,
      onDragCancel: g,
      onDragEnd: P,
      children: [
        /* @__PURE__ */ n(q, { items: a.map(({ id: e }) => e), strategy: B, children: /* @__PURE__ */ n("ul", { "data-menu-size": l, className: "relative space-y-0.5 p-4 py-0 font-semibold", children: a.map((e) => /* @__PURE__ */ n(
          F,
          {
            item: e.item,
            depth: e.id === t && u ? u.depth : e.depth,
            editMode: d,
            reorderLabel: v,
            onEdit: x,
            onDelete: j,
            onToggleRole: N
          },
          e.id
        )) }) }),
        /* @__PURE__ */ n($, { item: E, depth: u?.depth ?? 0, reorderLabel: v })
      ]
    }
  );
}, $ = ({ item: o, depth: d, reorderLabel: l }) => o ? /* @__PURE__ */ n(W, { children: /* @__PURE__ */ n(J, { item: o.item, depth: d, editMode: !0, reorderLabel: l, isOverlay: !0 }) }) : null;
export {
  ae as SortableMenuV2,
  ae as default
};
