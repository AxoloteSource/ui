import { jsxs as a, jsx as e } from "react/jsx-runtime";
import { Divider as w } from "../../Divider/Divider.js";
import { usePerfectScroll as _ } from "../../../hooks/usePerfectScroll.js";
import { Loader as A } from "lucide-react";
import L from "react-perfect-scrollbar";
import { ChatUserCard as R } from "../ChatPanel/ChatItem/ChatUserCard.js";
import { SingleMessage as Y } from "../SingleMessage/SingleMessage.js";
import { ChatMessage as l } from "./partials/ChatMessage/ChatMessage.js";
import { InputSendMessage as $ } from "./partials/InputSendMessage/InputSendMessage.js";
import { useActiveChat as j } from "./useActiveChat.js";
const z = ({
  handleOpenMenu: c,
  messages: m,
  scrollMessageListProps: i,
  titleUserCard: n,
  subtitleUserCard: h,
  receiverId: p,
  selectedChat: k,
  sendMessage: f,
  readOnly: o = !1
}) => {
  const { hasNextPage: d, isFetchingNextPage: g, fetchNextPage: u } = i, { handleScrollY: x, scrollElRef: v, onYReachStart: N, showNoMessages: S, showLoaderMessages: b, t: r, scrollToBottom: t } = _({
    hasNextPage: d,
    isFetchingNextPage: g,
    fetchNextPage: u
  }), { messageList: M, handleAddMessage: C } = j({ messages: m, scrollToBottom: t });
  return /* @__PURE__ */ a("div", { className: "relative h-full", children: [
    /* @__PURE__ */ e(R, { handleOpenMenu: c, showMenu: !0, className: "p-4", title: `${n}`, subtitle: `${h}` }),
    /* @__PURE__ */ e(w, {}),
    /* @__PURE__ */ e(
      L,
      {
        options: { suppressScrollX: !0, wheelPropagation: !1 },
        className: "scrollbar-container chat-conversation-box ps relative h-full sm:h-[calc(100vh_-_300px)]",
        containerRef: (s) => v.current = s,
        onScrollY: x,
        onYReachStart: N,
        children: /* @__PURE__ */ a("div", { className: `min-h-[400px] space-y-5 p-3 sm:min-h-[300px] sm:pb-0 ${o ? "" : "pb-[68px]"}`, children: [
          b && /* @__PURE__ */ e(l, { message: r("loading_messages"), children: /* @__PURE__ */ e(A, {}) }),
          S && /* @__PURE__ */ e(l, { message: r("no_messages") }),
          /* @__PURE__ */ e("div", { className: "m-3 mt-0 block", children: M.map((s, P) => /* @__PURE__ */ e(Y, { ...s }, P)) })
        ] })
      }
    ),
    !o && /* @__PURE__ */ e($, { receiverId: p, handleAddMessage: C, scrollToBottom: t, sendMessage: f })
  ] });
};
export {
  z as ActiveChat
};
