import { useState as l, useCallback as u } from "react";
const s = "axolotesource:recent-emojis", c = 16, d = () => {
  if (typeof window > "u")
    return [];
  try {
    const e = window.localStorage.getItem(s), t = e ? JSON.parse(e) : [];
    return Array.isArray(t) ? t.filter((r) => typeof r == "string").slice(0, c) : [];
  } catch {
    return [];
  }
}, f = () => {
  const [e, t] = l(d), r = u((o) => {
    t((i) => {
      const n = [o, ...i.filter((a) => a !== o)].slice(0, c);
      try {
        window.localStorage.setItem(s, JSON.stringify(n));
      } catch {
      }
      return n;
    });
  }, []);
  return { recentEmojis: e, addRecentEmoji: r };
};
export {
  f as useRecentEmojis
};
