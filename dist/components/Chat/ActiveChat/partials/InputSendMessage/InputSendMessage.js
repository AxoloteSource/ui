import { jsx as e } from "react/jsx-runtime";
import { TextAreaSendMessage as p } from "../../../../Form/TextArea/TextAreaSendMessage.js";
import { SendHorizontal as d } from "lucide-react";
import { useInputSendMessage as u } from "./useInputSendMessage.js";
const h = ({
  receiverId: l,
  scrollToBottom: r,
  handleAddMessage: n,
  sendMessage: o
}) => {
  const { setMessage: m, handleSendMessage: t, t: i, message: a, error: c } = u({ receiverId: l, scrollToBottom: r, handleAddMessage: n, sendMessage: o });
  return /* @__PURE__ */ e("div", { className: "absolute bottom-0 left-0 w-full p-4", children: /* @__PURE__ */ e("div", { className: "w-full items-center space-x-3 sm:flex rtl:space-x-reverse", children: /* @__PURE__ */ e("div", { className: "relative flex-1", children: /* @__PURE__ */ e(
    p,
    {
      error: c,
      name: "message",
      value: a,
      inputCallback: (s) => m(s.target.value),
      placeholder: `${i("type_message")} ...`,
      IconComponent: () => /* @__PURE__ */ e(d, { onClick: () => a !== "" && t() }),
      inputKeyUpCallback: (s) => s.key === "Enter" && a !== "" && !s.shiftKey && t()
    }
  ) }) }) });
};
export {
  h as InputSendMessage
};
