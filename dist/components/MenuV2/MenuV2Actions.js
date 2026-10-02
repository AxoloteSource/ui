import { jsxs as c, jsx as o } from "react/jsx-runtime";
import i from "../Buttons/Button.js";
import { ButtonVariantEnum as t } from "../Buttons/enums/buttonVariant.enum.js";
import { SizeEnum as a } from "../../enums/SizeEnum.js";
import { Pencil as m, Trash2 as p } from "lucide-react";
const h = ({ item: n, onEdit: e, onDelete: s }) => /* @__PURE__ */ c("span", { className: "flex shrink-0 items-center gap-1", children: [
  /* @__PURE__ */ o(
    i,
    {
      variant: t.Icon,
      size: a.XXS,
      color: "warning",
      onClick: (r) => {
        r?.stopPropagation(), e?.(n);
      },
      children: /* @__PURE__ */ o(m, { size: 14 })
    }
  ),
  /* @__PURE__ */ o(
    i,
    {
      variant: t.Icon,
      size: a.XXS,
      color: "danger",
      onClick: (r) => {
        r?.stopPropagation(), s?.(n.id);
      },
      children: /* @__PURE__ */ o(p, { size: 14 })
    }
  )
] });
export {
  h as MenuV2Actions
};
