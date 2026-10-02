import { useRef as i, useEffect as u } from "react";
import { useTranslation as f } from "react-i18next";
const p = ({ enabled: e = !0, onLoadMore: t }) => {
  const r = i(null), { t: s } = f();
  return u(() => {
    if (!e || !r.current) return;
    const n = new IntersectionObserver(
      (o) => {
        const [c] = o;
        c.isIntersecting && e && t();
      },
      { threshold: 1 }
    );
    return n.observe(r.current), () => {
      n.disconnect();
    };
  }, [e, t]), { sentinelRef: r, t: s };
};
export {
  p as useInfiniteScroll
};
