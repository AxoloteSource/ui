import { jsx as s } from "react/jsx-runtime";
import { FileImage as n, FileText as l, FileSpreadsheet as c, FileVideo as a, FileAudio as t, Archive as o, FileCode as f, File as m } from "lucide-react";
const u = (r) => {
  const i = r.split(".").pop()?.toLowerCase(), e = { size: 20, className: "flex-shrink-0" };
  return ["jpg", "jpeg", "png", "gif", "bmp", "svg", "webp", "ico"].includes(i || "") ? /* @__PURE__ */ s(n, { ...e, className: "flex-shrink-0" }) : ["pdf"].includes(i || "") ? /* @__PURE__ */ s(l, { ...e, className: "flex-shrink-0" }) : ["doc", "docx", "txt", "rtf", "odt"].includes(i || "") ? /* @__PURE__ */ s(l, { ...e, className: "flex-shrink-0" }) : ["xls", "xlsx", "csv", "ods"].includes(i || "") ? /* @__PURE__ */ s(c, { ...e, className: "flex-shrink-0" }) : ["mp4", "avi", "mov", "wmv", "flv", "mkv", "webm"].includes(i || "") ? /* @__PURE__ */ s(a, { ...e, className: "flex-shrink-0" }) : ["mp3", "wav", "ogg", "flac", "aac", "m4a"].includes(i || "") ? /* @__PURE__ */ s(t, { ...e, className: "flex-shrink-0" }) : ["zip", "rar", "7z", "tar", "gz", "bz2"].includes(i || "") ? /* @__PURE__ */ s(o, { ...e, className: "flex-shrink-0" }) : ["js", "ts", "jsx", "tsx", "html", "css", "json", "xml", "php", "py", "java", "cpp", "c", "h"].includes(i || "") ? /* @__PURE__ */ s(f, { ...e, className: "flex-shrink-0" }) : /* @__PURE__ */ s(m, { ...e });
};
export {
  u as getFileIcon
};
