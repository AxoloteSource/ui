import { jsxs as t, jsx as e } from "react/jsx-runtime";
import { Divider as P } from "../../Divider/Divider.js";
import { usePerfectScroll as w } from "../../../hooks/usePerfectScroll.js";
import { Loader as _ } from "lucide-react";
import A from "react-perfect-scrollbar";
import { ChatUserCard as L } from "../ChatPanel/ChatItem/ChatUserCard.js";
import { SingleMessage as R } from "../SingleMessage/SingleMessage.js";
import { ChatMessage as a } from "./partials/ChatMessage/ChatMessage.js";
import { InputSendMessage as Y } from "./partials/InputSendMessage/InputSendMessage.js";
import { useActiveChat as j } from "./useActiveChat.js";
const q = ({
  handleOpenMenu: l,
  messages: c,
  scrollMessageListProps: m,
  titleUserCard: i,
  subtitleUserCard: n,
  receiverId: h,
  selectedChat: $,
  sendMessage: p
}) => {
  const { hasNextPage: d, isFetchingNextPage: f, fetchNextPage: g } = m, { handleScrollY: u, scrollElRef: x, onYReachStart: v, showNoMessages: N, showLoaderMessages: S, t: r, scrollToBottom: o } = w({
    hasNextPage: d,
    isFetchingNextPage: f,
    fetchNextPage: g
  }), { messageList: b, handleAddMessage: M } = j({ messages: c, scrollToBottom: o });
  return /* @__PURE__ */ t("div", { className: "relative h-full", children: [
    /* @__PURE__ */ e(L, { handleOpenMenu: l, showMenu: !0, className: "p-4", title: `${i}`, subtitle: `${n}` }),
    /* @__PURE__ */ e(P, {}),
    /* @__PURE__ */ e(
      A,
      {
        options: { suppressScrollX: !0, wheelPropagation: !1 },
        className: "scrollbar-container chat-conversation-box ps relative h-full sm:h-[calc(100vh_-_300px)]",
        containerRef: (s) => x.current = s,
        onScrollY: u,
        onYReachStart: v,
        children: /* @__PURE__ */ t("div", { className: "min-h-[400px] space-y-5 p-3 pb-[68px] sm:min-h-[300px] sm:pb-0", children: [
          S && /* @__PURE__ */ e(a, { message: r("loading_messages"), children: /* @__PURE__ */ e(_, {}) }),
          N && /* @__PURE__ */ e(a, { message: r("no_messages") }),
          /* @__PURE__ */ e("div", { className: "m-3 mt-0 block", children: b.map((s, C) => /* @__PURE__ */ e(R, { ...s }, C)) })
        ] })
      }
    ),
    /* @__PURE__ */ e(Y, { receiverId: h, handleAddMessage: M, scrollToBottom: o, sendMessage: p })
  ] });
};
export {
  q as ActiveChat
};
