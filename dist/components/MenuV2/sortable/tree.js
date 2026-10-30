const g = (n, t = null, c = 0) => n.flatMap((r) => [{ id: r.id, parentId: t, depth: c, item: r }, ...g(r.children ?? [], r.id, c + 1)]), E = (n) => {
  const t = /* @__PURE__ */ new Map();
  n.forEach(({ item: r }) => {
    t.set(r.id, { ...r, parent_id: null, children: [] });
  });
  const c = [];
  return n.forEach(({ id: r, parentId: a }) => {
    const e = t.get(r);
    if (!e)
      return;
    const o = a ? t.get(a) : void 0;
    if (o) {
      e.parent_id = o.id, o.children.push(e);
      return;
    }
    e.parent_id = null, c.push(e);
  }), c;
}, P = (n, t) => {
  const c = new Set(t);
  return n.filter((r) => r.parentId && c.has(r.parentId) ? (r.item.children?.length && c.add(r.id), !1) : !0);
}, v = (n, t) => Math.round(n / t), D = (n) => n ? n.item.type === "link" ? n.depth : n.depth + 1 : 0, M = (n) => n?.depth ?? 0, b = (n, t, c, r, a) => {
  const e = n.findIndex(({ id: p }) => p === c), o = n.findIndex(({ id: p }) => p === t), I = n[o], h = w(n, o, e), s = h[e - 1], u = h[e + 1], x = I.depth + v(r, a), l = D(s), f = M(u);
  let i = x;
  return x >= l ? i = l : x < f && (i = f), { depth: i, maxDepth: l, minDepth: f, parentId: i === 0 || !s ? null : i === s.depth ? s.parentId : i > s.depth ? s.id : h.slice(0, e).reverse().find((p) => p.depth === i)?.parentId ?? null };
}, O = (n, t, c, r, a) => {
  const e = /* @__PURE__ */ new Set([t]);
  let o = !0;
  for (; o; )
    o = !1, n.forEach((d) => {
      d.parentId && e.has(d.parentId) && !e.has(d.id) && (e.add(d.id), o = !0);
    });
  const I = n.find(({ id: d }) => d === t);
  if (!I)
    return n;
  const h = n.findIndex(({ id: d }) => d === t), s = n.findIndex(({ id: d }) => d === c);
  if (s === -1)
    return n;
  const u = n.filter(({ id: d }) => !e.has(d)), l = u.findIndex(({ id: d }) => d === c) + (h < s ? 1 : 0), f = n.filter(({ id: d }) => e.has(d) && d !== t), i = { ...I, parentId: r, depth: a };
  return [...u.slice(0, l), i, ...f, ...u.slice(l)];
}, w = (n, t, c) => {
  const r = t < 0 ? n.length + t : t, a = c < 0 ? n.length + c : c, e = [...n], [o] = e.splice(r, 1);
  return o && e.splice(a, 0, o), e;
};
export {
  E as buildTree,
  g as flattenTree,
  b as getProjection,
  O as moveItem,
  P as removeChildrenOf
};
