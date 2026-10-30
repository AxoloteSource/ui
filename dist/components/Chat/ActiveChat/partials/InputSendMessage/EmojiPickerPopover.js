import { jsxs as i, jsx as t } from "react/jsx-runtime";
import { EmojiPicker as o } from "frimousse";
import { Smile as v } from "lucide-react";
import { useState as b } from "react";
import { useTranslation as f } from "react-i18next";
import { Popover as h, PopoverTrigger as g, PopoverContent as j } from "../../../../ui/popover.js";
import { useRecentEmojis as N } from "./useRecentEmojis.js";
const z = ({ onSelect: l, onClose: c }) => {
  const { t: r, i18n: m } = f(), [d, p] = b(!1), { recentEmojis: a, addRecentEmoji: u } = N(), x = (m.language || "en").split("-")[0], s = ({ emoji: e }) => {
    l(e), u(e);
  };
  return /* @__PURE__ */ i(h, { open: d, onOpenChange: p, children: [
    /* @__PURE__ */ t(g, { asChild: !0, children: /* @__PURE__ */ t(
      "button",
      {
        type: "button",
        "aria-label": r("emojis", "Emojis"),
        className: "hover:text-primary flex size-8 shrink-0 items-center justify-center rounded-md text-[var(--text-muted)] transition-colors hover:bg-[var(--accent)] focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:outline-none",
        children: /* @__PURE__ */ t(v, { className: "size-5" })
      }
    ) }),
    /* @__PURE__ */ t(
      j,
      {
        side: "top",
        align: "start",
        sideOffset: 8,
        className: "w-[min(340px,calc(100vw-2rem))] overflow-hidden p-0",
        onCloseAutoFocus: (e) => {
          e.preventDefault(), c?.();
        },
        children: /* @__PURE__ */ i(
          o.Root,
          {
            locale: x,
            columns: 8,
            onEmojiSelect: s,
            className: "flex h-[min(420px,70vh)] w-full flex-col bg-[var(--popover)] text-[var(--text)]",
            children: [
              /* @__PURE__ */ t(
                o.Search,
                {
                  "aria-label": r("emoji_search", "Buscar emoji..."),
                  placeholder: r("emoji_search", "Buscar emoji..."),
                  className: "mx-2 mt-2 appearance-none rounded-md border border-[var(--border)] bg-[var(--input-background)] px-3 py-2 text-sm text-[var(--text)] outline-none placeholder:text-[var(--text-muted)] focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
                }
              ),
              a.length > 0 && /* @__PURE__ */ i("div", { className: "mx-2 mt-2 rounded-md bg-[var(--input-background)] px-2 py-1.5", children: [
                /* @__PURE__ */ t("p", { className: "px-1 pb-1 text-[11px] font-medium text-[var(--text-muted)]", children: r("emoji_recent", "Recientes") }),
                /* @__PURE__ */ t("div", { className: "flex flex-wrap gap-0.5", children: a.map((e) => /* @__PURE__ */ t(
                  "button",
                  {
                    type: "button",
                    "aria-label": e,
                    title: e,
                    onClick: () => s({ emoji: e }),
                    className: "flex size-8 items-center justify-center rounded-md text-lg transition-colors hover:bg-[var(--accent)]",
                    children: e
                  },
                  e
                )) })
              ] }),
              /* @__PURE__ */ i(o.Viewport, { className: "relative mt-1 flex-1 outline-hidden", children: [
                /* @__PURE__ */ t(o.Loading, { className: "absolute inset-0 flex items-center justify-center text-sm text-[var(--text-muted)]", children: r("emoji_loading", "Cargando emojis...") }),
                /* @__PURE__ */ t(o.Empty, { className: "absolute inset-0 flex items-center justify-center px-4 text-center text-sm text-[var(--text-muted)]", children: r("emoji_no_results", "No se encontraron emojis") }),
                /* @__PURE__ */ t(
                  o.List,
                  {
                    className: "pb-1.5 select-none",
                    components: {
                      CategoryHeader: ({ category: e, ...n }) => /* @__PURE__ */ t(
                        "div",
                        {
                          ...n,
                          className: "sticky top-0 z-10 bg-[var(--popover)] px-3 py-1.5 text-[11px] font-semibold tracking-wide text-[var(--text-muted)] uppercase",
                          children: e.label
                        }
                      ),
                      Row: ({ children: e, ...n }) => /* @__PURE__ */ t("div", { ...n, className: "scroll-my-1", children: e }),
                      Emoji: ({ emoji: e, ...n }) => /* @__PURE__ */ t(
                        "button",
                        {
                          ...n,
                          type: "button",
                          title: e.label,
                          className: "flex size-9 items-center justify-center rounded-md text-xl transition-colors hover:bg-[var(--accent)] data-[active]:bg-[var(--accent)]",
                          children: e.emoji
                        }
                      )
                    }
                  }
                )
              ] }),
              /* @__PURE__ */ i("div", { className: "flex items-center justify-between gap-2 border-t border-[var(--border)] px-3 py-2", children: [
                /* @__PURE__ */ t(o.ActiveEmoji, { children: ({ emoji: e }) => /* @__PURE__ */ t("span", { className: "truncate pr-2 text-xs text-[var(--text-muted)]", children: e ? `${e.emoji} ${e.label}` : r("emoji_select", "Selecciona un emoji") }) }),
                /* @__PURE__ */ t(
                  o.SkinToneSelector,
                  {
                    "aria-label": r("emoji_skin_tone", "Cambiar tono de piel"),
                    className: "flex size-8 shrink-0 items-center justify-center rounded-md text-lg transition-colors hover:bg-[var(--accent)]"
                  }
                )
              ] })
            ]
          }
        )
      }
    )
  ] });
};
export {
  z as EmojiPickerPopover
};
