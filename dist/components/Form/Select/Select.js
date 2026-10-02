import { jsx as t } from "react/jsx-runtime";
import { WrapInput as k } from "../WrapInput.js";
import { Field as f } from "formik";
import w, { components as v } from "react-select";
import { useInputSelect as I } from "./useInputSelect.js";
const y = (a) => /* @__PURE__ */ t(v.DropdownIndicator, { ...a, children: /* @__PURE__ */ t("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-blue-500 border-t-transparent dark:border-blue-400" }) }), C = () => null, M = (a) => {
  const {
    label: s = "",
    name: r,
    formik: n,
    disabled: u = !1,
    options: d = [],
    isMulti: i = !1,
    onChange: c,
    onInputChange: p,
    className: g = "",
    isSearchable: m = !0,
    filterOption: o = null,
    isClearable: b = !0,
    isLoading: l = !0
  } = a, { selectedValue: h, handleOnChange: x } = I({
    name: r,
    formik: n,
    options: d,
    isMulti: i,
    onChange: c
  });
  return /* @__PURE__ */ t(k, { name: r, formik: n, label: s, className: g, children: /* @__PURE__ */ t(f, { disabled: u, name: r, id: r, children: () => /* @__PURE__ */ t(
    w,
    {
      value: h,
      options: d,
      isSearchable: m,
      onChange: x,
      onInputChange: p,
      isMulti: i,
      isClearable: b,
      isLoading: l,
      loadingMessage: () => "Cargando...",
      components: l ? {
        DropdownIndicator: y,
        LoadingIndicator: C
      } : void 0,
      filterOption: o !== null ? typeof o == "function" ? o : () => o : void 0,
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
  M as default
};
