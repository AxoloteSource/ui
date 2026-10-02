import { jsxs as l, Fragment as r, jsx as e } from "react/jsx-runtime";
import v from "../../Buttons/Button.js";
import { ButtonTypeEnum as x } from "../../Buttons/enums/buttonType.enum.js";
import { ModalFilter as C } from "../../Filters/ModalFilter/ModalFilter.js";
import { InputWithIcon as T } from "../../Form/Input/inputWithIcon.js";
import { DataTable as k } from "../DataTable/DataTable.js";
import { useDataTableFilter as y } from "./useDataTableFilter.js";
import { Filter as I } from "lucide-react";
const M = (n) => {
  const {
    t: a,
    filters: s,
    isOpen: c,
    search: m,
    dataTableProps: p,
    isLoading: d,
    rowExpansion: u,
    children: t,
    open: h,
    close: f,
    onFilter: b,
    setSearch: w,
    onClickNew: F,
    withoutFilters: g,
    showNewButton: i,
    modalInitialValues: N
  } = y(n);
  return /* @__PURE__ */ l(r, { children: [
    /* @__PURE__ */ l("div", { className: "grid grid-cols-12 gap-2 pb-5", children: [
      /* @__PURE__ */ e("div", { className: i ? "col-span-10" : "col-span-12", children: /* @__PURE__ */ e(
        T,
        {
          name: "search",
          value: m,
          placeholder: `${a("search")}`,
          inputCallback: (o) => w(o.target.value),
          ...!g && { IconComponent: () => /* @__PURE__ */ e(I, { onClick: h }) }
        }
      ) }),
      i && /* @__PURE__ */ e("div", { className: "col-span-2 flex justify-end", children: /* @__PURE__ */ e(v, { className: "w-full", onClick: F, type: x.Submit, children: a("new") }) })
    ] }),
    /* @__PURE__ */ e(k, { datatablePros: p, isLoading: d, rowExpansion: u }),
    /* @__PURE__ */ e(C, { close: f, isOpen: c, filters: s, initialValues: N, onSubmit: b, children: (o) => /* @__PURE__ */ e(r, { children: typeof t == "function" ? t(o) : t }) })
  ] });
};
export {
  M as DataTableFilter
};
