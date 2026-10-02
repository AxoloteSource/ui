import { jsxs as t, jsx as r } from "react/jsx-runtime";
import m from "../Buttons/Button.js";
import { ButtonTypeEnum as l } from "../Buttons/enums/buttonType.enum.js";
import { File as d, Trash2 as p } from "lucide-react";
const b = ({
  name: n,
  onClick: s,
  onDelete: a,
  loading: i = !1,
  deleteLabel: o = "Eliminar",
  className: c = ""
}) => {
  const e = !!s && !i;
  return /* @__PURE__ */ t("div", { className: `flex items-center justify-between rounded border p-3 ${c}`, children: [
    /* @__PURE__ */ t(
      "div",
      {
        className: `flex items-center gap-3 ${e ? "cursor-pointer" : ""}`,
        onClick: e ? s : void 0,
        "aria-disabled": !e,
        children: [
          /* @__PURE__ */ r(d, { size: 20 }),
          /* @__PURE__ */ r("span", { className: "max-w-[60ch] truncate", children: n })
        ]
      }
    ),
    a && /* @__PURE__ */ t(m, { className: "gap-2", type: l.Button, onClick: a, disabled: i, children: [
      /* @__PURE__ */ r(p, { size: 18 }),
      " ",
      o
    ] })
  ] });
};
export {
  b as DocumentAttachment,
  b as default
};
