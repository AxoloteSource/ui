import { jsx as r } from "react/jsx-runtime";
import { cn as t } from "../../lib/utils.js";
function a({ className: e, ...o }) {
  return /* @__PURE__ */ r(
    "div",
    {
      "data-slot": "skeleton",
      className: t("bg-primary/10 animate-pulse rounded-md", e),
      ...o
    }
  );
}
export {
  a as Skeleton
};
