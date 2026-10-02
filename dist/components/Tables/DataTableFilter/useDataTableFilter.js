import { useDataTable as x } from "../../../hooks/useDataTable.js";
import { useModal as B } from "../../../hooks/useModal.js";
import { debounce as C } from "@tanstack/pacer";
import { useState as w, useMemo as y, useEffect as O } from "react";
import { useTranslation as j } from "react-i18next";
const q = (o) => new URLSearchParams(window.location.search).get(o), z = (o, r) => {
  const e = new URL(window.location.href);
  e.searchParams.set(o, r), window.history.replaceState({}, "", e.toString());
}, G = (o) => {
  const r = new URL(window.location.href);
  r.searchParams.delete(o), window.history.replaceState({}, "", r.toString());
}, H = () => {
  const o = new URLSearchParams(window.location.search), r = [];
  let e = 0;
  for (; ; ) {
    const a = o.get(`filters[${e}][property]`);
    if (a === null)
      break;
    const l = o.get(`filters[${e}][value]`) ?? "", p = o.get(`filters[${e}][operator]`) ?? void 0;
    r.push({
      property: a,
      value: l,
      operator: p
    }), e++;
  }
  return r;
}, J = (o) => {
  const r = new URL(window.location.href);
  for (const e of [...r.searchParams.keys()])
    e.startsWith("filters[") && r.searchParams.delete(e);
  o.forEach((e, a) => {
    r.searchParams.set(`filters[${a}][property]`, e.property), r.searchParams.set(`filters[${a}][value]`, String(e.value)), e.operator && r.searchParams.set(`filters[${a}][operator]`, e.operator);
  }), window.history.replaceState({}, "", r.toString());
}, rr = (o) => {
  const {
    onClickNew: r,
    renderersMap: e,
    rowExpansion: a,
    service: l,
    children: p,
    filters: h,
    withoutFilters: g = !1,
    showNewButton: F = !0,
    payload: U = {},
    searchDebounceWait: S = 500
  } = o, { t: b } = j(), P = q("search") ?? "", [$, v] = w(P), [i, L] = w(P), [s, R] = w(() => H()), { isOpen: T, open: k, close: D } = B(!1), A = y(() => C((t) => L(t), { wait: S }), [S]), E = (t) => {
    v(t), A(t);
  };
  O(() => {
    i ? z("search", i) : G("search");
  }, [i]);
  const M = y(() => [...s], [s]), I = y(() => h.reduce((t, d) => {
    const n = d.property, f = s.find((c) => c.property === `${n}_from`), u = s.find((c) => c.property === `${n}_to`), m = s.find((c) => c.property === n);
    return f || u ? (t[n] = {
      from: f ? String(f.value) : void 0,
      to: u ? String(u.value) : void 0
    }, t) : m ? (t[n] = Array.isArray(d.initialValue) ? String(m.value).split("|") : m.value, t) : (t[n] = d.initialValue, t);
  }, {}), [h, s]), { dataTableProps: N, isLoading: W, refetch: _ } = x({
    service: l,
    payload: {
      ...U,
      filters: M,
      search: i
    },
    renderersMap: e
  });
  return {
    t: b,
    filters: h,
    isOpen: T,
    search: $,
    dataTableProps: N,
    isLoading: W,
    rowExpansion: a,
    children: p,
    withoutFilters: g,
    modalInitialValues: I,
    open: k,
    close: D,
    onFilter: (t) => {
      R(t.filters), J(t.filters), _();
    },
    setSearch: E,
    onClickNew: r,
    showNewButton: F
  };
};
export {
  rr as useDataTableFilter
};
