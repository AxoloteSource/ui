import { useIsMobile as f } from "../../../hooks/useIsMobile.js";
import { useMemo as p } from "react";
const v = ({ selectedFile: e }) => {
  const s = f();
  return {
    ...p(() => {
      if (!e)
        return {
          isPDF: !1,
          isImage: !1,
          isPreviewable: !1,
          fileDisplayName: "",
          fileExtension: "",
          iframeUrl: ""
        };
      const r = e.extension.toLowerCase(), n = e.mime_type, o = r === "pdf" || n?.includes("pdf") || !1, t = ["jpg", "jpeg", "png", "gif", "webp", "svg"].includes(r) || n?.startsWith("image/") || !1, a = o || t, i = e.name, l = e.extension.toUpperCase(), m = `${e.download_url}#view=FitH&toolbar=1`;
      return {
        isPDF: o,
        isImage: t,
        isPreviewable: a,
        fileDisplayName: i,
        fileExtension: l,
        iframeUrl: m
      };
    }, [e]),
    isMobile: s,
    handleImageError: (r) => {
      if (!e) return;
      const o = r.target.closest("div");
      o && (o.innerHTML = `
        <div class="text-center p-6">
          <div class="text-4xl mb-4">⚠️</div>
          <p class="text-gray-600 mb-4">No se pudo cargar la imagen</p>
          <a href="${e.download_url}"
             target="_blank"
             rel="noopener noreferrer"
             class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            Descargar archivo
          </a>
        </div>
      `);
    }
  };
};
export {
  v as useDocumentModal
};
