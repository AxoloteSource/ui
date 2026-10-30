import { jsx as t } from "react/jsx-runtime";
import { SendHorizontal as g } from "lucide-react";
import { TextAreaSendMessage as v } from "../../../../Form/TextArea/TextAreaSendMessage.js";
import { EmojiPickerPopover as x } from "./EmojiPickerPopover.js";
import { useInputSendMessage as k } from "./useInputSendMessage.js";
const M = ({
  receiverId: l,
  scrollToBottom: n,
  handleAddMessage: o,
  sendMessage: i
}) => {
  const { setMessage: m, handleSendMessage: s, insertEmoji: c, rememberSelection: r, focusTextarea: p, textareaRef: f, t: u, message: a, error: d } = k({
    receiverId: l,
    scrollToBottom: n,
    handleAddMessage: o,
    sendMessage: i
  });
  return /* @__PURE__ */ t("div", { className: "absolute bottom-0 left-0 w-full p-4", children: /* @__PURE__ */ t("div", { className: "w-full items-center space-x-3 sm:flex rtl:space-x-reverse", children: /* @__PURE__ */ t("div", { className: "relative flex-1", children: /* @__PURE__ */ t(
    v,
    {
      error: d,
      name: "message",
      value: a,
      inputRef: f,
      inputCallback: (e) => {
        r(e), m(e.target.value);
      },
      placeholder: `${u("type_message")} ...`,
      startAdornment: /* @__PURE__ */ t(x, { onSelect: c, onClose: p }),
      IconComponent: () => /* @__PURE__ */ t(g, { className: "ml-2 shrink-0 cursor-pointer", onClick: () => a !== "" && s() }),
      inputKeyUpCallback: (e) => {
        r(e);
      },
      inputKeyDownCallback: (e) => {
        e.key === "Enter" && !e.shiftKey && (e.preventDefault(), a !== "" && s());
      },
      inputSelectCallback: r
    }
  ) }) }) });
};
export {
  M as InputSendMessage
};
