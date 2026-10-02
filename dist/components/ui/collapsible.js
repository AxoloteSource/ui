import { jsx as o } from "react/jsx-runtime";
import * as t from "@radix-ui/react-collapsible";
function i({
  ...l
}) {
  return /* @__PURE__ */ o(t.Root, { "data-slot": "collapsible", ...l });
}
function r({
  ...l
}) {
  return /* @__PURE__ */ o(
    t.CollapsibleTrigger,
    {
      "data-slot": "collapsible-trigger",
      ...l
    }
  );
}
function a({
  ...l
}) {
  return /* @__PURE__ */ o(
    t.CollapsibleContent,
    {
      "data-slot": "collapsible-content",
      ...l
    }
  );
}
export {
  i as Collapsible,
  a as CollapsibleContent,
  r as CollapsibleTrigger
};
