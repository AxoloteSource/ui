import { jsxs as g, jsx as e } from "react/jsx-runtime";
import { useSortable as y } from "@dnd-kit/sortable";
import { CSS as N } from "@dnd-kit/utilities";
import { GripVertical as w } from "lucide-react";
import { useTranslation as C } from "react-i18next";
import { MenuV2Actions as M } from "../MenuV2Actions.js";
import { resolveIcon as R } from "../resolveIcon.js";
const S = 18, T = "font-extrabold uppercase tracking-wide", $ = ({
  item: t,
  depth: n,
  editMode: s,
  reorderLabel: a,
  isDragging: i = !1,
  isOverlay: c = !1,
  activatorRef: l,
  dragHandleProps: d,
  onEdit: m,
  onDelete: p,
  onToggleRole: u
}) => {
  const { t: r } = C(), f = R(t.icon, "menu-icon shrink-0"), o = s && t.has_role === !1, b = t.active === !1, { listeners: v, ...x } = d ?? {};
  return /* @__PURE__ */ g(
    "div",
    {
      className: `group flex items-center gap-1 rounded-md py-1 pr-2 transition-colors${o ? " bg-gray-500!" : ""}${c ? " border border-[var(--border)] bg-[var(--card)] shadow-lg" : ""}${i ? " opacity-40" : ""}`,
      style: { marginLeft: n * S },
      children: [
        /* @__PURE__ */ e(
          "button",
          {
            ref: l,
            type: "button",
            className: "cursor-grab touch-none rounded p-1 text-[var(--text-muted)] hover:bg-[var(--muted)] hover:text-[var(--primary)] active:cursor-grabbing",
            "aria-label": a,
            onClick: (h) => h.stopPropagation(),
            ...x,
            ...v,
            children: /* @__PURE__ */ e(w, { size: 16 })
          }
        ),
        /* @__PURE__ */ g("button", { type: "button", className: "flex min-w-0 flex-1 items-center gap-2 py-1 text-left", onClick: () => u?.(t), children: [
          f,
          /* @__PURE__ */ e(
            "span",
            {
              className: `truncate ${t.type === "section" ? T : ""}${o ? " text-white" : b ? " text-gray-400" : ""}`,
              title: r(t.name),
              children: r(t.name)
            }
          )
        ] }),
        /* @__PURE__ */ e(M, { item: t, onEdit: m, onDelete: p })
      ]
    }
  );
}, H = ({ item: t, depth: n, editMode: s, reorderLabel: a, onEdit: i, onDelete: c, onToggleRole: l }) => {
  const { attributes: d, listeners: m, setNodeRef: p, setActivatorNodeRef: u, transform: r, transition: f, isDragging: o } = y({ id: t.id });
  return /* @__PURE__ */ e(
    "li",
    {
      ref: p,
      className: "menu nav-item list-none",
      "data-menu-item-id": t.id,
      style: {
        transform: N.Translate.toString(r),
        transition: f
      },
      children: /* @__PURE__ */ e(
        $,
        {
          item: t,
          depth: n,
          editMode: s,
          reorderLabel: a,
          isDragging: o,
          activatorRef: u,
          dragHandleProps: { ...d, listeners: m },
          onEdit: i,
          onDelete: c,
          onToggleRole: l
        }
      )
    }
  );
};
export {
  S as MENU_INDENTATION_WIDTH,
  $ as MenuRowContent,
  H as SortableMenuRow
};
