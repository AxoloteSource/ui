import { jsxs as r, jsx as e } from "react/jsx-runtime";
import { Eye as n, Download as t, CircleX as g, TriangleAlert as f } from "lucide-react";
import { useDocumentModal as b } from "./useDocumentModal.js";
const N = ({ selectedFile: a, isOpen: o, close: i }) => {
  const { isPDF: c, isImage: m, fileDisplayName: l, fileExtension: s, iframeUrl: d, isMobile: h, handleImageError: u } = b({ selectedFile: a });
  if (!o || !a) return null;
  const x = () => h ? /* @__PURE__ */ e("div", { className: "bg-background flex h-full w-full items-center justify-center", children: /* @__PURE__ */ r("div", { className: "mx-auto max-w-sm p-6 text-center", children: [
    /* @__PURE__ */ e(n, { className: "mx-auto mb-4 h-16 w-16 text-blue-500 dark:text-blue-400" }),
    /* @__PURE__ */ e("h4", { className: "mb-2 text-lg font-medium text-gray-700 dark:text-gray-200", children: "Archivo listo para descargar" }),
    /* @__PURE__ */ r("p", { className: "mb-6 text-sm text-gray-500 dark:text-gray-400", children: [
      "Toca el botón para descargar tu archivo ",
      s
    ] }),
    /* @__PURE__ */ r(
      "a",
      {
        href: a.download_url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
        children: [
          /* @__PURE__ */ e(t, { className: "mr-2 h-5 w-5" }),
          "Descargar archivo"
        ]
      }
    )
  ] }) }) : c ? /* @__PURE__ */ e("div", { className: "flex h-full min-h-0 w-full bg-gray-100 dark:bg-gray-900", children: /* @__PURE__ */ e(
    "iframe",
    {
      src: d,
      className: "flex h-full w-full overflow-hidden border-0 break-words",
      title: `Vista previa de ${l}`,
      style: {
        minHeight: "500px",
        backgroundColor: "white",
        border: "none",
        display: "block"
      },
      sandbox: "allow-same-origin allow-scripts allow-popups allow-forms allow-downloads",
      allow: "fullscreen",
      loading: "eager"
    }
  ) }) : m ? /* @__PURE__ */ e("div", { className: "flex h-full w-full items-center justify-center bg-gray-50 p-4 dark:bg-gray-800", children: /* @__PURE__ */ e("img", { src: a.download_url, alt: l, className: "max-h-full max-w-full object-contain", onError: u }) }) : /* @__PURE__ */ e("div", { className: "bg-background flex h-full w-full items-center justify-center", children: /* @__PURE__ */ r("div", { className: "mx-auto max-w-sm p-6 text-center", children: [
    /* @__PURE__ */ e(f, { className: "mx-auto mb-4 h-16 w-16 text-yellow-500 dark:text-yellow-400" }),
    /* @__PURE__ */ e("h4", { className: "mb-2 text-lg font-medium text-gray-700 dark:text-gray-200", children: "Vista previa no disponible" }),
    /* @__PURE__ */ r("p", { className: "mb-6 text-sm text-gray-500 dark:text-gray-400", children: [
      "Este tipo de archivo (.",
      s,
      ") no se puede previsualizar"
    ] }),
    /* @__PURE__ */ r(
      "a",
      {
        href: a.download_url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
        children: [
          /* @__PURE__ */ e(t, { className: "mr-2 h-5 w-5" }),
          "Descargar archivo"
        ]
      }
    )
  ] }) });
  return /* @__PURE__ */ r("div", { className: "bg-opacity-75 fixed inset-0 z-[9999] bg-black p-2 sm:p-4", children: [
    /* @__PURE__ */ e("div", { className: "absolute inset-0", onClick: i }),
    /* @__PURE__ */ r("div", { className: "relative mx-auto flex h-full w-full max-w-full flex-col overflow-hidden rounded-lg bg-white sm:max-w-7xl", children: [
      /* @__PURE__ */ r("div", { className: "flex shrink-0 items-center justify-between gap-2 border-b border-gray-200 bg-white p-2 sm:gap-3 sm:p-4", children: [
        /* @__PURE__ */ r("div", { className: "flex min-w-0 flex-1 items-center space-x-2 overflow-hidden sm:space-x-3", children: [
          /* @__PURE__ */ e(n, { className: "h-4 w-4 shrink-0 text-blue-600 sm:h-5 sm:w-5" }),
          /* @__PURE__ */ r("div", { className: "min-w-0 flex-1 overflow-hidden", children: [
            /* @__PURE__ */ e("h3", { className: "text-xs leading-tight font-medium break-words text-gray-900 sm:text-sm", title: l, children: l }),
            /* @__PURE__ */ r("p", { className: "truncate text-xs text-gray-500", children: [
              "Archivo .",
              s
            ] })
          ] })
        ] }),
        /* @__PURE__ */ r("div", { className: "flex shrink-0 items-center space-x-1", children: [
          /* @__PURE__ */ r(
            "a",
            {
              href: a.download_url,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "hidden items-center rounded-md bg-blue-600 px-2 py-1.5 text-xs text-white transition-colors hover:bg-blue-700 sm:flex",
              title: "Descargar archivo",
              children: [
                /* @__PURE__ */ e(t, { className: "mr-1 h-3 w-3" }),
                /* @__PURE__ */ e("span", { children: "Descargar" })
              ]
            }
          ),
          /* @__PURE__ */ e(
            "a",
            {
              href: a.download_url,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex h-7 w-7 items-center justify-center rounded-md bg-blue-600 text-white transition-colors hover:bg-blue-700 sm:hidden",
              title: "Descargar archivo",
              children: /* @__PURE__ */ e(t, { className: "h-3 w-3" })
            }
          ),
          /* @__PURE__ */ e(
            "button",
            {
              onClick: i,
              className: "flex h-7 w-7 items-center justify-center rounded-md text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 sm:h-8 sm:w-8",
              title: "Cerrar",
              children: /* @__PURE__ */ e(g, { className: "h-4 w-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ e("div", { className: "relative min-h-0 flex-1 overflow-hidden", children: x() })
    ] })
  ] });
};
export {
  N as DocumentModal
};
