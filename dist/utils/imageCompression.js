import a from "browser-image-compression";
const m = {
  maxSizeMB: 1,
  maxWidthOrHeight: 1920,
  useWebWorker: !0
}, s = ["image/jpeg", "image/png", "image/gif", "image/webp"], n = async (e, r = {}) => {
  if (!s.includes(e.type))
    return e;
  try {
    return await a(e, { ...m, ...r });
  } catch {
    return e;
  }
}, i = async (e, r) => Promise.all(e.map((t) => n(t, r)));
export {
  n as compressImage,
  i as compressImages
};
