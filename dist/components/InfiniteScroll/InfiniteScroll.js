import { jsxs as s, jsx as e } from "react/jsx-runtime";
import { useInfiniteScroll as f } from "./useInfiniteScroll.js";
const d = ({ enabled: t = !0, onLoadMore: r, children: o, isFetchingNextPage: i = !1 }) => {
  const { sentinelRef: l, t: n } = f({
    enabled: t,
    onLoadMore: r
  });
  return /* @__PURE__ */ s("div", { style: { height: "80vh", overflowY: "auto" }, children: [
    o,
    /* @__PURE__ */ e("div", { ref: l, style: { height: "20px" } }),
    ";",
    i && /* @__PURE__ */ e("p", { children: n("load_more") })
  ] });
};
export {
  d as InfiniteScroll
};
