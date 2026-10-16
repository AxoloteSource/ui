import { jsx as t } from "react/jsx-runtime";
import { WrapInput as I } from "../WrapInput.js";
import { Field as v } from "formik";
import y, { components as S } from "react-select";
import { useInputSelect as C } from "./useInputSelect.js";
const O = (r) => /* @__PURE__ */ t(S.DropdownIndicator, { ...r, children: /* @__PURE__ */ t("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-blue-500 border-t-transparent dark:border-blue-400" }) }), L = () => null, z = (r) => {
  const {
    label: p = "",
    name: o,
    formik: a,
    disabled: c = !1,
    options: d = [],
    isMulti: i = !1,
    onChange: g,
    onInputChange: m,
    className: b = "",
    isSearchable: h = !0,
    filterOption: n = null,
    isClearable: x = !0,
    isLoading: l = !0,
    OptionComponent: s,
    SingleValueComponent: u,
    noOptionsMessage: k = "Sin opciones"
  } = r, { selectedValue: f, handleOnChange: w } = C({
    name: o,
    formik: a,
    options: d,
    isMulti: i,
    onChange: g
  });
  return /* @__PURE__ */ t(I, { name: o, formik: a, label: p, className: b, children: /* @__PURE__ */ t(v, { disabled: c, name: o, id: o, children: () => /* @__PURE__ */ t(
    y,
    {
      value: f,
      options: d,
      isSearchable: h,
      onChange: w,
      onInputChange: m,
      isMulti: i,
      isClearable: x,
      isLoading: l,
      loadingMessage: () => "Cargando...",
      noOptionsMessage: () => k,
      components: {
        ...l ? { DropdownIndicator: O, LoadingIndicator: L } : {},
        ...s ? { Option: s } : {},
        ...u ? { SingleValue: u } : {}
      },
      filterOption: n !== null ? typeof n == "function" ? n : () => n : void 0,
      menuPortalTarget: document.body,
      styles: {
        menuPortal: (e) => ({ ...e, zIndex: 9999 })
      },
      classNames: {
        control: (e) => `form-input p-0! border-[var(--border)]! bg-[var(--input-background)]! shadow-[var(--input-shadow)] ${e.isFocused ? " border-[var(--primary)]! shadow-none!" : ""}`,
        menu: () => "mt-1! p-1! bg-[var(--input-background)]! rounded-lg! shadow-lg! z-[9999]!",
        option: (e) => `cursor-pointer! select-none! rounded-md! p-2! ${e.isSelected ? "bg-blue-500! text-white!" : e.isFocused ? "bg-[var(--background)]! text-[var(--text)]!" : "text-black! dark:text-gray-200!"}`,
        singleValue: () => "text-[var(--text)]!",
        placeholder: () => "text-gray-400! dark:text-white-dark",
        dropdownIndicator: () => "text-gray-400! dark:text-white-dark",
        indicatorSeparator: () => "hidden!",
        menuList: () => "p-2!",
        input: () => "text-black! dark:text-white-dark!",
        loadingIndicator: () => "text-blue-500! dark:text-blue-400!",
        loadingMessage: () => "text-gray-600! dark:text-gray-300! p-2!"
      }
    }
  ) }) });
};
export {
  z as default
};
